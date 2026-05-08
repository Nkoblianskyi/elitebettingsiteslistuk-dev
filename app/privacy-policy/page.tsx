import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type React from "react"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for ukbestcasinosites.com — how we handle personal data, legal bases under UK GDPR, your rights, and how to contact us.",
  keywords: ["privacy policy", "UK GDPR", "data protection", "ukbestcasinosites privacy"],
  openGraph: {
    title: "Privacy Policy | UK Best Casino Sites",
    description: "How ukbestcasinosites.com handles your personal data under UK GDPR.",
    url: "https://ukbestcasinosites.com/privacy-policy",
  },
  robots: { index: false, follow: false },
}

const GOLD = "#B8935A"
const PARCHMENT = "#EEE5D0"

function PolicySection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: 36 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
        <div style={{ flexShrink: 0, width: 2, height: 20, backgroundColor: GOLD, opacity: 0.7 }} />
        <h2 style={{
          fontFamily: "var(--font-playfair),Georgia,serif",
          fontWeight: 700,
          fontSize: "clamp(1.05rem,1.8vw,1.3rem)",
          color: PARCHMENT,
          lineHeight: 1.2,
        }}>{title}</h2>
      </div>
      <div style={{
        fontFamily: "var(--font-inter),sans-serif",
        fontSize: 13,
        lineHeight: 1.85,
        color: "rgba(237,228,204,0.58)",
        paddingLeft: 16,
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}>
        {children}
      </div>
    </section>
  )
}

const DATA_POINTS = [
  "Technical logs: IP address, browser type, approximate location, and access timestamps.",
  "Usage signals: pages visited, scroll-depth approximations — only if analytics is enabled.",
  "Communications: if you contact us by email, we retain the correspondence as long as necessary to resolve your query.",
]

export default function PrivacyPolicyPage() {
  const reviewed = new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: "40px 16px 80px" }}>

      {/* Back link */}
      <Link
        href="/"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          fontFamily: "var(--font-inter),sans-serif",
          fontSize: 9,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.36em",
          color: "rgba(201,168,76,0.52)",
          textDecoration: "none",
          marginBottom: 36,
          transition: "color 0.15s",
        }}
      >
        <ArrowLeft style={{ width: 13, height: 13 }} />
        Return to Rankings
      </Link>

      {/* Card */}
      <div style={{
        backgroundColor: "#0d0d1a",
        border: "1px solid rgba(201,168,76,0.18)",
      }}>
        <div style={{ height: 2, backgroundColor: GOLD }} />

        <div style={{ padding: "clamp(28px,5vw,52px) clamp(22px,5vw,48px)" }}>

          {/* Heading */}
          <div style={{
            textAlign: "center",
            marginBottom: 44,
            paddingBottom: 36,
            borderBottom: "1px solid rgba(201,168,76,0.09)",
          }}>
            <p style={{
              fontFamily: "var(--font-inter),sans-serif",
              fontSize: 8,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.48em",
              color: "rgba(201,168,76,0.42)",
              marginBottom: 14,
            }}>ukbestcasinosites.com</p>
            <h1 style={{
              fontFamily: "var(--font-playfair),Georgia,serif",
              fontWeight: 800,
              fontSize: "clamp(2rem,5vw,3rem)",
              color: PARCHMENT,
              lineHeight: 1.05,
            }}>Privacy Policy</h1>
            <p style={{
              fontFamily: "var(--font-inter),sans-serif",
              fontSize: 11,
              color: "rgba(237,228,204,0.30)",
              marginTop: 12,
            }}>Last reviewed: {reviewed}</p>
          </div>

          <PolicySection title="Who We Are">
            <p>
              ukbestcasinosites.com publishes independent editorial comparisons of UK-licensed online casinos.
              This policy explains what personal data may come into contact with our systems and how we handle it.
            </p>
          </PolicySection>

          <div style={{ height: 1, backgroundColor: "rgba(201,168,76,0.07)", margin: "0 0 36px" }} />

          <PolicySection title="Data We May Process">
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {DATA_POINTS.map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                  <div style={{
                    flexShrink: 0, width: 4, height: 4,
                    backgroundColor: GOLD, marginTop: 8, opacity: 0.65,
                  }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p style={{ fontSize: 11, color: "rgba(237,228,204,0.36)", marginTop: 4 }}>
              We operate no casino; we hold no gaming history, payment card data, or account credentials.
            </p>
          </PolicySection>

          <div style={{ height: 1, backgroundColor: "rgba(201,168,76,0.07)", margin: "0 0 36px" }} />

          <PolicySection title="Legal Bases (UK GDPR)">
            <p>
              Where UK law applies, we rely on <strong style={{ color: PARCHMENT }}>legitimate interest</strong> to operate
              and secure the site, and on <strong style={{ color: PARCHMENT }}>consent</strong> where we request it (for
              example, non-essential cookies). You may withdraw consent at any time via your browser settings or our cookie banner.
            </p>
          </PolicySection>

          <div style={{ height: 1, backgroundColor: "rgba(201,168,76,0.07)", margin: "0 0 36px" }} />

          <PolicySection title="Sharing Your Data">
            <p>
              Hosting providers, analytics vendors, and affiliate networks may process data on our behalf under
              contractual safeguards. We do not sell personal data as a product. Lawful requests from public authorities
              will be honoured when legally required.
            </p>
          </PolicySection>

          <div style={{ height: 1, backgroundColor: "rgba(201,168,76,0.07)", margin: "0 0 36px" }} />

          <PolicySection title="Retention">
            <p>
              Server logs are rotated on a short cycle. Analytics aggregates are retained in anonymised form. Email
              correspondence is deleted once the matter is resolved, unless retention is required by law.
            </p>
          </PolicySection>

          <div style={{ height: 1, backgroundColor: "rgba(201,168,76,0.07)", margin: "0 0 36px" }} />

          <PolicySection title="Security">
            <p>
              We enforce HTTPS, apply access controls to administrative interfaces, and partner with vendors that
              maintain strong security practices. No online system is entirely immune to breach — please report
              any suspected vulnerabilities promptly.
            </p>
          </PolicySection>

          <div style={{ height: 1, backgroundColor: "rgba(201,168,76,0.07)", margin: "0 0 36px" }} />

          <PolicySection title="Your Rights">
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
                style={{ color: GOLD, textDecoration: "underline", textUnderlineOffset: 3 }}
              >
                Information Commissioner&apos;s Office (ICO)
              </a>
              .
            </p>
          </PolicySection>

          <div style={{ height: 1, backgroundColor: "rgba(201,168,76,0.07)", margin: "0 0 36px" }} />

          <PolicySection title="Children">
            <p>
              Our services are directed exclusively at adults aged 18 and over. We do not knowingly collect data from
              minors. If you believe a child has interacted with this site, please contact us and we will arrange removal.
            </p>
          </PolicySection>

          <div style={{ height: 1, backgroundColor: "rgba(201,168,76,0.07)", margin: "0 0 36px" }} />

          <PolicySection title="International Transfers">
            <p>
              Certain subprocessors operate outside the UK/EEA. Where this applies, we rely on appropriate transfer
              mechanisms such as UK Standard Contractual Clauses as updated under UK GDPR.
            </p>
          </PolicySection>

          <div style={{ height: 1, backgroundColor: "rgba(201,168,76,0.07)", margin: "0 0 36px" }} />

          <PolicySection title="Changes to This Policy">
            <p>
              Updates will be published here with a revised review date. Continued use of the site following material
              changes constitutes acceptance of the revised policy unless fresh consent is required.
            </p>
          </PolicySection>

          <div style={{ height: 1, backgroundColor: "rgba(201,168,76,0.07)", margin: "0 0 36px" }} />

          <PolicySection title="Contact">
            <p>
              For data-related enquiries, please contact the publisher at{" "}
              <a
                href="mailto:info@ukbestcasinosites.com"
                style={{ color: GOLD, textDecoration: "underline", textUnderlineOffset: 3 }}
              >
                info@ukbestcasinosites.com
              </a>
              .
            </p>
            <p>
              For cookie-specific information, see our{" "}
              <Link href="/cookie-policy" style={{ color: GOLD, textDecoration: "underline", textUnderlineOffset: 3 }}>
                Cookie Policy
              </Link>
              .
            </p>
          </PolicySection>

        </div>
      </div>
    </div>
  )
}
