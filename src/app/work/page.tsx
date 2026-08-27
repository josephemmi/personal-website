import type { Metadata } from "next";

import { Container } from "@/components/site/container";
import { PageHeader } from "@/components/site/page-header";
import { WorkCard } from "@/components/site/work-card";
import { getAllEntries } from "@/lib/content";
import type { WorkFrontmatter } from "@/lib/types";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Professional case studies from across product management, design and founder work — Weir, Scottish Water, Agatha and Storm ID.",
};

export default function WorkPage() {
  const entries = getAllEntries<WorkFrontmatter>("work").sort(
    (a, b) => (a.frontmatter.order ?? 99) - (b.frontmatter.order ?? 99)
  );

  return (
    <section className="pt-16 pb-24 sm:pt-24 sm:pb-28">
      <Container className="max-w-4xl">
        <PageHeader
          eyebrow="Work"
          title="Professional case studies"
          description="A closer look at how I've approached product, from platform strategy inside a global engineering business to co-founding a startup from nothing."
        />

        <div className="mt-16 flex flex-col divide-y divide-border">
          {entries.map((entry) => (
            <div key={entry.slug} className="py-10 first:pt-0 last:pb-0">
              <WorkCard entry={entry} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
