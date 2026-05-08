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
  { label: "Independent Review" },
  { label: "No Paid Placements" },
  { label: "18+ Only" },
]

export function HeroSection({ onAdvertiserModalOpen, onTermsModalOpen }: HeroSectionProps) {
  const { iso, label } = getDate()

  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        minHeight: "clamp(440px, 58vw, 660px)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Background */}
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
        {/* deep navy overlay */}
        <div style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(118deg, #07070f 0%, rgba(7,7,15,0.97) 28%, rgba(7,7,15,0.78) 60%, rgba(7,7,15,0.25) 100%)",
        }} />
        {/* bottom fade */}
        <div style={{
          position: "absolute",
          bottom: 0, left: 0, right: 0,
          height: "60%",
          background: "linear-gradient(to top, #07070f 0%, transparent 100%)",
        }} />
        {/* warm glow top-left */}
        <div style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 60% 80% at -10% 10%, rgba(184,147,90,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
      </div>

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          flex: 1,
          maxWidth: 1152,
          margin: "0 auto",
          width: "100%",
          padding:
            "clamp(44px,6.5vw,88px) clamp(20px,4vw,64px) clamp(48px,6.5vw,88px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: "clamp(32px,4.5vw,56px)",
        }}
      >
        {/* Eyebrow row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 36, height: 1, backgroundColor: "#B8935A", flexShrink: 0 }} />
            <span style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: 9,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.54em",
              color: "rgba(184,147,90,0.68)",
            }}>
              ukbestcasinosites.com
            </span>
          </div>
          <time dateTime={iso} style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: 9,
            textTransform: "uppercase",
            letterSpacing: "0.30em",
            color: "rgba(238,229,208,0.22)",
          }}>
            Updated {label}
          </time>
        </div>

        {/* Headline block */}
        <div>
          <p style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: 9,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.56em",
            color: "rgba(184,147,90,0.52)",
            marginBottom: "clamp(18px,2.4vw,30px)",
          }}>
            Independent Rankings · 2026
          </p>

          <h1 style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontWeight: 800,
            fontSize: "clamp(2.8rem,7.5vw,6rem)",
            lineHeight: 0.9,
            letterSpacing: "-0.02em",
            color: "#EEE5D0",
            marginBottom: "clamp(22px,2.8vw,36px)",
          }}>
            Britain&apos;s Finest
            <br />
            <em style={{ color: "#B8935A", fontStyle: "italic" }}>Online Casino</em>
            <br />
            <span style={{ fontWeight: 400, fontStyle: "italic", color: "#EEE5D0" }}>
              Sites, Ranked
            </span>
          </h1>

          <p style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "clamp(13px,1.4vw,15px)",
            color: "rgba(238,229,208,0.44)",
            lineHeight: 1.8,
            maxWidth: "40rem",
            marginBottom: "clamp(24px,2.8vw,36px)",
          }}>
            Six independently verified criteria — licensing integrity, game library depth,
            bonus transparency, payout processing speed, platform reliability, and responsible
            gambling tools — applied to every UKGC-licensed operator we review.
          </p>

          {/* Badges */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {BADGES.map((b) => (
              <span key={b.label} style={{
                display: "inline-flex",
                alignItems: "center",
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: 9,
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.36em",
                color: "rgba(184,147,90,0.60)",
                border: "1px solid rgba(184,147,90,0.18)",
                backgroundColor: "rgba(184,147,90,0.04)",
                padding: "6px 14px",
              }}>
                {b.label}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom row: stats + disclosures */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 20 }}>

          {/* Stat strip */}
          <div style={{ display: "inline-flex", border: "1px solid rgba(184,147,90,0.22)" }}>
            {(
              [
                { v: "6",    l: "Ranked Sites"    },
                { v: "18+",  l: "Age Requirement" },
                { v: "UKGC", l: "Licensed Only"   },
              ] as { v: string; l: string }[]
            ).map(({ v, l }, i) => (
              <div key={l} style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "12px clamp(20px,3.2vw,40px)",
                borderRight: i < 2 ? "1px solid rgba(184,147,90,0.15)" : "none",
                backgroundColor: "rgba(7,7,15,0.75)",
              }}>
                <span style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontWeight: 700,
                  fontSize: "clamp(1.1rem,2.4vw,1.55rem)",
                  lineHeight: 1,
                  color: "#B8935A",
                }}>{v}</span>
                <span style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: 7,
                  textTransform: "uppercase",
                  letterSpacing: "0.26em",
                  color: "rgba(238,229,208,0.28)",
                  marginTop: 6,
                }}>{l}</span>
              </div>
            ))}
          </div>

          {/* Disclosures */}
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <button
              type="button"
              onClick={onAdvertiserModalOpen}
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: 8,
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.34em",
                color: "rgba(184,147,90,0.45)",
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
            <span style={{ color: "rgba(184,147,90,0.18)", fontSize: 11, userSelect: "none" }}>|</span>
            <button
              type="button"
              onClick={onTermsModalOpen}
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: 8,
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.34em",
                color: "rgba(184,147,90,0.45)",
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

      {/* Bottom gold rule */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 1, backgroundColor: "rgba(184,147,90,0.18)" }} />
    </section>
  )
}
