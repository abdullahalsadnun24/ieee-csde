import type { Metadata } from "next";
import { CommitteeListing } from "@/components/pages/committee/listing";
import { PageHero } from "@/components/ui/page-hero";
import { pageMeta } from "@/lib/metadata";

export const metadata: Metadata = pageMeta(
  "Committee",
  "IEEE CSDE 2027 committee listings will be published when confirmed.",
  "/committee",
);

export default function CommitteePage() {
  return (
    <>
      <PageHero
        eyebrow="Committee"
        title="Meet the people behind the conference"
        description="The official CSDE committee directory did not list confirmed 2027 members at the time of this redesign."
      />
      <CommitteeListing />
    </>
  );
}
