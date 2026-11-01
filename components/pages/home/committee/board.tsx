import Image from "next/image";
import { committeeStills } from "@/content/media";

const seats = [
  {
    role: "General Chair",
    body: "The 2027 general chair and welcome letter will appear here when confirmed.",
    tone: "pale",
  },
  {
    role: "Program Chair",
    body: "Programme leadership will be listed with the confirmed 2027 committee.",
    tone: "lavender",
  },
  {
    role: "Technical Committee",
    body: "Technical committee members and affiliations will be published when announced.",
    tone: "pink",
  },
  {
    role: "Organizing Committee",
    body: "Other organizing roles will be added when the official directory is released.",
    tone: "navy",
  },
] as const;

export function CommitteeBoard() {
  return (
    <div className="committee-salon">
      <div className="committee-film-plate">
        <ul className="committee-film">
          {committeeStills.map((photo) => (
            <li key={photo.src} className={`committee-frame ${photo.tile}`.trim()}>
              <Image
                src={photo.src}
                alt=""
                fill
                sizes={photo.sizes}
                className="committee-frame-image"
              />
            </li>
          ))}
        </ul>
      </div>

      <ul className="committee-desk">
        {seats.map((item, index) => (
          <li key={item.role} className={`committee-seat is-${item.tone}`}>
            <p className="committee-seat-mark">{String(index + 1).padStart(2, "0")}</p>
            <h3>{item.role}</h3>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
