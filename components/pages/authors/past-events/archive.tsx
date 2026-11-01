import { pastEvents } from "@/content/authors";

export function PastEventsArchive() {
  return (
    <ul className="mod-grid sm:grid-cols-2 lg:grid-cols-3">
      {pastEvents.map((event) => (
        <li key={event.year}>
          <a
            href={event.href}
            className="mod-cell flex items-center justify-between px-5 py-4 text-navy transition hover:bg-pale"
          >
            <span className="font-semibold">{event.label}</span>
            <span className="font-mono text-[11px] text-accent">{event.year} →</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
