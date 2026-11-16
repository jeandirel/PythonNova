import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

test("lesson contains three exercises and instructions", () => {
  const source = readFileSync(new URL("../src/lib/lesson.ts", import.meta.url), "utf8");
  for (const exercise of ["bonjour", "variable", "compter"]) assert.match(source, new RegExp('id: "' + exercise + '"'));
  assert.match(source, /expectedLines/);
});
