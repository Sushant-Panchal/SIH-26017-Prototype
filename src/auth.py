"""
Bhoomi Sakha - Authentication & Role-Based Access Control
Provides secure PBKDF2-HMAC-SHA256 password hashing, JWT token management,
and FastAPI authorization dependencies for Citizen and Officer roles.
"""

import os
import hmac
import hashlib
import secrets
from typing import Optional, Dict, Any
from datetime import datetime, timedelta, timezone
from fastapi import HTTPException, status, Depends
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
import jwt

# Environment configuration
JWT_SECRET = os.getenv("JWT_SECRET", "bhoomi-sakha-production-secret-key-phase2-sih26017")
JWT_ALGORITHM = "HS256"
JWT_EXPIRATION_HOURS = int(os.getenv("JWT_EXPIRATION_HOURS", "24"))
OFFICER_REGISTRATION_KEY = os.getenv("OFFICER_REGISTRATION_KEY", "bhoomi-officer-secret-key-2026")

security_scheme = HTTPBearer(auto_error=False)


# ============================================================
# PASSWORD HASHING (NIST PBKDF2-HMAC-SHA256)
# ============================================================

def hash_password(password: str) -> str:
    """Hash password using PBKDF2-HMAC-SHA256 with 600,000 rounds and random salt."""
    if not password or len(password) < 6:
        raise ValueError("Password must be at least 6 characters long.")
    salt = secrets.token_hex(16)
    iterations = 600_000
    pwd_hash = hashlib.pbkdf2_hmac(
        "sha256",
        password.encode("utf-8"),
        salt.encode("utf-8"),
        iterations
    ).hex()
    return f"{salt}${iterations}${pwd_hash}"


def verify_password(plain_password: str, hashed: Optional[str]) -> bool:
    """Verify plaintext password against stored salt$iterations$hash."""
    if not hashed or not plain_password:
        return False
    try:
        parts = hashed.split("$")
        if len(parts) != 3:
            return False
        salt, iter_str, expected_hash = parts
        iterations = int(iter_str)
        computed_hash = hashlib.pbkdf2_hmac(
            "sha256",
            plain_password.encode("utf-8"),
            salt.encode("utf-8"),
            iterations
        ).hex()
        return hmac.compare_digest(computed_hash, expected_hash)
    except Exception:
        return False


# ============================================================
# JWT TOKEN MANAGEMENT
# ============================================================

def create_access_token(
    user_id: str,
    role: str,
    email: str,
    name: str,
    expires_delta: Optional[timedelta] = None
) -> str:
    """Create signed HS256 JWT access token."""
    expire = datetime.now(timezone.utc) + (
        expires_delta or timedelta(hours=JWT_EXPIRATION_HOURS)
    )
    payload = {
        "sub": user_id,
        "user_id": user_id,
        "role": role,
        "email": email.lower(),
        "name": name,
        "exp": expire,
        "iat": datetime.now(timezone.utc),
    }
    return jwt.encode(payload, JWT_SECRET, algorithm=JWT_ALGORITHM)


def decode_access_token(token: str) -> Dict[str, Any]:
    """Decode and validate JWT access token, checking expiration."""
    try:
        payload = jwt.decode(token, JWT_SECRET, algorithms=[JWT_ALGORITHM])
        return payload
    except jwt.ExpiredSignatureError:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Authentication token has expired. Please log in again.",
            headers={"WWW-Authenticate": "Bearer"},
        )
    except jwt.PyJWTError:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid authentication token.",
            headers={"WWW-Authenticate": "Bearer"},
        )


# ============================================================
# SERVER-SIDE AUTHORIZATION DEPENDENCIES
# ============================================================

async def get_current_user(
    credentials: Optional[HTTPAuthorizationCredentials] = Depends(security_scheme),
) -> Dict[str, Any]:
    """
    Extracts Bearer token, decodes identity, and retrieves user from database.
    """
    from .database import get_database

    if not credentials or not credentials.credentials:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Authentication credentials were not provided.",
            headers={"WWW-Authenticate": "Bearer"},
        )

    token = credentials.credentials
    payload = decode_access_token(token)
    user_id = payload.get("user_id") or payload.get("sub")

    if not user_id:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Malformed token claims.",
            headers={"WWW-Authenticate": "Bearer"},
        )

    db = get_database()
    users = db.get_collection("users")
    user = await users.find_one({"user_id": user_id})

    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="User associated with this token does not exist.",
            headers={"WWW-Authenticate": "Bearer"},
        )

    if user.get("status") == "suspended" or user.get("status") == "inactive":
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="User account is inactive or suspended.",
        )

    return user


async def require_authenticated_user(
    current_user: Dict[str, Any] = Depends(get_current_user),
) -> Dict[str, Any]:
    """Ensures caller has valid authentication."""
    return current_user


async def require_citizen(
    current_user: Dict[str, Any] = Depends(get_current_user),
) -> Dict[str, Any]:
    """Ensures caller has Citizen role."""
    if current_user.get("role") != "citizen":
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Access forbidden: Citizen access only.",
        )
    return current_user


async def require_officer(
    current_user: Dict[str, Any] = Depends(get_current_user),
) -> Dict[str, Any]:
    """Ensures caller has Officer or Admin role."""
    if current_user.get("role") not in ("officer", "super_admin"):
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Access forbidden: Officer privileges required.",
        )
    return current_user
