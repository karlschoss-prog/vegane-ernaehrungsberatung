"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Quote } from "lucide-react";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const testimonials = [
  {
    text: "Christin hat mir die Angst genommen, die ich durch all die kritischen Kommentare bekommen hatte. Ich bin jetzt in der 32. SSW und meine Blutwerte sind besser als je zuvor. Ich würde diese Beratung jeder veganen Schwangeren empfehlen.",
    name: "Laura M.",
    info: "32 Jahre, München",
  },
  {
    text: "Endlich jemand, der nicht pauschal abratet, sondern mit mir zusammen schaut, was ich wirklich brauche. Christin kennt die Studienlage und erklärt alles so, dass ich es wirklich verstehe. Das gibt so viel Sicherheit.",
    name: "Jana K.",
    info: "28 Jahre, Hamburg",
  },
  {
    text: "Den Beikoststart hätte ich ohne Christin nie so entspannt angegangen. Wir wussten zu jeder Zeit, was wir tun und warum. Und meine Tochter liebt ihr Essen. Danke für diese tolle Begleitung!",
    name: "Sarah T.",
    info: "31 Jahre, Berlin",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="section-padding bg-sage-light/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial={shouldReduceMotion ? "visible" : "hidden"}
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-charcoal mb-3">
              Echte Ergebnisse. Echte Worte.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-white rounded-card-lg p-6 shadow-sm border border-sage-light/50 flex flex-col"
              >
                <Quote size={24} className="text-sage/40 mb-4" />
                <p className="font-serif text-base italic text-charcoal leading-relaxed mb-5 flex-1">
                  {t.text}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-sage-light flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <circle cx="12" cy="8" r="4" stroke="#8BAB8D" strokeWidth="1.5" fill="none"/>
                      <path d="M4 20c0-4.418 3.582-8 8-8s8 3.582 8 8" stroke="#8BAB8D" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-charcoal">{t.name}</p>
                    <p className="text-xs text-soft-gray">{t.info}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
