import Link from "next/link";

import { GradientCover } from "@/components/site/gradient-cover";
import { Badge } from "@/components/ui/badge";
import type { ContentEntry, WorkFrontmatter } from "@/lib/types";

export function WorkCard({ entry }: { entry: ContentEntry<WorkFrontmatter> }) {
  const { slug, frontmatter } = entry;

  return (
    <Link href={`/work/${slug}`} className="block">
      <article className="group grid gap-5 sm:grid-cols-[minmax(0,220px)_1fr]">
        <GradientCover
          gradient={frontmatter.coverGradient}
          label={frontmatter.title}
          className="transition-transform duration-300 group-hover:scale-[1.02]"
        />
        <div className="flex flex-col justify-center">
          <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            {frontmatter.organisation} · {frontmatter.period}
          </p>
          <h3 className="mt-2 font-serif text-2xl leading-tight tracking-tight transition-colors group-hover:text-accent">
            {frontmatter.title}
          </h3>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            {frontmatter.summary}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {frontmatter.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}
