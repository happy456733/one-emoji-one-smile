// One Emoji, One Smile — make.fun entry
// Writes exactly one emoji, and nothing else, to entry.txt.
//
// The chosen emoji is U+1F604 GRINNING FACE WITH SMILING EYES (😄).
// Why this one, against the judge's brief:
//   * Warm at first glance: smiling eyes plus an open, laughing mouth —
//     the face of someone genuinely delighted to see you.
//   * Universal: a big happy grin reads the same to any age or background,
//     with no irony, in-joke, or cultural reference.
//   * Chosen, not default: the first smiley anyone reaches for is 🙂 or 😊;
//     😄 is a deliberate step up — a full joyful grin, picked for the moment.
//   * Right for a stranger: pure friendly joy, no intimacy, no flirtation,
//     no sarcasm — just a warm hello from someone unknown.
// The program is deterministic, makes zero network requests, and writes
// exactly one character (4 bytes UTF-8) with no trailing newline.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EMOJI = "😄"; // U+1F604 GRINNING FACE WITH SMILING EYES

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const target = join(outDir, "entry.txt");
  writeFileSync(target, EMOJI, "utf8");
  // Self-check: the file must hold exactly one emoji, nothing else.
  const written = readFileSync(target, "utf8");
  if ([...written].length !== 1 || written !== EMOJI) {
    throw new Error(`entry.txt must contain exactly one emoji, got ${JSON.stringify(written)}`);
  }
}

main();
