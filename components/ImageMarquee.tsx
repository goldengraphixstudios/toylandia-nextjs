/* eslint-disable @next/next/no-img-element */
import { assetPath } from "@/lib/assetPath";

type Props = {
  images: string[];
  /** Tailwind height class — controls strip height; image width preserves aspect ratio. */
  heightClass?: string;
  /** Gap between cards (Tailwind class) */
  gapClass?: string;
  /** Animation speed: slow (60s) default, slower (105s), or fast (30s). */
  speed?: "slow" | "slower" | "fast";
};

/**
 * Right-to-left infinite image marquee.
 * Images keep their natural aspect ratio — never cropped.
 * The track is duplicated so the loop is seamless.
 */
export default function ImageMarquee({
  images,
  heightClass = "h-72 sm:h-80 lg:h-[22rem]",
  gapClass = "gap-5",
  speed = "slow",
}: Props) {
  const loop = [...images, ...images];

  return (
    <div className="relative w-full overflow-hidden">
      {/* Edge fades for a polished, premium look */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 z-10
                      bg-gradient-to-r from-tl-warm to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 z-10
                      bg-gradient-to-l from-tl-warm to-transparent" />

      <div className={`marquee-track ${speed === "fast" ? "marquee-track-fast" : ""} ${speed === "slower" ? "marquee-track-slower" : ""} ${gapClass}`}>
        {loop.map((src, i) => (
          <figure
            key={i}
            className={`${heightClass} shrink-0 rounded-2xl overflow-hidden
                        border-2 border-tl-ink bg-white shadow-toy-sm`}
          >
            <img
              src={assetPath(src)}
              alt=""
              className="h-full w-auto block select-none"
              draggable={false}
            />
          </figure>
        ))}
      </div>
    </div>
  );
}
