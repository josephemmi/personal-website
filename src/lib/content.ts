import fs from "fs";
import path from "path";
import matter from "gray-matter";

import type { ContentEntry } from "@/lib/types";

const CONTENT_ROOT = path.join(process.cwd(), "content");

export function getSlugs(collection: string): string[] {
  const dir = path.join(CONTENT_ROOT, collection);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getEntry<T>(collection: string, slug: string): ContentEntry<T> {
  const filePath = path.join(CONTENT_ROOT, collection, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { slug, frontmatter: data as T, content };
}

export function getAllEntries<T>(collection: string): ContentEntry<T>[] {
  return getSlugs(collection).map((slug) => getEntry<T>(collection, slug));
}
