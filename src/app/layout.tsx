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
  metadataBase: new URL("https://christinschoss.de"),
  title: {
    default: "Vegane Ernährungsberatung für Schwangerschaft & Beikost | Christin Schoß",
    template: "%s | Christin Schoß",
  },
  description:
    "Vegan schwanger? Christin Schoß begleitet dich mit individueller 1:1-Beratung durch Schwangerschaft, Stillzeit und Beikoststart – sicher, fundiert, persönlich.",
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://christinschoss.de",
    siteName: "Christin Schoß – Vegane Ernährungsberatung",
    images: [
      {
        url: "https://christinschoss.de/og-image.png",
        width: 1200,
        height: 630,
        alt: "Christin Schoß – Vegane Ernährungsberaterin für Schwangerschaft & Beikost",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://christinschoss.de/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Christin Schoß – Vegane Ernährungsberatung",
  url: "https://christinschoss.de",
  email: "info@christinschoss.com",
  description:
    "Zertifizierte vegane Ernährungsberaterin für Schwangerschaft, Stillzeit und Beikost",
  sameAs: [
    "https://www.instagram.com/tinboom.official/",
    "https://www.tiktok.com/@ernaehrung.by.tinboom",
    "https://www.youtube.com/@tins_ernährungstipps",
  ],
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
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
