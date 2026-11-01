import { CssCube } from "@/components/ui/css-cube";

export function ColorStage() {
  return (
    <div className="color-stage" aria-hidden>
      <span className="blob blob-a" />
      <span className="blob blob-b" />
      <span className="blob blob-c" />
      <span className="blob blob-d" />
      <span className="blob blob-e" />
      <span className="blob blob-f" />
      <CssCube className="absolute left-[4%] top-[28%] hidden opacity-70 lg:block" delay={-4} />
      <CssCube className="absolute right-[5%] top-[62%] hidden opacity-60 lg:block" delay={-9} />
    </div>
  );
}
