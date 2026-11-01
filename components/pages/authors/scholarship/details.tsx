import { Container } from "@/components/ui/container";
import { scholarshipCopy } from "@/content/authors";

export function ScholarshipDetails() {
  return (
    <Container className="py-16">
      <article className="surface-card max-w-3xl p-7 sm:p-10">
        <p className="text-base leading-8 text-muted">{scholarshipCopy}</p>
      </article>
    </Container>
  );
}
