import { cn } from "@/lib/utils";

export function PageHeader({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("animate-fade-up", className)}>
      {eyebrow ? (
        <p className="mb-3 font-mono text-xs uppercase tracking-wider text-accent">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="text-balance font-serif text-4xl leading-[1.1] tracking-tight sm:text-5xl">
        {title}
      </h1>
      {description ? (
        <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
    </div>
  );
}
