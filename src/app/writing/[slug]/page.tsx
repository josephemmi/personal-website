import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import readingTime from "reading-time";

import { MdxContent } from "@/components/mdx/mdx-content";
import { Container } from "@/components/site/container";
import { getAllEntries, getEntry, getSlugs } from "@/lib/content";
import { siteConfig } from "@/lib/site";
import { formatDate } from "@/lib/utils";
import type { WritingFrontmatter } from "@/lib/types";

export function generateStaticParams() {
  return getSlugs("writing").map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const slugs = getSlugs("writing");
  if (!slugs.includes(slug)) return {};

  const { frontmatter } = getEntry<WritingFrontmatter>("writing", slug);
  const ogImage = `/api/og?title=${encodeURIComponent(frontmatter.title)}&subtitle=${encodeURIComponent(
    frontmatter.topic
  )}`;
  return {
    title: frontmatter.title,
    description: frontmatter.summary,
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.summary,
      type: "article",
      publishedTime: frontmatter.date,
      images: [{ url: ogImage, width: 1200, height: 630, alt: frontmatter.title }],
    },
    twitter: {
      card: "summary_large_image",
      images: [ogImage],
    },
  };
}

export default async function WritingDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const slugs = getSlugs("writing");
  if (!slugs.includes(slug)) notFound();

  const { frontmatter, content } = getEntry<WritingFrontmatter>("writing", slug);
  const stats = readingTime(content);

  const more = getAllEntries<WritingFrontmatter>("writing")
    .filter((e) => e.slug !== slug)
    .sort((a, b) => (a.frontmatter.date > b.frontmatter.date ? -1 : 1))
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: frontmatter.title,
    description: frontmatter.summary,
    datePublished: frontmatter.date,
    author: { "@type": "Person", name: siteConfig.name, url: siteConfig.url },
    url: `${siteConfig.url}/writing/${slug}`,
  };

  return (
    <article className="pt-16 pb-24 sm:pt-24 sm:pb-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Container className="max-w-3xl">
        <Link
          href="/writing"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-3.5" />
          All writing
        </Link>

        <p className="mt-8 font-mono text-xs uppercase tracking-wider text-accent">
          {frontmatter.topic}
        </p>
        <h1 className="mt-3 text-balance font-serif text-4xl leading-[1.1] tracking-tight sm:text-5xl">
          {frontmatter.title}
        </h1>

        <div className="mt-4 flex items-center gap-3 font-mono text-xs text-muted-foreground">
          <time dateTime={frontmatter.date}>{formatDate(frontmatter.date)}</time>
          <span aria-hidden>·</span>
          <span>{stats.text}</span>
        </div>

        <div className="mt-12">
          <MdxContent source={content} />
        </div>
      </Container>

      {more.length > 0 ? (
        <Container className="mt-24 max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            More writing
          </p>
          <div className="mt-4 flex flex-col divide-y divide-border">
            {more.map((entry) => (
              <Link key={entry.slug} href={`/writing/${entry.slug}`} className="group block py-5">
                <h3 className="font-serif text-lg tracking-tight transition-colors group-hover:text-accent">
                  {entry.frontmatter.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {entry.frontmatter.summary}
                </p>
              </Link>
            ))}
          </div>
        </Container>
      ) : null}
    </article>
  );
}
