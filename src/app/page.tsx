import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import ProblemSection from "@/components/sections/ProblemSection";
import ProgramCards from "@/components/sections/ProgramCards";
import AboutTeaser from "@/components/sections/AboutTeaser";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Vegane Ernährungsberatung für Schwangerschaft & Beikost | Christin Schoß",
  description:
    "Vegan schwanger? Christin Schoß begleitet dich mit individueller 1:1-Beratung durch Schwangerschaft, Stillzeit und Beikoststart – sicher, fundiert, persönlich.",
  alternates: {
    canonical: "https://christinschoss.com",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ProblemSection />
      <ProgramCards />
      <AboutTeaser />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}
