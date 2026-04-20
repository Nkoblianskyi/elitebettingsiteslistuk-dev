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

function ScoreBar({ score }: { score: number }) {
  const pct = (score / 10) * 100
  return (
    <div className="w-full">
      <div className="h-px w-full" style={{ background: "rgba(201,168,76,0.13)" }}>
        <div className="h-px" style={{ width: `${pct}%`, background: "#C9A84C" }} />
      </div>
      <div className="flex justify-between mt-1">
        <span className="font-sans text-[8px] uppercase tracking-[0.25em]" style={{ color: "rgba(201,168,76,0.38)" }}>
          Score
        </span>
        <span className="font-sans text-[8px] font-bold" style={{ color: "rgba(201,168,76,0.65)" }}>
          {score.toFixed(1)}/10
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
          className="flex items-center gap-3 px-5 py-2"
          style={{
            backgroundColor: rank === 1 ? "rgba(201,168,76,0.08)" : "rgba(201,168,76,0.04)",
            borderTop: `1px solid rgba(201,168,76,${rank === 1 ? "0.4" : "0.15"})`,
            borderLeft: "1px solid rgba(201,168,76,0.13)",
            borderRight: "1px solid rgba(201,168,76,0.13)",
          }}
        >
          <div className="h-px flex-1" style={{ background: "rgba(201,168,76,0.15)" }} />
          <span
            className="font-sans text-[8px] font-bold uppercase tracking-[0.4em]"
            style={{ color: rank === 1 ? "#C9A84C" : "rgba(201,168,76,0.5)" }}
          >
            {rankLabel}
          </span>
          <div className="h-px flex-1" style={{ background: "rgba(201,168,76,0.15)" }} />
        </div>
      )}

      {/* ── DESKTOP layout ── */}
      <div
        className="hidden md:flex items-stretch"
        style={{
          backgroundColor: "#111111",
          border: `1px solid rgba(201,168,76,${isTop3 ? "0.2" : "0.1"})`,
          borderTop: isTop3 ? "none" : `1px solid rgba(201,168,76,0.1)`,
        }}
      >
        {/* Rank column */}
        <div
          className="shrink-0 flex items-center justify-center w-16 lg:w-20"
          style={{ borderRight: "1px solid rgba(201,168,76,0.1)" }}
        >
          <span
            className="font-serif font-light leading-none"
            style={{
              fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
              color: rank === 1 ? "#C9A84C" : "rgba(201,168,76,0.38)",
            }}
          >
            {rank}
          </span>
        </div>

        {/* Logo column */}
        <div
          className="shrink-0 flex items-center justify-center w-28 lg:w-36 px-3 py-5"
          style={{ borderRight: "1px solid rgba(201,168,76,0.1)" }}
        >
          <div
            className="w-full flex items-center justify-center rounded-sm overflow-hidden"
            style={{ background: "#fff", height: "60px" }}
          >
            <img
              src={site.logo}
              alt={site.name}
              className="max-h-12 max-w-[110px] w-auto object-contain"
            />
          </div>
        </div>

        {/* Offer column */}
        <div
          className="flex-1 flex flex-col items-center justify-center text-center px-6 py-5"
          style={{ borderRight: "1px solid rgba(201,168,76,0.1)" }}
        >
          <p className="font-sans text-[8px] font-bold uppercase tracking-[0.35em] mb-1.5" style={{ color: "rgba(201,168,76,0.42)" }}>
            Welcome Offer
          </p>
          <p
            className="font-serif font-semibold leading-tight mb-1"
            style={{ color: "#EDE4CC", fontSize: "clamp(1.1rem, 2vw, 1.5rem)" }}
          >
            {site.bonus}
          </p>
          <p className="font-sans text-[11px]" style={{ color: "rgba(237,228,204,0.4)" }}>
            {site.welcomeOffer ?? site.bonus}
          </p>
        </div>

        {/* Score column */}
        <div
          className="shrink-0 flex flex-col justify-center px-6 py-5"
          style={{ minWidth: "160px", borderRight: "1px solid rgba(201,168,76,0.1)" }}
        >
          <ScoreBar score={site.score} />
          <p className="font-sans text-[8px] mt-2.5" style={{ color: "rgba(237,228,204,0.25)" }}>
            {site.reviews.toLocaleString("en-GB")} reviews
          </p>
        </div>

        {/* CTA column */}
        <div
          className="shrink-0 flex flex-col items-center justify-center px-6 py-5 gap-2"
          style={{ minWidth: "150px" }}
        >
          <Link
            href={site.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center font-sans font-bold uppercase py-3.5 transition-all hover:opacity-90 whitespace-nowrap"
            style={{ backgroundColor: "#C9A84C", color: "#0D0D0D", fontSize: "clamp(8px, 1vw, 11px)", letterSpacing: "0.22em" }}
          >
            Claim Offer
          </Link>
          <span className="font-sans text-[8px] uppercase tracking-[0.2em]" style={{ color: "rgba(201,168,76,0.32)" }}>
            Visit Site
          </span>
        </div>
      </div>

      {/* ── MOBILE layout ── */}
      <div
        className="md:hidden"
        style={{
          backgroundColor: "#111111",
          border: `1px solid rgba(201,168,76,${isTop3 ? "0.2" : "0.1"})`,
          borderTop: isTop3 ? "none" : `1px solid rgba(201,168,76,0.1)`,
        }}
      >
        {/* Top row: rank + logo + score */}
        <div className="flex items-center gap-3 px-4 pt-4 pb-3" style={{ borderBottom: "1px solid rgba(201,168,76,0.08)" }}>
          <span
            className="font-serif font-light text-2xl leading-none shrink-0 w-7 text-center"
            style={{ color: rank === 1 ? "#C9A84C" : "rgba(201,168,76,0.38)" }}
          >
            {rank}
          </span>

          <div
            className="flex items-center justify-center rounded-sm overflow-hidden shrink-0"
            style={{ background: "#fff", height: "48px", width: "96px" }}
          >
            <img
              src={site.logo}
              alt={site.name}
              className="max-h-10 max-w-[86px] w-auto object-contain"
            />
          </div>

          <div className="flex-1 min-w-0">
            <ScoreBar score={site.score} />
          </div>
        </div>

        {/* Offer row */}
        <div className="px-4 py-3">
          <p className="font-sans text-[8px] uppercase tracking-[0.3em] mb-1" style={{ color: "rgba(201,168,76,0.4)" }}>
            Welcome Offer
          </p>
          <p className="font-serif font-semibold text-lg leading-tight" style={{ color: "#EDE4CC" }}>
            {site.bonus}
          </p>
          <p className="font-sans text-[11px] mt-0.5" style={{ color: "rgba(237,228,204,0.4)" }}>
            {site.welcomeOffer}
          </p>
        </div>

        {/* CTA */}
        <div className="px-4 pb-4">
          <Link
            href={site.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center font-sans font-bold text-[11px] uppercase tracking-[0.28em] py-3 transition-opacity hover:opacity-85"
            style={{ backgroundColor: "#C9A84C", color: "#0D0D0D" }}
          >
            Claim Offer
          </Link>
        </div>
      </div>

      {/* Terms strip */}
      <div
        className="px-5 py-2"
        style={{
          borderLeft: `1px solid rgba(201,168,76,${isTop3 ? "0.2" : "0.1"})`,
          borderRight: `1px solid rgba(201,168,76,${isTop3 ? "0.2" : "0.1"})`,
          borderBottom: `1px solid rgba(201,168,76,${isTop3 ? "0.2" : "0.1"})`,
          backgroundColor: "rgba(13,13,13,0.5)",
        }}
      >
        <p className="font-sans text-[8px] leading-relaxed" style={{ color: "rgba(237,228,204,0.2)" }}>
          {site.terms}
        </p>
      </div>
    </div>
  )
}
