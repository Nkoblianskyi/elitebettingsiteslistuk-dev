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

const BADGES = ["UKGC Licensed", "Independent", "18+ Only", "No Paid Placements"]
const STATS  = [{ v: "6", l: "Ranked" }, { v: "18+", l: "Age Req." }, { v: "UKGC", l: "Licensed" }]

export function HeroSection({ onAdvertiserModalOpen, onTermsModalOpen }: HeroSectionProps) {
  const { iso, label } = getDate()

  return (
    <>
      <style>{`
        .h-wrap { height: 250px; }
        @media (min-width: 768px) { .h-wrap { height: clamp(300px, 35vw, 400px); } }
        .h-title { font-size: 1.6rem; line-height: 1.0; }
        @media (min-width: 480px) { .h-title { font-size: 2.1rem; } }
        @media (min-width: 768px) { .h-title { font-size: clamp(2.4rem, 3.8vw, 3.6rem); } }
        .h-desc   { display: none; }
        @media (min-width: 768px) { .h-desc { display: block; } }
        .h-badges { display: none; }
        @media (min-width: 600px) { .h-badges { display: flex; } }
        .h-date   { display: none; }
        @media (min-width: 560px) { .h-date { display: block; } }
        .h-disc   { display: none; }
        @media (min-width: 520px) { .h-disc { display: flex; } }
        .h-stl    { display: none; }
        @media (min-width: 440px) { .h-stl { display: block; } }
      `}</style>

      <section className="h-wrap" style={{ position: "relative", overflow: "hidden", width: "100%", display: "flex", flexDirection: "column" }}>

        {/* ── Background ───────────────────────────────────── */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <img
            src="/hero-casino.jpg" alt="" aria-hidden
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%", filter: "brightness(0.25) saturate(0.65)" }}
          />
          {/* deep green directional overlay */}
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(112deg, rgba(12,21,16,0.99) 0%, rgba(12,21,16,0.95) 32%, rgba(12,21,16,0.72) 62%, rgba(12,21,16,0.15) 100%)" }} />
          {/* bottom fade */}
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "52%", background: "linear-gradient(to top, #0C1510 0%, transparent 100%)" }} />
          {/* gold accent — left vertical line */}
          <div style={{ position: "absolute", top: 0, bottom: 0, left: 0, width: 3, background: "linear-gradient(to bottom, transparent 5%, #C8A86B 25%, #C8A86B 75%, transparent 95%)" }} />
        </div>

        {/* ── Content ──────────────────────────────────────── */}
        <div style={{
          position: "relative", zIndex: 10, flex: 1, width: "100%", maxWidth: 1152,
          margin: "0 auto", padding: "14px 24px 12px",
          display: "flex", flexDirection: "column", justifyContent: "space-between",
          height: "100%", boxSizing: "border-box",
        }}>

          {/* Row 1 — eyebrow */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 22, height: 1, backgroundColor: "#C8A86B", flexShrink: 0 }} />
              <span style={{ fontFamily: "var(--font-inter),sans-serif", fontSize: 8, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.46em", color: "rgba(200,168,107,0.65)" }}>
                ukbestcasinosites.com
              </span>
            </div>
            <time dateTime={iso} className="h-date" style={{ fontFamily: "var(--font-inter),sans-serif", fontSize: 8, textTransform: "uppercase", letterSpacing: "0.28em", color: "rgba(255,255,255,0.28)" }}>
              Updated {label}
            </time>
          </div>

          {/* Row 2 — headline block */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "10px 0" }}>
            <p style={{ fontFamily: "var(--font-inter),sans-serif", fontSize: 7, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.50em", color: "rgba(200,168,107,0.50)", marginBottom: 10 }}>
              Independent Rankings · 2026
            </p>

            <h1 className="h-title" style={{ fontFamily: "var(--font-playfair),Georgia,serif", fontWeight: 800, letterSpacing: "-0.02em", color: "#FFFFFF", margin: 0 }}>
              UK Best{" "}
              <em style={{ color: "#C8A86B", fontStyle: "italic" }}>Casino</em>
              {" "}Sites
            </h1>

            <p className="h-desc" style={{ fontFamily: "var(--font-inter),sans-serif", fontSize: 13, color: "rgba(255,255,255,0.58)", lineHeight: 1.72, maxWidth: "38rem", marginTop: 12 }}>
              Six independently verified criteria — licensing, game quality, bonus clarity, payout speed, reliability and player protection.
            </p>

            <div className="h-badges" style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 12 }}>
              {BADGES.map((b) => (
                <span key={b} style={{
                  fontFamily: "var(--font-inter),sans-serif", fontSize: 8, fontWeight: 600,
                  textTransform: "uppercase", letterSpacing: "0.26em",
                  color: "#C8A86B", border: "1px solid rgba(200,168,107,0.22)",
                  backgroundColor: "rgba(200,168,107,0.06)", padding: "5px 10px",
                }}>
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Row 3 — stats + disclosures */}
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>

            <div style={{ display: "inline-flex", border: "1px solid rgba(200,168,107,0.22)" }}>
              {STATS.map(({ v, l }, i) => (
                <div key={l} style={{
                  display: "flex", flexDirection: "column", alignItems: "center",
                  padding: "8px clamp(12px,2.4vw,26px)",
                  borderRight: i < STATS.length - 1 ? "1px solid rgba(200,168,107,0.16)" : "none",
                  backgroundColor: "rgba(12,21,16,0.75)",
                }}>
                  <span style={{ fontFamily: "var(--font-playfair),Georgia,serif", fontWeight: 700, fontSize: "clamp(0.95rem,2vw,1.3rem)", lineHeight: 1, color: "#C8A86B" }}>
                    {v}
                  </span>
                  <span className="h-stl" style={{ fontFamily: "var(--font-inter),sans-serif", fontSize: 6, textTransform: "uppercase", letterSpacing: "0.22em", color: "rgba(255,255,255,0.38)", marginTop: 4 }}>
                    {l}
                  </span>
                </div>
              ))}
            </div>

            <div className="h-disc" style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <button type="button" onClick={onAdvertiserModalOpen} style={{ fontFamily: "var(--font-inter),sans-serif", fontSize: 8, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.28em", color: "rgba(200,168,107,0.55)", background: "none", border: "none", cursor: "pointer", textDecoration: "underline", textUnderlineOffset: 3, padding: 0 }}>
                Advertiser Disclosure
              </button>
              <span style={{ color: "rgba(200,168,107,0.22)", fontSize: 10, userSelect: "none" }}>|</span>
              <button type="button" onClick={onTermsModalOpen} style={{ fontFamily: "var(--font-inter),sans-serif", fontSize: 8, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.28em", color: "rgba(200,168,107,0.55)", background: "none", border: "none", cursor: "pointer", textDecoration: "underline", textUnderlineOffset: 3, padding: 0 }}>
                18+ Terms Apply
              </button>
            </div>

          </div>
        </div>

        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 1, backgroundColor: "rgba(200,168,107,0.16)" }} />
      </section>
    </>
  )
}
