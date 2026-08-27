import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { MdxContent } from "@/components/mdx/mdx-content";
import { Container } from "@/components/site/container";
import { GradientCover } from "@/components/site/gradient-cover";
import { Badge } from "@/components/ui/badge";
import { getAllEntries, getEntry, getSlugs } from "@/lib/content";
import type { WorkFrontmatter } from "@/lib/types";

export function generateStaticParams() {
  return getSlugs("work").map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const slugs = getSlugs("work");
  if (!slugs.includes(slug)) return {};

  const { frontmatter } = getEntry<WorkFrontmatter>("work", slug);
  const ogImage = `/api/og?title=${encodeURIComponent(frontmatter.title)}&subtitle=${encodeURIComponent(
    `${frontmatter.organisation} · ${frontmatter.period}`
  )}`;
  return {
    title: frontmatter.title,
    description: frontmatter.summary,
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.summary,
      type: "article",
      images: [{ url: ogImage, width: 1200, height: 630, alt: frontmatter.title }],
    },
    twitter: {
      card: "summary_large_image",
      images: [ogImage],
    },
  };
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const slugs = getSlugs("work");
  if (!slugs.includes(slug)) notFound();

  const entry = getEntry<WorkFrontmatter>("work", slug);
  const { frontmatter, content } = entry;

  const others = getAllEntries<WorkFrontmatter>("work")
    .filter((e) => e.slug !== slug)
    .sort((a, b) => (a.frontmatter.order ?? 99) - (b.frontmatter.order ?? 99))
    .slice(0, 2);

  return (
    <article className="pt-16 pb-24 sm:pt-24 sm:pb-28">
      <Container className="max-w-3xl">
        <Link
          href="/work"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-3.5" />
          All work
        </Link>

        <p className="mt-8 font-mono text-xs uppercase tracking-wider text-accent">
          {frontmatter.organisation} · {frontmatter.period}
        </p>
        <h1 className="mt-3 text-balance font-serif text-4xl leading-[1.1] tracking-tight sm:text-5xl">
          {frontmatter.title}
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">{frontmatter.role}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {frontmatter.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>

        <GradientCover
          gradient={frontmatter.coverGradient}
          label={frontmatter.title}
          aspect="aspect-[16/9]"
          className="mt-10"
        />

        <div className="mt-12">
          <MdxContent source={content} />
        </div>
      </Container>

      {others.length > 0 ? (
        <Container className="mt-24 max-w-4xl">
          <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            More work
          </p>
          <div className="mt-6 grid gap-8 sm:grid-cols-2">
            {others.map((other) => (
              <Link key={other.slug} href={`/work/${other.slug}`} className="group block">
                <GradientCover
                  gradient={other.frontmatter.coverGradient}
                  label={other.frontmatter.title}
                  aspect="aspect-[3/2]"
                  className="transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <h3 className="mt-3 flex items-center gap-1.5 font-serif text-lg tracking-tight transition-colors group-hover:text-accent">
                  {other.frontmatter.title}
                  <ArrowRight className="size-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                </h3>
              </Link>
            ))}
          </div>
        </Container>
      ) : null}
    </article>
  );
}
