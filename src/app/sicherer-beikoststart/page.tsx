"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform, useSpring } from "framer-motion";
import { Check, MessageCircle, ClipboardList, Search, Utensils, Users } from "lucide-react";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { SITE, STRIPE } from "@/lib/constants";

const included = [
  {
    icon: Search,
    title: "Detaillierte Analyse der Ernährungssituation",
    desc: "Wo steht dein Kind gerade? Was bekommt es bisher? Welche Nährstoffe brauchen besondere Aufmerksamkeit?",
  },
  {
    icon: ClipboardList,
    title: "Individueller Beikostplan",
    desc: "Kein Schema F, sondern ein Plan, der auf dein Kind, euren Alltag und eure Vorlieben abgestimmt ist.",
  },
  {
    icon: Check,
    title: "8–10 persönliche Gespräche",
    desc: "Regelmäßige Videocalls, in denen wir den Fortschritt besprechen, Fragen klären und den Plan anpassen.",
  },
  {
    icon: MessageCircle,
    title: "Begleitender Support werktags",
    desc: "Für alle Fragen zwischen den Gesprächen, weil gerade am Anfang vieles neu und unsicher ist.",
  },
  {
    icon: Search,
    title: "Supplement-Check & Nährstofffokus",
    desc: "Welche Supplements braucht dein Kind wirklich? Genau die richtigen, in der richtigen Menge. Nicht mehr, nicht weniger.",
  },
  {
    icon: Utensils,
    title: "Praktische Umsetzung im Alltag",
    desc: "Rezeptideen, Zubereitungstipps und konkrete Hilfestellungen, die wirklich funktionieren. Auch an stressigen Tagen.",
  },
];

const forWhom = [
  "Du dein Kind vegan ernähren möchtest und einen sicheren, fundierten Plan brauchst",
  "Du unsicher bist, wann und wie du mit der Beikost starten sollst",
  "Du sicherstellen willst, dass dein Kind von Anfang an mit allem versorgt ist, was es wirklich braucht",
  "Du eine persönliche Begleitung suchst, nicht nur allgemeine Beikost-Tabellen",
  "Du bereit bist, aktiv mitzumachen, weil dir die Ernährung deines Kindes wirklich am Herzen liegt",
];

const phases = [
  {
    weeks: "Woche 1–2",
    title: "Analyse & Planung",
    desc: "Was isst dein Kind bisher? Was fehlt noch? Aus dem genauen Blick auf den Ist-Stand entsteht dein individueller Beikostplan.",
  },
  {
    weeks: "Woche 3–7",
    title: "Umsetzung & Begleitung",
    desc: "Du führst den Plan ein, wir optimieren gemeinsam. Regelmäßiger Austausch bei allen Fragen.",
  },
  {
    weeks: "Woche 8–10",
    title: "Festigung & Ausblick",
    desc: "Wir festigen die Routine und ich bereite dich darauf vor, eigenständig weiterzumachen.",
  },
];

export default function SichererBeikostPage() {
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
              Programm 2 · 10 Wochen
            </motion.p>
            <motion.h1 variants={fadeInUp} className="font-serif text-4xl sm:text-5xl font-light text-charcoal mb-4 leading-snug">
              Der vegane Beikoststart.
              <br />
              <em className="text-blush-dark not-italic font-semibold">Sicher geplant,</em>{" "}
              liebevoll begleitet.
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-soft-gray text-lg max-w-2xl mx-auto mb-8">
              10 Wochen individuelle Beratung für Mütter, die sagen:
              <br />
              „Ich will keine Fehler machen."
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={SITE.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center font-semibold transition-all duration-200 px-8 py-4 text-base rounded-card-lg bg-blush-dark text-white hover:bg-blush-dark/90 shadow-sm"
              >
                Kostenloses Erstgespräch buchen
              </a>
              <a
                href={STRIPE.beikost}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center font-semibold transition-all duration-200 px-8 py-4 text-base rounded-card-lg border-2 border-blush-dark text-blush-dark hover:bg-blush-dark/10"
              >
                Direkt buchen
              </a>
            </motion.div>
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
                    <Check size={12} className="text-blush-dark" strokeWidth={2.5} />
                  </span>
                  <span className="text-soft-gray">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
            <motion.div variants={fadeInUp} className="bg-blush/20 border border-blush/40 rounded-card p-4">
              <p className="text-sm text-charcoal">
                <strong>Dieses Programm passt nicht zu dir, wenn</strong> du nach einem fertigen
                Universalplan suchst. Jedes Kind ist anders, und genau deshalb arbeite ich individuell.
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
                    <item.icon size={18} className="text-blush-dark" strokeWidth={1.5} />
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
                    <div className="w-10 h-10 rounded-full bg-blush-dark flex items-center justify-center flex-shrink-0 relative z-10 shadow-sm">
                      <span className="text-white text-sm font-bold">{i + 1}</span>
                    </div>
                    <div className="pt-1">
                      <p className="text-xs font-semibold uppercase tracking-widest text-blush-dark mb-1">{phases[i].weeks}</p>
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
      <section className="section-padding bg-blush-dark text-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
              10 Wochen. Individuell. Persönlich begleitet.
            </motion.p>

            {/* Pricing cards */}
            <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <a
                href={STRIPE.beikost}
                target="_blank"
                rel="noopener noreferrer"
                className="relative bg-white/15 border border-white/30 rounded-2xl p-6 hover:bg-white/20 transition-colors cursor-pointer"
              >
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-taupe text-white text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                  Beste Wahl
                </span>
                <p className="text-white/60 text-sm mb-2">Einmalzahlung</p>
                <p className="font-serif text-5xl font-semibold mb-1">997 €</p>
                <p className="text-white/50 text-xs">einmalig</p>
              </a>
              <a
                href={STRIPE.beikostRate}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/8 border border-white/15 rounded-2xl p-6 hover:bg-white/15 transition-colors cursor-pointer"
              >
                <p className="text-white/60 text-sm mb-2">Ratenzahlung</p>
                <p className="text-white/50 text-xs mb-1">2 Raten à</p>
                <p className="font-serif text-5xl font-semibold mb-1">529 €</p>
                <p className="text-white/50 text-xs">monatlich</p>
              </a>
            </motion.div>

            {/* Included */}
            <motion.ul variants={fadeInUp} className="flex flex-col gap-2 text-sm text-white/75 mb-8 text-left max-w-sm mx-auto">
              {[
                "8–10 persönliche Videocalls",
                "Individueller Beikostplan & Supplement-Check",
                "WhatsApp-Support werktags",
                "Praktische Umsetzungshilfe im Alltag",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Check size={14} className="text-blush flex-shrink-0" strokeWidth={2.5} />
                  {item}
                </li>
              ))}
            </motion.ul>

            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-10">
              <Users size={14} className="text-white/70 flex-shrink-0" />
              <span className="text-white/70 text-sm">Nur wenige Plätze pro Monat verfügbar</span>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={SITE.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center font-semibold transition-all duration-200 px-8 py-4 text-base rounded-card-lg bg-white text-blush-dark hover:bg-cream"
              >
                Kostenloses Erstgespräch buchen
              </a>
              <a
                href={STRIPE.beikost}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center font-semibold transition-all duration-200 px-8 py-4 text-base rounded-card-lg border-2 border-white text-white hover:bg-white/10"
              >
                Direkt buchen
              </a>
            </motion.div>

            <motion.p variants={fadeInUp} className="mt-8 text-white/50 text-sm">
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
