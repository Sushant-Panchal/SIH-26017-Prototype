"""
Bhoomi Sakha - Production Real-Time Event Bus (Server-Sent Events)
Provides authenticated, targeted, push-based delivery for case lifecycle updates,
document actions, and user notifications without external infrastructure dependencies.
Follows zero-trust security: strict token authentication, audience filtering,
and complete isolation of citizen events and internal officer notes.
"""

import asyncio
import json
import logging
import uuid
from datetime import datetime, timezone
from typing import Dict, Set, Optional, List, Any, Tuple

from fastapi import APIRouter, Depends, HTTPException, Query, Request, status
from fastapi.responses import StreamingResponse
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials

from .auth import decode_access_token, security_scheme

logger = logging.getLogger("bhoomi_sakha.realtime")

router = APIRouter(prefix="/api/realtime", tags=["realtime"])


def _json_serial(obj: Any) -> Any:
    """JSON serializer for dates and complex objects."""
    if isinstance(obj, datetime):
        return obj.isoformat()
    if hasattr(obj, "__dict__"):
        return obj.__dict__
    return str(obj)


class RealtimeHub:
    """
    In-memory pub/sub event dispatcher managing authenticated SSE connections.
    Enforces role-based and user-targeted delivery.
    """

    def __init__(self):
        # Maps user_id -> Set of active asyncio.Queue instances (supports multi-tab)
        self._user_queues: Dict[str, Set[asyncio.Queue]] = {}
        # Maps queue -> metadata dict {user_id, role, connection_id}
        self._queue_meta: Dict[asyncio.Queue, Dict[str, Any]] = {}
        self._lock = asyncio.Lock()

    async def register(self, user_id: str, role: str) -> Tuple[asyncio.Queue, str]:
        """Registers a newly authenticated client connection."""
        queue: asyncio.Queue = asyncio.Queue(maxsize=100)
        conn_id = f"{user_id}_{uuid.uuid4().hex[:8]}"

        async with self._lock:
            if user_id not in self._user_queues:
                self._user_queues[user_id] = set()
            self._user_queues[user_id].add(queue)
            self._queue_meta[queue] = {
                "user_id": user_id,
                "role": role,
                "connection_id": conn_id,
            }

        logger.info(f"[RealTime] Connected user={user_id} role={role} conn_id={conn_id}")
        return queue, conn_id

    async def unregister(self, user_id: str, queue: asyncio.Queue, connection_id: str) -> None:
        """Unregisters an active connection and frees resources."""
        async with self._lock:
            if user_id in self._user_queues:
                self._user_queues[user_id].discard(queue)
                if not self._user_queues[user_id]:
                    del self._user_queues[user_id]
            self._queue_meta.pop(queue, None)

        logger.info(f"[RealTime] Disconnected user={user_id} conn_id={connection_id}")

    async def publish_event(
        self,
        event_type: str,
        data: Dict[str, Any],
        target_user_ids: Optional[List[str]] = None,
        target_roles: Optional[List[str]] = None,
        case_id: Optional[str] = None,
        is_internal: bool = False,
        exclude_user_id: Optional[str] = None,
    ) -> int:
        """
        Publishes an event to authorized connected clients.
        Strictly enforces:
        1. If is_internal is True, ONLY officers/admins receive the event. Citizens NEVER receive it.
        2. If target_user_ids is provided, citizens receive it only if their user_id is listed.
        3. If target_roles is provided, users with matching roles receive it.
        Returns the count of client queues that received the event.
        """
        # Security Guard: internal officer notes must never reach citizens
        if is_internal:
            target_roles = ["officer", "super_admin"]
            target_user_ids = None

        payload = {
            "event": event_type,
            "case_id": case_id,
            "data": data,
            "timestamp": datetime.now(timezone.utc).isoformat(),
        }
        json_data = json.dumps(payload, default=_json_serial)
        sse_message = f"event: {event_type}\ndata: {json_data}\n\n"

        delivered_count = 0
        async with self._lock:
            items = list(self._queue_meta.items())

        for queue, meta in items:
            user_id = meta["user_id"]
            role = meta["role"]

            if exclude_user_id and user_id == exclude_user_id:
                continue

            # Check recipient authorization
            is_recipient = False

            if target_roles and role in target_roles:
                is_recipient = True
            elif target_user_ids and user_id in target_user_ids:
                is_recipient = True
            elif not target_roles and not target_user_ids:
                # System-wide announcement (only non-sensitive events)
                if not is_internal:
                    is_recipient = True

            if is_recipient:
                try:
                    queue.put_nowait(sse_message)
                    delivered_count += 1
                except asyncio.QueueFull:
                    logger.warning(f"[RealTime] Queue full for user={user_id}, dropping message")

        return delivered_count

    def get_connected_count(self) -> int:
        """Total active connected client queues across all users."""
        return len(self._queue_meta)

    def get_user_connections(self, user_id: str) -> int:
        """Number of active connections for a given user_id."""
        return len(self._user_queues.get(user_id, set()))

    def clear(self) -> None:
        """Clears all active connections (used in test suite reset)."""
        self._user_queues.clear()
        self._queue_meta.clear()


# Global Singleton Hub
realtime_hub = RealtimeHub()


# ============================================================
# REAL-TIME SSE ENDPOINTS
# ============================================================

@router.get("/events")
async def sse_events(
    request: Request,
    token: Optional[str] = Query(None, description="JWT Bearer token passed via query param for EventSource"),
    credentials: Optional[HTTPAuthorizationCredentials] = Depends(security_scheme),
):
    """
    Authenticated Server-Sent Events (SSE) stream.
    Validates JWT identity before opening stream.
    Rejects anonymous or expired access tokens with HTTP 401.
    Maintains heartbeat to prevent proxy timeouts.
    """
    auth_token = token or (credentials.credentials if credentials else None)
    if not auth_token:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Authentication required for real-time events stream.",
            headers={"WWW-Authenticate": "Bearer"},
        )

    try:
        token_payload = decode_access_token(auth_token)
    except HTTPException:
        raise
    except Exception as err:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail=f"Invalid real-time authentication token: {err}",
            headers={"WWW-Authenticate": "Bearer"},
        )

    user_id = token_payload.get("user_id") or token_payload.get("sub")
    role = token_payload.get("role", "citizen")
    if not user_id:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Token missing user identity.",
        )

    async def event_generator():
        queue, connection_id = await realtime_hub.register(user_id=user_id, role=role)
        try:
            # Send initial connected handshake event
            handshake = {
                "event": "connected",
                "user_id": user_id,
                "role": role,
                "connection_id": connection_id,
                "connected_at": datetime.now(timezone.utc).isoformat(),
            }
            yield f"event: connected\ndata: {json.dumps(handshake)}\n\n"

            while True:
                # Check for client disconnect
                if await request.is_disconnected():
                    break

                try:
                    # Wait for message with 15-second heartbeat window
                    message = await asyncio.wait_for(queue.get(), timeout=15.0)
                    yield message
                except asyncio.TimeoutError:
                    # Heartbeat comment to keep HTTP/2 & reverse proxies alive
                    hb_time = datetime.now(timezone.utc).isoformat()
                    yield f": keep-alive {hb_time}\n\n"

        except (asyncio.CancelledError, GeneratorExit):
            pass
        finally:
            await realtime_hub.unregister(user_id=user_id, queue=queue, connection_id=connection_id)

    return StreamingResponse(
        event_generator(),
        media_type="text/event-stream",
        headers={
            "Cache-Control": "no-cache, no-transform",
            "Connection": "keep-alive",
            "X-Accel-Buffering": "no",
        },
    )


@router.get("/status")
async def realtime_status(
    token: Optional[str] = Query(None),
    credentials: Optional[HTTPAuthorizationCredentials] = Depends(security_scheme),
):
    """Returns active real-time connection status for telemetry and testing."""
    auth_token = token or (credentials.credentials if credentials else None)
    if not auth_token:
        raise HTTPException(status_code=401, detail="Authentication required.")

    payload = decode_access_token(auth_token)
    user_id = payload.get("user_id") or payload.get("sub")

    return {
        "status": "active",
        "total_connections": realtime_hub.get_connected_count(),
        "user_connections": realtime_hub.get_user_connections(user_id) if user_id else 0,
    }
