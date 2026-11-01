import { AnimatedIcon } from "@/components/ui/animated-icon";
import { Container } from "@/components/ui/container";
import { IconOrbit } from "@/components/ui/icon-orbit";
import { NetworkField } from "@/components/ui/network-field";
import { DataBars } from "@/components/ui/scientific-marks";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <header className="relative overflow-hidden border-b border-line bg-white">
      <Container className="relative z-10 py-12 sm:py-16">
        <div className="grid items-stretch gap-5 lg:grid-cols-12">
          <div className="mod-cell glass-sheen relative p-6 sm:p-8 lg:col-span-8">
            {eyebrow ? (
              <p className="chip mb-5 w-fit">
                <AnimatedIcon name="spark" tone="violet" size="sm" motion="pulse" />
                {eyebrow}
              </p>
            ) : null}
            <span className="accent-rule mb-4 block" aria-hidden />
            <h1 className="font-display text-3xl leading-[1.08] text-navy sm:text-5xl">{title}</h1>
            {description ? (
              <p className="mt-4 max-w-2xl text-base leading-7 text-muted">{description}</p>
            ) : null}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <AnimatedIcon name="chip" tone="cobalt" size="sm" />
              <AnimatedIcon name="brain" tone="pink" size="sm" motion="pulse" />
              <AnimatedIcon name="atom" tone="violet" size="sm" motion="spin" />
              <DataBars />
            </div>
          </div>
          <div className="relative hidden min-h-[10rem] overflow-hidden rounded-[1.25rem] bg-pale lg:col-span-4 lg:block" aria-hidden>
            <NetworkField className="absolute inset-0 h-full w-full opacity-70" />
            <div className="absolute inset-0 flex items-center justify-center">
              <IconOrbit />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
