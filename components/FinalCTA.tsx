import { MessageIcon, ShoppingBagIcon, ResellersIcon } from "@/components/Icons";

export default function FinalCTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-tl-red relative overflow-hidden">
      {/* Brick pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg, transparent, transparent 30px, rgba(255,255,255,0.3) 30px, rgba(255,255,255,0.3) 32px
          ), repeating-linear-gradient(
            90deg, transparent, transparent 60px, rgba(255,255,255,0.3) 60px, rgba(255,255,255,0.3) 62px
          )`,
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-block text-xs font-bold uppercase tracking-widest text-tl-yellow bg-tl-yellow/20 px-4 py-1.5 rounded-full mb-6">
          Ready to Shop?
        </div>
        <h2 className="font-display font-black text-4xl sm:text-5xl text-white mb-6">
          Ready to Fill Your Basket?
        </h2>
        <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          Whether you&apos;re shopping for your family, building your live-selling inventory,
          or stocking up for an event — ToyLandia has the toys and the pricing that works.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="https://www.facebook.com/officialtoylandia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 justify-center bg-white hover:bg-tl-yellow text-tl-red font-bold px-8 py-4 rounded-full text-base transition-all hover:scale-105 active:scale-95"
          >
            <MessageIcon className="w-5 h-5" />
            Message ToyLandia
          </a>
          <a
            href="https://shopee.ph/toylandia678"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 justify-center bg-tl-yellow hover:bg-yellow-300 text-tl-dark font-bold px-8 py-4 rounded-full text-base transition-all hover:scale-105 active:scale-95"
          >
            <ShoppingBagIcon className="w-5 h-5" />
            See Today&apos;s Picks on Shopee
          </a>
        </div>

        <a
          href="https://www.facebook.com/officialtoylandia"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors"
        >
          <ResellersIcon className="w-4 h-4" />
          Ask About Wholesale →
        </a>
      </div>
    </section>
  );
}
