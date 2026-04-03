"use client";

import { useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Calendar, Check } from "lucide-react";

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TikTokIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.15 8.15 0 0 0 4.76 1.52V6.77a4.85 4.85 0 0 1-1-.08z" />
    </svg>
  );
}

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.534 5.858L.054 23.486a.75.75 0 0 0 .918.919l5.734-1.493A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.686-.523-5.211-1.431l-.374-.224-3.862 1.006 1.017-3.754-.245-.389A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  );
}

function YouTubeIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.54 3.5 12 3.5 12 3.5s-7.54 0-9.38.55A3.02 3.02 0 0 0 .5 6.19C0 8.04 0 12 0 12s0 3.96.5 5.81a3.02 3.02 0 0 0 2.12 2.14C4.46 20.5 12 20.5 12 20.5s7.54 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14C24 15.96 24 12 24 12s0-3.96-.5-5.81zM9.75 15.5v-7l6.5 3.5-6.5 3.5z" />
    </svg>
  );
}
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { SITE, STRIPE } from "@/lib/constants";
import Button from "@/components/ui/Button";
import ContactForm from "@/components/forms/ContactForm";

export default function KontaktPage() {
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (window.location.hash === "#schreib-mir") {
      setTimeout(() => {
        document.getElementById("schreib-mir")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-sage-light/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={staggerContainer}
            initial={shouldReduceMotion ? "visible" : "hidden"}
            animate="visible"
          >
            <motion.h1 variants={fadeInUp} className="font-serif text-4xl sm:text-5xl font-light text-charcoal mb-4">
              Ich freue mich auf dich.
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-soft-gray text-lg max-w-xl mx-auto">
              Du hast Fragen, möchtest mehr über meine Programme erfahren oder bist bereit zu
              starten? Ich freue mich, von dir zu hören.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Kostenloses Kennenlerngespräch */}
      <section className="section-padding bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial={shouldReduceMotion ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-sage-light flex items-center justify-center">
                <Calendar size={18} className="text-sage-dark" strokeWidth={1.5} />
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-light text-charcoal">
                Kostenloses Kennenlerngespräch
              </h2>
            </motion.div>
            <motion.p variants={fadeInUp} className="text-soft-gray mb-6 max-w-2xl">
              In unserem kostenlosen 20-minütigen Kennenlerngespräch erzählst du mir, wo du gerade
              stehst und wir schauen gemeinsam, wie ich dich am besten begleiten kann. Persönlich,
              unverbindlich und ganz ohne Druck.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button href={SITE.calendly} size="lg" external>
                Jetzt Termin vereinbaren
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Direkt buchen */}
      <section className="section-padding bg-sage-light/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial={shouldReduceMotion ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
          >
            <motion.h2 variants={fadeInUp} className="font-serif text-2xl sm:text-3xl font-light text-charcoal mb-3">
              Direkt buchen
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-soft-gray mb-7">
              Starte noch heute, für eine sichere, gesunde Schwangerschaft und ein Leben, in dem du
              dich und dein Baby wirklich gut versorgt weißt.
            </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <motion.div variants={fadeInUp} className="bg-white rounded-card-lg p-6 border border-sage-light shadow-sm hover:shadow-xl hover:border-sage-dark hover:-translate-y-1 transition-all duration-200 cursor-pointer">
                <h3 className="font-serif text-xl font-semibold text-charcoal mb-2">
                  Sichere Schwangerschaft
                </h3>
                <p className="text-soft-gray text-sm mb-1">1.497 € oder 3 Raten à 529 €</p>
                <ul className="space-y-1.5 my-4">
                  {[
                    "Individuelle Nährstoffanalyse & Supplement-Strategie",
                    "10–12 persönliche 1:1-Gespräche",
                    "WhatsApp-Support werktags",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-soft-gray">
                      <Check size={13} className="text-sage-dark flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button href={STRIPE.schwangerschaft} size="sm" external>
                  Programm buchen
                </Button>
              </motion.div>
              <motion.div variants={fadeInUp} className="bg-white rounded-card-lg p-6 border border-blush/40 shadow-sm hover:shadow-xl hover:border-taupe/60 hover:-translate-y-1 transition-all duration-200 cursor-pointer">
                <h3 className="font-serif text-xl font-semibold text-charcoal mb-2">
                  Sicherer Beikoststart
                </h3>
                <p className="text-soft-gray text-sm mb-1">997 € oder 2 Raten à 529 €</p>
                <ul className="space-y-1.5 my-4">
                  {[
                    "Individueller Beikostplan abgestimmt auf dein Kind",
                    "8–10 persönliche 1:1-Gespräche",
                    "WhatsApp-Support werktags",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-soft-gray">
                      <Check size={13} className="text-taupe flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button href={STRIPE.beikost} size="sm" variant="secondary" external>
                  Programm buchen
                </Button>
              </motion.div>
            </div>
            <motion.div
              variants={fadeInUp}
              initial={shouldReduceMotion ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              className="mt-8 text-center"
            >
              <p className="text-soft-gray text-sm">
                Fragen oder ein anderes Anliegen?{" "}
                <a href="#schreib-mir" className="text-sage-dark font-semibold underline underline-offset-2 hover:text-charcoal transition-colors">
                  Schreib mir gerne.
                </a>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Kontaktformular + Alternativ */}
      <section id="schreib-mir" className="section-padding bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              variants={staggerContainer}
              initial={shouldReduceMotion ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
            >
              <motion.h2 variants={fadeInUp} className="font-serif text-2xl sm:text-3xl font-light text-charcoal mb-3">
                Schreib mir
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-soft-gray mb-6 text-sm">
                Du hast eine allgemeine Frage, die kein Gespräch erfordert? Schreib mir gerne, ich
                melde mich innerhalb von 48 Stunden.
              </motion.p>
              <motion.div variants={fadeInUp}>
                <ContactForm />
              </motion.div>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial={shouldReduceMotion ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              className="lg:pt-14"
            >
              <motion.h2 variants={fadeInUp} className="font-serif text-2xl font-light text-charcoal mb-5">
                Alternativ erreichst du mich
              </motion.h2>
              <div className="space-y-4">
                <motion.a
                  variants={fadeInUp}
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-white rounded-card border border-sage-light shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div className="w-10 h-10 rounded-full bg-sage-light flex items-center justify-center group-hover:bg-sage/20 transition-colors">
                    <WhatsAppIcon size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-soft-gray">WhatsApp</p>
                    <p className="font-medium text-charcoal">Schreib mir direkt</p>
                  </div>
                </motion.a>
                <motion.a
                  variants={fadeInUp}
                  href={SITE.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-white rounded-card border border-sage-light shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div className="w-10 h-10 rounded-full bg-sage-light flex items-center justify-center group-hover:bg-sage/20 transition-colors">
                    <InstagramIcon size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-soft-gray">Instagram</p>
                    <p className="font-medium text-charcoal">{SITE.instagramHandle}</p>
                  </div>
                </motion.a>
                <motion.a
                  variants={fadeInUp}
                  href={SITE.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-white rounded-card border border-sage-light shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div className="w-10 h-10 rounded-full bg-sage-light flex items-center justify-center group-hover:bg-sage/20 transition-colors">
                    <TikTokIcon size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-soft-gray">TikTok</p>
                    <p className="font-medium text-charcoal">{SITE.tiktokHandle}</p>
                  </div>
                </motion.a>
                <motion.a
                  variants={fadeInUp}
                  href={SITE.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-white rounded-card border border-sage-light shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div className="w-10 h-10 rounded-full bg-sage-light flex items-center justify-center group-hover:bg-sage/20 transition-colors">
                    <YouTubeIcon size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-soft-gray">YouTube</p>
                    <p className="font-medium text-charcoal">{SITE.youtubeHandle}</p>
                  </div>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
