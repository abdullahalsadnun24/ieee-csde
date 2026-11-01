import { AnimatedIcon, type IconName, type IconTone } from "@/components/ui/animated-icon";
import { cn } from "@/lib/cn";

export function SectionHeading({
  eyebrow,
  title,
  description,
  index,
  align = "left",
  icon,
  tone = "cobalt",
  editorial = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  index?: string;
  align?: "left" | "center";
  icon?: IconName;
  tone?: IconTone;
  editorial?: boolean;
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      <div className={cn("mb-4 flex items-center gap-3", align === "center" && "justify-center")}>
        {icon ? <AnimatedIcon name={icon} tone={tone} motion="pulse" /> : null}
        {eyebrow ? (
          <p className="eyebrow">
            {index ? `${index}  /  ${eyebrow}` : eyebrow}
          </p>
        ) : null}
      </div>
      <span className={cn("accent-rule mb-4 block", align === "center" && "mx-auto")} aria-hidden />
      <h2
        className={cn(
          editorial
            ? "font-editorial text-[1.55rem] leading-[1.15] text-navy sm:text-[2.15rem] lg:text-[2.55rem]"
            : "font-display text-[1.5rem] leading-[1.15] text-navy sm:text-[1.95rem] lg:text-[2.25rem]",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-3 max-w-2xl text-[0.9rem] leading-6 text-muted sm:mt-4 sm:text-[0.95rem] sm:leading-7">
          {description}
        </p>
      ) : null}
    </div>
  );
}
