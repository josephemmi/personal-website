import type { Metadata } from "next";

import { Container } from "@/components/site/container";
import { PageHeader } from "@/components/site/page-header";
import { PhotoCollectionCard } from "@/components/site/photo-collection-card";
import { getAllEntries } from "@/lib/content";
import type { PhotoCollectionFrontmatter } from "@/lib/types";

export const metadata: Metadata = {
  title: "Photography",
  description:
    "Photography collections — Glasgow, travel, street, details and the ongoing Here Then Gone project.",
};

export default function PhotographyPage() {
  const entries = getAllEntries<PhotoCollectionFrontmatter>("photography").sort(
    (a, b) => (a.frontmatter.order ?? 99) - (b.frontmatter.order ?? 99)
  );

  return (
    <section className="pt-16 pb-24 sm:pt-24 sm:pb-28">
      <Container className="max-w-5xl">
        <PageHeader
          eyebrow="Photography"
          title="A minimal record, mostly of light"
          description="A handful of collections rather than a single overwhelming grid — each one is a small, specific way of paying attention."
        />

        <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {entries.map((entry) => (
            <PhotoCollectionCard key={entry.slug} entry={entry} />
          ))}
        </div>
      </Container>
    </section>
  );
}
