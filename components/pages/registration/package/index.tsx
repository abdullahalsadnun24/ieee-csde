import { Container } from "@/components/ui/container";
import { Notice } from "@/components/ui/notice";
import { RegistrationCategories } from "./categories";
import { RegistrationModes } from "./modes";

export function RegistrationPackageDetails() {
  return (
    <Container className="space-y-8 py-16">
      <Notice>
        2026 Bangladesh fees in BDT and USD are not listed here as 2027 Fiji prices. Amounts will appear when
        the organizing committee publishes the 2027 package.
      </Notice>
      <RegistrationCategories />
      <RegistrationModes />
    </Container>
  );
}
