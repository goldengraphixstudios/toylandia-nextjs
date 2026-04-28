import { MessageIcon, TvIcon, StoreIcon, ShoppingBagIcon, MusicIcon, AlertIcon, ClockIcon } from "@/components/Icons";

const channels = [
  {
    Icon: MessageIcon,
    title: "Facebook Message",
    desc: "Primary inquiry path. Message the official page for orders, custom requests, and wholesale.",
    href: "https://www.facebook.com/officialtoylandia",
    cta: "Message on Facebook",
    primary: true,
  },
  {
    Icon: TvIcon,
    title: "Live Selling",
    desc: "Join our live selling sessions Monday to Saturday, 9 AM – 6:30 PM on Facebook and TikTok.",
    href: "https://www.tiktok.com/@brandnewtoys0",
    cta: "Follow on TikTok",
    primary: false,
  },
  {
    Icon: StoreIcon,
    title: "Walk-In / Store Visit",
    desc: "Visit us in person to browse and buy. Open Monday to Saturday, 9 AM – 6:30 PM.",
    href: "https://maps.google.com/?q=ToyLandia",
    cta: "Get Directions",
    primary: false,
  },
  {
    Icon: ShoppingBagIcon,
    title: "Shopee",
    desc: "Browse and order our listed items at your convenience through our Shopee store.",
    href: "https://shopee.ph/toylandia678",
    cta: "Visit Shopee Store",
    primary: false,
  },
  {
    Icon: MusicIcon,
    title: "TikTok Shop",
    desc: "Watch us live and shop directly on TikTok — easy one-tap ordering.",
    href: "https://www.tiktok.com/@brandnewtoys0",
    cta: "Visit TikTok Shop",
    primary: false,
  },
];

export default function WaysToOrder() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="tag mb-3">Ways to Order</div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-tl-dark mb-4">
            Order Your Way
          </h2>
          <p className="text-tl-muted max-w-lg mx-auto">
            Five ways to get your ToyLandia haul. Message first for the fastest response —
            marketplaces are secondary options.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {channels.map(({ Icon, title, desc, href, cta, primary }) => (
            <div
              key={title}
              className={`rounded-2xl p-6 border flex flex-col gap-4 ${
                primary ? "bg-tl-red border-tl-red text-white" : "bg-tl-card border-tl-border"
              }`}
            >
              <Icon className={`w-7 h-7 ${primary ? "text-white" : "text-tl-red"}`} />
              <div>
                <div className={`font-display font-bold text-lg mb-2 ${primary ? "text-white" : "text-tl-dark"}`}>
                  {title}
                </div>
                <p className={`text-sm leading-relaxed ${primary ? "text-white/80" : "text-tl-muted"}`}>
                  {desc}
                </p>
              </div>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-auto inline-flex items-center gap-1 text-sm font-semibold ${
                  primary ? "text-tl-yellow hover:underline" : "text-tl-red hover:underline"
                }`}
              >
                {cta} →
              </a>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-tl-cream border border-tl-border rounded-2xl p-6">
          <div className="flex items-start gap-3 justify-center flex-wrap sm:flex-nowrap">
            <ClockIcon className="w-5 h-5 text-tl-muted mt-0.5 shrink-0" />
            <p className="text-tl-muted text-sm text-center sm:text-left">
              <strong className="text-tl-dark">Contact:</strong>{" "}
              <a href="mailto:toylandia6@gmail.com" className="text-tl-red hover:underline">toylandia6@gmail.com</a>{" "}
              &nbsp;|&nbsp;
              <strong className="text-tl-dark">Hours:</strong> Mon–Sat · 9:00 AM – 6:30 PM
            </p>
          </div>
          <div className="flex items-start gap-3 justify-center flex-wrap sm:flex-nowrap mt-3">
            <AlertIcon className="w-5 h-5 text-amber-400 mt-0.5 shrink-0" />
            <p className="text-tl-muted text-xs text-center sm:text-left">
              Note: Internal records show both &quot;daily 9–6 PM&quot; and &quot;Mon–Sat 9–6:30 PM&quot; hours.
              Confirm current schedule via Facebook before visiting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
