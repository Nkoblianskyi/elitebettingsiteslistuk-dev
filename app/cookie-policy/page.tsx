import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type React from "react"

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Cookie policy for elitecasinossitesuk.com — what cookies we use, how to control them, and the difference between session and persistent cookies.",
  keywords: ["cookie policy", "cookies", "elitecasinossitesuk cookies", "browser cookies"],
  openGraph: {
    title: "Cookie Policy | Elite Casinos Sites UK",
    description: "What cookies elitecasinossitesuk.com uses and how to manage your preferences.",
    url: "https://elitecasinossitesuk.com/cookie-policy",
  },
  robots: { index: false, follow: false },
}

const GOLD = "#C9A84C"
const BLACK_CARD = "#141414"
const CRIMSON = "#8B1A1A"
const IVORY = "#F5F0E8"

function Section({ num, title, children }: { num: number; title: string; children: React.ReactNode }) {
  return (
    <section className="mb-7">
      <div className="flex items-baseline gap-3 mb-3">
        <span
          className="font-serif font-bold text-xl shrink-0"
          style={{ color: "rgba(139,26,26,0.5)" }}
        >
          {num}.
        </span>
        <h2 className="font-serif font-bold text-lg sm:text-xl" style={{ color: IVORY }}>
          {title}
        </h2>
      </div>
      <div
        className="font-sans text-sm leading-relaxed space-y-3 pl-7"
        style={{ color: "rgba(245,240,232,0.66)" }}
      >
        {children}
      </div>
    </section>
  )
}

export default function CookiePolicyPage() {
  const effectiveDate = new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-wider mb-8 transition-opacity hover:opacity-75"
        style={{ color: "rgba(201,168,76,0.65)" }}
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        Return to Rankings
      </Link>

      <div className="border" style={{ backgroundColor: BLACK_CARD, borderColor: "rgba(139,26,26,0.3)" }}>
        <div className="h-[3px]" style={{ background: CRIMSON }} />
        <div className="h-px" style={{ background: "rgba(201,168,76,0.2)" }} />

        <div className="px-6 py-8 sm:px-10 sm:py-10">
          {/* Heading */}
          <div
            className="text-center mb-8 pb-6 border-b"
            style={{ borderColor: "rgba(139,26,26,0.18)" }}
          >
            <p
              className="text-[9px] font-sans font-bold uppercase tracking-[0.35em] mb-2"
              style={{ color: "rgba(201,168,76,0.5)" }}
            >
              elitecasinossitesuk.com
            </p>
            <h1 className="font-serif font-bold text-3xl lg:text-4xl" style={{ color: IVORY }}>
              Cookie Policy
            </h1>
            <p className="font-sans text-xs mt-3" style={{ color: "rgba(245,240,232,0.38)" }}>
              Effective: {effectiveDate}
            </p>
          </div>

          <Section num={1} title="What Is a Cookie?">
            <p>
              A cookie is a small text file placed on your device when you visit a website. It may remember your
              preferences, maintain a session state, or provide us with aggregate traffic data — always transparently
              and in accordance with our obligations under UK law.
            </p>
          </Section>

          <div className="h-px my-5" style={{ background: "rgba(139,26,26,0.1)" }} />

          <Section num={2} title="How elitecasinossitesuk Uses Cookies">
            <ul className="space-y-2">
              {[
                [
                  "Strictly Necessary",
                  "Stores your consent choice and security tokens required to operate the site correctly. These cannot be disabled without affecting core functionality.",
                ],
                [
                  "Analytics (if accepted)",
                  "Anonymous, aggregated page-view data used to identify which content serves visitors best. No personally identifiable information is collected.",
                ],
                [
                  "Functional",
                  "Retains UI preferences such as dismissed notices or expanded sections where these features are implemented.",
                ],
                [
                  "Referral / Affiliate",
                  "When you navigate to a casino operator via a link on this site, that operator's affiliate network may set its own cookies. These are governed entirely by the operator's own cookie and privacy policy — they fall outside our control.",
                ],
              ].map(([term, def]) => (
                <li key={term as string}>
                  <strong className="font-semibold" style={{ color: IVORY }}>
                    {term}:{" "}
                  </strong>
                  {def}
                </li>
              ))}
            </ul>
          </Section>

          <div className="h-px my-5" style={{ background: "rgba(139,26,26,0.1)" }} />

          <Section num={3} title="Session vs Persistent Cookies">
            <p>
              Session cookies are erased automatically when you close your browser tab or window. Persistent cookies
              remain on your device until their pre-set expiry date or until you delete them manually via your browser
              settings. We keep cookie lifetimes as short as practical for each individual purpose.
            </p>
          </Section>

          <div className="h-px my-5" style={{ background: "rgba(139,26,26,0.1)" }} />

          <Section num={4} title="Third-Party Cookies">
            <p>
              Embedded analytics platforms, advertising networks, or other partner scripts active on this domain may
              set their own cookies under their own separate privacy policies. We encourage you to consult those
              third-party documents for complete information about their data practices.
            </p>
          </Section>

          <div className="h-px my-5" style={{ background: "rgba(139,26,26,0.1)" }} />

          <Section num={5} title="Your Controls">
            <p>
              Every major browser provides tools to view, block, delete, or automatically expire cookies. Private or
              Incognito browsing mode prevents most persistent cookies from being written to your device during that
              session.
            </p>
            <p>
              Blocking all cookies may affect site functionality — for example, the consent preference banner may
              reappear on each visit if its corresponding preference cookie cannot be stored.
            </p>
          </Section>

          <div className="h-px my-5" style={{ background: "rgba(139,26,26,0.1)" }} />

          <Section num={6} title="Policy Updates">
            <p>
              We revise this notice whenever our technical stack or data practices change materially. The effective
              date at the top of this page indicates the most recent update. Significant changes may also be
              highlighted on the homepage for a brief period following publication.
            </p>
          </Section>

          <div className="h-px my-5" style={{ background: "rgba(139,26,26,0.1)" }} />

          <Section num={7} title="Contact">
            <p>
              For any questions about this Cookie Policy, please write to{" "}
              <a
                href="mailto:info@elitecasinossitesuk.com"
                className="underline font-medium"
                style={{ color: GOLD }}
              >
                info@elitecasinossitesuk.com
              </a>
              . See also our{" "}
              <Link href="/privacy-policy" className="underline font-medium" style={{ color: GOLD }}>
                Privacy Policy
              </Link>
              .
            </p>
          </Section>
        </div>
      </div>
    </div>
  )
}
