"use client"

const GOLD = "#C9A84C"
const BLACK = "#0D0D0D"
const BLACK_CARD = "#141414"
const BLACK_LIGHT = "#1E1E1E"
const CRIMSON = "#8B1A1A"
const IVORY = "#F5F0E8"

const sections = [
  {
    title: "How We Select England's Finest Casino Sites",
    lead: "Our editorial methodology is independent, rigorous, and built for the discerning British casino player.",
    body: "Selecting an online casino is not merely a matter of headline welcome bonuses — it is a question of whether the platform consistently delivers excellence across every dimension that matters. Our table spotlights operators that demonstrate outstanding performance for UK players week in, week out: from live dealer tables to progressive jackpots, from seamless withdrawals to responsible gaming tooling.",
  },
  {
    title: "Our Six-Pillar Assessment",
    body: "We evaluate each operator across six independent pillars: game library depth and software quality, live casino experience, mobile and desktop platform stability, KYC and withdrawal smoothness, bonus clarity and fairness, and the quality of customer support. Commercial affiliate arrangements do not alter the order of merit — the ranking logic remains constant regardless of any financial relationship.",
  },
  {
    title: "Matching a Casino to Your Style of Play",
    body: "Begin with the games you return to consistently. Slot enthusiasts should prioritise operators with the widest library of titles from leading providers. Live casino devotees should look for studios offering multiple baccarat, roulette, and blackjack variants with genuine croupiers. High-rollers should assess VIP programme terms and maximum withdrawal limits before registering.",
  },
  {
    title: "Welcome Bonuses: Reading the Fine Print",
    body: "Introductory deposit bonuses and free spins are subject to revision at any time. The summaries beneath each operator logo capture the current headline mechanic. The operator's live terms page is the binding document. Pay close attention to wagering requirements, game contribution weightings, minimum deposit thresholds, excluded payment methods, and bonus expiry windows.",
  },
  {
    title: "Regulation and Player Protection",
    body: "Every casino featured holds the appropriate UK Gambling Commission licence. Licensed operators are obliged to meet standards on customer funds segregation, game fairness certification by independent testing laboratories, and responsible gambling tooling including deposit limits, cooling-off periods, and self-exclusion pathways via GAMSTOP. Regulation establishes formal accountability if disputes arise.",
  },
  {
    title: "Live Casino and Game Quality",
    body: "The quality of a casino's live dealer studio is a strong signal of overall product investment. We assess streaming quality, table variety, bet range flexibility, and the professionalism of the croupier experience. On the slots side, RTP transparency, jackpot network size, and exclusive titles carry significant weight in our scoring.",
  },
  {
    title: "Responsible Gambling",
    body: "Casino play should remain a leisure activity within strictly pre-set financial and time limits. Welcome bonuses are introductory tools, not a supplementary income strategy. Should gambling begin to feel compulsive, habitual, or driven by the desire to recover losses, please contact the organisations listed in our site footer — all services are free, confidential, and immediately accessible.",
  },
]

const casinoHighlights = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M14 2L16.5 9H24L18 13.5L20.5 20.5L14 16.5L7.5 20.5L10 13.5L4 9H11.5L14 2Z" fill="#8B1A1A" opacity="0.9"/>
        <path d="M14 2L16.5 9H24L18 13.5L20.5 20.5L14 16.5L7.5 20.5L10 13.5L4 9H11.5L14 2Z" stroke="#C9A84C" strokeWidth="0.8" fill="none"/>
      </svg>
    ),
    stat: "6",
    label: "Elite Casinos",
    detail: "Hand-picked UK-licensed operators",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="3" y="6" width="22" height="16" rx="1.5" stroke="#C9A84C" strokeWidth="1.2" fill="none"/>
        <path d="M3 11H25" stroke="#8B1A1A" strokeWidth="1.5"/>
        <rect x="6" y="14" width="6" height="5" rx="0.5" fill="#C9A84C" opacity="0.5"/>
      </svg>
    ),
    stat: "£600+",
    label: "Combined Bonuses",
    detail: "Across all featured operators",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="14" cy="14" r="11" stroke="#C9A84C" strokeWidth="1.2" fill="none"/>
        <path d="M14 8V14L18 17" stroke="#8B1A1A" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="14" cy="14" r="1.5" fill="#C9A84C"/>
      </svg>
    ),
    stat: "24/7",
    label: "Live Casino",
    detail: "Real dealers, real-time action",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M14 4C8.477 4 4 8.477 4 14s4.477 10 10 10 10-4.477 10-10S19.523 4 14 4z" stroke="#C9A84C" strokeWidth="1.2" fill="none"/>
        <path d="M9 14l4 4 6-7" stroke="#8B1A1A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    stat: "UKGC",
    label: "Licensed Only",
    detail: "Gambling Commission regulated",
  },
]

export function InfoSections() {
  return (
    <div className="mt-14">

      {/* === Casino Highlights Stats Section === */}
      <div className="mb-12">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 h-px" style={{ background: "rgba(139,26,26,0.25)" }} />
          <div className="text-center px-2">
            <p
              className="text-[9px] font-sans font-bold uppercase tracking-[0.35em] mb-1"
              style={{ color: "rgba(201,168,76,0.5)" }}
            >
              Why Choose Us
            </p>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl" style={{ color: IVORY }}>
              The Elite Standard
            </h2>
          </div>
          <div className="flex-1 h-px" style={{ background: "rgba(139,26,26,0.25)" }} />
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: "rgba(139,26,26,0.15)" }}>
          {casinoHighlights.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center justify-center text-center px-5 py-7 gap-3"
              style={{ backgroundColor: BLACK_CARD }}
            >
              {item.icon}
              <div>
                <p className="font-serif font-bold text-3xl sm:text-4xl leading-none" style={{ color: GOLD }}>
                  {item.stat}
                </p>
                <p className="font-sans font-semibold text-xs uppercase tracking-[0.18em] mt-1" style={{ color: IVORY }}>
                  {item.label}
                </p>
                <p className="font-sans text-[10px] mt-0.5" style={{ color: "rgba(245,240,232,0.45)" }}>
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Ornamental bottom */}
        <div className="flex items-center gap-3 mt-5">
          <div className="flex-1 h-px" style={{ background: "rgba(139,26,26,0.15)" }} />
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M6 0.5L11.5 6L6 11.5L0.5 6L6 0.5Z" fill={CRIMSON} opacity="0.6"/>
          </svg>
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M4 0.5L7.5 4L4 7.5L0.5 4L4 0.5Z" fill={GOLD} opacity="0.5"/>
          </svg>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M6 0.5L11.5 6L6 11.5L0.5 6L6 0.5Z" fill={CRIMSON} opacity="0.6"/>
          </svg>
          <div className="flex-1 h-px" style={{ background: "rgba(139,26,26,0.15)" }} />
        </div>
      </div>

      {/* === Methodology Section === */}
      <div>
        {/* Section header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px" style={{ background: "rgba(139,26,26,0.25)" }} />
          <div className="text-center px-2">
            <p
              className="text-[9px] font-sans font-bold uppercase tracking-[0.35em] mb-1"
              style={{ color: "rgba(201,168,76,0.5)" }}
            >
              Editorial Guide
            </p>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl" style={{ color: IVORY }}>
              Our Methodology
            </h2>
          </div>
          <div className="flex-1 h-px" style={{ background: "rgba(139,26,26,0.25)" }} />
        </div>

        {/* Lead section */}
        <div
          className="border px-6 py-6 sm:px-8 sm:py-7 mb-2"
          style={{
            backgroundColor: BLACK_CARD,
            borderColor: "rgba(139,26,26,0.3)",
            borderTop: `3px solid ${CRIMSON}`,
          }}
        >
          <h3 className="font-serif font-bold text-xl sm:text-2xl mb-3" style={{ color: IVORY }}>
            {sections[0].title}
          </h3>
          <p className="font-sans font-semibold text-sm mb-3" style={{ color: GOLD }}>
            {sections[0].lead}
          </p>
          <p className="font-sans text-sm leading-relaxed" style={{ color: "rgba(245,240,232,0.7)" }}>
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
                backgroundColor: i % 2 === 0 ? BLACK_CARD : BLACK_LIGHT,
                borderColor: "rgba(139,26,26,0.18)",
              }}
            >
              <div className="flex items-start gap-4">
                {/* Crimson number */}
                <span
                  className="font-serif font-bold text-2xl leading-none shrink-0 mt-0.5 w-6 text-right"
                  style={{ color: "rgba(139,26,26,0.55)" }}
                >
                  {i + 1}
                </span>
                <div>
                  <h3
                    className="font-serif font-bold text-base sm:text-lg mb-2"
                    style={{ color: IVORY }}
                  >
                    {section.title}
                  </h3>
                  <p
                    className="font-sans text-sm leading-relaxed"
                    style={{ color: "rgba(245,240,232,0.66)" }}
                  >
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
          style={{
            borderColor: "rgba(139,26,26,0.2)",
            backgroundColor: "rgba(13,13,13,0.6)",
          }}
        >
          <p
            className="text-[10px] font-sans uppercase tracking-wider leading-relaxed"
            style={{ color: "rgba(201,168,76,0.4)" }}
          >
            Content &copy; elitecasinossitesuk.com &nbsp;&middot;&nbsp; All promotions are for adults 18+ in the United Kingdom.
            Identity and location verification applies. Additional restrictions may apply — consult each operator.
          </p>
        </div>
      </div>
    </div>
  )
}
