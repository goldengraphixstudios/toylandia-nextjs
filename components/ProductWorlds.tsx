/* eslint-disable @next/next/no-img-element */
import { BookOpenIcon, StarIcon, GiftIcon, BabyIcon, ConfettiIcon, BoxIcon } from "@/components/Icons";

const categories = [
  { label: "Learning & Activity", Icon: BookOpenIcon, img: "/toy-2.jpg", desc: "Puzzles, building sets, educational kits", emoji: "🧩" },
  { label: "Character & Cartoon", Icon: StarIcon,     img: "/toy-3.jpg", desc: "Licensed characters kids already love",  emoji: "⭐" },
  { label: "Surprise Gift Finds", Icon: GiftIcon,     img: "/toy-4.jpg", desc: "Mystery-worthy, gift-ready picks",       emoji: "🎁" },
  { label: "Baby & Toddler",      Icon: BabyIcon,     img: "/toy-5.jpg", desc: "Safe, bright, age-appropriate",          emoji: "🍼" },
  { label: "Party & Giveaways",   Icon: ConfettiIcon, img: "/toy-6.jpg", desc: "Bulk-ready for events and celebrations", emoji: "🎉" },
  { label: "Reseller Bulk Picks", Icon: BoxIcon,      img: "/toy-7.jpg", desc: "Mixed lots for maximum margin",          emoji: "📦" },
];

export default function ProductWorlds() {
  return (
    <section id="products" className="section bg-white overflow-hidden">

      <span aria-hidden className="absolute top-12 left-[6%] text-5xl animate-float opacity-70">🎨</span>
      <span aria-hidden className="absolute bottom-24 right-[6%] text-5xl animate-wiggle opacity-70">🪀</span>

      <div className="wrap relative">

        <header className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <p className="eyebrow mb-5">What we stock</p>
            <h2 className="display-lg text-tl-ink mb-4">
              Curated categories — <span className="text-tl-red">not a random pile.</span>
            </h2>
            <p className="body-md">
              Explore what ToyLandia stocks so you can shop with purpose.
            </p>
          </div>
          <a
            href="https://shopee.ph/toylandia678"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost group"
          >
            Browse on Shopee
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </header>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 stagger">
          {categories.map(({ label, Icon, img, desc, emoji }) => (
            <article
              key={label}
              className="group relative rounded-3xl overflow-hidden border-2 border-tl-ink
                         shadow-toy-sm bg-white transition-all duration-300
                         hover:-translate-y-1.5 hover:rotate-[-0.5deg] hover:shadow-toy"
            >
              <div className="relative h-48 sm:h-56 bg-tl-warm overflow-hidden">
                <img
                  src={img}
                  alt={label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-tl-ink/85 via-tl-ink/15 to-transparent" />

                {/* Icon chip */}
                <div className="absolute top-3 left-3 w-9 h-9 rounded-full bg-tl-yellow border-2 border-tl-ink
                                flex items-center justify-center transition-transform duration-300
                                group-hover:rotate-12 group-hover:scale-110">
                  <Icon className="w-4.5 h-4.5 text-tl-ink" />
                </div>

                {/* Emoji sticker */}
                <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-tl-red border-2 border-tl-ink
                                flex items-center justify-center text-lg group-hover:animate-wiggle-fast">
                  {emoji}
                </div>
              </div>
              <div className="absolute bottom-0 inset-x-0 p-5">
                <div className="font-fun text-white text-xl leading-tight mb-1">{label}</div>
                <div className="text-white/80 text-xs">{desc}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
