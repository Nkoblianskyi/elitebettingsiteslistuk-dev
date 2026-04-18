"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Star } from "lucide-react"
import type { BettingSite } from "../types"
import Link from "next/link"

interface SiteCardProps {
  site: BettingSite
  rank: number
}

const GOLD = "#C9A84C"
const NAVY = "#0D1B2A"
const NAVY_CARD = "#131E2B"
const NAVY_LIGHT = "#1C2B3A"
const IVORY = "#F5F0E8"

const BADGE_LABELS: Record<number, string> = {
  1: "EDITORS' CHOICE",
  2: "EXCLUSIVE OFFER",
  3: "HIGHLY RATED",
}

export function Card({ site, rank }: SiteCardProps) {
  const [isTermsExpanded, setIsTermsExpanded] = useState(false)
  const [showReadMore, setShowReadMore] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  const termsText = site.terms ?? ""
  const welcomeOffer = site.welcomeOffer ?? site.bonus
  useEffect(() => {
    const limit = isMobile ? 72 : 350
    setShowReadMore(termsText.length > limit)
  }, [termsText, isMobile])

  const formatVotes = (v: number) => v.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  const starRating = site.score / 2
  const getStarFill = (i: number) => Math.round(Math.max(0, Math.min(1, starRating - i)) * 5) / 5

  const handleTermsClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsTermsExpanded(!isTermsExpanded)
  }

  const hasBadge = rank in BADGE_LABELS

  const TermsBlock = ({ mobile = false }: { mobile?: boolean }) => (
    <div
      className="border-t px-3 py-2"
      style={{ borderColor: "rgba(201,168,76,0.15)", backgroundColor: "rgba(13,27,42,0.6)" }}
    >
      <div className="text-center max-w-4xl mx-auto">
        <p className="text-[7px] font-sans font-bold uppercase tracking-wider mb-0.5" style={{ color: "rgba(201,168,76,0.5)" }}>
          Terms &amp; Conditions
        </p>
        <div
          className={`font-sans leading-tight ${mobile ? "text-[9px]" : "text-[10px]"} ${!isTermsExpanded ? "line-clamp-2" : ""}`}
          style={{ color: "rgba(245,240,232,0.45)" }}
        >
          {termsText}
        </div>
        {showReadMore && (
          <button
            type="button"
            onClick={handleTermsClick}
            className="underline mt-0.5 text-[9px] font-sans font-semibold"
            style={{ color: GOLD }}
          >
            {isTermsExpanded ? "Less" : "Full terms"}
          </button>
        )}
      </div>
    </div>
  )

  return (
    <div className="block">
      {/* ——— Desktop ——— */}
      <div
        className="hidden lg:block border overflow-hidden transition-all duration-200 hover:border-[#C9A84C]/50"
        style={{ backgroundColor: NAVY_CARD, borderColor: "rgba(201,168,76,0.2)" }}
      >
        <div className="flex items-stretch">
          {/* Rank column */}
          <div
            className="w-[5rem] xl:w-[5.5rem] shrink-0 flex flex-col items-center justify-center py-4 gap-1 border-r"
            style={{ backgroundColor: NAVY, borderColor: "rgba(201,168,76,0.2)" }}
          >
            <span
              className="text-[8px] font-sans font-bold uppercase tracking-[0.25em]"
              style={{ color: "rgba(201,168,76,0.5)" }}
            >
              Rank
            </span>
            <span
              className="font-serif font-bold text-3xl xl:text-4xl leading-none"
              style={{ color: GOLD }}
            >
              {rank}
            </span>
            {hasBadge && (
              <span
                className="text-[7px] font-sans font-bold uppercase tracking-tight text-center leading-tight px-1.5 py-0.5 border mt-1"
                style={{ borderColor: "rgba(201,168,76,0.4)", color: GOLD }}
              >
                {BADGE_LABELS[rank]}
              </span>
            )}
          </div>

          <Link
            href={site.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-stretch gap-0 group/card"
          >
            {/* Logo */}
            <div
              className="flex-[0_0_22%] xl:flex-[0_0_20%] flex items-center justify-center px-4 py-3 border-r"
              style={{ backgroundColor: "#fff", borderColor: "rgba(201,168,76,0.2)" }}
            >
              <img
                src={site.logo || "/placeholder.svg"}
                alt={site.name}
                className="max-h-[5rem] xl:max-h-[5.5rem] w-full object-contain"
              />
            </div>

            {/* Bonus */}
            <div
              className="flex-1 flex flex-col justify-center px-5 py-3 border-r text-center"
              style={{ borderColor: "rgba(201,168,76,0.12)" }}
            >
              <p className="text-[9px] font-sans font-bold uppercase tracking-[0.2em] mb-1.5" style={{ color: "rgba(201,168,76,0.6)" }}>
                Welcome Offer
              </p>
              <p className="font-serif font-bold text-xl xl:text-2xl leading-tight" style={{ color: IVORY }}>
                {site.bonus}
              </p>
              <p className="font-sans text-xs mt-1" style={{ color: "rgba(245,240,232,0.55)" }}>
                {welcomeOffer}
              </p>
            </div>

            {/* Score */}
            <div
              className="flex-[0_0_16%] flex flex-col items-center justify-center gap-1.5 px-4 border-r"
              style={{ borderColor: "rgba(201,168,76,0.12)" }}
            >
              <div
                className="w-16 h-16 xl:w-[4.5rem] xl:h-[4.5rem] border-2 flex flex-col items-center justify-center"
                style={{ borderColor: GOLD, backgroundColor: "rgba(201,168,76,0.08)" }}
              >
                <span className="font-serif font-bold text-2xl xl:text-3xl leading-none" style={{ color: GOLD }}>
                  {site.score.toFixed(1)}
                </span>
                <span className="text-[7px] font-sans uppercase tracking-wider mt-0.5" style={{ color: "rgba(201,168,76,0.6)" }}>
                  Score
                </span>
              </div>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => {
                  const fill = getStarFill(i)
                  return (
                    <span key={i} className="relative inline-block w-3 h-3 shrink-0">
                      <Star className="absolute inset-0 w-3 h-3" style={{ fill: "none", stroke: GOLD, strokeWidth: 1.5 }} />
                      <Star
                        className="absolute inset-0 w-3 h-3"
                        style={{ fill: GOLD, stroke: GOLD, strokeWidth: 0, clipPath: `inset(0 ${(1 - fill) * 100}% 0 0)` }}
                      />
                    </span>
                  )
                })}
              </div>
              <span className="text-[8px] font-sans" style={{ color: "rgba(245,240,232,0.4)" }}>
                {formatVotes(site.reviews)} votes
              </span>
            </div>

            {/* CTA */}
            <div className="flex-[0_0_13%] flex items-center justify-center px-4">
              <div className="flex flex-col items-center gap-1.5 w-full">
                <span
                  className="w-full text-center font-sans font-bold text-xs xl:text-sm py-3.5 transition-all border"
                  style={{
                    backgroundColor: GOLD,
                    color: NAVY,
                    borderColor: GOLD,
                  }}
                >
                  CLAIM OFFER
                </span>
                <span
                  className="text-[9px] font-sans group-hover/card:underline"
                  style={{ color: "rgba(201,168,76,0.7)" }}
                >
                  {site.name} →
                </span>
              </div>
            </div>
          </Link>
        </div>
        <TermsBlock />
      </div>

      {/* ——— Tablet ——— */}
      <div
        className="hidden md:block lg:hidden border overflow-hidden transition-all duration-200"
        style={{ backgroundColor: NAVY_CARD, borderColor: "rgba(201,168,76,0.2)" }}
      >
        <div className="flex items-stretch min-h-[140px]">
          <div
            className="w-14 shrink-0 flex flex-col items-center justify-center border-r"
            style={{ backgroundColor: NAVY, borderColor: "rgba(201,168,76,0.2)" }}
          >
            <span className="font-serif font-bold text-2xl" style={{ color: GOLD }}>{rank}</span>
          </div>
          <Link
            href={site.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-stretch min-w-0 group/tab"
          >
            <div
              className="flex-[0_0_30%] flex items-center justify-center p-3 border-r"
              style={{ backgroundColor: "#fff", borderColor: "rgba(201,168,76,0.15)" }}
            >
              <img src={site.logo || "/placeholder.svg"} alt={site.name} className="max-h-[4rem] w-full object-contain" />
            </div>
            <div className="flex-1 flex flex-col justify-center px-3 py-2 gap-2">
              {hasBadge && (
                <span className="self-start text-[8px] font-sans font-bold uppercase border px-2 py-0.5" style={{ borderColor: "rgba(201,168,76,0.4)", color: GOLD }}>
                  {BADGE_LABELS[rank]}
                </span>
              )}
              <div className="border px-2 py-1.5 text-center" style={{ borderColor: "rgba(201,168,76,0.2)" }}>
                <p className="text-[8px] font-sans uppercase tracking-wider mb-0.5" style={{ color: "rgba(201,168,76,0.6)" }}>Offer</p>
                <p className="font-serif font-bold text-base leading-tight" style={{ color: IVORY }}>{site.bonus}</p>
                <p className="font-sans text-xs" style={{ color: "rgba(245,240,232,0.5)" }}>{welcomeOffer}</p>
              </div>
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <div
                    className="w-10 h-10 border flex flex-col items-center justify-center shrink-0"
                    style={{ borderColor: GOLD, backgroundColor: "rgba(201,168,76,0.05)" }}
                  >
                    <span className="font-serif font-bold text-sm leading-none" style={{ color: GOLD }}>{site.score.toFixed(1)}</span>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => {
                      const fill = getStarFill(i)
                      return (
                        <span key={i} className="relative inline-block w-2.5 h-2.5 shrink-0">
                          <Star className="absolute inset-0 w-2.5 h-2.5" style={{ fill: "none", stroke: GOLD, strokeWidth: 1.5 }} />
                          <Star className="absolute inset-0 w-2.5 h-2.5" style={{ fill: GOLD, stroke: GOLD, strokeWidth: 0, clipPath: `inset(0 ${(1 - fill) * 100}% 0 0)` }} />
                        </span>
                      )
                    })}
                  </div>
                </div>
                <span
                  className="px-5 py-2.5 text-[10px] font-sans font-bold border transition-colors"
                  style={{ backgroundColor: GOLD, color: NAVY, borderColor: GOLD }}
                >
                  CLAIM
                </span>
              </div>
            </div>
          </Link>
        </div>
        <TermsBlock />
      </div>

      {/* ——— Mobile ——— */}
      <div
        className={`md:hidden border overflow-hidden transition-all duration-200 ${hasBadge ? "mt-5" : "mt-2"}`}
        style={{ backgroundColor: NAVY_CARD, borderColor: "rgba(201,168,76,0.2)" }}
      >
        {hasBadge && (
          <div
            className="text-center py-1 text-[8px] font-sans font-bold uppercase tracking-[0.2em] border-b"
            style={{ backgroundColor: "rgba(201,168,76,0.12)", borderColor: "rgba(201,168,76,0.3)", color: GOLD }}
          >
            {BADGE_LABELS[rank]}
          </div>
        )}
        <Link
          href={site.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <div className="grid grid-cols-[1fr_1fr]">
            {/* Left: logo + score */}
            <div
              className="flex flex-col justify-between items-center py-3 px-2 border-r"
              style={{ backgroundColor: "#fff", borderColor: "rgba(201,168,76,0.2)" }}
            >
              <div className="flex items-center justify-center w-full mb-2">
                <img src={site.logo || "/placeholder.svg"} alt={site.name} className="h-14 w-auto max-w-full object-contain" />
              </div>
              <div className="flex flex-col items-center gap-0.5 w-full">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => {
                    const fill = getStarFill(i)
                    return (
                      <span key={i} className="relative inline-block w-3.5 h-3.5 shrink-0">
                        <Star className="absolute inset-0 w-3.5 h-3.5" style={{ fill: "none", stroke: GOLD, strokeWidth: 1.5 }} />
                        <Star className="absolute inset-0 w-3.5 h-3.5" style={{ fill: GOLD, stroke: GOLD, strokeWidth: 0, clipPath: `inset(0 ${(1 - fill) * 100}% 0 0)` }} />
                      </span>
                    )
                  })}
                </div>
                <span className="text-[10px] font-sans" style={{ color: "#555" }}>({formatVotes(site.reviews)})</span>
              </div>
            </div>

            {/* Right: rank + bonus + CTA */}
            <div className="flex flex-col items-center justify-between py-3 px-3">
              <div>
                <p className="text-[9px] font-sans uppercase tracking-wider mb-0.5" style={{ color: "rgba(201,168,76,0.5)" }}>
                  Welcome Offer
                </p>
                <p className="font-serif font-bold text-base leading-tight" style={{ color: IVORY }}>
                  {site.bonus}
                </p>
                <p className="font-sans text-[13px] mt-0.5" style={{ color: "rgba(245,240,232,0.5)" }}>
                  {welcomeOffer}
                </p>
              </div>
              <div
                className="text-center py-2.5 mt-2 font-sans font-bold text-sm"
                style={{ backgroundColor: GOLD, color: NAVY }}
              >
                CLAIM OFFER
              </div>
            </div>
          </div>
        </Link>
        <TermsBlock mobile />
      </div>
    </div>
  )
}
