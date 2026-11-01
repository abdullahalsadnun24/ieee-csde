import { dateMilestones } from "@/content/dates";

export function DateTimeline() {
  const last = dateMilestones.length - 1;

  return (
    <ol className="dates-table">
      {dateMilestones.map((item, index) => {
        const isEvent = index === last;

        return (
          <li key={item.label} className={`dates-row ${isEvent ? "is-event" : ""}`}>
            <p className="dates-row-index">{String(index + 1).padStart(2, "0")}</p>
            <div>
              <h3>{item.label}</h3>
              <p>{item.detail}</p>
            </div>
            <p className="dates-when">{isEvent ? "2027" : "TBA"}</p>
          </li>
        );
      })}
    </ol>
  );
}
