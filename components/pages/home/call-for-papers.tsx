import { AnimatedIcon } from "@/components/ui/animated-icon";
import { CallForPapersNotes, CallForPapersSpread } from "@/components/ui/call-for-papers-spread";
import { Container } from "@/components/ui/container";
import { UiLink } from "@/components/ui/ui-link";

export function CallForPapersSection() {
  return (
    <section id="call-for-papers" className="cfp-stage home-section relative overflow-hidden">
      <span className="cfp-watermark" aria-hidden>
        CALL
      </span>

      <Container className="relative py-24">
        <div className="mb-12">
          <div className="mb-1 flex items-center gap-3">
            <AnimatedIcon name="paper" tone="gold" motion="pulse" />
            <p className="cfp-kicker">03  /  Call for papers</p>
          </div>
          <span className="cfp-rule" aria-hidden />
          <h2 className="cfp-title">Invitation for original research papers</h2>
        </div>

        <CallForPapersSpread>
          {/* <UiLink href={site.links.paperSubmission} external> */}
          <UiLink href="/#authors/call-for-papers" external>
            Open paper submission
          </UiLink>
          <UiLink href="/#authors/call-for-papers" variant="secondary">
            Read the call for papers
          </UiLink>
        </CallForPapersSpread>

        <div className="mt-4">
          <CallForPapersNotes />
        </div>
      </Container>
    </section>
  );
}
