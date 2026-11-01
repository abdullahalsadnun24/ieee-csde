import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { UiLink } from "@/components/ui/ui-link";
import { CommitteeBoard } from "./board";

export function CommitteeSection() {
  return (
    <section id="committee" className="home-section relative overflow-hidden band-pink">
      <Container className="relative py-20">
        <SectionHeading
          index="07"
          eyebrow="Organizing committee"
          title="Chairs, technical committee, and organizers"
          description="Committee names, roles, and affiliations for IEEE CSDE 2027 will appear when confirmed."
          icon="users"
          tone="pink"
        />
        <div className="mt-10">
          <CommitteeBoard />
        </div>
        <div className="committee-actions">
          <UiLink href="/general-chair">General chair</UiLink>
          <UiLink href="/committee" variant="ghost">
            Committee page
          </UiLink>
        </div>
      </Container>
    </section>
  );
}
