import type { Metadata } from "next";
import { TutorialNote } from "@/components/pages/authors/call-for-tutorial/note";
import { PageHero } from "@/components/ui/page-hero";
import { pageMeta } from "@/lib/metadata";

export const metadata: Metadata = pageMeta(
  "Call for Tutorial",
  "IEEE CSDE invites tutorial sessions as part of the conference programme.",
  "/authors/call-for-tutorial",
);

export default function CallForTutorialPage() {
  return (
    <>
      <PageHero
        eyebrow="Tutorials"
        title="Call for tutorial"
        description="Tutorial sessions are a listed highlight of IEEE CSDE, alongside keynotes and technical papers."
      />
      <TutorialNote />
    </>
  );
}
