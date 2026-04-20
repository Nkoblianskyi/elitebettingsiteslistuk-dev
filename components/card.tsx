"use client"

import Link from "next/link"
import type { BettingSite } from "../types"

interface SiteCardProps {
  site: BettingSite
  rank: number
}

const RANK_LABELS: Record<number, string> = {
  1: "Editors' Selection",
  2: "Premium Choice",
  3: "Highly Commended",
}

/* Thin horizontal score bar, no stars/dots */
function ScoreBar({ score }: { score: number }) {
  const pct = (score / 10) * 100
  return (
    <div className="w-full">
      <div
        className="h-px w-full mb-1.5"
        style={{ background: "rgba(201,168,76,0.15)" }}
      >
        <div
          className="h-px transition-all"
          style={{ width: `${pct}%`, background: "#C9A84C" }}
        />
      </div>
      <div className="flex justify-between">
        <span className="font-sans text-[8px] uppercase tracking-[0.3em]" style={{ color: "rgba(201,168,76,0.4)" }}>
          Score
        </span>
        <span className="font-sans text-[8px] font-bold" style={{ color: "rgba(201,168,76,0.7)" }}>
          {score.toFixed(1)} / 10
        </span>
      </div>
    </div>
  )
}

export function Card({ site, rank }: SiteCardProps) {
  const isTop3 = rank <= 3
  const rankLabel = RANK_LABELS[rank]

  return (
    <div className="group relative w-full">

      {/* Top label strip for top 3 */}
      {isTop3 && (
        <div
          className="flex items-center gap-3 px-6 py-2"
          style={{
            backgroundColor: rank === 1 ? "rgba(201,168,76,0.1)" : "rgba(201,168,76,0.05)",
            borderTop: rank === 1 ? "1px solid rgba(201,168,76,0.4)" : "1px solid rgba(201,168,76,0.15)",
            borderLeft: "1px solid rgba(201,168,76,0.15)",
            borderRight: "1px solid rgba(201,168,76,0.15)",
          }}
        >
          <div className="h-px flex-1" style={{ background: "rgba(201,168,76,0.2)" }} />
          <span
            className="font-sans text-[8px] font-bold uppercase tracking-[0.4em]"
            style={{ color: rank === 1 ? "#C9A84C" : "rgba(201,168,76,0.55)" }}
          >
            {rankLabel}
          </span>
          <div className="h-px flex-1" style={{ background: "rgba(201,168,76,0.2)" }} />
        </div>
      )}

      {/* Main card body — race-card slip */}
      <div
        className="relative overflow-hidden transition-colors"
        style={{
          backgroundColor: "#111510",
          border: `1px solid rgba(201,168,76,${isTop3 ? "0.2" : "0.1"})`,
          borderTop: isTop3 ? "none" : `1px solid rgba(201,168,76,0.1)`,
        }}
      >
        {/* Giant background rank numeral — watermark */}
        <span
          className="rank-numeral absolute select-none pointer-events-none"
          style={{
            fontSize: "clamp(7rem, 16vw, 14rem)",
            top: "-0.15em",
            right: "0.04em",
            color: rank === 1 ? "rgba(201,168,76,0.07)" : "rgba(201,168,76,0.04)",
          }}
          aria-hidden
        >
          {rank}
        </span>

        {/* Grid: rank col / info col / score col / cta col */}
        <div className="relative flex items-stretch">

          {/* Rank column */}
          <div
            className="shrink-0 flex flex-col items-center justify-center w-16 md:w-20 lg:w-24 py-6"
            style={{ borderRight: "1px solid rgba(201,168,76,0.1)" }}
          >
            <span
              className="font-serif font-light leading-none"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                color: rank === 1 ? "#C9A84C" : "rgba(201,168,76,0.45)",
              }}
            >
              {rank}
            </span>
          </div>

          {/* Info area */}
          <div className="flex-1 min-w-0 flex flex-col md:flex-row md:items-center gap-4 md:gap-0 px-6 py-5 md:py-6">

            {/* Site name + offer */}
            <div className="flex-1 md:pr-6 md:border-r" style={{ borderColor: "rgba(201,168,76,0.1)" }}>
              <p
                className="font-sans text-[8px] font-bold uppercase tracking-[0.4em] mb-2"
                style={{ color: "rgba(201,168,76,0.4)" }}
              >
                Welcome Offer
              </p>
              <p
                className="font-serif font-semibold leading-tight mb-1"
                style={{
                  color: "#EDE4CC",
                  fontSize: "clamp(1.2rem, 2.5vw, 1.7rem)",
                }}
              >
                {site.bonus}
              </p>
              <p
                className="font-sans text-xs"
                style={{ color: "rgba(237,228,204,0.42)" }}
              >
                {site.welcomeOffer ?? site.bonus}
              </p>
            </div>

            {/* Score + reviews — desktop only */}
            <div
              className="hidden md:flex flex-col justify-center px-8"
              style={{
                minWidth: "180px",
                borderRight: "1px solid rgba(201,168,76,0.1)",
              }}
            >
              <ScoreBar score={site.score} />
              <p
                className="font-sans text-[8px] mt-3"
                style={{ color: "rgba(237,228,204,0.28)" }}
              >
                {site.reviews.toLocaleString("en-GB")} verified reviews
              </p>
            </div>
          </div>

          {/* CTA column — desktop */}
          <div
            className="hidden md:flex shrink-0 flex-col items-center justify-center px-8 gap-2"
            style={{ borderLeft: "1px solid rgba(201,168,76,0.1)", minWidth: "160px" }}
          >
            <Link
              href={site.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center font-sans font-bold text-[10px] uppercase tracking-[0.28em] py-4 transition-all hover:bg-[#E8D49A]"
              style={{ backgroundColor: "#C9A84C", color: "#0C0F0D" }}
            >
              Claim Offer
            </Link>
            <span
              className="font-sans text-[8px] uppercase tracking-[0.2em]"
              style={{ color: "rgba(201,168,76,0.35)" }}
            >
              Visit Site
            </span>
          </div>
        </div>

        {/* Mobile: score bar + CTA row */}
        <div className="md:hidden px-6 pb-5">
          <div className="mb-4">
            <ScoreBar score={site.score} />
          </div>
          <Link
            href={site.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center font-sans font-bold text-xs uppercase tracking-[0.28em] py-3.5 transition-opacity hover:opacity-85"
            style={{ backgroundColor: "#C9A84C", color: "#0C0F0D" }}
          >
            Claim Offer
          </Link>
        </div>

        {/* Terms strip */}
        <div
          className="px-6 py-2.5"
          style={{
            borderTop: "1px solid rgba(201,168,76,0.08)",
            backgroundColor: "rgba(12,15,13,0.6)",
          }}
        >
          <p
            className="font-sans text-[8px] leading-relaxed line-clamp-1"
            style={{ color: "rgba(237,228,204,0.22)" }}
          >
            {site.terms}
          </p>
        </div>
      </div>
    </div>
  )
}
