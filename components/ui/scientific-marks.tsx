import { cn } from "@/lib/cn";

export function AtomMark({ className }: { className?: string }) {
  return (
    <svg className={cn("sci-mark", className)} viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <ellipse className="atom-ring" cx="40" cy="40" rx="28" ry="11" />
      <ellipse className="atom-ring atom-ring-b" cx="40" cy="40" rx="28" ry="11" />
      <ellipse className="atom-ring atom-ring-c" cx="40" cy="40" rx="28" ry="11" />
      <circle cx="40" cy="40" r="5" fill="#3157D5" />
      <circle className="atom-electron" cx="68" cy="40" r="3.2" fill="#A21CAF" />
    </svg>
  );
}

export function DataBars({ className }: { className?: string }) {
  return (
    <span className={cn("data-bars", className)} aria-hidden>
      <i />
      <i />
      <i />
      <i />
      <i />
      <i />
    </span>
  );
}

export function CircuitMark({ className }: { className?: string }) {
  return (
    <svg className={cn("sci-mark circuit-mark", className)} viewBox="0 0 96 72" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path className="circuit-line" d="M8 36 H28 L40 18 H62 L74 36 H88" />
      <path className="circuit-line circuit-line-b" d="M8 52 H22 L34 36 H50 L60 52 H88" />
      <circle cx="28" cy="36" r="3.4" fill="#3157D5" />
      <circle cx="40" cy="18" r="3" fill="#5B4BDB" />
      <circle cx="62" cy="18" r="3" fill="#A21CAF" />
      <circle cx="74" cy="36" r="3.4" fill="#0F766E" />
      <circle cx="34" cy="36" r="2.6" fill="#172554" />
      <circle cx="60" cy="52" r="3" fill="#3157D5" />
    </svg>
  );
}
