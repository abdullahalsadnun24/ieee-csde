"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { HeroFallback } from "@/components/pages/home/hero/fallback";

const HeroCanvas = dynamic(
  () => import("@/components/pages/home/hero/canvas").then((module) => module.HeroCanvas),
  { ssr: false, loading: () => <HeroFallback /> },
);

export function HeroVisual() {
  const [use3d, setUse3d] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const compact = window.matchMedia("(max-width: 767px)").matches;
    const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory;
    const weak = typeof memory === "number" && memory > 0 && memory < 4;
    setUse3d(!(reduced || compact || weak));
  }, []);

  if (!use3d) return <HeroFallback />;
  return <HeroCanvas />;
}
