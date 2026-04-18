import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn how elitebettingsiteslistuk.com independently ranks UK-licensed bookmakers using six editorial pillars — odds, live coverage, platform stability, KYC, promotions, and support.",
  keywords: [
    "about elite betting sites UK",
    "UK bookmaker comparison methodology",
    "independent betting site reviews",
    "editorial standards UK gambling",
  ],
  openGraph: {
    title: "About Us | Elite Betting Sites UK",
    description:
      "Independent editorial platform dedicated to helping British punters make informed decisions about licensed bookmakers.",
    url: "https://elitebettingsiteslistuk.com/about",
  },
}

const GOLD = "#C9A84C"
const NAVY_CARD = "#131E2B"
const IVORY = "#F5F0E8"

function PageShell({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
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

      <div
        className="border"
        style={{ backgroundColor: NAVY_CARD, borderColor: "rgba(201,168,76,0.25)" }}
      >
        {/* Gold top bar */}
        <div className="h-[2px]" style={{ background: GOLD }} />

        <div className="px-6 py-8 sm:px-10 sm:py-10">
          {/* Page heading */}
          <div className="text-center mb-8 pb-6 border-b" style={{ borderColor: "rgba(201,168,76,0.15)" }}>
            <p className="text-[9px] font-sans font-bold uppercase tracking-[0.35em] mb-2" style={{ color: "rgba(201,168,76,0.55)" }}>
              elitebettingsiteslistuk.com
            </p>
            <h1 className="font-serif font-bold text-3xl lg:text-4xl" style={{ color: IVORY }}>
              {title}
            </h1>
            {subtitle && (
              <p className="font-sans text-sm mt-3 max-w-xl mx-auto leading-relaxed" style={{ color: "rgba(245,240,232,0.6)" }}>
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
      <h2 className="font-serif font-bold text-xl mb-3" style={{ color: IVORY }}>
        {title}
      </h2>
      <div className="font-sans text-sm leading-relaxed space-y-3" style={{ color: "rgba(245,240,232,0.7)" }}>
        {children}
      </div>
    </section>
  )
}

export default function AboutPage() {
  return (
    <PageShell
      title="About Us"
      subtitle="Elite Betting Sites UK is an independent editorial platform dedicated to helping British punters make informed decisions about licensed bookmakers."
    >
      <div className="space-y-0">
        <Section title="Why We Exist">
          <p>
            The UK sports betting market is crowded, fast-moving, and — for a newcomer — often opaque. Every operator
            promotes its headline free bet while the fine print shifts week to week. elitebettingsiteslistuk.com exists
            to cut through that noise: one authoritative table, consistent scoring criteria, and plain-English editorial
            notes so you can compare operators on equal terms before you open a single account.
          </p>
        </Section>

        <div className="h-px my-6" style={{ background: "rgba(201,168,76,0.1)" }} />

        <Section title="Our Editorial Standards">
          <p>
            Rankings are built on six independent pillars: odds competitiveness on mainstream markets, live coverage
            depth, platform stability across devices, KYC and withdrawal smoothness, promotional transparency, and
            customer support quality. Commercial affiliate relationships help fund this publication but do not influence
            the order of merit — if a brand&apos;s performance declines, the score moves accordingly.
          </p>
          <div
            className="border mt-4 px-5 py-4"
            style={{ borderColor: "rgba(201,168,76,0.2)", backgroundColor: "rgba(13,27,42,0.5)" }}
          >
            <ul className="space-y-2 text-xs" style={{ color: "rgba(245,240,232,0.65)" }}>
              {[
                ["Licensing", "Only operators with appropriate UK authorisation are considered."],
                ["Player Safety", "Deposit limits, reality checks, and self-exclusion must be readily accessible."],
                ["Product Breadth", "Live betting, bet builders, and streaming are assessed where offered."],
                ["Payment Rails", "Common UK banking methods and cash-out speed are evaluated."],
                ["Support Quality", "Availability and responsiveness of help channels are factored in."],
              ].map(([term, def]) => (
                <li key={term}>
                  <strong className="font-semibold" style={{ color: IVORY }}>{term}: </strong>
                  {def}
                </li>
              ))}
            </ul>
          </div>
        </Section>

        <div className="h-px my-6" style={{ background: "rgba(201,168,76,0.1)" }} />

        <Section title="How We Work">
          <p>
            Where possible, our editors open real accounts, complete KYC procedures, and time withdrawal journeys
            first-hand. We also monitor specialist forums, regulator bulletins, and consumer feedback. When an operator
            alters a headline offer or changes payout terms materially, we aim to reflect that within the same week.
          </p>
        </Section>

        <div className="h-px my-6" style={{ background: "rgba(201,168,76,0.1)" }} />

        <Section title="Commercial Transparency">
          <p>
            Outbound links may carry affiliate identifiers. This arrangement does not alter our ranking methodology.
            A full disclosure of commercial relationships is available via the Advertiser Disclosure link on the
            homepage.
          </p>
        </Section>

        <div className="h-px my-6" style={{ background: "rgba(201,168,76,0.1)" }} />

        <Section title="Responsible Gambling">
          <p>
            Betting should be a leisure activity conducted within pre-set financial limits. If wagering becomes
            compulsive, feels escapist, or you find yourself chasing losses, we urge you to step away immediately and
            contact the free, confidential support organisations listed in our site footer.
          </p>
        </Section>

        {/* 18+ notice */}
        <div
          className="mt-8 border-l-4 px-5 py-5"
          style={{ borderLeftColor: GOLD, backgroundColor: "rgba(201,168,76,0.06)" }}
        >
          <p className="font-sans font-semibold text-sm mb-1.5" style={{ color: GOLD }}>
            18+ Only
          </p>
          <p className="font-sans text-xs leading-relaxed" style={{ color: "rgba(245,240,232,0.6)" }}>
            elitebettingsiteslistuk.com does not accept wagers. All betting activity takes place on licensed
            third-party platforms under their own terms and conditions.
          </p>
        </div>
      </div>
    </PageShell>
  )
}
