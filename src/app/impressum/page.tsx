import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  robots: { index: false, follow: false },
};

export default function ImpressumPage() {
  return (
    <section className="section-padding bg-cream">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-4xl font-light text-charcoal mb-10">Impressum</h1>

        <div className="prose prose-sm max-w-none text-charcoal space-y-8">
          <div>
            <h2 className="font-serif text-xl font-semibold text-charcoal mb-3">Angaben gemäß § 5 TMG</h2>
            <p className="text-soft-gray leading-relaxed">
              Christin Schoß<br />
              [Straße und Hausnummer]<br />
              [PLZ] [Ort]<br />
              Deutschland
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-charcoal mb-3">Kontakt</h2>
            <p className="text-soft-gray leading-relaxed">
              E-Mail: hallo@christinschoss.de
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-charcoal mb-3">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
            <p className="text-soft-gray leading-relaxed">
              Berufsbezeichnung: Zertifizierte vegane Ernährungsberaterin<br />
              Zertifizierung: ecodemy – staatlich zugelassen durch die ZFU (Zentralstelle für
              Fernunterricht)<br />
              [Steuernummer / USt-IdNr. wird nachgereicht]
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-charcoal mb-3">Haftung für Inhalte</h2>
            <p className="text-soft-gray leading-relaxed">
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten
              nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
              Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
              Tätigkeit hinweisen.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-charcoal mb-3">Haftung für Links</h2>
            <p className="text-soft-gray leading-relaxed">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
              Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr
              übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder
              Betreiber der Seiten verantwortlich.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-charcoal mb-3">Urheberrecht</h2>
            <p className="text-soft-gray leading-relaxed">
              Die durch die Seitenbetreiberin erstellten Inhalte und Werke auf diesen Seiten
              unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung
              und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der
              schriftlichen Zustimmung der jeweiligen Autorin.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-charcoal mb-3">Hinweis zu Affiliate-Links</h2>
            <p className="text-soft-gray leading-relaxed">
              Diese Website enthält Affiliate-Links (gekennzeichnet mit *). Wenn du über diese Links
              einkaufst, erhalte ich eine kleine Provision – für dich entstehen keine Mehrkosten. Ich
              empfehle ausschließlich Produkte, die ich selbst nutze und von deren Qualität ich
              überzeugt bin.
            </p>
          </div>

          <div className="pt-4 border-t border-sage-light">
            <p className="text-xs text-soft-gray">Stand: März 2026</p>
          </div>
        </div>
      </div>
    </section>
  );
}
