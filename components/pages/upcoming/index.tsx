import { AnimatedIcon } from "@/components/ui/animated-icon";
import { Container } from "@/components/ui/container";
import { NetworkField } from "@/components/ui/network-field";
import { UiLink } from "@/components/ui/ui-link";
import { upcomingPage } from "@/components/pages/upcoming/upcoming";

export function UpcomingNotice() {
  return (
    <section className="upcoming-stage relative overflow-hidden">
      <span className="upcoming-watermark" aria-hidden>
        {upcomingPage.year}
      </span>

      <Container className="relative z-10 flex min-h-[inherit] items-center py-16 sm:py-20">
        <div className="grid w-full items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <p className="chip mb-6 w-fit">
              <AnimatedIcon name="spark" tone="violet" size="sm" motion="pulse" />
              {upcomingPage.eyebrow}
            </p>
            <span className="accent-rule mb-5 block" aria-hidden />
            <h1>
              <span className="font-display block text-[2.55rem] leading-[0.92] text-navy sm:text-6xl lg:text-[4.35rem]">
                {upcomingPage.title}
              </span>
              <span className="font-editorial mt-4 block text-[1.65rem] leading-[1.12] text-navy sm:text-[2.35rem]">
                {upcomingPage.statement}
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted">{upcomingPage.lead}</p>
            <div className="mt-8">
              <UiLink href={upcomingPage.homeHref}>{upcomingPage.homeLabel}</UiLink>
            </div>
          </div>

          <aside className="upcoming-board lg:col-span-5" aria-label={`${upcomingPage.title} edition`}>
            <NetworkField className="upcoming-field" />
            <div className="relative z-10">
              <p className="eyebrow">{upcomingPage.editionLabel}</p>
              <p className="upcoming-year">
                {upcomingPage.year}
                <span>{upcomingPage.place}</span>
              </p>
              <p className="mt-6 max-w-xs text-sm leading-6 text-navy">{upcomingPage.venue}</p>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
