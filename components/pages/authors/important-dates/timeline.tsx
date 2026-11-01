import { AnimatedIcon } from "@/components/ui/animated-icon";
import { Container } from "@/components/ui/container";
import { DateTimeline } from "@/components/ui/date-timeline";
import { dateMilestones } from "@/content/dates";
import { site } from "@/content/site";

export function ImportantDatesTimeline() {
  return (
    <section className="dates-stage relative overflow-hidden">
      <span className="dates-watermark" aria-hidden>
        DATES
      </span>
      <Container className="relative py-20 lg:py-24">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="mb-4 flex items-center gap-3">
              <AnimatedIcon name="calendar" tone="gold" motion="pulse" />
              <p className="eyebrow">Authors  /  Important dates</p>
            </div>
            <span className="accent-rule mb-4 block" aria-hidden />
            <h1 className="font-editorial text-[2rem] leading-[1.12] text-navy sm:text-[2.55rem]">2027 timeline</h1>
            <p className="dates-lede mt-8">
              Calendar dates for IEEE CSDE 2027 have not been published. The sequence below matches the conference’s
              established process.
            </p>
          </div>
          <p className="dates-year lg:col-span-4 lg:text-right">
            {site.focusYear}
            <span>{String(dateMilestones.length).padStart(2, "0")} milestones · calendar unpublished</span>
          </p>
        </div>

        <div className="mt-14">
          <DateTimeline />
        </div>

        <aside className="dates-note mt-6">
          <p className="eyebrow">Note</p>
          <p>Specific 2026 dates from the previous edition are not carried forward as 2027 deadlines.</p>
        </aside>
      </Container>
    </section>
  );
}
