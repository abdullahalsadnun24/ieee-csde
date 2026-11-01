import type { Metadata } from "next";
import { PresentationGuidelines } from "@/components/pages/authors/presentation";
import { PageHero } from "@/components/ui/page-hero";
import { pageMeta } from "@/lib/metadata";

export const metadata: Metadata = pageMeta(
  "Presentation Guideline",
  "Oral presentation guidance for physical and virtual IEEE CSDE sessions.",
  "/authors/presentation",
);

export default function PresentationPage() {
  return (
    <>
      <PageHero
        eyebrow="Authors"
        title="Presentation guidelines"
        description="Allocated time is 15 minutes for the talk and 3 minutes for questions."
      />
      <PresentationGuidelines />
    </>
  );
}
