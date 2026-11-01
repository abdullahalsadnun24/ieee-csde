import { Container } from "@/components/ui/container";
import { PhysicalPresentation } from "./physical";
import { VirtualPresentation } from "./virtual";

export function PresentationGuidelines() {
  return (
    <Container className="grid gap-8 py-16 lg:grid-cols-2">
      <PhysicalPresentation />
      <VirtualPresentation />
    </Container>
  );
}
