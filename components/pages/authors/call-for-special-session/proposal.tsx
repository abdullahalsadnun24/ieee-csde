import { Container } from "@/components/ui/container";
import { UiLink } from "@/components/ui/ui-link";
import { site } from "@/content/site";
import { specialSession } from "@/content/workshop";

export function SpecialSessionProposal() {
  return (
    <Container className="space-y-10 py-16">
      <p className="max-w-3xl text-base leading-8 text-muted">{specialSession.proposal}</p>
      <ul className="mod-grid md:grid-cols-3">
        {specialSession.disclaimers.map((item, index) => (
          <li key={item} className="mod-cell p-5 text-sm leading-7 text-muted">
            <p className="font-mono text-[11px] text-accent">
              Disclaimer {String(index + 1).padStart(2, "0")}
            </p>
            <p className="mt-2">{item}</p>
          </li>
        ))}
      </ul>
      <article className="mod-cell bg-pale p-7 sm:p-10">
        <p className="eyebrow">{specialSession.featured.code}</p>
        <h2 className="font-display mt-3 text-3xl text-navy">{specialSession.featured.title}</h2>
        <p className="mt-4 text-sm leading-7 text-muted">{specialSession.featured.scope}</p>
        <ul className="mt-6 divide-y divide-line border border-line">
          {specialSession.featured.topics.map((topic, index) => (
            <li key={topic} className="grid grid-cols-[3rem_minmax(0,1fr)] gap-3 bg-white px-3 py-2 text-sm text-ink">
              <span className="font-mono text-[11px] text-accent">{String(index + 1).padStart(2, "0")}</span>
              <span>{topic}</span>
            </li>
          ))}
        </ul>
      </article>
      <UiLink href={`mailto:${site.contacts.proposals}`}>Email a proposal</UiLink>
    </Container>
  );
}
