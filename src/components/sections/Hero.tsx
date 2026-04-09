"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SITE } from "@/lib/constants";
import Button from "@/components/ui/Button";
import { fadeInUp, staggerContainer, slideInFromRight } from "@/lib/animations";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef(null);

  return (
    <section className="relative overflow-hidden bg-cream min-h-[92vh] flex items-center">

      {/* Large botanical branch – top right */}
      <svg
        className="absolute top-[-4%] right-[-6%] w-[48%] max-w-xl h-auto pointer-events-none"
        viewBox="0 0 420 520"
        fill="none"
        aria-hidden="true"
      >
        <path d="M360 20 C280 60 200 140 240 240 C280 340 380 320 360 430" stroke="#2E5C32" strokeWidth="2.5" fill="none" opacity="0.15"/>
        <path d="M240 240 C160 170 70 200 60 290 C50 380 160 400 240 240Z" fill="#2E5C32" opacity="0.1"/>
        <path d="M290 330 C210 290 130 330 120 410 C110 490 220 500 290 330Z" fill="#6BA46E" opacity="0.12"/>
        <path d="M310 130 C240 80 160 110 150 190 C140 270 240 275 310 130Z" fill="#C2D8C4" opacity="0.3"/>
        <path d="M370 65 C310 25 240 60 245 140 C250 215 330 205 370 65Z" fill="#2E5C32" opacity="0.12"/>
        <circle cx="240" cy="240" r="4" fill="#B85C38" opacity="0.4"/>
        <circle cx="290" cy="330" r="3" fill="#B85C38" opacity="0.35"/>
        <circle cx="150" cy="190" r="2.5" fill="#EDAE82" opacity="0.5"/>
      </svg>

      {/* Small organic blob – bottom left */}
      <svg
        className="absolute bottom-[-2%] left-[-4%] w-[28%] h-auto pointer-events-none"
        viewBox="0 0 240 240"
        fill="none"
        aria-hidden="true"
      >
        <path d="M30 90 C5 45 45 0 100 10 C155 20 175 75 155 130 C135 185 70 210 35 175 C8 148 42 112 30 90Z" fill="#B85C38" opacity="0.08"/>
      </svg>

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(46,92,50,0.06) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

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
            <motion.span
              variants={fadeInUp}
              className="font-script text-2xl text-taupe block mb-1"
            >
              Zertifizierte 1:1-Beratung ✦
            </motion.span>

            <motion.h1
              variants={fadeInUp}
              className="font-serif text-charcoal leading-none mb-6"
            >
              <span className="block text-5xl sm:text-7xl lg:text-8xl tracking-tight whitespace-nowrap">
                <span className="font-light">Vegan </span><span className="font-semibold text-sage-dark">schwanger.</span>
              </span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl font-light italic text-taupe mt-3 leading-snug">
                Sicher begleitet durch Schwangerschaft & Beikoststart.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-soft-gray leading-relaxed mb-8 max-w-lg"
            >
              Damit du weißt: Mein Baby bekommt alles, was es braucht.
              Und ich mache nichts falsch.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-3">
              <Button href={SITE.calendly} size="lg" external className="w-full sm:w-auto whitespace-nowrap">
                Kostenloses Erstgespräch buchen
              </Button>
              <Button href="/#programme" variant="ghost" size="lg" className="w-full sm:w-auto whitespace-nowrap">
                Programme entdecken
              </Button>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            variants={slideInFromRight}
            initial={shouldReduceMotion ? "visible" : "hidden"}
            animate="visible"
            transition={{ delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-full max-w-sm lg:max-w-md">
              {/* Organic blob behind image */}
              <div
                className="absolute inset-[-12%] rounded-[62%_38%_46%_54%/54%_46%_56%_44%] bg-sage-light/50 -z-10"
                aria-hidden="true"
              />

              {/* Photo container with organic border-radius */}
              <div
                className="relative overflow-hidden w-full"
                style={{
                  height: "520px",
                  borderRadius: "58% 42% 52% 48% / 48% 52% 48% 52%",
                  boxShadow: "0 24px 64px rgba(46,92,50,0.18)",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/vegane-ernaehrungsberatung/christin.jpg"
                  alt="Christin Schoß – Zertifizierte vegane Ernährungsberaterin"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Leaf accent top right */}
              <svg
                className="absolute -top-10 -right-6 w-20 h-20 pointer-events-none"
                viewBox="0 0 80 80"
                fill="none"
                aria-hidden="true"
              >
                <path d="M40 6 C58 6 72 22 68 40 C64 58 48 70 32 66 C16 62 6 46 12 30 C18 14 28 6 40 6Z" fill="#2E5C32" opacity="0.2"/>
                <path d="M40 6 L40 66" stroke="#FAF3E3" strokeWidth="1.2" opacity="0.6"/>
              </svg>

              {/* Terracotta dot accent */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-taupe/20 -z-10" aria-hidden="true"/>
              <div className="absolute -top-4 -left-6 w-14 h-14 rounded-full bg-blush/40 -z-10" aria-hidden="true"/>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom wave divider */}
      <svg
        className="absolute bottom-0 left-0 w-full pointer-events-none"
        viewBox="0 0 1440 48"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0 48 C360 0 720 48 1080 20 C1260 8 1380 32 1440 20 L1440 48 Z" fill="#C2D8C4" opacity="0.35"/>
      </svg>
    </section>
  );
}
