import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SupporterList } from "./list";

export function SupportersSection() {
  return (
    <section id="supporters" className="home-section bg-white">
      <Container className="pb-20">
        <SectionHeading
          eyebrow="Support"
          title="Our supporter / patron"
          description="Patron supporting IEEE CSDE 2027."
          icon="heart"
          tone="cobalt"
        />
        <div className="mt-10">
          <SupporterList />
        </div>
      </Container>
    </section>
  );
}
