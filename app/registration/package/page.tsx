import type { Metadata } from "next";
import { RegistrationPackageDetails } from "@/components/pages/registration/package";
import { PageHero } from "@/components/ui/page-hero";
import { pageMeta } from "@/lib/metadata";

export const metadata: Metadata = pageMeta(
  "Registration Package",
  "IEEE CSDE 2027 registration categories will be published when confirmed.",
  "/registration/package",
);

export default function RegistrationPackagePage() {
  return (
    <>
      <PageHero
        eyebrow="Registration"
        title="Registration package"
        description="Recent CSDE editions used IEEE-member and non-member rates, with onsite and virtual options."
      />
      <RegistrationPackageDetails />
    </>
  );
}
