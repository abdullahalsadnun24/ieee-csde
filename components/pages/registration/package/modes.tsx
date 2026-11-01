export function RegistrationModes() {
  return (
    <div className="mod-grid lg:grid-cols-2">
      <article className="mod-cell p-7">
        <h2 className="font-display text-2xl text-navy">Onsite mode</h2>
        <ul className="mt-4 space-y-2 text-sm leading-7 text-muted">
          <li>Gift kit</li>
          <li>Food (morning tea, lunch, afternoon snacks for 2 days and a gala dinner)</li>
          <li>Access to venue, tutorial and all technical events</li>
          <li>Wi-Fi access in the venue</li>
          <li>A copy of the digital booklet</li>
        </ul>
        <p className="mt-4 text-sm leading-7 text-muted">
          Accepted papers are submitted for possible inclusion into IEEE Xplore subject to meeting IEEE
          IEEE Xplore scope and quality requirements.
        </p>
      </article>
      <article className="mod-cell bg-lavender p-7">
        <h2 className="font-display text-2xl text-navy">Virtual mode</h2>
        <ul className="mt-4 space-y-2 text-sm leading-7 text-muted">
          <li>Tutorial and conference virtual registration</li>
          <li>Virtual attendance and presentation access</li>
          <li>No gift kit will be provided</li>
        </ul>
        <p className="mt-4 text-sm leading-7 text-muted">
          Multiple-paper registration has used an additional-paper charge in recent editions. The 2027 amount
          is not yet published.
        </p>
      </article>
    </div>
  );
}
