import { AnimatedIcon } from "@/components/ui/animated-icon";
import { researchTracks } from "@/content/topics";

export function ResearchTopics() {
  return (
    <div className="topics-catalog">
      {researchTracks.map((track, trackIndex) => (
        <section
          key={track.id}
          className={`topics-catalog-panel ${trackIndex === 0 ? "is-cs" : "is-ds"}`}
          aria-labelledby={`${track.id}-title`}
        >
          <header className="topics-catalog-head">
            <AnimatedIcon
              name={trackIndex === 0 ? "cpu" : "database"}
              tone={trackIndex === 0 ? "gold" : "pink"}
              size="lg"
              motion="pulse"
            />
            <div>
              <p className="eyebrow">{track.kicker}</p>
              <h3 id={`${track.id}-title`} className="mt-1 text-xl font-semibold">
                {track.title}
              </h3>
            </div>
            <p className="topics-catalog-count" aria-label={`${track.items.length} topics`}>
              {String(track.items.length).padStart(2, "0")}
            </p>
          </header>
          <ol className="topics-catalog-list">
            {track.items.map((item, index) => (
              <li key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </li>
            ))}
          </ol>
        </section>
      ))}
    </div>
  );
}
