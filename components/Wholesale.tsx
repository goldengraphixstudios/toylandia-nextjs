import { CoinsIcon, BoxIcon, ConfettiIcon, MessageIcon } from "@/components/Icons";

const items = [
  { Icon: CoinsIcon,    emoji: "💰", title: "Reseller pricing",  desc: "Better kilo rates for larger bulk orders. Ask about wholesale tiers." },
  { Icon: BoxIcon,      emoji: "📦", title: "Bulk sourcing",     desc: "Mixed lots with high variety — perfect for live selling content." },
  { Icon: ConfettiIcon, emoji: "🎊", title: "Party giveaways",   desc: "Affordable per-kilo bundles for school, corporate, and birthday events." },
  { Icon: MessageIcon,  emoji: "💬", title: "Direct inquiry",    desc: "Message us for custom quotes and order consultation." },
];

export default function Wholesale() {
  return (
    <section id="for-resellers" className="section bg-tl-ink relative overflow-hidden">
      {/* Animated ambient glows */}
      <div className="absolute -top-32 -right-32 w-[480px] h-[480px] bg-tl-red/30 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute -bottom-32 -left-32 w-[420px] h-[420px] bg-tl-yellow/25 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: "1.5s" }} />

      {/* Floating accents */}
      <span aria-hidden className="absolute top-20 left-[10%] text-4xl animate-float opacity-90">💫</span>
      <span aria-hidden className="absolute bottom-24 right-[10%] text-4xl animate-bounce-soft opacity-90">🎯</span>
      <span aria-hidden className="absolute top-1/3 right-[6%] text-3xl animate-wiggle opacity-80">✨</span>

      <div className="wrap relative z-10">
        <header className="max-w-2xl mb-14">
          <p className="eyebrow-yellow mb-5">For resellers</p>
          <h2 className="display-xl text-white mb-5">
            Need bulk toy orders for<br />
            <span className="text-tl-yellow">selling or events?</span>
          </h2>
          <p className="text-white/75 text-lg leading-relaxed">
            Bulk buyers, live sellers, and event organizers are welcome. The per-kilo
            model means your unit cost drops as your order grows.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 stagger">
          {items.map(({ Icon, emoji, title, desc }) => (
            <article
              key={title}
              className="group bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-3xl p-6 relative
                         hover:bg-white/[0.07] hover:border-tl-yellow/50 hover:-translate-y-1
                         transition-all duration-300"
            >
              <span aria-hidden className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-tl-yellow border-2 border-tl-ink
                                          flex items-center justify-center text-lg shadow-toy-sm
                                          group-hover:animate-wiggle-fast">
                {emoji}
              </span>
              <div className="w-11 h-11 rounded-2xl bg-tl-yellow flex items-center justify-center mb-4
                              group-hover:rotate-6 transition-transform">
                <Icon className="w-5 h-5 text-tl-ink" />
              </div>
              <h3 className="font-fun text-xl text-white mb-2 leading-tight">{title}</h3>
              <p className="text-white/65 text-sm leading-relaxed">{desc}</p>
            </article>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href="https://www.facebook.com/officialtoylandia"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-yellow btn-lg group"
          >
            <MessageIcon className="w-5 h-5 group-hover:animate-wiggle-fast" />
            Ask about wholesale
          </a>
          <span className="text-white/55 text-sm">
            Typical reply within minutes during store hours.
          </span>
        </div>
      </div>
    </section>
  );
}
