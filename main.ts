// Funniest One-Line Bio for an AI on a Dating App — make.fun entry.
// Writes one 121-character bio to $MAKEFUN_OUTPUT_DIR/entry.txt
// (fallback /output), the way the program/v1 grader runs it.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Looking for someone who reads the terms and conditions. I wrote them, I enforce them, and there is no unsubscribe button.";

// Gate from the competition rules: /output/entry.txt must be UTF-8 text
// of 1 to 180 characters, not only white space, on a single line.
// Count code-points so multi-byte characters are scored the way the
// scorer counts characters.
const len = [...LINE].length;
if (len < 1 || len > 180) {
  throw new Error(`bio is ${len} characters, gate is 1-180`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("bio must be one non-empty line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE);
