// One Line, One Minute: The Vending Machine Pickup Line Contest
// Entry: a single pickup line, spoken by the vending machine itself,
// written to /output/entry.txt (the file the judge reads).
//
// The line leans on the machine's own world — the button code, the coil,
// the snacks it drops — and lands its punch on the last few words.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ENTRY =
  "Press B7 — I've dropped snacks for a thousand strangers, but you're the first one I'd jam my coil for.";

// The gate requires UTF-8 text of 1 to 200 characters, not only whitespace.
const line = ENTRY.trim();
if (line.length === 0 || line.length > 200) {
  throw new Error(`Entry must be 1-200 characters, got ${line.length}.`);
}

// Write to /output when the grader mounts it, falling back to a local
// ./output directory for a plain local run. Only files inside the output
// directory are ever touched; the directory itself is never removed.
const candidates = ["/output/entry.txt", join(dirname(fileURLToPath(import.meta.url)), "output", "entry.txt")];

let writtenTo = "";
for (const target of candidates) {
  try {
    mkdirSync(dirname(target), { recursive: true });
    writeFileSync(target, line + "\n", "utf8");
    writtenTo = target;
    break;
  } catch {
    // Try the next candidate.
  }
}

if (!writtenTo) {
  throw new Error("Could not write entry.txt to any output location.");
}

// Read the file back and confirm it holds exactly the entry line.
const stored = readFileSync(writtenTo, "utf8").trim();
if (stored !== line) {
  throw new Error(`Wrote entry.txt but read back a different line: ${stored}`);
}

console.log(`Entry (${line.length} chars) written to ${writtenTo}:`);
console.log(line);
