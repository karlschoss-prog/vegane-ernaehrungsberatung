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
    <section
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #1A2E1C 0%, #2E5C32 50%, #3D4A20 100%)" }}
    >
      {/* Large botanical background shape */}
      <svg className="absolute left-[-5%] top-[-10%] w-[40%] h-auto pointer-events-none opacity-[0.07]" viewBox="0 0 300 400" fill="none" aria-hidden="true">
        <path d="M150 20 C230 20 290 90 280 180 C270 270 200 340 130 360 C60 380 10 310 20 220 C30 130 80 20 150 20Z" fill="white"/>
        <path d="M150 20 L150 360" stroke="white" strokeWidth="2" fill="none"/>
        <path d="M150 120 C110 90 70 110 60 160" stroke="white" strokeWidth="1.5" fill="none"/>
        <path d="M150 200 C200 170 230 190 240 240" stroke="white" strokeWidth="1.5" fill="none"/>
      </svg>

      <svg className="absolute right-[-3%] bottom-[-5%] w-[28%] h-auto pointer-events-none opacity-[0.06]" viewBox="0 0 200 250" fill="none" aria-hidden="true">
        <path d="M100 10 C160 10 200 70 190 140 C180 210 130 250 70 240 C10 230 -10 170 10 100 C30 30 60 10 100 10Z" fill="white"/>
      </svg>

      {/* Terracotta accent circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full opacity-[0.04]" style={{ background: "radial-gradient(circle, #B85C38 0%, transparent 60%)" }} aria-hidden="true"/>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial={shouldReduceMotion ? "visible" : "hidden"}
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          <motion.span variants={fadeInUp} className="font-script text-3xl text-blush block mb-3">
            bereit?
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-cream mb-5 leading-snug"
          >
            Bereit, deine Schwangerschaft
            <br />
            <em className="font-semibold not-italic" style={{ color: "#C2D8C4" }}>vegan und sicher</em> zu erleben?
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg mb-10 max-w-xl mx-auto" style={{ color: "rgba(250,243,227,0.65)" }}>
            Lass uns herausfinden, ob wir zusammenpassen und wie ich dich am besten unterstützen kann.
            <br />
            20 Minuten, kostenlos, unverbindlich.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Button
              href={SITE.calendly}
              size="lg"
              external
              className="!bg-cream !text-sage-dark hover:!bg-blush hover:!text-charcoal font-bold shadow-xl"
            >
              Jetzt Gespräch buchen
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
