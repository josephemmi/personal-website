import type { Metadata } from "next";

import { MdxContent } from "@/components/mdx/mdx-content";
import { Container } from "@/components/site/container";
import { PageHeader } from "@/components/site/page-header";
import { getEntry } from "@/lib/content";
import { formatDate } from "@/lib/utils";
import type { NowFrontmatter } from "@/lib/types";

export const metadata: Metadata = {
  title: "Now",
  description: "A living, manually-updated snapshot of what Joseph Emmi is working on, building, learning, reading, listening to and planning.",
};

const SECTIONS: { key: keyof NowFrontmatter; label: string }[] = [
  { key: "workingOn", label: "Working On" },
  { key: "building", label: "Building" },
  { key: "learning", label: "Learning" },
  { key: "reading", label: "Reading" },
  { key: "listening", label: "Listening" },
  { key: "planning", label: "Planning" },
];

export default function NowPage() {
  const { frontmatter, content } = getEntry<NowFrontmatter>("now", "current");

  return (
    <section className="pt-16 pb-24 sm:pt-24 sm:pb-28">
      <Container className="max-w-2xl">
        <PageHeader eyebrow="Now" title="What I'm doing right now" />
        <p className="mt-4 font-mono text-xs text-muted-foreground">
          Last updated {formatDate(frontmatter.updated)}
        </p>

        <div className="mt-8">
          <MdxContent source={content} />
        </div>

        <div className="mt-14 flex flex-col gap-12">
          {SECTIONS.map((section) => {
            const items = frontmatter[section.key] as string[];
            if (!items?.length) return null;
            return (
              <div key={section.key}>
                <h2 className="font-mono text-xs uppercase tracking-wider text-accent">
                  {section.label}
                </h2>
                <ul className="mt-3 flex flex-col gap-2">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-muted-foreground leading-relaxed"
                    >
                      <span className="mt-2.5 size-1 shrink-0 rounded-full bg-border" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
