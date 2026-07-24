"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, ArrowRight } from "lucide-react";
import { EBOOK } from "@/lib/constants";

const STORAGE_KEY = "ebook-popup-seen";

export default function EbookPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (localStorage.getItem(STORAGE_KEY)) return;

    // Popup einblenden, sobald ~40 % der Seite gescrollt wurden
    const THRESHOLD = 0.4;

    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const progress = window.scrollY / scrollable;
      if (progress >= THRESHOLD) {
        setOpen(true);
        window.removeEventListener("scroll", onScroll);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Body-Scroll sperren, solange das Popup offen ist
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const close = () => {
    setOpen(false);
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* localStorage nicht verfügbar – einfach ignorieren */
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto overscroll-contain bg-charcoal/50 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={close}
        >
          {/* Dialog */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`E-Book: ${EBOOK.title}`}
            className="relative my-auto w-full max-w-lg"
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={close}
              aria-label="Schließen"
              className="absolute right-3.5 top-3.5 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-cream/80 text-soft-gray backdrop-blur-sm transition-colors hover:bg-charcoal/10 hover:text-charcoal"
            >
              <X size={18} />
            </button>

            <div className="rounded-card-lg bg-cream shadow-2xl ring-1 ring-charcoal/5 overflow-hidden">
              <div className="grid grid-cols-1 sm:grid-cols-[42%_1fr]">
                {/* Cover-Bühne (Produktbild, vollständig, uncropped) */}
                <div className="hidden sm:flex items-center justify-center bg-gradient-to-br from-sage-light/50 to-blush/20 p-7">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={EBOOK.cover}
                    alt={`Cover: ${EBOOK.title}`}
                    className="w-full h-auto rounded-md shadow-xl ring-1 ring-charcoal/10"
                  />
                </div>

                {/* Inhalt */}
                <div className="p-7 sm:p-8">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-taupe mb-3">
                    Neu erschienen
                  </p>
                  <h2 className="font-serif text-[1.7rem] leading-tight font-semibold text-charcoal mb-4 sm:hidden">
                    {EBOOK.title}
                  </h2>
                  <p className="text-[15px] text-soft-gray leading-relaxed mb-5">
                    {EBOOK.subtitle}
                  </p>
                  <ul className="space-y-2.5 mb-6">
                    {EBOOK.highlights.slice(0, 3).map((h) => (
                      <li key={h} className="flex items-start gap-2.5 text-[14px] text-charcoal">
                        <Check size={15} className="text-taupe flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-baseline gap-2 mb-5">
                    <span className="font-serif text-[2rem] leading-none font-semibold text-charcoal">{EBOOK.price}</span>
                    <span className="text-xs text-soft-gray">einmalig · sofort verfügbar</span>
                  </div>
                  <a
                    href={EBOOK.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={close}
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-card-lg bg-taupe px-5 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-taupe/90"
                  >
                    Zum E-Book
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
