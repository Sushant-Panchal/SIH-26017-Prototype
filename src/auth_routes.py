"""
Bhoomi Sakha - Authentication Routes
Endpoints for user registration, secure login, profile retrieval, and session termination.
"""

import os
from fastapi import APIRouter, HTTPException, status, Depends
import logging

from .database import get_database
from .case_models import (
    UserRole,
    generate_prefixed_id,
    UserCreate,
    UserResponse,
    LoginRequest,
    AuthTokenResponse,
)
from .auth import (
    hash_password,
    verify_password,
    create_access_token,
    get_current_user,
    OFFICER_REGISTRATION_KEY,
)
from .case_routes import sanitize_doc, now_utc

logger = logging.getLogger("bhoomi_sakha.auth_routes")

router = APIRouter(prefix="/api/auth", tags=["Authentication"])


@router.post("/register", response_model=AuthTokenResponse, status_code=201)
async def register(payload: UserCreate):
    """
    Registers a new user (Citizen or Officer with verified authorization key).
    Prevents unauthorized role escalation to officer.
    """
    db = get_database()
    users = db.get_collection("users")

    # Prevent role escalation: Officer registration requires secret key
    if payload.role in (UserRole.OFFICER, UserRole.SUPER_ADMIN):
        if not payload.officer_key or payload.officer_key != OFFICER_REGISTRATION_KEY:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail="Registration as an Officer requires a valid Officer Registration Key.",
            )

    # Check for existing email
    existing = await users.find_one({"email": payload.email.lower()})
    if existing:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="A user with this email address is already registered.",
        )

    user_id = payload.user_id or generate_prefixed_id("USR")
    existing_id = await users.find_one({"user_id": user_id})
    if existing_id:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="A user with this user_id already exists.",
        )

    now = now_utc()
    doc = payload.model_dump(exclude={"officer_key", "password"})
    doc["user_id"] = user_id
    doc["created_at"] = now
    doc["updated_at"] = now

    # Secure password hashing (defaults to strong temporary password if omitted)
    plain_pwd = payload.password or f"BhoomiPass@{secrets_token(8)}"
    doc["password_hash"] = hash_password(plain_pwd)

    await users.insert_one(doc)

    user_resp = UserResponse(**sanitize_doc(doc))
    token = create_access_token(
        user_id=user_id,
        role=doc["role"],
        email=doc["email"],
        name=doc["name"],
    )

    return AuthTokenResponse(access_token=token, user=user_resp)


@router.post("/login", response_model=AuthTokenResponse)
async def login(payload: LoginRequest):
    """
    Authenticates user with email and password, returning signed JWT access token.
    """
    db = get_database()
    users = db.get_collection("users")

    user = await users.find_one({"email": payload.email.lower().strip()})
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password.",
            headers={"WWW-Authenticate": "Bearer"},
        )

    password_hash = user.get("password_hash")
    if not password_hash or not verify_password(payload.password, password_hash):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password.",
            headers={"WWW-Authenticate": "Bearer"},
        )

    if user.get("status") in ("inactive", "suspended"):
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Account is inactive or suspended. Please contact administrator.",
        )

    token = create_access_token(
        user_id=user["user_id"],
        role=user["role"],
        email=user["email"],
        name=user["name"],
    )

    return AuthTokenResponse(access_token=token, user=UserResponse(**sanitize_doc(user)))


@router.get("/me", response_model=UserResponse)
async def get_my_profile(current_user: dict = Depends(get_current_user)):
    """Returns the authenticated user's profile."""
    return UserResponse(**sanitize_doc(current_user))


@router.post("/logout")
async def logout(current_user: dict = Depends(get_current_user)):
    """Terminates session on server acknowledgment."""
    return {"message": "Session terminated successfully."}


def secrets_token(n: int = 8) -> str:
    import secrets
    return secrets.token_hex(n)
