"use client"

import type React from "react"
import { useEffect, useState } from "react"
import type { BettingSite } from "../types"
import Link from "next/link"

interface SiteCardProps {
  site: BettingSite
  rank: number
}

const GOLD = "#B8965A"
const FOREST = "#0F2318"
const FOREST_CARD = "#152B1E"
const FOREST_LIGHT = "#1B3A2D"
const PARCHMENT = "#F2ECD9"

const BADGE_LABELS: Record<number, { label: string; sub: string }> = {
  1: { label: "Editors' Choice", sub: "Top Rated" },
  2: { label: "Premium Pick", sub: "Exclusive Offer" },
  3: { label: "Highly Rated", sub: "Expert Endorsed" },
}

function RatingDots({ score }: { score: number }) {
  const filled = Math.round((score / 10) * 5)
  return (
    <div className="flex gap-1" aria-label={`Rating: ${score} out of 10`}>
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className="block w-2 h-2 rounded-full border"
          style={{
            backgroundColor: i < filled ? GOLD : "transparent",
            borderColor: i < filled ? GOLD : "rgba(184,150,90,0.35)",
          }}
        />
      ))}
    </div>
  )
}

const formatVotes = (v: number) => v.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

function TermsBar({ terms }: { terms: string }) {
  return (
    <div
      className="border-t px-4 py-2"
      style={{ borderColor: "rgba(184,150,90,0.12)", backgroundColor: "rgba(15,35,24,0.5)" }}
    >
      <p className="font-sans text-[9px] text-center line-clamp-1 leading-tight" style={{ color: "rgba(242,236,217,0.35)" }}>
        {terms}
      </p>
    </div>
  )
}

export function Card({ site, rank }: SiteCardProps) {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  const hasBadge = rank in BADGE_LABELS
  const badge = BADGE_LABELS[rank]
  const welcomeOffer = site.welcomeOffer ?? site.bonus

  return (
    <div className="block">
      {/* ======= DESKTOP ======= */}
      <div
        className="hidden lg:flex flex-col border overflow-hidden transition-all duration-200 hover:border-[#B8965A]/40"
        style={{ backgroundColor: FOREST_CARD, borderColor: "rgba(184,150,90,0.18)" }}
      >
        {/* Badge bar */}
        {hasBadge && (
          <div
            className="flex items-center justify-center gap-2 py-1.5 border-b"
            style={{ backgroundColor: "rgba(184,150,90,0.08)", borderColor: "rgba(184,150,90,0.2)" }}
          >
            <span className="font-sans text-[8px] font-bold uppercase tracking-[0.28em]" style={{ color: GOLD }}>
              {badge.label}
            </span>
            <span style={{ color: "rgba(184,150,90,0.3)" }} aria-hidden>·</span>
            <span className="font-sans text-[8px] uppercase tracking-[0.2em]" style={{ color: "rgba(184,150,90,0.55)" }}>
              {badge.sub}
            </span>
          </div>
        )}

        <div className="flex items-stretch">
          {/* Rank column */}
          <div
            className="w-20 xl:w-24 shrink-0 flex flex-col items-center justify-center py-5 gap-1.5 border-r"
            style={{ backgroundColor: FOREST, borderColor: "rgba(184,150,90,0.18)" }}
          >
            <span className="font-sans text-[8px] font-bold uppercase tracking-[0.3em]" style={{ color: "rgba(184,150,90,0.45)" }}>
              No.
            </span>
            <span className="font-serif font-bold text-4xl xl:text-5xl leading-none" style={{ color: GOLD }}>
              {rank}
            </span>
          </div>

          <Link
            href={site.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-stretch group/card"
          >
            {/* Logo */}
            <div
              className="flex-[0_0_18%] xl:flex-[0_0_16%] flex items-center justify-center px-5 py-4 border-r"
              style={{ backgroundColor: "#fff", borderColor: "rgba(184,150,90,0.18)" }}
            >
              <img
                src={site.logo || "/placeholder.svg"}
                alt={site.name}
                className="max-h-16 w-full object-contain"
              />
            </div>

            {/* Offer info */}
            <div
              className="flex-1 flex flex-col justify-center px-7 py-4 border-r"
              style={{ borderColor: "rgba(184,150,90,0.1)" }}
            >
              <p className="font-sans text-[8px] font-bold uppercase tracking-[0.3em] mb-1.5" style={{ color: "rgba(184,150,90,0.55)" }}>
                Welcome Offer
              </p>
              <p className="font-serif font-semibold text-2xl xl:text-3xl leading-tight mb-1" style={{ color: PARCHMENT }}>
                {site.bonus}
              </p>
              <p className="font-sans text-xs" style={{ color: "rgba(242,236,217,0.5)" }}>
                {welcomeOffer}
              </p>
            </div>

            {/* Score column */}
            <div
              className="flex-[0_0_15%] flex flex-col items-center justify-center gap-2 px-5 border-r"
              style={{ borderColor: "rgba(184,150,90,0.1)" }}
            >
              {/* Score badge */}
              <div
                className="w-16 h-16 xl:w-20 xl:h-20 border flex flex-col items-center justify-center"
                style={{ borderColor: GOLD, backgroundColor: "rgba(184,150,90,0.06)" }}
              >
                <span className="font-serif font-bold text-2xl xl:text-3xl leading-none" style={{ color: GOLD }}>
                  {site.score.toFixed(1)}
                </span>
                <span className="font-sans text-[7px] uppercase tracking-wider mt-0.5" style={{ color: "rgba(184,150,90,0.55)" }}>
                  Score
                </span>
              </div>
              <RatingDots score={site.score} />
              <span className="font-sans text-[8px]" style={{ color: "rgba(242,236,217,0.35)" }}>
                {formatVotes(site.reviews)} reviews
              </span>
            </div>

            {/* CTA column */}
            <div className="flex-[0_0_14%] flex items-center justify-center px-5">
              <div className="flex flex-col items-center gap-2 w-full">
                <span
                  className="w-full text-center font-sans font-bold text-xs xl:text-sm py-4 transition-all border group-hover/card:border-[#D4B07A] group-hover/card:bg-[#D4B07A]"
                  style={{ backgroundColor: GOLD, color: FOREST, borderColor: GOLD }}
                >
                  CLAIM OFFER
                </span>
                <span className="font-sans text-[9px]" style={{ color: "rgba(184,150,90,0.55)" }}>
                  Visit Site
                </span>
              </div>
            </div>
          </Link>
        </div>
        <TermsBar terms={site.terms ?? ""} />
      </div>

      {/* ======= TABLET ======= */}
      <div
        className="hidden md:flex lg:hidden flex-col border overflow-hidden"
        style={{ backgroundColor: FOREST_CARD, borderColor: "rgba(184,150,90,0.18)" }}
      >
        {hasBadge && (
          <div
            className="text-center py-1 text-[8px] font-sans font-bold uppercase tracking-[0.25em] border-b"
            style={{ backgroundColor: "rgba(184,150,90,0.08)", borderColor: "rgba(184,150,90,0.18)", color: GOLD }}
          >
            {badge.label}
          </div>
        )}
        <div className="flex items-stretch min-h-[130px]">
          <div
            className="w-14 shrink-0 flex flex-col items-center justify-center border-r"
            style={{ backgroundColor: FOREST, borderColor: "rgba(184,150,90,0.18)" }}
          >
            <span className="font-serif font-bold text-2xl" style={{ color: GOLD }}>{rank}</span>
          </div>
          <Link href={site.link} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-stretch min-w-0">
            <div className="flex-[0_0_30%] flex items-center justify-center p-3 border-r" style={{ backgroundColor: "#fff", borderColor: "rgba(184,150,90,0.15)" }}>
              <img src={site.logo || "/placeholder.svg"} alt={site.name} className="max-h-14 w-full object-contain" />
            </div>
            <div className="flex-1 flex flex-col justify-center px-4 py-3 gap-2">
              <div>
                <p className="font-sans text-[8px] uppercase tracking-[0.25em] mb-1" style={{ color: "rgba(184,150,90,0.55)" }}>Offer</p>
                <p className="font-serif font-semibold text-lg leading-tight" style={{ color: PARCHMENT }}>{site.bonus}</p>
                <p className="font-sans text-xs mt-0.5" style={{ color: "rgba(242,236,217,0.45)" }}>{welcomeOffer}</p>
              </div>
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 border flex flex-col items-center justify-center shrink-0" style={{ borderColor: GOLD, backgroundColor: "rgba(184,150,90,0.06)" }}>
                    <span className="font-serif font-bold text-sm leading-none" style={{ color: GOLD }}>{site.score.toFixed(1)}</span>
                  </div>
                  <RatingDots score={site.score} />
                </div>
                <span className="px-5 py-2.5 text-[10px] font-sans font-bold" style={{ backgroundColor: GOLD, color: FOREST }}>
                  CLAIM
                </span>
              </div>
            </div>
          </Link>
        </div>
        <TermsBar terms={site.terms ?? ""} />
      </div>

      {/* ======= MOBILE ======= */}
      <div
        className={`md:hidden flex flex-col border overflow-hidden ${hasBadge ? "mt-5" : "mt-2"}`}
        style={{ backgroundColor: FOREST_CARD, borderColor: "rgba(184,150,90,0.18)" }}
      >
        {hasBadge && (
          <div
            className="text-center py-1.5 text-[8px] font-sans font-bold uppercase tracking-[0.22em] border-b"
            style={{ backgroundColor: "rgba(184,150,90,0.1)", borderColor: "rgba(184,150,90,0.22)", color: GOLD }}
          >
            {badge.label}
          </div>
        )}
        <Link href={site.link} target="_blank" rel="noopener noreferrer" className="block">
          <div className="grid grid-cols-2">
            {/* Left */}
            <div className="flex flex-col border-r" style={{ borderColor: "rgba(184,150,90,0.18)" }}>
              <div className="flex items-center justify-center px-3 py-3" style={{ backgroundColor: "#fff" }}>
                <img src={site.logo || "/placeholder.svg"} alt={site.name} className="h-14 w-auto max-w-full object-contain" />
              </div>
              <div className="flex flex-col items-center justify-center gap-1.5 py-3 flex-1" style={{ backgroundColor: FOREST_CARD }}>
                <div className="flex items-center gap-1.5">
                  <span className="font-serif font-bold text-lg leading-none" style={{ color: GOLD }}>
                    {site.score.toFixed(1)}
                  </span>
                  <span className="font-sans text-[8px] uppercase tracking-wider" style={{ color: "rgba(184,150,90,0.5)" }}>/10</span>
                </div>
                <RatingDots score={site.score} />
                <span className="font-sans text-[8px]" style={{ color: "rgba(242,236,217,0.3)" }}>
                  ({formatVotes(site.reviews)})
                </span>
              </div>
            </div>

            {/* Right */}
            <div className="flex flex-col items-center justify-between py-3 px-3" style={{ backgroundColor: FOREST_CARD }}>
              <div className="text-center">
                <p className="font-sans text-[8px] uppercase tracking-[0.22em] mb-1" style={{ color: "rgba(184,150,90,0.5)" }}>
                  Welcome Offer
                </p>
                <p className="font-serif font-semibold text-base leading-tight mb-0.5" style={{ color: PARCHMENT }}>
                  {site.bonus}
                </p>
                <p className="font-sans text-[11px]" style={{ color: "rgba(242,236,217,0.42)" }}>
                  {welcomeOffer}
                </p>
              </div>
              <div
                className="text-center py-3 mt-3 w-full font-sans font-bold text-sm"
                style={{ backgroundColor: GOLD, color: FOREST }}
              >
                CLAIM OFFER
              </div>
            </div>
          </div>
        </Link>
        <TermsBar terms={site.terms ?? ""} />
      </div>
    </div>
  )
}
