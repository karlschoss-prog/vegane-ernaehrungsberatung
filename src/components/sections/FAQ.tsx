"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const faqs = [
  {
    q: "Ist eine vegane Schwangerschaft wirklich sicher?",
    a: "Ja, wenn die Nährstoffversorgung stimmt. Große Ernährungsgesellschaften wie die Academy of Nutrition and Dietetics bestätigen, dass eine gut geplante vegane Ernährung in allen Lebensphasen möglich ist, einschließlich Schwangerschaft und Stillzeit. Genau darum geht es in meiner Beratung: deine Versorgung individuell sicherzustellen.",
  },
  {
    q: "Ich bin erst im Kinderwunsch. Ist es zu früh für eine Beratung?",
    a: "Nein, im Gegenteil. Die Kinderwunschphase ist der ideale Zeitpunkt. Dein Körper bereitet sich auf die Schwangerschaft vor und eine optimale Nährstoffversorgung kann dabei einen großen Unterschied machen. Sprich mich einfach im Kennenlerngespräch darauf an.",
  },
  {
    q: "Was unterscheidet deine Beratung von kostenlosen Informationen im Internet?",
    a: "Im Internet findest du viele allgemeine Tipps, aber keine individuelle Strategie, die auf deine Blutwerte, deine Lebensumstände und deine Bedürfnisse zugeschnitten ist. In meiner Beratung bekommst du genau das: einen persönlichen Plan, der zu dir passt, mit laufender Begleitung und Anpassung.",
  },
  {
    q: "Wie laufen die Gespräche ab?",
    a: "Alle Gespräche finden online per Videocall statt. Du brauchst nur ein Handy oder einen Laptop. So bist du flexibel und kannst die Beratung bequem von zu Hause wahrnehmen, egal wo du wohnst.",
  },
  {
    q: "Was, wenn ich mir die Beratung gerade nicht leisten kann?",
    a: "Ich biete eine bequeme Ratenzahlung an, damit du die Investition auf mehrere Monate verteilen kannst. Im Kennenlerngespräch finden wir gemeinsam die beste Lösung für dich.",
  },
  {
    q: "Bietest du auch Einzelstunden an?",
    a: "Nein, ganz bewusst nicht. Eine vegane Schwangerschaft sicher zu begleiten erfordert Zeit, Tiefe und Kontinuität. Das lässt sich mit Einzelstunden nicht leisten. Meine Programme sind so aufgebaut, dass du über den gesamten Zeitraum optimal betreut bist.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-sage-light last:border-0">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between py-4 text-left gap-4 group"
        aria-expanded={open}
      >
        <span className="font-semibold text-charcoal group-hover:text-sage-dark transition-colors">
          {q}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex-shrink-0 text-sage"
        >
          <ChevronDown size={20} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-4 text-soft-gray leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="section-padding bg-cream">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial={shouldReduceMotion ? "visible" : "hidden"}
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={fadeInUp} className="text-center mb-10">
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-charcoal mb-3">
              Häufige Fragen
            </h2>
          </motion.div>
          <motion.div variants={fadeInUp} className="bg-white rounded-card-lg shadow-sm border border-sage-light/50 px-6 md:px-8 py-2">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
