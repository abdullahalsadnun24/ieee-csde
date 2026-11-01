import { paperPreparation } from "@/content/authors";

export function CopyrightNotice() {
  return (
    <article className="surface-pale p-7 sm:p-10">
      <h2 className="font-display text-2xl text-navy">Copyright notice</h2>
      <ul className="mt-4 space-y-3 text-sm leading-7 text-muted">
        {paperPreparation.copyright.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}
