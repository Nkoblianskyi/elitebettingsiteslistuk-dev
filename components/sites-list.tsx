"use client"

import { Card } from "./card"
import { bettingSites } from "../data/mock-data"
import type { BettingSite } from "../types"

export function SitesList() {
  return (
    <section className="w-full py-12">

      {/* Section header */}
      <div
        className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-6"
        style={{ borderBottom: "1px solid rgba(200,168,107,0.1)" }}
      >
        <div>
          <p
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "8px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.44em",
              color: "rgba(200,168,107,0.5)",
              marginBottom: "10px",
            }}
          >
            Independent Rankings 2026
          </p>
          <h2
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontWeight: 700,
              fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
              color: "#FFFFFF",
              lineHeight: 1.1,
            }}
          >
            UK Best Casino Sites
          </h2>
        </div>
        <p
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "10px",
            color: "rgba(255,255,255,0.3)",
            maxWidth: "260px",
            lineHeight: 1.6,
          }}
        >
          Ranked by editorial score across six independent criteria. UKGC licensed operators only.
        </p>
      </div>

      {/* Card list */}
      <div className="flex flex-col gap-0">
        {bettingSites.map((site: BettingSite, index: number) => (
          <Card key={site.id} site={site} rank={index + 1} />
        ))}
      </div>

      {/* Footnote */}
      <p
        style={{
          marginTop: "24px",
          fontFamily: "var(--font-inter), sans-serif",
          fontSize: "8px",
          textTransform: "uppercase",
          letterSpacing: "0.38em",
          color: "rgba(200,168,107,0.28)",
          textAlign: "center",
        }}
      >
        18+ &nbsp;·&nbsp; Licensed operators only &nbsp;·&nbsp; Terms apply to all offers
      </p>
    </section>
  )
}
