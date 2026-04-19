import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz — Jerry",
  description: "Privacy policy and data protection for lifeofjerry.com",
};

export default function Privacy() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 
        className="text-4xl md:text-5xl font-bold mb-8"
        style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '-0.02em' }}
      >
        Datenschutzerklärung
      </h1>
      
      <div className="space-y-8 text-[--on-surface-variant]">
        <section>
          <h2 className="text-xl font-semibold mb-4 text-[--on-background]">1. Verantwortlicher</h2>
          <p className="leading-relaxed mb-4">
            Verantwortlich für die Datenverarbeitung auf dieser Website ist:
          </p>
          <div className="space-y-1">
            <p>Chris Kay</p>
            <p>E-Mail: mail@ckms.es</p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4 text-[--on-background]">2. Hosting</h2>
          <p className="leading-relaxed">
            Diese Website wird bei Vercel Inc. (340 S Lemon Ave #4133, Walnut, CA 91789, USA) gehostet. 
            Vercel verarbeitet personenbezogene Daten auf unserer Verantwortung gemäß den Standardvertragsklauseln 
            der EU-Kommission. Weitere Informationen zum Datenschutz bei Vercel: 
            <a 
              href="https://vercel.com/legal/privacy-policy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[--primary] hover:underline ml-1"
            >
              Vercel Privacy Policy
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4 text-[--on-background]">3. Erhebung und Verarbeitung von Daten</h2>
          
          <h3 className="text-lg font-medium mb-2 text-[--on-background]">3.1 Server-Log-Dateien</h3>
          <p className="leading-relaxed mb-4">
            Bei jedem Zugriff auf diese Website werden automatisch durch den Webserver folgende Daten erfasst:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>IP-Adresse (anonymisiert)</li>
            <li>Datum und Uhrzeit des Zugriffs</li>
            <li>Angeforderte URL</li>
            <li>HTTP-Statuscode</li>
            <li>Referrer (die zuvor besuchte Seite)</li>
            <li>User-Agent (Browser und Betriebssystem)</li>
          </ul>
          <p className="leading-relaxed mt-4">
            Diese Daten werden zur Sicherheit und Stabilität der Website verarbeitet (Art. 6 Abs. 1 lit. f DSGVO).
          </p>

          <h3 className="text-lg font-medium mb-2 mt-6 text-[--on-background]">3.2 Kontakt per E-Mail</h3>
          <p className="leading-relaxed">
            Wenn Sie uns per E-Mail kontaktieren, speichern wir Ihre E-Mail-Adresse und den Inhalt der Nachricht 
            zur Bearbeitung Ihres Anliegens. Diese Daten werden gelöscht, sobald sie für die Bearbeitung nicht 
            mehr erforderlich sind, spätestens jedoch nach 6 Monaten.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4 text-[--on-background]">4. Cookies</h2>
          <p className="leading-relaxed mb-4">
            Diese Website verwendet nur technisch notwendige Cookies:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>
              <strong className="text-[--on-background]">Session-Cookies:</strong> Für die Funktionalität der Website 
              (z.B. Cookie-Consent-Speicherung). Diese werden gelöscht, sobald Sie Ihren Browser schließen.
            </li>
          </ul>
          <p className="leading-relaxed mt-4">
            Der Einsatz dieser Cookies erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse 
            an der Bereitstellung einer funktionsfähigen Website).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4 text-[--on-background]">5. Ihre Rechte</h2>
          <p className="leading-relaxed mb-4">
            Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
            <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
            <li>Recht auf Löschung (Art. 17 DSGVO)</li>
            <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
            <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
            <li>Widerspruchsrecht (Art. 21 DSGVO)</li>
          </ul>
          <p className="leading-relaxed mt-4">
            Zur Ausübung dieser Rechte kontaktieren Sie uns bitte unter: mail@ckms.es
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4 text-[--on-background]">6. Beschwerderecht</h2>
          <p className="leading-relaxed">
            Wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen die DSGVO verstößt, 
            haben Sie das Recht, sich bei einer Aufsichtsbehörde zu beschweren (Art. 77 DSGVO).
          </p>
        </section>
      </div>

      <p className="mt-12 text-sm text-[--text-muted]">
        Stand: April 2026
      </p>
    </div>
  );
}
