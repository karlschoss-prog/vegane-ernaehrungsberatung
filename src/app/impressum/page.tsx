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
              Hagenring 89<br />
              38106 Braunschweig<br />
              Deutschland
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-charcoal mb-3">Kontakt</h2>
            <p className="text-soft-gray leading-relaxed">
              Telefon: 0178 4558828<br />
              E-Mail: hallo@christinschoss.de
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-charcoal mb-3">Steuerliche Angaben</h2>
            <p className="text-soft-gray leading-relaxed">
              Steuernummer: 14/141/03031<br />
              Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: beantragt (wird nach Erteilung ergänzt)
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-charcoal mb-3">Berufsbezeichnung</h2>
            <p className="text-soft-gray leading-relaxed">
              Berufsbezeichnung: Zertifizierte vegane Ernährungsberaterin<br />
              Zertifizierung: ecodemy GmbH, staatlich zugelassen durch die ZFU (Zentralstelle für Fernunterricht), DQR-Niveau 5<br />
              <br />
              Hinweis: Die Berufsbezeichnung "Ernährungsberaterin" ist in Deutschland nicht gesetzlich geschützt und unterliegt keiner berufsrechtlichen Regelung durch eine Kammer oder Berufsordnung. Die Tätigkeit stellt keine Heilkunde im Sinne des Heilpraktikergesetzes dar.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-charcoal mb-3">Inhaltlich verantwortlich gemäß § 18 Abs. 2 MStV</h2>
            <p className="text-soft-gray leading-relaxed">
              Christin Schoß<br />
              Hagenring 89<br />
              38106 Braunschweig
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-charcoal mb-3">Haftung für Inhalte</h2>
            <p className="text-soft-gray leading-relaxed">
              Als Diensteanbieterin bin ich gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten
              nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG bin ich als
              Diensteanbieterin jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
              Tätigkeit hinweisen.
            </p>
            <p className="text-soft-gray leading-relaxed mt-2">
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
              allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch
              erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
              Bekanntwerden von entsprechenden Rechtsverletzungen werde ich diese Inhalte umgehend entfernen.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-charcoal mb-3">Haftung für Links</h2>
            <p className="text-soft-gray leading-relaxed">
              Mein Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen
              Einfluss habe. Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen.
              Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
              der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf
              mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
              Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten
              ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
              Bekanntwerden von Rechtsverletzungen werde ich derartige Links umgehend entfernen.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-charcoal mb-3">Urheberrecht</h2>
            <p className="text-soft-gray leading-relaxed">
              Die durch mich erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
              Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung
              außerhalb der Grenzen des Urheberrechts bedürfen meiner schriftlichen Zustimmung.
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch
              gestattet. Soweit die Inhalte auf dieser Seite nicht von mir erstellt wurden, werden die
              Urheberrechte Dritter beachtet. Solltest du trotzdem auf eine Urheberrechtsverletzung
              aufmerksam werden, bitte ich um einen entsprechenden Hinweis. Bei Bekanntwerden von
              Rechtsverletzungen werde ich derartige Inhalte umgehend entfernen.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-charcoal mb-3">Hinweis zu Affiliate-Links</h2>
            <p className="text-soft-gray leading-relaxed">
              Diese Website enthält Affiliate-Links (gekennzeichnet mit *). Wenn du über diese Links
              einkaufst, erhalte ich eine kleine Provision. Für dich entstehen keine Mehrkosten.
              Ich empfehle ausschließlich Produkte, die ich selbst nutze und von deren Qualität ich
              überzeugt bin.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-charcoal mb-3">Streitschlichtung</h2>
            <p className="text-soft-gray leading-relaxed">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sage-dark underline underline-offset-2 hover:text-sage transition-colors"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
              . Meine E-Mail-Adresse findest du oben im Impressum.
            </p>
            <p className="text-soft-gray leading-relaxed mt-2">
              Ich bin nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen (§ 36 VSBG).
            </p>
          </div>

          <div className="pt-4 border-t border-sage-light">
            <p className="text-xs text-soft-gray">Stand: April 2026</p>
          </div>

        </div>
      </div>
    </section>
  );
}
