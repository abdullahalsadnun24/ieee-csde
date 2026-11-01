import { Container } from "@/components/ui/container";
import { Notice } from "@/components/ui/notice";
import { UiLink } from "@/components/ui/ui-link";
import { paperPreparation } from "@/content/authors";
import { site } from "@/content/site";

export function SubmissionGuidelines() {
  return (
    <Container className="space-y-8 py-16">
      <Notice>
        The official submission-guideline page currently contains the heading only. The instructions below are
        taken from the paper-preparation and call-for-paper pages.
      </Notice>
      <article className="surface-card max-w-3xl p-7 sm:p-10">
        <p className="text-base leading-8 text-muted">{paperPreparation.authorDetails}</p>
        <p className="mt-4 text-base leading-8 text-muted">{paperPreparation.pageLimit}</p>
        <div className="mt-6">
          <UiLink href={site.links.paperSubmission} external>
            Paper submission portal
          </UiLink>
        </div>
      </article>
    </Container>
  );
}
