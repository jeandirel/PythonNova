# Python Nova API (FastAPI)

Prototype minimal non connecté à un modèle IA.

```bash
cd apps/api
python -m venv .venv
source .venv/bin/activate  # Windows : .venv\\Scripts\\activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
pytest -q
```

- `GET /api/v1/health` : état du service.
- `POST /api/v1/tutor/hint` : indice **statique**, en attendant le tuteur IA. Ne pas présenter comme IA temps réel.

La version initiale du laboratoire exécute Python dans le navigateur et ne transmet pas le code au backend.
