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

const BADGES = [
  { label: "UKGC Licensed" },
  { label: "18+ Only" },
  { label: "Independent" },
]

const STATS = [
  { v: "6",    l: "Ranked Sites"    },
  { v: "18+",  l: "Age Req."        },
  { v: "UKGC", l: "Licensed"        },
]

export function HeroSection({ onAdvertiserModalOpen, onTermsModalOpen }: HeroSectionProps) {
  const { iso, label } = getDate()

  return (
    <>
      {/* Responsive height via CSS classes */}
      <style>{`
        .hero-root {
          height: 250px;
        }
        @media (min-width: 768px) {
          .hero-root {
            height: clamp(300px, 36vw, 400px);
          }
        }
        .hero-h1 {
          font-size: 1.45rem;
          line-height: 1.05;
        }
        @media (min-width: 480px) {
          .hero-h1 { font-size: 1.75rem; }
        }
        @media (min-width: 768px) {
          .hero-h1 { font-size: clamp(2rem, 3.8vw, 3.2rem); }
        }
        .hero-desc {
          display: none;
        }
        @media (min-width: 768px) {
          .hero-desc { display: block; }
        }
        .hero-badges {
          display: none;
        }
        @media (min-width: 640px) {
          .hero-badges { display: flex; }
        }
        .hero-stat-label {
          display: none;
        }
        @media (min-width: 480px) {
          .hero-stat-label { display: block; }
        }
        .hero-disclosure-full {
          display: none;
        }
        @media (min-width: 640px) {
          .hero-disclosure-full { display: flex; }
        }
        .hero-eyebrow-date {
          display: none;
        }
        @media (min-width: 640px) {
          .hero-eyebrow-date { display: block; }
        }
        .hero-sub {
          display: none;
        }
        @media (min-width: 768px) {
          .hero-sub { display: block; }
        }
      `}</style>

      <section
        className="hero-root"
        style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        {/* ── Background ── */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <img
            src="/hero-casino.jpg"
            alt=""
            aria-hidden
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 35%",
              filter: "brightness(0.22) saturate(0.5) sepia(0.2)",
            }}
          />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(118deg, #0A0A0A 0%, rgba(10,10,10,0.97) 28%, rgba(10,10,10,0.78) 60%, rgba(10,10,10,0.25) 100%)",
          }} />
          <div style={{
            position: "absolute", bottom: 0, left: 0, right: 0, height: "55%",
            background: "linear-gradient(to top, #0A0A0A 0%, transparent 100%)",
          }} />
          <div style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            background: "radial-gradient(ellipse 55% 80% at -8% 10%, rgba(212,168,83,0.07) 0%, transparent 70%)",
          }} />
        </div>

        {/* ── Content wrapper ── */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            flex: 1,
            maxWidth: 1152,
            margin: "0 auto",
            width: "100%",
            padding: "16px 24px 14px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
            boxSizing: "border-box",
          }}
        >

          {/* ── Row 1: Eyebrow ── */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 24, height: 1, backgroundColor: "#D4A853", flexShrink: 0 }} />
              <span style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: 8,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.48em",
                color: "rgba(212,168,83,0.65)",
              }}>
                ukbestcasinosites.com
              </span>
            </div>
            <time
              dateTime={iso}
              className="hero-eyebrow-date"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: 8,
                textTransform: "uppercase",
                letterSpacing: "0.28em",
                color: "rgba(245,240,232,0.2)",
              }}
            >
              Updated {label}
            </time>
          </div>

          {/* ── Row 2: Headline ── */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", paddingTop: 10, paddingBottom: 10 }}>
            <p style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: 7,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.52em",
              color: "rgba(212,168,83,0.48)",
              marginBottom: 8,
            }}>
              Independent Rankings · 2026
            </p>

            <h1
              className="hero-h1"
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                color: "#F5F0E8",
                margin: 0,
              }}
            >
              Britain&apos;s Finest{" "}
              <em style={{ color: "#D4A853", fontStyle: "italic" }}>Casino</em>
              {" "}
              <span style={{ fontWeight: 400, fontStyle: "italic" }}>Sites Ranked</span>
            </h1>

            {/* Desktop only paragraph */}
            <p
              className="hero-desc"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "clamp(12px, 1.2vw, 14px)",
                color: "rgba(245,240,232,0.4)",
                lineHeight: 1.7,
                maxWidth: "38rem",
                marginTop: 12,
                marginBottom: 0,
              }}
            >
              Six independently verified criteria applied to every UKGC-licensed operator —
              licensing, game depth, bonus clarity, payout speed, reliability, and player safety.
            </p>

            {/* Badges — hidden on smallest screens */}
            <div className="hero-badges" style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 12 }}>
              {BADGES.map((b) => (
                <span key={b.label} style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: 7,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.34em",
                  color: "rgba(212,168,83,0.58)",
                  border: "1px solid rgba(212,168,83,0.16)",
                  backgroundColor: "rgba(212,168,83,0.04)",
                  padding: "4px 10px",
                }}>
                  {b.label}
                </span>
              ))}
            </div>
          </div>

          {/* ── Row 3: Stats + Disclosures ── */}
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>

            {/* Stat strip */}
            <div style={{ display: "inline-flex", border: "1px solid rgba(212,168,83,0.2)" }}>
              {STATS.map(({ v, l }, i) => (
                <div key={l} style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "7px 16px",
                  borderRight: i < 2 ? "1px solid rgba(212,168,83,0.14)" : "none",
                  backgroundColor: "rgba(10,10,10,0.72)",
                }}>
                  <span style={{
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    fontWeight: 700,
                    fontSize: "clamp(0.9rem, 2vw, 1.2rem)",
                    lineHeight: 1,
                    color: "#D4A853",
                  }}>{v}</span>
                  <span
                    className="hero-stat-label"
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontSize: 6,
                      textTransform: "uppercase",
                      letterSpacing: "0.22em",
                      color: "rgba(245,240,232,0.55)",
                      marginTop: 4,
                    }}
                  >{l}</span>
                </div>
              ))}
            </div>

            {/* Disclosures */}
            <div className="hero-disclosure-full" style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <button
                type="button"
                onClick={onAdvertiserModalOpen}
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: 7,
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.30em",
                  color: "rgba(212,168,83,0.42)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textDecoration: "underline",
                  textUnderlineOffset: 3,
                  padding: 0,
                }}
              >
                Advertiser Disclosure
              </button>
              <span style={{ color: "rgba(212,168,83,0.16)", fontSize: 10, userSelect: "none" }}>|</span>
              <button
                type="button"
                onClick={onTermsModalOpen}
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: 7,
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.30em",
                  color: "rgba(212,168,83,0.42)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textDecoration: "underline",
                  textUnderlineOffset: 3,
                  padding: 0,
                }}
              >
                18+ Terms Apply
              </button>
            </div>
          </div>

        </div>

        {/* Bottom rule */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 1, backgroundColor: "rgba(212,168,83,0.16)" }} />
      </section>
    </>
  )
}
