const reviews = [
  {
    name: "Kristine D.",
    role: "Mom · Laguna",
    quote:
      "Lagi na kaming bumibili dito for birthdays! Super sulit ng per-kilo — nakakuha pa ko ng regalo for all my kids' friends sa isang haul. Brand new lahat at maganda quality.",
    stars: 5,
  },
  {
    name: "Angie M.",
    role: "Live Seller · Batangas",
    quote:
      "ToyLandia is my go-to supplier for my FB live. Brand new toys palagi, fresh arrivals, at variety is always there. My viewers love the mystery finds. 10/10 recommend!",
    stars: 5,
  },
  {
    name: "Teacher Jess",
    role: "School Reward Buyer",
    quote:
      "We get classroom prizes and recognition day toys from ToyLandia. Budget-friendly and the kids love the variety. Easy to order in bulk too.",
    stars: 5,
  },
  {
    name: "Carlo R.",
    role: "Party Organizer",
    quote:
      "Nag-order kami ng pang-party giveaways for a corporate kiddie event. Sobrang madali — message lang, weigh, and done. Great price for the volume we needed.",
    stars: 5,
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 px-4 sm:px-6 lg:px-8 bg-tl-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="tag mb-3">Buyer Reviews</div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-tl-dark mb-4">
            Trusted by Families, Sellers, and Event Buyers
          </h2>
          <p className="text-tl-muted max-w-lg mx-auto">
            Real feedback from repeat buyers who come back every time there&apos;s a birthday,
            a live session, or a haul to fill.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {reviews.map((r) => (
            <div key={r.name} className="bg-white border border-tl-border rounded-2xl p-6 flex flex-col gap-4 hover:shadow-md transition-shadow">
              <div className="flex gap-0.5">
                {Array.from({ length: r.stars }).map((_, i) => (
                  <span key={i} className="text-tl-yellow text-lg">★</span>
                ))}
              </div>
              <p className="text-tl-dark/80 italic leading-relaxed text-sm flex-1">
                &ldquo;{r.quote}&rdquo;
              </p>
              <div>
                <div className="font-semibold text-tl-dark text-sm">{r.name}</div>
                <div className="text-xs text-tl-muted">{r.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
