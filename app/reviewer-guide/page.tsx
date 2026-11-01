import type { Metadata } from "next";
import { ReviewerNote } from "@/components/pages/reviewer-guide/note";
import { PageHero } from "@/components/ui/page-hero";
import { pageMeta } from "@/lib/metadata";

export const metadata: Metadata = pageMeta(
  "Reviewer Guide",
  "Reviewer registration note for IEEE CSDE authors.",
  "/reviewer-guide",
);

export default function ReviewerGuidePage() {
  return (
    <>
      <PageHero
        eyebrow="Reviewers"
        title="Reviewer guide"
        description="Guidance published on the official IEEE CSDE reviewer page."
      />
      <ReviewerNote />
    </>
  );
}
