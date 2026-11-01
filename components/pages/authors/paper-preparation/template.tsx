import { UiLink } from "@/components/ui/ui-link";
import { paperPreparation } from "@/content/authors";
import { site } from "@/content/site";

export function PaperTemplate() {
  return (
    <article className="surface-card p-7 sm:p-10">
      <h2 className="font-display text-2xl text-navy">Template and page limit</h2>
      <p className="mt-4 text-base leading-8 text-muted">{paperPreparation.template}</p>
      <p className="mt-4 text-base leading-8 text-muted">{paperPreparation.pageLimit}</p>
      <div className="mt-6">
        <UiLink href={site.links.ieeeTemplates} external>
          IEEE conference templates
        </UiLink>
      </div>
    </article>
  );
}
