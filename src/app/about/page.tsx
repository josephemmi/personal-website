import type { Metadata } from "next";

import { MdxContent } from "@/components/mdx/mdx-content";
import { Container } from "@/components/site/container";
import { PageHeader } from "@/components/site/page-header";
import { SectionHeading } from "@/components/site/section-heading";
import { getEntry } from "@/lib/content";
import { principles, timeline } from "@/lib/data/about";

export const metadata: Metadata = {
  title: "About",
  description:
    "Joseph Emmi — product builder, designer and founder based in Glasgow. Venezuela, Spain, Scotland, and everything that shaped how he builds.",
};

export default function AboutPage() {
  const bio = getEntry("about", "bio");

  return (
    <>
      <section className="pt-16 pb-4 sm:pt-24">
        <Container>
          <PageHeader
            eyebrow="About"
            title="Who I am, and how I got here"
            description="A short version of a long story — Venezuela, Spain, Scotland, and a decade spent building things."
          />
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container>
          <MdxContent source={bio.content} />
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container className="max-w-4xl">
          <SectionHeading title="Timeline" />
          <ol className="relative border-l border-border pl-8">
            {timeline.map((item) => (
              <li key={`${item.org}-${item.period}`} className="mb-10 last:mb-0">
                <div className="absolute -translate-x-[calc(2rem+1px)] mt-1.5 size-2 rounded-full bg-accent" />
                <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  {item.period}
                </p>
                <h3 className="mt-1.5 font-serif text-xl tracking-tight">
                  {item.role} · {item.org}
                </h3>
                <p className="mt-2 max-w-2xl text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container className="max-w-4xl">
          <SectionHeading
            title="Principles"
            description="The handful of things I try to hold onto regardless of the role or the project."
          />
          <div className="grid gap-8 sm:grid-cols-2">
            {principles.map((principle, index) => (
              <div key={principle.title} className="flex gap-4">
                <span className="font-mono text-sm text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-serif text-lg tracking-tight">
                    {principle.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
