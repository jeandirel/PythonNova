# Roadmap exécutable — Python Nova

État initial au 16/11/2026 : dépôt avec README uniquement. **Documentation ≠ application implémentée**. Les phases ci-dessous ne sont pas des promesses de calendrier.

## Règles de livraison
- Chaque phase se termine par une démonstration testable et un jeu de critères d'acceptation.
- Priorité au flux pédagogique vertical, pas aux fonctionnalités vitrine.
- Toute carte est « à faire » jusqu'à code, tests et revue.
- Nouvelle fonctionnalité = tests + accessibilité + instrumentation + impact coût/sécurité.
- Les décisions importantes sont consignées dans docs/ARCHITECTURE.md puis ADR si nécessaire.

## P0 — Fondations techniques
- [x] Initialiser structure Next.js/TypeScript et FastAPI (validation CI en cours).
- [ ] Design tokens, thème clair/sombre, composants accessibles, responsive.
- [x] Ajouter workflow CI lint, typecheck, tests, build (résultat à vérifier) ; templates PR et protections des secrets restent à faire.
- [ ] Schéma initial : utilisateur, leçon, exercice, tentative, progression, projet.
- [ ] Auth simple ; permissions et parcours anonyme éventuel.
**Done** : nouveau contributeur démarre le projet et CI valide une application minimale.

## P1 — Learning Lab V1 (priorité n°1)
- [ ] Landing et dashboard complets (premier laboratoire affiché à la racine).
- [x] Ajouter première leçon « Hello Python » et 3 exercices ; onboarding reste à développer.
- [x] Éditeur Monaco avec starter code et sauvegarde locale (sans compte).
- [x] Implémenter Pyodide en Web Worker et console stdout/stderr (validation navigateur en attente).
- [x] Temps limite 12 s, terminaison worker, indicateurs d'exécution.
- [ ] Exercices avec tests robustes : vérification de sortie pédagogique disponible, tests cachés serveur absents.
- [ ] Persistance serveur : sauvegarde/reprise locales disponibles mais pas de compte ni de synchro.
- [ ] Tutor IA avec API côté serveur et streaming.
- [ ] Indices graduels et mode « explorer » ; journal d'aide.
- [ ] E2E : inscription → leçon → code → exécution → correction → reprise.
**Done** : une personne novice écrit, exécute et corrige du Python, reçoit une aide contextualisée puis reprend sa progression.

## P2 — Intelligence pédagogique
- [ ] Error Doctor sur tracebacks réels.
- [ ] Code X-Ray initial : boucle, variables, appels de fonctions.
- [ ] Modèle graphe concepts/prérequis et événements de maîtrise.
- [ ] Pré-diagnostic et recommandations de remédiation.
- [ ] Jeu de tests d'évaluation du mentor ; coût/token, latence, sécurité.
**Done** : un échec génère un diagnostic vérifiable et un exercice adapté.

## P3 — Curriculum complet débutant
- [ ] Sept jours de contenus versionnés.
- [ ] Cinq mini-projets testables + projet libre final.
- [ ] Quiz prédictifs + exercices de transfert.
- [ ] Mode examen autonome sans aide IA.
- [ ] Révisions espacées et mesures J7/J30.
**Done** : groupe pilote peut finir le parcours sans intervention humaine obligatoire.

## P4 — Produit mature
- [ ] Dream-to-Code : générateur de roadmap projet supervisé.
- [ ] Historique de projets, versionnage et partage sécurisé.
- [ ] Analytics produit, qualité tutorat, A/B pédagogiques.
- [ ] Optimisation coût IA, caching de contenu non sensible, limites/quota.
- [ ] FR/EN complets, audit accessibilité, expérience bas débit.
**Done** : qualité, observabilité et rétention mesurées sur utilisateurs réels.

## P5 — Extensions contrôlées
- [ ] Nova Kids (vérifications mineurs, UX dédiée).
- [ ] Nova Pro et sandbox serveur durcie.
- [ ] Algorithm Lab visuel.
- [ ] Voice Mentor.
- [ ] Classroom et conformité institutionnelle.
- [ ] Communauté avec modération et réglages protecteurs.
- [ ] Paiements Premium/Écoles, support et opérations.
**Done** : ouvrir chaque extension uniquement après tests et analyse risque.

## Premier sprint recommandé
1. Bootstrap web + CI.
2. Construire layout laboratoire responsive.
3. Charger une leçon statique « Hello Python » versionnée.
4. Connecter Monaco et Pyodide Worker, stdout/stderr.
5. Ajouter un exercice à tests automatiques.
6. Sauvegarder le progrès.
7. Ajouter le tutor IA avec clé serveur, streaming et indices.
8. Tester un parcours utilisateur complet.

## Définition de terminé (DoD) par tâche
- Code intégré, tests verts, aucun secret exposé.
- Interface responsive et utilisable au clavier.
- États loading/empty/error et erreurs utilisateur utiles.
- Mise à jour doc + risques + métriques.
- Démonstration fonctionnelle, non seulement maquette.

## Décisions encore ouvertes
- Choix exact Auth et fournisseur LLM selon coûts/confidentialité.
- Politique d'âge minimal et lancement Kids.
- Infrastructure sandboxes distantes et budgets.
- Nom commercial / domaine / marque (Python Nova provisoire).
- Modèle de prix, pays et infrastructures de résidence des données.
