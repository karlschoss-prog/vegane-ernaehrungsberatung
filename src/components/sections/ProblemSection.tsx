"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const quotes = [
  `„Bekommt dein Baby denn genug Nährstoffe?"`,
  `„Vegan in der Schwangerschaft? Das ist doch verantwortungslos!"`,
  `„Woher bekommst du denn Eisen, B12, Omega-3?"`,
  `„Und was ist mit der Beikost – geht das überhaupt vegan?"`,
];

export default function ProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="section-padding bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial={shouldReduceMotion ? "visible" : "hidden"}
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light italic text-charcoal mb-4">
              Kennst du das?
            </h2>
            <p className="text-soft-gray max-w-xl mx-auto leading-relaxed">
              Du liebst deine vegane Ernährung – für dich, für dein Baby, für die Welt.
              <br />
              Aber kaum bist du schwanger, hagelt es Zweifel von allen Seiten:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {quotes.map((quote) => (
              <motion.div
                key={quote}
                variants={fadeInUp}
                className="bg-white border border-blush/50 rounded-card-lg p-5 shadow-sm"
              >
                <p className="font-serif text-lg italic text-charcoal leading-relaxed">{quote}</p>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeInUp} className="max-w-2xl mx-auto text-center">
            <p className="text-soft-gray leading-relaxed mb-4">
              Ich kenne diese Sätze. Ich habe sie selbst gehört – von der Familie, von
              Freundinnen, manchmal sogar vom Arzt. Die Verunsicherung ist real. Und ich nehme
              sie ernst.
            </p>
            <p className="font-semibold text-charcoal leading-relaxed mb-3">
              Vegane Ernährung in der Schwangerschaft ist nicht nur möglich, sondern gut.
              <br />
              Gut geplant versorgt sie dich und dein Kind mit allem, was ihr braucht.
            </p>
            <p className="font-semibold text-sage-dark text-lg">
              Und genau diese Sicherheit gebe ich dir.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
