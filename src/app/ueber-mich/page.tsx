"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Award, BookOpen, Heart, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { staggerContainer, fadeInUp, slideInFromLeft, slideInFromRight } from "@/lib/animations";
import { SITE, AFFILIATE } from "@/lib/constants";
import Button from "@/components/ui/Button";

const qualifications = [
  {
    icon: Award,
    title: "Zertifizierte vegane Ernährungsberaterin",
    sub: "ecodemy – staatlich geprüft, ZFU-zugelassen · DQR-Niveau 5",
  },
  {
    icon: BookOpen,
    title: "Fachfortbildung: Vegane Ernährung für Mutter & Kind",
    sub: "ecodemy – staatlich geprüft, ZFU-zugelassen",
  },
  {
    icon: BookOpen,
    title: "Fachfortbildung: Darmgesundheit & Nahrungsmittelunverträglichkeiten",
    sub: "ecodemy – staatlich geprüft, ZFU-zugelassen",
  },
  {
    icon: Heart,
    title: "Selbst Mama",
    sub: "Vegan durch Schwangerschaft, Stillzeit und Beikost",
  },
];

export default function UeberMichPage() {
  const heroRef = useRef(null);
  const qualiRef = useRef(null);
  const whyRef = useRef(null);
  const ansatzRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const isQualiInView = useInView(qualiRef, { once: true, margin: "-10%" });
  const isWhyInView = useInView(whyRef, { once: true, margin: "-10%" });
  const isAnsatzInView = useInView(ansatzRef, { once: true, margin: "-10%" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={heroRef}
            variants={staggerContainer}
            initial={shouldReduceMotion ? "visible" : "hidden"}
            animate={isHeroInView ? "visible" : "hidden"}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          >
            {/* Image */}
            <motion.div variants={slideInFromLeft} className="flex justify-center">
              <div
                className="relative w-80 h-96 rounded-card-lg overflow-hidden shadow-md"
                style={{ boxShadow: "0 20px 60px rgba(91,122,94,0.15)" }}
              >
                <Image
                  src="/christin.jpg"
                  alt="Christin Schoß – Zertifizierte vegane Ernährungsberaterin"
                  fill
                  className="object-cover object-top"
                  sizes="320px"
                  priority
                />
              </div>
            </motion.div>

            {/* Text */}
            <motion.div variants={slideInFromRight}>
              <motion.p variants={fadeInUp} className="text-sm font-semibold uppercase tracking-widest text-taupe mb-3">
                Über mich
              </motion.p>
              <motion.h1 variants={fadeInUp} className="font-serif text-4xl sm:text-5xl font-light text-charcoal mb-5 leading-snug">
                Ernährungsberaterin aus Leidenschaft. Mama aus vollem Herzen.
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-soft-gray leading-relaxed">
                Zertifizierte vegane Ernährungsberaterin, Mama einer kleinen Tochter und
                leidenschaftlich dafür, dass du deine Schwangerschaft und die Zeit danach vegan und sicher erleben kannst.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Meine Geschichte */}
      <section className="section-padding bg-sage-light/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={whyRef}
            variants={staggerContainer}
            initial={shouldReduceMotion ? "visible" : "hidden"}
            animate={isWhyInView ? "visible" : "hidden"}
          >
            <motion.h2 variants={fadeInUp} className="font-serif text-3xl sm:text-4xl font-light text-charcoal mb-8">
              Meine Geschichte
            </motion.h2>
            <motion.div variants={fadeInUp} className="space-y-5 text-soft-gray leading-relaxed">
              <p>
                Vor ein paar Jahren war ich an einem Punkt, an dem ich nicht mehr weiterwusste. Mein
                Körper war komplett übersäuert. Ich war erschöpft, hatte ständig Beschwerden und
                kein Arzt konnte mir wirklich helfen.
              </p>
              <p>
                Also habe ich angefangen, selbst zu recherchieren. Ich habe wissenschaftliche Studien
                gelesen, Fachberichte durchgearbeitet, Bücher gewälzt. Alles, was ich finden konnte.
                Und irgendwann habe ich verstanden: Die Antwort lag in meiner Ernährung.
              </p>
              <p>
                Die Umstellung auf eine vollwertige pflanzliche Ernährung hat alles verändert. Nicht über Nacht,
                aber Schritt für Schritt. Und mit diesem Wendepunkt wuchs in mir der Wunsch, das Warum
                dahinter wirklich zu verstehen. Nicht nur für mich, sondern um anderen helfen zu
                können.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Qualifikationen */}
      <section className="section-padding bg-cream" ref={qualiRef}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial={shouldReduceMotion ? "visible" : "hidden"}
            animate={isQualiInView ? "visible" : "hidden"}
          >
            <motion.h2 variants={fadeInUp} className="font-serif text-3xl sm:text-4xl font-light text-charcoal mb-4 text-center">
              Meine Qualifikationen
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
              {qualifications.map((q) => (
                <motion.div
                  key={q.title}
                  variants={fadeInUp}
                  className="flex gap-4 bg-white rounded-card p-5 shadow-sm border border-sage-light/50"
                >
                  <div className="w-10 h-10 rounded-full bg-sage-light flex items-center justify-center flex-shrink-0">
                    <q.icon size={18} className="text-sage-dark" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal text-sm leading-snug">{q.title}</p>
                    <p className="text-xs text-soft-gray mt-1">{q.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.p variants={fadeInUp} className="text-soft-gray leading-relaxed mt-8 max-w-2xl mx-auto text-center">
              Als ich erfuhr, dass ich schwanger bin, vertiefte ich mein Wissen noch einmal. Denn
              in der Schwangerschaft zählt Ernährung mehr als in jeder anderen Phase, und ich wollte
              alles dafür tun, dass mein Baby optimal versorgt ist.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Social Media */}
      <section className="section-padding bg-sage-light/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial={shouldReduceMotion ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
          >
            <motion.h2 variants={fadeInUp} className="font-serif text-3xl sm:text-4xl font-light text-charcoal mb-4">
              Folge mir auf Social Media
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-soft-gray leading-relaxed mb-8">
              Auf Instagram, TikTok und YouTube teile ich jede Woche neuen Content rund um vegane
              Ernährung, Schwangerschaft, Beikost und das Leben mit einem kleinen Kind. Praxisnah,
              wissenschaftlich fundiert und aus meinem eigenen Alltag. Folge mir gerne, wenn du
              keine Beiträge verpassen möchtest.
            </motion.p>
            <motion.div variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: "Instagram", handle: SITE.instagramHandle, href: SITE.instagram, bg: "bg-sage-light/60" },
                { label: "TikTok", handle: SITE.tiktokHandle, href: SITE.tiktok, bg: "bg-blush/30" },
                { label: "YouTube", handle: SITE.youtubeHandle, href: SITE.youtube, bg: "bg-taupe/10" },
              ].map((s) => (
                <motion.a
                  key={s.label}
                  variants={fadeInUp}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex flex-col gap-2 rounded-card-lg p-5 border border-sage-light ${s.bg} hover:shadow-md transition-all`}
                >
                  <p className="text-xs font-semibold uppercase tracking-widest text-soft-gray">{s.label}</p>
                  <p className="font-semibold text-charcoal leading-snug">{s.handle}</p>
                  <span className="inline-flex items-center gap-1 text-xs text-sage-dark font-semibold mt-auto group-hover:gap-2 transition-all">
                    Jetzt folgen <ArrowRight size={12} />
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mein Ansatz */}
      <section className="section-padding bg-cream" ref={ansatzRef}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial={shouldReduceMotion ? "visible" : "hidden"}
            animate={isAnsatzInView ? "visible" : "hidden"}
          >
            <motion.h2 variants={fadeInUp} className="font-serif text-3xl sm:text-4xl font-light text-charcoal mb-6">
              Warum ich das mache
            </motion.h2>
            <motion.div variants={fadeInUp} className="space-y-5 text-soft-gray leading-relaxed mb-8">
              <p>
                Heute bin ich Mama einer gesunden Tochter, vegan von Anfang an. Meine Schwangerschaft
                war eine der schönsten Zeiten meines Lebens, weil ich sie ohne Angst und ohne
                Unsicherheit erleben durfte.
              </p>
              <p>
                Genau dieses Gefühl möchte ich dir weitergeben: die Sicherheit, dass du und dein
                Baby gut versorgt seid. Keine Pauschalratschläge, sondern eine Beratung, die wirklich
                zu dir passt. Wissenschaftlich fundiert, persönlich und von jemandem, der es selbst
                durchlebt hat.
              </p>
              <p>
                Vegane Ernährung ist nicht mein Job, es ist mein Alltag. Ich lese Studien, tausche
                mich mit Experten aus, erstelle Content. Und ich erlebe täglich, wie viel Sicherheit
                das richtige Wissen geben kann.
              </p>
              <p>
                Das gilt für mich ganzheitlich, vom Teller bis zur Pflege. Deshalb vertraue ich
                auch bei Kosmetik auf frische, vegane Produkte von{" "}
                <a
                  href={AFFILIATE.ringana}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sage-dark underline underline-offset-2 hover:text-sage transition-colors"
                >
                  Ringana
                </a>
                .
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white rounded-card-lg p-6 border border-sage-light shadow-sm mb-8">
              <h3 className="font-serif text-xl font-semibold text-charcoal mb-3">Mein Ansatz</h3>
              <p className="text-soft-gray leading-relaxed mb-3">
                Keine schnellen Tipps, keine Pauschalpläne. Jede Frau, jeder Körper, jede
                Schwangerschaft ist anders, deshalb arbeite ich nur 1:1 und mit wenigen Kundinnen
                gleichzeitig.
              </p>
              <p className="text-soft-gray leading-relaxed">
                Meine Programme sind intensiv, weil echte Veränderung Zeit braucht. Wir erarbeiten
                gemeinsam eine Strategie, die zu deinem Leben passt. Nicht perfekt, nicht kompliziert,
                sondern machbar und sicher.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <p className="text-charcoal mb-5">
                Im kostenlosen Erstgespräch schauen wir gemeinsam, was für dich der richtige Weg
                ist. Kein Druck, keine Verpflichtung.
              </p>
              <Button href={SITE.calendly} size="lg" external>
                Kostenloses Erstgespräch buchen
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
