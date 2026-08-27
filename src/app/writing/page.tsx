import type { Metadata } from "next";

import { Container } from "@/components/site/container";
import { PageHeader } from "@/components/site/page-header";
import { WritingListItem } from "@/components/site/writing-list-item";
import { getAllEntries } from "@/lib/content";
import type { WritingFrontmatter } from "@/lib/types";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "A single, unified stream of writing on product, technology, business, photography, food, life and entrepreneurship.",
};

export default function WritingPage() {
  const entries = getAllEntries<WritingFrontmatter>("writing").sort((a, b) =>
    a.frontmatter.date > b.frontmatter.date ? -1 : 1
  );

  const topics = Array.from(new Set(entries.map((e) => e.frontmatter.topic)));

  return (
    <section className="pt-16 pb-24 sm:pt-24 sm:pb-28">
      <Container className="max-w-3xl">
        <PageHeader
          eyebrow="Writing"
          title="One stream, no separation"
          description="Product and life sit in the same feed here, on purpose. The topics below are just for browsing — everything belongs together."
        />

        <div className="mt-8 flex flex-wrap gap-2">
          {topics.map((topic) => (
            <span
              key={topic}
              className="rounded-full border border-border px-3 py-1 font-mono text-xs uppercase tracking-wider text-muted-foreground"
            >
              {topic}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-col divide-y divide-border">
          {entries.map((entry) => (
            <WritingListItem key={entry.slug} entry={entry} />
          ))}
        </div>
      </Container>
    </section>
  );
}
