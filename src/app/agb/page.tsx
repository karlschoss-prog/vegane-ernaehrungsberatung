import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AGB",
  robots: { index: false, follow: false },
};

export default function AGBPage() {
  return (
    <section className="section-padding bg-cream">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-4xl font-light text-charcoal mb-10">Allgemeine Geschäftsbedingungen</h1>

        <div className="prose prose-sm max-w-none text-charcoal space-y-8">

          <div>
            <h2 className="font-serif text-xl font-semibold text-charcoal mb-3">§ 1 Geltungsbereich</h2>
            <p className="text-soft-gray leading-relaxed">
              Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen Christin
              Schoß (im Folgenden „Anbieterin"), Hagenring 89, 38106 Braunschweig, und der Kundin über
              die Erbringung von Ernährungsberatungsleistungen. Abweichende Bedingungen der Kundin
              werden nicht anerkannt, es sei denn, die Anbieterin stimmt diesen ausdrücklich schriftlich zu.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-charcoal mb-3">§ 2 Leistungsbeschreibung und Programmlaufzeit</h2>
            <p className="text-soft-gray leading-relaxed mb-2">
              Die Anbieterin bietet individuelle vegane Ernährungsberatung in Form von Online-Programmen an.
              Die Programme umfassen persönliche Videocalls, schriftliche Begleitdokumente sowie
              werktäglichen Support über WhatsApp. Die konkrete Leistungsbeschreibung ergibt sich aus der
              jeweils gebuchten Programmseite.
            </p>
            <p className="text-soft-gray leading-relaxed mb-2">
              Die Beratungsleistungen werden ausschließlich online (per Videokonferenz und Textnachrichten)
              erbracht. Ein Anspruch auf persönliche Präsenztermine besteht nicht, sofern nichts anderes
              vereinbart wurde.
            </p>
            <p className="text-soft-gray leading-relaxed">
              Nicht abgerufene Beratungsgespräche verfallen nach Ablauf der vereinbarten Programmlaufzeit,
              sofern das Versäumnis nicht von der Anbieterin zu vertreten ist. Die Kundin ist dafür
              verantwortlich, Termine innerhalb der Programmlaufzeit zu vereinbaren und wahrzunehmen. Eine
              Verlängerung der Laufzeit oder Erstattung für nicht genutzte Termine ist in diesem Fall
              ausgeschlossen.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-charcoal mb-3">§ 3 Vertragsschluss und Mindestalter</h2>
            <p className="text-soft-gray leading-relaxed mb-2">
              Ein Vertrag kommt zustande, sobald die Kundin eine Buchung über den bereitgestellten
              Zahlungslink abschließt und die Zahlung (oder die erste Rate) erfolgreich verarbeitet wurde.
              Mit der Buchung bestätigt die Kundin, diese AGB gelesen und akzeptiert zu haben.
            </p>
            <p className="text-soft-gray leading-relaxed mb-2">
              Die Inanspruchnahme der Beratungsleistungen setzt ein Mindestalter von 18 Jahren voraus.
              Minderjährige dürfen nur mit ausdrücklicher schriftlicher Zustimmung eines gesetzlichen
              Vertreters buchen. Mit der Buchung versichert die Kundin, das 18. Lebensjahr vollendet zu
              haben oder die erforderliche Zustimmung eingeholt zu haben.
            </p>
            <p className="text-soft-gray leading-relaxed">
              Die Anbieterin behält sich vor, eine Buchung ohne Angabe von Gründen abzulehnen. In diesem
              Fall wird der bereits bezahlte Betrag vollständig zurückerstattet.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-charcoal mb-3">§ 4 Preise und Zahlung</h2>
            <p className="text-soft-gray leading-relaxed mb-2">
              Die Anbieterin erbringt ihre Leistungen als Kleinunternehmerin im Sinne von § 19 UStG. Die
              ausgewiesenen Preise sind daher Bruttopreise ohne Umsatzsteuer.
            </p>
            <p className="text-soft-gray leading-relaxed mb-2">
              Die Zahlung erfolgt über den Zahlungsdienstleister Stripe. Bei Ratenzahlung werden die
              einzelnen Raten automatisch zu den vereinbarten Fälligkeitsterminen eingezogen. Kommt die
              Kundin mit einer Rate in Verzug, ist die Anbieterin berechtigt, die Beratung bis zum
              vollständigen Ausgleich zu pausieren.
            </p>
            <p className="text-soft-gray leading-relaxed">
              Eine Rückerstattung nach Leistungsbeginn ist ausgeschlossen, sofern nicht in diesen AGB oder
              gesetzlich anders geregelt.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-charcoal mb-3">§ 5 Widerrufsrecht</h2>
            <p className="text-soft-gray leading-relaxed mb-2">
              Als Verbraucherin steht der Kundin ein gesetzliches Widerrufsrecht zu. Die Kundin kann den
              Vertrag innerhalb von 14 Tagen nach Vertragsschluss ohne Angabe von Gründen widerrufen.
              Der Widerruf ist in Textform (z. B. per E-Mail an hallo@christinschoss.de) zu erklären.
            </p>
            <p className="text-soft-gray leading-relaxed mb-2">
              <strong>Erlöschen des Widerrufsrechts:</strong> Die Kundin stimmt ausdrücklich zu, dass mit
              der Erbringung der Dienstleistung vor Ablauf der Widerrufsfrist begonnen werden darf. Sie
              bestätigt, dass sie weiß, dass ihr Widerrufsrecht erlischt, sobald ein erstes
              Beratungsgespräch stattgefunden hat. Eine anteilige Rückerstattung für danach nicht in
              Anspruch genommene Leistungen ist ausgeschlossen.
            </p>
            <p className="text-soft-gray leading-relaxed">
              Kein Widerrufsrecht besteht bei digitalen Inhalten (z. B. individuell erstellten
              Ernährungsplänen), die bereits vollständig übermittelt wurden und deren Übermittlung die
              Kundin ausdrücklich zugestimmt hat.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-charcoal mb-3">§ 6 Wichtige Hinweise zur Ernährungsberatung</h2>
            <p className="text-soft-gray leading-relaxed mb-2">
              Die Ernährungsberatung durch Christin Schoß ist keine Heilbehandlung und ersetzt weder
              ärztliche Beratung noch Diagnose noch Behandlung. Die Anbieterin ist keine Ärztin, keine
              Heilpraktikerin und übt keine Tätigkeit im Sinne des Heilpraktikergesetzes aus.
            </p>
            <p className="text-soft-gray leading-relaxed mb-2">
              Die Empfehlungen der Anbieterin basieren auf allgemeinen ernährungswissenschaftlichen
              Erkenntnissen sowie auf den von der Kundin bereitgestellten persönlichen Angaben. Sie stellen
              keine medizinische Diagnose dar und können eine solche nicht ersetzen.
            </p>
            <p className="text-soft-gray leading-relaxed mb-2">
              Bei bestehenden gesundheitlichen Erkrankungen, Schwangerschaftskomplikationen oder anderen
              medizinisch relevanten Zuständen ist die Kundin verpflichtet, vor Beginn der Beratung
              Rücksprache mit ihrer Ärztin oder ihrem Arzt zu halten und die Anbieterin hierüber zu
              informieren.
            </p>
            <p className="text-soft-gray leading-relaxed">
              Die Anbieterin übernimmt keine Haftung für gesundheitliche Veränderungen, die die Kundin
              während oder nach der Beratung erlebt, sofern diese nicht auf einem nachweisbar grob
              fahrlässigen oder vorsätzlichen Handeln der Anbieterin beruhen. Es wird keine Garantie auf
              bestimmte gesundheitliche Ergebnisse oder Verläufe gegeben.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-charcoal mb-3">§ 7 Haftung</h2>
            <p className="text-soft-gray leading-relaxed mb-2">
              Die Anbieterin haftet unbegrenzt für Schäden aus der Verletzung des Lebens, des Körpers oder
              der Gesundheit, die auf einer vorsätzlichen oder grob fahrlässigen Pflichtverletzung beruhen,
              sowie für sonstige Schäden, die auf einer vorsätzlichen oder grob fahrlässigen
              Pflichtverletzung beruhen.
            </p>
            <p className="text-soft-gray leading-relaxed mb-2">
              Im Übrigen ist die Haftung der Anbieterin für leicht fahrlässig verursachte Schäden
              ausgeschlossen, soweit es sich nicht um die Verletzung wesentlicher Vertragspflichten
              (Kardinalpflichten) handelt. Bei leicht fahrlässiger Verletzung von Kardinalpflichten ist die
              Haftung auf den vorhersehbaren, vertragstypischen Schaden begrenzt.
            </p>
            <p className="text-soft-gray leading-relaxed">
              Die Anbieterin haftet nicht für Schäden, die dadurch entstehen, dass die Kundin falsche,
              unvollständige oder irreführende Angaben zu ihrer Gesundheit, Schwangerschaft, bestehenden
              Erkrankungen oder Medikamenten gemacht hat.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-charcoal mb-3">§ 8 Mitwirkungspflichten der Kundin</h2>
            <p className="text-soft-gray leading-relaxed mb-2">
              Die Kundin verpflichtet sich, alle für die Beratung relevanten Informationen vollständig und
              wahrheitsgemäß anzugeben. Hierzu gehören insbesondere:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-soft-gray text-sm mb-3">
              <li>Bestehende Erkrankungen und Unverträglichkeiten</li>
              <li>Eingenommene Medikamente oder Nahrungsergänzungsmittel</li>
              <li>Relevante ärztliche Befunde oder Diagnosen</li>
              <li>Besonderheiten der Schwangerschaft oder Stillzeit</li>
            </ul>
            <p className="text-soft-gray leading-relaxed mb-2">
              Die Kundin ist für die Umsetzung der erarbeiteten Empfehlungen eigenverantwortlich. Die
              Anbieterin gibt Empfehlungen und Unterstützung, kann aber keine bestimmten gesundheitlichen
              Ergebnisse garantieren, da diese von zahlreichen individuellen Faktoren abhängen.
            </p>
            <p className="text-soft-gray leading-relaxed mb-2">
              <strong>Technische Voraussetzungen:</strong> Die Kundin ist verpflichtet, für eine stabile
              Internetverbindung und ein funktionsfähiges Endgerät (Kamera und Mikrofon) zu sorgen.
              Technische Störungen auf Seite der Kundin berechtigen nicht zur Forderung von Ersatzterminen
              oder Rückerstattungen, sofern die Anbieterin nicht erreichbar war.
            </p>
            <p className="text-soft-gray leading-relaxed">
              <strong>Aufzeichnungsverbot:</strong> Die Kundin ist nicht berechtigt, Videogespräche oder
              sonstige Kommunikation ohne ausdrückliche schriftliche Zustimmung der Anbieterin aufzuzeichnen.
              Verstöße hiergegen können zivilrechtliche und strafrechtliche Konsequenzen nach sich ziehen.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-charcoal mb-3">§ 9 Termine und Absagen</h2>
            <p className="text-soft-gray leading-relaxed mb-2">
              Vereinbarte Termine sind verbindlich. Absagen oder Verschiebungen sind bis spätestens 24
              Stunden vor dem vereinbarten Termin möglich. Bei kurzfristigeren Absagen oder Nichterscheinen
              gilt der Termin als in Anspruch genommen und verfällt ersatzlos.
            </p>
            <p className="text-soft-gray leading-relaxed">
              Die Anbieterin ist berechtigt, Termine in begründeten Ausnahmefällen (z. B. Krankheit) zu
              verschieben. In diesem Fall wird ein Ersatztermin angeboten. Ein Anspruch auf Schadensersatz
              besteht in diesen Fällen nicht.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-charcoal mb-3">§ 10 Urheberrecht und Nutzungsrechte</h2>
            <p className="text-soft-gray leading-relaxed mb-2">
              Alle von der Anbieterin erstellten Materialien, insbesondere individuelle Ernährungspläne,
              Supplement-Empfehlungen, schriftliche Auswertungen und sonstige Beratungsunterlagen,
              unterliegen dem Urheberrecht der Anbieterin.
            </p>
            <p className="text-soft-gray leading-relaxed mb-2">
              Die Kundin erhält ein einfaches, nicht übertragbares Nutzungsrecht ausschließlich für den
              persönlichen Gebrauch. Eine Weitergabe an Dritte, Veröffentlichung oder kommerzielle Nutzung
              der erstellten Materialien ist ohne ausdrückliche schriftliche Zustimmung der Anbieterin
              nicht gestattet.
            </p>
            <p className="text-soft-gray leading-relaxed">
              <strong>Abtretungsverbot:</strong> Die Kundin darf ihre Rechte und Pflichten aus diesem
              Vertrag nicht ohne Zustimmung der Anbieterin auf Dritte übertragen. Das gebuchte Programm
              ist personengebunden und gilt ausschließlich für die buchende Kundin.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-charcoal mb-3">§ 11 Datenschutz und Gesundheitsdaten</h2>
            <p className="text-soft-gray leading-relaxed mb-2">
              Im Rahmen der Beratung werden personenbezogene Daten erhoben und verarbeitet, darunter
              Gesundheitsdaten im Sinne von Art. 9 DSGVO (z. B. Informationen zur Schwangerschaft,
              Erkrankungen, Unverträglichkeiten oder Medikamenteneinnahme). Diese Daten sind für die
              Erbringung der Beratungsleistung erforderlich.
            </p>
            <p className="text-soft-gray leading-relaxed mb-2">
              Mit der Buchung erteilt die Kundin ihre ausdrückliche Einwilligung gemäß Art. 9 Abs. 2 lit. a
              DSGVO zur Verarbeitung dieser Gesundheitsdaten zum Zweck der Ernährungsberatung. Diese
              Einwilligung kann jederzeit mit Wirkung für die Zukunft widerrufen werden, was jedoch die
              weitere Erbringung der Beratungsleistung ausschließt.
            </p>
            <p className="text-soft-gray leading-relaxed">
              Die Anbieterin behandelt alle personenbezogenen und gesundheitlichen Informationen vertraulich
              und gibt diese nicht an Dritte weiter. Näheres zur Datenverarbeitung ergibt sich aus der{" "}
              <Link href="/datenschutz" className="text-sage-dark underline underline-offset-2 hover:text-sage transition-colors">
                Datenschutzerklärung
              </Link>.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-charcoal mb-3">§ 12 Kündigung und vorzeitige Beendigung</h2>
            <p className="text-soft-gray leading-relaxed mb-2">
              Eine ordentliche Kündigung während eines laufenden Programms ist ausgeschlossen. Die Kundin
              kann den Vertrag aus wichtigem Grund außerordentlich kündigen, wenn ihr die Fortsetzung der
              Beratung nicht zumutbar ist (z. B. bei dauerhafter schwerwiegender Erkrankung). In diesem
              Fall werden bereits erbrachte Leistungen anteilig abgerechnet; der verbleibende Betrag wird
              erstattet.
            </p>
            <p className="text-soft-gray leading-relaxed">
              Die Anbieterin kann den Vertrag aus wichtigem Grund kündigen, insbesondere wenn die Kundin
              trotz Mahnung mit einer Ratenzahlung in Verzug ist, ihre Mitwirkungspflichten gemäß § 8
              dauerhaft verletzt oder das Vertrauensverhältnis nachhaltig gestört ist. Bereits geleistete
              Zahlungen werden in diesem Fall nicht erstattet.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-charcoal mb-3">§ 13 Streitbeilegung</h2>
            <p className="text-soft-gray leading-relaxed mb-2">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sage-dark underline underline-offset-2 hover:text-sage transition-colors"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
              . Die E-Mail-Adresse der Anbieterin lautet: hallo@christinschoss.de.
            </p>
            <p className="text-soft-gray leading-relaxed">
              Die Anbieterin ist nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor
              einer Verbraucherschlichtungsstelle teilzunehmen (§ 36 VSBG).
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-charcoal mb-3">§ 14 Schlussbestimmungen</h2>
            <p className="text-soft-gray leading-relaxed mb-2">
              Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.
            </p>
            <p className="text-soft-gray leading-relaxed mb-2">
              Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit
              der übrigen Bestimmungen unberührt. Die unwirksame Bestimmung gilt als durch eine wirksame
              ersetzt, die dem wirtschaftlichen Zweck der unwirksamen am nächsten kommt.
            </p>
            <p className="text-soft-gray leading-relaxed">
              Änderungen oder Ergänzungen dieser AGB bedürfen der Textform. Mündliche Nebenabreden
              bestehen nicht.
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
