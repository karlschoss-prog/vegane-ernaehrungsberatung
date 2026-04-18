import type { Metadata } from "next";
import SichererBeikostContent from "./SichererBeikostContent";

export const metadata: Metadata = {
  title: "Veganer Beikoststart · Individueller Plan für dein Baby",
  description:
    "Vegane Beikost sicher starten. Individueller Beikostplan, 10 Wochen Begleitung & WhatsApp-Support. Zertifizierte Beratung buchen.",
  alternates: {
    canonical: "https://christinschoss.com/sicherer-beikoststart/",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Sicherer Beikoststart – 10-Wochen-Beratungsprogramm",
  description:
    "10 Wochen individuelle 1:1-Beratung für einen veganen Beikoststart. Individueller Beikostplan, Supplement-Check und persönliche Begleitung.",
  provider: {
    "@type": "Person",
    name: "Christin Schoß",
    url: "https://christinschoss.com",
  },
  serviceType: "Vegane Ernährungsberatung",
  areaServed: "DE",
  offers: {
    "@type": "Offer",
    price: "997",
    priceCurrency: "EUR",
    availability: "https://schema.org/LimitedAvailability",
    url: "https://christinschoss.com/sicherer-beikoststart/",
  },
};

export default function SichererBeikostPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <SichererBeikostContent />
    </>
  );
}
