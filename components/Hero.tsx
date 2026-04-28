import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-tl-yellow">
      {/* Brick pattern overlay */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg, transparent, transparent 30px, rgba(0,0,0,0.15) 30px, rgba(0,0,0,0.15) 32px
          ), repeating-linear-gradient(
            90deg, transparent, transparent 60px, rgba(0,0,0,0.15) 60px, rgba(0,0,0,0.15) 62px
          )`,
        }}
      />

      {/* Hero image panel — original w-1/2, softer shorter gradient */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block z-0">
        <Image
          src="/toy-1.jpg"
          alt="ToyLandia brand-new toys"
          fill
          className="object-cover"
          priority
          sizes="50vw"
        />
        {/* Gradient: only covers the left ~35% of the image panel, fades fast */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #FFCC00 0%, #FFCC00 18%, rgba(255,204,0,0.35) 38%, transparent 60%)",
          }}
        />
      </div>

      {/* Decorative circles */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-tl-red/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-white/20 rounded-full blur-3xl pointer-events-none lg:hidden" />

      {/* Text sits in the left ~45% of the viewport on large screens */}
      <div className="relative z-10 w-full px-4 sm:px-8 lg:pl-12 xl:pl-20 py-20 pt-32 lg:w-[52%]">
        <div className="max-w-lg">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-tl-red bg-tl-red/10 px-4 py-1.5 rounded-full mb-6">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
            </svg>
            Brand-New Toys · Direct from China · Sold by the Kilo
          </div>

          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl leading-tight text-tl-dark mb-6">
            More Toys.{" "}
            <span className="text-tl-red">More Smiles.</span>{" "}
            More Savings.
          </h1>

          <p className="text-lg sm:text-xl text-tl-dark/80 mb-4 leading-relaxed">
            ToyLandia brings you <strong>brand-new toys imported directly from China</strong>,
            sold per kilogram — so families, gift buyers, and resellers get more for their money.
          </p>

          <p className="text-base text-tl-dark/60 mb-10">
            Live selling · Walk-in shopping · Wholesale-friendly · Shopee &amp; TikTok Shop
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://www.facebook.com/officialtoylandia"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-center justify-center"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Message to Order
            </a>
            <a
              href="https://shopee.ph/toylandia678"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-center justify-center"
            >
              Browse on Shopee
            </a>
          </div>

          {/* Mini stats */}
          <div className="mt-14 flex gap-8 flex-wrap">
            {[
              { num: "100%", label: "Brand New Toys" },
              { num: "₱/kg", label: "Per Kilo Pricing" },
              { num: "CN", label: "Direct Imports" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-display font-black text-tl-red">{s.num}</div>
                <div className="text-sm text-tl-dark/60 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
