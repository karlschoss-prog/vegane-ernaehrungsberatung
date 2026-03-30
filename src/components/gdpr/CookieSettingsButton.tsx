"use client";

import { resetCookieConsent } from "./CookieBanner";

export default function CookieSettingsButton() {
  return (
    <button
      onClick={resetCookieConsent}
      className="text-sm text-white/60 hover:text-white transition-colors text-left"
    >
      Cookie-Einstellungen
    </button>
  );
}
