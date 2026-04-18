import type { Metadata } from "next";
import KontaktContent from "./KontaktContent";

export const metadata: Metadata = {
  title: "Kontakt & Buchung · Vegane Ernährungsberatung",
  description:
    "Buche dein kostenloses Erstgespräch oder schreib mir direkt. Vegane Ernährungsberatung – persönlich, individuell, online & in Braunschweig.",
  alternates: {
    canonical: "https://christinschoss.com/kontakt/",
  },
};

export default function KontaktPage() {
  return <KontaktContent />;
}
