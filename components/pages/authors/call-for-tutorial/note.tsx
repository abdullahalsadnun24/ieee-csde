import { Container } from "@/components/ui/container";
import { Notice } from "@/components/ui/notice";
import { site } from "@/content/site";

export function TutorialNote() {
  return (
    <Container className="space-y-6 py-16">
      <Notice>
        The official call-for-tutorial page currently has no additional proposal text. Tutorial submission has
        historically been grouped with the paper timeline. Detailed 2027 tutorial instructions will be added
        when published.
      </Notice>
      <p className="max-w-3xl text-base leading-8 text-muted">
        Enquiries:{" "}
        <a className="text-accent" href={`mailto:${site.contacts.proposals}`}>
          {site.contacts.proposals}
        </a>
      </p>
    </Container>
  );
}
