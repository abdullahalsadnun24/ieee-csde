import type { Metadata } from "next";
import { ContactDirectory } from "@/components/pages/contact/directory";
import { PageHero } from "@/components/ui/page-hero";
import { pageMeta } from "@/lib/metadata";

export const metadata: Metadata = pageMeta(
  "Contact",
  "Contact the IEEE CSDE organizing team for general and technical queries.",
  "/contact",
);

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Conference enquiries"
        description="The contacts below are those published on the official IEEE CSDE website."
      />
      <ContactDirectory />
    </>
  );
}
