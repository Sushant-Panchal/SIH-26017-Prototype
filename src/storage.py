"""
Bhoomi Sakha - Production Document Storage Abstraction
Provides pluggable, cloud-native storage providers (AWS S3-compatible and Mock).
Strictly validates file constraints, sanitizes object keys, and enforces production safety.
Never relies on ephemeral local server disk in production.
"""

from abc import ABC, abstractmethod
import os
import re
from typing import Dict, Any, Optional, Tuple

# Sensible Cadastral File Constraints
MAX_FILE_SIZE_BYTES = 15 * 1024 * 1024  # 15 MB
ALLOWED_FILE_EXTENSIONS = {".pdf", ".jpg", ".jpeg", ".png", ".tiff", ".tif"}
DANGEROUS_FILE_EXTENSIONS = {
    ".exe", ".bat", ".cmd", ".sh", ".py", ".js", ".bin",
    ".msi", ".dll", ".vbs", ".ps1", ".php", ".phtml", ".cgi"
}
ALLOWED_MIME_TYPES = {
    "application/pdf",
    "image/jpeg",
    "image/png",
    "image/tiff",
    "application/octet-stream",
}


class StorageError(Exception):
    """Base exception for storage provider operations."""
    pass


class StorageConfigurationError(StorageError):
    """Raised when required cloud storage credentials or buckets are unconfigured."""
    pass


class StorageValidationError(StorageError):
    """Raised when file constraints or metadata validations fail."""
    pass


def sanitize_filename(filename: str) -> str:
    """
    Sanitizes filename by stripping directory paths, path traversal, null bytes,
    and replaces non-alphanumeric characters (except dots, underscores, dashes).
    """
    if not filename:
        return "unnamed_document.pdf"
    # Strip any directory path components
    basename = os.path.basename(filename.strip().replace("\\", "/"))
    # Remove null bytes
    basename = basename.replace("\x00", "")
    # Remove path traversal sequences
    basename = basename.replace("..", "")
    # Replace non-safe characters with underscore
    safe = re.sub(r"[^a-zA-Z0-9.\-_]", "_", basename)
    # Ensure it doesn't start with a dot
    safe = safe.lstrip(".")
    return safe or "unnamed_document.pdf"


def validate_file_metadata(
    filename: str,
    content_type: Optional[str] = None,
    file_size: Optional[int] = None,
) -> None:
    """
    Validates file extension, size, and MIME type against statutory constraints.
    Raises StorageValidationError on any violation.
    """
    if not filename or not filename.strip():
        raise StorageValidationError("File name cannot be empty.")

    ext = os.path.splitext(filename.lower())[1]

    if ext in DANGEROUS_FILE_EXTENSIONS:
        raise StorageValidationError(f"Executable or dangerous file extension '{ext}' is prohibited.")

    if ext not in ALLOWED_FILE_EXTENSIONS:
        raise StorageValidationError(
            f"File extension '{ext}' is not supported. Allowed formats: {', '.join(sorted(ALLOWED_FILE_EXTENSIONS))}"
        )

    if file_size is not None:
        if file_size <= 0:
            raise StorageValidationError("Uploaded file is empty (0 bytes).")
        if file_size > MAX_FILE_SIZE_BYTES:
            raise StorageValidationError(
                f"File size ({file_size} bytes) exceeds maximum allowable limit of 15MB ({MAX_FILE_SIZE_BYTES} bytes)."
            )

    if content_type:
        clean_mime = content_type.split(";")[0].strip().lower()
        if clean_mime not in ALLOWED_MIME_TYPES:
            raise StorageValidationError(
                f"MIME type '{clean_mime}' is not permitted. Allowed MIME types: {', '.join(sorted(ALLOWED_MIME_TYPES))}"
            )


def build_object_key(case_id: str, document_id: str, filename: str) -> str:
    """Builds a deterministic, collision-resistant object storage path."""
    safe_name = sanitize_filename(filename)
    return f"cases/{case_id}/{document_id}_{safe_name}"


# ============================================================
# ABSTRACT STORAGE PROVIDER INTERFACE
# ============================================================

class StorageProvider(ABC):
    """Abstract interface for cloud object storage providers."""

    @abstractmethod
    def is_configured(self) -> bool:
        """Returns True if the provider is fully configured with required credentials."""
        pass

    @abstractmethod
    def get_provider_name(self) -> str:
        """Returns the identifier name of this storage provider."""
        pass

    @abstractmethod
    def generate_upload_url(
        self,
        object_key: str,
        content_type: str = "application/pdf",
        expires_in: int = 900,
    ) -> Dict[str, Any]:
        """
        Generates a secure, pre-signed upload URL / form parameters.
        Raises StorageConfigurationError if provider is unconfigured.
        """
        pass

    @abstractmethod
    def upload_file(
        self,
        object_key: str,
        file_data: bytes,
        content_type: str = "application/pdf",
    ) -> Dict[str, Any]:
        """
        Directly uploads file bytes to object storage.
        Raises StorageConfigurationError if provider is unconfigured.
        """
        pass

    @abstractmethod
    def generate_download_url(
        self,
        object_key: str,
        expires_in: int = 900,
    ) -> str:
        """
        Generates a short-lived pre-signed access URL for authorized retrieval.
        Raises StorageConfigurationError if provider is unconfigured.
        """
        pass

    @abstractmethod
    def download_file(self, object_key: str) -> Tuple[bytes, str]:
        """
        Retrieves file bytes and content type from object storage.
        Raises StorageConfigurationError if provider is unconfigured.
        """
        pass

    @abstractmethod
    def delete_file(self, object_key: str) -> bool:
        """
        Removes object from storage.
        """
        pass


# ============================================================
# AWS S3-COMPATIBLE STORAGE PROVIDER
# ============================================================

class S3StorageProvider(StorageProvider):
    """
    Production storage adapter for AWS S3 and S3-compatible cloud storage
    (such as Cloudflare R2, MinIO, or Google Cloud Storage XML API).
    """

    def __init__(self):
        self.access_key = os.getenv("AWS_ACCESS_KEY_ID")
        self.secret_key = os.getenv("AWS_SECRET_ACCESS_KEY")
        self.region = os.getenv("AWS_REGION", "ap-south-1")
        self.bucket = os.getenv("AWS_S3_BUCKET")
        self.endpoint_url = os.getenv("AWS_S3_ENDPOINT_URL")
        self._client = None

    def is_configured(self) -> bool:
        return bool(self.access_key and self.secret_key and self.bucket)

    def get_provider_name(self) -> str:
        return "s3"

    def _ensure_configured(self) -> None:
        if not self.is_configured():
            raise StorageConfigurationError(
                "Production object storage is not configured. AWS S3 credentials "
                "(AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_S3_BUCKET) must be set. "
                "Render ephemeral disk cannot be used for durable production storage."
            )

    def _get_client(self):
        self._ensure_configured()
        if self._client is None:
            try:
                import boto3
                from botocore.config import Config
            except ImportError as err:
                raise StorageConfigurationError(
                    "boto3 library is required for AWS S3 storage provider."
                ) from err

            s3_config = Config(
                signature_version="s3v4",
                region_name=self.region,
                retries={"max_attempts": 3, "mode": "standard"},
            )
            self._client = boto3.client(
                "s3",
                region_name=self.region,
                aws_access_key_id=self.access_key,
                aws_secret_access_key=self.secret_key,
                endpoint_url=self.endpoint_url,
                config=s3_config,
            )
        return self._client

    def generate_upload_url(
        self,
        object_key: str,
        content_type: str = "application/pdf",
        expires_in: int = 900,
    ) -> Dict[str, Any]:
        client = self._get_client()
        try:
            post_data = client.generate_presigned_post(
                Bucket=self.bucket,
                Key=object_key,
                Fields={"Content-Type": content_type},
                Conditions=[
                    ["content-length-range", 1, MAX_FILE_SIZE_BYTES],
                    ["starts-with", "$Content-Type", ""],
                ],
                ExpiresIn=expires_in,
            )
            return {
                "provider": "s3",
                "upload_url": post_data["url"],
                "fields": post_data["fields"],
                "object_key": object_key,
                "storage_reference": f"s3://{self.bucket}/{object_key}",
                "expires_in": expires_in,
            }
        except Exception as err:
            raise StorageError(f"Failed to generate S3 pre-signed upload URL: {err}") from err

    def upload_file(
        self,
        object_key: str,
        file_data: bytes,
        content_type: str = "application/pdf",
    ) -> Dict[str, Any]:
        client = self._get_client()
        try:
            client.put_object(
                Bucket=self.bucket,
                Key=object_key,
                Body=file_data,
                ContentType=content_type,
            )
            return {
                "provider": "s3",
                "object_key": object_key,
                "storage_reference": f"s3://{self.bucket}/{object_key}",
                "size_bytes": len(file_data),
            }
        except Exception as err:
            raise StorageError(f"Failed to upload file to S3: {err}") from err

    def generate_download_url(
        self,
        object_key: str,
        expires_in: int = 900,
    ) -> str:
        client = self._get_client()
        try:
            clean_key = object_key.replace(f"s3://{self.bucket}/", "")
            return client.generate_presigned_url(
                "get_object",
                Params={"Bucket": self.bucket, "Key": clean_key},
                ExpiresIn=expires_in,
            )
        except Exception as err:
            raise StorageError(f"Failed to generate S3 pre-signed download URL: {err}") from err

    def download_file(self, object_key: str) -> Tuple[bytes, str]:
        client = self._get_client()
        try:
            clean_key = object_key.replace(f"s3://{self.bucket}/", "")
            resp = client.get_object(Bucket=self.bucket, Key=clean_key)
            data = resp["Body"].read()
            mime = resp.get("ContentType", "application/octet-stream")
            return data, mime
        except Exception as err:
            raise StorageError(f"Failed to download file from S3: {err}") from err

    def delete_file(self, object_key: str) -> bool:
        client = self._get_client()
        try:
            clean_key = object_key.replace(f"s3://{self.bucket}/", "")
            client.delete_object(Bucket=self.bucket, Key=clean_key)
            return True
        except Exception as err:
            raise StorageError(f"Failed to delete file from S3: {err}") from err


# ============================================================
# IN-MEMORY MOCK STORAGE PROVIDER (FOR TESTING / ISOLATED CI)
# ============================================================

class MockStorageProvider(StorageProvider):
    """
    In-memory storage provider strictly for automated testing and CI.
    Emulates pre-signed URL behavior and stores file contents in memory.
    """

    def __init__(self):
        self._store: Dict[str, Dict[str, Any]] = {}

    def is_configured(self) -> bool:
        return True

    def get_provider_name(self) -> str:
        return "mock"

    def clear(self) -> None:
        self._store.clear()

    def generate_upload_url(
        self,
        object_key: str,
        content_type: str = "application/pdf",
        expires_in: int = 900,
    ) -> Dict[str, Any]:
        return {
            "provider": "mock",
            "upload_url": f"https://mock-storage.bhoomisakha.gov.in/upload/{object_key}",
            "fields": {"key": object_key, "Content-Type": content_type},
            "object_key": object_key,
            "storage_reference": f"mock://bhoomi-sakha/{object_key}",
            "expires_in": expires_in,
        }

    def upload_file(
        self,
        object_key: str,
        file_data: bytes,
        content_type: str = "application/pdf",
    ) -> Dict[str, Any]:
        self._store[object_key] = {
            "data": file_data,
            "content_type": content_type,
            "size": len(file_data),
        }
        return {
            "provider": "mock",
            "object_key": object_key,
            "storage_reference": f"mock://bhoomi-sakha/{object_key}",
            "size_bytes": len(file_data),
        }

    def generate_download_url(
        self,
        object_key: str,
        expires_in: int = 900,
    ) -> str:
        clean_key = object_key.replace("mock://bhoomi-sakha/", "")
        return f"https://mock-storage.bhoomisakha.gov.in/download/{clean_key}?expires={expires_in}"

    def download_file(self, object_key: str) -> Tuple[bytes, str]:
        clean_key = object_key.replace("mock://bhoomi-sakha/", "")
        if clean_key not in self._store:
            raise StorageError(f"Object '{clean_key}' not found in mock storage.")
        entry = self._store[clean_key]
        return entry["data"], entry["content_type"]

    def delete_file(self, object_key: str) -> bool:
        clean_key = object_key.replace("mock://bhoomi-sakha/", "")
        self._store.pop(clean_key, None)
        return True


# ============================================================
# PROVIDER FACTORY
# ============================================================

_active_provider: Optional[StorageProvider] = None


def get_storage_provider() -> StorageProvider:
    """
    Factory function returning the active storage provider.
    Reads STORAGE_PROVIDER environment variable ('s3' or 'mock').
    Defaults to 's3' in production to enforce durable object storage.
    """
    global _active_provider
    if _active_provider is not None:
        return _active_provider

    provider_name = os.getenv("STORAGE_PROVIDER", "s3").strip().lower()

    if provider_name == "mock":
        _active_provider = MockStorageProvider()
    elif provider_name in ("s3", "aws_s3"):
        _active_provider = S3StorageProvider()
    else:
        raise StorageConfigurationError(
            f"Unsupported STORAGE_PROVIDER '{provider_name}'. Must be 's3' or 'mock'."
        )

    return _active_provider


def set_storage_provider_for_testing(provider: Optional[StorageProvider]) -> None:
    """Override storage provider during unit testing."""
    global _active_provider
    _active_provider = provider
