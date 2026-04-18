"use client"

import { useState, useEffect } from "react"
import { X, Star } from "lucide-react"
import Link from "next/link"
import type { BettingSite } from "../types"

interface Top3ModalProps {
  bettingSites: BettingSite[]
  casinoSites: BettingSite[]
}

const GOLD = "#C9A84C"
const NAVY = "#0D1B2A"
const NAVY_CARD = "#131E2B"
const IVORY = "#F5F0E8"

function ModalSiteCard({
  site,
  isCenter,
  compact,
  rankLabel,
}: {
  site: BettingSite
  isCenter: boolean
  compact: boolean
  rankLabel: string
}) {
  const wClass = compact
    ? isCenter ? "w-[190px]" : "w-[162px]"
    : isCenter ? "w-[280px] xl:w-[320px]" : "w-[210px] xl:w-[245px]"

  return (
    <div
      className={`relative flex flex-col shrink-0 ${wClass} transition-transform duration-200 ${
        isCenter ? "z-20 scale-[1.03]" : "z-10 opacity-90 hover:opacity-100"
      }`}
    >
      {/* Rank label */}
      <div
        className="h-7 flex items-center justify-center text-[10px] font-sans font-bold uppercase tracking-[0.2em] border-t border-l border-r"
        style={{
          backgroundColor: isCenter ? GOLD : "rgba(201,168,76,0.1)",
          color: isCenter ? NAVY : GOLD,
          borderColor: isCenter ? GOLD : "rgba(201,168,76,0.3)",
        }}
      >
        {rankLabel}
      </div>

      {/* Card body */}
      <div
        className="flex flex-col flex-1 border"
        style={{
          backgroundColor: NAVY_CARD,
          borderColor: isCenter ? GOLD : "rgba(201,168,76,0.3)",
        }}
      >
        {/* Logo */}
        <div
          className={`flex items-center justify-center bg-white ${compact ? "h-16 mx-3 mt-3" : "h-20 xl:h-24 mx-3 mt-4"}`}
        >
          <img
            src={site?.logo || "/placeholder.svg"}
            alt={site?.name || ""}
            className={`object-contain ${compact ? "max-h-11" : "max-h-14 xl:max-h-16"}`}
          />
        </div>

        {/* Stars */}
        <div className={`flex justify-center gap-0.5 ${compact ? "mt-2.5" : "mt-3"}`}>
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={compact ? "w-2.5 h-2.5" : "w-3.5 h-3.5 xl:w-4 xl:h-4"} style={{ fill: GOLD, color: GOLD }} />
          ))}
        </div>

        {/* Bonus */}
        <div className={`flex flex-col flex-1 text-center ${compact ? "px-3 py-2" : "px-4 py-3"}`}>
          <p
            className={`font-serif font-bold leading-tight ${compact ? "text-sm" : "text-base xl:text-lg"}`}
            style={{ color: IVORY }}
          >
            {site?.bonus}
          </p>
          <p
            className={`font-sans ${compact ? "text-[10px] mt-0.5" : "text-xs mt-1"}`}
            style={{ color: "rgba(201,168,76,0.7)" }}
          >
            {site?.welcomeOffer ?? site?.bonus}
          </p>
        </div>

        {/* CTA */}
        <Link
          href={site?.link || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className={`block w-full font-sans font-bold text-center transition-opacity hover:opacity-85 ${
            compact ? "py-2 text-[10px] mx-3 mb-3 w-[calc(100%-1.5rem)]" : "py-3 text-xs xl:text-sm mx-3 mb-4 w-[calc(100%-1.5rem)]"
          }`}
          style={{ backgroundColor: GOLD, color: NAVY }}
        >
          CLAIM OFFER
        </Link>

        {/* Terms */}
        <p
          className={`px-3 pb-3 text-center leading-snug line-clamp-3 ${compact ? "text-[8px]" : "text-[9px] xl:text-[10px]"}`}
          style={{ color: "rgba(245,240,232,0.35)" }}
        >
          {site?.terms ?? ""}
        </p>
      </div>
    </div>
  )
}

export function Modal({ bettingSites, casinoSites: _casinoSites }: Top3ModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 8000)
    return () => clearTimeout(timer)
  }, [])

  if (!isOpen) return null

  const top3 = bettingSites.slice(0, 3)
  const reordered = [top3[1], top3[0], top3[2]]
  const labels = ["#2 Pick", "#1 Pick", "#3 Pick"]

  return (
    <div
      className="hidden md:flex fixed inset-0 z-50 items-center justify-center p-4"
      style={{ backgroundColor: "rgba(13,27,42,0.92)", backdropFilter: "blur(6px)" }}
    >
      {/* Close */}
      <button
        type="button"
        onClick={() => setIsOpen(false)}
        className="absolute top-5 right-5 z-[60] flex h-10 w-10 items-center justify-center border transition-colors hover:opacity-80"
        style={{ borderColor: "rgba(201,168,76,0.4)", backgroundColor: NAVY_CARD, color: GOLD }}
        aria-label="Close"
      >
        <X className="w-5 h-5" />
      </button>

      <div className="w-full max-w-5xl">
        {/* Heading */}
        <div className="text-center mb-6 px-2">
          <div className="flex items-center gap-4 justify-center mb-3">
            <div className="h-px w-16 opacity-40" style={{ background: GOLD }} />
            <p className="text-[9px] font-sans font-bold uppercase tracking-[0.35em]" style={{ color: "rgba(201,168,76,0.7)" }}>
              elitebettingsiteslistuk.com
            </p>
            <div className="h-px w-16 opacity-40" style={{ background: GOLD }} />
          </div>
          <h2 className="font-serif font-bold text-2xl lg:text-3xl xl:text-4xl" style={{ color: IVORY }}>
            Today&apos;s Premier Offers
          </h2>
          <p className="font-sans text-xs mt-1.5" style={{ color: "rgba(245,240,232,0.45)" }}>
            Curated for discerning UK punters
          </p>
        </div>

        {/* Cards — desktop */}
        <div className="hidden lg:flex items-end justify-center gap-3 xl:gap-5 px-2">
          {reordered.map((site, i) => (
            <ModalSiteCard key={site?.id ?? i} site={site} isCenter={i === 1} compact={false} rankLabel={labels[i]} />
          ))}
        </div>

        {/* Cards — tablet */}
        <div className="hidden md:flex lg:hidden items-end justify-center gap-2 px-1">
          {reordered.map((site, i) => (
            <ModalSiteCard key={site?.id ?? i} site={site} isCenter={i === 1} compact rankLabel={labels[i]} />
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center gap-4 justify-center mt-6">
          <div className="h-px w-12 opacity-20" style={{ background: GOLD }} />
          <p className="text-center font-sans text-xs" style={{ color: "rgba(245,240,232,0.4)" }}>
            18+ · Operator T&amp;Cs apply ·{" "}
            <a
              href="https://www.gambleaware.org"
              className="underline"
              style={{ color: "rgba(201,168,76,0.6)" }}
              target="_blank"
              rel="noreferrer"
            >
              BeGambleAware.org
            </a>
          </p>
          <div className="h-px w-12 opacity-20" style={{ background: GOLD }} />
        </div>
      </div>
    </div>
  )
}
