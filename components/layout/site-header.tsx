"use client";

import { ChevronDown, Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { LogoMark } from "@/components/layout/logo-mark";
import { AnimatedIcon, type IconName } from "@/components/ui/animated-icon";
import { primaryNav, type NavLink } from "@/content/nav";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

function pathMatches(href: string, pathname: string) {
  if (!href || href.startsWith("http") || href.includes("#")) return false;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

const navIcons: Record<string, IconName> = {
  Conference: "calendar",
  Authors: "paper",
  Registration: "journal",
  Venue: "pin",
  Contact: "mail",
};

function itemIsActive(item: NavLink, pathname: string) {
  if (item.children?.length) {
    return item.children.some((child) => pathMatches(child.href, pathname)) || pathMatches(item.href, pathname);
  }
  return pathMatches(item.href, pathname);
}

function heroStillInView() {
  const hero = document.getElementById("welcome");
  if (!hero) return false;
  return hero.getBoundingClientRect().bottom > 88;
}

function HomeButton({ active }: { active: boolean }) {
  return (
    <Link href="/" className={cn("site-nav-home", active && "is-active")} aria-current={active ? "page" : undefined}>
      <span className="site-nav-home-mark" aria-hidden>
        <Home strokeWidth={2.1} />
      </span>
      Home
    </Link>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const uid = useId();
  const rootRef = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState<string | null>(null);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const [navReady, setNavReady] = useState(false);
  const [inHero, setInHero] = useState(isHome);
  const [revealed, setRevealed] = useState(true);

  useEffect(() => {
    setNavReady(true);
  }, []);

  useEffect(() => {
    const home = pathname === "/";
    let anchor = window.scrollY;
    let primed = false;

    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);

      if (!home) {
        setInHero(false);
        setRevealed(true);
        anchor = y;
        return;
      }

      const active = heroStillInView();
      setInHero(active);
      if (active) {
        setRevealed(true);
        anchor = y;
      } else if (!primed) {
        setRevealed(false);
        anchor = y;
      } else if (y - anchor < -8) {
        setRevealed(true);
        anchor = y;
      } else if (y - anchor > 8) {
        setRevealed(false);
        anchor = y;
      }

      primed = true;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    setOpen(false);
    setMenu(null);
    setMobileSection(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onPointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setMenu(null);
      }
    }
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenu(null);
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const concealed = isHome && !inHero && !revealed && !open && menu === null;

  return (
    <header
      ref={rootRef}
      className={cn("site-nav", isHome && "is-home", scrolled && "is-scrolled", concealed && "is-concealed")}
    >
      <div className="nav-shell">
        <Link href="/" className="nav-brand">
          <LogoMark className="nav-brand-mark h-9 w-9 lg:h-10 lg:w-10" />
          <span className="nav-brand-copy">
            <span className="nav-brand-title">
              {site.name}
              <span className="nav-brand-year">{site.focusYear}</span>
            </span>
            <span className="nav-brand-theme">{site.theme}</span>
          </span>
        </Link>

        <nav className="nav-cluster hidden lg:flex" aria-label="Primary">
          {primaryNav.map((item) => {
            const active = navReady && itemIsActive(item, pathname);
            const panelId = `${uid}-${item.label}`;
            if (item.label === "Home") {
              return <HomeButton key={item.label} active={active} />;
            }
            const icon = (
              <AnimatedIcon
                name={navIcons[item.label] ?? "spark"}
                tone="cobalt"
                size="sm"
                variant="plain"
                className="nav-link-icon h-3.5 w-3.5"
              />
            );
            if (!item.children?.length) {
              return (
                <Link key={item.label} href={item.href} className={cn("site-nav-link", active && "is-active")}>
                  {icon}
                  {item.label}
                </Link>
              );
            }
            const expanded = menu === item.label;
            return (
              <div key={item.label} className="relative">
                <button
                  type="button"
                  className={cn("site-nav-link", active && "is-active")}
                  aria-expanded={expanded}
                  aria-controls={panelId}
                  onClick={() => setMenu(expanded ? null : item.label)}
                  onMouseEnter={() => setMenu(item.label)}
                >
                  {icon}
                  {item.label}
                  <ChevronDown className="site-nav-chevron" aria-hidden />
                </button>
                {expanded ? (
                  <div id={panelId} className="site-nav-panel" onMouseLeave={() => setMenu(null)}>
                    {item.children.map((child) =>
                      child.external ? (
                        <a
                          key={child.href}
                          href={child.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="site-nav-panel-link"
                        >
                          <span className="site-nav-panel-dot" aria-hidden />
                          {child.label}
                        </a>
                      ) : (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={cn(
                            "site-nav-panel-link",
                            navReady && pathMatches(child.href, pathname) && "is-active",
                          )}
                        >
                          <span className="site-nav-panel-dot" aria-hidden />
                          {child.label}
                        </Link>
                      ),
                    )}
                  </div>
                ) : null}
              </div>
            );
          })}
        </nav>

        <Link href="/authors/call-for-papers" className="site-nav-cta hidden lg:inline-flex">
          Call for papers
        </Link>

        <button
          type="button"
          className="site-nav-toggle ml-auto inline-flex lg:hidden"
          aria-expanded={open}
          aria-controls={`${uid}-drawer`}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span aria-hidden className="flex flex-col gap-1.5">
            <span className={cn("nav-toggle-bar", open && "is-open-top")} />
            <span className={cn("nav-toggle-bar", open && "is-open-mid")} />
            <span className={cn("nav-toggle-bar", open && "is-open-bottom")} />
          </span>
        </button>
      </div>

      {open ? (
        <div className="site-nav-drawer-wrap lg:hidden">
          <button
            type="button"
            className="site-nav-drawer-dim"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          />
          <div id={`${uid}-drawer`} className="site-nav-drawer" role="dialog" aria-modal="true" aria-label="Menu">
            <div className="mb-6 flex items-center justify-between gap-3">
              <div className="flex min-w-0 items-center gap-3">
                <LogoMark className="h-9 w-9" />
                <div>
                  <p className="text-sm font-semibold text-navy">{site.shortTitle}</p>
                  <p className="font-mono text-[10px] leading-4 text-muted">{site.themeLead}</p>
                </div>
              </div>
              <button type="button" className="site-nav-drawer-close" onClick={() => setOpen(false)}>
                Close
              </button>
            </div>
            <nav className="site-nav-mobile" aria-label="Mobile">
              {primaryNav.map((item) => (
                <div key={item.label} className="site-nav-mobile-item">
                  {item.label === "Home" ? (
                    <HomeButton active={navReady && pathname === "/"} />
                  ) : item.children?.length ? (
                    <>
                      <button
                        type="button"
                        className="site-nav-mobile-toggle"
                        aria-expanded={mobileSection === item.label}
                        onClick={() => setMobileSection(mobileSection === item.label ? null : item.label)}
                      >
                        <span className="inline-flex items-center gap-2">
                          <AnimatedIcon
                            name={navIcons[item.label] ?? "spark"}
                            tone="cobalt"
                            size="sm"
                            variant="plain"
                            className="h-4 w-4"
                          />
                          {item.label}
                        </span>
                        <span aria-hidden>{mobileSection === item.label ? "–" : "+"}</span>
                      </button>
                      {mobileSection === item.label
                        ? item.children.map((child) =>
                            child.external ? (
                              <a
                                key={child.href}
                                href={child.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="site-nav-mobile-link"
                              >
                                {child.label}
                              </a>
                            ) : (
                              <Link key={child.href} href={child.href} className="site-nav-mobile-link">
                                {child.label}
                              </Link>
                            ),
                          )
                        : null}
                    </>
                  ) : (
                    <Link href={item.href} className="site-nav-mobile-toggle">
                      <span className="inline-flex items-center gap-2">
                        <AnimatedIcon
                          name={navIcons[item.label] ?? "spark"}
                          tone="cobalt"
                          size="sm"
                          variant="plain"
                          className="h-4 w-4"
                        />
                        {item.label}
                      </span>
                    </Link>
                  )}
                </div>
              ))}
            </nav>
            <Link href="/authors/call-for-papers" className="btn-primary mt-6 w-full">
              Call for papers
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
