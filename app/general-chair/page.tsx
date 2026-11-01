import type { Metadata } from "next";
import { ChairMessage } from "@/components/pages/general-chair/message";
import { PageHero } from "@/components/ui/page-hero";
import { pageMeta } from "@/lib/metadata";

export const metadata: Metadata = pageMeta(
  "General Chair",
  "The IEEE CSDE 2027 general chair message will be published when confirmed.",
  "/general-chair",
);

export default function GeneralChairPage() {
  return (
    <>
      <PageHero
        eyebrow="General chair"
        title="A message from the chair"
        description="The CSDE conference series is a platform for advancing computer science and data engineering across the Asia-Pacific region and beyond."
      />
      <ChairMessage />
    </>
  );
}
