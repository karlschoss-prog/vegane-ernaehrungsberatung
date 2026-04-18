import type { Metadata } from "next";
import SupplementsContent from "./SupplementsContent";

export const metadata: Metadata = {
  title: "Supplements vegane Schwangerschaft · Empfehlungen",
  description:
    "Welche Supplements du in der veganen Schwangerschaft wirklich brauchst. B12, Omega-3, DHA & mehr – evidenzbasierte Empfehlungen von Christin Schoß.",
  alternates: {
    canonical: "https://christinschoss.com/supplements/",
  },
};

export default function SupplementsPage() {
  return <SupplementsContent />;
}
