import { AnimatedIcon } from "@/components/ui/animated-icon";
import { Container } from "@/components/ui/container";
import { IconOrbit } from "@/components/ui/icon-orbit";
import { SectionHeading } from "@/components/ui/section-heading";
import { UiLink } from "@/components/ui/ui-link";
import { site } from "@/content/site";

const facts = [
  { icon: "globe" as const, tone: "cobalt" as const, label: "Region", value: "Asia-Pacific" },
  { icon: "pin" as const, tone: "violet" as const, label: "Host", value: site.venue.city },
  { icon: "users" as const, tone: "pink" as const, label: "Format", value: "Physical and virtual" },
  { icon: "award" as const, tone: "teal" as const, label: "Support", value: "Student scholarships" },
];

export function AboutSection() {
  return (
    <section id="about" className="about-stage home-section relative overflow-hidden band-white">
      <span className="color-plate plate-lavender opacity-80" aria-hidden />
      <span className="color-plate plate-cyan opacity-70" aria-hidden />
      <span className="about-watermark" aria-hidden>
        CSDE
      </span>

      <Container className="relative py-24">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <SectionHeading
              index="02"
              eyebrow="About CSDE"
              title="A research forum for computer science and data engineering"
              icon="network"
              tone="violet"
              editorial
            />
            <p className="about-lede mt-8">{site.seriesIntro[0]}</p>
            <div className="mt-8">
              <UiLink href="/#authors/call-for-papers" variant="ghost">
                Read the call for papers
              </UiLink>
            </div>
          </div>
          <div className="hidden justify-center lg:col-span-4 lg:flex">
            <IconOrbit />
          </div>
        </div>

        <div className="mt-16 grid gap-4 lg:grid-cols-12">
          <article className="about-feature lg:col-span-7">
            <div className="flex items-start justify-between gap-4">
              <AnimatedIcon name="telescope" tone="gold" size="lg" />
              <p className="about-index">02  /  Research</p>
            </div>
            <h3 className="font-editorial mt-10 text-3xl leading-[1.15] sm:text-4xl">Research opportunities</h3>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/80">{site.seriesIntro[1]}</p>
            <ul className="about-topics">
              {["Artificial intelligence", "Data science", "Cybersecurity", "Cloud computing", "Software engineering"].map(
                (topic) => (
                  <li key={topic}>{topic}</li>
                ),
              )}
            </ul>
          </article>

          <div className="grid gap-4 lg:col-span-5 lg:grid-rows-2">
            <article className="about-panel bg-pale">
              <div className="flex items-center justify-between gap-3">
                <AnimatedIcon name="globe" tone="cobalt" motion="pulse" />
                <p className="about-index text-accent">03  /  Place</p>
              </div>
              <h3 className="mt-6 font-semibold text-navy">International participation</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{site.venueCopy[1]}</p>
            </article>
            <article className="about-panel bg-lavender">
              <div className="flex items-center justify-between gap-3">
                <AnimatedIcon name="handshake" tone="pink" motion="pulse" />
                <p className="about-index text-accent">04  /  Community</p>
              </div>
              <h3 className="mt-6 font-semibold text-navy">Collaboration and access</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{site.seriesIntro[2]}</p>
            </article>
          </div>
        </div>

        <ul className="about-facts mt-6">
          {facts.map((item) => (
            <li key={item.label}>
              <AnimatedIcon name={item.icon} tone={item.tone} size="sm" motion="pulse" />
              <p className="mt-4 font-mono text-[10px] tracking-[0.16em] text-accent uppercase">{item.label}</p>
              <p className="mt-1 text-sm font-semibold text-navy">{item.value}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
