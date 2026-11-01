import { site } from "@/content/site";

export const upcomingPage = {
  eyebrow: "Coming soon",
  title: `${site.name} ${site.focusYear}`,
  statement: "is coming soon.",
  lead: `${site.fullName} will meet again at ${site.venue.label}. Dates, calls, and the programme will be published on this site.`,
  homeHref: "/",
  homeLabel: "Go back to home",
  editionLabel: "IEEE Asia-Pacific",
  place: site.venue.city,
  venue: site.venue.name,
  year: String(site.focusYear),
} as const;
