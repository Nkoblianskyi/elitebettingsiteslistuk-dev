"use client"

import { Card } from "./card"
import { bettingSites } from "../data/mock-data"
import type { BettingSite } from "../types"

const GOLD = "#C9A84C"
const IVORY = "#F5F0E8"

export function SitesList() {
  return (
    <div className="w-full">
      {/* Section header */}
      <div className="flex items-center gap-4 mb-4">
        <div className="flex-1 h-px" style={{ background: "rgba(201,168,76,0.25)" }} />
        <div className="text-center px-2">
          <p
            className="text-[9px] font-sans font-bold uppercase tracking-[0.35em]"
            style={{ color: "rgba(201,168,76,0.6)" }}
          >
            Current Rankings
          </p>
          <h2
            className="font-serif font-bold text-lg leading-tight"
            style={{ color: IVORY }}
          >
            Top UK Betting Sites
          </h2>
        </div>
        <div className="flex-1 h-px" style={{ background: "rgba(201,168,76,0.25)" }} />
      </div>

      {/* List */}
      <div className="space-y-2 w-full">
        {bettingSites.map((site: BettingSite, index: number) => (
          <div key={site.id} className="w-full">
            <Card site={site} rank={index + 1} />
          </div>
        ))}
      </div>

      {/* Footer note */}
      <p className="text-center mt-4 text-[9px] font-sans uppercase tracking-wider" style={{ color: "rgba(201,168,76,0.4)" }}>
        18+ · Gambling by licensed operators only · T&amp;Cs apply
      </p>
    </div>
  )
}
