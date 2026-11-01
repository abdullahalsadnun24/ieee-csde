import { ContactBoard } from "@/components/pages/contact/board";
import { ContactForm } from "@/components/ui/contact-form";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function ContactSection() {
  return (
    <section id="contact" className="contact-stage home-section relative">
      <span className="contact-watermark" aria-hidden>
        MAIL
      </span>
      <Container className="relative py-20">
        <SectionHeading
          index="12"
          eyebrow="Contact"
          title="Talk with the organizing team"
          description="Use the same general and technical contacts published on the official IEEE CSDE site."
          icon="mail"
          tone="pink"
        />
        <div className="mt-10">
          <ContactBoard />
        </div>
        <div className="mt-6">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
