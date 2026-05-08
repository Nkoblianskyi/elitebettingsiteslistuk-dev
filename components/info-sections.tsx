"use client"

const articles = [
  {
    num: "02",
    heading: "Our Editorial Method",
    standfirst: "How we assess UK casino platforms",
    body: "Our analysis covers six independent pillars: game library depth, live casino quality, platform reliability across devices, payout processing speed, transparency of bonus terms, and responsiveness of customer support. No commercial relationship alters the order of merit.",
  },
  {
    num: "03",
    heading: "Reading Welcome Offers",
    standfirst: "Beyond the headline figure",
    body: "Introductory bonus values are subject to change. Our summaries capture the prevailing headline mechanic. The operator's live terms page is the binding document. Attend carefully to wagering requirements, eligible games, minimum deposit thresholds, excluded payment methods, expiry windows, and whether bonus stakes are separated from withdrawable funds.",
  },
  {
    num: "04",
    heading: "Licensing and Regulation",
    standfirst: "Why licensing matters",
    body: "Every operator listed holds a licence for UK customers from the appropriate authority. Licensed firms must meet standards on player funds segregation, game fairness, and responsible gambling tooling, including deposit limits, cooling-off periods, and self-exclusion. Regulatory oversight establishes a formal accountability framework if disputes arise.",
  },
  {
    num: "05",
    heading: "Responsible Play",
    standfirst: "A note on disciplined gambling",
    body: "Disciplined play means fixed session budgets, set time limits, and no chasing of losses. Welcome offers are introductory mechanics, not supplementary income. Should casino activity feel compulsive rather than recreational, contact the organisations listed in the footer — all services are free, confidential, and available immediately.",
  },
]

export function InfoSections() {
  return (
    <section
      className="w-full py-16 px-6 md:px-10 lg:px-0"
      style={{ borderTop: "1px solid rgba(201,168,76,0.1)" }}
    >
      {/* Magazine-spread grid: left big pullquote, right articles */}
      <div className="flex flex-col lg:flex-row gap-0">

        {/* Left: large pull-quote block */}
        <div
          className="lg:w-[40%] px-0 lg:pr-16 flex flex-col justify-between py-0 pb-12 lg:pb-0"
          style={{ borderRight: "1px solid rgba(201,168,76,0.1)" }}
        >
          <div>
            <span
              className="block font-serif font-semibold text-[7rem] lg:text-[9rem] leading-none"
              style={{ color: "rgba(201,168,76,0.08)" }}
              aria-hidden
            >
              &ldquo;
            </span>
            <blockquote
              className="font-serif font-semibold leading-tight -mt-10"
              style={{
                color: "#EDE4CC",
                fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)",
              }}
            >
              Rigorous assessment.
              <br />
              <em style={{ color: "#C9A84C" }}>Independent</em>
              <br />
              editorial.
            </blockquote>
            <div className="w-10 h-px mt-8 mb-6" style={{ background: "#C9A84C" }} />
            <p className="font-sans text-xs leading-loose" style={{ color: "rgba(237,228,204,0.42)" }}>
              ukbestcasinosites.com is an independent editorial platform.
              We hold no player funds and accept no wagers.
              Commercial links may generate affiliate revenue which does not influence
              our editorial rankings.
            </p>
          </div>
        </div>

        {/* Right: article entries */}
        <div className="lg:w-[60%] lg:pl-16">
          {articles.map((art, i) => (
            <article
              key={art.num}
              className="flex gap-6 py-10"
              style={{
                borderBottom: i < articles.length - 1 ? "1px solid rgba(201,168,76,0.08)" : "none",
              }}
            >
              {/* Number */}
              <span
                className="font-serif font-semibold text-3xl leading-none shrink-0 pt-1 w-10"
                style={{ color: "rgba(201,168,76,0.25)" }}
              >
                {art.num}
              </span>

              {/* Text */}
              <div>
                <p
                  className="font-sans text-[8px] font-semibold uppercase tracking-[0.4em] mb-2"
                  style={{ color: "rgba(201,168,76,0.45)" }}
                >
                  {art.standfirst}
                </p>
                <h3
                  className="font-serif font-semibold mb-4"
                  style={{ color: "#EDE4CC", fontSize: "clamp(1.1rem, 1.8vw, 1.4rem)" }}
                >
                  {art.heading}
                </h3>
                <p className="font-sans text-sm leading-loose" style={{ color: "rgba(237,228,204,0.55)" }}>
                  {art.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
