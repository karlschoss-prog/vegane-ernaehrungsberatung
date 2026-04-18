import type { Metadata } from "next";
import UeberMichContent from "./UeberMichContent";

export const metadata: Metadata = {
  title: "Über Christin Schoß · Vegane Ernährungsberaterin",
  description:
    "Zertifizierte vegane Ernährungsberaterin (ecodemy), Mama & Expertin für Schwangerschaft & Beikost aus Braunschweig. Erfahre mehr über meinen Weg.",
  alternates: {
    canonical: "https://christinschoss.com/ueber-mich/",
  },
};

export default function UeberMichPage() {
  return <UeberMichContent />;
}
