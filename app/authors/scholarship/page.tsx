import type { Metadata } from "next";
import { ScholarshipDetails } from "@/components/pages/authors/scholarship/details";
import { PageHero } from "@/components/ui/page-hero";
import { pageMeta } from "@/lib/metadata";

export const metadata: Metadata = pageMeta(
  "Scholarship Application",
  "IEEE CSDE offers scholarships to students from developing nations.",
  "/authors/scholarship",
);

export default function ScholarshipPage() {
  return (
    <>
      <PageHero
        eyebrow="Authors"
        title="Scholarship application"
        description="Student support has been offered in recent CSDE editions."
      />
      <ScholarshipDetails />
    </>
  );
}
