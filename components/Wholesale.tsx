import { CoinsIcon, BoxIcon, ConfettiIcon, MessageIcon } from "@/components/Icons";

const items = [
  { Icon: CoinsIcon,    title: "Reseller Pricing",     desc: "Better kilo rates for larger bulk orders. Ask about wholesale tiers." },
  { Icon: BoxIcon,      title: "Bulk Toy Sourcing",     desc: "Mixed lots with high variety — perfect for live selling content." },
  { Icon: ConfettiIcon, title: "Party Giveaways",       desc: "Affordable per-kilo bundles for school, corporate, and birthday events." },
  { Icon: MessageIcon,  title: "Direct Inquiry",        desc: "Message us on Facebook for custom quotes and order consultation." },
];

export default function Wholesale() {
  return (
    <section id="for-resellers" className="py-20 px-4 sm:px-6 lg:px-8 bg-tl-dark">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-block text-xs font-bold uppercase tracking-widest text-tl-yellow bg-tl-yellow/10 px-4 py-1.5 rounded-full mb-4">
            Resellers &amp; Wholesalers
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-6">
            Need Bulk Toy Orders for{" "}
            <span className="text-tl-yellow">Selling or Events?</span>
          </h2>
          <p className="text-gray-400 leading-relaxed">
            ToyLandia welcomes bulk buyers, live sellers, and event organizers. The per-kilo
            model means your cost per toy goes down as you buy more.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {items.map(({ Icon, title, desc }) => (
            <div key={title} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors">
              <Icon className="w-8 h-8 text-tl-yellow mx-auto mb-3" />
              <div className="font-display font-bold text-white text-sm mb-2">{title}</div>
              <p className="text-gray-400 text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://www.facebook.com/officialtoylandia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-tl-yellow hover:bg-yellow-400 text-tl-dark font-bold px-8 py-4 rounded-full text-base transition-all hover:scale-105 active:scale-95"
          >
            <MessageIcon className="w-5 h-5" />
            Ask About Wholesale
          </a>
        </div>
      </div>
    </section>
  );
}
