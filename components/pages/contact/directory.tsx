import { ContactBoard } from "@/components/pages/contact/board";
import { ContactForm } from "@/components/ui/contact-form";
import { Container } from "@/components/ui/container";

export function ContactDirectory() {
  return (
    <div className="contact-stage">
      <Container className="relative py-16">
        <ContactBoard showProposals />
        <div className="mt-6">
          <ContactForm />
        </div>
      </Container>
    </div>
  );
}
