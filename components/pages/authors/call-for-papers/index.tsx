import { AnimatedIcon } from "@/components/ui/animated-icon";
import { CallForPapersNotes, CallForPapersSpread } from "@/components/ui/call-for-papers-spread";
import { Container } from "@/components/ui/container";
import { UiLink } from "@/components/ui/ui-link";
import { site } from "@/content/site";
import { CallForPapersTopics } from "./topics";

export function CallForPapersContent() {
  return (
    <>
      <header className="cfp-stage relative overflow-hidden">
        <span className="cfp-watermark" aria-hidden>
          CALL
        </span>
        <Container className="relative py-20 lg:py-24">
          <div className="mb-12">
            <div className="mb-1 flex items-center gap-3">
              <AnimatedIcon name="paper" tone="gold" motion="pulse" />
              <p className="cfp-kicker">Authors  /  Call for papers</p>
            </div>
            <span className="cfp-rule" aria-hidden />
            <h1 className="cfp-title">Invitation for original research papers</h1>
          </div>

          <CallForPapersSpread>
            <UiLink href={site.links.paperSubmission} external>
              Open paper submission
            </UiLink>
            <UiLink href={site.links.ieeeTemplates} variant="secondary" external>
              IEEE paper templates
            </UiLink>
          </CallForPapersSpread>

          <div className="mt-4">
            <CallForPapersNotes />
          </div>
        </Container>
      </header>

      <section className="relative overflow-hidden band-blue">
        <Container className="py-20">
          <CallForPapersTopics />
        </Container>
      </section>
    </>
  );
}
