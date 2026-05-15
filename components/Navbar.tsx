"use client";
import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/lib/assetPath";
import { useState, useEffect } from "react";

const links = [
  { label: "Why ToyLandia",  href: "#why-toylandia" },
  { label: "How to Buy",     href: "#how-to-buy" },
  { label: "Products",       href: "#products" },
  { label: "For Resellers",  href: "#for-resellers" },
  { label: "Contact",        href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-tl-line shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="wrap flex items-center justify-between h-[68px]">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <Image
            src={assetPath("/logo.png")}
            alt="ToyLandia"
            width={44}
            height={44}
            className="object-contain transition-transform duration-300 group-hover:rotate-6"
          />
          <span className="font-fun text-xl sm:text-2xl hidden sm:flex items-baseline tracking-tight">
            <span className="text-tl-red">Toy</span>
            <span className="text-tl-ink">Landia</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="px-3 py-2 text-[13px] font-medium text-tl-charcoal hover:text-tl-red
                         rounded-full transition-colors"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex">
          <a
            href="https://www.facebook.com/officialtoylandia"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !py-2 !px-4 !text-xs"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            Message to Order
          </a>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px] rounded-full
                     border-2 border-tl-ink bg-tl-yellow shadow-toy-sm
                     active:translate-y-0.5 active:shadow-[0_1px_0_0_#1A1410] transition-all"
          aria-label="Toggle menu"
        >
          <span className={`block w-4 h-0.5 bg-tl-ink rounded-full transition-all duration-300 ${open ? "rotate-45 translate-y-[6px]" : ""}`} />
          <span className={`block w-4 h-0.5 bg-tl-ink rounded-full transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-4 h-0.5 bg-tl-ink rounded-full transition-all duration-300 ${open ? "-rotate-45 -translate-y-[6px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-white border-b border-tl-line`}
      >
        <div className="wrap pb-5 pt-2 space-y-1">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="block text-sm text-tl-charcoal font-medium py-3 px-3 rounded-2xl hover:bg-tl-yellowSoft"
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <div className="pt-3">
            <a
              href="https://www.facebook.com/officialtoylandia"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary !text-sm w-full"
            >
              Message to Order
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
