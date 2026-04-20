"use client"

const GOLD = "#B8965A"
const FOREST_CARD = "#152B1E"
const FOREST = "#0F2318"
const PARCHMENT = "#F2ECD9"

const sections = [
  {
    title: "How We Select Britain's Premier Casinos",
    lead: "Our editorial methodology is independent, rigorous, and built for the discerning UK player.",
    body: "Selecting a casino platform is not a matter of headline bonuses alone — it is a question of whether the platform consistently performs across the dimensions that matter most. Our table spotlights operators that demonstrate excellence for UK customers week in, week out.",
  },
  {
    title: "Our Assessment Criteria",
    body: "We evaluate each operator across six pillars: game library breadth and quality, live casino experience, platform stability across devices, payout processing smoothness, clarity of promotional terms, and quality of customer support. Commercial relationships do not alter the order of merit — the ranking logic remains constant regardless of affiliate arrangements.",
  },
  {
    title: "Matching a Casino to Your Preferences",
    body: "Begin with the game types you enjoy most. If live table games are your preference, prioritise operators with wide live studio coverage. If slots are your focus, look for breadth of titles and RTP transparency. Marginal differences in bonus wagering requirements compound significantly over time — use our scores as orientation, then examine the specifics that matter most to you.",
  },
  {
    title: "Welcome Offers: Reading Between the Lines",
    body: "Introductory bonus amounts are subject to revision. The summaries beneath each logo capture the current headline mechanic. The operator's live terms page is the binding document. Pay close attention to wagering requirements, eligible games, minimum deposit thresholds, excluded payment methods, expiry windows, and whether bonus stakes are separated from withdrawable funds.",
  },
  {
    title: "Regulation and Player Protection",
    body: "Every operator featured holds the appropriate licence for UK customers. Licensed firms are obliged to meet standards on customer funds segregation, game fairness testing, and responsible gambling tooling — including deposit limits, cooling-off periods, and self-exclusion pathways. Regulatory oversight does not eliminate risk, but it establishes a formal accountability framework if disputes arise.",
  },
  {
    title: "Platform Quality and Game Experience",
    body: "Contemporary casinos compete on the quality of their software providers, live dealer streaming stability, mobile optimisation, and cashout reliability. We assess how polished and consistent these features are across both mobile and desktop environments, because platform friction translates directly into a diminished gaming experience.",
  },
  {
    title: "Responsible Play",
    body: "Disciplined play means fixed session budgets, set time limits, and no chasing of losses. Welcome offers are introductory tools, not supplementary income. Should casino play begin to feel compulsive rather than recreational, please contact the organisations listed in the footer — all services are free, confidential, and available immediately.",
  },
]

export function InfoSections() {
  return (
    <div className="mt-14">
      {/* Section header */}
      <div className="flex items-center gap-5 mb-8">
        <div className="flex-1 h-px" style={{ background: "rgba(184,150,90,0.18)" }} />
        <div className="text-center px-2">
          <p className="font-sans text-[8px] font-bold uppercase tracking-[0.4em] mb-1" style={{ color: "rgba(184,150,90,0.5)" }}>
            Editorial Guide
          </p>
          <h2 className="font-serif font-semibold text-2xl sm:text-3xl leading-tight" style={{ color: PARCHMENT }}>
            Our Methodology
          </h2>
        </div>
        <div className="flex-1 h-px" style={{ background: "rgba(184,150,90,0.18)" }} />
      </div>

      {/* Lead card */}
      <div
        className="border px-7 py-7 mb-1"
        style={{ backgroundColor: FOREST_CARD, borderColor: "rgba(184,150,90,0.22)" }}
      >
        <div className="flex items-start gap-3 mb-3">
          <div className="h-5 w-[2px] mt-1 shrink-0" style={{ background: GOLD }} />
          <h3 className="font-serif font-semibold text-xl sm:text-2xl" style={{ color: PARCHMENT }}>
            {sections[0].title}
          </h3>
        </div>
        <p className="font-sans text-sm font-semibold mb-3 pl-5" style={{ color: GOLD }}>
          {sections[0].lead}
        </p>
        <p className="font-sans text-sm leading-relaxed pl-5" style={{ color: "rgba(242,236,217,0.68)" }}>
          {sections[0].body}
        </p>
      </div>

      {/* Remaining sections — ledger style */}
      <div className="border-l border-r" style={{ borderColor: "rgba(184,150,90,0.15)" }}>
        {sections.slice(1).map((section, i) => (
          <article
            key={section.title}
            className="border-b px-7 py-5 sm:py-6 transition-colors hover:bg-[#1B3A2D]/30"
            style={{
              backgroundColor: i % 2 === 0 ? FOREST_CARD : `${FOREST}CC`,
              borderColor: "rgba(184,150,90,0.12)",
            }}
          >
            <div className="flex items-start gap-5">
              {/* Gold ordinal */}
              <span
                className="font-serif font-light text-3xl leading-none shrink-0 mt-0.5 w-7 text-right"
                style={{ color: "rgba(184,150,90,0.28)" }}
              >
                {i + 2}
              </span>
              <div>
                <h3 className="font-serif font-semibold text-base sm:text-lg mb-2" style={{ color: PARCHMENT }}>
                  {section.title}
                </h3>
                <p className="font-sans text-sm leading-relaxed" style={{ color: "rgba(242,236,217,0.65)" }}>
                  {section.body}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Disclaimer bar */}
      <div
        className="mt-4 border px-5 py-4 text-center"
        style={{ borderColor: "rgba(184,150,90,0.18)", backgroundColor: "rgba(15,35,24,0.6)" }}
      >
        <p className="font-sans text-[9px] uppercase tracking-[0.25em] leading-relaxed" style={{ color: "rgba(184,150,90,0.4)" }}>
          Content &copy; trustedcasinossitesuk.com · All promotions are for adults 18+ in the United Kingdom.
          Identity and location verification applies. Additional restrictions may apply — consult each operator.
        </p>
      </div>
    </div>
  )
}
