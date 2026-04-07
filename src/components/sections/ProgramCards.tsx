"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Clock, ArrowRight, Check, Timer } from "lucide-react";
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
              Deine Begleitung
            </h2>
            <p className="text-soft-gray max-w-lg mx-auto">
              Kein allgemeines Ernährungswissen aus dem Internet. Sondern ein Plan, der genau auf dich und dein Baby abgestimmt ist.
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
                  "Du weißt genau, welche Supplements du wirklich brauchst",
                  "Begleitung von Anfang bis Ende der Schwangerschaft",
                  "Deine Fragen bleiben nicht lange unbeantwortet",
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
                  "Begleitung vom ersten Löffel bis zur gemeinsamen Mahlzeit",
                  "Deine Fragen bleiben nicht lange unbeantwortet",
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

          {/* Coming Soon Programs */}
          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto mt-6">
            {/* Coming Soon 1: Sicher stillen */}
            <div className="relative bg-white/60 rounded-card-lg p-7 border border-sage-light/50 overflow-hidden">
              <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]" aria-hidden="true" />
              <div className="relative">
                <div className="flex items-center gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-sage-light/60 text-sage-dark text-xs font-semibold rounded-full">
                    <Timer size={12} />
                    Demnächst verfügbar
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-semibold text-charcoal/60 mb-3">
                  Sicher stillen
                </h3>
                <p className="text-sm text-soft-gray/80 leading-relaxed mb-5">
                  Vegane Ernährung in der Stillzeit: optimal versorgt trotz erhöhtem Kalorienbedarf, weniger Heißhunger und mehr Energie für dich und dein Baby.
                </p>
                <Link
                  href="/kontakt#schreib-mir"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-sage-dark/70 hover:text-sage-dark hover:gap-3 transition-all"
                >
                  Auf Warteliste eintragen <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Coming Soon 2: Vegan & leicht */}
            <div className="relative bg-white/60 rounded-card-lg p-7 border border-blush/30 overflow-hidden">
              <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]" aria-hidden="true" />
              <div className="relative">
                <div className="flex items-center gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blush/30 text-taupe text-xs font-semibold rounded-full">
                    <Timer size={12} />
                    Demnächst verfügbar
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-semibold text-charcoal/60 mb-3">
                  Vegan & leicht
                </h3>
                <p className="text-sm text-soft-gray/80 leading-relaxed mb-5">
                  Vegan abnehmen nach der Schwangerschaft, nachhaltig, ohne Verzicht und mit einem Plan, der in deinen Alltag als Mama passt.
                </p>
                <Link
                  href="/kontakt#schreib-mir"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-taupe/70 hover:text-taupe hover:gap-3 transition-all"
                >
                  Auf Warteliste eintragen <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Supplements teaser */}
          <motion.div variants={fadeInUp} className="mt-10 max-w-4xl mx-auto">
            <Link
              href="/supplements"
              className="group flex flex-col sm:flex-row items-center justify-between gap-4 bg-white border border-sage-light rounded-card-lg px-6 py-5 shadow-sm hover:shadow-md hover:border-sage-dark transition-all"
            >
              <div className="text-center sm:text-left">
                <p className="font-semibold text-charcoal text-sm mb-0.5">Empfohlene Supplements</p>
                <p className="text-soft-gray text-xs">Welche Präparate ich in der Schwangerschaft wirklich empfehle, und warum.</p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-sage-dark whitespace-nowrap group-hover:gap-2.5 transition-all flex-shrink-0">
                Zur Übersicht <ArrowRight size={15} />
              </span>
            </Link>
          </motion.div>

          {/* Individual request hint */}
          <motion.div variants={fadeInUp} className="mt-6 text-center">
            <p className="text-soft-gray text-sm">
              Fragen oder ein anderes Anliegen?{" "}
              <Link
                href="/kontakt#schreib-mir"
                className="text-sage-dark font-semibold underline underline-offset-2 hover:text-charcoal transition-colors"
              >
                Schreib mir gerne.
              </Link>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
