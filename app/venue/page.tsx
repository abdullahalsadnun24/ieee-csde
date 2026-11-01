import type { Metadata } from "next";
import { VenueDetails } from "@/components/pages/venue/details";
import { PageHero } from "@/components/ui/page-hero";
import { site } from "@/content/site";
import { pageMeta } from "@/lib/metadata";

export const metadata: Metadata = pageMeta(
  "Venue",
  "IEEE CSDE 2027 will be held at Fiji Marriott Resort Momi Bay, Nadi, Fiji.",
  "/venue",
);

export default function VenuePage() {
  return (
    <>
      <PageHero eyebrow="Venue" title={site.venue.name} description={site.venue.label} />
      <VenueDetails />
    </>
  );
}
