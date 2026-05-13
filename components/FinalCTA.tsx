import { MessageIcon, ShoppingBagIcon } from "@/components/Icons";

const confettiBits = [
  { left: "10%",  top: "20%", color: "#FFCC00", size: 10, delay: "0s",  rot: 20 },
  { left: "85%",  top: "25%", color: "#FFFFFF", size: 12, delay: "0.4s", rot: -15 },
  { left: "20%",  top: "70%", color: "#FFCC00", size: 8,  delay: "0.8s", rot: 45 },
  { left: "75%",  top: "75%", color: "#FFFFFF", size: 10, delay: "1.2s", rot: -30 },
  { left: "50%",  top: "15%", color: "#FFCC00", size: 6,  delay: "0.2s", rot: 60 },
  { left: "92%",  top: "55%", color: "#FFFFFF", size: 14, delay: "0.6s", rot: 10 },
  { left: "5%",   top: "55%", color: "#FFCC00", size: 8,  delay: "1.0s", rot: -45 },
  { left: "60%",  top: "85%", color: "#FFFFFF", size: 10, delay: "1.4s", rot: 25 },
];

export default function FinalCTA() {
  return (
    <section className="section bg-tl-red relative overflow-hidden">

      {/* Pattern */}
      <div className="absolute inset-0 bg-dots opacity-25" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%]
                      bg-tl-yellow/15 rounded-full blur-[120px] animate-pulse-slow" />

      {/* Confetti bits */}
      {confettiBits.map((c, i) => (
        <span
          key={i}
          aria-hidden
          className="absolute rounded-sm animate-float-slow"
          style={{
            left: c.left, top: c.top,
            width: c.size, height: c.size * 0.4,
            backgroundColor: c.color,
            transform: `rotate(${c.rot}deg)`,
            animationDelay: c.delay,
          }}
        />
      ))}

      {/* Floating mascots */}
      <span aria-hidden className="absolute top-16 left-[8%] text-6xl animate-float drop-shadow-lg">🎁</span>
      <span aria-hidden className="absolute bottom-20 right-[10%] text-6xl animate-float-slow drop-shadow-lg">🧸</span>
      <span aria-hidden className="absolute top-1/3 right-[18%] text-4xl animate-wiggle drop-shadow-lg">⭐</span>
      <span aria-hidden className="absolute bottom-1/3 left-[18%] text-4xl animate-bounce-soft drop-shadow-lg">🎈</span>
      <span aria-hidden className="absolute top-24 right-[40%] hidden md:block text-3xl animate-float" style={{ animationDelay: "1s" }}>🪀</span>

      <div className="wrap relative z-10">
        <div className="max-w-3xl mx-auto text-center">

          <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em]
                           text-tl-ink bg-tl-yellow px-3.5 py-1.5 rounded-full mb-7 border-2 border-tl-ink
                           shadow-toy-sm animate-bounce-soft">
            🎉 Ready to shop?
          </span>

          <h2 className="font-fun text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-white mb-6">
            Fill your basket<br />
            <span className="relative inline-block text-tl-yellow">
              by the kilo.
              <svg className="absolute -bottom-3 left-0 w-full h-4" viewBox="0 0 200 12" preserveAspectRatio="none" aria-hidden>
                <path d="M2 8 Q 60 2 120 6 T 198 5" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" fill="none" />
              </svg>
            </span>
          </h2>

          <p className="text-white/85 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            For your family, your live-selling inventory, or your next event —
            ToyLandia has the toys and the pricing that works.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://www.facebook.com/officialtoylandia"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-yellow btn-lg group"
            >
              <MessageIcon className="w-5 h-5 group-hover:animate-wiggle-fast" />
              Message ToyLandia
            </a>
            <a
              href="https://shopee.ph/toylandia678"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline btn-lg group"
            >
              <ShoppingBagIcon className="w-5 h-5 group-hover:animate-wiggle-fast" />
              Browse on Shopee
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
