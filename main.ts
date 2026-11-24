// One Letter for Your Day: send exactly one character, a letter A to Z,
// standing for the word that describes the sender's day.
// The judge only ever sees the letter, so the letter has to make it
// picture the word behind it. K stands for "knackered": a day so
// exhausting it left you wrecked. It is vivid and specific (a sharp
// picture of a spent day), funny and surprising at once, true to a real
// day, and it is not the obvious pick. The hard K sound fits the word,
// and the letter carries the whole joke on its own.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LETTER = "K";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// Write the letter exactly as-is, no trailing newline added, so the
// sealed gate sees exactly one character: the letter K and nothing else.
writeFileSync(join(outDir, "entry.txt"), LETTER, "utf8");
