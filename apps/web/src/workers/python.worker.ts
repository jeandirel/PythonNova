/// <reference lib="webworker" />
import { loadPyodide, type PyodideInterface } from "pyodide";

type Incoming = { type: "run"; id: number; code: string };
type Outgoing = { type: "ready" } | { type: "result"; id: number; stdout: string; stderr: string; error?: string } | { type: "fatal"; message: string };
const scope = self as DedicatedWorkerGlobalScope;
let engine: Promise<PyodideInterface> | undefined;

function getEngine(): Promise<PyodideInterface> {
  if (!engine) {
    engine = loadPyodide({ indexURL: "https://cdn.jsdelivr.net/pyodide/v0.28.2/full/" });
  }
  return engine;
}

scope.onmessage = async (event: MessageEvent<Incoming>) => {
  if (event.data.type !== "run") return;
  const { id, code } = event.data;
  let stdout = "";
  let stderr = "";
  try {
    const pyodide = await getEngine();
    pyodide.setStdout({ batched: (line: string) => { stdout += line + "\n"; } });
    pyodide.setStderr({ batched: (line: string) => { stderr += line + "\n"; } });
    // A fresh Python namespace avoids accidental variables persisting across exercises.
    const globals = pyodide.globals.get("dict")();
    try {
      await pyodide.runPythonAsync(code, { globals });
      const response: Outgoing = { type: "result", id, stdout, stderr };
      scope.postMessage(response);
    } finally {
      globals.destroy();
    }
  } catch (error) {
    const response: Outgoing = {
      type: "result", id, stdout, stderr,
      error: error instanceof Error ? error.message : String(error),
    };
    scope.postMessage(response);
  }
};
