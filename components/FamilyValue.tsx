import ImageMarquee from "./ImageMarquee";

const showcase = [
  "/toy-1.jpg", "/toy-2.jpg", "/toy-3.jpg", "/toy-4.jpg",
  "/toy-5.jpg", "/toy-6.jpg", "/toy-7.jpg", "/toy-8.jpg",
  "/toy-9.jpg", "/toy-10.jpg", "/toy-11.jpg", "/toy-12.jpg",
  "/toy-13.jpg", "/toy-14.jpg", "/toy-15.jpg", "/toy-16.jpg",
  "/toy-17.jpg", "/toy-18.jpg",
];

export default function FamilyValue() {
  return (
    <section id="family" className="relative overflow-hidden bg-tl-warm py-10 sm:py-12">
      <ImageMarquee
        images={showcase}
        heightClass="h-52 sm:h-64 lg:h-80"
        gapClass="gap-4 sm:gap-5"
        speed="slower"
      />
    </section>
  );
}
