import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  robots: { index: false, follow: false },
};

export default function DatenschutzPage() {
  return (
    <section className="section-padding bg-cream">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-4xl font-light text-charcoal mb-10">Datenschutzerklärung</h1>

        <div className="space-y-8 text-soft-gray leading-relaxed">
          <div>
            <h2 className="font-serif text-xl font-semibold text-charcoal mb-3">1. Verantwortliche</h2>
            <p>
              Christin Schoß<br />
              [Adresse wird nachgereicht]<br />
              E-Mail: hallo@christinschoss.de
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-charcoal mb-3">2. Erhebung und Verarbeitung personenbezogener Daten</h2>
            <p className="mb-3">
              Personenbezogene Daten werden nur im Rahmen der technischen Notwendigkeit erhoben.
              Beim Aufruf dieser Website werden automatisch Informationen in Server-Logfiles
              gespeichert:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Browsertyp und -version</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer-URL</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse (anonymisiert)</li>
            </ul>
            <p className="mt-3">
              Diese Daten werden nicht mit anderen Datenquellen zusammengeführt. Rechtsgrundlage
              ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der technischen
              Bereitstellung der Website).
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-charcoal mb-3">3. Kontaktformular</h2>
            <p>
              Wenn du das Kontaktformular verwendest, werden die von dir angegebenen Daten (Name,
              E-Mail-Adresse, Nachricht) zur Bearbeitung deiner Anfrage verarbeitet. Rechtsgrundlage
              ist Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung). Die Daten werden nicht an Dritte
              weitergegeben und nach Erledigung deiner Anfrage gelöscht, sofern keine gesetzlichen
              Aufbewahrungspflichten bestehen.
            </p>
            <p className="mt-2">
              Das Kontaktformular wird über den Dienst Formspree (Formspree Inc., USA) übermittelt.
              Informationen zum Datenschutz: formspree.io/legal/privacy-policy
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-charcoal mb-3">4. Calendly</h2>
            <p>
              Für die Terminbuchung wird der Dienst Calendly (Calendly LLC, USA) eingebunden. Wenn
              du einen Termin buchst, gelten die Datenschutzbestimmungen von Calendly. Weitere
              Informationen: calendly.com/privacy
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-charcoal mb-3">5. Zahlungsabwicklung (Stripe)</h2>
            <p>
              Zahlungen werden über Stripe (Stripe Payments Europe Ltd.) abgewickelt. Dabei werden
              die zur Zahlungsabwicklung erforderlichen Daten an Stripe übertragen. Weitere
              Informationen: stripe.com/de/privacy
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-charcoal mb-3">6. Cookies</h2>
            <p>
              Diese Website verwendet technisch notwendige Cookies, die für den Betrieb der Seite
              erforderlich sind. Optionale Cookies (Analytics, Marketing) werden nur nach deiner
              ausdrücklichen Einwilligung gesetzt. Du kannst deine Einwilligung jederzeit
              widerrufen, indem du den Browser-Speicher (localStorage) löschst.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-charcoal mb-3">7. Affiliate-Links</h2>
            <p>
              Diese Website enthält Affiliate-Links zu Drittanbietern (Watson Nutrition). Beim
              Klick auf diese Links können technische Daten (IP-Adresse, Referrer) an den
              Drittanbieter übertragen werden. Dies geschieht auf Basis deiner Einwilligung
              gemäß Art. 6 Abs. 1 lit. a DSGVO.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-charcoal mb-3">8. Deine Rechte</h2>
            <p className="mb-3">Du hast folgende Rechte bezüglich deiner personenbezogenen Daten:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
              <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
              <li>Recht auf Löschung (Art. 17 DSGVO)</li>
              <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerspruchsrecht (Art. 21 DSGVO)</li>
            </ul>
            <p className="mt-3">
              Du hast außerdem das Recht, bei der zuständigen Datenschutzaufsichtsbehörde Beschwerde
              einzureichen.
            </p>
            <p className="mt-3">
              Für Anfragen zu deinen Rechten wende dich an: hallo@christinschoss.de
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-charcoal mb-3">9. WhatsApp</h2>
            <p>
              Du hast die Möglichkeit, mich über WhatsApp zu kontaktieren. WhatsApp wird betrieben
              von Meta Platforms Ireland Ltd., 4 Grand Canal Square, Grand Canal Harbour, Dublin 2,
              Irland. Wenn du eine Nachricht über WhatsApp sendest, werden deine Telefonnummer sowie
              der Inhalt deiner Nachricht von Meta verarbeitet. Es kann dabei zu einer Übermittlung
              von Daten in die USA kommen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO
              (Vertragsanbahnung bzw. Beantwortung deiner Anfrage). Die Nutzung von WhatsApp erfolgt
              freiwillig; alternativ steht dir das Kontaktformular auf dieser Website zur Verfügung.
              Weitere Informationen zum Datenschutz bei Meta: whatsapp.com/legal/privacy-policy
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-charcoal mb-3">10. Externe Links</h2>
            <p>
              Diese Website enthält Links zu Instagram und TikTok. Wenn du diese Links aufrufst,
              gelten die jeweiligen Datenschutzbestimmungen der Plattformen. Wir haben keinen
              Einfluss auf die Datenverarbeitung dieser Drittanbieter.
            </p>
          </div>

          <div className="pt-4 border-t border-sage-light">
            <p className="text-xs">Stand: März 2026</p>
          </div>
        </div>
      </div>
    </section>
  );
}
