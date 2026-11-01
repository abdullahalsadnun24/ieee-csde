"use client";

import Image from "next/image";
import { LogoCard } from "@/components/ui/logo-card";
import { supporters } from "@/content/supporters";

export function SupporterList() {
  return (
    <ul className="flex flex-col items-center gap-6">
      {supporters.map((supporter, index) => (
        <li key={supporter.name} className="w-full max-w-md">
          <LogoCard
            delay={index * 0.12}
            className="flex flex-col items-center px-8 py-8 text-center"
          >
            <div className="rounded-xl bg-white px-6 py-4">
              <Image
                src={supporter.src}
                alt={supporter.alt}
                width={supporter.width}
                height={supporter.height}
                className="h-12 w-auto max-w-[20rem] object-contain sm:h-14"
              />
            </div>
            <p className="mt-5 text-sm font-semibold text-navy">{supporter.name}</p>
          </LogoCard>
        </li>
      ))}
    </ul>
  );
}
