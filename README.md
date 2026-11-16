# Python Nova 🐍

**Apprends Python à ton rythme, comprends chaque ligne de code, construis tes propres projets et prouve tes compétences.**

> **Vision :** une plateforme mondiale d'apprentissage Python avec un mentor IA temps réel, un laboratoire exécutable et un système d'évaluation qui privilégie l'autonomie. Notre ambition n'est pas un produit déjà réalisé.

## État du projet
🚧 **Cadrage / documentation.** Le développement de l'application n'a pas encore commencé. Le dépôt héberge le plan directeur, pas encore une version opérationnelle. Date de référence : 16 novembre 2026.

## Commencer ici
| Document | Contenu |
| --- | --- |
| [Vision produit & cahier des charges](docs/PRODUCT_VISION.md) | Publics, promesse, 12 modules, expérience, indicateurs |
| [Benchmark concurrentiel](docs/COMPETITIVE_BENCHMARK.md) | Solutions existantes, opportunités et méthode d'audit |
| [Architecture](docs/ARCHITECTURE.md) | Next.js, FastAPI, Pyodide, IA, API, données, sécurité |
| [Curriculum Python](docs/CURRICULUM.md) | 7 jours débutants puis 6 niveaux jusqu'aux spécialisations |
| [Roadmap et backlog](docs/ROADMAP.md) | P0 à P5, premier sprint, critères d'acceptation |
| [Recherche et validation](docs/RESEARCH_AND_VALIDATION.md) | Études utilisateurs, expériences, mesure d'apprentissage |

## Expériences envisagées
- **Nova Student** — collégiens 13+, lycéens et étudiants.
- **Nova Builder** — adultes débutants et reconversion.
- **Nova Kids** — enfants 8–12 ans, ultérieurement avec protections adaptées.
- **Nova Pro** — développeurs confirmés, ultérieurement.

## Les 12 modules
Nova Brain · Code X-Ray · Nova Socratic · Knowledge DNA · Voice Mentor · Error Doctor · Algorithm Lab · Dream-to-Code · Memory Engine · Independence Exam · Classroom · Global Learning.

La plupart sont **planifiés**, pas encore implémentés. Les priorités sont l'éditeur Python, l'exécution sécurisée, les exercices vérifiables et le professeur IA contextualisé.

## Architecture envisagée
- Web : Next.js, TypeScript, Tailwind CSS, Monaco.
- Premier runtime : Python via Pyodide + Web Worker dans le navigateur.
- Backend : FastAPI, PostgreSQL, Redis selon besoins.
- Mentor IA : passerelle LLM côté serveur et réponse en streaming.
- Avancé : sandbox serveur isolée, contrôles de ressources et sécurité renforcée.
- Livraison : CI, tests, observabilité et revue d'accessibilité.

## Parcours prioritaire
**P0** socle et CI → **P1** Learning Lab utilisable → **P2** intelligence pédagogique → **P3** parcours 7 jours → **P4** maturité et pilotes → **P5** extensions enfants, experts, enseignants et voix.

Détails et checklist dans [ROADMAP.md](docs/ROADMAP.md).

## Principes non négociables
1. **Python uniquement** au lancement.
2. L'IA explique et guide avant de donner la solution.
3. Les résultats de code et d'évaluation proviennent de tests réels, pas d'une supposition du LLM.
4. Le code de l'utilisateur est non fiable et doit être isolé.
5. L'évaluation autonome est distincte des exercices aidés.
6. Accessibilité, confidentialité et protection des mineurs dès la conception.
7. Une fonctionnalité n'est considérée livrée qu'après implémentation et tests.

## Prochaine étape
Initialiser l'application et livrer un **Learning Lab V1** : première leçon, Monaco, Pyodide, console, tests, sauvegarde, tuteur IA avec indices graduels.

## Licence
À définir avant redistribution ou contribution extérieure. Le caractère public du dépôt n'implique pas automatiquement une licence open source.
