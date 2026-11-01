import { AnimatedIcon } from "@/components/ui/animated-icon";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { UiLink } from "@/components/ui/ui-link";
import { scholarshipCopy } from "@/content/authors";

const registrationAudiences = [
  {
    title: "Authors",
    icon: "paper" as const,
    tone: "cobalt" as const,
    body: "Author registration will open with the 2027 package. Camera-ready and registration steps typically complete through the conference profile.",
  },
  {
    title: "Students",
    icon: "users" as const,
    tone: "violet" as const,
    body: scholarshipCopy,
  },
  {
    title: "Other participants",
    icon: "globe" as const,
    tone: "pink" as const,
    body: "Attendee, IEEE-member, non-member, onsite, and virtual categories have been used in recent editions. 2027 fees will appear when published.",
  },
];

export function RegistrationSection() {
  return (
    <section id="registration" className="home-section relative overflow-hidden band-lavender">
      <Container className="relative py-20">
        <SectionHeading
          index="09"
          eyebrow="Registration"
          title="Authors, students, and other participants"
          description="IEEE CSDE 2027 registration details will be published with the conference package. Recent editions used IEEE-member and non-member rates, with onsite and virtual options."
          icon="award"
          tone="gold"
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {registrationAudiences.map((item) => (
            <article key={item.title} className="mod-cell glass-sheen p-6 sm:p-7">
              <AnimatedIcon name={item.icon} tone={item.tone} motion="pulse" />
              <h3 className="mt-5 font-semibold text-navy">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{item.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <UiLink href="/#registration">Conference registration</UiLink>
          <UiLink href="/#registration/package" variant="secondary">
            Registration package
          </UiLink>
          <UiLink href="/#authors/scholarship" variant="ghost">
            Scholarship application
          </UiLink>
        </div>
      </Container>
    </section>
  );
}
