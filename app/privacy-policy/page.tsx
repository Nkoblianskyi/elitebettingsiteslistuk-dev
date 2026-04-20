import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type React from "react"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for trustedcasinossitesuk.com — how we handle personal data, legal bases under UK GDPR, your rights, and how to contact us.",
  keywords: ["privacy policy", "UK GDPR", "data protection", "trustedcasinossitesuk privacy"],
  openGraph: {
    title: "Privacy Policy | Trusted Casinos Sites UK",
    description: "How trustedcasinossitesuk.com handles your personal data under UK GDPR.",
    url: "https://trustedcasinossitesuk.com/privacy-policy",
  },
  robots: { index: false, follow: false },
}

const GOLD = "#C9A84C"
const FOREST_CARD = "#111111"
const PARCHMENT = "#EDE4CC"

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-7">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-[2px] h-5 shrink-0" style={{ background: GOLD }} />
        <h2 className="font-serif font-semibold text-lg sm:text-xl" style={{ color: PARCHMENT }}>
          {title}
        </h2>
      </div>
      <div className="font-sans text-sm leading-relaxed space-y-3 pl-5" style={{ color: "rgba(242,236,217,0.65)" }}>
        {children}
      </div>
    </section>
  )
}

export default function PrivacyPolicyPage() {
  const reviewed = new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <Link
        href="/"
        className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-wider mb-8 transition-opacity hover:opacity-75"
        style={{ color: "rgba(201,168,76,0.6)" }}
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        Return to Rankings
      </Link>

      <div className="border" style={{ backgroundColor: FOREST_CARD, borderColor: "rgba(184,150,90,0.22)" }}>
        <div className="h-[3px]" style={{ background: GOLD }} />

        <div className="px-6 py-8 sm:px-10 sm:py-10">
          {/* Heading */}
          <div className="text-center mb-8 pb-6 border-b" style={{ borderColor: "rgba(184,150,90,0.12)" }}>
            <p className="font-sans text-[8px] font-bold uppercase tracking-[0.42em] mb-2" style={{ color: "rgba(184,150,90,0.5)" }}>
              trustedcasinossitesuk.com
            </p>
            <h1 className="font-serif font-semibold text-3xl lg:text-4xl" style={{ color: PARCHMENT }}>
              Privacy Policy
            </h1>
            <p className="font-sans text-xs mt-3" style={{ color: "rgba(242,236,217,0.38)" }}>
              Last reviewed: {reviewed}
            </p>
          </div>

          <Section title="Who We Are">
            <p>
              trustedcasinossitesuk.com publishes independent editorial comparisons of UK-licensed online casinos.
              This policy explains what personal data may come into contact with our systems and how we handle it.
            </p>
          </Section>

          <div className="h-px my-5" style={{ background: "rgba(184,150,90,0.08)" }} />

          <Section title="Data We May Process">
            <ul className="space-y-2">
              {[
                "Technical logs: IP address, browser type, approximate location, and access timestamps.",
                "Usage signals: pages visited, scroll-depth approximations — only if analytics is enabled.",
                "Communications: if you contact us by email, we retain the correspondence as long as necessary to resolve your query.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="shrink-0 w-1 h-1 rounded-full mt-2" style={{ backgroundColor: GOLD }} />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-xs mt-2" style={{ color: "rgba(242,236,217,0.42)" }}>
              We operate no casino; we hold no gaming history, payment card data, or account credentials.
            </p>
          </Section>

          <div className="h-px my-5" style={{ background: "rgba(184,150,90,0.08)" }} />

          <Section title="Legal Bases (UK GDPR)">
            <p>
              Where UK law applies, we rely on <strong style={{ color: PARCHMENT }}>legitimate interest</strong> to operate
              and secure the site, and on <strong style={{ color: PARCHMENT }}>consent</strong> where we request it (for
              example, non-essential cookies). You may withdraw consent at any time via your browser settings or our cookie banner.
            </p>
          </Section>

          <div className="h-px my-5" style={{ background: "rgba(184,150,90,0.08)" }} />

          <Section title="Sharing Your Data">
            <p>
              Hosting providers, analytics vendors, and affiliate networks may process data on our behalf under
              contractual safeguards. We do not sell personal data as a product. Lawful requests from public authorities
              will be honoured when legally required.
            </p>
          </Section>

          <div className="h-px my-5" style={{ background: "rgba(184,150,90,0.08)" }} />

          <Section title="Retention">
            <p>
              Server logs are rotated on a short cycle. Analytics aggregates are retained in anonymised form. Email
              correspondence is deleted once the matter is resolved, unless retention is required by law.
            </p>
          </Section>

          <div className="h-px my-5" style={{ background: "rgba(184,150,90,0.08)" }} />

          <Section title="Security">
            <p>
              We enforce HTTPS, apply access controls to administrative interfaces, and partner with vendors that
              maintain strong security practices. No online system is entirely immune to breach — please report
              any suspected vulnerabilities promptly.
            </p>
          </Section>

          <div className="h-px my-5" style={{ background: "rgba(184,150,90,0.08)" }} />

          <Section title="Your Rights">
            <p>
              You may request access, rectification, erasure, restriction, or portability of your personal data where
              applicable under UK GDPR.
            </p>
            <p>
              UK residents may lodge complaints with the{" "}
              <a
                href="https://ico.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 font-medium transition-opacity hover:opacity-75"
                style={{ color: GOLD }}
              >
                Information Commissioner&apos;s Office (ICO)
              </a>
              .
            </p>
          </Section>

          <div className="h-px my-5" style={{ background: "rgba(184,150,90,0.08)" }} />

          <Section title="Children">
            <p>
              Our services are directed exclusively at adults aged 18 and over. We do not knowingly collect data from
              minors. If you believe a child has interacted with this site, please contact us and we will arrange
              removal.
            </p>
          </Section>

          <div className="h-px my-5" style={{ background: "rgba(184,150,90,0.08)" }} />

          <Section title="International Transfers">
            <p>
              Certain subprocessors operate outside the UK/EEA. Where this applies, we rely on appropriate transfer
              mechanisms such as UK Standard Contractual Clauses as updated under UK GDPR.
            </p>
          </Section>

          <div className="h-px my-5" style={{ background: "rgba(184,150,90,0.08)" }} />

          <Section title="Changes to This Policy">
            <p>
              Updates will be published here with a revised review date. Continued use of the site following material
              changes constitutes acceptance of the revised policy unless fresh consent is required.
            </p>
          </Section>

          <div className="h-px my-5" style={{ background: "rgba(184,150,90,0.08)" }} />

          <Section title="Contact">
            <p>
              For data-related enquiries, please contact the publisher at{" "}
              <a
                href="mailto:info@trustedcasinossitesuk.com"
                className="underline underline-offset-2 font-medium transition-opacity hover:opacity-75"
                style={{ color: GOLD }}
              >
                info@trustedcasinossitesuk.com
              </a>
              .
            </p>
            <p>
              For cookie-specific information, see our{" "}
              <Link
                href="/cookie-policy"
                className="underline underline-offset-2 font-medium transition-opacity hover:opacity-75"
                style={{ color: GOLD }}
              >
                Cookie Policy
              </Link>
              .
            </p>
          </Section>
        </div>
      </div>
    </div>
  )
}
