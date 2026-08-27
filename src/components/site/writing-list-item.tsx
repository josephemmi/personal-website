import Link from "next/link";

import { formatDate } from "@/lib/utils";
import type { ContentEntry, WritingFrontmatter } from "@/lib/types";

export function WritingListItem({ entry }: { entry: ContentEntry<WritingFrontmatter> }) {
  const { slug, frontmatter } = entry;

  return (
    <Link href={`/writing/${slug}`} className="group block py-6">
      <div className="flex flex-col gap-1.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
        <h3 className="font-serif text-xl tracking-tight transition-colors group-hover:text-accent">
          {frontmatter.title}
        </h3>
        <time
          dateTime={frontmatter.date}
          className="shrink-0 font-mono text-xs text-muted-foreground"
        >
          {formatDate(frontmatter.date)}
        </time>
      </div>
      <p className="mt-2 max-w-2xl text-muted-foreground leading-relaxed">
        {frontmatter.summary}
      </p>
      <span className="mt-3 inline-block font-mono text-xs uppercase tracking-wider text-accent">
        {frontmatter.topic}
      </span>
    </Link>
  );
}
