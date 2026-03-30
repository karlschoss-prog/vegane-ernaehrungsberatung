"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import Button from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

export default function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-sage-dark py-20 md:py-28 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" aria-hidden="true" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial={shouldReduceMotion ? "visible" : "hidden"}
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-5 leading-snug"
          >
            Bereit, deine Schwangerschaft vegan und sicher zu erleben?
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
            Lass uns herausfinden, ob wir zusammenpassen und wie ich dich am besten unterstützen kann.
            <br />
            20 Minuten, kostenlos, unverbindlich.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Button
              href={SITE.calendly}
              size="lg"
              external
              className="!bg-white !text-sage-dark hover:!bg-cream hover:!text-sage-dark font-bold"
            >
              Jetzt Gespräch buchen
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
