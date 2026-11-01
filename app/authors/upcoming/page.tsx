import type { Metadata } from "next";
import { UpcomingNotice } from "@/components/pages/upcoming";
import { pageMeta } from "@/lib/metadata";

export const metadata: Metadata = pageMeta(
  "Coming soon",
  "IEEE CSDE 2027 is coming soon.",
  "/authors/upcoming",
);

export default function AuthorsUpcomingPage() {
  return <UpcomingNotice />;
}
