import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type React from "react"

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Cookie policy for elitebettingsiteslistuk.com — what cookies we use, how to control them, and the difference between session and persistent cookies.",
  keywords: ["cookie policy", "cookies", "elitebettingsiteslistuk cookies", "browser cookies"],
  openGraph: {
    title: "Cookie Policy | Elite Betting Sites UK",
    description: "What cookies elitebettingsiteslistuk.com uses and how to manage your preferences.",
    url: "https://elitebettingsiteslistuk.com/cookie-policy",
  },
  robots: { index: false, follow: false },
}

const GOLD = "#C9A84C"
const NAVY_CARD = "#131E2B"
const IVORY = "#F5F0E8"

function Section({ num, title, children }: { num: number; title: string; children: React.ReactNode }) {
  return (
    <section className="mb-7">
      <div className="flex items-baseline gap-3 mb-3">
        <span className="font-serif font-bold text-xl shrink-0" style={{ color: "rgba(201,168,76,0.35)" }}>
          {num}.
        </span>
        <h2 className="font-serif font-bold text-lg sm:text-xl" style={{ color: IVORY }}>
          {title}
        </h2>
      </div>
      <div className="font-sans text-sm leading-relaxed space-y-3 pl-7" style={{ color: "rgba(245,240,232,0.68)" }}>
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
        style={{ color: "rgba(201,168,76,0.7)" }}
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        Return to Rankings
      </Link>

      <div className="border" style={{ backgroundColor: NAVY_CARD, borderColor: "rgba(201,168,76,0.25)" }}>
        <div className="h-[2px]" style={{ background: GOLD }} />

        <div className="px-6 py-8 sm:px-10 sm:py-10">
          {/* Heading */}
          <div className="text-center mb-8 pb-6 border-b" style={{ borderColor: "rgba(201,168,76,0.15)" }}>
            <p className="text-[9px] font-sans font-bold uppercase tracking-[0.35em] mb-2" style={{ color: "rgba(201,168,76,0.55)" }}>
              elitebettingsiteslistuk.com
            </p>
            <h1 className="font-serif font-bold text-3xl lg:text-4xl" style={{ color: IVORY }}>
              Cookie Policy
            </h1>
            <p className="font-sans text-xs mt-3" style={{ color: "rgba(245,240,232,0.4)" }}>
              Effective: {effectiveDate}
            </p>
          </div>

          <Section num={1} title="What Is a Cookie?">
            <p>
              A cookie is a small text file placed on your device when you load a page. It may remember your
              preferences, maintain a session, or provide us with aggregate traffic data — never without transparency.
            </p>
          </Section>

          <div className="h-px my-5" style={{ background: "rgba(201,168,76,0.08)" }} />

          <Section num={2} title="How elitebettingsiteslistuk Uses Cookies">
            <ul className="space-y-2">
              {[
                ["Strictly Necessary", "Stores your consent choice and security tokens required to run the site."],
                ["Analytics (if accepted)", "Anonymous page-view counts used to identify sections that may need improvement."],
                ["Functional", "Retains UI state such as dismissed modals where implemented."],
                ["Referral / Affiliate", "When you navigate to a bookmaker, that operator's network may set its own cookies — these fall outside our control."],
              ].map(([term, def]) => (
                <li key={term as string}>
                  <strong className="font-semibold" style={{ color: IVORY }}>{term}: </strong>
                  {def}
                </li>
              ))}
            </ul>
          </Section>

          <div className="h-px my-5" style={{ background: "rgba(201,168,76,0.08)" }} />

          <Section num={3} title="Session vs Persistent Cookies">
            <p>
              Session cookies are erased when you close your browser. Persistent cookies remain until their expiry date
              or until you delete them manually. We keep cookie lifetimes as short as practical for each purpose.
            </p>
          </Section>

          <div className="h-px my-5" style={{ background: "rgba(201,168,76,0.08)" }} />

          <Section num={4} title="Third-Party Cookies">
            <p>
              Embedded widgets, analytics platforms, or partner scripts may set their own cookies under separate
              policies. Please consult those third-party documents for full detail.
            </p>
          </Section>

          <div className="h-px my-5" style={{ background: "rgba(201,168,76,0.08)" }} />

          <Section num={5} title="Your Controls">
            <p>
              Every major browser allows you to block, delete, or auto-expire cookies. Private or Incognito mode prevents
              most persistent cookies from being written.
            </p>
            <p>
              Blocking all cookies may affect site functionality — for example, the consent banner may reappear on each
              visit if its preference cookie is not stored.
            </p>
          </Section>

          <div className="h-px my-5" style={{ background: "rgba(201,168,76,0.08)" }} />

          <Section num={6} title="Policy Updates">
            <p>
              We revise this notice when our technical stack changes. The effective date at the top indicates the most
              recent refresh. Material changes may also be signalled on the homepage for a brief period.
            </p>
          </Section>

          <div className="h-px my-5" style={{ background: "rgba(201,168,76,0.08)" }} />

          <Section num={7} title="Contact">
            <p>
              For questions about this notice, please write to{" "}
              <a href="mailto:info@elitebettingsiteslistuk.com" className="underline font-medium" style={{ color: GOLD }}>
                info@elitebettingsiteslistuk.com
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
