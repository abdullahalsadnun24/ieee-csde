import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SponsorList } from "./list";

export function SponsorsSection() {
  return (
    <section id="sponsors" className="home-section border-t border-line bg-white">
      <Container className="py-20">
        <SectionHeading
          eyebrow="Sponsors"
          title="Our sponsors"
          description="Organizations sponsoring IEEE CSDE 2027."
          icon="shield"
          tone="cobalt"
        />
        <div className="mt-10">
          <SponsorList />
        </div>
      </Container>
    </section>
  );
}
