import Image from "next/image";
import { venueHero } from "@/content/media";

export function HeroPhoto() {
  return (
    <div className="hero-backdrop">
      <Image
        src={venueHero.src}
        alt={venueHero.alt}
        fill
        priority
        sizes="100vw"
        className="hero-backdrop-photo"
      />
    </div>
  );
}
