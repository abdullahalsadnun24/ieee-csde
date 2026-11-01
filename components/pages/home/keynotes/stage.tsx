"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { TalkDetails } from "@/components/pages/home/keynotes/talk-details";
import { speakers } from "@/content/speakers";
import { cn } from "@/lib/cn";

const popIn = { type: "spring" as const, stiffness: 380, damping: 22 };

export function KeynoteStage() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const speaker = speakers[active];
  const mark = String(active + 1).padStart(2, "0");

  if (!speaker) return null;

  return (
    <div>
      <div className="keynote-spot">
        <div className="keynote-spot-photo">
          <AnimatePresence mode="wait">
            <motion.div
              key={speaker.name}
              className="keynote-spot-photo-inner"
              initial={{ opacity: 0, scale: 0.82 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: reduceMotion ? 1 : 1.04 }}
              transition={reduceMotion ? { duration: 0 } : popIn}
            >
              <Image
                src={speaker.image}
                alt={`Portrait of ${speaker.honorific} ${speaker.name}`}
                fill
                sizes="(max-width: 1024px) 100vw, 28vw"
                className="keynote-spot-image"
                priority={active === 0}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="keynote-spot-copy-wrap">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${speaker.name}-copy`}
            className="keynote-spot-copy"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduceMotion ? 0 : 8 }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.22 }}
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="keynote-k">K{mark}</span>
              {speaker.badges?.map((badge) => (
                <span key={badge} className="keynote-badge">
                  {badge}
                </span>
              ))}
            </div>
            <h3 className="keynote-name">
              {speaker.honorific} {speaker.name}
            </h3>
            <p className="keynote-affiliation">{speaker.affiliation}</p>
            <p className="keynote-title">{speaker.title}</p>
            <TalkDetails speakerName={speaker.name} bio={speaker.bio} abstract={speaker.abstract} />
            {speaker.profileUrl ? (
              <a href={speaker.profileUrl} target="_blank" rel="noopener noreferrer" className="keynote-profile">
                View profile
              </a>
            ) : null}
          </motion.div>
        </AnimatePresence>
        </div>
      </div>

      <ul className="keynote-cast">
        {speakers.map((item, index) => (
          <li key={item.name}>
            <motion.button
              type="button"
              className={cn("keynote-cast-btn", index === active && "is-active")}
              onClick={() => setActive(index)}
              aria-pressed={index === active}
              aria-label={`${item.honorific} ${item.name}`}
              initial={{ opacity: 0, scale: 0.72, y: 22 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={reduceMotion ? { duration: 0 } : { ...popIn, delay: 0.04 + index * 0.07 }}
              whileHover={reduceMotion ? undefined : { y: -8, scale: 1.03 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
            >
              <span className="keynote-cast-photo">
                <Image
                  src={item.image}
                  alt=""
                  width={240}
                  height={300}
                  sizes="160px"
                  className="keynote-cast-image"
                />
              </span>
              <span className="keynote-cast-mark">{String(index + 1).padStart(2, "0")}</span>
              <span className="keynote-cast-name">{item.name}</span>
            </motion.button>
          </li>
        ))}
      </ul>
    </div>
  );
}
