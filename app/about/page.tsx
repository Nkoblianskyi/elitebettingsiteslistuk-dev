import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn how elitecasinossitesuk.com independently ranks UK-licensed casinos using six editorial pillars — game quality, live casino, platform stability, KYC, bonuses, and support.",
  keywords: [
    "about elite casinos sites UK",
    "UK casino comparison methodology",
    "independent casino site reviews",
    "editorial standards UK gambling",
  ],
  openGraph: {
    title: "About Us | Elite Casinos Sites UK",
    description:
      "Independent editorial platform dedicated to helping British players make informed decisions about licensed casino sites.",
    url: "https://elitecasinossitesuk.com/about",
  },
}

const GOLD = "#C9A84C"
const BLACK_CARD = "#141414"
const BLACK_LIGHT = "#1E1E1E"
const CRIMSON = "#8B1A1A"
const IVORY = "#F5F0E8"

function PageShell({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
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
        {/* Crimson top bar */}
        <div className="h-[3px]" style={{ background: CRIMSON }} />
        {/* Gold hairline */}
        <div className="h-px" style={{ background: "rgba(201,168,76,0.2)" }} />

        <div className="px-6 py-8 sm:px-10 sm:py-10">
          {/* Page heading */}
          <div
            className="text-center mb-8 pb-6 border-b"
            style={{ borderColor: "rgba(139,26,26,0.2)" }}
          >
            <p
              className="text-[9px] font-sans font-bold uppercase tracking-[0.35em] mb-2"
              style={{ color: "rgba(201,168,76,0.5)" }}
            >
              elitecasinossitesuk.com
            </p>
            <h1 className="font-serif font-bold text-3xl lg:text-4xl" style={{ color: IVORY }}>
              {title}
            </h1>
            {subtitle && (
              <p
                className="font-sans text-sm mt-3 max-w-xl mx-auto leading-relaxed"
                style={{ color: "rgba(245,240,232,0.58)" }}
              >
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
      <div
        className="font-sans text-sm leading-relaxed space-y-3"
        style={{ color: "rgba(245,240,232,0.68)" }}
      >
        {children}
      </div>
    </section>
  )
}

export default function AboutPage() {
  return (
    <PageShell
      title="About Us"
      subtitle="Elite Casinos Sites UK is an independent editorial platform dedicated to helping British players make informed decisions about licensed casino sites operating in the United Kingdom."
    >
      <div className="space-y-0">

        <Section title="Why We Exist">
          <p>
            The UK online casino market is vast, fast-moving, and, for the uninitiated, bewildering. Every operator
            promotes a headline welcome bonus while wagering requirements and game restrictions shift week to week.
            elitecasinossitesuk.com exists to cut through that noise — one authoritative table, consistent scoring
            criteria, and plain-English editorial notes so you can compare operators on equal terms before you open
            a single account.
          </p>
          <p>
            We approach our work as members of England&apos;s most discerning casino-going public: people who
            understand the difference between a 35x wagering requirement and a 10x one, who appreciate a polished
            live baccarat studio, and who expect withdrawals processed without unnecessary delay or friction.
          </p>
        </Section>

        <div className="h-px my-6" style={{ background: "rgba(139,26,26,0.15)" }} />

        <Section title="Our Editorial Standards">
          <p>
            Rankings are built on six independent pillars: game library quality and software provider diversity, live
            casino experience and streaming quality, platform stability across desktop and mobile, KYC and withdrawal
            smoothness, promotional transparency and wagering fairness, and customer support responsiveness. Commercial
            affiliate relationships help fund this publication but do not influence the order of merit — if an
            operator&apos;s performance declines, the score moves accordingly.
          </p>
          <div
            className="border mt-4 px-5 py-4"
            style={{ borderColor: "rgba(139,26,26,0.25)", backgroundColor: "rgba(13,13,13,0.55)" }}
          >
            <ul className="space-y-2 text-xs" style={{ color: "rgba(245,240,232,0.62)" }}>
              {[
                ["Licensing", "Only operators holding an active UK Gambling Commission licence are considered."],
                ["Player Safety", "Deposit limits, session reminders, reality checks, and GAMSTOP self-exclusion must be readily accessible."],
                ["Game Breadth", "Slots, live dealer tables, jackpots, and table games are assessed for variety and provider quality."],
                ["Payment Rails", "Common UK banking methods, e-wallets, and processing speed are evaluated at point of withdrawal."],
                ["Bonus Fairness", "Wagering requirements, game contribution percentages, and expiry terms are scrutinised in full."],
                ["Support Quality", "Availability, response speed, and resolution competence of help channels are factored into every score."],
              ].map(([term, def]) => (
                <li key={term}>
                  <strong className="font-semibold" style={{ color: IVORY }}>{term}: </strong>
                  {def}
                </li>
              ))}
            </ul>
          </div>
        </Section>

        <div className="h-px my-6" style={{ background: "rgba(139,26,26,0.15)" }} />

        <Section title="How We Work">
          <p>
            Where possible, our editors open real accounts, complete the full KYC verification process, make deposits
            using common UK payment methods, and time withdrawal journeys first-hand across both mobile and desktop
            environments. We also monitor specialist player forums, Gambling Commission bulletins, and independent
            consumer feedback channels. When an operator materially alters a headline bonus or changes payout terms,
            we aim to reflect that within the same week.
          </p>
        </Section>

        <div className="h-px my-6" style={{ background: "rgba(139,26,26,0.15)" }} />

        <Section title="Commercial Transparency">
          <p>
            Outbound links to casino operators may carry affiliate tracking identifiers. This commercial arrangement
            does not alter our ranking methodology or scoring criteria. A full disclosure of commercial relationships
            is available via the Advertiser Disclosure link on the homepage, which we maintain in permanent view.
          </p>
        </Section>

        <div className="h-px my-6" style={{ background: "rgba(139,26,26,0.15)" }} />

        <Section title="The Private Club Standard">
          <p>
            Our philosophy mirrors that of England&apos;s most respected private members&apos; casinos: we endorse only
            what meets an uncompromising standard of quality, discretion, and player respect. An operator that treats
            its customers poorly — through opaque bonus terms, slow withdrawals, or inadequate responsible gambling
            tools — will not hold a place at this table.
          </p>
        </Section>

        <div className="h-px my-6" style={{ background: "rgba(139,26,26,0.15)" }} />

        <Section title="Responsible Gambling">
          <p>
            Casino play should be a leisure activity conducted within pre-set financial and time limits. If wagering
            becomes compulsive, escapist, or you find yourself chasing losses, we urge you to step away immediately
            and contact the free, confidential support organisations listed in our site footer.
          </p>
        </Section>

        {/* 18+ notice */}
        <div
          className="mt-8 border-l-4 px-5 py-5"
          style={{ borderLeftColor: CRIMSON, backgroundColor: "rgba(139,26,26,0.06)" }}
        >
          <p className="font-sans font-semibold text-sm mb-1.5" style={{ color: GOLD }}>
            18+ Only
          </p>
          <p className="font-sans text-xs leading-relaxed" style={{ color: "rgba(245,240,232,0.58)" }}>
            elitecasinossitesuk.com does not accept wagers or operate any gambling product. All casino activity
            takes place on licensed third-party platforms under their own terms and conditions. Users must be 18 or
            over to access and use those platforms.
          </p>
        </div>
      </div>
    </PageShell>
  )
}
