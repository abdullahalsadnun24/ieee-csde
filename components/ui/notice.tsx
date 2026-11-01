import { AnimatedIcon } from "@/components/ui/animated-icon";

export function Notice({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-start gap-4 rounded-[1.25rem] bg-violet p-5 text-sm leading-7 text-ink">
      <AnimatedIcon name="spark" tone="gold" motion="pulse" />
      <span>
        <span className="mb-1 block font-mono text-[11px] tracking-[0.12em] text-accent uppercase">Note</span>
        {children}
      </span>
    </p>
  );
}
