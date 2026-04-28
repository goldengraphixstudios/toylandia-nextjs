import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-tl-dark border-t border-white/10 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="ToyLandia" width={40} height={40} className="object-contain" />
            <div>
              <div className="font-display font-black text-white text-sm">TOYLANDIA</div>
              <div className="text-xs text-gray-500">Brand-New Toys by the Kilo</div>
            </div>
          </div>

          <div className="flex gap-4 flex-wrap justify-center">
            {[
              { label: "Facebook", href: "https://www.facebook.com/officialtoylandia" },
              { label: "TikTok", href: "https://www.tiktok.com/@brandnewtoys0" },
              { label: "Shopee", href: "https://shopee.ph/toylandia678" },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gray-500 hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="text-xs text-gray-500 text-center sm:text-right">
            <p>toylandia6@gmail.com</p>
            <p className="mt-1">© {new Date().getFullYear()} ToyLandia. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
