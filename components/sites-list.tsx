"use client"

import { Card } from "./card"
import { bettingSites } from "../data/mock-data"
import type { BettingSite } from "../types"

export function SitesList() {
  return (
    <section className="w-full py-16 px-6 md:px-10 lg:px-0">

      {/* Card list — no extra wrappers */}
      <div className="flex flex-col gap-0">
        {bettingSites.map((site: BettingSite, index: number) => (
          <Card key={site.id} site={site} rank={index + 1} />
        ))}
      </div>

      {/* Footnote */}
      <p
        className="mt-8 font-sans text-[8px] uppercase tracking-[0.35em] text-center"
        style={{ color: "rgba(201,168,76,0.3)" }}
      >
        18+ &nbsp; Licensed operators only &nbsp; Terms apply to all offers
      </p>
    </section>
  )
}
