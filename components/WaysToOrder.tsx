import { MessageIcon, TvIcon, StoreIcon, ShoppingBagIcon, MusicIcon, ClockIcon } from "@/components/Icons";

const channels = [
  {
    Icon: MessageIcon,
    title: "Facebook Message",
    desc: "Primary inquiry path. Orders, custom requests, and wholesale.",
    href: "https://www.facebook.com/officialtoylandia",
    cta: "Message on Facebook",
    primary: true,
  },
  {
    Icon: TvIcon,
    title: "Live Selling",
    desc: "Join our daily sessions on Facebook and TikTok, Mon–Sat, 9 AM – 6:30 PM.",
    href: "https://www.tiktok.com/@brandnewtoys0",
    cta: "Follow on TikTok",
  },
  {
    Icon: StoreIcon,
    title: "Walk-In",
    desc: "Browse in person — message first to confirm current location and availability.",
    href: "https://www.facebook.com/officialtoylandia",
    cta: "Ask for location",
  },
  {
    Icon: ShoppingBagIcon,
    title: "Shopee",
    desc: "Browse and order listed items at your convenience through our Shopee store.",
    href: "https://shopee.ph/toylandia678",
    cta: "Visit Shopee",
  },
  {
    Icon: MusicIcon,
    title: "TikTok Shop",
    desc: "Watch us live and shop directly on TikTok — one-tap ordering.",
    href: "https://www.tiktok.com/@brandnewtoys0",
    cta: "Visit TikTok Shop",
  },
];

export default function WaysToOrder() {
  return (
    <section id="contact" className="section bg-white overflow-hidden">

      <span aria-hidden className="absolute top-10 left-[6%] text-4xl animate-wiggle opacity-70">📱</span>
      <span aria-hidden className="absolute bottom-24 right-[8%] text-5xl animate-bounce-soft opacity-70">💌</span>
      <div aria-hidden className="absolute top-1/3 right-0 w-60 h-60 bg-tl-yellow/30 rounded-full blur-3xl" />

      <div className="wrap relative">

        <header className="text-center max-w-2xl mx-auto mb-14">
          <p className="eyebrow mb-5">Ways to order</p>
          <h2 className="display-lg text-tl-ink mb-5">
            Order your way.
          </h2>
          <p className="body-md">
            Five channels to get your ToyLandia haul. Message first for the fastest response —
            marketplaces are secondary options.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8 stagger">
          {channels.map(({ Icon, title, desc, href, cta, primary }) => (
            <article
              key={title}
              className={`group relative rounded-3xl p-7 flex flex-col gap-4 transition-all duration-300
                ${primary
                  ? "bg-tl-red text-white border-2 border-tl-ink shadow-toy hover:-translate-y-1.5 hover:shadow-toy-lg hover:rotate-[-0.5deg]"
                  : "bg-white border-2 border-tl-ink shadow-toy-sm hover:-translate-y-1 hover:shadow-toy"
                }`}
            >
              {primary && (
                <span className="absolute -top-3 right-5 bg-tl-yellow border-2 border-tl-ink rounded-full
                                 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-tl-ink animate-wiggle">
                  Fastest reply
                </span>
              )}
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center group-hover:rotate-6 group-hover:animate-wiggle-fast transition-transform
                ${primary ? "bg-white/15 border-2 border-white/30" : "bg-tl-yellow border-2 border-tl-ink"}`}>
                <Icon className={`w-5 h-5 ${primary ? "text-white" : "text-tl-ink"}`} />
              </div>
              <div>
                <h3 className={`font-fun text-2xl mb-2 leading-tight ${primary ? "text-white" : "text-tl-ink"}`}>
                  {title}
                </h3>
                <p className={`text-sm leading-relaxed ${primary ? "text-white/80" : "text-tl-charcoal"}`}>
                  {desc}
                </p>
              </div>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-auto inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide
                  ${primary ? "text-tl-yellow hover:underline" : "text-tl-red hover:underline"}`}
              >
                {cta}
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </article>
          ))}
        </div>

        {/* Hours + email */}
        <div className="card-bold flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 px-6 py-5 text-sm text-center sm:text-left">
          <div className="flex items-center gap-2">
            <ClockIcon className="w-4 h-4 text-tl-red" />
            <span className="text-tl-ink"><strong>Hours:</strong> <span className="text-tl-charcoal">Mon–Sat · 9:00 AM – 6:30 PM</span></span>
          </div>
          <span className="hidden sm:inline w-1 h-1 rounded-full bg-tl-line" />
          <span className="text-tl-ink">
            <strong>Email:</strong>{" "}
            <a href="mailto:toylandia6@gmail.com" className="text-tl-red hover:underline">
              toylandia6@gmail.com
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}
