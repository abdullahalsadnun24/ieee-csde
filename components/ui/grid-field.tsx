import { useId } from "react";
import { cn } from "@/lib/cn";

export function GridField({ className }: { className?: string }) {
  const id = useId().replace(/:/g, "");

  return (
    <svg className={cn("pointer-events-none absolute inset-0 h-full w-full", className)} aria-hidden>
      <defs>
        <pattern id={id} width="44" height="44" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.15" fill="#7c3aed" fillOpacity="0.18" />
          <circle cx="24" cy="22" r="1" fill="#06b6d4" fillOpacity="0.2" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}
