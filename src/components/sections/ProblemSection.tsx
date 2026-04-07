"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const quotes = [
  `„Bekommt dein Baby denn genug Nährstoffe?"`,
  `„Vegan in der Schwangerschaft? Das ist doch verantwortungslos!"`,
  `„Woher bekommst du denn Eisen, B12, Omega-3?"`,
  `„Und die Beikost? Geht das überhaupt vegan?"`,
];

export default function ProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="section-padding bg-cream relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(184,92,56,0.05) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial={shouldReduceMotion ? "visible" : "hidden"}
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <span className="font-script text-4xl text-taupe block mb-2">Kennst du das?</span>
            <p className="text-soft-gray max-w-xl mx-auto leading-relaxed">
              Du liebst deine vegane Ernährung, für dich, für dein Baby, für die Welt.
              <br />
              Aber kaum bist du schwanger, hagelt es Zweifel von allen Seiten:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {quotes.map((quote, i) => (
              <motion.div
                key={quote}
                variants={fadeInUp}
                className="bg-white border rounded-card-lg p-5 shadow-sm relative overflow-hidden"
                style={{ borderColor: "rgba(184,92,56,0.25)" }}
              >
                {/* Terracotta corner accent */}
                <div
                  className="absolute top-0 left-0 w-1 h-full rounded-l-card-lg"
                  style={{ background: i % 2 === 0 ? "#B85C38" : "#2E5C32", opacity: 0.5 }}
                  aria-hidden="true"
                />
                <p className="font-serif text-lg italic text-charcoal leading-relaxed pl-2">{quote}</p>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeInUp} className="max-w-2xl mx-auto text-center">
            <p className="text-soft-gray leading-relaxed mb-4">
              Ich kenne diese Sätze. Ich habe sie selbst gehört, von der Familie, von
              Freundinnen, manchmal sogar vom Arzt. Die Verunsicherung ist real. Und ich nehme
              sie ernst.
            </p>
            <p className="font-semibold text-charcoal leading-relaxed mb-3">
              Vegane Ernährung in der Schwangerschaft ist nicht nur möglich. Sie ist gut.
              <br />
              Richtig geplant versorgt sie dich und dein Baby mit allem, was ihr wirklich braucht.
            </p>
            <p className="font-script text-2xl text-sage-dark">
              Und genau diese Sicherheit gebe ich dir. ✦
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
