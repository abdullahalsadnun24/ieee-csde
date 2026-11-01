import { callForPapers } from "@/content/authors";
import { site } from "@/content/site";

const manuscriptMeta = [
  "Maximum six pages for full papers",
  "IEEE double-column conference format",
  "Word and LaTeX templates",
  "Awards from contributed papers",
];

export function CallForPapersSpread({ children }: { children?: React.ReactNode }) {
  return (
    <div className="cfp-layout">
      <article className="cfp-sheet">
        <header className="cfp-sheet-head">
          <p>{site.shortTitle}</p>
          <p>Full papers</p>
        </header>
        <div className="cfp-sheet-body">
          <h3 className="font-editorial text-3xl leading-[1.15] text-navy sm:text-4xl">
            Invited and contributed papers
          </h3>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-muted">{callForPapers.intro[2]}</p>
        </div>
        <div className="cfp-statline">
          <p className="cfp-statline-num">
            06
            <span>Page limit</span>
          </p>
          <ul>
            {manuscriptMeta.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        {children ? <div className="cfp-sheet-actions">{children}</div> : null}
      </article>

      <aside className="cfp-quote">
        <p className="cfp-kicker">Invitation</p>
        <p>{callForPapers.intro[0]}</p>
      </aside>
    </div>
  );
}

export function CallForPapersNotes() {
  return (
    <div className="cfp-notes">
      <article className="cfp-note">
        <p className="cfp-kicker">02  /  Programme</p>
        <h3>Keynotes and technical sessions</h3>
        <p>{callForPapers.intro[1]}</p>
      </article>
      <article className="cfp-note">
        <p className="cfp-kicker">03  /  Publication</p>
        <h3>IEEE Xplore digital library</h3>
        <p>{site.publication.proceedings}</p>
      </article>
    </div>
  );
}
