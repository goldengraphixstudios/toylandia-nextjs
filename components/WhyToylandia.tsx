import { FactoryIcon, WeightIcon, FamilyIcon, ResellersIcon } from "@/components/Icons";

const points = [
  {
    Icon: FactoryIcon,
    emoji: "🏭",
    title: "Brand-new imports",
    body: "Every toy is fresh from the factory — never pre-owned or refurbished. Direct China sourcing keeps the variety wide and the quality consistent.",
  },
  {
    Icon: WeightIcon,
    emoji: "⚖️",
    title: "Sold per kilo",
    body: "Pay by weight, not by piece. Your peso stretches further, and resellers get better unit economics on every haul.",
  },
  {
    Icon: FamilyIcon,
    emoji: "👨‍👩‍👧",
    title: "Made for families",
    body: "Birthdays, classroom prizes, Christmas surprises. The right mix for every moment, at prices that make sense.",
  },
  {
    Icon: ResellersIcon,
    emoji: "📦",
    title: "Open for resellers",
    body: "Bulk buyers and live sellers are welcome. Ask about reseller pricing and mixed-lot availability — we're built for volume.",
  },
];

export default function WhyToylandia() {
  return (
    <section id="why-toylandia" className="section bg-white overflow-hidden">

      {/* Ambient decorations */}
      <span aria-hidden className="absolute top-16 right-[6%] text-5xl animate-float-slow opacity-60">🎨</span>
      <span aria-hidden className="absolute bottom-20 left-[4%] text-4xl animate-wiggle opacity-60">🪀</span>
      <div aria-hidden className="absolute top-1/4 -left-20 w-72 h-72 bg-tl-yellow/30 rounded-full blur-3xl" />
      <div aria-hidden className="absolute bottom-1/4 -right-20 w-72 h-72 bg-tl-red/20 rounded-full blur-3xl" />

      <div className="wrap relative">

        <header className="max-w-2xl mb-14">
          <p className="eyebrow mb-5">Why ToyLandia</p>
          <h2 className="display-xl text-tl-ink mb-5">
            A toy shop built<br />
            <span className="text-tl-red">a little differently.</span>
          </h2>
          <p className="body-lg">
            Brand-new stock, kilo pricing, and a buying model that works for
            families and resellers alike. Here&apos;s what makes it work.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 stagger">
          {points.map(({ Icon, emoji, title, body }, i) => (
            <article
              key={title}
              className={`group card-bold card-hover p-7 relative
                          ${i % 2 === 0 ? "sm:translate-y-0" : "sm:translate-y-6"}`}
            >
              {/* Corner sticker */}
              <span
                className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-tl-yellow border-2 border-tl-ink
                           flex items-center justify-center text-xl shadow-toy-sm
                           group-hover:animate-wiggle-fast transition-transform"
                aria-hidden
              >
                {emoji}
              </span>

              <div className="flex items-start gap-5">
                <div className="shrink-0 w-12 h-12 rounded-2xl bg-tl-red border-2 border-tl-ink
                                flex items-center justify-center group-hover:rotate-6 transition-transform">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-fun text-2xl text-tl-ink mb-2 leading-tight">{title}</h3>
                  <p className="text-tl-charcoal text-[15px] leading-relaxed">{body}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
