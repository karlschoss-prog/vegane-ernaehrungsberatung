import type { Metadata } from "next";
import PflanzlichInFormContent from "./PflanzlichInFormContent";

export const metadata: Metadata = {
  title: "Pflanzlich in Form · Abnehmen & Zunehmen mit individuellem Plan",
  description:
    "Pflanzlich abnehmen oder gesund zunehmen: Dein individueller Plan für deinen Alltag als Mama. Ab 249 €. Jetzt kostenloses Erstgespräch buchen.",
  alternates: {
    canonical: "https://christinschoss.com/pflanzlich-in-form/",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Pflanzlich in Form – Individuelles Ernährungscoaching",
  description:
    "Pflanzliches Ernährungscoaching zum Abnehmen oder gesunden Zunehmen. Individueller Plan, Rezepte und persönliche Begleitung für Mamas.",
  provider: {
    "@type": "Person",
    name: "Christin Schoß",
    url: "https://christinschoss.com",
  },
  serviceType: "Vegane Ernährungsberatung",
  areaServed: "DE",
  offers: {
    "@type": "Offer",
    price: "249",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
    url: "https://christinschoss.com/pflanzlich-in-form/",
  },
};

export default function PflanzlichInFormPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <PflanzlichInFormContent />
    </>
  );
}
