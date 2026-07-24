"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Heart, Baby, Users } from "lucide-react";
import { fadeInUp } from "@/lib/animations";

export default function TrustBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative py-10 md:py-14 overflow-hidden" style={{ background: "linear-gradient(135deg, #2E5C32 0%, #1A2E1C 60%, #3D4A20 100%)" }}>
      {/* Decorative leaf hint */}
      <svg className="absolute right-0 top-0 h-full w-auto pointer-events-none opacity-[0.06]" viewBox="0 0 200 120" preserveAspectRatio="xMaxYMid meet" fill="none" aria-hidden="true">
        <path d="M180 10 C120 30 80 70 100 100 C120 130 180 110 180 10Z" fill="white"/>
        <path d="M160 40 C100 50 70 90 90 110" stroke="white" strokeWidth="1.5" fill="none"/>
      </svg>

      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          variants={fadeInUp}
          initial={shouldReduceMotion ? "visible" : "hidden"}
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {/* ecodemy Siegel */}
          <div className="flex flex-col items-center text-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/ecodemy-siegel-ausbildung-vegane-ernaehrungsberaterin-vea-150px-2x.png"
              alt="ecodemy Siegel – Zertifizierte vegane Ernährungsberaterin"
              className="mb-2 drop-shadow-md"
              style={{ height: "64px", width: "auto" }}
            />
            <p className="font-semibold text-sm leading-snug" style={{ color: "#FAF3E3" }}>Zertifizierte Ernährungsberaterin</p>
            <p className="text-xs mt-0.5" style={{ color: "rgba(250,243,227,0.6)" }}>staatlich geprüft · DQR-Niveau 5</p>
          </div>

          {/* Schwangerschaft & Stillzeit */}
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ background: "rgba(250,243,227,0.12)", border: "1px solid rgba(250,243,227,0.2)" }}>
              <Heart size={22} className="text-blush" strokeWidth={1.5} />
            </div>
            <p className="font-semibold text-sm leading-snug" style={{ color: "#FAF3E3" }}>Schwangerschaft & Stillzeit</p>
            <p className="text-xs mt-0.5" style={{ color: "rgba(250,243,227,0.6)" }}>Fachfortbildung Mutter & Kind</p>
          </div>

          {/* Selbst Mama */}
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ background: "rgba(250,243,227,0.12)", border: "1px solid rgba(250,243,227,0.2)" }}>
              <Baby size={22} className="text-blush" strokeWidth={1.5} />
            </div>
            <p className="font-semibold text-sm leading-snug" style={{ color: "#FAF3E3" }}>Selbst Mama</p>
            <p className="text-xs mt-0.5" style={{ color: "rgba(250,243,227,0.6)" }}>Vegan durch Schwangerschaft und Stillzeit</p>
          </div>

          {/* Community */}
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ background: "rgba(250,243,227,0.12)", border: "1px solid rgba(250,243,227,0.2)" }}>
              <Users size={22} className="text-blush" strokeWidth={1.5} />
            </div>
            <p className="font-semibold text-sm leading-snug" style={{ color: "#FAF3E3" }}>77.000+ Community</p>
            <p className="text-xs mt-0.5" style={{ color: "rgba(250,243,227,0.6)" }}>Instagram & TikTok</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
