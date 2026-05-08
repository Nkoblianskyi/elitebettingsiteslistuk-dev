"use client"

interface HeroSectionProps {
  onAdvertiserModalOpen: () => void
  onTermsModalOpen: () => void
}

function getRatingDate() {
  const d = new Date()
  return {
    iso: d.toISOString().slice(0, 10),
    label: d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" }),
  }
}

const TRUST_STATS = [
  { value: "6",    label: "Ranked Sites"      },
  { value: "18+",  label: "Age Requirement"   },
  { value: "UKGC", label: "Licensed Only"     },
]

export function HeroSection({ onAdvertiserModalOpen, onTermsModalOpen }: HeroSectionProps) {
  const { iso, label } = getRatingDate()

  return (
    <section
      className="w-full relative overflow-hidden"
      style={{
        minHeight: "clamp(280px, 40vw, 480px)",
        borderBottom: "1px solid rgba(201,168,76,0.15)",
      }}
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-casino.jpg"
          alt=""
          aria-hidden
          className="w-full h-full object-cover object-center"
          style={{ filter: "brightness(0.35) saturate(0.7)" }}
        />
        {/* Left gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(13,13,13,1) 0%, rgba(13,13,13,0.92) 45%, rgba(13,13,13,0.5) 75%, rgba(13,13,13,0.15) 100%)",
          }}
        />
        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{ height: "40%", background: "linear-gradient(to top, #0D0D0D, transparent)" }}
        />
      </div>

      {/* Content */}
      <div
        className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 lg:px-16 flex flex-col justify-between"
        style={{ paddingTop: "clamp(28px, 4vw, 56px)", paddingBottom: "clamp(28px, 4vw, 52px)", minHeight: "clamp(280px, 40vw, 480px)" }}
      >
        {/* Eyebrow row */}
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
          <div className="flex items-center gap-3">
            <div className="w-8 h-px shrink-0" style={{ background: "#C9A84C" }} />
            <span
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "9px",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.45em",
                color: "rgba(201,168,76,0.7)",
              }}
            >
              ukbestcasinosites.com
            </span>
          </div>
          <time
            dateTime={iso}
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "9px",
              textTransform: "uppercase",
              letterSpacing: "0.3em",
              color: "rgba(237,228,204,0.35)",
            }}
          >
            Updated {label}
          </time>
        </div>

        {/* Main headline */}
        <div style={{ marginTop: "clamp(20px, 4vw, 48px)", marginBottom: "clamp(20px, 3vw, 40px)" }}>
          <h1
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontWeight: 700,
              fontSize: "clamp(2rem, 5.5vw, 4.2rem)",
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
              color: "#EDE4CC",
            }}
          >
            Britain&apos;s&nbsp;Finest
            <br />
            <em style={{ color: "#C9A84C", fontStyle: "italic" }}>Casino&nbsp;</em>
            Sites Ranked
          </h1>
          <p
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "clamp(12px, 1.4vw, 14px)",
              color: "rgba(237,228,204,0.5)",
              lineHeight: 1.7,
              marginTop: "clamp(12px, 1.5vw, 20px)",
              maxWidth: "36rem",
            }}
          >
            Independently assessed UK-licensed platforms, ranked across game quality,
            bonus transparency, payout reliability, and player protection.
          </p>
        </div>

        {/* Bottom row: trust strip + disclosures */}
        <div className="flex flex-wrap items-end justify-between gap-4">
          {/* Trust stats */}
          <div
            className="inline-flex"
            style={{ border: "1px solid rgba(201,168,76,0.22)" }}
          >
            {TRUST_STATS.map((stat, i) => (
              <div
                key={stat.label}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  paddingLeft: "clamp(14px, 2.5vw, 28px)",
                  paddingRight: "clamp(14px, 2.5vw, 28px)",
                  borderRight: i < TRUST_STATS.length - 1 ? "1px solid rgba(201,168,76,0.18)" : "none",
                  backgroundColor: "rgba(13,13,13,0.75)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    fontWeight: 700,
                    fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
                    lineHeight: 1,
                    color: "#C9A84C",
                  }}
                >
                  {stat.value}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "7px",
                    textTransform: "uppercase",
                    letterSpacing: "0.22em",
                    color: "rgba(237,228,204,0.38)",
                    marginTop: "4px",
                  }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Disclosures */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={onAdvertiserModalOpen}
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "8px",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.28em",
                color: "rgba(201,168,76,0.5)",
                background: "none",
                border: "none",
                cursor: "pointer",
                textDecoration: "underline",
                textUnderlineOffset: "3px",
              }}
            >
              Advertiser Disclosure
            </button>
            <span style={{ color: "rgba(201,168,76,0.2)", fontSize: "10px" }}>|</span>
            <button
              type="button"
              onClick={onTermsModalOpen}
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "8px",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.28em",
                color: "rgba(201,168,76,0.5)",
                background: "none",
                border: "none",
                cursor: "pointer",
                textDecoration: "underline",
                textUnderlineOffset: "3px",
              }}
            >
              18+ Terms Apply
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
