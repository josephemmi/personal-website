import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { MdxContent } from "@/components/mdx/mdx-content";
import { Container } from "@/components/site/container";
import { GradientCover } from "@/components/site/gradient-cover";
import { Badge } from "@/components/ui/badge";
import { getEntry, getSlugs } from "@/lib/content";
import type { ProjectFrontmatter } from "@/lib/types";

export function generateStaticParams() {
  return getSlugs("projects").map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const slugs = getSlugs("projects");
  if (!slugs.includes(slug)) return {};

  const { frontmatter } = getEntry<ProjectFrontmatter>("projects", slug);
  const ogImage = `/api/og?title=${encodeURIComponent(frontmatter.title)}&subtitle=${encodeURIComponent(
    frontmatter.tagline
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

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const slugs = getSlugs("projects");
  if (!slugs.includes(slug)) notFound();

  const { frontmatter, content } = getEntry<ProjectFrontmatter>("projects", slug);

  return (
    <article className="pt-16 pb-24 sm:pt-24 sm:pb-28">
      <Container className="max-w-3xl">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-3.5" />
          All projects
        </Link>

        <div className="mt-8 flex items-center gap-3">
          <Badge variant="outline">{frontmatter.status}</Badge>
          {frontmatter.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>

        <h1 className="mt-4 text-balance font-serif text-4xl leading-[1.1] tracking-tight sm:text-5xl">
          {frontmatter.title}
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">{frontmatter.tagline}</p>

        <GradientCover
          gradient={frontmatter.coverGradient}
          label={frontmatter.title}
          aspect="aspect-[16/9]"
          className="mt-10"
        />

        <div className="mt-12">
          <MdxContent source={content} />
        </div>

        {frontmatter.url ? (
          <a
            href={frontmatter.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block text-sm font-medium text-accent hover:underline"
          >
            Visit project ↗
          </a>
        ) : null}
      </Container>
    </article>
  );
}
