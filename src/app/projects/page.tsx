import type { Metadata } from "next";

import { Container } from "@/components/site/container";
import { PageHeader } from "@/components/site/page-header";
import { ProjectCard } from "@/components/site/project-card";
import { getAllEntries } from "@/lib/content";
import type { ProjectFrontmatter } from "@/lib/types";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Personal projects across music, photography, food and AI — Reissued, Here Then Gone, Da Mangiare, Attimino and ongoing AI experiments.",
};

export default function ProjectsPage() {
  const entries = getAllEntries<ProjectFrontmatter>("projects").sort(
    (a, b) => (a.frontmatter.order ?? 99) - (b.frontmatter.order ?? 99)
  );

  return (
    <section className="pt-16 pb-24 sm:pt-24 sm:pb-28">
      <Container className="max-w-5xl">
        <PageHeader
          eyebrow="Projects"
          title="Things I build for myself"
          description="Curiosity, made tangible. None of these are trying to become a company — they're just what happens when I follow something I find interesting far enough."
        />

        <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {entries.map((entry) => (
            <ProjectCard key={entry.slug} entry={entry} />
          ))}
        </div>
      </Container>
    </section>
  );
}
