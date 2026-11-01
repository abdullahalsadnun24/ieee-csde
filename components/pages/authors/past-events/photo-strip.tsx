import Image from "next/image";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import { photos } from "@/content/media";
import { site } from "@/content/site";

export function PhotoStrip({
  caption = "Technical sessions from recent IEEE CSDE-related meetings.",
}: {
  caption?: string;
}) {
  const [lead, ...rest] = photos;

  return (
    <figure>
      <div className="grid gap-4 lg:grid-cols-12">
        <div className="overflow-hidden rounded-[1.25rem] bg-white p-2 lg:col-span-7">
          <div className="photo-frame">
            <Image
              src={lead.src}
              alt={lead.alt}
              width={lead.width}
              height={lead.height}
              sizes="(min-width: 1024px) 620px, 100vw"
              className="aspect-[16/10] h-auto w-full object-cover"
            />
          </div>
        </div>
        <ul className="grid gap-4 sm:grid-cols-3 lg:col-span-5 lg:grid-cols-1">
          {rest.map((photo, index) => (
            <li key={photo.src} className="overflow-hidden rounded-[1.25rem] bg-white p-2">
              <div className="photo-frame">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  sizes="(min-width: 1024px) 280px, 33vw"
                  className="aspect-[16/10] h-auto w-full object-cover lg:aspect-[16/7]"
                />
              </div>
              <p className="px-2 py-2 font-mono text-[11px] text-muted">
                IMG {String(index + 2).padStart(2, "0")}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <figcaption className="mt-4 flex flex-wrap items-baseline justify-between gap-3 text-sm leading-6 text-muted">
        <span className="inline-flex items-center gap-2">
          <AnimatedIcon name="presentation" tone="pink" size="sm" motion="pulse" />
          {caption}
        </span>
        <a
          href={site.links.photoAlbum}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[11px] tracking-[0.12em] text-accent uppercase"
        >
          Photo album →
        </a>
      </figcaption>
    </figure>
  );
}
