import type { Metadata } from "next";
import { WorkshopProposal } from "@/components/pages/authors/call-for-workshop/proposal";
import { PageHero } from "@/components/ui/page-hero";
import { workshop } from "@/content/workshop";
import { pageMeta } from "@/lib/metadata";

export const metadata: Metadata = pageMeta(
  "Call for Workshop",
  "Submit a workshop proposal to IEEE CSDE covering emerging topics in computer science and data engineering.",
  "/authors/call-for-workshop",
);

export default function CallForWorkshopPage() {
  return (
    <>
      <PageHero eyebrow="Workshops" title="Call for workshop proposals" description={workshop.intro[0]} />
      <WorkshopProposal />
    </>
  );
}
