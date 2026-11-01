import type { Metadata } from "next";
import { CallForPapersContent } from "@/components/pages/authors/call-for-papers";
import { pageMeta } from "@/lib/metadata";

export const metadata: Metadata = pageMeta(
  "Call for Papers",
  "Submit original research to IEEE CSDE 2027 in computer science and data engineering.",
  "/authors/call-for-papers",
);

export default function CallForPapersPage() {
  return <CallForPapersContent />;
}
