"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/[FORMSPREE_ID]", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <CheckCircle size={48} className="text-sage mb-4" strokeWidth={1.5} />
        <h3 className="font-serif text-2xl font-semibold text-charcoal mb-2">
          Vielen Dank für deine Nachricht!
        </h3>
        <p className="text-soft-gray">Ich melde mich innerhalb von 48 Stunden bei dir.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1.5">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full px-4 py-3 border border-sage-light rounded-card bg-white text-charcoal placeholder:text-soft-gray/60 focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent transition-all"
          placeholder="Dein Name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1.5">
          E-Mail-Adresse
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full px-4 py-3 border border-sage-light rounded-card bg-white text-charcoal placeholder:text-soft-gray/60 focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent transition-all"
          placeholder="deine@email.de"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-1.5">
          Nachricht
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-3 border border-sage-light rounded-card bg-white text-charcoal placeholder:text-soft-gray/60 focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent transition-all resize-none"
          placeholder="Wie kann ich dir helfen?"
        />
      </div>
      <div className="flex items-start gap-3">
        <input
          id="dsgvo"
          name="dsgvo"
          type="checkbox"
          required
          className="mt-1 w-4 h-4 accent-sage rounded"
        />
        <label htmlFor="dsgvo" className="text-xs text-soft-gray leading-relaxed">
          Ich habe die{" "}
          <a href="/datenschutz" className="underline hover:text-sage transition-colors">
            Datenschutzerklärung
          </a>{" "}
          gelesen und stimme der Verarbeitung meiner Daten zur Beantwortung meiner Anfrage zu.
        </label>
      </div>
      {status === "error" && (
        <p className="text-sm text-red-600 bg-red-50 rounded-card px-3 py-2">
          Leider ist etwas schiefgegangen. Bitte versuche es erneut oder schreib mir direkt per E-Mail.
        </p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-sage text-white font-semibold rounded-card hover:bg-sage-dark transition-colors disabled:opacity-60"
      >
        <Send size={16} />
        {status === "sending" ? "Wird gesendet..." : "Nachricht senden"}
      </button>
    </form>
  );
}
