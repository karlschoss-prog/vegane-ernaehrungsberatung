"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cookieBannerSlideIn } from "@/lib/animations";

const STORAGE_KEY = "cs_cookie_consent";

export function resetCookieConsent() {
  localStorage.removeItem(STORAGE_KEY);
  window.location.reload();
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ v: 1, necessary: true, ts: Date.now() })
    );
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-4 left-4 right-4 z-50 max-w-lg mx-auto"
          variants={cookieBannerSlideIn}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="bg-white rounded-card-lg shadow-2xl border border-taupe/20 p-5 md:p-6">
            <h3 className="font-serif text-lg font-semibold text-charcoal mb-2">
              Hinweis zu Cookies
            </h3>
            <p className="text-sm text-soft-gray leading-relaxed mb-4">
              Diese Website verwendet ausschließlich technisch notwendige Cookies, um grundlegende
              Funktionen sicherzustellen. Eine Einwilligung ist dafür nicht erforderlich.
            </p>

            <div className="space-y-2 mb-4">
              <div className="flex justify-between items-center text-xs text-soft-gray bg-taupe/5 rounded px-3 py-2">
                <span className="font-semibold text-charcoal">Technisch notwendige Cookies</span>
                <span className="text-taupe font-medium">Immer aktiv</span>
              </div>
            </div>

            <div className="mb-4">
              <button
                onClick={accept}
                className="w-full px-4 py-2.5 bg-taupe text-white text-sm font-semibold rounded-card hover:bg-taupe/80 transition-colors"
              >
                Verstanden
              </button>
            </div>

            <p className="text-xs text-soft-gray text-center">
              <Link href="/datenschutz" className="underline hover:text-charcoal transition-colors">
                Datenschutzerklärung
              </Link>
              {" · "}
              <Link href="/impressum" className="underline hover:text-charcoal transition-colors">
                Impressum
              </Link>
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
