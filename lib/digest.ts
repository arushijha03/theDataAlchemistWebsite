import fs from "fs";
import path from "path";
import type { WeeklyDigest } from "./digest-types";

export type { DigestArticle, WeeklyDigest } from "./digest-types";
export { CATEGORY_STYLES } from "./digest-types";

const DIGEST_DIR = path.join(process.cwd(), "content", "weekly-digest");

export function getAllDigests(): WeeklyDigest[] {
  if (!fs.existsSync(DIGEST_DIR)) return [];

  const files = fs
    .readdirSync(DIGEST_DIR)
    .filter((f) => f.endsWith(".json"))
    .sort()
    .reverse();

  return files.map((file) => {
    const raw = fs.readFileSync(path.join(DIGEST_DIR, file), "utf-8");
    return JSON.parse(raw) as WeeklyDigest;
  });
}

export function getDigestBySlug(slug: string): WeeklyDigest | null {
  const filePath = path.join(DIGEST_DIR, `${slug}.json`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw) as WeeklyDigest;
}

export function getAllDigestSlugs(): string[] {
  if (!fs.existsSync(DIGEST_DIR)) return [];

  return fs
    .readdirSync(DIGEST_DIR)
    .filter((f) => f.endsWith(".json"))
    .map((f) => f.replace(".json", ""))
    .sort()
    .reverse();
}

export function getAdjacentDigests(slug: string): { prev: string | null; next: string | null } {
  const slugs = getAllDigestSlugs();
  const idx = slugs.indexOf(slug);
  return {
    prev: idx < slugs.length - 1 ? slugs[idx + 1] : null,
    next: idx > 0 ? slugs[idx - 1] : null,
  };
}
