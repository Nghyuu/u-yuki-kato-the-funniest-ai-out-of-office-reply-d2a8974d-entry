import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir || outDir.trim() === "") {
  console.error("MAKEFUN_OUTPUT_DIR is not set");
  process.exit(1);
}
// Copy the entry next to this script into the grader's output directory.
mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "entry.txt"), join(outDir, "entry.txt"));
