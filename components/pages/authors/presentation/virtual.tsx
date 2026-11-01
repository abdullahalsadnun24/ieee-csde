import { presentation } from "@/content/authors";

export function VirtualPresentation() {
  return (
    <article className="surface-lavender p-7 sm:p-10">
      <h2 className="font-display text-2xl text-navy">Oral presentation · Virtual</h2>
      <ul className="mt-5 space-y-3 text-sm leading-7 text-muted">
        {presentation.virtual.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}
