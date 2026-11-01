import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Plus_Jakarta_Sans, Source_Serif_4 } from "next/font/google";
import Script from "next/script";
import { ColorStage } from "@/components/layout/color-stage";
import { HydrationGuard } from "@/components/layout/hydration-guard";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SkipLink } from "@/components/layout/skip-link";
import { defaultMetadata } from "@/lib/metadata";
import "./globals.css";

const inspectorAttrGuard = `(function(){var attrs=["data-cursor-ref","fdprocessedid"];function strip(){attrs.forEach(function(name){document.querySelectorAll("["+name+"]").forEach(function(node){node.removeAttribute(name)})})}strip();var root=document.documentElement;if(!root)return;var observer=new MutationObserver(strip);observer.observe(root,{subtree:true,childList:true,attributes:true,attributeFilter:attrs});var stop=function(){observer.disconnect();window.removeEventListener("csde:hydrated",stop)};window.addEventListener("csde:hydrated",stop);window.setTimeout(stop,5000)})();`;

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const serif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-serif-editorial",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = defaultMetadata;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${jakarta.variable} ${serif.variable} ${plexMono.variable} relative antialiased`}
        suppressHydrationWarning
      >
        <Script id="strip-inspector-attrs" strategy="beforeInteractive">
          {inspectorAttrGuard}
        </Script>
        <HydrationGuard />
        <ColorStage />
        <div className="relative z-10">
          <SkipLink />
          <SiteHeader />
          <main id="main">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
