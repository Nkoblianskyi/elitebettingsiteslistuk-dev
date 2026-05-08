import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type React from "react"

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Cookie policy for ukbestcasinosites.com — what cookies we use, how to control them, and the difference between session and persistent cookies.",
  keywords: ["cookie policy", "cookies", "ukbestcasinosites cookies", "browser cookies"],
  openGraph: {
    title: "Cookie Policy | UK Best Casino Sites",
    description: "What cookies ukbestcasinosites.com uses and how to manage your preferences.",
    url: "https://ukbestcasinosites.com/cookie-policy",
  },
  robots: { index: false, follow: false },
}

const GOLD = "#D4A853"
const PARCHMENT = "#F5F0E8"

function PolicySection({ num, title, children }: { num: number; title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: 36 }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 14 }}>
        <span style={{
          fontFamily: "var(--font-playfair),Georgia,serif",
          fontStyle: "italic",
          fontWeight: 400,
          fontSize: "1.2rem",
          color: "rgba(201,168,76,0.28)",
          flexShrink: 0,
          width: 22,
          textAlign: "right",
          lineHeight: 1,
        }}>{num}</span>
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
        paddingLeft: 38,
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}>
        {children}
      </div>
    </section>
  )
}

const COOKIE_TYPES: [string, string][] = [
  ["Strictly Necessary", "Stores your consent choice and security tokens required to run the site."],
  ["Analytics (if accepted)", "Anonymous page-view counts used to identify sections that may need improvement."],
  ["Functional", "Retains interface state such as dismissed modals where implemented."],
  ["Referral / Affiliate", "When you navigate to an operator, that platform's network may set its own cookies — these fall outside our control."],
]

export default function CookiePolicyPage() {
  const effectiveDate = new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })

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
        backgroundColor: "#161616",
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
            }}>Cookie Policy</h1>
            <p style={{
              fontFamily: "var(--font-inter),sans-serif",
              fontSize: 11,
              color: "rgba(237,228,204,0.30)",
              marginTop: 12,
            }}>Effective: {effectiveDate}</p>
          </div>

          <PolicySection num={1} title="What Is a Cookie?">
            <p>
              A cookie is a small text file placed on your device when you load a page. It may remember your
              preferences, maintain a session, or provide us with aggregate traffic data — never without transparency.
            </p>
          </PolicySection>

          <div style={{ height: 1, backgroundColor: "rgba(201,168,76,0.07)", margin: "0 0 36px" }} />

          <PolicySection num={2} title="How We Use Cookies">
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {COOKIE_TYPES.map(([term, def]) => (
                <li key={term} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                  <div style={{
                    flexShrink: 0,
                    width: 4,
                    height: 4,
                    backgroundColor: GOLD,
                    marginTop: 8,
                    opacity: 0.65,
                  }} />
                  <span>
                    <strong style={{ color: PARCHMENT }}>{term}:</strong>{" "}{def}
                  </span>
                </li>
              ))}
            </ul>
          </PolicySection>

          <div style={{ height: 1, backgroundColor: "rgba(201,168,76,0.07)", margin: "0 0 36px" }} />

          <PolicySection num={3} title="Session vs Persistent Cookies">
            <p>
              Session cookies are erased when you close your browser. Persistent cookies remain until their expiry date
              or until you delete them manually. We keep cookie lifetimes as short as practical for each purpose.
            </p>
          </PolicySection>

          <div style={{ height: 1, backgroundColor: "rgba(201,168,76,0.07)", margin: "0 0 36px" }} />

          <PolicySection num={4} title="Third-Party Cookies">
            <p>
              Embedded widgets, analytics platforms, or partner scripts may set their own cookies under separate
              policies. Please consult those third-party documents for full detail.
            </p>
          </PolicySection>

          <div style={{ height: 1, backgroundColor: "rgba(201,168,76,0.07)", margin: "0 0 36px" }} />

          <PolicySection num={5} title="Your Controls">
            <p>
              Every major browser allows you to block, delete, or auto-expire cookies. Private or Incognito mode prevents
              most persistent cookies from being written.
            </p>
            <p>
              Blocking all cookies may affect site functionality — for example, the consent banner may reappear on each
              visit if its preference cookie is not stored.
            </p>
          </PolicySection>

          <div style={{ height: 1, backgroundColor: "rgba(201,168,76,0.07)", margin: "0 0 36px" }} />

          <PolicySection num={6} title="Policy Updates">
            <p>
              We revise this notice when our technical stack changes. The effective date at the top indicates the most
              recent refresh. Material changes may also be signalled on the homepage for a brief period.
            </p>
          </PolicySection>

          <div style={{ height: 1, backgroundColor: "rgba(201,168,76,0.07)", margin: "0 0 36px" }} />

          <PolicySection num={7} title="Contact">
            <p>
              For questions about this notice, please write to{" "}
              <a
                href="mailto:info@ukbestcasinosites.com"
                style={{ color: GOLD, textDecoration: "underline", textUnderlineOffset: 3 }}
              >
                info@ukbestcasinosites.com
              </a>
              . See also our{" "}
              <Link href="/privacy-policy" style={{ color: GOLD, textDecoration: "underline", textUnderlineOffset: 3 }}>
                Privacy Policy
              </Link>
              .
            </p>
          </PolicySection>

        </div>
      </div>
    </div>
  )
}
