import type { Metadata } from "next";
import { PastEventsContent } from "@/components/pages/authors/past-events";
import { PageHero } from "@/components/ui/page-hero";
import { pageMeta } from "@/lib/metadata";

export const metadata: Metadata = pageMeta(
  "Past Events",
  "Previous IEEE CSDE conference sites from 2014 to 2022.",
  "/authors/past-events",
);

export default function PastEventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Archive"
        title="Past events"
        description="Links published on the official IEEE CSDE past-events page."
      />
      <PastEventsContent />
    </>
  );
}
