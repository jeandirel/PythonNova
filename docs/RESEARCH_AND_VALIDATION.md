# Recherche et validation — Python Nova

## Point de départ
Le plan est une hypothèse de design produit. Les résultats éducatifs devront être **mesurés**, et les affirmations concurrentielles **vérifiées**.

## Étude utilisateurs
- Recruter un panel contrasté (13–17 ans avec autorisations appropriées, étudiants, adultes débutants, développeurs).
- Faire écrire une première boucle, lire un traceback, modifier un projet, expliquer une solution.
- Observer la première exécution, les demandes d'aide, l'autonomie et les blocages.
- Utiliser entretiens ouverts, observation et analyse anonymisée.
- Éviter les expérimentations non encadrées impliquant des enfants.

## Recherche pédagogique
- Tutorats socratiques et feedback graduel.
- Rappel actif, répétition espacée et exercices de transfert.
- Visualisation de l'exécution et modèle mental.
- Distinction performance aidée / compétence durable.
- Comparaison avec les solutions existantes et mesures de rétention.

## Mesures
| Mesure | Définition |
| --- | --- |
| Activation | Première exécution Python réussie avec une action consciente de l'élève |
| Time-to-first-run | Temps entre ouverture du laboratoire et première sortie |
| Taux d'indice | Nombre et profondeur d'indices par exercice |
| Maîtrise autonome | Taux de réussite sur tâches nouvelles sans IA |
| Transfert | Réussite sur variantes hors contexte initial |
| Rétention | Réussite à J+7 et J+30 |
| D7/D30 produit | Utilisateurs actifs à J+7/J+30, séparés de rétention cognitive |
| Qualité IA | Exactitude technique, pédagogie, sécurité, absence d'hallucination |
| Coût | Coût moyen de tokens et exécution / utilisateur actif |
| Performance | TTFB streaming / délai de feedback / taux d'erreur |

## Expériences contrôlées
- A/B indices gradués vs solution directe (en garantissant l'accès à l'aide nécessaire).
- Prédiction avant exécution vs leçon passive.
- Exercices fondés sur intérêts vs génériques.
- Recommandations basées sur maîtrise vs programme fixe.

## Contraintes légales et éthiques
- RGPD, minimisation des données, suppression/export.
- Consentement numérique des mineurs selon droit applicable.
- Évaluer les obligations AI Act pour la notation et l'orientation éducative.
- Modération, prévention des abus, pas de profilage commercial des enfants.
- Certification maison ≠ certification officiellement reconnue.

## Sources / veille
- Docs officielles des concurrents : voir COMPETITIVE_BENCHMARK.md.
- Python docs : https://docs.python.org/3/
- Pyodide : https://pyodide.org/
- Monaco : https://microsoft.github.io/monaco-editor/
- WCAG 2.2 : https://www.w3.org/TR/WCAG22/
- RGPD : https://eur-lex.europa.eu/eli/reg/2016/679/oj
- AI Act : https://eur-lex.europa.eu/eli/reg/2024/1689/oj

Revoir les versions / exigences avant implémentation : les liens sont des points d'entrée, non une preuve d'audit finalisé.
