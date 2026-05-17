/* eslint-disable @next/next/no-img-element */
import {
  BabyIcon,
  BookOpenIcon,
  BoxIcon,
  GiftIcon,
  PuzzleIcon,
  ShoppingBagIcon,
  StarIcon,
  StoreIcon,
  ToyBrickIcon,
} from "@/components/Icons";

const SHOPEE_SHOP_URL = "https://shopee.ph/toylandia678";

const shopeeCategories = [
  {
    label: "Collectibles",
    total: 247,
    id: "11021353",
    image: "ph-11134207-820le-mn5f1txgrpxk33",
    copy: "Character toys, display pieces, model finds, and fast-moving toy picks.",
    color: "bg-tl-red text-white",
    accent: "bg-tl-red",
    Icon: StarIcon,
  },
  {
    label: "Educational Toys",
    total: 8,
    id: "11021368",
    image: "ph-11134207-820lh-mn3sn8i3fymcd4",
    copy: "Learning toys, activity sets, and play items for skill-building.",
    color: "bg-tl-yellow text-tl-ink",
    accent: "bg-tl-yellow",
    Icon: BookOpenIcon,
  },
  {
    label: "Dress Up & Pretend",
    total: 6,
    id: "11021397",
    image: "ph-11134207-820lb-mn3ptnimp7gh28",
    copy: "Role-play toys, pretend-play sets, and imagination-ready finds.",
    color: "bg-white text-tl-ink",
    accent: "bg-tl-red",
    Icon: GiftIcon,
  },
  {
    label: "Dolls",
    total: 5,
    id: "11021377",
    image: "ph-11134207-820l4-mn2qapothcsi22",
    copy: "Doll picks and companion toys for gift-ready browsing.",
    color: "bg-tl-red text-white",
    accent: "bg-tl-yellow",
    Icon: BabyIcon,
  },
  {
    label: "Electronic Toys",
    total: 5,
    id: "11021365",
    image: "ph-11134207-820l9-mn0yvtq9wh6u3c",
    copy: "Light-up, sound, battery-operated, and interactive toy options.",
    color: "bg-tl-yellow text-tl-ink",
    accent: "bg-tl-red",
    Icon: ToyBrickIcon,
  },
  {
    label: "Boards & Family Games",
    total: 2,
    id: "11021360",
    image: "ph-11134207-820l5-mnb7j22ph0xtd7",
    copy: "Family games and shared-play picks for kids and groups.",
    color: "bg-white text-tl-ink",
    accent: "bg-tl-yellow",
    Icon: PuzzleIcon,
  },
];

function shopeeImageUrl(image: string) {
  return `https://down-ph.img.susercontent.com/file/${image}`;
}

function categoryUrl(id: string) {
  return `${SHOPEE_SHOP_URL}?shopCollection=${id}&tab=product`;
}

export default function ProductWorlds() {
  const totalItems = shopeeCategories.reduce((sum, category) => sum + category.total, 0);

  return (
    <section id="products" className="section overflow-hidden bg-[#FFF5DA]">
      <div className="absolute inset-0 bg-grid opacity-70" />
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-tl-yellow/55 blur-3xl" />
      <div className="absolute -right-20 bottom-14 h-80 w-80 rounded-full bg-tl-red/20 blur-3xl" />

      <span aria-hidden className="absolute left-[5%] top-14 hidden rounded-full border-2 border-tl-ink bg-white px-5 py-2 text-sm font-black text-tl-red shadow-toy-sm rotate-[-8deg] md:block">
        Shopee categories
      </span>
      <span aria-hidden className="absolute bottom-16 right-[7%] hidden rounded-full border-2 border-tl-ink bg-tl-yellow px-5 py-2 text-sm font-black text-tl-ink shadow-toy-sm rotate-[6deg] lg:block">
        {totalItems}+ toy items
      </span>

      <div className="wrap relative z-10">
        <header className="mx-auto mb-12 max-w-4xl text-center">
          <p className="eyebrow-yellow mb-5 border-2 border-tl-ink shadow-toy-sm">Shop by Shopee category</p>
          <h2 className="display-lg text-tl-ink">
            Browse ToyLandia by category, then checkout safely on{" "}
            <span className="text-tl-red">Shopee.</span>
          </h2>
          <p className="body-md mx-auto mt-5 max-w-2xl">
            Each category opens directly to ToyLandia&apos;s Shopee store. If the live Shopee preview is blocked by the marketplace,
            use the button on each card to continue shopping.
          </p>
        </header>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {shopeeCategories.map(({ label, total, id, image, copy, color, accent, Icon }, index) => {
            const url = categoryUrl(id);

            return (
              <article
                key={id}
                className="group relative overflow-hidden rounded-[2rem] border-2 border-tl-ink bg-white shadow-toy-sm transition-all duration-300 hover:-translate-y-1.5 hover:rotate-[-0.4deg] hover:shadow-toy"
              >
                <div className="relative h-80 overflow-hidden bg-tl-warm sm:h-96">
                  <div className={`absolute left-0 top-0 z-10 h-full w-3 ${accent}`} />
                  <img
                    src={shopeeImageUrl(image)}
                    alt={`${label} category on ToyLandia Shopee`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    loading={index > 2 ? "lazy" : "eager"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-tl-ink/40 via-transparent to-white/5" />

                  <iframe
                    title={`${label} Shopee category preview`}
                    src={url}
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                    className="pointer-events-none absolute inset-0 h-full w-full scale-[1.04] opacity-0 transition-opacity duration-500 group-hover:opacity-10"
                  />

                  <div className="absolute left-6 top-4 z-20 flex items-center gap-2">
                    <span className={`flex h-11 w-11 items-center justify-center rounded-2xl border-2 border-tl-ink shadow-toy-sm ${color}`}>
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="rounded-full border-2 border-tl-ink bg-white px-3 py-1 text-xs font-black text-tl-ink shadow-toy-sm">
                      {total} items
                    </span>
                  </div>

                </div>

                <div className="relative p-5">
                  <div className="absolute -top-5 left-5 rounded-full border-2 border-tl-ink bg-white px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.16em] text-tl-red shadow-toy-sm">
                    Shopee category
                  </div>

                  <div className="mt-2">
                    <h3 className="font-fun text-3xl leading-none text-tl-ink sm:text-4xl">{label}</h3>
                    <p className="mt-3 text-sm font-semibold leading-relaxed text-tl-charcoal">{copy}</p>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-[1fr_auto] sm:items-center">
                    <div className="rounded-2xl border-2 border-tl-line bg-tl-warm px-4 py-3">
                      <p className="text-[11px] font-black uppercase tracking-[0.16em] text-tl-red">Available in this category</p>
                      <p className="mt-1 text-lg font-black text-tl-ink">{total} listed items</p>
                    </div>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary justify-center whitespace-nowrap"
                    >
                      Open category
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
                  The Shopee shop has more listings than the featured categories above. Open the official business account to see
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
          Shopee may prevent full in-page iframe previews for security. The category and shop buttons always redirect to the official
          ToyLandia Shopee account.
        </p>
      </div>
    </section>
  );
}
