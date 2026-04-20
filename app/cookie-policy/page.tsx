import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type React from "react"

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Cookie policy for trustedcasinossitesuk.com — what cookies we use, how to control them, and the difference between session and persistent cookies.",
  keywords: ["cookie policy", "cookies", "trustedcasinossitesuk cookies", "browser cookies"],
  openGraph: {
    title: "Cookie Policy | Trusted Casinos Sites UK",
    description: "What cookies trustedcasinossitesuk.com uses and how to manage your preferences.",
    url: "https://trustedcasinossitesuk.com/cookie-policy",
  },
  robots: { index: false, follow: false },
}

const GOLD = "#C9A84C"
const FOREST_CARD = "#111111"
const PARCHMENT = "#EDE4CC"

function Section({ num, title, children }: { num: number; title: string; children: React.ReactNode }) {
  return (
    <section className="mb-7">
      <div className="flex items-baseline gap-3 mb-3">
        <span className="font-serif font-light text-xl shrink-0 w-6 text-right" style={{ color: "rgba(184,150,90,0.32)" }}>
          {num}.
        </span>
        <h2 className="font-serif font-semibold text-lg sm:text-xl" style={{ color: PARCHMENT }}>
          {title}
        </h2>
      </div>
      <div className="font-sans text-sm leading-relaxed space-y-3 pl-9" style={{ color: "rgba(242,236,217,0.65)" }}>
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
              Cookie Policy
            </h1>
            <p className="font-sans text-xs mt-3" style={{ color: "rgba(242,236,217,0.38)" }}>
              Effective: {effectiveDate}
            </p>
          </div>

          <Section num={1} title="What Is a Cookie?">
            <p>
              A cookie is a small text file placed on your device when you load a page. It may remember your
              preferences, maintain a session, or provide us with aggregate traffic data — never without transparency.
            </p>
          </Section>

          <div className="h-px my-5" style={{ background: "rgba(184,150,90,0.08)" }} />

          <Section num={2} title="How We Use Cookies">
            <ul className="space-y-2">
              {[
                ["Strictly Necessary", "Stores your consent choice and security tokens required to run the site."],
                ["Analytics (if accepted)", "Anonymous page-view counts used to identify sections that may need improvement."],
                ["Functional", "Retains interface state such as dismissed modals where implemented."],
                ["Referral / Affiliate", "When you navigate to an operator, that platform's network may set its own cookies — these fall outside our control."],
              ].map(([term, def]) => (
                <li key={term as string} className="flex items-start gap-2.5">
                  <span className="shrink-0 w-1 h-1 rounded-full mt-2" style={{ backgroundColor: GOLD }} />
                  <span>
                    <strong className="font-semibold" style={{ color: PARCHMENT }}>{term}: </strong>
                    {def}
                  </span>
                </li>
              ))}
            </ul>
          </Section>

          <div className="h-px my-5" style={{ background: "rgba(184,150,90,0.08)" }} />

          <Section num={3} title="Session vs Persistent Cookies">
            <p>
              Session cookies are erased when you close your browser. Persistent cookies remain until their expiry date
              or until you delete them manually. We keep cookie lifetimes as short as practical for each purpose.
            </p>
          </Section>

          <div className="h-px my-5" style={{ background: "rgba(184,150,90,0.08)" }} />

          <Section num={4} title="Third-Party Cookies">
            <p>
              Embedded widgets, analytics platforms, or partner scripts may set their own cookies under separate
              policies. Please consult those third-party documents for full detail.
            </p>
          </Section>

          <div className="h-px my-5" style={{ background: "rgba(184,150,90,0.08)" }} />

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

          <div className="h-px my-5" style={{ background: "rgba(184,150,90,0.08)" }} />

          <Section num={6} title="Policy Updates">
            <p>
              We revise this notice when our technical stack changes. The effective date at the top indicates the most
              recent refresh. Material changes may also be signalled on the homepage for a brief period.
            </p>
          </Section>

          <div className="h-px my-5" style={{ background: "rgba(184,150,90,0.08)" }} />

          <Section num={7} title="Contact">
            <p>
              For questions about this notice, please write to{" "}
              <a
                href="mailto:info@trustedcasinossitesuk.com"
                className="underline underline-offset-2 font-medium transition-opacity hover:opacity-75"
                style={{ color: GOLD }}
              >
                info@trustedcasinossitesuk.com
              </a>
              . See also our{" "}
              <Link href="/privacy-policy" className="underline underline-offset-2 font-medium transition-opacity hover:opacity-75" style={{ color: GOLD }}>
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
