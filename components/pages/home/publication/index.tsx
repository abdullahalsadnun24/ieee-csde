import { AnimatedIcon } from "@/components/ui/animated-icon";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { site } from "@/content/site";
import { JournalList } from "./journal-list";

export function PublicationSection() {
  return (
    <section id="publication" className="home-section band-white">
      <Container className="py-20">
        <SectionHeading
          index="11"
          eyebrow="Publication"
          title="IEEE Xplore and selected journal issues"
          description={site.publication.xplore}
          icon="journal"
          tone="cobalt"
        />
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <article className="mod-cell glass-sheen p-6 sm:p-7">
            <AnimatedIcon name="lock" tone="cobalt" motion="pulse" />
            <h3 className="mt-5 font-semibold text-navy">IEEE Xplore</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{site.publication.xplore}</p>
            <p className="mt-3 text-sm leading-7 text-muted">{site.publication.proceedings}</p>
          </article>
          <article className="mod-cell glass-sheen bg-pale p-6 sm:p-7">
            <AnimatedIcon name="journal" tone="violet" />
            <h3 className="mt-5 font-semibold text-navy">Special issues</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{site.publication.journalIntro}</p>
            <p className="mt-3 text-sm leading-7 text-muted">{site.publication.apcNote}</p>
          </article>
        </div>
        <div id="journals" className="home-section mt-12">
          <SectionHeading
            eyebrow="Journals"
            title="Selected papers and special issues"
            icon="journal"
            tone="violet"
          />
          <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">{site.publication.apcNote}</p>
          <div className="mt-10">
            <JournalList />
          </div>
        </div>
      </Container>
    </section>
  );
}
