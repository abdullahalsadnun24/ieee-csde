import Image from "next/image";
import { AnimatedIcon, type IconName, type IconTone } from "@/components/ui/animated-icon";
import { programStills } from "@/content/media";
import { site } from "@/content/site";

const agendaIcons: Array<{ name: IconName; tone: IconTone }> = [
  { name: "book", tone: "gold" },
  { name: "mic", tone: "violet" },
  { name: "presentation", tone: "pink" },
  { name: "users", tone: "teal" },
  { name: "award", tone: "gold" },
  { name: "star", tone: "coral" },
];

export function ProgramBoard() {
  return (
    <div className="program-board">
      <div className="program-stills-plate">
        <ul className="program-stills">
          {programStills.map((photo) => (
            <li key={photo.src} className={`program-still ${photo.tile}`.trim()}>
              <Image
                src={photo.src}
                alt=""
                fill
                sizes={photo.sizes}
                className="program-still-image"
              />
            </li>
          ))}
        </ul>
      </div>

      <ol className="program-agenda">
        {site.highlights.map((item, index) => (
          <li key={item.title} className="program-item">
            <AnimatedIcon
              name={agendaIcons[index].name}
              tone={agendaIcons[index].tone}
              size="sm"
              motion="pulse"
              delay={index * 0.08}
            />
            <div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
