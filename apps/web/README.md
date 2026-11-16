# Application web Python Nova

```bash
# depuis la racine du dépôt
npm install
npm run dev
# navigateur : http://localhost:3000
```

V1 du laboratoire : trois exercices, Monaco, Pyodide en worker, sortie standard, explications statiques, progression sauvegardée en localStorage.

**Dépendance réseau initiale :** téléchargement du runtime Pyodide (version 0.28.2) depuis jsDelivr lors de la première exécution. Ce n'est pas encore un mode hors connexion.

**Attention :** la sortie est vérifiée côté navigateur : il s'agit de feedback pédagogique et non de notation inviolable. Les tests cachés côté serveur et la maîtrise autonome sont prévus ultérieurement.

**Attention sandbox :** le code s'exécute en WebAssembly/Web Worker dans le navigateur ; il ne faut pas en déduire une isolation de production complète pour des projets non fiables sur serveur. Les boucles longues sont stoppées en terminant le worker après 12 secondes.

L'IA temps réel, l'auth et PostgreSQL ne sont pas encore branchés. Le backend FastAPI est séparé et peut se lancer avec `uvicorn` (voir `apps/api/README.md`).
