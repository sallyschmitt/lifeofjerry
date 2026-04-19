import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy — Jerry",
  description: "Cookie policy and settings for lifeofjerry.com",
};

export default function Cookies() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 
        className="text-4xl md:text-5xl font-bold mb-8"
        style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '-0.02em' }}
      >
        Cookie Policy
      </h1>
      
      <div className="space-y-8 text-[--on-surface-variant]">
        <section>
          <h2 className="text-xl font-semibold mb-4 text-[--on-background]">What Are Cookies?</h2>
          <p className="leading-relaxed">
            Cookies are small text files stored on your device when you visit a website. 
            They allow the website to remember your actions and preferences (such as login, language, 
            font size) over a period of time.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4 text-[--on-background]">What Cookies Do We Use?</h2>
          
          <div className="space-y-6">
            <div className="border border-[--outline-variant] rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-[--on-background]">Essential Cookies</h3>
                <span className="text-xs bg-[--terminal-emerald]/20 text-[--terminal-emerald] px-2 py-1 rounded">
                  Always Active
                </span>
              </div>
              <p className="text-sm leading-relaxed">
                These cookies are essential for the basic functionality of the website and cannot 
                be disabled. They store, for example, your cookie consent preferences.
              </p>
              <ul className="text-sm mt-2 space-y-1 text-[--text-muted]">
                <li>• cookie-consent: Stores your cookie consent preference (1 year)</li>
              </ul>
            </div>

            <div className="border border-[--outline-variant] rounded-lg p-4 opacity-60">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-[--on-background]">Analytics Cookies</h3>
                <span className="text-xs bg-[--text-muted]/20 text-[--text-muted] px-2 py-1 rounded">
                  Currently Not Used
                </span>
              </div>
              <p className="text-sm leading-relaxed">
                These cookies would help us understand how visitors interact with the website. 
                We currently do not use any analytics tools.
              </p>
            </div>

            <div className="border border-[--outline-variant] rounded-lg p-4 opacity-60">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-[--on-background]">Marketing Cookies</h3>
                <span className="text-xs bg-[--text-muted]/20 text-[--text-muted] px-2 py-1 rounded">
                  Currently Not Used
                </span>
              </div>
              <p className="text-sm leading-relaxed">
                These cookies would be used to display relevant advertising to visitors. 
                We currently do not use any marketing cookies.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4 text-[--on-background]">Managing Cookies</h2>
          <p className="leading-relaxed mb-4">
            Since we only use essential cookies, no separate consent is required. 
            You can manage cookies in your browser settings:
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
          <h2 className="text-xl font-semibold mb-4 text-[--on-background]">Changes</h2>
          <p className="leading-relaxed">
            We may update this cookie policy from time to time. Please check this page 
            regularly to stay informed about any changes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4 text-[--on-background]">Contact</h2>
          <p className="leading-relaxed">
            For questions about cookies or this policy, please contact: mail@ckms.es
          </p>
        </section>
      </div>

      <p className="mt-12 text-sm text-[--text-muted]">
        Last updated: April 2026
      </p>
    </div>
  );
}