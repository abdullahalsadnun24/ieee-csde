import type { Metadata } from "next";
import { RegistrationOverview } from "@/components/pages/registration/overview";
import { PageHero } from "@/components/ui/page-hero";
import { pageMeta } from "@/lib/metadata";

export const metadata: Metadata = pageMeta(
  "Conference Registration",
  "IEEE CSDE 2027 registration will open when the package is published.",
  "/registration",
);

export default function RegistrationPage() {
  return (
    <>
      <PageHero
        eyebrow="Registration"
        title="Conference registration"
        description="Author and attendee registration for IEEE CSDE 2027."
      />
      <RegistrationOverview />
    </>
  );
}
