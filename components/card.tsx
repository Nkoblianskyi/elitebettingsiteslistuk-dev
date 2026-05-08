"use client"

import Link from "next/link"
import type { BettingSite } from "../types"

interface SiteCardProps {
  site: BettingSite
  rank: number
}

const RANK_LABEL: Record<number, string> = {
  1: "Editors' Selection",
  2: "Premium Choice",
  3: "Highly Commended",
}

function ScoreStars({ score }: { score: number }) {
  const stars = []
  const fullStars = Math.floor(score)
  const hasHalf = score % 1 >= 0.5
  
  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars.push(<span key={i} style={{ color: "#C8A86B" }}>★</span>)
    } else if (i === fullStars && hasHalf) {
      stars.push(<span key={i} style={{ color: "#C8A86B" }}>★</span>)
    } else {
      stars.push(<span key={i} style={{ color: "rgba(200,168,107,0.18)" }}>★</span>)
    }
  }

  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 6 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 20, lineHeight: 1, letterSpacing: 1 }}>
        {stars}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span style={{ fontFamily: "var(--font-inter),sans-serif", fontSize: 8, textTransform: "uppercase", letterSpacing: "0.26em", color: "rgba(200,168,107,0.75)" }}>
          Rating
        </span>
        <span style={{ fontFamily: "var(--font-inter),sans-serif", fontSize: 8, fontWeight: 700, color: "rgba(200,168,107,0.85)" }}>
          {score.toFixed(1)}/10
        </span>
      </div>
    </div>
  )
}

export function Card({ site, rank }: SiteCardProps) {
  const isTop3 = rank <= 3
  const ba = isTop3 ? (rank === 1 ? "0.42" : "0.24") : "0.13"
  const topBorder = rank === 1 ? "#C8A86B" : isTop3 ? "rgba(200,168,107,0.36)" : `rgba(200,168,107,${ba})`
  const cardBg = rank === 1 ? "#162019" : "#111E18"

  return (
    <div style={{ width: "100%" }}>

      {/* ── Top label banner (top-3 only) ── */}
      {isTop3 && (
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          padding: "7px 20px",
          backgroundColor: rank === 1 ? "rgba(200,168,107,0.07)" : "rgba(200,168,107,0.03)",
          borderTop: `1px solid ${topBorder}`,
          borderLeft: `1px solid rgba(200,168,107,${ba})`,
          borderRight: `1px solid rgba(200,168,107,${ba})`,
        }}>
          <div style={{ flex: 1, height: 1, backgroundColor: `rgba(200,168,107,${rank === 1 ? "0.20" : "0.09"})` }} />
          <span style={{
            fontFamily: "var(--font-inter),sans-serif",
            fontSize: 8,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.46em",
            color: rank === 1 ? "#C8A86B" : "rgba(200,168,107,0.70)",
          }}>
            {RANK_LABEL[rank]}
          </span>
          <div style={{ flex: 1, height: 1, backgroundColor: `rgba(200,168,107,${rank === 1 ? "0.20" : "0.09"})` }} />
        </div>
      )}

      {/* ══ DESKTOP ══ */}
      <div className="hidden md:flex items-stretch" style={{
        backgroundColor: cardBg,
        border: `1px solid rgba(200,168,107,${ba})`,
        borderTop: isTop3 ? "none" : `1px solid rgba(200,168,107,${ba})`,
        transition: "border-color 0.2s",
      }}>

        {/* Rank numeral */}
        <div style={{
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 70,
          borderRight: "1px solid rgba(200,168,107,0.20)",
          backgroundColor: rank === 1 ? "rgba(200,168,107,0.04)" : "transparent",
        }}>
          <span style={{
            fontFamily: "var(--font-playfair),Georgia,serif",
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: "clamp(1.9rem,3.1vw,2.8rem)",
            lineHeight: 1,
            color: rank === 1 ? "#C8A86B" : "rgba(200,168,107,0.55)",
            userSelect: "none",
          }}>{rank}</span>
        </div>

        {/* Logo */}
        <div style={{
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 144,
          padding: "20px 14px",
          borderRight: "1px solid rgba(200,168,107,0.20)",
        }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: 56,
            backgroundColor: "#ffffff",
          }}>
            <img src={site.logo} alt={site.name} style={{ maxHeight: 44, maxWidth: 118, width: "auto", objectFit: "contain" }} />
          </div>
        </div>

        {/* Offer */}
        <div style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "22px 28px",
          borderRight: "1px solid rgba(200,168,107,0.20)",
        }}>
          <p style={{
            fontFamily: "var(--font-inter),sans-serif",
            fontSize: 8,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.42em",
            color: "rgba(200,168,107,0.70)",
            marginBottom: 10,
          }}>Welcome Offer</p>
          <p style={{
            fontFamily: "var(--font-playfair),Georgia,serif",
            fontWeight: 700,
            fontSize: "clamp(1.1rem,2.1vw,1.55rem)",
            lineHeight: 1.05,
            color: "#FFFFFF",
            marginBottom: 6,
          }}>{site.bonus}</p>
          <p style={{
            fontFamily: "var(--font-inter),sans-serif",
            fontSize: 11,
            color: "rgba(255,255,255,0.72)",
            lineHeight: 1.55,
          }}>{site.welcomeOffer ?? site.bonus}</p>
        </div>

        {/* Score */}
        <div style={{
          flexShrink: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "22px 24px",
          minWidth: 162,
          borderRight: "1px solid rgba(200,168,107,0.20)",
        }}>
          <ScoreStars score={site.score} />
          <p style={{
            fontFamily: "var(--font-inter),sans-serif",
            fontSize: 8,
            color: "rgba(255,255,255,0.60)",
            marginTop: 6,
          }}>{site.reviews.toLocaleString("en-GB")} verified reviews</p>
        </div>

        {/* CTA */}
        <div style={{
          flexShrink: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          padding: "22px 24px",
          minWidth: 158,
        }}>
          <style>{`.cta-lnk{display:block;width:100%;text-align:center;background-color:#C8A86B;color:#0C1510;font-family:var(--font-inter),sans-serif;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.26em;padding:14px 0;text-decoration:none;transition:background-color .15s;white-space:nowrap}.cta-lnk:hover{background-color:#DEC07E}`}</style>
          <Link href={site.link} target="_blank" rel="noopener noreferrer" className="cta-lnk">
            Claim Offer
          </Link>
          <span style={{
            fontFamily: "var(--font-inter),sans-serif",
            fontSize: 8,
            textTransform: "uppercase",
            letterSpacing: "0.20em",
            color: "rgba(200,168,107,0.55)",
          }}>T&amp;Cs apply · 18+</span>
        </div>
      </div>

      {/* ══ MOBILE ══ */}
      <div className="md:hidden" style={{
        backgroundColor: "#111E18",
        border: `1px solid rgba(200,168,107,${ba})`,
        borderTop: isTop3 ? "none" : `1px solid rgba(200,168,107,${ba})`,
      }}>
        {/* Row 1: rank + logo + score */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          padding: "14px 16px 12px",
          borderBottom: "1px solid rgba(200,168,107,0.07)",
        }}>
          <span style={{
            fontFamily: "var(--font-playfair),Georgia,serif",
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: "1.6rem",
            lineHeight: 1,
            color: rank === 1 ? "#C8A86B" : "rgba(200,168,107,0.28)",
            flexShrink: 0,
            width: 26,
            textAlign: "center",
            userSelect: "none",
          }}>{rank}</span>

          <div style={{
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: 48,
            width: 96,
            backgroundColor: "#ffffff",
          }}>
            <img src={site.logo} alt={site.name} style={{ maxHeight: 38, maxWidth: 86, width: "auto", objectFit: "contain" }} />
          </div>

          <div style={{ flex: 1, minWidth: 0 }}>
            <ScoreStars score={site.score} />
          </div>
        </div>

        {/* Row 2: offer */}
        <div style={{
          padding: "13px 16px",
          textAlign: "center",
          borderBottom: "1px solid rgba(200,168,107,0.07)",
        }}>
          <p style={{
            fontFamily: "var(--font-inter),sans-serif",
            fontSize: 8,
            textTransform: "uppercase",
            letterSpacing: "0.34em",
            color: "rgba(200,168,107,0.38)",
            marginBottom: 6,
          }}>Welcome Offer</p>
          <p style={{
            fontFamily: "var(--font-playfair),Georgia,serif",
            fontWeight: 700,
            fontSize: "1.2rem",
            color: "#FFFFFF",
            lineHeight: 1.1,
          }}>{site.bonus}</p>
        </div>

        {/* Row 3: CTA */}
        <div style={{ padding: "13px 16px" }}>
          <Link
            href={site.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              width: "100%",
              textAlign: "center",
              backgroundColor: "#C8A86B",
              color: "#0C1510",
              fontFamily: "var(--font-inter),sans-serif",
              fontSize: 10,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.26em",
              padding: "13px 0",
              textDecoration: "none",
            }}
          >
            Claim Offer
          </Link>
          <p style={{
            fontFamily: "var(--font-inter),sans-serif",
            fontSize: 8,
            color: "rgba(255,255,255,0.60)",
            marginTop: 8,
            textAlign: "center",
            lineHeight: 1.55,
          }}>{site.terms}</p>
        </div>
      </div>

      {/* ── Terms strip ── */}
      <div style={{
        padding: "7px 20px",
        borderLeft: `1px solid rgba(200,168,107,${ba})`,
        borderRight: `1px solid rgba(200,168,107,${ba})`,
        borderBottom: `1px solid rgba(200,168,107,${ba})`,
        backgroundColor: "rgba(12,21,16,0.55)",
      }}>
        <p style={{
          fontFamily: "var(--font-inter),sans-serif",
          fontSize: 8,
          lineHeight: 1.7,
          color: "rgba(255,255,255,0.60)",
        }}>{site.terms}</p>
      </div>

    </div>
  )
}
