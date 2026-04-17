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

          {/* 1. Verantwortliche */}
          <div>
            <h2 className="font-serif text-xl font-semibold text-charcoal mb-3">1. Verantwortliche Person</h2>
            <p>
              Christin Schoß<br />
              Hagenring 89<br />
              38106 Braunschweig<br />
              Deutschland<br />
              E-Mail: info@christinschoss.com
            </p>
          </div>

          {/* 2. Hosting */}
          <div>
            <h2 className="font-serif text-xl font-semibold text-charcoal mb-3">2. Hosting</h2>
            <p>
              Diese Website wird gehostet von <strong>ALL-INKL.COM – Neue Medien Münnich</strong>,
              Hauptstraße 68, 02742 Friedersdorf, Deutschland. Beim Aufruf der Website werden
              automatisch technische Zugriffsdaten in Server-Logfiles gespeichert, insbesondere:
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>IP-Adresse des anfragenden Geräts</li>
              <li>Browsertyp und -version</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer-URL</li>
              <li>Datum und Uhrzeit der Serveranfrage</li>
            </ul>
            <p className="mt-3">
              Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
              Interesse an der technischen Bereitstellung und Sicherheit der Website). Die Server
              von ALL-INKL.COM befinden sich ausschließlich in Deutschland. Es findet keine
              Übermittlung in Drittländer statt. Weitere Informationen:{" "}
              <a
                href="https://all-inkl.com/datenschutzinformationen/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sage-dark underline underline-offset-2 hover:text-sage transition-colors"
              >
                Datenschutzinformationen von ALL-INKL.COM
              </a>
              .
            </p>
          </div>

          {/* 3. Cookies */}
          <div>
            <h2 className="font-serif text-xl font-semibold text-charcoal mb-3">3. Cookies</h2>
            <p>
              Diese Website verwendet ausschließlich technisch notwendige Cookies und den lokalen
              Browserspeicher (localStorage), um deine Cookie-Einstellungen zu speichern. Es werden
              derzeit keine Analyse- oder Marketing-Cookies eingesetzt. Eine Einwilligung ist für
              technisch notwendige Cookies nicht erforderlich. Rechtsgrundlage ist Art. 6 Abs. 1
              lit. f DSGVO (berechtigtes Interesse am fehlerfreien Betrieb der Website).
            </p>
          </div>

          {/* 4. E-Mail-Kontakt */}
          <div>
            <h2 className="font-serif text-xl font-semibold text-charcoal mb-3">4. Kontakt per E-Mail</h2>
            <p>
              Wenn du mir per E-Mail schreibst, werden die von dir übermittelten Daten (Name,
              E-Mail-Adresse, Nachricht) ausschließlich zur Bearbeitung deiner Anfrage verarbeitet.
              Es wird kein Drittanbieter eingesetzt. Die E-Mail landet direkt in meinem Postfach.
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) sowie Art. 6 Abs. 1
              lit. f DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen). Die Daten werden
              nach abschließender Bearbeitung deiner Anfrage gelöscht, sofern keine gesetzlichen
              Aufbewahrungspflichten entgegenstehen.
            </p>
          </div>

          {/* 5. Calendly */}
          <div>
            <h2 className="font-serif text-xl font-semibold text-charcoal mb-3">5. Terminbuchung (Calendly)</h2>
            <p>
              Für die Buchung von Terminen wird der Dienst <strong>Calendly</strong> (Calendly LLC,
              271 17th St NW, Suite 1000, Atlanta, GA 30363, USA) eingesetzt. Wenn du einen Termin
              buchst, werden die von dir eingegebenen Daten (Name, E-Mail-Adresse, ggf. weitere Angaben)
              an Calendly übermittelt und dort verarbeitet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO
              (Vertragsanbahnung). Calendly LLC ist unter dem EU-US Data Privacy Framework (DPF)
              zertifiziert. Weitere Informationen:{" "}
              <a
                href="https://calendly.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sage-dark underline underline-offset-2 hover:text-sage transition-colors"
              >
                Calendly Datenschutzerklärung
              </a>
              .
            </p>
          </div>

          {/* 6. Stripe */}
          <div>
            <h2 className="font-serif text-xl font-semibold text-charcoal mb-3">6. Zahlungsabwicklung (Stripe)</h2>
            <p>
              Zahlungen werden über <strong>Stripe</strong> (Stripe Payments Europe Ltd., 1 Grand Canal Street
              Lower, Grand Canal Dock, Dublin, D02 H210, Irland) abgewickelt. Die zur Zahlungsabwicklung
              erforderlichen Daten werden direkt an Stripe übertragen und dort verarbeitet. Ich erhalte
              und speichere keine vollständigen Zahlungsdaten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b
              DSGVO (Vertragserfüllung). Weitere Informationen:{" "}
              <a
                href="https://stripe.com/de/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sage-dark underline underline-offset-2 hover:text-sage transition-colors"
              >
                Stripe Datenschutzerklärung
              </a>
              .
            </p>
          </div>

          {/* 7. WhatsApp */}
          <div>
            <h2 className="font-serif text-xl font-semibold text-charcoal mb-3">7. Kontaktaufnahme per WhatsApp</h2>
            <p>
              Du hast die Möglichkeit, mich über WhatsApp zu kontaktieren. WhatsApp wird betrieben von
              Meta Platforms Ireland Ltd., 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland.
              Wenn du mir eine Nachricht über WhatsApp sendest, werden deine Telefonnummer sowie der
              Inhalt deiner Nachricht von Meta verarbeitet. Dabei kann es zu einer Datenübermittlung
              in die USA kommen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung
              bzw. Beantwortung deiner Anfrage). Die Nutzung von WhatsApp erfolgt freiwillig. Als
              Alternative steht dir das Kontaktformular auf dieser Website zur Verfügung. Weitere
              Informationen:{" "}
              <a
                href="https://www.whatsapp.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sage-dark underline underline-offset-2 hover:text-sage transition-colors"
              >
                WhatsApp Datenschutzerklärung
              </a>
              .
            </p>
          </div>

          {/* 8. Affiliate-Links */}
          <div>
            <h2 className="font-serif text-xl font-semibold text-charcoal mb-3">8. Affiliate-Links</h2>
            <p>
              Diese Website enthält Affiliate-Links zu Drittanbietern (Watson Nutrition, Hopkins
              Formulations, Ringana), gekennzeichnet mit *. Wenn du auf einen solchen Link klickst,
              wirst du auf die Website des Drittanbieters weitergeleitet. Dabei können technische
              Daten (z.B. IP-Adresse, Referrer) an den jeweiligen Anbieter übertragen werden. Diese
              Übermittlung erfolgt auf Basis von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse
              an der Partnerschaftsvermittlung). Ich erhalte bei einem Kauf eine Provision, ohne dass
              für dich zusätzliche Kosten entstehen. Auf die Datenverarbeitung durch die
              Drittanbieter habe ich keinen Einfluss.
            </p>
          </div>

          {/* 9. Externe Social-Media-Links */}
          <div>
            <h2 className="font-serif text-xl font-semibold text-charcoal mb-3">9. Externe Links (Social Media)</h2>
            <p>
              Diese Website enthält einfache Links zu Instagram (Meta Platforms Ireland Ltd.),
              TikTok (TikTok Technology Ltd., Irland) und YouTube (Google Ireland Ltd., Gordon House,
              Barrow Street, Dublin 4, Irland). Es handelt sich um reine Hyperlinks ohne eingebettete
              Plugins oder Tracking-Pixel. Eine Datenübertragung an die Plattformen findet erst statt,
              wenn du aktiv auf einen Link klickst. Auf die dortige Datenverarbeitung habe ich keinen
              Einfluss. Es gelten die jeweiligen Datenschutzbestimmungen der Plattformen.
            </p>
          </div>

          {/* 10. Speicherdauer */}
          <div>
            <h2 className="font-serif text-xl font-semibold text-charcoal mb-3">10. Speicherdauer</h2>
            <p className="mb-2">
              Ich speichere personenbezogene Daten nur so lange, wie es für den jeweiligen Zweck
              erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>
                <strong>Server-Logfiles (ALL-INKL.COM):</strong> In der Regel bis zu 30 Tage, danach
                automatische Löschung.
              </li>
              <li>
                <strong>Kontaktformular-Nachrichten:</strong> Bis zur abschließenden Bearbeitung deiner
                Anfrage, längstens 3 Jahre (zivilrechtliche Verjährungsfrist).
              </li>
              <li>
                <strong>Buchungsdaten (Calendly):</strong> Gemäß der Datenschutzrichtlinie von Calendly,
                in der Regel bis zur Löschung des Termins oder auf Anfrage.
              </li>
              <li>
                <strong>Zahlungsdaten (Stripe):</strong> Gemäß der Datenschutzrichtlinie von Stripe.
                Steuerrelevante Zahlungsbelege unterliegen einer gesetzlichen Aufbewahrungspflicht
                von 10 Jahren (§ 147 AO, § 257 HGB).
              </li>
              <li>
                <strong>Beratungsdaten (Gesundheitsdaten):</strong> Für die Dauer der Beratung sowie
                bis zu 3 Jahre danach (zivilrechtliche Verjährungsfrist), sofern keine kürzere
                Aufbewahrung möglich ist.
              </li>
              <li>
                <strong>Cookie-Einstellungen (localStorage):</strong> Bis zur manuellen Löschung durch
                dich im Browser.
              </li>
            </ul>
          </div>

          {/* 11. Betroffenenrechte */}
          <div>
            <h2 className="font-serif text-xl font-semibold text-charcoal mb-3">11. Deine Rechte</h2>
            <p className="mb-3">
              Dir stehen gegenüber mir als Verantwortlicher folgende Rechte zu:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Recht auf Auskunft über gespeicherte Daten (Art. 15 DSGVO)</li>
              <li>Recht auf Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
              <li>Recht auf Löschung ("Recht auf Vergessenwerden", Art. 17 DSGVO)</li>
              <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerspruchsrecht gegen die Verarbeitung (Art. 21 DSGVO)</li>
              <li>Recht auf Widerruf einer erteilten Einwilligung (Art. 7 Abs. 3 DSGVO)</li>
            </ul>
            <p className="mt-3">
              Zur Geltendmachung deiner Rechte wende dich bitte an: info@christinschoss.com
            </p>
          </div>

          {/* 12. Beschwerderecht */}
          <div>
            <h2 className="font-serif text-xl font-semibold text-charcoal mb-3">12. Beschwerderecht bei der Aufsichtsbehörde</h2>
            <p>
              Du hast das Recht, dich bei der zuständigen Datenschutzaufsichtsbehörde zu beschweren.
              Zuständig ist der Landesbeauftragte für den Datenschutz Niedersachsen:
            </p>
            <p className="mt-2">
              Der Landesbeauftragte für den Datenschutz Niedersachsen<br />
              Prinzenstraße 5<br />
              30159 Hannover<br />
              Telefon: +49 511 120-4500<br />
              E-Mail: poststelle@lfd.niedersachsen.de<br />
              Website:{" "}
              <a
                href="https://www.lfd.niedersachsen.de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sage-dark underline underline-offset-2 hover:text-sage transition-colors"
              >
                www.lfd.niedersachsen.de
              </a>
            </p>
          </div>

          <div className="pt-4 border-t border-sage-light">
            <p className="text-xs">Stand: April 2026</p>
          </div>

        </div>
      </div>
    </section>
  );
}
