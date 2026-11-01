import type { MetadataRoute } from "next";
import { site } from "@/content/site";

const paths = [
  "",
  "/general-chair",
  "/committee",
  "/program",
  "/venue",
  "/reviewer-guide",
  "/authors/important-dates",
  "/authors/call-for-papers",
  "/authors/call-for-special-session",
  "/authors/call-for-workshop",
  "/authors/call-for-tutorial",
  "/authors/submission",
  "/authors/paper-preparation",
  "/authors/presentation",
  "/authors/scholarship",
  "/authors/past-events",
  "/authors/upcoming",
  "/registration",
  "/registration/package",
  "/contact",
  "/upcoming",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date("2026-10-29"),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
