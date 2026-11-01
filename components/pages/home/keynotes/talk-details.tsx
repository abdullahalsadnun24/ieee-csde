"use client";

import { useId, useState, type KeyboardEvent } from "react";
import { cn } from "@/lib/cn";

const panels = [
  { id: "abstract" as const, label: "Abstract" },
  { id: "bio" as const, label: "Bio" },
];

export function TalkDetails({
  speakerName,
  bio,
  abstract,
}: {
  speakerName: string;
  bio: string;
  abstract: string;
}) {
  const [active, setActive] = useState<(typeof panels)[number]["id"]>("abstract");
  const uid = useId();
  const copy = active === "abstract" ? abstract : bio;

  function onTabKey(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    setActive(active === "abstract" ? "bio" : "abstract");
  }

  return (
    <div className="keynote-talk">
      <div role="tablist" aria-label={`${speakerName} bio and abstract`} className="keynote-tabs" onKeyDown={onTabKey}>
        {panels.map((item) => {
          const selected = item.id === active;
          return (
            <button
              key={item.id}
              id={`${uid}-${item.id}`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`${uid}-panel`}
              tabIndex={selected ? 0 : -1}
              className={cn("keynote-tab", selected && "is-active")}
              onClick={() => setActive(item.id)}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      <div id={`${uid}-panel`} role="tabpanel" aria-labelledby={`${uid}-${active}`} className="keynote-talk-panel">
        <p className="keynote-talk-kicker">{active === "abstract" ? "Talk abstract" : "Speaker bio"}</p>
        <p>{copy}</p>
      </div>
    </div>
  );
}
