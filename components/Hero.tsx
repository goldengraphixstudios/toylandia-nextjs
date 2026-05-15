import Image from "next/image";
import { assetPath } from "@/lib/assetPath";

const stats = [
  { value: "100%", label: "Brand-new" },
  { value: "₱/kg", label: "Pay by weight" },
  { value: "Mon–Sat", label: "Live selling" },
];

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] overflow-hidden pt-24 pb-20">
      {/* Hero background image */}
      <Image
        src={assetPath("/hero-bg.png")}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Brightening + warm gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/55 to-white/10" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/40" />

      {/* Floating ambient accents */}
      <span aria-hidden className="absolute top-28 right-[12%] text-5xl animate-float drop-shadow-md">🎈</span>
      <span aria-hidden className="absolute bottom-36 right-[6%] text-4xl animate-float-slow drop-shadow-md">⭐</span>
      <span aria-hidden className="absolute top-1/2 right-[24%] hidden lg:block text-4xl animate-wiggle drop-shadow-md">🎁</span>
      <span aria-hidden className="absolute top-40 left-1/2 hidden md:block text-3xl animate-float opacity-90" style={{ animationDelay: "1.2s" }}>✨</span>

      <div className="relative z-10 wrap grid lg:grid-cols-[1.15fr_1fr] gap-10 items-center min-h-[78vh]">

        {/* Left — content */}
        <div className="max-w-2xl">
          <p className="eyebrow mb-6 reveal">
            <span className="w-1.5 h-1.5 rounded-full bg-tl-red animate-pulse" />
            Brand-new toys, sold by the kilo
          </p>

          <h1 className="display-2xl text-tl-ink mb-6 reveal" style={{ animationDelay: "0.05s" }}>
            More toys.<br />
            <span className="relative inline-block text-tl-red">
              Less guessing.
              <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 200 12" preserveAspectRatio="none" aria-hidden>
                <path d="M2 8 Q 60 2 120 6 T 198 5" stroke="#FFCC00" strokeWidth="5" strokeLinecap="round" fill="none" />
              </svg>
            </span><br />
            Better value.
          </h1>

          <p className="body-lg max-w-xl mb-8 reveal" style={{ animationDelay: "0.15s" }}>
            ToyLandia imports brand-new toys directly from China and sells them by
            weight — so families, gift-buyers, and resellers always get fair value.
          </p>

          <div className="flex flex-wrap gap-3 mb-12 reveal" style={{ animationDelay: "0.25s" }}>
            <a
              href="https://www.facebook.com/officialtoylandia"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary btn-lg group"
            >
              Message to Order
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="#how-to-buy" className="btn-outline btn-lg">
              See how it works
            </a>
          </div>

          {/* Stats */}
          <dl className="grid grid-cols-3 gap-3 sm:gap-6 max-w-lg reveal" style={{ animationDelay: "0.35s" }}>
            {stats.map((s) => (
              <div key={s.label} className="border-t-2 border-tl-ink pt-3">
                <dt className="font-fun text-2xl sm:text-3xl text-tl-ink leading-none">{s.value}</dt>
                <dd className="mt-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-tl-charcoal">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Right — animated logo */}
        <div className="relative hidden lg:flex items-center justify-center reveal" style={{ animationDelay: "0.2s" }}>
          <div className="relative w-full max-w-md aspect-square">

            {/* Spinning sun rays behind */}
            <svg
              className="absolute inset-0 w-full h-full animate-spin-slow"
              viewBox="0 0 200 200"
              aria-hidden
            >
              {Array.from({ length: 12 }).map((_, i) => (
                <rect
                  key={i}
                  x="98" y="6" width="4" height="22" rx="2"
                  fill="#FFCC00"
                  stroke="#1A1410" strokeWidth="1.2"
                  transform={`rotate(${i * 30} 100 100)`}
                />
              ))}
            </svg>

            {/* Pulsing yellow halo */}
            <div className="absolute inset-[14%] rounded-full bg-tl-yellow/70 blur-2xl animate-pulse-slow" />

            {/* White disc behind logo */}
            <div className="absolute inset-[18%] rounded-full bg-white border-2 border-tl-ink shadow-toy-lg" />

            {/* Logo — floats and wobbles gently */}
            <div className="absolute inset-[18%] flex items-center justify-center animate-float">
              <div className="animate-wiggle">
                <Image
                  src={assetPath("/logo.png")}
                  alt="ToyLandia"
                  width={300}
                  height={300}
                  priority
                  className="object-contain drop-shadow-[0_8px_0_rgba(26,20,16,0.15)]"
                />
              </div>
            </div>

            {/* Orbiting decorations */}
            <div className="absolute inset-0 animate-spin-reverse pointer-events-none" aria-hidden>
              <span className="absolute top-0 left-1/2 -translate-x-1/2 text-3xl">🎁</span>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 text-3xl">🧸</span>
              <span className="absolute top-1/2 left-0 -translate-y-1/2 text-3xl">🎈</span>
              <span className="absolute top-1/2 right-0 -translate-y-1/2 text-3xl">⭐</span>
            </div>

            {/* Sticker */}
            <div className="absolute -bottom-2 -left-2 bg-tl-yellow text-tl-ink border-2 border-tl-ink rounded-full
                            px-3.5 py-1.5 shadow-toy-sm -rotate-6 font-fun text-sm">
              brand-new
            </div>
          </div>
        </div>
      </div>

      {/* Bottom marquee strip */}
      <div className="absolute bottom-0 inset-x-0 z-10 border-y-2 border-tl-ink bg-tl-red overflow-hidden">
        <div className="marquee-track py-2.5 text-white font-fun text-base whitespace-nowrap gap-8">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-8 px-6">
              <span>BRAND NEW TOYS</span><span aria-hidden>✦</span>
              <span>SOLD BY THE KILO</span><span aria-hidden>✦</span>
              <span>DIRECT FROM CHINA</span><span aria-hidden>✦</span>
              <span>LIVE SELLING DAILY</span><span aria-hidden>✦</span>
              <span>FAMILY · GIFT · RESELLER</span><span aria-hidden>✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
