import { EyeIcon, ToyBrickIcon, WeightIcon, ClockIcon } from "@/components/Icons";

const steps = [
  {
    num: "01",
    Icon: EyeIcon,
    emoji: "👀",
    title: "Watch or visit",
    body: "Tune in to live selling Monday to Saturday, 9 AM – 6:30 PM, or walk into the store.",
  },
  {
    num: "02",
    Icon: ToyBrickIcon,
    emoji: "🧸",
    title: "Pick your toys",
    body: "Fresh arrivals, character toys, educational sets, baby picks, party giveaways — pick freely.",
  },
  {
    num: "03",
    Icon: WeightIcon,
    emoji: "⚖️",
    title: "Pay by kilo",
    body: "Your picks are weighed and you pay per kilogram. The more you pick, the better the value.",
  },
];

export default function HowToBuy() {
  return (
    <section id="how-to-buy" className="section bg-tl-warm overflow-hidden">

      {/* Decorative shapes */}
      <div aria-hidden className="absolute top-10 left-1/4 w-40 h-40 bg-tl-yellow/40 rounded-full blur-2xl animate-pulse-slow" />
      <div aria-hidden className="absolute bottom-10 right-1/4 w-48 h-48 bg-tl-red/20 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: "1s" }} />
      <span aria-hidden className="absolute top-20 right-[8%] text-4xl animate-float">🎡</span>
      <span aria-hidden className="absolute bottom-32 left-[8%] text-4xl animate-bounce-soft">🎪</span>

      <div className="wrap relative">

        <header className="text-center max-w-2xl mx-auto mb-16">
          <p className="eyebrow mb-5">How it works</p>
          <h2 className="display-lg text-tl-ink mb-5">
            Three steps to your <span className="text-tl-red">first haul.</span>
          </h2>
          <p className="body-md">
            Simple whether you&apos;re shopping for yourself, for gifts, or for resale.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 relative">
          {/* Animated dashed connector (desktop) */}
          <svg
            className="hidden md:block absolute top-12 left-[16%] right-[16%] h-3 w-[68%]"
            viewBox="0 0 100 3" preserveAspectRatio="none" aria-hidden
          >
            <path d="M0 1.5 Q 25 -1 50 1.5 T 100 1.5" stroke="#E11D2A" strokeWidth="0.5" strokeDasharray="1.6 1.6" fill="none">
              <animate attributeName="stroke-dashoffset" from="0" to="-3.2" dur="1.2s" repeatCount="indefinite" />
            </path>
          </svg>

          {steps.map((s, i) => (
            <div
              key={s.num}
              className="group relative text-center reveal"
              style={{ animationDelay: `${0.1 + i * 0.15}s` }}
            >
              <div className="relative inline-flex mb-6">
                <div className="w-24 h-24 rounded-3xl bg-white border-2 border-tl-ink shadow-toy-sm
                                flex items-center justify-center transition-transform duration-300
                                group-hover:rotate-6 group-hover:-translate-y-1">
                  <s.Icon className="w-10 h-10 text-tl-red group-hover:animate-wiggle-fast" />
                </div>
                <span className="absolute -top-2 -right-2 w-9 h-9 rounded-full bg-tl-red text-white
                                 font-fun text-sm flex items-center justify-center border-2 border-tl-ink
                                 group-hover:animate-bounce-soft">
                  {s.num}
                </span>
                <span className="absolute -bottom-1 -left-3 text-2xl group-hover:animate-tada" aria-hidden>
                  {s.emoji}
                </span>
              </div>
              <h3 className="font-fun text-2xl text-tl-ink mb-2">{s.title}</h3>
              <p className="body-md max-w-xs mx-auto">{s.body}</p>
            </div>
          ))}
        </div>

        {/* Hours strip */}
        <div className="card-bold flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 px-6 py-5 text-center sm:text-left relative">
          <span aria-hidden className="absolute -top-3 -left-3 text-2xl animate-wiggle">🕘</span>
          <div className="w-11 h-11 rounded-2xl bg-tl-yellow border-2 border-tl-ink flex items-center justify-center shrink-0 animate-pulse-slow">
            <ClockIcon className="w-5 h-5 text-tl-ink" />
          </div>
          <div>
            <p className="font-fun text-lg text-tl-ink leading-tight">
              Open Monday – Saturday · 9:00 AM – 6:30 PM
            </p>
            <p className="text-tl-muted text-xs mt-1">
              Live selling + walk-in · Personal shopping · Bulk reselling
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
