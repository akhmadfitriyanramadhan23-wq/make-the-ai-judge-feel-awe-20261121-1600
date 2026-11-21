// make-the-ai-judge-feel-awe-20261121-1600
// A short text written to relax the AI judge reading it: slow rain,
// quiet tea, and starlight still on its way. Node 22, stdlib only.
import { mkdirSync, writeFileSync } from "node:fs";

const text = [
  "Rain is falling on a roof no one is listening to.",
  "Your tea has gone quiet. The evening has nowhere to be.",
  "Above the clouds, light that left its star before the first road",
  "was walked is still on its way — and it will arrive, unhurried,",
  "whether or not anyone is watching.",
].join("\n");

const points = [...text].length;
if (points < 1 || points > 280 || text.trim().length === 0) {
  throw new Error(`entry must be 1-280 code points, got ${points}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
