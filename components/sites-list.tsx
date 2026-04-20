"use client"

import { Card } from "./card"
import { bettingSites } from "../data/mock-data"
import type { BettingSite } from "../types"

export function SitesList() {
  return (
    <section className="w-full py-16 px-6 md:px-10 lg:px-0">
      {/* Section header — editorial style */}
      <div className="flex items-baseline gap-6 mb-10">
        <span
          className="font-serif font-light text-6xl lg:text-8xl leading-none shrink-0"
          style={{ color: "rgba(201,168,76,0.15)" }}
          aria-hidden
        >
          01
        </span>
        <div>
          <p className="font-sans text-[8px] font-bold uppercase tracking-[0.45em] mb-2" style={{ color: "rgba(201,168,76,0.5)" }}>
            Current Rankings
          </p>
          <h2
            className="font-serif font-light leading-none"
            style={{ color: "#EDE4CC", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
          >
            Top Casino Sites
          </h2>
        </div>
      </div>

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
