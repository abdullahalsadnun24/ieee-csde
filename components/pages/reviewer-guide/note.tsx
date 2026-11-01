import { Container } from "@/components/ui/container";
import { reviewerNote } from "@/content/authors";

export function ReviewerNote() {
  return (
    <Container className="py-16">
      <article className="surface-card max-w-3xl p-7 sm:p-10">
        <p className="text-base leading-8 text-muted">{reviewerNote}</p>
      </article>
    </Container>
  );
}
