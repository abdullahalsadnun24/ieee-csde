import { AnimatedIcon } from "@/components/ui/animated-icon";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { UiLink } from "@/components/ui/ui-link";
import { paperPreparation } from "@/content/authors";
import { site } from "@/content/site";

const submissionCards = [
  {
    title: "Submission portal",
    body: "Papers are submitted through the CSDE conference portal hosted by NPS.",
    href: site.links.paperSubmission,
    label: "Open paper submission",
    external: true,
    icon: "rocket" as const,
    tone: "cobalt" as const,
  },
  {
    title: "Paper templates",
    body: paperPreparation.template,
    href: site.links.ieeeTemplates,
    label: "IEEE conference templates",
    external: true,
    icon: "journal" as const,
    tone: "violet" as const,
  },
  {
    title: "Author guidelines",
    body: `${paperPreparation.authorDetails} ${paperPreparation.pageLimit}`,
    href: "/authors/submission",
    label: "Submission guideline",
    external: false,
    icon: "paper" as const,
    tone: "pink" as const,
  },
];

export function SubmissionSection() {
  return (
    <section id="submission" className="home-section relative overflow-hidden band-white">
      <span className="color-plate plate-cyan opacity-70" aria-hidden />
      <Container className="relative py-20">
        <SectionHeading
          index="08"
          eyebrow="Paper submission"
          title="Portal, templates, and author guidelines"
          description="Submissions use the IEEE conference format and the CSDE paper submission portal."
          icon="rocket"
          tone="cobalt"
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {submissionCards.map((item) => (
            <article key={item.title} className="mod-cell glass-sheen flex flex-col p-6 sm:p-7">
              <AnimatedIcon name={item.icon} tone={item.tone} motion="pulse" />
              <h3 className="mt-5 font-semibold text-navy">{item.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-muted">{item.body}</p>
              <div className="mt-6">
                <UiLink href={item.href} variant="secondary" external={item.external}>
                  {item.label}
                </UiLink>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <UiLink href="/#authors/paper-preparation">Paper preparation</UiLink>
          <UiLink href="/#authors/submission" variant="ghost">
            Submission guideline
          </UiLink>
        </div>
      </Container>
    </section>
  );
}
