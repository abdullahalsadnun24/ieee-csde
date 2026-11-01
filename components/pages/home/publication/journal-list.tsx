import Image from "next/image";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import { journals } from "@/content/journals";

const plates = ["bg-pale", "bg-lavender", "bg-pink", "bg-violet", "bg-pale"] as const;

export function JournalList() {
  return (
    <ul className="space-y-3">
      {journals.map((journal, index) => (
        <li key={journal.name} className={index % 2 ? "sm:ml-5" : undefined}>
          <a
            href={journal.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mod-cell glass-sheen group grid items-center gap-4 p-4 transition sm:grid-cols-[8.5rem_minmax(0,1fr)_auto] sm:p-5"
          >
            <div className={`flex min-h-[4.5rem] items-center justify-center rounded-xl px-3 ${plates[index % plates.length]}`}>
              <Image
                src={journal.image}
                alt={`${journal.name} journal logo`}
                width={journal.imageWidth}
                height={journal.imageHeight}
                className="max-h-10 w-auto object-contain"
              />
            </div>
            <div>
              <p className="font-mono text-[11px] text-accent">
                {String(index + 1).padStart(2, "0")}  /  IF {journal.impactFactor}
              </p>
              <h3 className="mt-1 font-semibold text-navy">{journal.name}</h3>
              <p className="mt-1 text-sm leading-6 text-muted">{journal.description}</p>
            </div>
            <span className="hidden items-center gap-2 font-mono text-[11px] tracking-[0.12em] text-accent uppercase sm:inline-flex">
              Journal site
              <AnimatedIcon name="rocket" tone="cobalt" size="sm" motion="pulse" />
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
