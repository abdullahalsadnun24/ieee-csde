const categories = ["General", "Student", "Attendee", "IEEE member", "Non IEEE member", "Onsite", "Virtual"];

export function RegistrationCategories() {
  return (
    <ul className="flex flex-wrap gap-px bg-line">
      {categories.map((item) => (
        <li key={item} className="bg-pale px-3 py-1.5 font-mono text-[11px] tracking-[0.08em] text-navy uppercase">
          {item}
        </li>
      ))}
    </ul>
  );
}
