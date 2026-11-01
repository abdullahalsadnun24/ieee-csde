import type { Metadata } from "next";
import { SpecialSessionProposal } from "@/components/pages/authors/call-for-special-session/proposal";
import { PageHero } from "@/components/ui/page-hero";
import { specialSession } from "@/content/workshop";
import { pageMeta } from "@/lib/metadata";

export const metadata: Metadata = pageMeta(
  "Call for Special Session",
  "Propose a special session for IEEE CSDE in computer science and data engineering.",
  "/authors/call-for-special-session",
);

export default function CallForSpecialSessionPage() {
  return (
    <>
      <PageHero eyebrow="Special sessions" title="Call for special session" description={specialSession.intro} />
      <SpecialSessionProposal />
    </>
  );
}
