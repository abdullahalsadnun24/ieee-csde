import { ResearchTopics } from "@/components/ui/research-topics";

export function CallForPapersTopics() {
  return (
    <section>
      <p className="eyebrow">Official tracks</p>
      <h2 className="font-editorial mt-3 text-3xl text-navy sm:text-4xl">Topics of interest</h2>
      <div className="mt-8">
        <ResearchTopics />
      </div>
    </section>
  );
}
