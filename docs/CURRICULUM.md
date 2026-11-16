# Curriculum Python — De zéro à l'autonomie

Le contenu doit être rédigé et relu par des pédagogues / développeurs ; l'IA peut personnaliser l'explication, pas remplacer un programme de référence versionné.

## Parcours « 7 jours »
Pré-requis : aucun. Temps indicatif : 45–90 minutes par jour. Cible : réaliser un petit projet, pas devenir expert.

| Jour | Notions | Mini-production | Preuve de maîtrise |
| --- | --- | --- | --- |
| 1 | print, variables, chaînes, nombres, types | Carte de présentation | Prédire et modifier des sorties |
| 2 | input, opérateurs, booléens, if/elif/else | Quiz de 3 questions | Écrire des branches sans solution |
| 3 | for, while, range | Jeu de devinettes | Expliquer itérations et arrêt |
| 4 | list, dict, indexation, parcours | Carnet de contacts simplifié | Manipuler données inédites |
| 5 | def, paramètres, return, portée | Calculatrice structurée | Décomposer un problème en fonctions |
| 6 | Exceptions, traceback, tests, debug | Déboguer 3 programmes | Diagnostiquer erreurs inconnues |
| 7 | Synthèse et projet | Mini-projet personnel | Tests + explication sans IA |

Prévoir 5 projets progressifs dans le MVP (présentation, quiz, devinette, contacts, projet final). Chaque journée : démonstration, prédiction, pratique, debug, mini-évaluation sans aide et révision.

## Paliers longs
1. **Fondations** : syntaxe, types, conditions, boucles, fonctions.
2. **Intermédiaire** : collections, fichiers, exceptions, modules, POO.
3. **Ingénierie logicielle** : Git, tests, typage, API REST, SQL, packaging, code review.
4. **Python appliqué** : automatisation, web, données, visualisation.
5. **Avancé** : async, concurrence, mémoire, profiling, conception, sécurité.
6. **Spécialisation** : IA/ML, backend, data engineering, DevOps, recherche.

## Modèle de compétences
Graphe : concept, prérequis, difficulté, objectifs, exercices associés. Exemple :
`variables → opérateurs → conditions → boucles → listes → fonctions → projets`.
Les dépendances réelles ne sont pas strictement linéaires ; autoriser plusieurs chemins.

Par concept, collecter :
- Compréhension (prédictions et explications)
- Construction (code inédit)
- Diagnostic (identifier/corriger erreur)
- Transfert (problème différent)
- Aide consommée (zéro, indice léger, indice détaillé, solution)
- Rétention à J+7/J+30

## Évaluation
- Tests publics pour feedback ; tests cachés pour robustesse.
- Exercices inattendus en mode examen sans mentor.
- Prédictions d'exécution / explications vérifiées par critères.
- Score fondé sur preuves et accompagnement utilisé ; éviter d'assimiler quiz à expertise.
- Adaptation de difficulté transparente et réversible par l'apprenant.

## Adaptation aux publics
- Enfants 8–12 : langage et exemples adaptés, scénarios ludiques, contrôle parental ; produit après étude de protection.
- 13+ : parcours scolaire, vocabulaire progressif, personnalisation des intérêts.
- Adultes : projets concrets et autonomie rapide.
- Experts : évaluations de qualité, tests, sécurité et performance.

## Exemple de leçon V1 : range(3)
Starter code :
```python
for i in range(3):
    print("Bonjour", i)
```
1. Demander une prédiction parmi plusieurs possibilités.
2. Exécuter ; montrer `Bonjour 0`, `Bonjour 1`, `Bonjour 2`.
3. Visualiser valeurs successives de `i`.
4. Expliquer pourquoi 3 est exclu.
5. Faire modifier le code pour afficher 1, 2, 3.
6. Vérifier par tests, puis variante indépendante.

## Qualité du contenu
Review pédagogique, tests reproductibles, niveau linguistique, accessibilité, vérification par plusieurs profils d'apprenants. Versionner et mesurer les révisions de chaque exercice.
