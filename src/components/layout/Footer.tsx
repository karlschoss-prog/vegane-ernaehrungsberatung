import Link from "next/link";
import { Mail } from "lucide-react";
import { SITE, NAV_LINKS } from "@/lib/constants";
import CookieSettingsButton from "@/components/gdpr/CookieSettingsButton";

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

// TikTok icon as SVG (not in lucide-react)
function TikTokIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.15 8.15 0 0 0 4.76 1.52V6.77a4.85 4.85 0 0 1-1-.08z" />
    </svg>
  );
}

function YouTubeIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.54 3.5 12 3.5 12 3.5s-7.54 0-9.38.55A3.02 3.02 0 0 0 .5 6.19C0 8.04 0 12 0 12s0 3.96.5 5.81a3.02 3.02 0 0 0 2.12 2.14C4.46 20.5 12 20.5 12 20.5s7.54 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14C24 15.96 24 12 24 12s0-3.96-.5-5.81zM9.75 15.5v-7l6.5 3.5-6.5 3.5z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {/* Spalte 1: Logo + Beschreibung + Social */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <span className="font-serif text-xl font-semibold text-sage-light">
                Christin Schoß
              </span>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed mb-5">
              Zertifizierte vegane Ernährungsberaterin für Schwangerschaft, Stillzeit und Beikost.
              Dein individueller Weg zu einer sicheren veganen Ernährung.
            </p>
            {/* ecodemy-Siegel */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH}/ecodemy-siegel-ausbildung-vegane-ernaehrungsberaterin-vea-150px-2x.png`}
              alt="ecodemy Siegel – Geprüfte & zertifizierte vegane Ernährungsberaterin"
              width={150}
              height={120}
              className="mt-2"
            />
          </div>

          {/* Spalte 2: Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-sage-light mb-4">
              Navigation
            </h3>
            <nav className="flex flex-col gap-2.5">
              <Link href="/" className="text-sm text-white/60 hover:text-white transition-colors">
                Startseite
              </Link>
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/kontakt" className="text-sm text-white/60 hover:text-white transition-colors">
                Kontakt & Buchung
              </Link>
            </nav>
          </div>

          {/* Spalte 3: Kontakt + Rechtliches */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-sage-light mb-4">
              Kontakt & Rechtliches
            </h3>
            <div className="flex flex-col gap-2.5 mb-6">
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
              >
                <Mail size={14} className="flex-shrink-0" />
                {SITE.email}
              </a>
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
              >
                <InstagramIcon size={14} />
                <span>Instagram · {SITE.instagramHandle}</span>
              </a>
              <a
                href={SITE.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
              >
                <TikTokIcon size={14} />
                <span>TikTok · {SITE.tiktokHandle}</span>
              </a>
              <a
                href={SITE.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
              >
                <YouTubeIcon size={14} />
                <span>YouTube · {SITE.youtubeHandle}</span>
              </a>
            </div>
            <nav className="flex flex-col gap-2.5">
              <Link href="/impressum" className="text-sm text-white/60 hover:text-white transition-colors">
                Impressum
              </Link>
              <Link href="/datenschutz" className="text-sm text-white/60 hover:text-white transition-colors">
                Datenschutzerklärung
              </Link>
              <Link href="/agb" className="text-sm text-white/60 hover:text-white transition-colors">
                AGB
              </Link>
              <CookieSettingsButton />
            </nav>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-xs text-white/40 leading-relaxed max-w-3xl italic">
            Die Ernährungsberatung von Christin Schoß ersetzt keine ärztliche Beratung, Diagnose
            oder Behandlung. Bei gesundheitlichen Beschwerden wende dich bitte an deinen Arzt oder
            deine Ärztin. Christin Schoß ist zertifizierte vegane Ernährungsberaterin (ecodemy,
            ZFU-zugelassen).<br />
            Die Beratung stellt keine Heilkunde im Sinne des Heilpraktikergesetzes dar.
          </p>
          <p className="mt-4 text-xs text-white/30">
            © {new Date().getFullYear()} Christin Schoß. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
