from fastapi import FastAPI
from pydantic import BaseModel, Field

app = FastAPI(title="Python Nova API", version="0.1.0")


class TutorRequest(BaseModel):
    exercise_id: str = Field(min_length=1, max_length=80)
    code: str = Field(max_length=20_000)
    output: str = Field(default="", max_length=20_000)
    question: str = Field(default="", max_length=2_000)


@app.get("/api/v1/health")
def health() -> dict[str, str]:
    return {"status": "ok", "service": "python-nova-api"}


@app.post("/api/v1/tutor/hint")
def tutor_hint(request: TutorRequest) -> dict[str, str]:
    """Deterministic placeholder. No model/provider is connected in this version."""
    hints = {
        "bonjour": "Que dois-tu placer entre les parenthèses de print() ?",
        "variable": "Une variable retient une valeur. Comment afficher prenom à côté du mot Bonjour ?",
        "compter": "Peux-tu augmenter age avec age = age + 1 avant de l'afficher ?",
    }
    return {"kind": "static-hint", "hint": hints.get(request.exercise_id, "Commence par décrire le résultat souhaité, puis teste une petite étape.")}
