import { cn } from "@/lib/utils";

const DEFAULT_GRADIENT = "linear-gradient(135deg, var(--color-muted), var(--color-border))";

export function GradientCover({
  gradient = DEFAULT_GRADIENT,
  className,
  label,
  aspect = "aspect-[4/3]",
}: {
  gradient?: string;
  className?: string;
  label?: string;
  aspect?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg border border-border/60",
        aspect,
        className
      )}
      style={{ backgroundImage: gradient }}
      role="img"
      aria-label={label ?? "Decorative cover"}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.15),transparent_60%)]" />
      <div className="absolute inset-0 mix-blend-overlay opacity-[0.08] [background-image:url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22120%22%20height%3D%22120%22%3E%3Cfilter%20id%3D%22n%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.9%22%20numOctaves%3D%222%22%20stitchTiles%3D%22stitch%22%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20filter%3D%22url(%23n)%22%2F%3E%3C%2Fsvg%3E')]" />
    </div>
  );
}
