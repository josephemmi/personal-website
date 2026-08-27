import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/site/container";
import { GradientCover } from "@/components/site/gradient-cover";
import { SectionHeading } from "@/components/site/section-heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getAllEntries, getEntry } from "@/lib/content";
import type { WorkFrontmatter, WritingFrontmatter } from "@/lib/types";

const FEATURED_SLUGS = [
  "weir-digital-ecosystem",
  "customer-self-service-transformation",
  "agatha",
];

const FOCUS_AREAS = [
  {
    label: "Product",
    description: "Leading the Weir Digital Ecosystem platform.",
    href: "/work",
  },
  {
    label: "Projects",
    description: "Reissued, Da Mangiare, and small AI experiments.",
    href: "/projects",
  },
  {
    label: "Writing",
    description: "One unified stream — product, food, life, and everything between.",
    href: "/writing",
  },
  {
    label: "Photography",
    description: "Glasgow, travel, and places before they change.",
    href: "/photography",
  },
];

export default function HomePage() {
  const featured = FEATURED_SLUGS.map((slug) => getEntry<WorkFrontmatter>("work", slug));
  const latestPost = getAllEntries<WritingFrontmatter>("writing").sort((a, b) =>
    a.frontmatter.date > b.frontmatter.date ? -1 : 1
  )[0];

  return (
    <>
      <section className="pt-16 pb-20 sm:pt-24 sm:pb-28">
        <Container className="max-w-5xl">
          <p className="animate-fade-in font-mono text-xs uppercase tracking-wider text-accent">
            Glasgow, Scotland
          </p>
          <h1 className="animate-fade-up mt-4 max-w-3xl text-balance font-serif text-5xl leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            Joseph Emmi
          </h1>
          <p
            className="animate-fade-up mt-3 max-w-2xl text-balance font-serif text-2xl leading-snug text-muted-foreground sm:text-3xl"
            style={{ animationDelay: "80ms" }}
          >
            Product Builder. Designer. Founder.
          </p>
          <p
            className="animate-fade-up mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground"
            style={{ animationDelay: "140ms" }}
          >
            I build products, explore ideas and document the things I find
            interesting — across product management, design, strategy,
            startups and technology leadership.
          </p>
          <div
            className="animate-fade-up mt-8 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "200ms" }}
          >
            <Button asChild size="lg">
              <Link href="/work">
                View My Work
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/writing">Read My Writing</Link>
            </Button>
          </div>
        </Container>
      </section>

      <Separator />

      <section className="py-20 sm:py-24">
        <Container className="max-w-5xl">
          <SectionHeading
            title="Featured work"
            description="A selection of case studies from across product, platform and founder work."
          />
          <div className="grid gap-x-8 gap-y-14 sm:grid-cols-3">
            {featured.map((entry) => (
              <Link
                key={entry.slug}
                href={`/work/${entry.slug}`}
                className="group block"
              >
                <GradientCover
                  gradient={entry.frontmatter.coverGradient}
                  label={entry.frontmatter.title}
                  className="transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <p className="mt-4 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  {entry.frontmatter.organisation}
                </p>
                <h3 className="mt-1.5 font-serif text-xl tracking-tight transition-colors group-hover:text-accent">
                  {entry.frontmatter.title}
                </h3>
              </Link>
            ))}
          </div>
          <div className="mt-12">
            <Link
              href="/work"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-accent"
            >
              View all work
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </Container>
      </section>

      <Separator />

      <section className="py-20 sm:py-24">
        <Container className="max-w-5xl">
          <SectionHeading title="Current focus" />
          <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {FOCUS_AREAS.map((area) => (
              <Link
                key={area.label}
                href={area.href}
                className="group flex flex-col justify-between gap-6 bg-background p-6 transition-colors hover:bg-muted"
              >
                <span className="font-mono text-xs uppercase tracking-wider text-accent">
                  {area.label}
                </span>
                <span className="text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-foreground">
                  {area.description}
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {latestPost ? (
        <>
          <Separator />
          <section className="py-20 sm:py-24">
            <Container className="max-w-3xl">
              <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Latest writing
              </p>
              <Link href={`/writing/${latestPost.slug}`} className="group mt-4 block">
                <h3 className="font-serif text-2xl tracking-tight transition-colors group-hover:text-accent sm:text-3xl">
                  {latestPost.frontmatter.title}
                </h3>
                <p className="mt-3 max-w-xl text-muted-foreground leading-relaxed">
                  {latestPost.frontmatter.summary}
                </p>
              </Link>
            </Container>
          </section>
        </>
      ) : null}
    </>
  );
}
