# Python Nova — Vision produit et cahier des charges

Version : 0.1 — 16 novembre 2026. Statut : vision / hypothèses à valider.

## Mission
Faire de Python Nova une plateforme d'apprentissage de Python de référence mondiale : un environnement où chacun apprend à raisonner, lire, écrire, exécuter, déboguer et construire des projets Python, grâce à un professeur IA contextualisé qui favorise l'autonomie.

**Principe fondateur : l'IA doit rendre l'apprenant progressivement indépendant, et non lui fournir systématiquement des solutions.**

## Ambition et garde-fous
- Débutant : obtenir un premier programme exécuté dès la première séance.
- Parcours « 7 jours » : viser un mini-projet réalisé et expliqué de façon autonome après 7 journées de pratique (~45–90 min/jour), sans promettre l'expertise.
- Apprentissage fondé sur des preuves : évaluer la compréhension, l'écriture, le débogage et le transfert vers des problèmes nouveaux.
- Langage unique au lancement : **Python**. L'architecture peut être extensible, mais aucun autre langage n'est prévu pour le MVP.
- Produit international, interface FR/EN en priorité ; accessibilité WCAG 2.2 AA visée.
- « N°1 mondial » est une **ambition**, non un résultat acquis : déterminer la réussite à partir de données comparatives et d'expériences utilisateurs.

## Publics
| Expérience | Public | Objectif | Statut |
| --- | --- | --- | --- |
| Nova Kids | 8–12 ans | Découverte visuelle, jeux, narration | Plus tard ; exigences spécifiques mineurs |
| Nova Student | 13+ / scolaires et étudiants | Algorithmique, devoirs, examens, projets | MVP débutants 13+ |
| Nova Builder | Adultes débutants / reconversion | Automatisation, scripts et projets utiles | MVP débutants |
| Nova Pro | Développeurs confirmés | Tests, architecture, performance, sécurité, API, IA | Phase ultérieure |

Les modes partagent une base de compétences, pas nécessairement l'interface ni la politique de sécurité. Onboarding progressif plutôt que questionnaire long.

## Problèmes utilisateur à résoudre
1. Réussir des exercices guidés sans savoir coder seul.
2. Recevoir une solution IA avant d'avoir réfléchi.
3. Corriger une exception sans comprendre son origine.
4. Suivre un parcours inadapté à son niveau et à ses intérêts.
5. Oublier les notions déjà apprises.
6. Ne jamais transformer les notions en projets concrets.

Ce sont des hypothèses à vérifier auprès d'apprenants ; ne pas attribuer ces défauts indistinctement à tous les concurrents.

## Proposition de valeur
« Apprends Python à ton rythme, comprends chaque ligne de code, construis tes propres projets et prouve tes compétences. »

Différenciation : **tuteur socratique + visualisation d'exécution + modèle de compétences + évaluations autonomes + projets personnalisés**, intégrés dans la même boucle pédagogique.

## Boucle centrale d'apprentissage
1. L'apprenant reçoit un défi adapté à un objectif explicite.
2. Il prédit ce que fera le code (rappel actif).
3. Il écrit ou modifie du Python dans l'éditeur.
4. Il exécute dans un environnement isolé ; voit stdout, stderr et tests.
5. Il peut demander un indice gradué, une explication, une visualisation.
6. Le système enregistre sa tentative, ses erreurs et le niveau d'aide.
7. Le moteur pédagogique propose une remédiation ou une difficulté accrue.
8. L'apprenant résout plus tard une variante inédite **sans IA**.
9. Ses acquis sont réévalués à J+7 / J+30.

Une bonne réponse assistée n'est pas équivalente à une compétence autonome.

## Expérience et ergonomie
- Navigation : Accueil, Apprendre, Laboratoire, Projets, Mes compétences, Communauté (plus tard).
- Laboratoire desktop : cours à gauche, éditeur central, console/tests dessous, tuteur IA à droite ; panneaux redimensionnables, navigation au clavier.
- Mobile : vues successives cours / code / résultats / IA, sans miniaturiser tout le desktop.
- Light/dark mode, typographie lisible, contraste, mouvement réduit, lecteur d'écran, autosave et reprise de session.
- Démarrage rapide : première leçon avant inscription si techniquement faisable ; demande d'inscription au moment de sauvegarder la progression durablement.
- Transparence : distinguer résultat vérifié par exécution et hypothèse d'un LLM.
- Design moderne mais sans surcharge gamifiée, ni classement infantilisant imposé.

## Douze modules
1. **Nova Brain** : tuteur IA tenant compte de l'objectif, de la leçon, du code, des erreurs et des difficultés.
2. **Code X-Ray** : visualisation pas à pas des variables, boucles, fonctions et appels.
3. **Nova Socratic** : indices en escalier, questions de prédiction et raisonnement guidé.
4. **Knowledge DNA** : graphe de compétences, prérequis, lacunes, révisions.
5. **Voice Mentor** : tutorat vocal et explication orale du code (plus tard).
6. **Error Doctor** : diagnostic de traceback, cause et exercice de remédiation.
7. **Algorithm Lab** : blocs / diagrammes → Python puis exercice sans blocs (plus tard).
8. **Dream-to-Code** : découper un projet souhaité en jalons vérifiables.
9. **Memory Engine** : répétition espacée, rappel actif, contrôle de rétention.
10. **Independence Exam** : exercices inconnus sans IA, tests objectifs, défense de solution.
11. **Classroom** : espaces enseignants, devoirs, suivi et contrôles d'accès (plus tard).
12. **Global Learning** : localisation, accessibilité, usages bas débit, leçons partiellement hors ligne.

## Politique d'aide IA
- Modes : **Apprendre** (question → indice → explication), **Explorer** (solution complète possible) et **Évaluation** (aide désactivée).
- Tracer le niveau d'aide pour contextualiser les scores.
- Ne jamais affirmer avoir exécuté du code sans résultat d'un exécuteur.
- Pour les mineurs, modérer les échanges et minimiser les données personnelles.
- Réponses adaptées à l'âge, sans surpromesse ni notation psychologique.

## Modèle économique — hypothèses
- Gratuit : premier parcours, éditeur navigateur, quota raisonnable d'IA.
- Premium : mentor IA étendu, voix, projets avancés et sandbox serveur sous quotas.
- Écoles : espaces de classe, administration, supervision et conformité.
- Tarif, coût d'inférence, coût sandbox, conversion et churn restent à tester.

## Objectifs pilotes (non mesurés)
- ≥70 % des apprenants actifs du pilote terminent un mini-projet autonome à J+7.
- ≥80 % des réponses de tutorat satisfont une grille d'évaluation pédagogique experte.
- Premier token/retour IA ≤3 s en conditions de référence (objectif, non SLA).
- Rétention de connaissances mesurée à J+30 sur défis nouveaux.
- Mesurer : activation, leçons autonomes, taux d'indices, temps de résolution, erreurs fréquentes, rétention D7/D30, coût/session, accessibilité.

## Hors périmètre MVP
Application mobile native ; autres langages ; marketplace ; certificats officiellement reconnus ; surveillance invasive ; déploiement multi-cloud ; communauté ouverte aux mineurs ; IA vocale ; salles de classe complètes.

## Critères d'acceptation généraux
- Le flux leçon → code → exécution → correction → IA → progression fonctionne de bout en bout.
- Une évaluation autonome ne donne pas de points de maîtrise pour une solution fournie par l'IA.
- Les erreurs du code élève n'affectent pas l'application ni les données d'autres utilisateurs.
- Observabilité, coûts et accessibilité vérifiables.
- Aucune revendication « certifié », « meilleur au monde » ou « expert en 7 jours » sans preuve.
