import type { Metadata } from "next";
import { PaperPreparationContent } from "@/components/pages/authors/paper-preparation";
import { PageHero } from "@/components/ui/page-hero";
import { paperPreparation } from "@/content/authors";
import { pageMeta } from "@/lib/metadata";

export const metadata: Metadata = pageMeta(
  "Paper Preparation",
  "IEEE template, page limit, PDF eXpress, and camera-ready guidance for IEEE CSDE.",
  "/authors/paper-preparation",
);

export default function PaperPreparationPage() {
  return (
    <>
      <PageHero eyebrow="Authors" title="Paper preparation" description={paperPreparation.intro} />
      <PaperPreparationContent />
    </>
  );
}
