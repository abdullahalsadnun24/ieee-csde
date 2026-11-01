import { Container } from "@/components/ui/container";
import { PastEventsArchive } from "./archive";
import { PhotoStrip } from "./photo-strip";

export function PastEventsContent() {
  return (
    <Container className="py-16">
      <PastEventsArchive />
      <div className="mt-16">
        <PhotoStrip caption="Photographs from recent IEEE CSDE-related technical sessions, shown with the conference archive." />
      </div>
    </Container>
  );
}
