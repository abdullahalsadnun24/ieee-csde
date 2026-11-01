import { AnimatedIcon, type IconName, type IconTone } from "@/components/ui/animated-icon";
import { Container } from "@/components/ui/container";
import { ResearchTopics } from "@/components/ui/research-topics";
import { SectionHeading } from "@/components/ui/section-heading";
import { UiLink } from "@/components/ui/ui-link";
import { researchTracks } from "@/content/topics";

const interestAreas: Array<{
  label: string;
  icon: IconName;
  tone: IconTone;
  variant: "lead" | "side" | "foot";
  surface: "lead" | "white" | "violet" | "lavender" | "pink";
}> = [
  { label: "Artificial Intelligence", icon: "brain", tone: "gold", variant: "lead", surface: "lead" },
  { label: "Machine Learning", icon: "bot", tone: "cobalt", variant: "side", surface: "white" },
  { label: "Data Science", icon: "database", tone: "violet", variant: "side", surface: "violet" },
  { label: "Computer Vision", icon: "scan", tone: "pink", variant: "side", surface: "pink" },
  { label: "Software Engineering", icon: "code", tone: "navy", variant: "foot", surface: "white" },
  { label: "Networking", icon: "network", tone: "cobalt", variant: "foot", surface: "lavender" },
  { label: "Cybersecurity", icon: "shield", tone: "gold", variant: "foot", surface: "violet" },
  { label: "Data Engineering", icon: "layers", tone: "teal", variant: "foot", surface: "pink" },
];

const topicCount = researchTracks.reduce((total, track) => total + track.items.length, 0);

const stats = [
  { label: "Tracks", value: String(researchTracks.length).padStart(2, "0") },
  { label: "Areas", value: String(interestAreas.length).padStart(2, "0") },
  { label: "Topics", value: String(topicCount).padStart(2, "0") },
];

export function TopicsSection() {
  return (
    <section id="topics" className="topics-stage home-section relative overflow-hidden band-cyan">
      <span className="color-plate plate-violet opacity-80" aria-hidden />
      <span className="color-plate plate-pink opacity-70" aria-hidden />
      <span className="topics-watermark" aria-hidden>
        TOPICS
      </span>

      <Container className="relative py-24">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <SectionHeading
              index="04"
              eyebrow="Topics of interest"
              title="Computer science and data science tracks"
              icon="chip"
              tone="cobalt"
              editorial
            />
            <p className="topics-lede mt-8">
              Areas including AI, machine learning, data science, computer vision, software engineering,
              networking, cybersecurity, and data engineering, as published on the official call for papers.
            </p>
          </div>
          <ul className="topics-stats lg:col-span-4">
            {stats.map((item) => (
              <li key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <ul className="topics-bento mt-14">
          {interestAreas.map((item, index) => {
            const number = String(index + 1).padStart(2, "0");

            return (
              <li key={item.label} className={`topics-area is-${item.variant} is-${item.surface}`}>
                {item.variant === "side" ? (
                  <>
                    <AnimatedIcon name={item.icon} tone={item.tone} size="sm" motion="pulse" />
                    <div className="min-w-0">
                      <p className="topics-area-index">{number}</p>
                      <h3 className="mt-1 font-semibold leading-6 text-navy">{item.label}</h3>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-start justify-between gap-4">
                      <AnimatedIcon
                        name={item.icon}
                        tone={item.tone}
                        size={item.variant === "lead" ? "lg" : "md"}
                        motion={item.variant === "lead" ? "none" : "pulse"}
                      />
                      <p className="topics-area-index">
                        {item.variant === "lead" ? `${number}  /  Area` : number}
                      </p>
                    </div>
                    <h3
                      className={
                        item.variant === "lead"
                          ? "font-editorial text-3xl leading-[1.12] sm:text-4xl"
                          : "font-semibold leading-6 text-navy"
                      }
                    >
                      {item.label}
                    </h3>
                  </>
                )}
              </li>
            );
          })}
        </ul>

        <div className="mt-16">
          <p className="eyebrow">Official tracks</p>
          <h3 className="font-editorial mt-3 text-2xl text-navy sm:text-3xl">The published topic list</h3>
        </div>

        <div className="mt-8">
          <ResearchTopics />
        </div>

        <div className="mt-10">
          <UiLink href="/authors/call-for-papers" variant="ghost">
            Read the call for papers
          </UiLink>
        </div>
      </Container>
    </section>
  );
}
