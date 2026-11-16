from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)


def test_health():
    assert client.get("/api/v1/health").json()["status"] == "ok"


def test_hint_is_explicitly_static():
    response = client.post("/api/v1/tutor/hint", json={"exercise_id": "bonjour", "code": 'print("x")'})
    assert response.status_code == 200
    assert response.json()["kind"] == "static-hint"
