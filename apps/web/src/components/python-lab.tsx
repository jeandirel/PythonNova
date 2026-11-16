"use client";

import dynamic from "next/dynamic";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, BookOpen, Check, ChevronRight, CircleHelp, Code2, Lightbulb, LoaderCircle, Play, RotateCcw, Sparkles, Square, Terminal, Trophy, Zap } from "lucide-react";
import { firstLesson, checkOutput } from "@/lib/lesson";

const Editor = dynamic(() => import("@monaco-editor/react"), { ssr: false });
const CODE_PREFIX = "python-nova:v1:code:";
const PASS_PREFIX = "python-nova:v1:passed:";
const MAX_RUN_MS = 12_000;

type RunResult = { type: "result"; id: number; stdout: string; stderr: string; error?: string };

export function PythonLab() {
  const [selected, setSelected] = useState(0);
  const [code, setCode] = useState<string>(firstLesson.exercises[0].starter);
  const [passed, setPassed] = useState<string[]>([]);
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [running, setRunning] = useState(false);
  const [hintLevel, setHintLevel] = useState(0);
  const [tab, setTab] = useState<"console" | "explanation">("console");
  const [result, setResult] = useState<"idle" | "pass" | "fail">("idle");
  const workerRef = useRef<Worker | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const nextId = useRef(0);
  const exercise = firstLesson.exercises[selected];

  useEffect(() => {
    try {
      const savedPassed = JSON.parse(localStorage.getItem(PASS_PREFIX) || "[]");
      if (Array.isArray(savedPassed)) setPassed(savedPassed.filter((v): v is string => typeof v === "string"));
      const savedCode = localStorage.getItem(CODE_PREFIX + firstLesson.exercises[0].id);
      if (savedCode !== null) setCode(savedCode);
    } catch { /* storage disabled or invalid */ }
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      workerRef.current?.terminate();
    };
  }, []);

  const abortRun = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = null;
    workerRef.current?.terminate();
    workerRef.current = null;
    setRunning(false);
  }, []);

  const openExercise = (index: number) => {
    abortRun();
    setSelected(index);
    const next = firstLesson.exercises[index];
    try { setCode(localStorage.getItem(CODE_PREFIX + next.id) ?? next.starter); }
    catch { setCode(next.starter); }
    setOutput(""); setError(""); setHintLevel(0); setResult("idle"); setTab("console");
  };

  const changeCode = (value: string | undefined) => {
    const next = value ?? "";
    setCode(next);
    setResult("idle");
    try { localStorage.setItem(CODE_PREFIX + exercise.id, next); } catch { /* private mode */ }
  };

  const run = () => {
    if (running) return;
    abortRun();
    setRunning(true);
    setResult("idle");
    setOutput(""); setError(""); setTab("console");
    const id = ++nextId.current;
    const worker = new Worker(new URL("../workers/python.worker.ts", import.meta.url), { type: "module" });
    workerRef.current = worker;
    worker.onmessage = (event: MessageEvent<RunResult>) => {
      const data = event.data;
      if (data.type !== "result" || data.id !== id) return;
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
      setRunning(false);
      worker.terminate(); workerRef.current = null;
      setOutput(data.stdout || "(Aucune sortie affichée)");
      setError(data.error || data.stderr || "");
      const success = !data.error && !data.stderr && checkOutput(data.stdout, exercise.expectedLines);
      setResult(success ? "pass" : "fail");
      if (success) {
        setPassed(prev => {
          const updated = [...new Set([...prev, exercise.id])];
          try { localStorage.setItem(PASS_PREFIX, JSON.stringify(updated)); } catch { /* private mode */ }
          return updated;
        });
      }
    };
    worker.onerror = () => {
      abortRun();
      setError("Le moteur Python n'a pas pu démarrer. Vérifie ta connexion puis réessaie.");
      setResult("fail");
    };
    timeoutRef.current = setTimeout(() => {
      abortRun();
      setError("Exécution arrêtée après 12 secondes. Vérifie notamment les boucles infinies.");
      setResult("fail");
    }, MAX_RUN_MS);
    worker.postMessage({ type: "run", id, code });
  };

  const reset = () => changeCode(exercise.starter);
  const completed = firstLesson.exercises.every(item => passed.includes(item.id));
  const progress = Math.round((passed.length / firstLesson.exercises.length) * 100);

  return <div className="app-shell">
    <aside className="sidebar">
      <div className="brand"><span className="brand-icon"><Code2 size={21}/></span><div><strong>python<span>nova</span></strong><small>LEARN · BUILD · GROW</small></div></div>
      <div className="nav-label">ESPACE PERSONNEL</div>
      <nav aria-label="Navigation principale" className="nav-list">
        <a className="nav-item active" href="#laboratoire"><BookOpen size={18}/> Apprendre <ChevronRight size={16}/></a>
        <a className="nav-item" href="#laboratoire"><Terminal size={18}/> Laboratoire</a>
        <a className="nav-item" href="#progression"><Trophy size={18}/> Mes compétences</a>
      </nav>
      <div className="sidebar-course"><div className="tiny-icon"><Zap size={16}/></div><div className="course-overline">TON PARCOURS ACTUEL</div><strong>Les bases de Python</strong><div className="progress-track"><div style={{width: progress + "%"}}/></div><span>{progress}% du module terminé</span></div>
      <div className="nav-label">EXERCICES DE LA LEÇON</div>
      <div className="exercise-list">{firstLesson.exercises.map((item, i) => <button key={item.id} type="button" onClick={() => openExercise(i)} className={i === selected ? "exercise selected" : "exercise"}><span className={passed.includes(item.id) ? "exercise-number done" : "exercise-number"}>{passed.includes(item.id) ? <Check size={13}/> : String(i+1).padStart(2,"0")}</span><span>{item.title}</span></button>)}</div>
      <div className="sidebar-footer"><span className="avatar">PN</span><div><strong>Mode découverte</strong><small>Progression locale · V1</small></div></div>
    </aside>
    <main className="main" id="laboratoire">
      <header className="topbar"><span>Parcours Python <ChevronRight size={14}/> <b>Premiers pas</b></span><span className="top-right"><span className="status-dot"/> Environnement interactif <span className="version">BÊTA 0.1</span></span></header>
      <div className="workspace">
        <div className="heading"><div className="eyebrow"><Sparkles size={15}/> {firstLesson.eyebrow}</div><h1>{firstLesson.title}<span className="heading-mark">.</span></h1><p>{firstLesson.subtitle}</p></div>
        <div className="workspace-grid">
          <section className="lesson-panel" aria-label="Contenu du cours">
            <div className="panel-kicker"><BookOpen size={16}/> LA LEÇON</div>
            <h2>Une idée. Quelques lignes. <span>De grandes possibilités.</span></h2>
            <p>Python lit ton programme ligne par ligne. Avec <code>print()</code>, tu peux afficher du texte. Une <strong>variable</strong> te permet de retenir une information pour la réutiliser plus tard.</p>
            <div className="example"><span>EXEMPLE</span><pre>{'prenom = "Alex"\nprint("Bonjour", prenom)'}</pre><div className="example-result">→ Bonjour Alex</div></div>
            <h3>Ton défi #{selected + 1}</h3><p>{exercise.instructions}</p>
            <div className="objective"><span className="objective-icon"><Zap size={17}/></span><div><strong>À toi de jouer !</strong><small>Écris ton code puis clique sur Exécuter. Le système comparera la sortie avec le résultat attendu.</small></div></div>
            <div className="lesson-bottom"><strong>À retenir</strong><ul>{firstLesson.objectives.map(o=><li key={o}>{o}</li>)}</ul></div>
          </section>
          <section className="code-panel" aria-label="Éditeur de code Python">
            <div className="editor-header"><div><span className="file-dot"/><strong>main.py</strong><span className="language-pill">Python 3</span></div><button type="button" onClick={reset} className="icon-button" title="Réinitialiser le code"><RotateCcw size={16}/> <span>Réinitialiser</span></button></div>
            <div className="editor-area"><Editor height="100%" language="python" theme="vs-dark" value={code} onChange={changeCode} options={{fontSize:14,fontFamily:"var(--font-mono), ui-monospace, monospace",minimap:{enabled:false},lineNumbers:"on",scrollBeyondLastLine:false,automaticLayout:true,padding:{top:18},wordWrap:"on"}} loading={<div className="editor-loading">Chargement de l’éditeur…</div>}/></div>
            <div className="editor-toolbar"><span><span className="status-dot"/> Prêt à coder</span><div className="toolbar-actions">{running && <button type="button" className="secondary-button" onClick={abortRun}><Square size={13}/> Arrêter</button>}<button type="button" className="run-button" onClick={run} disabled={running}>{running ? <LoaderCircle size={17} className="spin"/> : <Play size={17} fill="currentColor"/>}{running ? "Exécution…" : "Exécuter le code"}</button></div></div>
            <div className="console-header"><button className={tab === "console" ? "console-tab active" : "console-tab"} type="button" onClick={()=>setTab("console")}><Terminal size={15}/> Console</button><button className={tab === "explanation" ? "console-tab active" : "console-tab"} type="button" onClick={()=>setTab("explanation")}><CircleHelp size={15}/> Résultat attendu</button></div>
            <div className="console-area" role="status" aria-live="polite">{tab === "console" ? <>{error && <pre className="console-error">{error}</pre>}<pre>{output || (running ? "Préparation de Python…" : "Clique sur « Exécuter le code » pour voir le résultat ici.")}</pre>{result === "pass" && <div className="feedback success"><Check size={16}/> Bravo ! La sortie correspond au résultat attendu.</div>}{result === "fail" && !error && <div className="feedback warning">Ce n'est pas encore la sortie attendue. Compare ton résultat et essaie à nouveau.</div>}</> : <pre>{exercise.expectedLines.join("\n")}</pre>}</div>
            <div className="editor-footer"><span>Le code s'exécute localement dans ton navigateur avec Pyodide.</span>{selected < firstLesson.exercises.length-1 && <button type="button" onClick={()=>openExercise(selected+1)}>Exercice suivant <ArrowRight size={15}/></button>}</div>
          </section>
          <section className="mentor-panel" aria-label="Mentor pédagogique"><div className="mentor-header"><span className="mentor-avatar"><Sparkles size={20}/></span><div><strong>Nova Mentor</strong><small>GUIDE PÉDAGOGIQUE · V1</small></div><span className="mentor-indicator"/></div>
            <div className="mentor-body"><div className="mentor-bubble"><span className="mentor-welcome">👋 Bienvenue dans ton labo !</span><p>Je suis là pour t'aider à comprendre le code, étape par étape.</p><p>Si tu bloques, commence par demander un indice plutôt que la solution.</p></div><div className="mentor-tip"><Lightbulb size={19}/><div><strong>Le savais-tu ?</strong><p>Se tromper en programmant, c'est normal. Chaque erreur est une occasion d'apprendre.</p></div></div>{hintLevel > 0 && <div className="mentor-bubble hint"><strong>Indice {hintLevel} / 2</strong><p>{hintLevel === 1 ? "Lis attentivement la consigne. Quel texte ou nombre doit apparaître dans la console ?" : exercise.hint}</p></div>}{completed && <div className="mentor-bubble"><strong>🎉 Leçon terminée !</strong><p>Tu as réussi les trois exercices. Pour confirmer ta maîtrise, essaie maintenant de résoudre une variante sans aide.</p></div>}</div>
            <div className="mentor-actions"><p><Sparkles size={14}/> L'IA temps réel sera ajoutée prochainement. Pour l'instant, les indices sont préparés à l'avance.</p><button type="button" onClick={()=>setHintLevel(v=>Math.min(2,v+1))} disabled={hintLevel === 2}><Lightbulb size={17}/>{hintLevel === 0 ? "Donne-moi un indice" : hintLevel === 1 ? "Un indice plus précis" : "Tous les indices affichés"}</button></div>
          </section>
        </div>
        <div id="progression" className="bottom-stats"><span><span className="stat-icon">⚡</span> Apprentissage pratique · Python uniquement</span><span>{passed.length} / {firstLesson.exercises.length} exercices validés</span></div>
      </div>
    </main>
  </div>;
}
