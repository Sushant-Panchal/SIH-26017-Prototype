"""
Bhoomi Sakha - Production Document Storage & Hardened Workflow Test Suite
Comprehensive testing of storage abstraction, cloud providers, file validation,
secure upload flows, officer review/rejection workflows, audit logs, and notifications.
"""

import io
import os
import pytest
from fastapi.testclient import TestClient

from src.api import app
from src.database import reset_database_for_testing
from src.auth import OFFICER_REGISTRATION_KEY
from src.storage import (
    MAX_FILE_SIZE_BYTES,
    MockStorageProvider,
    S3StorageProvider,
    set_storage_provider_for_testing,
    get_storage_provider,
    StorageConfigurationError,
    StorageValidationError,
    validate_file_metadata,
    sanitize_filename,
)

client = TestClient(app)


@pytest.fixture(autouse=True)
def setup_environment():
    """Reset database and use MockStorageProvider for isolated tests."""
    reset_database_for_testing()
    mock_provider = MockStorageProvider()
    set_storage_provider_for_testing(mock_provider)
    yield
    set_storage_provider_for_testing(None)


def create_user_and_token(name: str, email: str, role: str = "citizen", designation: str = None):
    payload = {
        "name": name,
        "email": email,
        "role": role,
        "password": "StrongPassword@123",
    }
    if role == "officer":
        payload["officer_key"] = OFFICER_REGISTRATION_KEY
        if designation:
            payload["designation"] = designation
    resp = client.post("/api/auth/register", json=payload)
    assert resp.status_code == 201, resp.text
    return resp.json()


def create_test_case(citizen_token: str, citizen_id: str, officer_id: str = None):
    # Create land
    land_resp = client.post("/api/lands", json={
        "owner_id": citizen_id,
        "state": "Maharashtra",
        "district": "Pune",
        "taluka": "Haveli",
        "village": "Wagholi",
        "survey_number": "101/A",
        "area_hectares": 2.5,
        "land_type": "Agricultural",
    })
    assert land_resp.status_code == 201
    land_id = land_resp.json()["land_id"]

    # Create case
    case_resp = client.post("/api/cases", json={
        "citizen_id": citizen_id,
        "land_id": land_id,
        "category": "documentation",
        "description": "7/12 extract correction required.",
    })
    assert case_resp.status_code == 201
    case_data = case_resp.json()

    # Assign officer if requested
    if officer_id:
        client.post(
            f"/api/cases/{case_data['case_id']}/assign",
            json={"assigned_officer_id": officer_id, "actor_user_id": officer_id},
        )
        case_data["assigned_officer_id"] = officer_id

    return case_data


# ============================================================
# 1. FILE VALIDATION & SANITIZATION TESTS
# ============================================================

def test_filename_sanitization():
    assert sanitize_filename("../../../etc/passwd.pdf") == "passwd.pdf"
    assert sanitize_filename("..\\..\\secret\\document.pdf") == "document.pdf"
    assert sanitize_filename("test file (1) [final]!.pdf") == "test_file__1___final__.pdf"
    assert sanitize_filename(".hidden.pdf") == "hidden.pdf"
    assert sanitize_filename("") == "unnamed_document.pdf"


def test_dangerous_extensions_rejected():
    dangerous = [
        "malware.exe", "script.sh", "payload.bat", "worm.cmd",
        "macro.vbs", "exploit.ps1", "webshell.php", "bot.py"
    ]
    for filename in dangerous:
        with pytest.raises(StorageValidationError) as exc:
            validate_file_metadata(filename=filename)
        assert "prohibited" in str(exc.value).lower()


def test_unsupported_extensions_rejected():
    with pytest.raises(StorageValidationError) as exc:
        validate_file_metadata(filename="spreadsheet.xlsx")
    assert "not supported" in str(exc.value).lower()


def test_oversized_file_validation_error():
    with pytest.raises(StorageValidationError) as exc:
        validate_file_metadata(filename="large.pdf", file_size=MAX_FILE_SIZE_BYTES + 100)
    assert "exceeds maximum allowable limit" in str(exc.value).lower()


def test_zero_byte_file_rejected():
    with pytest.raises(StorageValidationError) as exc:
        validate_file_metadata(filename="empty.pdf", file_size=0)
    assert "empty" in str(exc.value).lower()


# ============================================================
# 2. AUTHENTICATION & ACCESS CONTROL TESTS
# ============================================================

def test_unauthenticated_upload_rejected():
    resp = client.post("/api/cases/CAS-12345/documents/upload-url", json={
        "file_name": "survey.pdf",
        "document_type": "7_12_extract",
    })
    assert resp.status_code == 401


def test_unauthenticated_direct_upload_rejected():
    resp = client.post(
        "/api/cases/CAS-12345/documents/upload",
        data={"document_type": "7_12_extract"},
        files={"file": ("survey.pdf", b"%PDF-dummy content", "application/pdf")},
    )
    assert resp.status_code == 401


def test_citizen_cannot_request_upload_url_for_another_citizen_case():
    cit1 = create_user_and_token("Citizen One", "cit1@example.com")
    cit2 = create_user_and_token("Citizen Two", "cit2@example.com")
    case1 = create_test_case(cit1["access_token"], cit1["user"]["user_id"])

    # Citizen 2 attempts to get upload URL on Citizen 1's case
    resp = client.post(
        f"/api/cases/{case1['case_id']}/documents/upload-url",
        json={"file_name": "claim.pdf", "document_type": "7_12_extract"},
        headers={"Authorization": f"Bearer {cit2['access_token']}"},
    )
    assert resp.status_code == 403
    assert "cannot upload documents to another citizen's case" in resp.json()["detail"].lower()


def test_citizen_cannot_upload_file_to_another_citizen_case():
    cit1 = create_user_and_token("Citizen One", "cit1_b@example.com")
    cit2 = create_user_and_token("Citizen Two", "cit2_b@example.com")
    case1 = create_test_case(cit1["access_token"], cit1["user"]["user_id"])

    # Citizen 2 attempts direct file upload on Citizen 1's case
    resp = client.post(
        f"/api/cases/{case1['case_id']}/documents/upload",
        data={"document_type": "7_12_extract"},
        files={"file": ("intruder.pdf", b"%PDF-1.4 dummy", "application/pdf")},
        headers={"Authorization": f"Bearer {cit2['access_token']}"},
    )
    assert resp.status_code == 403
    assert "cannot upload documents to another citizen's case" in resp.json()["detail"].lower()


def test_citizen_cannot_confirm_upload_on_another_citizen_case():
    cit1 = create_user_and_token("Citizen One", "cit1_c@example.com")
    cit2 = create_user_and_token("Citizen Two", "cit2_c@example.com")
    case1 = create_test_case(cit1["access_token"], cit1["user"]["user_id"])

    resp = client.post(
        f"/api/cases/{case1['case_id']}/documents/confirm",
        json={
            "document_id": "DOC-HACK",
            "file_name": "forged.pdf",
            "document_type": "7_12_extract",
            "object_key": f"cases/{case1['case_id']}/forged.pdf",
        },
        headers={"Authorization": f"Bearer {cit2['access_token']}"},
    )
    assert resp.status_code == 403


# ============================================================
# 3. DIRECT FILE UPLOAD WORKFLOW & SIZE LIMIT
# ============================================================

def test_direct_file_upload_success():
    cit = create_user_and_token("Valid Citizen", "cit_valid@example.com")
    off = create_user_and_token("Assigned Officer", "off_valid@example.com", role="officer")
    case = create_test_case(cit["access_token"], cit["user"]["user_id"], officer_id=off["user"]["user_id"])

    file_content = b"%PDF-1.4 7/12 Extract Official Survey Data Content"
    resp = client.post(
        f"/api/cases/{case['case_id']}/documents/upload",
        data={"document_type": "7_12_extract"},
        files={"file": ("certified_7_12.pdf", file_content, "application/pdf")},
        headers={"Authorization": f"Bearer {cit['access_token']}"},
    )
    assert resp.status_code == 201
    doc_data = resp.json()
    assert doc_data["document_id"].startswith("DOC-")
    assert doc_data["case_id"] == case["case_id"]
    assert doc_data["file_name"] == "certified_7_12.pdf"
    assert doc_data["document_type"] == "7_12_extract"
    assert doc_data["verification_status"] == "pending"
    assert doc_data["uploaded_by"] == cit["user"]["user_id"]
    assert "mock://" in doc_data["storage_reference"]

    # Verify audit event was created
    events_resp = client.get(
        f"/api/cases/{case['case_id']}/events",
        headers={"Authorization": f"Bearer {cit['access_token']}"},
    )
    assert events_resp.status_code == 200
    events = events_resp.json()
    assert any(e["action"] == "document_uploaded" for e in events)

    # Verify officer was notified
    notifs_resp = client.get(
        f"/api/users/{off['user']['user_id']}/notifications",
        headers={"Authorization": f"Bearer {off['access_token']}"},
    )
    assert notifs_resp.status_code == 200
    notifs = notifs_resp.json()
    assert any("Supporting Document Uploaded" in n["title"] for n in notifs)


def test_direct_file_upload_rejects_dangerous_file():
    cit = create_user_and_token("Citizen Exe", "cit_exe@example.com")
    case = create_test_case(cit["access_token"], cit["user"]["user_id"])

    resp = client.post(
        f"/api/cases/{case['case_id']}/documents/upload",
        data={"document_type": "7_12_extract"},
        files={"file": ("malicious_payload.exe", b"MZ\x90\x00\x03\x00\x00\x00", "application/octet-stream")},
        headers={"Authorization": f"Bearer {cit['access_token']}"},
    )
    assert resp.status_code == 400
    assert "prohibited" in resp.json()["detail"].lower()


def test_direct_file_upload_rejects_oversized_file():
    cit = create_user_and_token("Citizen Big", "cit_big@example.com")
    case = create_test_case(cit["access_token"], cit["user"]["user_id"])

    # Simulate file larger than 15MB
    large_payload = b"A" * (MAX_FILE_SIZE_BYTES + 50)
    resp = client.post(
        f"/api/cases/{case['case_id']}/documents/upload",
        data={"document_type": "7_12_extract"},
        files={"file": ("too_large.pdf", large_payload, "application/pdf")},
        headers={"Authorization": f"Bearer {cit['access_token']}"},
    )
    assert resp.status_code == 413
    assert "exceeds maximum allowable limit" in resp.json()["detail"].lower()


# ============================================================
# 4. PRE-SIGNED URL UPLOAD & CONFIRM WORKFLOW
# ============================================================

def test_presigned_url_flow_success():
    cit = create_user_and_token("Presigned Citizen", "cit_pre@example.com")
    off = create_user_and_token("Officer Pre", "off_pre@example.com", role="officer")
    case = create_test_case(cit["access_token"], cit["user"]["user_id"], officer_id=off["user"]["user_id"])

    # Step 1: Request pre-signed URL
    url_resp = client.post(
        f"/api/cases/{case['case_id']}/documents/upload-url",
        json={
            "file_name": "aadhaar_card.pdf",
            "document_type": "identity_proof",
            "content_type": "application/pdf",
            "file_size": 2048,
        },
        headers={"Authorization": f"Bearer {cit['access_token']}"},
    )
    assert url_resp.status_code == 200
    url_data = url_resp.json()
    assert "upload_url" in url_data
    assert "object_key" in url_data
    assert url_data["document_id"].startswith("DOC-")

    # Step 2: Confirm upload
    confirm_resp = client.post(
        f"/api/cases/{case['case_id']}/documents/confirm",
        json={
            "document_id": url_data["document_id"],
            "file_name": "aadhaar_card.pdf",
            "document_type": "identity_proof",
            "object_key": url_data["object_key"],
        },
        headers={"Authorization": f"Bearer {cit['access_token']}"},
    )
    assert confirm_resp.status_code == 201
    doc_data = confirm_resp.json()
    assert doc_data["document_id"] == url_data["document_id"]
    assert doc_data["file_name"] == "aadhaar_card.pdf"
    assert doc_data["verification_status"] == "pending"

    # Step 3: Verify document appears in case document list
    list_resp = client.get(
        f"/api/cases/{case['case_id']}/documents",
        headers={"Authorization": f"Bearer {cit['access_token']}"},
    )
    assert list_resp.status_code == 200
    docs = list_resp.json()
    assert any(d["document_id"] == url_data["document_id"] for d in docs)


# ============================================================
# 5. DOCUMENT RETRIEVAL & ACCESS CONTROL
# ============================================================

def test_document_download_and_access_urls():
    cit1 = create_user_and_token("Citizen Doc1", "cit_doc1@example.com")
    cit2 = create_user_and_token("Citizen Doc2", "cit_doc2@example.com")
    off = create_user_and_token("Officer Doc", "off_doc@example.com", role="officer")
    case1 = create_test_case(cit1["access_token"], cit1["user"]["user_id"], officer_id=off["user"]["user_id"])

    # Upload document
    upload_resp = client.post(
        f"/api/cases/{case1['case_id']}/documents/upload",
        data={"document_type": "land_deed"},
        files={"file": ("deed.pdf", b"%PDF Sale Deed Content", "application/pdf")},
        headers={"Authorization": f"Bearer {cit1['access_token']}"},
    )
    assert upload_resp.status_code == 201
    doc_id = upload_resp.json()["document_id"]

    # 1. Citizen 1 gets access URL -> Success
    cit_access = client.get(
        f"/api/cases/{case1['case_id']}/documents/{doc_id}/access-url",
        headers={"Authorization": f"Bearer {cit1['access_token']}"},
    )
    assert cit_access.status_code == 200
    assert "download_url" in cit_access.json()

    # 2. Citizen 1 downloads file -> Success
    cit_dl = client.get(
        f"/api/cases/{case1['case_id']}/documents/{doc_id}/download",
        headers={"Authorization": f"Bearer {cit1['access_token']}"},
    )
    assert cit_dl.status_code == 200
    assert cit_dl.content == b"%PDF Sale Deed Content"

    # 3. Officer gets access URL -> Success
    off_access = client.get(
        f"/api/cases/{case1['case_id']}/documents/{doc_id}/access-url",
        headers={"Authorization": f"Bearer {off['access_token']}"},
    )
    assert off_access.status_code == 200

    # 4. Officer downloads file -> Success
    off_dl = client.get(
        f"/api/cases/{case1['case_id']}/documents/{doc_id}/download",
        headers={"Authorization": f"Bearer {off['access_token']}"},
    )
    assert off_dl.status_code == 200
    assert off_dl.content == b"%PDF Sale Deed Content"

    # 5. Unauthorized Citizen 2 gets access URL -> Forbidden (403)
    cit2_access = client.get(
        f"/api/cases/{case1['case_id']}/documents/{doc_id}/access-url",
        headers={"Authorization": f"Bearer {cit2['access_token']}"},
    )
    assert cit2_access.status_code == 403

    # 6. Unauthorized Citizen 2 downloads file -> Forbidden (403)
    cit2_dl = client.get(
        f"/api/cases/{case1['case_id']}/documents/{doc_id}/download",
        headers={"Authorization": f"Bearer {cit2['access_token']}"},
    )
    assert cit2_dl.status_code == 403


# ============================================================
# 6. OFFICER VERIFICATION & REJECTION WORKFLOW
# ============================================================

def test_officer_verify_document_success():
    cit = create_user_and_token("Citizen Verify", "cit_ver@example.com")
    off = create_user_and_token("Officer Verify", "off_ver@example.com", role="officer")
    case = create_test_case(cit["access_token"], cit["user"]["user_id"], officer_id=off["user"]["user_id"])

    # Upload document
    upload_resp = client.post(
        f"/api/cases/{case['case_id']}/documents/upload",
        data={"document_type": "7_12_extract"},
        files={"file": ("verified_doc.pdf", b"%PDF Survey Data", "application/pdf")},
        headers={"Authorization": f"Bearer {cit['access_token']}"},
    )
    doc_id = upload_resp.json()["document_id"]

    # Officer verifies
    verify_resp = client.post(
        f"/api/cases/{case['case_id']}/documents/{doc_id}/verify",
        json={"verification_status": "verified", "actor_user_id": off["user"]["user_id"]},
        headers={"Authorization": f"Bearer {off['access_token']}"},
    )
    assert verify_resp.status_code == 200
    verified_data = verify_resp.json()
    assert verified_data["verification_status"] == "verified"
    assert verified_data["verified_by"] == off["user"]["user_id"]
    assert verified_data["verified_at"] is not None

    # Check citizen notification
    notifs = client.get(
        f"/api/users/{cit['user']['user_id']}/notifications",
        headers={"Authorization": f"Bearer {cit['access_token']}"},
    ).json()
    assert any("Document Verified" in n["title"] for n in notifs)


def test_officer_reject_document_without_reason_fails():
    cit = create_user_and_token("Citizen Rej1", "cit_rej1@example.com")
    off = create_user_and_token("Officer Rej1", "off_rej1@example.com", role="officer")
    case = create_test_case(cit["access_token"], cit["user"]["user_id"], officer_id=off["user"]["user_id"])

    upload_resp = client.post(
        f"/api/cases/{case['case_id']}/documents/upload",
        data={"document_type": "7_12_extract"},
        files={"file": ("unclear_doc.pdf", b"%PDF Blurry Data", "application/pdf")},
        headers={"Authorization": f"Bearer {cit['access_token']}"},
    )
    doc_id = upload_resp.json()["document_id"]

    # Rejecting without rejection_reason must fail with 400
    rej_resp = client.post(
        f"/api/cases/{case['case_id']}/documents/{doc_id}/verify",
        json={"verification_status": "rejected", "actor_user_id": off["user"]["user_id"]},
        headers={"Authorization": f"Bearer {off['access_token']}"},
    )
    assert rej_resp.status_code == 400
    assert "reason is required" in rej_resp.json()["detail"].lower()


def test_officer_reject_document_with_reason_success():
    cit = create_user_and_token("Citizen Rej2", "cit_rej2@example.com")
    off = create_user_and_token("Officer Rej2", "off_rej2@example.com", role="officer")
    case = create_test_case(cit["access_token"], cit["user"]["user_id"], officer_id=off["user"]["user_id"])

    upload_resp = client.post(
        f"/api/cases/{case['case_id']}/documents/upload",
        data={"document_type": "7_12_extract"},
        files={"file": ("damaged_scan.pdf", b"%PDF Damaged Scan", "application/pdf")},
        headers={"Authorization": f"Bearer {cit['access_token']}"},
    )
    doc_id = upload_resp.json()["document_id"]

    # Reject with specific reason
    reason_text = "The uploaded 7/12 extract is blurry and missing page 2 seal."
    rej_resp = client.post(
        f"/api/cases/{case['case_id']}/documents/{doc_id}/verify",
        json={
            "verification_status": "rejected",
            "actor_user_id": off["user"]["user_id"],
            "rejection_reason": reason_text,
        },
        headers={"Authorization": f"Bearer {off['access_token']}"},
    )
    assert rej_resp.status_code == 200
    rejected_data = rej_resp.json()
    assert rejected_data["verification_status"] == "rejected"
    assert rejected_data["rejection_reason"] == reason_text

    # Citizen sees rejection reason in document query
    doc_check = client.get(
        f"/api/cases/{case['case_id']}/documents",
        headers={"Authorization": f"Bearer {cit['access_token']}"},
    ).json()
    matched_doc = next(d for d in doc_check if d["document_id"] == doc_id)
    assert matched_doc["verification_status"] == "rejected"
    assert matched_doc["rejection_reason"] == reason_text

    # Citizen notified with rejection reason
    notifs = client.get(
        f"/api/users/{cit['user']['user_id']}/notifications",
        headers={"Authorization": f"Bearer {cit['access_token']}"},
    ).json()
    assert any("Document Rejected" in n["title"] and "blurry" in n["message"] for n in notifs)


# ============================================================
# 7. PRODUCTION SAFETY & UNCONFIGURED PROVIDER TESTS
# ============================================================

def test_unconfigured_s3_provider_returns_503(monkeypatch):
    """
    Verifies that when STORAGE_PROVIDER=s3 but AWS credentials/buckets are missing,
    the API raises a clean 503 error and DOES NOT fall back to local disk storage.
    """
    monkeypatch.setenv("STORAGE_PROVIDER", "s3")
    monkeypatch.delenv("AWS_ACCESS_KEY_ID", raising=False)
    monkeypatch.delenv("AWS_SECRET_ACCESS_KEY", raising=False)
    monkeypatch.delenv("AWS_S3_BUCKET", raising=False)

    s3_provider = S3StorageProvider()
    assert not s3_provider.is_configured()

    set_storage_provider_for_testing(s3_provider)

    cit = create_user_and_token("S3 Citizen", "cit_s3@example.com")
    case = create_test_case(cit["access_token"], cit["user"]["user_id"])

    resp = client.post(
        f"/api/cases/{case['case_id']}/documents/upload",
        data={"document_type": "7_12_extract"},
        files={"file": ("document.pdf", b"%PDF data", "application/pdf")},
        headers={"Authorization": f"Bearer {cit['access_token']}"},
    )
    assert resp.status_code == 503
    assert "AWS S3 credentials are required" in resp.json()["detail"]
