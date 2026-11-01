import { Container } from "@/components/ui/container";
import { Notice } from "@/components/ui/notice";
import { UiLink } from "@/components/ui/ui-link";
import { site } from "@/content/site";

export function RegistrationOverview() {
  return (
    <Container className="space-y-6 py-16">
      <Notice>
        The previous edition published a registration form and camera-ready deadline for CSDE 2026 in Bangladesh.
        Those dates and fees are not shown as 2027 Fiji registration details.
      </Notice>
      <article className="surface-card max-w-3xl p-7 sm:p-10">
        <p className="text-base leading-8 text-muted">
          When registration opens, authors typically complete final submission through their conference profile.
          The submission portal used by CSDE is NPS.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <UiLink href={site.links.paperSubmission} external>
            Submission portal
          </UiLink>
          <UiLink href="/registration/package" variant="secondary">
            Registration package
          </UiLink>
        </div>
      </article>
    </Container>
  );
}
