"use client";

import { useEffect, useState } from "react";
import { HeroPhoto } from "@/components/pages/home/hero/photo";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import { UiLink } from "@/components/ui/ui-link";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section id="welcome" className="hero-media home-section relative overflow-hidden">
      <HeroPhoto />
      <div className="hero-shadow" aria-hidden />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col justify-end gap-6 px-5 pb-6 pt-[5.75rem] sm:min-h-[100svh] sm:gap-8 sm:px-6 sm:pb-10 sm:pt-28 lg:px-8 lg:pb-12">
        <div className="hero-enter mx-auto flex w-full max-w-4xl flex-col items-center text-center">
          <p className="chip glass-sheen max-w-full">
            <AnimatedIcon name="spark" tone="gold" size="sm" motion="pulse" />
            IEEE Asia-Pacific · Fiji {site.focusYear}
          </p>
          <p className="hero-kicker mt-5">IEEE Asia-Pacific Conference on Computer Science and Data Engineering</p>
          <h1 className="font-display mt-3 text-[2.1rem] leading-[0.92] text-white sm:text-6xl lg:text-[4.15rem]">
            IEEE CSDE {site.focusYear}
          </h1>
          <TypeLine
            text={site.theme}
            className="hero-type font-editorial mt-4 max-w-3xl text-[1.28rem] leading-[1.2] text-white sm:text-[1.9rem] lg:text-[2.1rem]"
          />
          <p className="hero-lead mt-4 max-w-2xl text-sm leading-7">
            A research forum for computer science, data engineering, artificial intelligence, and emerging
            digital technologies, held at {site.venue.label}.
          </p>
          <div className="hero-actions mt-7 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:justify-center">
            <UiLink href="/authors/call-for-papers">Call for papers</UiLink>
            <UiLink href="/venue" variant="secondary">
              Conference venue
            </UiLink>
          </div>
        </div>

        <div className="hero-dock mx-auto w-full max-w-5xl">
          <ul className="hero-meta">
            <Meta icon="calendar" label="Date" value="To be announced" />
            <Meta icon="pin" label="Venue" value={site.venue.name} />
            <Meta icon="cpu" label="Year" value={String(site.focusYear)} />
            <Meta icon="globe" label="Format" value="Physical and virtual" />
          </ul>
          <div className="hero-note text-left">
            <p className="eyebrow">IEEE Xplore</p>
            <p className="mt-2 text-xs leading-5 text-muted">
              Possible inclusion, subject to IEEE Xplore scope and quality requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function TypeLine({ text, className }: { text: string; className?: string }) {
  const [shown, setShown] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setShown(text);
      setDone(true);
      return;
    }

    setShown("");
    setDone(false);
    let intervalId = 0;
    const timeoutId = window.setTimeout(() => {
      let index = 0;
      intervalId = window.setInterval(() => {
        index += 1;
        setShown(text.slice(0, index));
        if (index >= text.length) {
          window.clearInterval(intervalId);
          setDone(true);
        }
      }, 36);
    }, 420);

    return () => {
      window.clearTimeout(timeoutId);
      window.clearInterval(intervalId);
    };
  }, [text]);

  return (
    <p className={className} aria-label={text}>
      <span aria-hidden="true">{shown}</span>
      {done ? null : <span className="hero-caret" aria-hidden="true" />}
    </p>
  );
}

function Meta({
  icon,
  label,
  value,
}: {
  icon: "pin" | "calendar" | "globe" | "cpu";
  label: string;
  value: string;
}) {
  return (
    <li className="flex items-start gap-3 text-left">
      <AnimatedIcon name={icon} tone="cobalt" size="sm" motion="pulse" />
      <span>
        <span className="block font-mono text-[10px] tracking-[0.14em] text-accent uppercase">{label}</span>
        <span className="mt-1 block text-sm font-semibold leading-5 text-navy">{value}</span>
      </span>
    </li>
  );
}
