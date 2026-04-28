import { FactoryIcon, WeightIcon, FamilyIcon, ResellersIcon } from "@/components/Icons";

const points = [
  {
    Icon: FactoryIcon,
    title: "Brand-New Imports from China",
    body: "Every toy is fresh from the factory — not pre-owned, not refurbished. Direct China sourcing means quality you can trust and variety you can't find elsewhere.",
  },
  {
    Icon: WeightIcon,
    title: "Sold Per Kilo",
    body: "Pay by weight, not by piece. The kilo model lets you stretch your budget further, discover more toys, and get better margins as a reseller.",
  },
  {
    Icon: FamilyIcon,
    title: "Perfect for Families & Gift Buyers",
    body: "Birthday gifts, classroom prizes, Christmas surprises — ToyLandia has the right mix for every family moment, at prices that make sense.",
  },
  {
    Icon: ResellersIcon,
    title: "Open for Wholesalers & Resellers",
    body: "Bulk toy buyers and live sellers are welcome. Ask about reseller pricing and mixed-lot availability. We're built for volume too.",
  },
];

export default function WhyToylandia() {
  return (
    <section id="why-toylandia" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="tag mb-3">Why ToyLandia Works</div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-tl-dark mb-4">
            A Toy Destination Built Different
          </h2>
          <p className="text-tl-muted max-w-xl mx-auto">
            Brand-new toys, kilo pricing, and a buying model that works for families and
            resellers alike. Here&apos;s what makes ToyLandia stand out.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map(({ Icon, title, body }) => (
            <div
              key={title}
              className="bg-tl-cream border border-tl-border rounded-2xl p-6 hover:border-tl-red/40 hover:shadow-md transition-all"
            >
              <Icon className="w-8 h-8 text-tl-red mb-4" />
              <h3 className="font-display font-bold text-tl-dark text-base mb-2">{title}</h3>
              <p className="text-tl-muted text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
