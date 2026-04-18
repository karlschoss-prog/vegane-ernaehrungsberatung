import type { Metadata } from "next";
import { Cormorant_Garamond, Nunito_Sans, Caveat } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/gdpr/CookieBanner";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const nunito = Nunito_Sans({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://christinschoss.com"),
  title: {
    default: "Vegane Ernährungsberatung für Schwangerschaft & Beikost | Christin Schoß",
    template: "%s | Christin Schoß",
  },
  description:
    "Vegan schwanger? Christin Schoß begleitet dich mit individueller 1:1-Beratung durch Schwangerschaft, Stillzeit und Beikoststart – sicher, fundiert, persönlich.",
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://christinschoss.com",
    siteName: "Christin Schoß – Vegane Ernährungsberatung",
    images: [
      {
        url: "https://christinschoss.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Christin Schoß – Vegane Ernährungsberaterin für Schwangerschaft & Beikost",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://christinschoss.com/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Christin Schoß – Vegane Ernährungsberatung",
  description:
    "Zertifizierte vegane Ernährungsberatung für Schwangerschaft, Stillzeit und Beikost.",
  url: "https://christinschoss.com",
  image: "https://christinschoss.com/christin.jpg",
  telephone: "+491784558828",
  email: "info@christinschoss.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Hagenring 89",
    postalCode: "38106",
    addressLocality: "Braunschweig",
    addressRegion: "Niedersachsen",
    addressCountry: "DE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "52.2689",
    longitude: "10.5268",
  },
  areaServed: [{ "@type": "Country", name: "Deutschland" }],
  serviceType: [
    "Vegane Ernährungsberatung",
    "Ernährungsberatung Schwangerschaft",
    "Beikostberatung",
  ],
  priceRange: "€€",
  sameAs: [
    "https://www.instagram.com/tinboom.official/",
    "https://www.tiktok.com/@ernaehrung.by.tinboom",
    "https://www.youtube.com/@tins_ernährungstipps",
  ],
  founder: {
    "@type": "Person",
    name: "Christin Schoß",
    jobTitle: "Zertifizierte vegane Ernährungsberaterin",
    description:
      "Zertifizierte vegane Ernährungsberaterin (ecodemy, DQR 5), Mama und Expertin für pflanzliche Ernährung in Schwangerschaft, Stillzeit und Beikost.",
    image: "https://christinschoss.com/christin.jpg",
    sameAs: [
      "https://www.instagram.com/tinboom.official/",
      "https://www.tiktok.com/@ernaehrung.by.tinboom",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${cormorant.variable} ${nunito.variable} ${caveat.variable} h-full`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-cream text-charcoal font-sans antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
