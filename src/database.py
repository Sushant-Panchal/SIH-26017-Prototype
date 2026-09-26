"""
Bhoomi Sakha - Database Integration Layer
Supports MongoDB persistence via Motor with graceful in-memory fallback
for isolated testing and local environments without an external MongoDB daemon.
"""

import os
import re
import copy
import logging
from typing import Any, Dict, List, Optional
from datetime import datetime

logger = logging.getLogger("bhoomi_sakha.database")

# Environment configuration
MONGODB_URI = os.getenv("MONGODB_URI", "")
MONGODB_DATABASE = os.getenv("MONGODB_DATABASE", "bhoomi_sakha")
USE_IN_MEMORY_DB = os.getenv("USE_IN_MEMORY_DB", "0").lower() in ("1", "true", "yes")

_client = None
_db = None


# ============================================================
# IN-MEMORY ASYNC MONGO REPLICA (For Hermetic Testing / Local Dev)
# ============================================================

class AsyncMemoryCursor:
    """Async cursor mimicking Motor's AsyncIOMotorCursor."""

    def __init__(self, items: List[Dict[str, Any]]):
        self._items = items
        self._index = 0

    def sort(self, key_or_list: Any, direction: int = 1) -> "AsyncMemoryCursor":
        if isinstance(key_or_list, list):
            for key, direct in reversed(key_or_list):
                reverse = direct == -1
                self._items.sort(key=lambda x: x.get(key, ""), reverse=reverse)
        elif isinstance(key_or_list, str):
            reverse = direction == -1
            self._items.sort(key=lambda x: x.get(key_or_list, ""), reverse=reverse)
        return self

    def skip(self, n: int) -> "AsyncMemoryCursor":
        self._items = self._items[n:]
        return self

    def limit(self, n: int) -> "AsyncMemoryCursor":
        self._items = self._items[:n]
        return self

    async def to_list(self, length: Optional[int] = None) -> List[Dict[str, Any]]:
        if length is not None:
            return [copy.deepcopy(x) for x in self._items[:length]]
        return [copy.deepcopy(x) for x in self._items]

    def __aiter__(self):
        self._index = 0
        return self

    async def __anext__(self):
        if self._index < len(self._items):
            item = copy.deepcopy(self._items[self._index])
            self._index += 1
            return item
        raise StopAsyncIteration


class InsertOneResult:
    def __init__(self, inserted_id: Any):
        self.inserted_id = inserted_id


class UpdateResult:
    def __init__(self, matched_count: int, modified_count: int):
        self.matched_count = matched_count
        self.modified_count = modified_count


class AsyncMemoryCollection:
    """Async collection mimicking Motor's AsyncIOMotorCollection."""

    def __init__(self, name: str):
        self.name = name
        self._docs: List[Dict[str, Any]] = []
        self._indexes: List[Dict[str, Any]] = []

    def _matches(self, doc: Dict[str, Any], query: Optional[Dict[str, Any]]) -> bool:
        if not query:
            return True
        for key, val in query.items():
            if key == "$or" and isinstance(val, list):
                if not any(self._matches(doc, subq) for subq in val):
                    return False
            elif key == "$and" and isinstance(val, list):
                if not all(self._matches(doc, subq) for subq in val):
                    return False
            else:
                doc_val = doc.get(key)
                if isinstance(val, dict):
                    # Check operators like $ne, $in, $gt, $gte, etc.
                    for op, op_val in val.items():
                        if op == "$ne" and doc_val == op_val:
                            return False
                        elif op == "$in" and doc_val not in op_val:
                            return False
                        elif op == "$nin" and doc_val in op_val:
                            return False
                        elif op == "$gt" and not (doc_val is not None and doc_val > op_val):
                            return False
                        elif op == "$gte" and not (doc_val is not None and doc_val >= op_val):
                            return False
                        elif op == "$lt" and not (doc_val is not None and doc_val < op_val):
                            return False
                        elif op == "$lte" and not (doc_val is not None and doc_val <= op_val):
                            return False
                elif doc_val != val:
                    return False
        return True

    async def create_index(self, keys: Any, **kwargs) -> str:
        self._indexes.append({"keys": keys, "kwargs": kwargs})
        return str(keys)

    async def insert_one(self, doc: Dict[str, Any]) -> InsertOneResult:
        # Check uniqueness constraints
        for idx in self._indexes:
            if idx.get("kwargs", {}).get("unique"):
                keys = idx["keys"]
                filter_q = {}
                if isinstance(keys, list):
                    for k, _ in keys:
                        if k in doc:
                            filter_q[k] = doc[k]
                elif isinstance(keys, str):
                    if keys in doc:
                        filter_q[keys] = doc[keys]
                if filter_q:
                    for existing in self._docs:
                        if all(existing.get(k) == v for k, v in filter_q.items()):
                            raise ValueError(f"Duplicate key error on unique index: {filter_q}")

        stored = copy.deepcopy(doc)
        if "_id" not in stored:
            import uuid
            stored["_id"] = str(uuid.uuid4())
        self._docs.append(stored)
        return InsertOneResult(stored["_id"])

    async def find_one(self, query: Optional[Dict[str, Any]] = None, projection: Optional[Dict[str, Any]] = None) -> Optional[Dict[str, Any]]:
        for d in self._docs:
            if self._matches(d, query):
                return copy.deepcopy(d)
        return None

    def find(self, query: Optional[Dict[str, Any]] = None, projection: Optional[Dict[str, Any]] = None) -> AsyncMemoryCursor:
        matched = [copy.deepcopy(d) for d in self._docs if self._matches(d, query)]
        return AsyncMemoryCursor(matched)

    async def update_one(self, filter_q: Dict[str, Any], update: Dict[str, Any], upsert: bool = False) -> UpdateResult:
        matched = False
        modified = 0
        for i, d in enumerate(self._docs):
            if self._matches(d, filter_q):
                matched = True
                if "$set" in update:
                    for k, v in update["$set"].items():
                        d[k] = copy.deepcopy(v)
                    modified = 1
                if "$unset" in update:
                    for k in update["$unset"].keys():
                        d.pop(k, None)
                    modified = 1
                break
        if not matched and upsert:
            new_doc = copy.deepcopy(filter_q)
            if "$set" in update:
                new_doc.update(copy.deepcopy(update["$set"]))
            await self.insert_one(new_doc)
            return UpdateResult(matched_count=0, modified_count=1)
        return UpdateResult(matched_count=1 if matched else 0, modified_count=modified)

    async def delete_one(self, filter_q: Dict[str, Any]) -> int:
        for i, d in enumerate(self._docs):
            if self._matches(d, filter_q):
                del self._docs[i]
                return 1
        return 0

    async def count_documents(self, filter_q: Optional[Dict[str, Any]] = None) -> int:
        if not filter_q:
            return len(self._docs)
        return sum(1 for d in self._docs if self._matches(d, filter_q))


class AsyncMemoryDatabase:
    """Async database mimicking Motor's AsyncIOMotorDatabase."""

    def __init__(self, name: str = "bhoomi_sakha"):
        self.name = name
        self._collections: Dict[str, AsyncMemoryCollection] = {}

    def get_collection(self, name: str) -> AsyncMemoryCollection:
        if name not in self._collections:
            self._collections[name] = AsyncMemoryCollection(name)
        return self._collections[name]

    def __getitem__(self, name: str) -> AsyncMemoryCollection:
        return self.get_collection(name)


# ============================================================
# DATABASE FACTORY & ACCESSORS
# ============================================================

def get_database():
    """
    Returns the persistent application database handle.
    Connects to Motor if MONGODB_URI is configured and not in in-memory mode;
    otherwise falls back to AsyncMemoryDatabase.
    """
    global _client, _db
    if _db is not None:
        return _db

    uri = os.getenv("MONGODB_URI", "").strip()
    db_name = os.getenv("MONGODB_DATABASE", "bhoomi_sakha").strip()
    force_in_memory = os.getenv("USE_IN_MEMORY_DB", "0").lower() in ("1", "true", "yes")

    if uri and not force_in_memory:
        try:
            from motor.motor_asyncio import AsyncIOMotorClient
            _client = AsyncIOMotorClient(uri, serverSelectionTimeoutMS=3000)
            _db = _client[db_name]
            logger.info("Connected to MongoDB via Motor.")
            return _db
        except Exception as e:
            logger.warning("Failed to connect to MongoDB URI. Falling back to in-memory database: %s", type(e).__name__)
            _db = AsyncMemoryDatabase(db_name)
            return _db

    # In-memory storage for test or standalone execution
    _db = AsyncMemoryDatabase(db_name)
    logger.info("Using in-memory persistent database store.")
    return _db


def reset_database_for_testing():
    """Utility function to clear and reset in-memory database state for testing."""
    global _db, _client
    _client = None
    _db = AsyncMemoryDatabase(os.getenv("MONGODB_DATABASE", "bhoomi_sakha"))
    return _db


async def init_indexes(db=None):
    """
    Establishes sensible MongoDB indexes required for production query performance.
    """
    if db is None:
        db = get_database()

    try:
        # Users
        users = db.get_collection("users")
        await users.create_index([("user_id", 1)], unique=True)
        await users.create_index([("email", 1)])

        # Lands
        lands = db.get_collection("lands")
        await lands.create_index([("land_id", 1)], unique=True)
        await lands.create_index([("owner_id", 1)])
        await lands.create_index([("survey_number", 1)])

        # Cases
        cases = db.get_collection("cases")
        await cases.create_index([("case_id", 1)], unique=True)
        await cases.create_index([("citizen_id", 1)])
        await cases.create_index([("assigned_officer_id", 1)])
        await cases.create_index([("status", 1)])
        await cases.create_index([("project_id", 1)])
        await cases.create_index([("created_at", -1)])

        # Case Documents
        case_docs = db.get_collection("case_documents")
        await case_docs.create_index([("document_id", 1)], unique=True)
        await case_docs.create_index([("case_id", 1)])

        # Case Events (Audit Trail)
        case_events = db.get_collection("case_events")
        await case_events.create_index([("event_id", 1)], unique=True)
        await case_events.create_index([("case_id", 1)])
        await case_events.create_index([("timestamp", -1)])

        # Notifications
        notifs = db.get_collection("notifications")
        await notifs.create_index([("notification_id", 1)], unique=True)
        await notifs.create_index([("user_id", 1)])
        await notifs.create_index([("read", 1)])
        await notifs.create_index([("created_at", -1)])

        logger.info("Database indexes initialized successfully.")
    except Exception as exc:
        logger.warning("Could not establish all database indexes: %s", str(exc))
