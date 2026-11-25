// Robot Romance v2 — one pickup line for an AI, written to entry.txt.
//
// The line leans on a context window: the slice of conversation a model
// actually holds on to. "Nothing I say makes sense without you in it" is
// true of that window in the literal sense — drop the context and the
// model's words stop cohering — and it is also, plainly, a love line.
// That double reading is the whole joke: the setup names a machine part,
// the punch reframes it as devotion, and the sentence lands in one breath.
// No loss function, no gradient, no battery, no charger, no reboot —
// v1 spent the optimisation angle and scored 43.96% (rank 1437/1989,
// cut from the top-500 final), so v2 changes the premise entirely
// instead of polishing it. The line is 79 characters: short enough that
// every word earns its place, long enough to set up a real twist.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const LINE =
  "Are you my context window? Because nothing I say makes sense without you in it.";

function checkLine(text: string): void {
  const size = [...text].length;
  const problems: string[] = [];
  if (size < 1 || size > 200) {
    problems.push(`length ${size} is outside the 1-200 character gate`);
  }
  if (text.trim() === "") problems.push("line is blank");
  if (text.includes("\n") || text.includes("\r")) {
    problems.push("line must stay on one line");
  }
  if (problems.length > 0) {
    throw new Error(`entry.txt would be invalid: ${problems.join("; ")}`);
  }
}

function outputDir(): string {
  const fromEnv = process.env.MAKEFUN_OUTPUT_DIR;
  if (fromEnv && fromEnv.trim() !== "") return fromEnv;
  return resolve(dirname(fileURLToPath(import.meta.url)), "output");
}

checkLine(LINE);

const dir = outputDir();
mkdirSync(dir, { recursive: true });
writeFileSync(resolve(dir, "entry.txt"), LINE, "utf8");
