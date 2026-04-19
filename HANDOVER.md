# Handover – christinschoss.com

**Stand:** April 2026  
**Projekt:** Website für Christin Schoß, zertifizierte vegane Ernährungsberaterin  
**Gebaut von:** Karl Schoß  
**GitHub-Repo:** github.com/karlschoss-prog/vegane-ernaehrungsberatung

---

## Tech Stack

| Technologie | Version | Zweck |
|---|---|---|
| Next.js | 15 / 16.x | Framework |
| TypeScript | – | Typsicherheit |
| Tailwind CSS | – | Styling |
| Framer Motion | – | Animationen |
| GitHub Actions | – | CI/CD (Build + Deploy) |
| all-inkl.com | – | Hosting |

**Deployment-Modus:** Statischer Export (`output: 'export'` in `next.config.ts`). Kein Node.js-Server notwendig. GitHub Actions baut bei jedem Push auf `main` und deployt den `out/`-Ordner auf all-inkl.com.

---

## Seitenstruktur

| Seite | Pfad | Typ |
|---|---|---|
| Startseite | `/` | Öffentlich, indexiert |
| Sichere Schwangerschaft | `/sichere-schwangerschaft` | Öffentlich, indexiert |
| Sicherer Beikoststart | `/sicherer-beikoststart` | Öffentlich, indexiert |
| Supplements | `/supplements` | Öffentlich, indexiert |
| Über mich | `/ueber-mich` | Öffentlich, indexiert |
| Kontakt & Buchung | `/kontakt` | Öffentlich, indexiert |
| Impressum | `/impressum` | Öffentlich, noindex |
| Datenschutzerklärung | `/datenschutz` | Öffentlich, noindex |
| AGB | `/agb` | Öffentlich, noindex |

---

## Wichtige Dateien und wo was steckt

```
src/
├── app/
│   ├── layout.tsx                    ← Globales Layout, Fonts, Schema.org (ProfessionalService)
│   ├── page.tsx                      ← Startseite + FAQ-Schema JSON-LD
│   ├── sichere-schwangerschaft/
│   │   ├── page.tsx                  ← Server-Komponente: Metadata + Service-Schema
│   │   └── SichereSchwangerschaftContent.tsx  ← Client-Komponente: UI
│   ├── sicherer-beikoststart/
│   │   ├── page.tsx                  ← Server-Komponente: Metadata + Service-Schema
│   │   └── SichererBeikostContent.tsx
│   ├── supplements/
│   │   ├── page.tsx                  ← Server-Komponente: Metadata
│   │   └── SupplementsContent.tsx
│   ├── ueber-mich/
│   │   ├── page.tsx                  ← Server-Komponente: Metadata
│   │   └── UeberMichContent.tsx
│   ├── kontakt/
│   │   ├── page.tsx                  ← Server-Komponente: Metadata
│   │   └── KontaktContent.tsx
│   ├── sitemap.ts                    ← Sitemap (force-static!)
│   └── robots.ts                     ← robots.txt (force-static!)
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── sections/                     ← Alle Homepage-Sektionen
│   └── gdpr/
│       ├── CookieBanner.tsx
│       └── CookieSettingsButton.tsx
└── lib/
    ├── constants.ts                  ← ALLE URLs, Links, Stripe-Keys, Affiliate-Codes
    └── animations.ts                 ← Framer Motion Varianten
```

**Regel:** Alle externen Links, Stripe-Links, Social-Media-URLs und Affiliate-Links befinden sich ausschließlich in `src/lib/constants.ts`. Dort anfassen, nie direkt in Komponenten hardcoden.

---

## Zentrale Konfiguration (`src/lib/constants.ts`)

```typescript
SITE.email        = "info@christinschoss.com"
SITE.calendly     = Calendly-Link für Erstgespräch
SITE.whatsapp     = wa.me/491784558828

STRIPE.schwangerschaft      = Einmalzahlung 1.497 €
STRIPE.schwangerschaftRate  = Ratenzahlung 3 × 529 €
STRIPE.beikost              = Einmalzahlung 997 €
STRIPE.beikostRate          = Ratenzahlung 2 × 529 €

AFFILIATE.watson        = Watson Nutrition (Ref-Code: CHRISTINSCHO)
AFFILIATE.ringana       = Platzhalter (www.ringana.com) – kein Affiliate-Link aktiv
AFFILIATE.discountCode  = "Christin5" (Watson Nutrition Rabattcode)
```

---

## ⚠️ Kritischer Punkt: basePath vor Produktion anpassen

In `next.config.ts` ist aktuell eingetragen:

```typescript
basePath: "/vegane-ernaehrungsberatung",
NEXT_PUBLIC_BASE_PATH: "/vegane-ernaehrungsberatung",
```

Das ist der Pfad für den GitHub Pages Staging-Build. Sobald die Seite auf all-inkl.com unter `christinschoss.com` (Root-Domain, kein Unterordner) läuft, müssen beide Werte auf einen leeren String geändert werden:

```typescript
basePath: "",
NEXT_PUBLIC_BASE_PATH: "",
```

Danach neu bauen und deployen. Bilder werden sonst nicht geladen.

---

## SEO-Umsetzung

### Schema.org (layout.tsx)
- Typ: `ProfessionalService`
- Adresse: Hagenring 89, 38106 Braunschweig
- Geo-Koordinaten: 52.2689 / 10.5268
- Founder: Christin Schoß mit Qualifikation und Social Links

### Strukturierte Daten pro Seite
- **Startseite:** FAQPage-Schema (alle 6 FAQ-Einträge)
- **Sichere Schwangerschaft:** Service-Schema (1.497 €, LimitedAvailability)
- **Sicherer Beikoststart:** Service-Schema (997 €, LimitedAvailability)

### Metadata
Jede Seite hat einen eigenen `title`, `description` und `canonical`. Rechtsseiten (Impressum, Datenschutz, AGB) sind auf `noindex` gesetzt.

### Sitemap & robots.txt
Werden automatisch durch Next.js generiert (`sitemap.ts`, `robots.ts`). Beide Dateien benötigen zwingend `export const dynamic = "force-static"` – sonst schlägt der Build fehl.

---

## Rechtliches

| Dokument | Stand |
|---|---|
| Impressum | §5 TMG, §18 MStV, ODR-Link, VSBG – vollständig |
| Datenschutzerklärung | DSGVO-konform, 12 Abschnitte inkl. Speicherdauer, Art. 9, YouTube |
| AGB | 14 Paragraphen, Musterwiderrufsbelehrung (Art. 246a EGBGB), gender-inklusiv |
| Kleinunternehmer | §19 UStG-Hinweis bei allen Preisangaben |
| Cookie-Banner | Nur technisch notwendige Cookies, kein Tracking |

**USt-IdNr.:** Noch nicht eingetragen – wird nach Erteilung durch das Finanzamt in `src/app/impressum/page.tsx` ergänzt.

**Steuernummer:** 14/141/03031 (bereits eingetragen)

---

## Produkte / Programme

| Programm | Preis (Einmal) | Preis (Rate) | Stripe-Link |
|---|---|---|---|
| Sichere Schwangerschaft | 1.497 € | 3 × 529 € | ✓ aktiv |
| Sicherer Beikoststart | 997 € | 2 × 529 € | ✓ aktiv |
| Sicher stillen | – | – | Coming Soon |
| Vegan & leicht | – | – | Coming Soon |

---

## Offene Aufgaben

### Sofort umsetzbar

- **og-image.png erstellen** (1200 × 630 px): Christins Foto + Name + Claim. In `public/` ablegen. Wird für WhatsApp-Links, Instagram-Posts und Google-Vorschauen genutzt. Die Metadaten verweisen bereits auf `https://christinschoss.com/og-image.png`.

- **basePath auf `""` setzen** (sobald Hosting auf christinschoss.com läuft): Siehe Kritischer Punkt oben.

### Nach Hosting-Einrichtung

- **Google Search Console:** Seite hinzufügen, Sitemap `https://christinschoss.com/sitemap.xml` einreichen. Dauert 1–4 Wochen bis erste Rankings sichtbar sind.

- **Google Business Profile:** Wurde am 2026-04-19 angelegt, wartet auf Freigabe. Nach Freigabe: Website-URL eintragen, Foto hochladen, Beschreibung mit Keywords ergänzen.

### Laufend / Zukunft

- **USt-IdNr.** im Impressum nachtragen (kommt automatisch vom Finanzamt)
- **Testimonials** durch echte Kundenstimmen ersetzen (dann auch Review-Schema ergänzen)
- **Ringana-Affiliate-Link** aktivieren wenn Christin Partnerprogramm beantragt
- **Google Analytics 4** einbinden wenn Tracking gewünscht (erfordert Cookie-Consent-Anpassung)
- **Demnächst-Programme** (Sicher stillen, Vegan & leicht) aufbauen wenn bereit

---

## Bewusst getroffene Entscheidungen

| Entscheidung | Begründung |
|---|---|
| Kein Kontaktformular | Replaced durch direkten mailto-Link. Einfacher, kein Drittanbieter (Formspree), keine DSGVO-Komplexität. |
| Kein Google Analytics (vorerst) | Erfordert Cookie-Consent-Anpassung. Wird nachgerüstet wenn Bedarf besteht. |
| Kein Review-Schema | Testimonials auf der Seite sind Platzhalter. Google kann für fake Bewertungen abstrafen. |
| Kleinunternehmerregelung §19 UStG | Christin erhebt keine Umsatzsteuer. Hinweis bei allen Preisangaben. |
| Testimonials als Platzhalter | Echte Kundenstimmen folgen nach ersten Beratungen. Namen und Städte sind fiktiv. |
| Ringana ohne Affiliate-Link | Affiliate-Programm kostet monatlich. Wird aktiviert wenn Nachfrage gestiegen ist. |
| "use client" Seiten ausgelagert | Next.js erlaubt kein `export const metadata` in Client-Komponenten. Lösung: Server-`page.tsx` + Client-`*Content.tsx`. |

---

## Kontakt & Zugänge (nicht im Repo)

- **Domain:** christinschoss.com (all-inkl.com)
- **E-Mail:** info@christinschoss.com
- **Stripe:** Zahlungslinks aktiv, Konto von Christin
- **Calendly:** Buchungslink für kostenloses Erstgespräch
- **WhatsApp Business:** +49 178 4558828
