import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type React from "react"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn how ukbestcasinosites.com independently ranks UK-licensed casinos using six editorial pillars — game library, live casino, platform stability, payout speed, promotions, and support.",
  keywords: [
    "about UK best casino sites",
    "UK casino comparison methodology",
    "independent casino reviews",
    "editorial standards UK gambling",
  ],
  openGraph: {
    title: "About Us | UK Best Casino Sites",
    description:
      "Independent editorial platform dedicated to helping UK players make informed decisions about licensed casinos.",
    url: "https://ukbestcasinosites.com/about",
  },
}

const GOLD = "#D4A853"
const FOREST_CARD = "#161616"
const PARCHMENT = "#F5F0E8"

function PageShell({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
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
        {/* Gold top bar */}
        <div className="h-[3px]" style={{ background: GOLD }} />

        <div className="px-6 py-8 sm:px-10 sm:py-10">
          {/* Page heading */}
          <div className="text-center mb-8 pb-6 border-b" style={{ borderColor: "rgba(184,150,90,0.12)" }}>
            <p className="font-sans text-[8px] font-semibold uppercase tracking-[0.42em] mb-2" style={{ color: "rgba(184,150,90,0.5)" }}>
              ukbestcasinosites.com
            </p>
            <h1 className="font-serif font-semibold text-3xl lg:text-4xl" style={{ color: PARCHMENT }}>
              {title}
            </h1>
            {subtitle && (
              <p className="font-sans text-sm mt-3 max-w-xl mx-auto leading-relaxed" style={{ color: "rgba(242,236,217,0.58)" }}>
                {subtitle}
              </p>
            )}
          </div>

          {children}
        </div>
      </div>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-7">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-[2px] h-5 shrink-0" style={{ background: GOLD }} />
        <h2 className="font-serif font-semibold text-xl" style={{ color: PARCHMENT }}>
          {title}
        </h2>
      </div>
      <div className="font-sans text-sm leading-relaxed space-y-3 pl-5" style={{ color: "rgba(242,236,217,0.68)" }}>
        {children}
      </div>
    </section>
  )
}

export default function AboutPage() {
  return (
    <PageShell
      title="About Us"
      subtitle="UK Best Casino Sites is an independent editorial platform dedicated to helping UK players make informed decisions about licensed online casinos."
    >
      <div className="space-y-0">
        <Section title="Why We Exist">
          <p>
            The UK online casino market is expansive, fast-moving, and — for a newcomer — often difficult to navigate.
            Every operator promotes its headline welcome bonus while the fine print shifts without notice.
            ukbestcasinosites.com exists to cut through that noise: one authoritative table, consistent scoring criteria,
            and plain-English editorial notes so you can compare platforms on equal terms before you open a single account.
          </p>
        </Section>

        <div className="h-px my-6" style={{ background: "rgba(184,150,90,0.1)" }} />

        <Section title="Our Editorial Standards">
          <p>
            Rankings are built on six independent pillars: game library breadth and software quality, live casino experience,
            platform stability across devices, payout processing smoothness, promotional transparency, and customer support
            quality. Commercial affiliate relationships help fund this publication but do not influence the order of merit —
            if a platform&apos;s performance declines, the score moves accordingly.
          </p>
          <div
            className="border mt-4 px-5 py-4"
            style={{ borderColor: "rgba(184,150,90,0.18)", backgroundColor: "rgba(17,17,17,0.6)" }}
          >
            <ul className="space-y-2 text-xs" style={{ color: "rgba(242,236,217,0.62)" }}>
              {[
                ["Licensing", "Only operators with appropriate UK Gambling Commission authorisation are considered."],
                ["Player Safety", "Deposit limits, cooling-off periods, and self-exclusion must be readily accessible."],
                ["Game Quality", "Software provider breadth and verified RTP transparency are assessed."],
                ["Payment Rails", "Common UK banking methods and withdrawal speed are evaluated."],
                ["Support Quality", "Availability and responsiveness of help channels are factored in."],
              ].map(([term, def]) => (
                <li key={term as string} className="flex items-start gap-2">
                  <span className="shrink-0 w-1 h-1 rounded-full mt-2" style={{ backgroundColor: GOLD }} />
                  <span>
                    <strong className="font-semibold" style={{ color: PARCHMENT }}>{term}: </strong>
                    {def}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        <div className="h-px my-6" style={{ background: "rgba(184,150,90,0.1)" }} />

        <Section title="How We Work">
          <p>
            Where possible, our editors open real accounts, complete verification procedures, and test withdrawal journeys
            first-hand. We also monitor specialist forums, regulator bulletins, and player feedback. When an operator alters
            a headline offer or changes payout terms materially, we aim to reflect that within the same week.
          </p>
        </Section>

        <div className="h-px my-6" style={{ background: "rgba(184,150,90,0.1)" }} />

        <Section title="Commercial Transparency">
          <p>
            Outbound links may carry affiliate identifiers. This arrangement does not alter our ranking methodology.
            A full disclosure of commercial relationships is available via the Advertiser Disclosure link on the homepage.
          </p>
        </Section>

        <div className="h-px my-6" style={{ background: "rgba(184,150,90,0.1)" }} />

        <Section title="Responsible Play">
          <p>
            Casino play should be a leisure activity conducted within pre-set financial limits. If it becomes compulsive,
            feels escapist, or you find yourself chasing losses, please step away immediately and contact the free,
            confidential support organisations listed in our site footer.
          </p>
        </Section>

        {/* 18+ notice */}
        <div
          className="mt-8 border-l-4 px-5 py-5"
          style={{ borderLeftColor: GOLD, backgroundColor: "rgba(184,150,90,0.05)" }}
        >
          <p className="font-sans font-semibold text-sm mb-1.5" style={{ color: GOLD }}>
            18+ Only
          </p>
          <p className="font-sans text-xs leading-relaxed" style={{ color: "rgba(242,236,217,0.58)" }}>
            ukbestcasinosites.com does not operate a casino or accept wagers. All gaming activity takes place on
            licensed third-party platforms under their own terms and conditions.
          </p>
        </div>
      </div>
    </PageShell>
  )
}
