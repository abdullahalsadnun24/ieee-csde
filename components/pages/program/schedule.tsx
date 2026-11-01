import { Container } from "@/components/ui/container";
import { Notice } from "@/components/ui/notice";
import { site } from "@/content/site";

export function ProgramSchedule() {
  return (
    <Container className="space-y-6 py-16">
      <Notice>
        The previous site hosted a 2026 event schedule. That timetable is not shown as the 2027 programme.
      </Notice>
      <div className="surface-card max-w-3xl p-7">
        <p className="text-base leading-8 text-muted">
          Typical CSDE programmes include keynotes, tutorials, workshops, and technical paper sessions.
          {` ${site.hybridNote}`}
        </p>
      </div>
    </Container>
  );
}
