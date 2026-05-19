import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/lib/assetPath";

export default function Footer() {
  return (
    <footer className="bg-tl-ink relative overflow-hidden">

      {/* Top marquee strip */}
      <div className="bg-tl-yellow border-y-2 border-tl-ink overflow-hidden">
        <div className="marquee-track py-2.5 text-tl-ink font-fun text-base whitespace-nowrap gap-8">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-8 px-6">
              <span>TOYLANDIA</span><span aria-hidden>✦</span>
              <span>BRAND NEW</span><span aria-hidden>✦</span>
              <span>BY THE KILO</span><span aria-hidden>✦</span>
              <span>DIRECT IMPORT</span><span aria-hidden>✦</span>
              <span>FAMILY OWNED</span><span aria-hidden>✦</span>
            </div>
          ))}
        </div>
      </div>

      <div className="wrap py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8">

          {/* Brand */}
          <div className="flex items-center gap-3 group">
            <div className="relative">
              <Image src={assetPath("/logo.png")} alt="ToyLandia" width={44} height={44} className="object-contain group-hover:animate-wiggle-fast" />
              <span className="absolute -top-1 -right-1 text-base animate-bounce-soft">✨</span>
            </div>
            <div>
              <div className="font-fun text-white text-xl tracking-tight">
                <span className="text-tl-red">Toy</span>Landia
              </div>
              <div className="text-xs text-white/55 mt-0.5">Brand-new toys by the kilo</div>
            </div>
          </div>

          {/* Links */}
          <nav className="flex gap-2 flex-wrap justify-center">
            <Link
              href="/blog"
              className="text-xs font-semibold text-white/80 hover:text-tl-yellow
                         px-4 py-2 rounded-full border border-white/15 hover:border-tl-yellow
                         transition-colors"
            >
              Blog
            </Link>
            {[
              { label: "Facebook", href: "https://www.facebook.com/officialtoylandia" },
              { label: "TikTok",   href: "https://www.tiktok.com/@brandnewtoys0" },
              { label: "Shopee",   href: "https://shopee.ph/toylandia678" },
              { label: "Waze",     href: "https://waze.com/ul?q=ToyLandia%20Cabuyao%20Laguna&navigate=yes" },
              { label: "WhatsApp", href: "https://wa.me/639293781462" },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-white/80 hover:text-tl-yellow
                           px-4 py-2 rounded-full border border-white/15 hover:border-tl-yellow
                           transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Legal */}
          <div className="text-xs text-white/55 text-center sm:text-right">
            <p>toylandia6@gmail.com</p>
            <p className="mt-1">WhatsApp/Viber: +63 929 378 1462</p>
            <p className="mt-1">© {new Date().getFullYear()} ToyLandia. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
