import Link from "next/link";

import { GradientCover } from "@/components/site/gradient-cover";
import type { ContentEntry, PhotoCollectionFrontmatter } from "@/lib/types";

export function PhotoCollectionCard({
  entry,
}: {
  entry: ContentEntry<PhotoCollectionFrontmatter>;
}) {
  const { slug, frontmatter } = entry;

  return (
    <Link href={`/photography/${slug}`} className="group block">
      <GradientCover
        gradient={frontmatter.coverGradient}
        label={frontmatter.title}
        aspect="aspect-[4/5]"
        className="transition-transform duration-300 group-hover:scale-[1.02]"
      />
      <div className="mt-4">
        <h3 className="font-serif text-xl tracking-tight transition-colors group-hover:text-accent">
          {frontmatter.title}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">
          {frontmatter.photos.length} photographs
        </p>
      </div>
    </Link>
  );
}
