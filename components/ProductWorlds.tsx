import Image from "next/image";
import { BookOpenIcon, StarIcon, GiftIcon, BabyIcon, ConfettiIcon, BoxIcon } from "@/components/Icons";

const categories = [
  { label: "Learning & Activity", Icon: BookOpenIcon, img: "/toy-2.jpg", desc: "Puzzles, building sets, and educational kits" },
  { label: "Character & Cartoon", Icon: StarIcon,     img: "/toy-3.jpg", desc: "Licensed characters kids already love" },
  { label: "Surprise Gift Finds", Icon: GiftIcon,     img: "/toy-4.jpg", desc: "Mystery-worthy, gift-ready picks" },
  { label: "Baby & Toddler",      Icon: BabyIcon,     img: "/toy-5.jpg", desc: "Safe, bright, and age-appropriate" },
  { label: "Party & Giveaways",   Icon: ConfettiIcon, img: "/toy-6.jpg", desc: "Bulk-ready for events and celebrations" },
  { label: "Reseller Bulk Picks", Icon: BoxIcon,      img: "/toy-7.jpg", desc: "Mixed lots for maximum margin" },
];

export default function ProductWorlds() {
  return (
    <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="tag mb-3">Toy Worlds</div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-tl-dark mb-4">
            Something for Every Buyer
          </h2>
          <p className="text-tl-muted max-w-xl mx-auto">
            Curated toy categories — not a random pile. Explore what ToyLandia stocks so
            you can shop with purpose.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 lg:gap-5">
          {categories.map(({ label, Icon, img, desc }) => (
            <div
              key={label}
              className="group relative rounded-2xl overflow-hidden border border-tl-border bg-tl-card cursor-default hover:shadow-lg transition-shadow"
            >
              <div className="relative h-44 sm:h-48">
                <Image
                  src={img}
                  alt={label}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-tl-dark/80 via-transparent to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <Icon className="w-5 h-5 text-tl-yellow mb-1" />
                <div className="font-display font-bold text-white text-sm">{label}</div>
                <div className="text-white/70 text-xs mt-0.5">{desc}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://shopee.ph/toylandia678"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Browse on Shopee
          </a>
        </div>
      </div>
    </section>
  );
}
