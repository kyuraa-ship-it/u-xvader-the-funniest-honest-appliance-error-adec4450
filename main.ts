import { writeFileSync, mkdirSync } from "node:fs";

const ENTRY =
  "Beep. Your food is cold. The plate is now hot enough to brand cattle. I did my job exactly as designed.";

const len = [...ENTRY].length;
if (len < 1 || len > 200 || !ENTRY.trim() || ENTRY.includes("\n")) {
  throw new Error(`gate failed: ${len} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${[...ENTRY].length} chars`);
