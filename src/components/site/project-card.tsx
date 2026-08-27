import Link from "next/link";

import { GradientCover } from "@/components/site/gradient-cover";
import { Badge } from "@/components/ui/badge";
import type { ContentEntry, ProjectFrontmatter } from "@/lib/types";

export function ProjectCard({ entry }: { entry: ContentEntry<ProjectFrontmatter> }) {
  const { slug, frontmatter } = entry;

  return (
    <Link href={`/projects/${slug}`} className="group block">
      <GradientCover
        gradient={frontmatter.coverGradient}
        label={frontmatter.title}
        aspect="aspect-[3/2]"
        className="transition-transform duration-300 group-hover:scale-[1.02]"
      />
      <div className="mt-4">
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-serif text-xl tracking-tight transition-colors group-hover:text-accent">
            {frontmatter.title}
          </h3>
          <Badge variant="outline">{frontmatter.status}</Badge>
        </div>
        <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
          {frontmatter.tagline}
        </p>
      </div>
    </Link>
  );
}
