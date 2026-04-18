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
  title: "Vegane Ernährungsberatung Schwangerschaft & Beikost · Christin Schoß",
  description:
    "Zertifizierte vegane Ernährungsberatung für Schwangerschaft, Stillzeit & Beikost. 1:1-Begleitung online & in Braunschweig. Kostenloses Erstgespräch buchen.",
  alternates: {
    canonical: "https://christinschoss.com/",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Ist eine vegane Schwangerschaft wirklich sicher?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, wenn die Nährstoffversorgung stimmt. Große Ernährungsgesellschaften wie die Academy of Nutrition and Dietetics bestätigen, dass eine gut geplante vegane Ernährung in allen Lebensphasen möglich ist, einschließlich Schwangerschaft und Stillzeit. Genau darum geht es in meiner Beratung: deine Versorgung individuell sicherzustellen.",
      },
    },
    {
      "@type": "Question",
      name: "Ich bin erst im Kinderwunsch. Ist es zu früh für eine Beratung?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nein, im Gegenteil. Die Kinderwunschphase ist der ideale Zeitpunkt. Dein Körper bereitet sich auf die Schwangerschaft vor und eine optimale Nährstoffversorgung kann dabei einen großen Unterschied machen. Sprich mich einfach im Erstgespräch darauf an.",
      },
    },
    {
      "@type": "Question",
      name: "Was unterscheidet deine Beratung von kostenlosen Informationen im Internet?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Im Internet findest du viele allgemeine Tipps, aber keine individuelle Strategie, die auf deine Blutwerte, deine Lebensumstände und deine Bedürfnisse zugeschnitten ist. In meiner Beratung bekommst du genau das: einen persönlichen Plan, der zu dir passt, mit laufender Begleitung und Anpassung.",
      },
    },
    {
      "@type": "Question",
      name: "Wie laufen die Gespräche ab?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Alle Gespräche finden online per Videocall statt. Du brauchst nur ein Handy oder einen Laptop. So bist du flexibel und kannst die Beratung bequem von zu Hause wahrnehmen, egal wo du wohnst.",
      },
    },
    {
      "@type": "Question",
      name: "Was, wenn ich mir die Beratung gerade nicht leisten kann?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ich biete eine bequeme Ratenzahlung an, damit du die Investition auf mehrere Monate verteilen kannst. Im Erstgespräch finden wir gemeinsam die beste Lösung für dich.",
      },
    },
    {
      "@type": "Question",
      name: "Bietest du auch Einzelstunden an?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nein, ganz bewusst nicht. Eine vegane Schwangerschaft sicher zu begleiten erfordert Zeit, Tiefe und Kontinuität. Das lässt sich mit Einzelstunden nicht leisten. Meine Programme sind so aufgebaut, dass du über den gesamten Zeitraum optimal betreut bist.",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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
