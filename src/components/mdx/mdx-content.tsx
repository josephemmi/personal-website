import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

import { cn } from "@/lib/utils";

export function MdxContent({
  source,
  className,
}: {
  source: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "prose-editorial prose prose-neutral max-w-none dark:prose-invert",
        "prose-headings:font-serif prose-headings:font-medium prose-headings:tracking-tight",
        "prose-p:leading-relaxed prose-a:no-underline prose-a:underline-offset-4 hover:prose-a:underline",
        "prose-img:rounded-lg prose-img:border prose-img:border-border",
        className
      )}
    >
      <MDXRemote
        source={source}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [
              rehypeSlug,
              [rehypeAutolinkHeadings, { behavior: "wrap" }],
            ],
          },
        }}
      />
    </div>
  );
}
