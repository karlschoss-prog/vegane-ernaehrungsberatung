"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Award, Heart, Baby, Users } from "lucide-react";
import { fadeInUp } from "@/lib/animations";

const trustItems = [
  {
    icon: Award,
    title: "Zertifizierte Ernährungsberaterin",
    sub: "ecodemy · staatlich geprüft · DQR-Niveau 5",
  },
  {
    icon: Heart,
    title: "Schwangerschaft & Stillzeit",
    sub: "Fachfortbildung Mutter & Kind",
  },
  {
    icon: Baby,
    title: "Selbst Mama",
    sub: "Vegan durch Schwangerschaft und Stillzeit",
  },
  {
    icon: Users,
    title: "77.000+ Community",
    sub: "Auf Social Media",
  },
];

export default function TrustBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-sage-light py-10 md:py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={fadeInUp}
          initial={shouldReduceMotion ? "visible" : "hidden"}
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {trustItems.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 rounded-full bg-white/70 flex items-center justify-center shadow-sm mb-3">
                <item.icon size={22} className="text-sage-dark" strokeWidth={1.5} />
              </div>
              <p className="font-semibold text-charcoal text-sm leading-snug">{item.title}</p>
              <p className="text-xs text-soft-gray mt-0.5">{item.sub}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
