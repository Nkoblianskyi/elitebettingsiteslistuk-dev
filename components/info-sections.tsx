const articles = [
  {
    num: "01",
    standfirst: "Editorial Method",
    heading: "How We Rank UK Casino Sites",
    body: "Our analysis covers six independent pillars: game library depth, live casino quality, platform reliability across devices, payout processing speed, transparency of bonus terms, and responsiveness of customer support. No commercial relationship alters the order of merit.",
  },
  {
    num: "02",
    standfirst: "Welcome Offers",
    heading: "Reading Beyond the Headline Figure",
    body: "Introductory bonus values are subject to change. Attend carefully to wagering requirements, eligible games, minimum deposit thresholds, excluded payment methods, expiry windows, and whether bonus stakes are separated from withdrawable funds.",
  },
  {
    num: "03",
    standfirst: "Licensing & Regulation",
    heading: "Why UKGC Authorisation Matters",
    body: "Every operator listed holds a licence from the UK Gambling Commission. Licensed firms must meet standards on player funds segregation, game fairness, and responsible gambling tooling including deposit limits, cooling-off periods, and self-exclusion.",
  },
  {
    num: "04",
    standfirst: "Responsible Play",
    heading: "Disciplined Gambling Principles",
    body: "Fixed session budgets, set time limits, and no chasing of losses. Welcome offers are introductory mechanics, not supplementary income. Should casino activity feel compulsive rather than recreational, contact the organisations listed in the footer.",
  },
]

const DIVIDER = "1px solid rgba(201,168,76,0.08)"

export function InfoSections() {
  return (
    <section
      className="w-full"
      style={{ borderTop: "1px solid rgba(201,168,76,0.1)" }}
    >
      {/* Pull-quote banner */}
      <div
        className="w-full"
        style={{ borderBottom: "1px solid rgba(201,168,76,0.08)", backgroundColor: "#0F0F0F" }}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 py-16 flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
          {/* Big quote */}
          <div className="lg:w-5/12">
            <div
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "clamp(4rem, 8vw, 7rem)",
                lineHeight: 0.8,
                color: "rgba(201,168,76,0.1)",
                userSelect: "none",
                marginBottom: "-16px",
              }}
            >
              &ldquo;
            </div>
            <blockquote>
              <p
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontWeight: 700,
                  fontStyle: "italic",
                  fontSize: "clamp(1.6rem, 2.8vw, 2.6rem)",
                  lineHeight: 1.1,
                  color: "#EDE4CC",
                }}
              >
                Rigorous assessment.
                <br />
                <em style={{ color: "#C9A84C" }}>Independent</em>
                <br />
                editorial.
              </p>
            </blockquote>
            <div style={{ width: "40px", height: "2px", backgroundColor: "#C9A84C", marginTop: "28px", marginBottom: "20px" }} />
            <p
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "12px",
                lineHeight: 1.8,
                color: "rgba(237,228,204,0.4)",
              }}
            >
              ukbestcasinosites.com is an independent editorial platform.
              We hold no player funds and accept no wagers. Commercial links may
              generate affiliate revenue which does not influence our editorial rankings.
            </p>
          </div>

          {/* Criteria grid */}
          <div className="lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-0">
            {[
              { label: "Licensing",         desc: "UKGC authorisation confirmed" },
              { label: "Game Quality",      desc: "Software breadth & RTP transparency" },
              { label: "Payout Speed",      desc: "Withdrawal processing timelines" },
              { label: "Bonus Clarity",     desc: "Wagering requirements & T&Cs" },
              { label: "Player Safety",     desc: "Deposit limits & self-exclusion" },
              { label: "Support Quality",   desc: "Availability & responsiveness" },
            ].map((item, i) => (
              <div
                key={item.label}
                style={{
                  padding: "20px 24px",
                  borderBottom: i < 4 ? DIVIDER : "none",
                  borderRight: i % 2 === 0 ? DIVIDER : "none",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "8px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.38em",
                    color: "rgba(201,168,76,0.55)",
                    marginBottom: "6px",
                  }}
                >
                  {item.label}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "12px",
                    color: "rgba(237,228,204,0.5)",
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Articles list */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16">
        {articles.map((art, i) => (
          <article
            key={art.num}
            className="flex gap-8 py-12"
            style={{ borderBottom: i < articles.length - 1 ? DIVIDER : "none" }}
          >
            {/* Number */}
            <span
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontWeight: 400,
                fontStyle: "italic",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                lineHeight: 1,
                color: "rgba(201,168,76,0.18)",
                flexShrink: 0,
                width: "52px",
                paddingTop: "4px",
              }}
            >
              {art.num}
            </span>

            {/* Text */}
            <div style={{ flex: 1 }}>
              <p
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "8px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.42em",
                  color: "rgba(201,168,76,0.5)",
                  marginBottom: "10px",
                }}
              >
                {art.standfirst}
              </p>
              <h3
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontWeight: 700,
                  fontSize: "clamp(1.15rem, 2vw, 1.5rem)",
                  color: "#EDE4CC",
                  marginBottom: "14px",
                  lineHeight: 1.15,
                }}
              >
                {art.heading}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "13px",
                  lineHeight: 1.8,
                  color: "rgba(237,228,204,0.52)",
                  maxWidth: "680px",
                }}
              >
                {art.body}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
