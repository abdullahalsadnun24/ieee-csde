import { Mail, Phone } from "lucide-react";
import { site } from "@/content/site";

const people = [
  { ...site.contacts.general, tone: "pale" as const },
  { ...site.contacts.technical, tone: "lavender" as const },
];

export function ContactBoard({ showProposals = false }: { showProposals?: boolean }) {
  return (
    <ul className={`contact-board ${showProposals ? "has-proposals" : ""}`}>
      {people.map((person, index) => (
        <li key={person.email} className={`contact-person is-${person.tone}`}>
          <p className="contact-person-index">{String(index + 1).padStart(2, "0")}</p>
          <p className="eyebrow">{person.label}</p>
          <h3 className="contact-person-name">{person.name}</h3>
          <div className="contact-person-links">
            <a className="contact-chip" href={`tel:${person.phone}`}>
              <Phone size={14} />
              {person.phone}
              <span>{person.phoneNote}</span>
            </a>
            <a className="contact-chip" href={`mailto:${person.email}`}>
              <Mail size={14} />
              {person.email}
            </a>
          </div>
        </li>
      ))}
      {showProposals ? (
        <li className="contact-person is-pink">
          <p className="contact-person-index">03</p>
          <p className="eyebrow">Proposals</p>
          <h3 className="contact-person-name">Workshops and special sessions</h3>
          <div className="contact-person-links">
            <a className="contact-chip" href={`mailto:${site.contacts.proposals}`}>
              <Mail size={14} />
              {site.contacts.proposals}
            </a>
          </div>
        </li>
      ) : null}
    </ul>
  );
}
