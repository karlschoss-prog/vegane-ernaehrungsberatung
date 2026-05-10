"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform, useSpring } from "framer-motion";
import { Check, MessageCircle, ClipboardList, Search, Utensils, Users, Leaf } from "lucide-react";
import Link from "next/link";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { SITE } from "@/lib/constants";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";

const included = [
  {
    icon: Search,
    title: "Individuelle Ernährungsanalyse",
    desc: "Wo stehst du gerade? Was isst du, was fehlt, was blockiert dich? Aus dem genauen Blick auf deinen Ist-Stand entsteht dein persönlicher Plan.",
  },
  {
    icon: ClipboardList,
    title: "Persönlicher Ernährungsplan",
    desc: "Kein Schema F. Dein Plan wird auf dein Ziel, deinen Alltag als Mama und deine Vorlieben abgestimmt.",
  },
  {
    icon: Utensils,
    title: "Einkaufsliste & Rezepte",
    desc: "Praktische Alltagshilfen, die du sofort umsetzen kannst. Auch wenn wenig Zeit bleibt.",
  },
  {
    icon: MessageCircle,
    title: "Wöchentliche Check-ins",
    desc: "Regelmäßiger Austausch, in dem wir Fortschritte besprechen, Fragen klären und den Plan bei Bedarf anpassen.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp-Support werktags",
    desc: "Für alle Fragen zwischen den Gesprächen, weil der Alltag selten nach Plan läuft.",
  },
  {
    icon: Leaf,
    title: "Supplement-Empfehlungen",
    desc: "Was brauchst du wirklich, was nicht? Klare Empfehlungen, kein Überfluss.",
  },
];

const forWhom = [
  "Du nach der Schwangerschaft wieder in deinen Körper finden möchtest",
  "Du dauerhaft Fett verlieren willst, ohne auf alles zu verzichten",
  "Du gesund zunehmen möchtest, pflanzlich und ohne Bauchfett",
  "Du Heißhunger endlich verstehen und lösen willst",
  "Du einen pflanzlichen Alltag lebst und dabei in Form kommen möchtest",
];

const phases = [
  {
    weeks: "Woche 1–2",
    title: "Analyse & Strategie",
    desc: "Wir schauen genau hin: Was isst du, was fehlt, was hält dich zurück? Aus diesem Bild entsteht dein individueller Ernährungsplan.",
  },
  {
    weeks: "Woche 3–8",
    title: "Umsetzung & Begleitung",
    desc: "Du setzt den Plan im Alltag um, ich begleite dich dabei. Regelmäßige Check-ins und Support, damit du nicht allein bist.",
  },
  {
    weeks: "Woche 9–12",
    title: "Festigung & Selbstständigkeit",
    desc: "Wir festigen das Erreichte und ich bereite dich darauf vor, eigenständig weiterzumachen.",
  },
];

const starterIncludes = [
  "Erstgespräch (60 min)",
  "Individueller Ernährungsplan",
  "Einkaufsliste & Rezepte",
  "Einmaliges Follow-up-Gespräch",
];

const coachingIncludes = [
  "Detaillierte Ernährungsanalyse",
  "Individueller Plan, laufend angepasst",
  "10–12 persönliche Gespräche",
  "WhatsApp-Support werktags",
  "Supplement-Beratung",
  "Einkaufsliste & Rezepte",
];

export default function PflanzlichInFormContent() {
  const shouldReduceMotion = useReducedMotion();

  const ablaufRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: ablaufRef, offset: ["start start", "end end"] });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 60, damping: 20, restDelta: 0.001 });

  const phase1Opacity = useTransform(smoothProgress, [0.05, 0.25], [0, 1]);
  const phase1Y = useTransform(smoothProgress, [0.05, 0.25], [20, 0]);
  const phase2Opacity = useTransform(smoothProgress, [0.35, 0.55], [0, 1]);
  const phase2Y = useTransform(smoothProgress, [0.35, 0.55], [20, 0]);
  const phase3Opacity = useTransform(smoothProgress, [0.65, 0.85], [0, 1]);
  const phase3Y = useTransform(smoothProgress, [0.65, 0.85], [20, 0]);

  return (
    <>
      {/* Hero */}
      <section className="bg-blush/20 section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={staggerContainer}
            initial={shouldReduceMotion ? "visible" : "hidden"}
            animate="visible"
          >
            <motion.p variants={fadeInUp} className="text-sm font-semibold uppercase tracking-widest text-taupe mb-3">
              Programm 3 · 10–12 Wochen
            </motion.p>
            <motion.h1 variants={fadeInUp} className="font-serif text-4xl sm:text-5xl font-light text-charcoal mb-4 leading-snug">
              Pflanzlich in Form.
              <br />
              <em className="text-taupe not-italic font-semibold">Dein Ziel,</em>{" "}
              dein Tempo.
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-soft-gray text-lg max-w-2xl mx-auto mb-6">
              Ob du Fett verlieren oder gesund zunehmen möchtest: Ich erstelle dir einen individuellen Plan, der zu deinem Körper und deinem Alltag als Mama passt.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-2 mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blush/40 text-taupe text-sm font-semibold rounded-full">
                <Check size={13} strokeWidth={2.5} />
                Schlank &amp; energiegeladen
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blush/40 text-taupe text-sm font-semibold rounded-full">
                <Check size={13} strokeWidth={2.5} />
                Gesund zunehmen
              </span>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={SITE.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center font-semibold transition-all duration-200 px-8 py-4 text-base rounded-card-lg bg-taupe text-white hover:bg-taupe/90 shadow-sm whitespace-nowrap"
              >
                Kostenloses Erstgespräch buchen
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Transformation */}
      <section className="section-padding bg-charcoal">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial={shouldReduceMotion ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Text links */}
              <div>
                <motion.p variants={fadeInUp} className="text-xs font-semibold uppercase tracking-widest text-taupe mb-3">
                  Echte Ergebnisse
                </motion.p>
                <motion.h2 variants={fadeInUp} className="font-serif text-3xl sm:text-4xl font-light text-white mb-5 leading-snug">
                  20 kg weniger.
                  <br />
                  <em className="text-taupe not-italic font-semibold">In 9 Monaten.</em>
                  <br />
                  Pflanzlich.
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-white/60 text-base leading-relaxed mb-6">
                  Das ist meine eigene Geschichte. Nach meiner Schwangerschaft wollte ich wieder in meinen Körper finden, ohne auf alles zu verzichten und ohne stundenlang im Fitnessstudio zu stehen. Mit einem pflanzlichen Plan, der zu meinem Alltag als Mama gepasst hat, habe ich es geschafft.
                </motion.p>
                <motion.p variants={fadeInUp} className="text-white/40 text-sm italic">
                  Ziehe den Regler, um die Veränderung zu sehen.
                </motion.p>
              </div>

              {/* Slider rechts */}
              <motion.div variants={fadeInUp} className="w-full max-w-sm mx-auto lg:max-w-none">
                <BeforeAfterSlider
                  beforeSrc="/christin-vorher.jpg"
                  afterSrc="/christin-nachher.jpg"
                  beforeLabel="Kurz vor der Geburt"
                  afterLabel="9 Monate danach"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Für wen */}
      <section className="section-padding bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial={shouldReduceMotion ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
          >
            <motion.h2 variants={fadeInUp} className="font-serif text-3xl sm:text-4xl font-light text-charcoal mb-4">
              Passt das zu dir?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-soft-gray mb-6">Dieses Programm ist für dich, wenn:</motion.p>
            <motion.ul variants={staggerContainer} className="space-y-3 mb-8">
              {forWhom.map((item) => (
                <motion.li key={item} variants={fadeInUp} className="flex gap-3 items-start">
                  <span className="w-5 h-5 rounded-full bg-blush/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={12} className="text-taupe" strokeWidth={2.5} />
                  </span>
                  <span className="text-soft-gray">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
            <motion.div variants={fadeInUp} className="bg-blush/20 border border-blush/40 rounded-card p-4">
              <p className="text-sm text-charcoal">
                <strong>Dieses Programm passt nicht zu dir, wenn</strong> du nach einem fertigen
                Universalplan suchst oder kurzfristige Ergebnisse ohne Umstellung erwartest. Nachhaltige Veränderung braucht Bereitschaft.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Was dich erwartet */}
      <section className="section-padding bg-blush/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial={shouldReduceMotion ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
          >
            <motion.h2 variants={fadeInUp} className="font-serif text-3xl sm:text-4xl font-light text-charcoal mb-10 text-center">
              Was dich erwartet
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {included.map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeInUp}
                  className="bg-white rounded-card-lg p-5 shadow-sm border border-blush/30"
                >
                  <div className="w-10 h-10 rounded-full bg-blush/30 flex items-center justify-center mb-3">
                    <item.icon size={18} className="text-taupe" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-semibold text-charcoal text-sm mb-2 leading-snug">{item.title}</h3>
                  <p className="text-xs text-soft-gray leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ablauf */}
      <div ref={ablaufRef} className="bg-cream" style={{ height: "200vh" }}>
        <div className="sticky top-0 overflow-hidden">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 pb-20">
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-charcoal mb-10">
              Der Ablauf
            </h2>
            <div className="relative">
              <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-blush/40" aria-hidden="true" />
              <div className="space-y-8">
                {[
                  { opacity: phase1Opacity, y: phase1Y },
                  { opacity: phase2Opacity, y: phase2Y },
                  { opacity: phase3Opacity, y: phase3Y },
                ].map(({ opacity, y }, i) => (
                  <motion.div
                    key={i}
                    style={shouldReduceMotion ? {} : { opacity, y }}
                    className="flex gap-6"
                  >
                    <div className="w-10 h-10 rounded-full bg-taupe flex items-center justify-center flex-shrink-0 relative z-10 shadow-sm">
                      <span className="text-white text-sm font-bold">{i + 1}</span>
                    </div>
                    <div className="pt-1">
                      <p className="text-xs font-semibold uppercase tracking-widest text-taupe mb-1">{phases[i].weeks}</p>
                      <h3 className="font-serif text-xl font-semibold text-charcoal mb-2">{phases[i].title}</h3>
                      <p className="text-soft-gray text-sm leading-relaxed">{phases[i].desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Preis & CTA */}
      <section className="section-padding bg-charcoal text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={staggerContainer}
            initial={shouldReduceMotion ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
          >
            <motion.h2 variants={fadeInUp} className="font-serif text-3xl sm:text-4xl font-light mb-3">
              Deine Investition
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-white/60 mb-10">
              Wähle das Paket, das zu deinem Ziel und deinem Tempo passt.
            </motion.p>

            <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {/* Starter */}
              <div className="bg-white/8 border border-white/15 rounded-2xl p-6 text-left flex flex-col">
                <p className="text-white/60 text-sm mb-2">Starter-Paket</p>
                <p className="font-serif text-5xl font-semibold mb-1">249 €</p>
                <p className="text-white/50 text-xs mb-5">einmalig</p>
                <ul className="flex flex-col gap-2 text-sm text-white/70 mb-6 flex-1">
                  {starterIncludes.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <Check size={13} className="text-blush flex-shrink-0" strokeWidth={2.5} />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="/kontakt#schreib-mir"
                  className="inline-flex items-center justify-center w-full font-semibold transition-all duration-200 px-5 py-3 text-sm rounded-card-lg bg-white/10 text-white hover:bg-white/20 border border-white/20 whitespace-nowrap"
                >
                  Jetzt anfragen
                </a>
              </div>

              {/* Coaching */}
              <div className="relative bg-white/15 border border-white/30 rounded-2xl p-6 text-left flex flex-col">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-taupe text-white text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                  Empfohlen
                </span>
                <p className="text-white/60 text-sm mb-2">Vollständiges Coaching</p>
                <p className="font-serif text-5xl font-semibold mb-1">899 €</p>
                <p className="text-white/50 text-xs mb-5">10–12 Wochen</p>
                <ul className="flex flex-col gap-2 text-sm text-white/70 mb-6 flex-1">
                  {coachingIncludes.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <Check size={13} className="text-blush flex-shrink-0" strokeWidth={2.5} />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={SITE.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full font-semibold transition-all duration-200 px-5 py-3 text-sm rounded-card-lg bg-taupe text-white hover:bg-taupe/90 whitespace-nowrap"
                >
                  Kostenloses Erstgespräch buchen
                </a>
              </div>
            </motion.div>

            <motion.p variants={fadeInUp} className="text-white/35 text-xs mb-6">
              Alle Preise inkl. 0 % USt. gem. § 19 UStG (Kleinunternehmerregelung).
            </motion.p>

            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-10">
              <Users size={14} className="text-white/70 flex-shrink-0" />
              <span className="text-white/70 text-sm">Nur wenige Plätze pro Monat verfügbar</span>
            </motion.div>

            <motion.p variants={fadeInUp} className="text-white/50 text-sm">
              Fragen oder ein anderes Anliegen?{" "}
              <a href="/kontakt#schreib-mir" className="text-white/80 font-semibold underline underline-offset-2 hover:text-white transition-colors">
                Schreib mir gerne.
              </a>
            </motion.p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
