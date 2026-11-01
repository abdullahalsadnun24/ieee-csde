import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  distDir: process.env.NEXT_DIST_DIR || ".next",
  poweredByHeader: false,
  transpilePackages: ["three", "@react-three/fiber", "@react-three/drei"],
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: false },
      { source: "/callforpaper.html", destination: "/authors/call-for-papers", permanent: false },
      { source: "/callforspecialsession.html", destination: "/authors/call-for-special-session", permanent: false },
      { source: "/callforworkshop.html", destination: "/authors/call-for-workshop", permanent: false },
      { source: "/callfortutorial.html", destination: "/authors/call-for-tutorial", permanent: false },
      { source: "/importantdates.html", destination: "/authors/important-dates", permanent: false },
      { source: "/paperpreparation.html", destination: "/authors/paper-preparation", permanent: false },
      { source: "/submissionguide.html", destination: "/authors/submission", permanent: false },
      { source: "/presentationguideline.html", destination: "/authors/presentation", permanent: false },
      { source: "/pastevents.html", destination: "/authors/past-events", permanent: false },
      { source: "/scholarship-application.html", destination: "/authors/scholarship", permanent: false },
      { source: "/scholarship Application.html", destination: "/authors/scholarship", permanent: false },
      { source: "/scholarship%20Application.html", destination: "/authors/scholarship", permanent: false },
      { source: "/conference-registration.html", destination: "/registration", permanent: false },
      { source: "/registrationpackage.html", destination: "/registration/package", permanent: false },
      { source: "/committee.html", destination: "/committee", permanent: false },
      { source: "/generalchair.html", destination: "/general-chair", permanent: false },
      { source: "/venue.html", destination: "/venue", permanent: false },
      { source: "/reviewerguide.html", destination: "/reviewer-guide", permanent: false },
      { source: "/ieee_csde_2026_schedule.html", destination: "/program", permanent: false },
    ];
  },
};

export default nextConfig;
