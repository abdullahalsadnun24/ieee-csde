import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ConferencePhotos } from "./gallery";

export function PhotosSection() {
  return (
    <section id="photos" className="home-section relative overflow-x-clip band-cyan">
      <Container className="relative py-20">
        <SectionHeading
          eyebrow="Conference photos"
          title="Sessions from recent IEEE CSDE-related meetings"
          description="Photographs from technical sessions, shown with the conference photo album."
          icon="presentation"
          tone="pink"
        />
        <div className="mt-10">
          <ConferencePhotos />
        </div>
      </Container>
    </section>
  );
}
