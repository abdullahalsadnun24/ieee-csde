import { presentation } from "@/content/authors";

export function PhysicalPresentation() {
  return (
    <article className="surface-card p-7 sm:p-10">
      <h2 className="font-display text-2xl text-navy">Oral presentation · Physical</h2>
      <ul className="mt-5 space-y-3 text-sm leading-7 text-muted">
        {presentation.physical.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}
