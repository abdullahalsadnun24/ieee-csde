import type { Metadata } from "next";
import { SubmissionGuidelines } from "@/components/pages/authors/submission/guidelines";
import { PageHero } from "@/components/ui/page-hero";
import { pageMeta } from "@/lib/metadata";

export const metadata: Metadata = pageMeta(
  "Submission Guideline",
  "How to prepare and submit papers to IEEE CSDE through the conference submission portal.",
  "/authors/submission",
);

export default function SubmissionPage() {
  return (
    <>
      <PageHero
        eyebrow="Authors"
        title="Paper submission guideline"
        description="Submissions use the IEEE conference format and the CSDE paper submission portal."
      />
      <SubmissionGuidelines />
    </>
  );
}
