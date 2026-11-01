import type { Metadata } from "next";
import { ProgramSchedule } from "@/components/pages/program/schedule";
import { PageHero } from "@/components/ui/page-hero";
import { pageMeta } from "@/lib/metadata";

export const metadata: Metadata = pageMeta(
  "Programme",
  "The IEEE CSDE 2027 conference programme will be published when confirmed.",
  "/program",
);

export default function ProgramPage() {
  return (
    <>
      <PageHero
        eyebrow="Programme"
        title="Conference schedule"
        description="The detailed IEEE CSDE 2027 schedule is not yet published."
      />
      <ProgramSchedule />
    </>
  );
}
