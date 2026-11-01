"use client";

import { X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { UiLink } from "@/components/ui/ui-link";
import { lectureHall, photos } from "@/content/media";
import { site } from "@/content/site";

const gallery = [
  { ...photos[0], tile: "is-lead", sizes: "(min-width: 1024px) 66vw, 100vw" },
  { ...photos[1], tile: "is-side", sizes: "(min-width: 1024px) 32vw, 100vw" },
  { ...photos[3], tile: "is-side", sizes: "(min-width: 1024px) 32vw, 100vw" },
  { ...photos[2], tile: "is-wide", sizes: "(min-width: 1024px) 50vw, 100vw" },
  { ...lectureHall, tile: "is-wide", sizes: "(min-width: 1024px) 50vw, 100vw" },
];

const popIn = { type: "spring" as const, stiffness: 420, damping: 20 };
const popUp = { type: "spring" as const, stiffness: 380, damping: 22 };

export function ConferencePhotos() {
  const reduceMotion = useReducedMotion();
  const [open, setOpen] = useState<number | null>(null);
  const active = open === null ? null : gallery[open];

  useEffect(() => {
    if (open === null) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(null);
    };

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div>
      <div className="photo-album">
        <ul className="photo-grid">
          {gallery.map((photo, index) => (
            <li key={photo.src} className={`photo-cell ${photo.tile}`}>
              <motion.button
                type="button"
                className="photo-tile"
                onClick={() => setOpen(index)}
                aria-label={`View larger: ${photo.alt}`}
                initial={{ opacity: 0, scale: 0.72, y: 28 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.28 }}
                transition={reduceMotion ? { duration: 0 } : { ...popIn, delay: 0.04 + index * 0.09 }}
                whileHover={reduceMotion ? undefined : { y: -8, scale: 1.03 }}
                whileTap={reduceMotion ? undefined : { scale: 0.985 }}
              >
                <span className="photo-frame">
                  <Image
                    src={photo.src}
                    alt=""
                    width={photo.width}
                    height={photo.height}
                    sizes={photo.sizes}
                    className="photo-tile-image"
                  />
                </span>
              </motion.button>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8">
        <UiLink href={site.links.photoAlbum} variant="ghost" external>
          Photo album
        </UiLink>
      </div>

      <AnimatePresence>
        {active ? (
          <motion.div
            key="photo-popup"
            className="photo-popup"
            role="dialog"
            aria-modal="true"
            aria-label={active.alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.18 }}
            onClick={() => setOpen(null)}
          >
            <motion.div
              className="photo-popup-frame"
              initial={{ opacity: 0, scale: 0.5, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.86, y: 18 }}
              transition={reduceMotion ? { duration: 0 } : popUp}
              onClick={(event) => event.stopPropagation()}
            >
              <button type="button" className="photo-popup-close" onClick={() => setOpen(null)} aria-label="Close photo">
                <X size={18} />
              </button>
              <Image
                src={active.src}
                alt={active.alt}
                width={active.width}
                height={active.height}
                sizes="90vw"
                className="photo-popup-image"
              />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
