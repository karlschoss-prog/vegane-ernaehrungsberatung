"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Clock, ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { PROGRAMS } from "@/lib/constants";

export default function ProgramCards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="section-padding bg-sage-light/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial={shouldReduceMotion ? "visible" : "hidden"}
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-charcoal mb-3">
              Meine Programme
            </h2>
            <p className="text-soft-gray max-w-lg mx-auto">
              Ich begleite dich persönlich. Mit Fachwissen, echter Erfahrung und einem klaren Plan.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {/* Program 1 */}
            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-card-lg p-7 shadow-sm border border-sage-light hover:shadow-xl hover:border-sage-dark hover:-translate-y-1 transition-all duration-200 group cursor-pointer"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-sage-light text-sage-dark text-xs font-semibold rounded-full">
                  <Clock size={12} />
                  {PROGRAMS.schwangerschaft.duration}
                </span>
              </div>
              <h3 className="font-serif text-2xl font-semibold text-charcoal mb-3">
                {PROGRAMS.schwangerschaft.title}
              </h3>
              <ul className="space-y-2 mb-5">
                {[
                  "Individuelle Nährstoffanalyse & Supplement-Strategie",
                  "10–12 persönliche 1:1-Gespräche",
                  "WhatsApp-Support werktags",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-soft-gray">
                    <Check size={14} className="text-sage-dark flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mb-6">
                <span className="font-serif text-3xl font-semibold text-sage-dark">
                  {PROGRAMS.schwangerschaft.price}
                </span>
              </div>
              <Link
                href={PROGRAMS.schwangerschaft.slug}
                className="inline-flex items-center gap-2 text-sm font-semibold text-sage-dark group-hover:gap-3 transition-all"
              >
                Mehr erfahren <ArrowRight size={16} />
              </Link>
            </motion.div>

            {/* Program 2 */}
            <motion.div
              variants={fadeInUp}
              className="bg-blush/20 rounded-card-lg p-7 shadow-sm border border-blush/40 hover:shadow-xl hover:border-taupe/60 hover:-translate-y-1 transition-all duration-200 group cursor-pointer"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blush/40 text-taupe text-xs font-semibold rounded-full">
                  <Clock size={12} />
                  {PROGRAMS.beikost.duration}
                </span>
              </div>
              <h3 className="font-serif text-2xl font-semibold text-charcoal mb-3">
                {PROGRAMS.beikost.title}
              </h3>
              <ul className="space-y-2 mb-5">
                {[
                  "Individueller Beikostplan abgestimmt auf dein Kind",
                  "8–10 persönliche 1:1-Gespräche",
                  "WhatsApp-Support werktags",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-soft-gray">
                    <Check size={14} className="text-taupe flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mb-6">
                <span className="font-serif text-3xl font-semibold text-taupe">
                  {PROGRAMS.beikost.price}
                </span>
              </div>
              <Link
                href={PROGRAMS.beikost.slug}
                className="inline-flex items-center gap-2 text-sm font-semibold text-taupe group-hover:gap-3 transition-all"
              >
                Mehr erfahren <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
