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
          border: `1px solid rgba(201,168,76,${isTop3 ? "0.25" : "0.1"})`,
          borderTop: isTop3 ? "none" : `1px solid rgba(201,168,76,0.1)`,
        }}
      >
        {/* Rank column */}
        <div
          className="shrink-0 flex items-center justify-center"
          style={{ width: "72px", borderRight: "1px solid rgba(201,168,76,0.1)", backgroundColor: rank === 1 ? "rgba(201,168,76,0.04)" : "transparent" }}
        >
          <span
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontWeight: 400,
              fontStyle: "italic",
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              lineHeight: 1,
              color: rank === 1 ? "#C9A84C" : "rgba(201,168,76,0.3)",
            }}
          >
            {rank}
          </span>
        </div>

        {/* Logo column */}
        <div
          className="shrink-0 flex items-center justify-center px-4 py-6"
          style={{ width: "140px", borderRight: "1px solid rgba(201,168,76,0.1)" }}
        >
          <div
            className="w-full flex items-center justify-center overflow-hidden"
            style={{ background: "#ffffff", height: "56px", borderRadius: "2px" }}
          >
            <img
              src={site.logo}
              alt={site.name}
              style={{ maxHeight: "44px", maxWidth: "116px", width: "auto", objectFit: "contain" }}
            />
          </div>
        </div>

        {/* Offer column */}
        <div
          className="flex-1 flex flex-col items-center justify-center text-center px-8 py-6"
          style={{ borderRight: "1px solid rgba(201,168,76,0.1)" }}
        >
          <p
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "8px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.38em",
              color: "rgba(201,168,76,0.45)",
              marginBottom: "8px",
            }}
          >
            Welcome Offer
          </p>
          <p
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontWeight: 700,
              fontSize: "clamp(1.15rem, 2.2vw, 1.6rem)",
              lineHeight: 1.05,
              color: "#EDE4CC",
              marginBottom: "6px",
            }}
          >
            {site.bonus}
          </p>
          <p
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "11px",
              color: "rgba(237,228,204,0.38)",
            }}
          >
            {site.welcomeOffer ?? site.bonus}
          </p>
        </div>

        {/* Score column */}
        <div
          className="shrink-0 flex flex-col justify-center px-7 py-6"
          style={{ minWidth: "170px", borderRight: "1px solid rgba(201,168,76,0.1)" }}
        >
          <ScoreBar score={site.score} />
          <p
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "8px",
              color: "rgba(237,228,204,0.22)",
              marginTop: "10px",
            }}
          >
            {site.reviews.toLocaleString("en-GB")} reviews
          </p>
        </div>

        {/* CTA column */}
        <div
          className="shrink-0 flex flex-col items-center justify-center gap-3 px-7 py-6"
          style={{ minWidth: "160px" }}
        >
          <Link
            href={site.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center transition-opacity hover:opacity-85 whitespace-nowrap"
            style={{
              backgroundColor: "#C9A84C",
              color: "#0D0D0D",
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "10px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.24em",
              padding: "14px 0",
            }}
          >
            Claim Offer
          </Link>
          <span
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "8px",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              color: "rgba(201,168,76,0.3)",
            }}
          >
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
        <div className="px-4 py-3 flex flex-col items-center justify-center">
          <p className="font-sans text-[8px] uppercase tracking-[0.3em] mb-1" style={{ color: "rgba(201,168,76,0.4)" }}>
            Welcome Offer
          </p>
          <p className="font-serif font-semibold text-lg leading-tight" style={{ color: "#EDE4CC" }}>
            {site.bonus}
          </p>
          <p className="font-sans text-[12px] mt-0.5" style={{ color: "rgba(237,228,204,0.4)" }}>
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
