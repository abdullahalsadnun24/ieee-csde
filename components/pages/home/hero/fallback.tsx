import { AnimatedIcon } from "@/components/ui/animated-icon";
import { AtomMark, CircuitMark, DataBars } from "@/components/ui/scientific-marks";
import { NetworkField } from "@/components/ui/network-field";

export function HeroFallback() {
  return (
    <div className="hero-scene">
      <NetworkField className="h-full w-full" />
      <AnimatedIcon name="spark" tone="gold" size="lg" motion="pulse" className="hero-float left-[8%] top-[12%]" />
      <AnimatedIcon name="chip" tone="cobalt" size="md" motion="spin" className="hero-float right-[10%] top-[16%]" delay={0.4} />
      <AnimatedIcon name="database" tone="violet" size="md" className="hero-float left-[12%] bottom-[18%]" delay={0.7} />
      <AnimatedIcon name="globe" tone="teal" size="lg" className="hero-float right-[14%] bottom-[14%]" delay={0.2} />
      <AtomMark className="hero-float left-[46%] top-[12%] h-14 w-14" />
      <CircuitMark className="hero-float right-[28%] bottom-[22%] h-12 w-16" />
      <DataBars className="hero-float left-[42%] bottom-[16%]" />
    </div>
  );
}
