/* eslint-disable @next/next/no-img-element */
import {
  BabyIcon,
  BookOpenIcon,
  GiftIcon,
  PuzzleIcon,
  ShirtIcon,
  ShoppingBagIcon,
  StarIcon,
  StoreIcon,
  ToyBrickIcon,
} from "@/components/Icons";
import { assetPath } from "@/lib/assetPath";

const SHOPEE_SHOP_URL = "https://shopee.ph/toylandia678";

type ShopeeCategory = {
  label: string;
  total: number | string;
  id?: string;
  href?: string;
  imageUrl?: string;
  copy: string;
  color: string;
  accent: string;
  Icon: React.ComponentType<{ className?: string }>;
};

const shopeeCategories: ShopeeCategory[] = [
  {
    label: "Doctor Set Toy TZ168",
    total: "Shopee",
    href: "https://shopee.ph/Toylandia-Doctor-Set-Toy-TZ168-i.1800279490.48859212440?extraParams=%7B%22display_model_id%22%3A400814805477%2C%22model_selection_logic%22%3A3%7D",
    imageUrl: "/featured-doctor-set.jpg",
    copy: "Role-play medical kit for pretend clinics, gift sets, and activity play.",
    color: "bg-tl-red text-white",
    accent: "bg-tl-red",
    Icon: StarIcon,
  },
  {
    label: "Cooker Set TZ23",
    total: "Shopee",
    href: "https://shopee.ph/Toylandia-Cooker-set-TZ23-i.1800279490.51758982806?extraParams=%7B%22display_model_id%22%3A282544737659%2C%22model_selection_logic%22%3A3%7D",
    imageUrl: "/featured-cooker-set.jpg",
    copy: "Pretend kitchen play for kids who love cooking, hosting, and make-believe.",
    color: "bg-tl-yellow text-tl-ink",
    accent: "bg-tl-yellow",
    Icon: BookOpenIcon,
  },
  {
    label: "Drawing Board TZ263",
    total: "Shopee",
    href: "https://shopee.ph/Toylandia-Drawing-Board-TZ263-i.1800279490.49059260018?extraParams=%7B%22display_model_id%22%3A350817315974%2C%22model_selection_logic%22%3A3%7D",
    imageUrl: "/featured-drawing-board.jpg",
    copy: "Creative board pick for doodles, learning time, and quiet play.",
    color: "bg-white text-tl-ink",
    accent: "bg-tl-red",
    Icon: GiftIcon,
  },
  {
    label: "Cross Country TZ52",
    total: "Shopee",
    href: "https://shopee.ph/Toylandia-Cross-Country-TZ52-i.1800279490.53158995699?extraParams=%7B%22display_model_id%22%3A395797242150%2C%22model_selection_logic%22%3A3%7D",
    imageUrl: "/featured-cross-country.jpg",
    copy: "Vehicle toy pick for action play, gifting, and fast-moving toy shelves.",
    color: "bg-tl-red text-white",
    accent: "bg-tl-yellow",
    Icon: BabyIcon,
  },
  {
    label: "Truck Blender TZ185",
    total: "Shopee",
    href: "https://shopee.ph/Toylandia-Truck-Blender-TZ185-i.1800279490.54859196544?extraParams=%7B%22display_model_id%22%3A360814863033%2C%22model_selection_logic%22%3A3%7D",
    imageUrl: "/featured-truck-blender.jpg",
    copy: "A playful truck-style toy with bold shelf presence for curious kids.",
    color: "bg-tl-yellow text-tl-ink",
    accent: "bg-tl-red",
    Icon: ToyBrickIcon,
  },
  {
    label: "Rock Crawler T57",
    total: "Shopee",
    href: "https://shopee.ph/Toylandia-Rock-Crawler-T57-i.1800279490.46659025699?extraParams=%7B%22display_model_id%22%3A415797563136%2C%22model_selection_logic%22%3A3%7D",
    imageUrl: "/featured-rock-crawler.jpg",
    copy: "Rugged vehicle pick for kids who like cars, movement, and adventure play.",
    color: "bg-white text-tl-ink",
    accent: "bg-tl-yellow",
    Icon: PuzzleIcon,
  },
  {
    label: "Kids Wear",
    total: "New",
    href: SHOPEE_SHOP_URL,
    imageUrl: "/kids-wear.jpg",
    copy: "Kids' wear and wearable finds for everyday outfits, gifts, and cute add-ons.",
    color: "bg-tl-yellow text-tl-ink",
    accent: "bg-tl-red",
    Icon: ShirtIcon,
  },
];

function categoryImageUrl(category: Pick<ShopeeCategory, "imageUrl">) {
  return assetPath(category.imageUrl ?? "/toy-1.jpg");
}

function categoryUrl(category: Pick<ShopeeCategory, "id" | "href">) {
  if (category.href) {
    return category.href;
  }

  return `${SHOPEE_SHOP_URL}?shopCollection=${category.id}&tab=product`;
}

function itemLabel(total: ShopeeCategory["total"], mode: "short" | "long" = "short") {
  if (typeof total === "number") {
    return mode === "long" ? `${total} listed items` : `${total} items`;
  }

  if (total === "Shopee" && mode === "long") {
    return "Shop product listing";
  }

  return mode === "long" ? "Browse latest arrivals" : total;
}

export default function ProductWorlds() {
  return (
    <section id="products" className="section overflow-hidden bg-[#FFF5DA]">
      <div className="absolute inset-0 bg-grid opacity-70" />
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-tl-yellow/55 blur-3xl" />
      <div className="absolute -right-20 bottom-14 h-80 w-80 rounded-full bg-tl-red/20 blur-3xl" />

      <span aria-hidden className="absolute left-[5%] top-14 hidden rounded-full border-2 border-tl-ink bg-white px-5 py-2 text-sm font-black text-tl-red shadow-toy-sm rotate-[-8deg] md:block">
        Shopee highlights
      </span>
      <span aria-hidden className="absolute bottom-16 right-[7%] hidden rounded-full border-2 border-tl-ink bg-tl-yellow px-5 py-2 text-sm font-black text-tl-ink shadow-toy-sm rotate-[6deg] lg:block">
        Featured picks
      </span>

      <div className="wrap relative z-10">
        <header className="mx-auto mb-12 max-w-4xl text-center">
          <p className="eyebrow-yellow mb-5 border-2 border-tl-ink shadow-toy-sm">Featured ToyLandia picks</p>
          <h2 className="display-lg text-tl-ink">
            Browse the client&apos;s highlighted toys, then checkout safely on{" "}
            <span className="text-tl-red">Shopee.</span>
          </h2>
          <p className="body-md mx-auto mt-5 max-w-2xl">
            These cards point to the specific products requested by the client. Images use ToyLandia&apos;s local photo bank so the website stays fast while Shopee handles stock, pricing, vouchers, and checkout.
          </p>
        </header>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {shopeeCategories.map((category, index) => {
            const { label, total, id, copy, color, accent, Icon } = category;
            const url = categoryUrl(category);

            return (
              <article
                key={id ?? label}
                className="group relative overflow-hidden rounded-[2rem] border-2 border-tl-ink bg-white shadow-toy-sm transition-all duration-300 hover:-translate-y-1.5 hover:rotate-[-0.4deg] hover:shadow-toy"
              >
                <div className="relative h-80 overflow-hidden bg-tl-warm sm:h-96">
                  <div className={`absolute left-0 top-0 z-10 h-full w-3 ${accent}`} />
                  <img
                    src={categoryImageUrl(category)}
                    alt={`${label} on ToyLandia Shopee`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    loading={index > 2 ? "lazy" : "eager"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-tl-ink/40 via-transparent to-white/5" />

                  <div className="absolute left-6 top-4 z-20 flex items-center gap-2">
                    <span className={`flex h-11 w-11 items-center justify-center rounded-2xl border-2 border-tl-ink shadow-toy-sm ${color}`}>
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="rounded-full border-2 border-tl-ink bg-white px-3 py-1 text-xs font-black text-tl-ink shadow-toy-sm">
                      {itemLabel(total)}
                    </span>
                  </div>

                </div>

                <div className="relative p-5">
                  <div className="absolute -top-5 left-5 rounded-full border-2 border-tl-ink bg-white px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.16em] text-tl-red shadow-toy-sm">
                    Shopee highlight
                  </div>

                  <div className="mt-2">
                    <h3 className="font-fun text-3xl leading-none text-tl-ink sm:text-4xl">{label}</h3>
                    <p className="mt-3 text-sm font-semibold leading-relaxed text-tl-charcoal">{copy}</p>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-[1fr_auto] sm:items-center">
                    <div className="rounded-2xl border-2 border-tl-line bg-tl-warm px-4 py-3">
                      <p className="text-[11px] font-black uppercase tracking-[0.16em] text-tl-red">Open on Shopee</p>
                      <p className="mt-1 text-lg font-black text-tl-ink">{itemLabel(total, "long")}</p>
                    </div>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary justify-center whitespace-nowrap"
                    >
                      View item
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-10 overflow-hidden rounded-[2rem] border-2 border-tl-ink bg-tl-red text-white shadow-toy">
          <div className="grid gap-0 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="relative p-6 sm:p-8">
              <div className="absolute inset-0 bg-dots opacity-20" />
              <div className="relative">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-tl-yellow">More items here</p>
                <h3 className="mt-2 font-fun text-4xl leading-none sm:text-5xl">
                  Want the full ToyLandia shelf?
                </h3>
                <p className="mt-3 max-w-2xl text-base font-semibold leading-relaxed text-white/86">
                  The Shopee shop has more listings than the highlighted picks above. Open the official business account to see
                  the latest stock, prices, vouchers, and checkout options.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 border-t-2 border-tl-ink bg-tl-yellow p-5 lg:min-w-[320px] lg:border-l-2 lg:border-t-0">
              <a
                href={SHOPEE_SHOP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline !bg-white !text-tl-ink group"
              >
                <ShoppingBagIcon className="h-5 w-5 group-hover:animate-wiggle-fast" />
                More items here
              </a>
              <a
                href="https://www.facebook.com/officialtoylandia"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group"
              >
                <StoreIcon className="h-5 w-5 group-hover:animate-wiggle-fast" />
                Message ToyLandia
              </a>
            </div>
          </div>
        </div>

        <p className="mx-auto mt-6 max-w-3xl text-center text-xs font-semibold leading-relaxed text-tl-muted">
          Product and shop buttons redirect to the official ToyLandia Shopee account for current stock, prices, vouchers, and checkout.
        </p>
      </div>
    </section>
  );
}
