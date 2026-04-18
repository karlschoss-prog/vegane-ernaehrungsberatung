import type { Metadata } from "next";
import SichereSchwangerschaftContent from "./SichereSchwangerschaftContent";

export const metadata: Metadata = {
  title: "Vegane Schwangerschaft sicher begleitet · 12-Wochen-Programm",
  description:
    "12 Wochen individuelle Beratung für deine vegane Schwangerschaft. Ernährungsplan, Supplements & persönliche Begleitung. Jetzt kostenloses Erstgespräch buchen.",
  alternates: {
    canonical: "https://christinschoss.com/sichere-schwangerschaft/",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Sichere Schwangerschaft – 12-Wochen-Beratungsprogramm",
  description:
    "12 Wochen individuelle 1:1-Ernährungsberatung für eine vegane Schwangerschaft. Persönlicher Ernährungsplan, Supplement-Strategie und laufende Begleitung.",
  provider: {
    "@type": "Person",
    name: "Christin Schoß",
    url: "https://christinschoss.com",
  },
  serviceType: "Vegane Ernährungsberatung",
  areaServed: "DE",
  offers: {
    "@type": "Offer",
    price: "1497",
    priceCurrency: "EUR",
    availability: "https://schema.org/LimitedAvailability",
    url: "https://christinschoss.com/sichere-schwangerschaft/",
  },
};

export default function SichereSchwangerschaftPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <SichereSchwangerschaftContent />
    </>
  );
}
