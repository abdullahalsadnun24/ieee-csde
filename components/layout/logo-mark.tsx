import { cn } from "@/lib/cn";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-10 w-10 shrink-0", className)}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="IEEE CSDE"
    >
      <rect width="64" height="64" rx="14" fill="#3157D5" />
      <circle cx="18" cy="20" r="3.2" fill="#FFFFFF" />
      <circle cx="46" cy="18" r="2.4" fill="#DDF8FF" />
      <circle cx="32" cy="32" r="4" fill="#FFFFFF" />
      <circle cx="16" cy="46" r="2.4" fill="#FCEBFA" />
      <circle cx="48" cy="44" r="3.1" fill="#E8E0FF" />
      <path
        d="M18 20 L32 32 L46 18 M32 32 L16 46 M32 32 L48 44"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
