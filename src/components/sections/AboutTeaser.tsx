"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { staggerContainer, slideInFromLeft, slideInFromRight } from "@/lib/animations";

export default function AboutTeaser() {
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
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* Image */}
          <motion.div variants={slideInFromLeft} className="flex justify-center md:justify-start">
            <div
              className="relative w-72 h-80 md:w-80 md:h-96 rounded-card-lg overflow-hidden shadow-md"
              style={{ boxShadow: "0 12px 40px rgba(91,122,94,0.12)" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/vegane-ernaehrungsberatung/christin.jpg"
                alt="Christin Schoß – Zertifizierte vegane Ernährungsberaterin"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div variants={slideInFromRight}>
            <p className="text-sm font-semibold uppercase tracking-widest text-taupe mb-3">
              Über mich
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-charcoal mb-5 leading-snug">
              Hi, ich bin Christin
            </h2>
            <p className="text-soft-gray leading-relaxed mb-4">
              Zertifizierte vegane Ernährungsberaterin, Mama einer kleinen Tochter und
              leidenschaftlich dafür, dass du deine Schwangerschaft und die Zeit danach vegan und sicher erleben kannst.
            </p>
            <p className="text-soft-gray leading-relaxed mb-6">
              Ich bin zur veganen Ernährung gekommen, weil mein Körper komplett übersäuert war und
              mir niemand helfen konnte. Was ich gefunden habe, hat alles verändert. Heute gebe ich
              dieses Wissen weiter: fundiert, individuell und mit dem Verständnis einer Mutter, die
              den Weg selbst gegangen ist.
            </p>
            <Link
              href="/ueber-mich"
              className="inline-flex items-center gap-2 font-semibold text-sage-dark hover:gap-3 transition-all"
            >
              Mehr über mich erfahren <ArrowRight size={16} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
