"use client"

import { Card } from "./card"
import { bettingSites } from "../data/mock-data"
import type { BettingSite } from "../types"

const GOLD = "#B8965A"
const PARCHMENT = "#F2ECD9"

export function SitesList() {
  return (
    <div className="w-full">
      {/* Section header */}
      <div className="flex items-center gap-5 mb-6">
        <div className="flex-1 h-px" style={{ background: "rgba(184,150,90,0.2)" }} />
        <div className="text-center px-2">
          <p
            className="font-sans text-[8px] font-bold uppercase tracking-[0.4em] mb-1"
            style={{ color: "rgba(184,150,90,0.55)" }}
          >
            Current Rankings
          </p>
          <h2
            className="font-serif font-semibold text-2xl sm:text-3xl leading-tight"
            style={{ color: PARCHMENT }}
          >
            Top Trusted Casino Sites
          </h2>
        </div>
        <div className="flex-1 h-px" style={{ background: "rgba(184,150,90,0.2)" }} />
      </div>

      {/* Cards */}
      <div className="space-y-2 w-full">
        {bettingSites.map((site: BettingSite, index: number) => (
          <div key={site.id} className="w-full">
            <Card site={site} rank={index + 1} />
          </div>
        ))}
      </div>

      {/* Footer note */}
      <p
        className="text-center mt-5 font-sans text-[9px] uppercase tracking-[0.28em]"
        style={{ color: "rgba(184,150,90,0.38)" }}
      >
        18+ · Licensed operators only · T&amp;Cs apply to all offers
      </p>
    </div>
  )
}
