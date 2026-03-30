"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SITE } from "@/lib/constants";
import Button from "@/components/ui/Button";
import { fadeInUp, staggerContainer, slideInFromRight } from "@/lib/animations";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef(null);

  const animate = shouldReduceMotion ? "visible" : undefined;

  return (
    <section className="relative overflow-hidden bg-cream min-h-[90vh] flex items-center">
      {/* Organic SVG blob background */}
      <div className="absolute top-0 right-0 w-[55%] h-full pointer-events-none opacity-30" aria-hidden="true">
        <svg viewBox="0 0 600 700" fill="none" className="w-full h-full">
          <path
            d="M400 50 C550 80 620 200 600 350 C580 500 480 620 350 650 C220 680 80 600 50 450 C20 300 100 100 250 60 C320 42 380 36 400 50Z"
            fill="#D4E4D5"
          />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 w-[30%] h-1/2 pointer-events-none opacity-20" aria-hidden="true">
        <svg viewBox="0 0 300 300" fill="none" className="w-full h-full">
          <path
            d="M80 20 C180 0 280 80 270 180 C260 280 160 320 80 300 C0 280 -20 180 20 100 C40 60 50 32 80 20Z"
            fill="#E8C4B8"
          />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            ref={ref}
            variants={staggerContainer}
            initial={shouldReduceMotion ? "visible" : "hidden"}
            animate="visible"
            className="order-2 lg:order-1"
          >
            <motion.p
              variants={fadeInUp}
              className="text-sm font-semibold uppercase tracking-widest text-taupe mb-4"
            >
              Vegane Ernährungsberatung · 1:1
            </motion.p>
            <motion.h1
              variants={fadeInUp}
              className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-charcoal leading-tight mb-6"
            >
              Vegan schwanger –{" "}
              <em className="text-sage-dark not-italic font-semibold">sicher versorgt.</em>
              <br />
              Für dich und dein{"\u00A0"}Baby.
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-soft-gray leading-relaxed mb-8 max-w-lg"
            >
              Individuelle Ernährungsberatung für werdende und stillende Mütter, die bei der
              veganen Ernährung nichts dem Zufall überlassen wollen.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-3">
              <Button href={SITE.calendly} size="lg" external className="w-full sm:w-auto">
                Kostenloses Kennenlerngespräch buchen
              </Button>
              <Button href="/sichere-schwangerschaft" variant="ghost" size="lg" className="w-full sm:w-auto">
                Programme entdecken
              </Button>
            </motion.div>
          </motion.div>

          {/* Image Placeholder */}
          <motion.div
            variants={slideInFromRight}
            initial={shouldReduceMotion ? "visible" : "hidden"}
            animate="visible"
            transition={{ delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-full max-w-sm lg:max-w-md">
              <div
                className="aspect-[3/4] rounded-card-lg overflow-hidden bg-sage-light flex items-center justify-center"
                style={{ boxShadow: "0 20px 60px rgba(91,122,94,0.15)" }}
              >
                <div className="text-center p-8">
                  <div className="w-24 h-24 rounded-full bg-sage/20 mx-auto mb-4 flex items-center justify-center">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
                      <circle cx="24" cy="16" r="10" stroke="#8BAB8D" strokeWidth="1.5" fill="none"/>
                      <path d="M8 42c0-8.837 7.163-16 16-16s16 7.163 16 16" stroke="#8BAB8D" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <p className="font-serif text-sage-dark text-sm italic">[Foto Christin]</p>
                  <p className="text-xs text-soft-gray mt-1">Wird nachgereicht</p>
                </div>
              </div>
              {/* Decorative taupe accent */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-taupe/20 -z-10" aria-hidden="true" />
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-blush/30 -z-10" aria-hidden="true" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
