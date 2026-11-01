import { AnimatedIcon, type IconName, type IconTone } from "@/components/ui/animated-icon";
import { cn } from "@/lib/cn";

const defaults: Array<{ name: IconName; tone: IconTone }> = [
  { name: "brain", tone: "pink" },
  { name: "atom", tone: "violet" },
  { name: "chip", tone: "cobalt" },
  { name: "database", tone: "teal" },
  { name: "orbit", tone: "gold" },
  { name: "network", tone: "coral" },
  { name: "cpu", tone: "navy" },
  { name: "spark", tone: "rose" },
];

export function IconOrbit({
  className,
  items = defaults,
}: {
  className?: string;
  items?: Array<{ name: IconName; tone: IconTone }>;
}) {
  return (
    <div className={cn("icon-orbit", className)} aria-hidden>
      <span className="icon-orbit-core" />
      {items.map((item, index) => (
        <span
          key={`${item.name}-${index}`}
          className="icon-orbit-item"
          style={{
            ["--orbit-offset" as string]: `${(360 / items.length) * index}deg`,
          }}
        >
          <AnimatedIcon name={item.name} tone={item.tone} size="sm" motion="pulse" delay={index * 0.12} />
        </span>
      ))}
    </div>
  );
}
