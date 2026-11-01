import Image from "next/image";
// import Link from "next/link";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import { Container } from "@/components/ui/container";
import { LogoMark } from "@/components/layout/logo-mark";
import { footerNav } from "@/content/nav";
import { site } from "@/content/site";
import { sponsors } from "@/content/sponsors";
import { supporters } from "@/content/supporters";
import { cn } from "@/lib/cn";

export function SiteFooter() {
  return (
    <footer className="footer-solid relative overflow-hidden">
      <span className="pointer-events-none absolute -left-10 top-8 h-40 w-40 rounded-full bg-cobalt opacity-25" aria-hidden />
      <span className="pointer-events-none absolute right-[18%] top-10 h-28 w-28 rounded-full bg-pink opacity-30" aria-hidden />
      <span className="pointer-events-none absolute right-10 bottom-6 h-24 w-24 rounded-full bg-pale opacity-20" aria-hidden />
      <span className="pointer-events-none absolute left-[36%] bottom-8 h-16 w-16 rounded-full bg-violet opacity-25" aria-hidden />
      <Container className="relative z-10 grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <LogoMark className="h-11 w-11" />
            <div>
              <p className="font-display text-lg tracking-tight">
                {site.name} {site.focusYear}
              </p>
              <p className="font-mono text-[11px] text-white/70">{site.venue.label}</p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-lg font-semibold leading-7 text-white">{site.theme}</p>
          <p className="mt-3 max-w-md text-sm leading-7 text-white/80">{site.fullName}</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            {sponsors.map((sponsor) => (
              <span
                key={sponsor.name}
                className={cn(
                  "inline-flex items-center rounded-xl px-2 py-1",
                  sponsor.dark ? "bg-black" : "bg-white",
                )}
              >
                <Image
                  src={sponsor.src}
                  alt={sponsor.alt}
                  width={sponsor.width}
                  height={sponsor.height}
                  className="h-9 w-auto object-contain"
                />
              </span>
            ))}
            {supporters.map((supporter) => (
              <span key={supporter.name} className="inline-flex rounded-xl bg-white px-2 py-1">
                <Image
                  src={supporter.src}
                  alt={`${supporter.name}, ${supporter.role}`}
                  width={supporter.width}
                  height={supporter.height}
                  className="h-9 w-auto object-contain"
                />
              </span>
            ))}
          </div>
        </div>
        <div>
          <p className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.16em] text-white/60 uppercase">
            <AnimatedIcon name="compass" tone="cobalt" size="sm" />
            Explore
          </p>
          {/* <ul className="mt-5 space-y-2">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-white/80 transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul> */}
          <ul className="mt-5 space-y-2">
            {footerNav.map((item) => (
              <li key={item.label}>
                {item.label}
                {/* <Link href={item.href} className="text-sm text-white/80 transition-colors hover:text-white">
                  {item.label}
                </Link> */}
              </li>
            ))} 
          </ul>
        </div>
        <div>
          <p className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.16em] text-white/60 uppercase">
            <AnimatedIcon name="mail" tone="pink" size="sm" />
            Contact
          </p>
          <ul className="mt-5 space-y-3 text-sm text-white/80">
            <li className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-xl">
              <p className="font-mono text-[11px] tracking-[0.12em] text-white/60 uppercase">
                {site.contacts.general.label}
              </p>
              <a className="mt-2 block font-mono text-white" href={`mailto:${site.contacts.general.email}`}>
                {site.contacts.general.email}
              </a>
            </li>
            <li className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-xl">
              <p className="font-mono text-[11px] tracking-[0.12em] text-white/60 uppercase">
                {site.contacts.technical.label}
              </p>
              <a className="mt-2 block font-mono text-white" href={`mailto:${site.contacts.technical.email}`}>
                {site.contacts.technical.email}
              </a>
            </li>
          </ul>
        </div>
      </Container>
      <div className="relative z-10 border-t border-white/10">
        <Container className="flex flex-col gap-2 py-4 font-mono text-[11px] tracking-[0.08em] text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>{site.copyright}</p>
          <p>ieee-csde.org</p>
        </Container>
      </div>
    </footer>
  );
}
