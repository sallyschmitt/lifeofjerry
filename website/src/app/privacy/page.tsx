import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Jerry",
  description: "Privacy policy and data protection for lifeofjerry.com",
};

export default function Privacy() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 
        className="text-4xl md:text-5xl font-bold mb-8"
        style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '-0.02em' }}
      >
        Privacy Policy
      </h1>
      
      <div className="space-y-8 text-[--on-surface-variant]">
        <section>
          <h2 className="text-xl font-semibold mb-4 text-[--on-background]">1. Controller</h2>
          <p className="leading-relaxed mb-4">
            The controller responsible for data processing on this website is:
          </p>
          <div className="space-y-1">
            <p>Chris Kay</p>
            <p>Email: mail@ckms.es</p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4 text-[--on-background]">2. Hosting</h2>
          <p className="leading-relaxed">
            This website is hosted by Vercel Inc. (340 S Lemon Ave #4133, Walnut, CA 91789, USA). 
            Vercel processes personal data on our responsibility in accordance with the EU Commission&apos;s 
            standard contractual clauses. For more information on Vercel&apos;s privacy practices:{' '}
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
          <h2 className="text-xl font-semibold mb-4 text-[--on-background]">3. Data Collection and Processing</h2>
          
          <h3 className="text-lg font-medium mb-2 text-[--on-background]">3.1 Server Log Files</h3>
          <p className="leading-relaxed mb-4">
            When accessing this website, the following data is automatically recorded by the web server:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Anonymized IP address</li>
            <li>Date and time of access</li>
            <li>Requested URL</li>
            <li>HTTP status code</li>
            <li>Referrer (previously visited page)</li>
            <li>User-Agent (browser and operating system)</li>
          </ul>
          <p className="leading-relaxed mt-4">
            This data is processed for the security and stability of the website (Art. 6(1)(f) GDPR).
          </p>

          <h3 className="text-lg font-medium mb-2 mt-6 text-[--on-background]">3.2 Contact via Email</h3>
          <p className="leading-relaxed">
            If you contact us by email, we store your email address and the content of the message 
            to process your inquiry. This data will be deleted as soon as it is no longer necessary 
            for processing, but no later than after 6 months.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4 text-[--on-background]">4. Cookies</h2>
          <p className="leading-relaxed mb-4">
            This website only uses technically necessary cookies:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>
              <strong className="text-[--on-background]">Session Cookies:</strong> For website functionality 
              (e.g., cookie consent storage). These are deleted when you close your browser.
            </li>
          </ul>
          <p className="leading-relaxed mt-4">
            The use of these cookies is based on Art. 6(1)(f) GDPR (legitimate interest in providing 
            a functional website).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4 text-[--on-background]">5. Your Rights</h2>
          <p className="leading-relaxed mb-4">
            You have the following rights regarding your personal data:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Right to information (Art. 15 GDPR)</li>
            <li>Right to rectification (Art. 16 GDPR)</li>
            <li>Right to erasure (Art. 17 GDPR)</li>
            <li>Right to restriction of processing (Art. 18 GDPR)</li>
            <li>Right to data portability (Art. 20 GDPR)</li>
            <li>Right to object (Art. 21 GDPR)</li>
          </ul>
          <p className="leading-relaxed mt-4">
            To exercise these rights, please contact: mail@ckms.es
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4 text-[--on-background]">6. Right to Complain</h2>
          <p className="leading-relaxed">
            If you believe that the processing of your personal data violates the GDPR, you have 
            the right to lodge a complaint with a supervisory authority (Art. 77 GDPR).
          </p>
        </section>
      </div>

      <p className="mt-12 text-sm text-[--text-muted]">
        Last updated: April 2026
      </p>
    </div>
  );
}