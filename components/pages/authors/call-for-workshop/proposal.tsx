import { Container } from "@/components/ui/container";
import { UiLink } from "@/components/ui/ui-link";
import { site } from "@/content/site";
import { workshop } from "@/content/workshop";

export function WorkshopProposal() {
  return (
    <Container className="space-y-10 py-16">
      <p className="max-w-3xl text-base leading-8 text-muted">{workshop.intro[1]}</p>
      <section className="surface-card p-7 sm:p-10">
        <h2 className="font-display text-3xl text-navy">Proposal format</h2>
        <p className="mt-4 text-sm leading-7 text-muted">{workshop.formatNote}</p>
        <ol className="mt-6 list-decimal space-y-3 pl-5 text-sm leading-7 text-ink">
          {workshop.sections.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </section>
      <p className="max-w-3xl text-base leading-8 text-muted">{workshop.submission}</p>
      <UiLink href={`mailto:${site.contacts.proposals}`}>Email a proposal</UiLink>
    </Container>
  );
}
