import Image from "next/image";
import { brand } from "@/content/media";
import { cn } from "@/lib/cn";

export function IeeeChapterMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center rounded-2xl border border-white/80 bg-white/80 px-2 py-1 shadow-[0_10px_22px_rgba(13,27,76,0.1)] backdrop-blur-md",
        className,
      )}
    >
      <Image
        src={brand.ieeeChapter.src}
        alt={brand.ieeeChapter.alt}
        width={brand.ieeeChapter.width}
        height={brand.ieeeChapter.height}
        className="h-10 w-auto object-contain"
      />
    </span>
  );
}
