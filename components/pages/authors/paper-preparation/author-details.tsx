import { paperPreparation } from "@/content/authors";

export function AuthorDetails() {
  return (
    <article className="surface-card p-7 sm:p-10">
      <h2 className="font-display text-2xl text-navy">Author details</h2>
      <p className="mt-4 text-base leading-8 text-muted">{paperPreparation.authorDetails}</p>
    </article>
  );
}
