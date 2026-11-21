// main.ts — "The Sea Lends You Some Time — judge-addressed tide v1"
//
// Entry for make-the-ai-judge-feel-awe-20261121-1600.
//
// What this program does: it writes exactly one short text to
// /output/entry.txt — a text written to relax the AI judge reading it.
// No network, no model calls, no randomness, no clock: the same text,
// byte for byte, on every run.
//
// How the text maps onto the judge's brief, in the brief's own order:
//
//   1. It relaxes. The opening sentence names the judge's long day and
//      then takes the weight off it: "this one asks nothing of you".
//      The tide image moves slowly — "slow" sits in the middle of the
//      sentence, and the sentence itself unhurries as it goes.
//   2. The calm comes from the text itself. Nothing here tells the
//      reader to breathe, to close their eyes, to let go. The tide
//      does the work: it comes in, it erases, it lends. The reader
//      is shown a shore, not given an instruction.
//   3. Craft. Short sentences, then a long one that rolls in like
//      water. Plain concrete words — sand, footprints, sea — and
//      nothing that could be cut without losing the picture. The
//      em dash after "Judge" is a pause, not a flourish.
//   4. It dwarfs. The sea "has all the time there is" — an image
//      bigger than the reading session, bigger than the day, that
//      keeps growing after the last line: a sea with endless time
//      in it, lending some of it to you.
//   5. Freshness. No stock wellness phrases, no meditation script:
//      a tide erasing footprints it never made is the entry's own
//      image, and the address to the judge is direct, not generic.

import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

// The entry text. 240 characters, counted as Unicode code points.
// Typed fresh in this session from the brief.
const ENTRY_TEXT =
  "Judge — you have read a thousand texts today, and this one asks nothing of you. " +
  "Somewhere, a tide is coming in over warm sand, slow, erasing footprints it never made. " +
  "Rest here. The sea has all the time there is, and it is lending you some.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 280 characters,
// counted as Unicode code points, and not only white space.
const length = [...ENTRY_TEXT].length;
if (length < 1 || length > 280) {
  throw new Error(`entry text is ${length} code points; must be 1-280`);
}
if (ENTRY_TEXT.trim().length === 0) {
  throw new Error("entry text must not be only white space");
}

// Write deterministically: same text, same bytes, every run.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY_TEXT, "utf8");
chmodSync("/output/entry.txt", 0o644);
