import { cn } from "@/lib/cn";

export function CssCube({
  className,
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) {
  return (
    <div className={cn("css-stage", className)} aria-hidden>
      <div className="css-cube" style={{ animationDelay: `${delay}s` }}>
        <span className="cube-face face-front" />
        <span className="cube-face face-back" />
        <span className="cube-face face-right" />
        <span className="cube-face face-left" />
        <span className="cube-face face-top" />
        <span className="cube-face face-bottom" />
      </div>
    </div>
  );
}
