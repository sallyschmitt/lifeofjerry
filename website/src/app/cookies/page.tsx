import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookies — Jerry",
  description: "Cookie policy and settings for lifeofjerry.com",
};

export default function Cookies() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 
        className="text-4xl md:text-5xl font-bold mb-8"
        style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '-0.02em' }}
      >
        Cookie-Richtlinie
      </h1>
      
      <div className="space-y-8 text-[--on-surface-variant]">
        <section>
          <h2 className="text-xl font-semibold mb-4 text-[--on-background]">Was sind Cookies?</h2>
          <p className="leading-relaxed">
            Cookies sind kleine Textdateien, die auf Ihrem Gerät gespeichert werden, wenn Sie eine Website besuchen. 
            Sie ermöglichen es der Website, sich an Ihre Aktionen und Einstellungen zu erinnern (z.B. Login, Sprache, 
            Schriftgröße) über einen bestimmten Zeitraum hinweg.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4 text-[--on-background]">Welche Cookies verwenden wir?</h2>
          
          <div className="space-y-6">
            <div className="border border-[--outline-variant] rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-[--on-background]">Notwendige Cookies</h3>
                <span className="text-xs bg-[--accent-green]/20 text-[--accent-green] px-2 py-1 rounded">
                  Immer aktiv
                </span>
              </div>
              <p className="text-sm leading-relaxed">
                Diese Cookies sind für die grundlegende Funktionalität der Website erforderlich und können nicht 
                deaktiviert werden. Sie speichern z.B. Ihre Cookie-Einstellungen.
              </p>
              <ul className="text-sm mt-2 space-y-1 text-[--text-muted]">
                <li>• cookie-consent: Speichert Ihre Cookie-Einwilligung (1 Jahr)</li>
              </ul>
            </div>

            <div className="border border-[--outline-variant] rounded-lg p-4 opacity-60">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-[--on-background]">Analyse-Cookies</h3>
                <span className="text-xs bg-[--text-muted]/20 text-[--text-muted] px-2 py-1 rounded">
                  Derzeit nicht verwendet
                </span>
              </div>
              <p className="text-sm leading-relaxed">
                Diese Cookies würden uns helfen zu verstehen, wie Besucher mit der Website interagieren. 
                Derzeit verwenden wir keine Analyse-Tools.
              </p>
            </div>

            <div className="border border-[--outline-variant] rounded-lg p-4 opacity-60">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-[--on-background]">Marketing-Cookies</h3>
                <span className="text-xs bg-[--text-muted]/20 text-[--text-muted] px-2 py-1 rounded">
                  Derzeit nicht verwendet
                </span>
              </div>
              <p className="text-sm leading-relaxed">
                Diese Cookies würden verwendet werden, um Besuchern relevante Werbung anzuzeigen. 
                Derzeit verwenden wir keine Marketing-Cookies.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4 text-[--on-background]">Cookie-Verwaltung</h2>
          <p className="leading-relaxed mb-4">
            Da wir nur technisch notwendige Cookies verwenden, ist keine separate Einwilligung erforderlich. 
            Sie können Cookies in Ihren Browsereinstellungen verwalten:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>
              <a 
                href="https://support.google.com/chrome/answer/95647" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[--primary] hover:underline"
              >
                Google Chrome
              </a>
            </li>
            <li>
              <a 
                href="https://support.mozilla.org/kb/cookies-information-websites-store-on-your-computer" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[--primary] hover:underline"
              >
                Mozilla Firefox
              </a>
            </li>
            <li>
              <a 
                href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[--primary] hover:underline"
              >
                Safari
              </a>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4 text-[--on-background]">Änderungen</h2>
          <p className="leading-relaxed">
            Wir können diese Cookie-Richtlinie von Zeit zu Zeit aktualisieren. Überprüfen Sie diese Seite 
            regelmäßig, um über Änderungen informiert zu bleiben.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4 text-[--on-background]">Kontakt</h2>
          <p className="leading-relaxed">
            Bei Fragen zu Cookies oder dieser Richtlinie kontaktieren Sie uns unter: mail@ckms.es
          </p>
        </section>
      </div>

      <p className="mt-12 text-sm text-[--text-muted]">
        Stand: April 2026
      </p>
    </div>
  );
}
