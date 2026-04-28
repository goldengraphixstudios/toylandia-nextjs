"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CakeIcon, TrophyIcon, PuzzleIcon, SunIcon } from "@/components/Icons";

const moments = [
  { Icon: CakeIcon,   label: "Birthday Gifts",   desc: "Make any birthday feel special without breaking the bank." },
  { Icon: TrophyIcon, label: "Reward Picks",      desc: "Perfect academic and behavior reward prizes for kids." },
  { Icon: PuzzleIcon, label: "Surprise Finds",    desc: "Something new every visit — the kilo model keeps it exciting." },
  { Icon: SunIcon,    label: "Everyday Play",     desc: "Affordable daily play options that keep kids engaged all week." },
];

// Image pairs: [left, right] — 4 images → 2 pairs shown 2 at a time
const imagePairs: [string, string][] = [
  ["/toy-8.jpg",  "/toy-9.jpg"],
  ["/toy-10.jpg", "/toy-11.jpg"],
];

export default function FamilyValue() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % imagePairs.length);
        setFading(false);
      }, 400);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const [left, right] = imagePairs[current];

  return (
    <section id="family" className="py-20 px-4 sm:px-6 lg:px-8 bg-tl-yellowLight">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <div>
            <div className="tag mb-4">For Families</div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-tl-dark mb-6">
              One Toy Stop for Gifts,{" "}
              <span className="text-tl-red">Rewards, Surprises,</span>{" "}
              and Everyday Play
            </h2>
            <p className="text-tl-muted leading-relaxed mb-8">
              Kids love variety. Parents love affordability. At ToyLandia, you get both —
              brand-new toys by the kilo means every peso goes further, and there&apos;s always
              something new to discover.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {moments.map(({ Icon, label, desc }) => (
                <div key={label} className="bg-white rounded-xl p-4 border border-tl-border flex gap-3 items-start">
                  <Icon className="w-6 h-6 text-tl-red shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-tl-dark text-sm">{label}</div>
                    <div className="text-tl-muted text-xs mt-0.5 leading-relaxed">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: 2-image auto-slider */}
          <div>
            {/* Slides */}
            <div
              className="grid grid-cols-2 gap-3 transition-opacity duration-400"
              style={{ opacity: fading ? 0 : 1, transition: "opacity 0.4s ease" }}
            >
              <div className="relative h-52 rounded-2xl overflow-hidden shadow-md">
                <Image
                  src={left}
                  alt="ToyLandia toys"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="relative h-52 rounded-2xl overflow-hidden shadow-md">
                <Image
                  src={right}
                  alt="ToyLandia toys"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </div>

            {/* Dot indicators */}
            <div className="flex justify-center gap-2 mt-4">
              {imagePairs.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setFading(true); setTimeout(() => { setCurrent(i); setFading(false); }, 400); }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === current ? "bg-tl-red w-6" : "bg-tl-border"
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
