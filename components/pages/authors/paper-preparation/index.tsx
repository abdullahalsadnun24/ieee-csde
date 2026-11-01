import { Container } from "@/components/ui/container";
import { AuthorDetails } from "./author-details";
import { CopyrightNotice } from "./copyright";
import { FileFormat } from "./file-format";
import { PaperTemplate } from "./template";

export function PaperPreparationContent() {
  return (
    <Container className="space-y-8 py-16">
      <AuthorDetails />
      <PaperTemplate />
      <CopyrightNotice />
      <FileFormat />
    </Container>
  );
}
