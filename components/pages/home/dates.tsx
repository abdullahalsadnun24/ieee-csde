import { Container } from "@/components/ui/container";
import { DateTimeline } from "@/components/ui/date-timeline";
import { SectionHeading } from "@/components/ui/section-heading";
import { UiLink } from "@/components/ui/ui-link";
import { dateMilestones } from "@/content/dates";
import { site } from "@/content/site";

export function DatesSection() {
  return (
    <section id="dates" className="dates-stage home-section relative overflow-hidden">
      <span className="dates-watermark" aria-hidden>
        DATES
      </span>

      <Container className="relative py-24">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <SectionHeading
              index="05"
              eyebrow="Important dates"
              title="2027 timeline"
              icon="calendar"
              tone="gold"
              editorial
            />
            <p className="dates-lede mt-8">
              The CSDE 2027 calendar will be published here. The milestones below follow the conference&apos;s established
              submission sequence.
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

        <div className="mt-8 flex flex-wrap gap-3">
          <UiLink href="/authors/important-dates" variant="ghost">
            Important dates page
          </UiLink>
          <UiLink href="/venue" variant="secondary">
            Venue details
          </UiLink>
        </div>
      </Container>
    </section>
  );
}
