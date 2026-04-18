"use client"

const GOLD = "#C9A84C"
const NAVY = "#0D1B2A"
const NAVY_CARD = "#131E2B"
const IVORY = "#F5F0E8"

const sections = [
  {
    title: "How We Select Britain's Premier Bookmakers",
    lead: "Our editorial methodology is independent, rigorous, and built for the discerning UK punter.",
    body: "Selecting a bookmaker is not a matter of headline bonuses alone — it is a question of whether the platform consistently performs across the dimensions that matter most. Our table spotlights operators that demonstrate excellence for UK customers week in, week out.",
  },
  {
    title: "Our Assessment Criteria",
    body: "We evaluate each operator across six pillars: odds competitiveness on mainstream markets, depth of live coverage, mobile and desktop platform stability, KYC and withdrawal smoothness, clarity of promotional terms, and quality of customer support. Commercial relationships do not alter the order of merit — the ranking logic remains constant regardless of affiliate arrangements.",
  },
  {
    title: "Matching an Operator to Your Style",
    body: "Begin with the sports you stake on consistently. If live streaming is important, prioritise operators carrying your preferred leagues. If accumulator betting is your focus, favour books with transparent settlement rules and strong acca tools. Marginal odds advantages repeated across hundreds of bets compound significantly — use our scores as orientation, then shop on the events you care about.",
  },
  {
    title: "Welcome Offers: Reading Between the Lines",
    body: "Introductory free bets and enhanced odds are subject to revision. The summaries beneath each logo capture the current headline mechanic. The operator's live terms page is the binding document. Pay close attention to minimum stake thresholds, qualifying bet restrictions, excluded payment methods, expiry windows, and whether free-bet stakes are returned with winnings.",
  },
  {
    title: "Regulation & Player Protection",
    body: "Every operator featured holds the appropriate licence for UK customers. Licensed firms are obliged to meet standards on customer funds segregation, game fairness testing, and responsible gambling tooling — including deposit limits, reality checks, and self-exclusion pathways. Regulatory oversight does not eliminate risk, but it establishes a formal accountability framework if disputes arise.",
  },
  {
    title: "Technology & Platform Quality",
    body: "Contemporary bookmakers compete on the quality of their cash-out logic, partial settlement options, bet-builder accuracy, and low-latency in-play pricing. We assess how polished and reliable these features are across both mobile and desktop environments, because platform friction during live events translates directly into missed value.",
  },
  {
    title: "Responsible Gambling",
    body: "Disciplined wagering means fixed stakes, written session limits, and no chasing of losses. Welcome offers are introductory tools, not a supplementary income. Should betting begin to feel compulsive rather than recreational, please contact the organisations listed in the footer — all services are free, confidential, and available immediately.",
  },
]

export function InfoSections() {
  return (
    <div className="mt-14">
      {/* Section header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="flex-1 h-px" style={{ background: "rgba(201,168,76,0.2)" }} />
        <div className="text-center px-2">
          <p className="text-[9px] font-sans font-bold uppercase tracking-[0.35em] mb-1" style={{ color: "rgba(201,168,76,0.55)" }}>
            Editorial Guide
          </p>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl" style={{ color: IVORY }}>
            Our Methodology
          </h2>
        </div>
        <div className="flex-1 h-px" style={{ background: "rgba(201,168,76,0.2)" }} />
      </div>

      {/* Lead section */}
      <div
        className="border px-6 py-6 sm:px-8 sm:py-7 mb-2"
        style={{ backgroundColor: NAVY_CARD, borderColor: "rgba(201,168,76,0.25)" }}
      >
        <h3 className="font-serif font-bold text-xl sm:text-2xl mb-3" style={{ color: IVORY }}>
          {sections[0].title}
        </h3>
        <p className="font-sans font-semibold text-sm mb-3" style={{ color: GOLD }}>
          {sections[0].lead}
        </p>
        <p className="font-sans text-sm leading-relaxed" style={{ color: "rgba(245,240,232,0.72)" }}>
          {sections[0].body}
        </p>
      </div>

      {/* Remaining sections */}
      <div className="space-y-px">
        {sections.slice(1).map((section, i) => (
          <article
            key={section.title}
            className="border-l border-r border-b px-6 py-5 sm:px-8 sm:py-6 transition-colors"
            style={{
              backgroundColor: i % 2 === 0 ? NAVY_CARD : "rgba(28,43,58,0.5)",
              borderColor: "rgba(201,168,76,0.15)",
            }}
          >
            <div className="flex items-start gap-4">
              {/* Gold number */}
              <span
                className="font-serif font-bold text-2xl leading-none shrink-0 mt-0.5 w-6 text-right"
                style={{ color: "rgba(201,168,76,0.35)" }}
              >
                {i + 1}
              </span>
              <div>
                <h3 className="font-serif font-bold text-base sm:text-lg mb-2" style={{ color: IVORY }}>
                  {section.title}
                </h3>
                <p className="font-sans text-sm leading-relaxed" style={{ color: "rgba(245,240,232,0.68)" }}>
                  {section.body}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Disclaimer */}
      <div
        className="mt-4 border px-5 py-4 text-center"
        style={{ borderColor: "rgba(201,168,76,0.2)", backgroundColor: "rgba(13,27,42,0.5)" }}
      >
        <p className="text-[10px] font-sans uppercase tracking-wider leading-relaxed" style={{ color: "rgba(201,168,76,0.45)" }}>
          Content &copy; elitebettingsiteslistuk.com &nbsp;&middot;&nbsp; All promotions are for adults 18+ in the United Kingdom.
          Identity and location verification applies. Additional restrictions may apply — consult each operator.
        </p>
      </div>
    </div>
  )
}
