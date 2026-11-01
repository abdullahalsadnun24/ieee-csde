import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { UiLink } from "@/components/ui/ui-link";
import { site } from "@/content/site";
import { ProgramBoard } from "./board";

export function ProgramSection() {
  return (
    <section id="program" className="home-section relative overflow-hidden band-cyan">
      <Container className="relative py-20">
        <SectionHeading
          index="10"
          eyebrow="Conference program"
          title="Keynotes, tutorials, papers, and networking"
          description="The detailed IEEE CSDE 2027 schedule is not yet published. Typical programmes include the sessions below, in physical and virtual format."
          icon="presentation"
          tone="pink"
        />
        <div className="mt-10">
          <ProgramBoard />
        </div>
        <p className="program-note">{site.hybridNote}</p>
        <div className="mt-8">
          <UiLink href="/program">Conference programme</UiLink>
        </div>
      </Container>
    </section>
  );
}
