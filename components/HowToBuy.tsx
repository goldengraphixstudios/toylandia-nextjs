import { EyeIcon, ToyBrickIcon, WeightIcon, ClockIcon } from "@/components/Icons";

const steps = [
  {
    num: "1",
    Icon: EyeIcon,
    title: "Watch or Visit",
    body: "Tune in to our live selling sessions Monday to Saturday, 9 AM – 6:30 PM, or walk right into the store/warehouse.",
    bg: "bg-tl-red",
  },
  {
    num: "2",
    Icon: ToyBrickIcon,
    title: "Pick More Toys",
    body: "Browse fresh arrivals, character toys, educational sets, baby picks, and giveaway bundles. More variety means more finds.",
    bg: "bg-tl-dark",
  },
  {
    num: "3",
    Icon: WeightIcon,
    title: "Pay by Kilo and Save",
    body: "Your selection gets weighed and you pay by kilogram. The more you pick, the more you save. Great for bulk orders.",
    bg: "bg-tl-red",
  },
];

export default function HowToBuy() {
  return (
    <section id="how-to-buy" className="py-20 px-4 sm:px-6 lg:px-8 bg-tl-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="tag mb-3">Simple Process</div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-tl-dark mb-4">
            How ToyLandia Buying Works
          </h2>
          <p className="text-tl-muted max-w-lg mx-auto">
            Three easy steps. Whether you&apos;re shopping for yourself, for gifts, or for your reselling business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((s) => (
            <div key={s.num} className="text-center">
              <div className={`${s.bg} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5`}>
                <s.Icon className="w-7 h-7 text-white" />
              </div>
              <div className="text-xs font-bold text-tl-muted mb-2 uppercase tracking-widest">Step {s.num}</div>
              <h3 className="font-display font-bold text-tl-dark text-xl mb-3">{s.title}</h3>
              <p className="text-tl-muted text-sm leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="bg-tl-yellow rounded-2xl p-6 text-center flex items-center justify-center gap-3">
          <ClockIcon className="w-5 h-5 text-tl-dark shrink-0" />
          <div>
            <p className="text-tl-dark font-semibold text-base">
              Open <strong>Monday – Saturday, 9:00 AM – 6:30 PM</strong> · Live selling + walk-in available
            </p>
            <p className="text-tl-dark/70 text-sm mt-0.5">
              Best for personal shopping, birthday bundles, party giveaways, and bulk reselling
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
