"use client"

import { Card } from "./card"
import { bettingSites } from "../data/mock-data"
import type { BettingSite } from "../types"

const GOLD = "#C9A84C"
const CRIMSON = "#8B1A1A"
const IVORY = "#F5F0E8"

export function SitesList() {
  return (
    <div className="w-full">
      {/* Section header */}
      <div className="flex items-center gap-4 mb-5">
        <div className="flex-1 h-px" style={{ background: "rgba(139,26,26,0.3)" }} />
        <div className="text-center px-3">
          {/* Diamond ornament */}
          <div className="flex justify-center gap-1.5 mb-1">
            <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M3.5 0.5L6.5 3.5L3.5 6.5L0.5 3.5L3.5 0.5Z" fill={CRIMSON}/>
            </svg>
            <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M3.5 0.5L6.5 3.5L3.5 6.5L0.5 3.5L3.5 0.5Z" fill={GOLD} opacity="0.7"/>
            </svg>
            <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M3.5 0.5L6.5 3.5L3.5 6.5L0.5 3.5L3.5 0.5Z" fill={CRIMSON}/>
            </svg>
          </div>
          <p
            className="text-[9px] font-sans font-bold uppercase tracking-[0.32em]"
            style={{ color: "rgba(201,168,76,0.55)" }}
          >
            Current Rankings
          </p>
          <h2 className="font-serif font-bold text-lg leading-tight" style={{ color: IVORY }}>
            Top UK Casino Sites
          </h2>
        </div>
        <div className="flex-1 h-px" style={{ background: "rgba(139,26,26,0.3)" }} />
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
      <p
        className="text-center mt-4 text-[9px] font-sans uppercase tracking-wider"
        style={{ color: "rgba(201,168,76,0.35)" }}
      >
        18+ &nbsp;&middot;&nbsp; Gambling by licensed operators only &nbsp;&middot;&nbsp; T&amp;Cs apply
      </p>
    </div>
  )
}
