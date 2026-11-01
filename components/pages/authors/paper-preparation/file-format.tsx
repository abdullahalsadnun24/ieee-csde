import { UiLink } from "@/components/ui/ui-link";
import { paperPreparation } from "@/content/authors";
import { site } from "@/content/site";

export function FileFormat() {
  return (
    <article className="surface-card p-7 sm:p-10">
      <h2 className="font-display text-2xl text-navy">File format and PDF eXpress</h2>
      <p className="mt-4 text-base leading-8 text-muted">{paperPreparation.fileFormat}</p>
      <p className="mt-4 text-base leading-8 text-muted">{paperPreparation.pdfExpress}</p>
      <p className="mt-4 text-base leading-8 text-muted">{paperPreparation.copyrightForm}</p>
      <div className="mt-6">
        <UiLink href={site.links.pdfExpress} external variant="secondary">
          IEEE PDF eXpress
        </UiLink>
      </div>
    </article>
  );
}
