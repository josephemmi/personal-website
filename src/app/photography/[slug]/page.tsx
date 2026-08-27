import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { MdxContent } from "@/components/mdx/mdx-content";
import { Container } from "@/components/site/container";
import { GradientCover } from "@/components/site/gradient-cover";
import { getEntry, getSlugs } from "@/lib/content";
import type { PhotoCollectionFrontmatter } from "@/lib/types";

export function generateStaticParams() {
  return getSlugs("photography").map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const slugs = getSlugs("photography");
  if (!slugs.includes(slug)) return {};

  const { frontmatter } = getEntry<PhotoCollectionFrontmatter>("photography", slug);
  return {
    title: frontmatter.title,
    description: frontmatter.summary,
    openGraph: {
      title: `${frontmatter.title} — Photography`,
      description: frontmatter.summary,
      type: "article",
    },
  };
}

const ORIENTATION_ASPECT: Record<string, string> = {
  landscape: "aspect-[3/2]",
  portrait: "aspect-[3/4]",
  square: "aspect-square",
};

export default async function PhotoCollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const slugs = getSlugs("photography");
  if (!slugs.includes(slug)) notFound();

  const { frontmatter, content } = getEntry<PhotoCollectionFrontmatter>(
    "photography",
    slug
  );

  return (
    <article className="pt-16 pb-24 sm:pt-24 sm:pb-28">
      <Container className="max-w-4xl">
        <Link
          href="/photography"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-3.5" />
          All collections
        </Link>

        <h1 className="mt-8 text-balance font-serif text-4xl leading-[1.1] tracking-tight sm:text-5xl">
          {frontmatter.title}
        </h1>

        <div className="mt-6 max-w-2xl">
          <MdxContent source={content} />
        </div>
      </Container>

      <Container className="mt-14 max-w-5xl">
        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
          {frontmatter.photos.map((photo, index) => (
            <figure key={`${photo.caption}-${index}`} className="break-inside-avoid">
              <GradientCover
                gradient={photo.gradient}
                label={photo.caption}
                aspect={ORIENTATION_ASPECT[photo.orientation ?? "landscape"]}
              />
              <figcaption className="mt-2 text-sm text-muted-foreground">
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </article>
  );
}
