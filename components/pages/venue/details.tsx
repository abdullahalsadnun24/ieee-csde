import { AnimatedIcon } from "@/components/ui/animated-icon";
import { Container } from "@/components/ui/container";
import { site } from "@/content/site";

export function VenueDetails() {
  return (
    <Container className="py-16">
      <div className="grid gap-6 lg:grid-cols-12">
        <article className="mod-cell glass-sheen p-6 sm:p-9 lg:col-span-8">
          {site.venueCopy.map((paragraph) => (
            <p key={paragraph} className="mt-4 text-base leading-8 text-muted first:mt-0">
              {paragraph}
            </p>
          ))}
          <p className="mt-6 text-base leading-8 text-muted">{site.hybridNote}</p>
        </article>
        <aside className="relative overflow-hidden rounded-[1.25rem] bg-pale p-6 lg:col-span-4">
          <div className="absolute right-4 top-4 flex flex-col gap-2">
            <AnimatedIcon name="globe" tone="violet" size="sm" motion="spin" />
            <AnimatedIcon name="pin" tone="cobalt" size="sm" motion="pulse" />
          </div>
          <div className="flex items-center gap-3">
            <AnimatedIcon name="wave" tone="teal" motion="pulse" />
            <p className="eyebrow">Location</p>
          </div>
          <dl className="mt-5 space-y-4 text-sm">
            <div>
              <dt className="font-mono text-[11px] tracking-[0.12em] text-accent uppercase">Region</dt>
              <dd className="mt-1 font-semibold text-navy">{site.venue.region}</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] tracking-[0.12em] text-accent uppercase">City</dt>
              <dd className="mt-1 text-navy">{site.venue.city}</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] tracking-[0.12em] text-accent uppercase">Year</dt>
              <dd className="mt-1 text-navy">{site.focusYear}</dd>
            </div>
          </dl>
        </aside>
      </div>
    </Container>
  );
}
