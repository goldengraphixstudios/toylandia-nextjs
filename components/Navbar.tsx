"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-tl-border shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="ToyLandia" width={48} height={48} className="object-contain" />
          <span className="font-display font-black text-tl-red text-xl hidden sm:block">
            TOY<span className="text-tl-dark">LANDIA</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {["Why ToyLandia", "How to Buy", "Products", "For Resellers", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-sm text-tl-muted hover:text-tl-dark transition-colors font-medium"
            >
              {item}
            </a>
          ))}
          <a
            href="https://www.facebook.com/officialtoylandia"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !py-2 !px-6 !text-sm"
          >
            Message to Order
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-tl-dark p-2"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-0.5 bg-tl-dark mb-1.5"></div>
          <div className="w-6 h-0.5 bg-tl-dark mb-1.5"></div>
          <div className="w-6 h-0.5 bg-tl-dark"></div>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-tl-border px-4 pb-4 pt-2 space-y-3">
          {["Why ToyLandia", "How to Buy", "Products", "For Resellers", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="block text-sm text-tl-muted hover:text-tl-dark py-1"
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            href="https://www.facebook.com/officialtoylandia"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !py-2 !px-6 !text-sm inline-block"
          >
            Message to Order
          </a>
        </div>
      )}
    </nav>
  );
}
