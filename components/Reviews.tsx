const reviews = [
  {
    name: "Kristine D.",
    role: "Mom · Laguna",
    initial: "K",
    quote: "Lagi na kaming bumibili dito for birthdays! Super sulit ng per-kilo — nakakuha pa ko ng regalo for all my kids' friends sa isang haul. Brand new lahat at maganda quality.",
  },
  {
    name: "Angie M.",
    role: "Live seller · Batangas",
    initial: "A",
    quote: "ToyLandia is my go-to supplier for my FB live. Brand-new toys palagi, fresh arrivals, and variety is always there. My viewers love the mystery finds. 10/10 recommend!",
  },
  {
    name: "Teacher Jess",
    role: "School reward buyer",
    initial: "J",
    quote: "We get classroom prizes and recognition day toys from ToyLandia. Budget-friendly and the kids love the variety. Easy to order in bulk too.",
  },
  {
    name: "Carlo R.",
    role: "Party organizer",
    initial: "C",
    quote: "Nag-order kami ng pang-party giveaways for a corporate kiddie event. Sobrang madali — message lang, weigh, and done. Great price for the volume we needed.",
  },
];

function Star({ delay = 0 }: { delay?: number }) {
  return (
    <svg
      className="w-4 h-4 text-tl-yellow animate-bounce-soft"
      style={{ animationDelay: `${delay}s` }}
      fill="currentColor" viewBox="0 0 20 20" aria-hidden
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="section bg-tl-warm overflow-hidden">

      <span aria-hidden className="absolute top-12 left-[6%] text-5xl animate-float opacity-70">💬</span>
      <span aria-hidden className="absolute bottom-16 right-[6%] text-5xl animate-bounce-soft opacity-70">❤️</span>
      <div aria-hidden className="absolute top-1/3 -left-20 w-60 h-60 bg-tl-yellow/30 rounded-full blur-3xl" />

      <div className="wrap relative">

        <header className="text-center max-w-2xl mx-auto mb-14">
          <p className="eyebrow mb-5">Buyer reviews</p>
          <h2 className="display-lg text-tl-ink mb-5">
            Trusted by families, sellers,<br className="hidden sm:block" /> and <span className="text-tl-red">event buyers.</span>
          </h2>
          <p className="body-md">
            Real feedback from repeat buyers who come back every birthday,
            every live session, every haul.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 stagger">
          {reviews.map((r) => (
            <article
              key={r.name}
              className="group card p-7 flex flex-col gap-5 relative
                         hover:-translate-y-1 hover:shadow-soft hover:border-tl-red/30
                         transition-all duration-300"
            >
              <span aria-hidden className="absolute -top-4 left-6 text-4xl group-hover:animate-tada">💭</span>

              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} delay={i * 0.12} />)}
              </div>

              <p className="text-tl-ink text-[15px] leading-relaxed flex-1">
                &ldquo;{r.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-tl-line">
                <div className="w-10 h-10 rounded-full bg-tl-red text-white font-fun text-base
                                flex items-center justify-center shrink-0 border-2 border-tl-ink
                                group-hover:rotate-6 transition-transform">
                  {r.initial}
                </div>
                <div>
                  <div className="font-semibold text-tl-ink text-sm">{r.name}</div>
                  <div className="text-xs text-tl-muted">{r.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
