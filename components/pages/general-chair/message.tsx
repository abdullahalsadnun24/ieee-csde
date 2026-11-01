import { Container } from "@/components/ui/container";
import { Notice } from "@/components/ui/notice";

export function ChairMessage() {
  return (
    <Container className="space-y-6 py-16">
      <Notice>
        The 2027 general chair and welcome letter have not been announced on the official site. The previous
        letter referred to CSDE 2026 in Bangladesh and is not presented here as a 2027 statement.
      </Notice>
      <article className="surface-card max-w-3xl p-7 sm:p-10">
        <p className="text-base leading-8 text-muted">
          CSDE remains committed to promoting research, interdisciplinary collaboration, and engagement
          between academia and industry through keynote presentations, technical sessions, tutorials, and
          workshops.
        </p>
      </article>
    </Container>
  );
}
