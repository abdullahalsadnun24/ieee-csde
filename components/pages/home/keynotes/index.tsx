import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { KeynoteStage } from "./stage";

export function KeynotesSection() {
  return (
    <section id="keynotes" className="keynote-stage home-section relative">
      <Container className="relative py-24">
        <SectionHeading
          index="06"
          eyebrow="Keynote speakers"
          title="Invited experts and presentation topics"
          description="Keynote speeches by internationally recognized experts are a listed CSDE highlight, covering artificial intelligence, cybersecurity, algorithms, and data engineering."
          icon="mic"
          tone="violet"
          editorial
        />
        <div className="mt-8 sm:mt-12">
          <KeynoteStage />
        </div>
      </Container>
    </section>
  );
}
