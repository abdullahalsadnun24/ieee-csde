"use client";

import Image from "next/image";
import { LogoCard } from "@/components/ui/logo-card";
import { sponsors } from "@/content/sponsors";

export function SponsorList() {
  return (
    <ul className="grid items-stretch gap-6 sm:grid-cols-3">
      {sponsors.map((sponsor, index) => (
        <li key={sponsor.name} className="h-full">
          <LogoCard
            delay={index * 0.12}
            className="flex min-h-52 flex-col items-center justify-center px-6 py-8 text-center"
          >
            <Image
              src={sponsor.src}
              alt={sponsor.alt}
              width={sponsor.width}
              height={sponsor.height}
              sizes="280px"
              className={
                sponsor.width / sponsor.height > 2.2
                  ? "h-16 w-auto sm:h-20"
                  : "h-28 w-auto"
              }
            />
            <p className="mt-5 text-sm font-semibold text-navy">{sponsor.shortName}</p>
          </LogoCard>
        </li>
      ))}
    </ul>
  );
}
