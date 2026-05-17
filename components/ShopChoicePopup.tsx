"use client";

import { useEffect, useState } from "react";

const storageKey = "toylandia-shop-choice-popup-dismissed";

export default function ShopChoicePopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.localStorage.getItem(storageKey) === "yes") {
      return;
    }

    const timer = window.setTimeout(() => setVisible(true), 1400);
    return () => window.clearTimeout(timer);
  }, []);

  function close() {
    window.localStorage.setItem(storageKey, "yes");
    setVisible(false);
  }

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center px-4 py-6">
      <button
        type="button"
        aria-label="Close shopping options"
        onClick={close}
        className="absolute inset-0 bg-tl-ink/62 backdrop-blur-sm"
      />

      <section className="relative w-full max-w-[560px] overflow-hidden rounded-[2rem] border-2 border-tl-ink bg-tl-warm shadow-toy-lg animate-pop-in">
        <div className="absolute -left-16 -top-16 h-44 w-44 rounded-full bg-tl-yellow/70 blur-2xl" />
        <div className="absolute -right-12 bottom-12 h-36 w-36 rounded-full bg-tl-red/25 blur-2xl" />

        <button
          type="button"
          onClick={close}
          className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full border-2 border-tl-ink bg-white text-lg font-black text-tl-ink shadow-toy-sm transition hover:bg-tl-yellow"
          aria-label="Close popup"
        >
          x
        </button>

        <div className="relative z-10 p-6 sm:p-8">
          <div className="mb-5 inline-flex rounded-full border-2 border-tl-ink bg-tl-yellow px-4 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-tl-ink shadow-toy-sm">
            Ready to shop?
          </div>

          <h2 className="font-fun text-4xl leading-[0.95] text-tl-ink sm:text-5xl">
            Choose how you want to buy from <span className="text-tl-red">ToyLandia.</span>
          </h2>

          <p className="mt-4 max-w-xl text-base font-semibold leading-relaxed text-tl-charcoal">
            Go straight to Shopee for checkout, or message the official Facebook page if you want help with current stock, bulk orders, or toy suggestions.
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            <a
              href="https://shopee.ph/toylandia678"
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className="group rounded-[1.4rem] border-2 border-tl-ink bg-tl-red p-5 text-white shadow-toy-sm transition hover:-translate-y-1 hover:shadow-toy"
            >
              <span className="inline-grid h-11 w-11 place-items-center rounded-2xl border-2 border-white bg-white text-tl-red">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M6 7h12l-1 13H7L6 7Z" />
                  <path d="M9 7a3 3 0 0 1 6 0" />
                  <path d="M9.5 12.5h5" />
                </svg>
              </span>
              <span className="mt-4 block text-xl font-black leading-tight">Shop on Shopee</span>
              <span className="mt-2 block text-sm font-semibold leading-relaxed text-white/82">Best for browsing listings, vouchers, and checkout.</span>
            </a>

            <a
              href="https://www.facebook.com/officialtoylandia"
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className="group rounded-[1.4rem] border-2 border-tl-ink bg-white p-5 text-tl-ink shadow-toy-sm transition hover:-translate-y-1 hover:bg-tl-yellow hover:shadow-toy"
            >
              <span className="inline-grid h-11 w-11 place-items-center rounded-2xl border-2 border-tl-ink bg-tl-yellow text-tl-ink">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 11.5a8.5 8.5 0 0 1-12.2 7.7L3 21l1.8-5.2A8.5 8.5 0 1 1 21 11.5Z" />
                  <path d="M8 11h8" />
                  <path d="M8 14h5" />
                </svg>
              </span>
              <span className="mt-4 block text-xl font-black leading-tight">Message Facebook</span>
              <span className="mt-2 block text-sm font-semibold leading-relaxed text-tl-charcoal">Best for stock questions, bulk buying, and assistance.</span>
            </a>
          </div>

          <button
            type="button"
            onClick={close}
            className="mx-auto mt-5 block text-sm font-black text-tl-muted underline decoration-tl-yellow decoration-4 underline-offset-4 transition hover:text-tl-red"
          >
            Continue browsing the website
          </button>
        </div>
      </section>
    </div>
  );
}
