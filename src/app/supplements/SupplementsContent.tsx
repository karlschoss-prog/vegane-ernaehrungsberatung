"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { ExternalLink, AlertCircle, Tag } from "lucide-react";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { AFFILIATE } from "@/lib/constants";

const products = [
  {
    phase: "Basics",
    items: [
      {
        name: "Protein Shake",
        desc: "Die meisten Menschen nehmen täglich zu wenig Eiweiß zu sich. Gerade in der Schwangerschaft und Stillzeit ist eine ausreichende Proteinzufuhr besonders wichtig. Der pflanzliche Protein Shake von Watson Nutrition ist eine einfache und leckere Möglichkeit, den täglichen Bedarf zu decken.",
        note: "Mein Lieblingsgeschmack ist Kaffee, absolut empfehlenswert!",
        link: "https://watsonnutrition.de/products/veganes-clear-protein?ref=CHRISTINSCHO",
        linkLabel: "Watson Nutrition – Protein Shake *",
      },
      {
        name: "Female All In One",
        desc: "Ein speziell auf Frauen abgestimmter Multinährstoff, der die wichtigsten Vitamine, Mineralstoffe und Spurenelemente (inklusive Vitamin D) abdeckt. Ideal als tägliche Basis-Versorgung für Frauen in jeder Lebensphase.",
        note: null,
        link: "https://watsonnutrition.de/products/female-all-in-one?ref=CHRISTINSCHO",
        linkLabel: "Watson Nutrition – Female All In One *",
      },
      {
        name: "Omega-3-Kapseln (EPA, DHA & ARA)",
        desc: "Algenöl-basiert und damit rein pflanzlich. Omega-3-Fettsäuren sind essenziell: sie unterstützen Herz-Kreislauf-System, Gehirnfunktion und haben entzündungshemmende Eigenschaften. Ich empfehle sie in jeder Lebensphase.",
        note: null,
        link: "https://watsonnutrition.de/products/omega-3?ref=CHRISTINSCHO",
        linkLabel: "Watson Nutrition – Omega-3 *",
      },
    ],
  },
  {
    phase: "Vor der Schwangerschaft",
    items: [
      {
        name: "Pregnancy All In One",
        desc: "Der vegane Multinährstoff für Schwangerschaft und Kinderwunsch. Deckt die wichtigsten Vitamine und Mineralstoffe inklusive einer Grundversorgung der wichtigsten Carninutrients (Kreatin, Taurin, Carnitin & Carnosin) ab. Speziell auf die erhöhten Zufuhrempfehlungen in der Schwangerschaft abgestimmt.",
        note: "Sollte bereits in der Kinderwunschphase eingenommen werden, um den Körper optimal vorzubereiten.",
        link: "https://watsonnutrition.de/products/pregnancy-all-in-one?ref=CHRISTINSCHO",
        linkLabel: "Watson Nutrition – Pregnancy All In One *",
      },
      {
        name: "Female One",
        desc: "Ein Frauen-Multinährstoff, der gezielt auf die Bedürfnisse vor der Schwangerschaft ausgerichtet ist. Ergänzt das Pregnancy All In One und sorgt für eine optimale Ausgangslage in der Kinderwunschphase.",
        note: null,
        link: "https://watsonnutrition.de/products/female-one?ref=CHRISTINSCHO",
        linkLabel: "Watson Nutrition – Female One *",
      },
      {
        name: "Omega-3-Kapseln (EPA, DHA & ARA)",
        desc: "Algenöl-basiert, für die Gehirn- und Augenentwicklung deines Babys. DHA und Cholin wirken synergistisch, eine kombinierte Supplementierung zeigt in Studien bessere Ergebnisse.",
        note: null,
        link: "https://watsonnutrition.de/products/omega-3?ref=CHRISTINSCHO",
        linkLabel: "Watson Nutrition – Omega-3 *",
      },
      {
        name: "Protein Shake",
        desc: "Schon vor der Schwangerschaft ist eine ausreichende Proteinversorgung wichtig, um den Körper optimal vorzubereiten. Der pflanzliche Protein Shake ist ein einfacher Weg, den täglichen Bedarf zu decken.",
        note: null,
        link: "https://watsonnutrition.de/products/veganes-clear-protein?ref=CHRISTINSCHO",
        linkLabel: "Watson Nutrition – Protein Shake *",
      },
    ],
  },
  {
    phase: "Schwangerschaft",
    items: [
      {
        name: "Vegan Pregnancy All In One Bundle",
        desc: "Das Komplett-Paket für eine Rundumversorgung: enthält zusätzlich Omega-3-Kapseln, Cholin und Calcium.",
        note: null,
        link: "https://watsonnutrition.de/products/pregnancy-all-in-one?ref=CHRISTINSCHO",
        linkLabel: "Watson Nutrition – Vegan Pregnancy Bundle *",
      },
      {
        name: "Cholin (Lecithin)",
        desc: "Essenziell für die Gehirn- und Nervenentwicklung deines Babys und einer der am häufigsten unterschätzten Nährstoffe. 93 % der Schwangeren erreichen die empfohlene Cholinzufuhr nicht.",
        note: null,
        link: "https://watsonnutrition.de/products/lecithin?ref=CHRISTINSCHO",
        linkLabel: "Watson Nutrition – Cholin *",
      },
      {
        name: "Calcium-Kapseln",
        desc: "Sinnvoll, wenn du nicht regelmäßig calciumangereicherte Pflanzendrinks trinkst. In der Schwangerschaft steigt der Calciumbedarf, eine ausreichende Versorgung ist wichtig für die Knochenentwicklung deines Babys.",
        note: null,
        link: "https://watsonnutrition.de/products/calcium-kapseln?ref=CHRISTINSCHO",
        linkLabel: "Watson Nutrition – Calcium *",
      },
      {
        name: "Collasyn oder Monoglycin",
        desc: "Glycin ist die häufigste Aminosäure im Bindegewebe und wird in der Schwangerschaft verstärkt benötigt. Collasyn oder Monoglycin unterstützt das Bindegewebe, ich empfehle es in allen Phasen.",
        note: null,
        link: "https://watsonnutrition.de/products/collasyn?ref=CHRISTINSCHO",
        linkLabel: "Watson Nutrition – Collasyn *",
      },
      {
        name: "Protein Shake",
        desc: "In der Schwangerschaft steigt der Proteinbedarf deutlich. Der pflanzliche Protein Shake ist eine einfache Möglichkeit, den erhöhten Bedarf ohne großen Aufwand im Alltag zu decken.",
        note: null,
        link: "https://watsonnutrition.de/products/veganes-clear-protein?ref=CHRISTINSCHO",
        linkLabel: "Watson Nutrition – Protein Shake *",
      },
      {
        name: "Omega-3-Kapseln (EPA, DHA & ARA)",
        desc: "Algenöl-basiert, für die Gehirn- und Augenentwicklung deines Babys. DHA und Cholin wirken synergistisch, eine kombinierte Supplementierung zeigt in Studien bessere Ergebnisse.",
        note: null,
        link: "https://watsonnutrition.de/products/omega-3?ref=CHRISTINSCHO",
        linkLabel: "Watson Nutrition – Omega-3 *",
      },
    ],
  },
  {
    phase: "Stillzeit",
    items: [
      {
        name: "Stillzeit All In One",
        desc: "Nach der Geburt verändern sich die Nährstoffbedürfnisse erneut. Dieses Präparat ist speziell auf die Zufuhrempfehlungen für die Stillzeit angepasst, damit du und dein Baby auch nach der Geburt optimal versorgt seid.",
        note: "Soll nach dem Aufbrauchen der letzten Packung Pregnancy All In One bis zum vollständigen Abstillen verwendet werden.",
        link: "https://watsonnutrition.de/products/stillzeit-all-in-one?ref=CHRISTINSCHO",
        linkLabel: "Watson Nutrition – Stillzeit All In One *",
      },
      {
        name: "Cholin (Lecithin)",
        desc: "Cholin wird über die Muttermilch an dein Baby weitergegeben und bleibt in der Stillzeit ein wichtiger Nährstoff für die Gehirn- und Nervenentwicklung. Auch der Bedarf der stillenden Mutter bleibt erhöht.",
        note: null,
        link: "https://watsonnutrition.de/products/lecithin?ref=CHRISTINSCHO",
        linkLabel: "Watson Nutrition – Cholin *",
      },
      {
        name: "Collasyn oder Monoglycin",
        desc: "Glycin unterstützt die Erholung nach der Geburt, fördert das Bindegewebe und hilft dem Körper, sich in der Stillzeit zu regenerieren. Ich empfehle es in allen Phasen.",
        note: null,
        link: "https://watsonnutrition.de/products/collasyn?ref=CHRISTINSCHO",
        linkLabel: "Watson Nutrition – Collasyn *",
      },
      {
        name: "Protein Shake",
        desc: "Auch in der Stillzeit bleibt der Proteinbedarf erhöht. Der pflanzliche Protein Shake hilft, den Bedarf unkompliziert zu decken, besonders in der oft hektischen Zeit mit Neugeborenem.",
        note: null,
        link: "https://watsonnutrition.de/products/veganes-clear-protein?ref=CHRISTINSCHO",
        linkLabel: "Watson Nutrition – Protein Shake *",
      },
      {
        name: "Omega-3-Kapseln (EPA, DHA & ARA)",
        desc: "Auch in der Stillzeit wichtig: DHA wird über die Muttermilch an dein Baby weitergegeben und unterstützt weiterhin die Gehirn- und Augenentwicklung.",
        note: null,
        link: "https://watsonnutrition.de/products/omega-3?ref=CHRISTINSCHO",
        linkLabel: "Watson Nutrition – Omega-3 *",
      },
    ],
  },
  {
    phase: "Supplements für Kinder",
    items: [
      {
        name: "Kids Complete",
        desc: "Ein flüssiger veganer Multinährstoff mit Pfirsich-Geschmack, der essenzielle Vitamine, Spurenelemente und Cholin liefert. Für 1–3-Jährige werden ca. 4 ml pro Tag empfohlen, für 4–8-Jährige 5 ml.",
        note: "Sollte idealerweise mit dem Omega-Präparat und MEBICO kombiniert werden.",
        link: "https://watsonnutrition.de/products/kids-complete-4-8-jahre?ref=CHRISTINSCHO",
        linkLabel: "Watson Nutrition – Kids Complete *",
      },
      {
        name: "Kinder-Supplemente von Hopkins",
        desc: "Hopkins Formulations bietet Kinder-Supplemente, abgestimmt auf die jeweiligen Altersstufen. Ich empfehle die Produkte als ergänzende Versorgung neben dem Kids Complete.",
        note: null,
        link: "https://hopkinsformulations.de/collections/alle-produkte?filter.p.m.custom.lebensphasen=Kinder",
        linkLabel: "Hopkins Formulations – Kinder-Supplements *",
      },
      {
        name: "Omega-3-Kapseln (EPA, DHA & ARA)",
        desc: "Auch für Kinder ist eine ausreichende Omega-3-Versorgung essenziell, für Gehirnentwicklung, Konzentrationsfähigkeit und ein gesundes Immunsystem.",
        note: null,
        link: "https://watsonnutrition.de/products/omega-3?ref=CHRISTINSCHO",
        linkLabel: "Watson Nutrition – Omega-3 *",
      },
    ],
  },
];

export default function SupplementsContent() {
  const shouldReduceMotion = useReducedMotion();
  const [activeTab, setActiveTab] = useState(products[0].phase);

  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-taupe/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={staggerContainer}
            initial={shouldReduceMotion ? "visible" : "hidden"}
            animate="visible"
          >
            <motion.p variants={fadeInUp} className="text-sm font-semibold uppercase tracking-widest text-taupe mb-3">
              Meine Empfehlungen
            </motion.p>
            <motion.h1 variants={fadeInUp} className="font-serif text-4xl sm:text-5xl font-light text-charcoal mb-4 leading-snug">
              Nährstoffe, die zählen.
              <br />
              <em className="text-taupe not-italic font-semibold">Supplements, denen ich vertraue.</em>
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* Rabattcode, Affiliate & Tabs */}
      <section className="section-padding bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-3 mb-10">
            <div className="flex items-center gap-3 bg-taupe/15 border border-taupe/30 rounded-card p-4">
              <Tag size={18} className="text-taupe flex-shrink-0" strokeWidth={1.5} />
              <p className="text-sm text-charcoal">
                <strong>Rabattcode:</strong>{" "}
                Spare mit dem Code{" "}
                <span className="inline-block font-mono font-bold text-taupe bg-white border border-taupe/40 rounded px-2 py-0.5 select-all">
                  {AFFILIATE.discountCode}
                </span>{" "}
                bei deiner Bestellung.
              </p>
            </div>
            <div className="flex gap-3 bg-blush/20 border border-blush/40 rounded-card p-4">
              <AlertCircle size={18} className="text-taupe flex-shrink-0 mt-0.5" strokeWidth={1.5} />
              <p className="text-sm text-charcoal">
                <strong>Affiliate-Hinweis:</strong> Die mit * gekennzeichneten Links sind
                Affiliate-Links. Wenn du über diese Links bestellst, erhalte ich eine kleine
                Provision, für dich entstehen keine Mehrkosten.{" "}
                Ich empfehle nur Produkte, die ich selbst täglich nutze und von Herzen weiterempfehle.
              </p>
            </div>
          </div>

          <motion.div
            variants={staggerContainer}
            initial={shouldReduceMotion ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
          >
            {/* Tab-Leiste */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-2 justify-center mb-8">
              {products.map((phase) => (
                <button
                  key={phase.phase}
                  onClick={() => setActiveTab(phase.phase)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
                    activeTab === phase.phase
                      ? "bg-taupe text-white border-taupe"
                      : "bg-white text-soft-gray border-taupe/30 hover:border-taupe hover:text-charcoal"
                  }`}
                >
                  {phase.phase}
                </button>
              ))}
            </motion.div>

            {/* Tab-Inhalt */}
            <AnimatePresence mode="wait">
              {products
                .filter((phase) => phase.phase === activeTab)
                .map((phase) => (
                  <motion.div
                    key={phase.phase}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    {phase.items.map((item) => (
                      <div
                        key={item.name}
                        className="bg-white rounded-card-lg p-5 shadow-sm border border-taupe/20"
                      >
                        <h4 className="font-semibold text-charcoal mb-2">{item.name}</h4>
                        <p className="text-sm text-soft-gray leading-relaxed mb-3">{item.desc}</p>
                        {item.note && (
                          <p className="text-xs text-taupe bg-taupe/10 rounded px-3 py-2 mb-3">
                            <strong>Wichtig:</strong> {item.note}
                          </p>
                        )}
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-semibold text-taupe hover:text-taupe/70 transition-colors"
                        >
                          <ExternalLink size={14} />
                          {item.linkLabel}
                        </a>
                      </div>
                    ))}
                  </motion.div>
                ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-taupe text-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={staggerContainer}
            initial={shouldReduceMotion ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
          >
            <motion.h2 variants={fadeInUp} className="font-serif text-3xl sm:text-4xl font-light mb-4">
              Supplements sind der erste Schritt.
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-white/70 mb-8">
              Du bekommst einen Fahrplan für jede Phase: die richtige Ernährung, die passenden Nährstoffe und alles, was dich und dein Baby wirklich stärkt.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link
                href="/#programme"
                className="inline-flex items-center justify-center font-semibold transition-all duration-200 px-8 py-4 text-base rounded-card-lg bg-white text-taupe hover:bg-cream shadow-sm"
              >
                Programme entdecken
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
