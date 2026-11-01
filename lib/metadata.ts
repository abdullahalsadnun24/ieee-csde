import type { Metadata } from "next";
import { site } from "@/content/site";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} ${site.focusYear} · ${site.fullName}`,
    template: `%s · ${site.name} ${site.focusYear}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "IEEE CSDE",
    "CSDE 2027",
    "computer science",
    "data engineering",
    "IEEE conference",
    "Fiji Marriott Resort Momi Bay",
    "artificial intelligence",
    "data science",
  ],
  authors: [{ name: "IEEE CSDE Organizing Committee" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: `${site.name} ${site.focusYear}`,
    title: `${site.name} ${site.focusYear} · ${site.fullName}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} ${site.focusYear}`,
    description: site.description,
  },
  alternates: {
    canonical: site.url,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export function pageMeta(title: string, description: string, path = ""): Metadata {
  const url = path ? `${site.url}${path}` : site.url;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} · ${site.name} ${site.focusYear}`,
      description,
      url,
    },
  };
}
