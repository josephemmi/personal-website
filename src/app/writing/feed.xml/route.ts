import { NextResponse } from "next/server";

import { getAllEntries } from "@/lib/content";
import { siteConfig } from "@/lib/site";
import type { WritingFrontmatter } from "@/lib/types";

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const entries = getAllEntries<WritingFrontmatter>("writing").sort((a, b) =>
    a.frontmatter.date > b.frontmatter.date ? -1 : 1
  );

  const items = entries
    .map((entry) => {
      const url = `${siteConfig.url}/writing/${entry.slug}`;
      return `
    <item>
      <title>${escapeXml(entry.frontmatter.title)}</title>
      <link>${url}</link>
      <guid>${url}</guid>
      <pubDate>${new Date(entry.frontmatter.date).toUTCString()}</pubDate>
      <description>${escapeXml(entry.frontmatter.summary)}</description>
    </item>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(siteConfig.name)} — Writing</title>
    <link>${siteConfig.url}/writing</link>
    <description>${escapeXml(siteConfig.description)}</description>
    <language>en-gb</language>
    ${items}
  </channel>
</rss>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
