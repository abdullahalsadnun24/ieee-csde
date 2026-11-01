import type { Metadata } from "next";
import { ImportantDatesTimeline } from "@/components/pages/authors/important-dates/timeline";
import { pageMeta } from "@/lib/metadata";

export const metadata: Metadata = pageMeta(
  "Important Dates",
  "IEEE CSDE 2027 submission and conference milestones will be announced on this page.",
  "/authors/important-dates",
);

export default function ImportantDatesPage() {
  return <ImportantDatesTimeline />;
}
