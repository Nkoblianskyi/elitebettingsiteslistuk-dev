"use client"

interface HeroSectionProps {
  onAdvertiserModalOpen: () => void
  onTermsModalOpen: () => void
}

function getDate() {
  const d = new Date()
  return {
    iso: d.toISOString().slice(0, 10),
    label: d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" }),
  }
}

const STATS = [
  { v: "6",    l: "Ranked Sites"    },
  { v: "18+",  l: "Age Requirement" },
  { v: "UKGC", l: "Licensed Only"   },
]

const PILLARS = ["Licensing", "Game Quality", "Payout Speed", "Player Safety"]

export function HeroSection({ onAdvertiserModalOpen, onTermsModalOpen }: HeroSectionProps) {
  const { iso, label } = getDate()

  return (
    <section className="w-full relative overflow-hidden" style={{ minHeight: "clamp(360px, 50vw, 580px)" }}>

      {/* ── Background ── */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-casino.jpg"
          alt=""
          aria-hidden
          className="w-full h-full object-cover object-center"
          style={{ filter: "brightness(0.25) saturate(0.55)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(108deg, rgba(10,10,10,1) 0%, rgba(10,10,10,0.96) 35%, rgba(10,10,10,0.72) 62%, rgba(10,10,10,0.2) 100%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{ height: "50%", background: "linear-gradient(to top, #0A0A0A, transparent)" }}
        />
      </div>

      {/* ── Content ── */}
      <div
        className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 lg:px-16 flex flex-col"
        style={{
          minHeight: "clamp(360px, 50vw, 580px)",
          paddingTop: "clamp(36px, 5.5vw, 72px)",
          paddingBottom: "clamp(40px, 5.5vw, 72px)",
          gap: "clamp(24px, 4vw, 44px)",
          justifyContent: "space-between",
        }}
      >

        {/* Eyebrow */}
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-3">
            <div style={{ width: 28, height: 1, backgroundColor: "#C9A84C", flexShrink: 0 }} />
            <span style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: 9,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.48em",
              color: "rgba(201,168,76,0.7)",
            }}>
              ukbestcasinosites.com
            </span>
          </div>
          <time dateTime={iso} style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: 9,
            textTransform: "uppercase",
            letterSpacing: "0.32em",
            color: "rgba(237,228,204,0.26)",
          }}>
            Updated {label}
          </time>
        </div>

        {/* Headline block */}
        <div>
          <p style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: 9,
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.44em",
            color: "rgba(201,168,76,0.52)",
            marginBottom: "clamp(14px,2vw,22px)",
          }}>
            Independent Rankings 2026
          </p>

          <h1 style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontWeight: 800,
            fontSize: "clamp(2.4rem, 6.5vw, 5.2rem)",
            lineHeight: 0.92,
            letterSpacing: "-0.025em",
            color: "#EDE4CC",
          }}>
            Britain&apos;s Finest
            <br />
            <em style={{ color: "#C9A84C", fontStyle: "italic" }}>Casino </em>
            <span style={{ fontStyle: "italic", fontWeight: 400 }}>Sites Ranked</span>
          </h1>

          <p style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "clamp(12px, 1.3vw, 14px)",
            color: "rgba(237,228,204,0.44)",
            lineHeight: 1.75,
            marginTop: "clamp(16px, 2.2vw, 26px)",
            maxWidth: "38rem",
          }}>
            Independently assessed UK-licensed platforms, ranked across game quality,
            bonus transparency, payout reliability, and player protection.
          </p>

          {/* Criteria tags */}
          <div className="flex flex-wrap gap-2" style={{ marginTop: "clamp(18px, 2vw, 28px)" }}>
            {PILLARS.map((p) => (
              <span key={p} style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: 8,
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.30em",
                color: "rgba(201,168,76,0.58)",
                border: "1px solid rgba(201,168,76,0.16)",
                padding: "5px 11px",
                backgroundColor: "rgba(201,168,76,0.03)",
              }}>
                {p}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom: trust bar + disclosures */}
        <div className="flex flex-wrap items-end justify-between gap-5">
          {/* Stats */}
          <div style={{ display: "flex", border: "1px solid rgba(201,168,76,0.2)" }}>
            {STATS.map(({ v, l }, i) => (
              <div key={l} style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "10px clamp(16px,2.8vw,32px)",
                borderRight: i < 2 ? "1px solid rgba(201,168,76,0.15)" : "none",
                backgroundColor: "rgba(10,10,10,0.72)",
              }}>
                <span style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontWeight: 700,
                  fontSize: "clamp(1.1rem, 2.4vw, 1.5rem)",
                  lineHeight: 1,
                  color: "#C9A84C",
                }}>{v}</span>
                <span style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: 7,
                  textTransform: "uppercase",
                  letterSpacing: "0.22em",
                  color: "rgba(237,228,204,0.3)",
                  marginTop: 5,
                }}>{l}</span>
              </div>
            ))}
          </div>

          {/* Disclosure links */}
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            {[
              { label: "Advertiser Disclosure", action: onAdvertiserModalOpen },
              { label: "18+ Terms Apply",        action: onTermsModalOpen },
            ].map(({ label: lbl, action }, i) => (
              <>
                {i > 0 && <span key="sep" style={{ color: "rgba(201,168,76,0.18)", fontSize: 10 }}>|</span>}
                <button
                  key={lbl}
                  type="button"
                  onClick={action}
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: 8,
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.30em",
                    color: "rgba(201,168,76,0.45)",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textDecoration: "underline",
                    textUnderlineOffset: 3,
                    padding: 0,
                  }}
                >
                  {lbl}
                </button>
              </>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom border line */}
      <div className="absolute bottom-0 left-0 right-0" style={{ height: 1, backgroundColor: "rgba(201,168,76,0.14)" }} />
    </section>
  )
}
