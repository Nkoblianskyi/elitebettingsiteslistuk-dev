"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import Link from "next/link"
import type { BettingSite } from "../types"

interface Top3ModalProps {
  bettingSites: BettingSite[]
  casinoSites: BettingSite[]
}

const GOLD = "#B8965A"
const GOLD_LIGHT = "#D4B07A"
const FOREST = "#0F2318"
const FOREST_CARD = "#152B1E"
const FOREST_MID = "#1B3A2D"
const PARCHMENT = "#F2ECD9"

function ModalSiteCard({
  site,
  isCenter,
  compact,
  rankLabel,
  rankSub,
}: {
  site: BettingSite
  isCenter: boolean
  compact: boolean
  rankLabel: string
  rankSub: string
}) {
  const wClass = compact
    ? isCenter ? "w-[190px]" : "w-[158px]"
    : isCenter ? "w-[270px] xl:w-[310px]" : "w-[205px] xl:w-[240px]"

  return (
    <div
      className={`relative flex flex-col shrink-0 ${wClass} transition-transform duration-200 ${
        isCenter ? "z-20 scale-[1.04]" : "z-10 opacity-85 hover:opacity-100"
      }`}
    >
      {/* Rank header */}
      <div
        className={`flex items-center justify-center gap-1.5 border-t border-l border-r ${compact ? "h-7" : "h-9"}`}
        style={{
          backgroundColor: isCenter ? GOLD : "rgba(184,150,90,0.08)",
          color: isCenter ? FOREST : GOLD,
          borderColor: isCenter ? GOLD : "rgba(184,150,90,0.28)",
        }}
      >
        <span className={`font-sans font-bold uppercase tracking-[0.22em] ${compact ? "text-[9px]" : "text-[10px]"}`}>
          {rankLabel}
        </span>
        {!compact && (
          <>
            <span style={{ opacity: 0.4 }} aria-hidden>·</span>
            <span className="font-sans text-[9px] uppercase tracking-[0.15em]" style={{ opacity: 0.7 }}>
              {rankSub}
            </span>
          </>
        )}
      </div>

      {/* Card body */}
      <div
        className="flex flex-col flex-1 border"
        style={{
          backgroundColor: FOREST_CARD,
          borderColor: isCenter ? GOLD : "rgba(184,150,90,0.25)",
        }}
      >
        {/* Logo */}
        <div className={`flex items-center justify-center bg-white ${compact ? "h-16 mx-3 mt-3" : "h-20 xl:h-24 mx-4 mt-4"}`}>
          <img
            src={site?.logo || "/placeholder.svg"}
            alt={site?.name || ""}
            className={`object-contain ${compact ? "max-h-10" : "max-h-14 xl:max-h-16"}`}
          />
        </div>

        {/* Rating dots */}
        <div className={`flex justify-center gap-1 ${compact ? "mt-3" : "mt-4"}`}>
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className="block w-2 h-2 rounded-full border"
              style={{
                backgroundColor: GOLD,
                borderColor: GOLD,
              }}
            />
          ))}
        </div>

        {/* Bonus info */}
        <div className={`flex flex-col flex-1 text-center ${compact ? "px-3 py-2.5" : "px-4 py-3"}`}>
          <p
            className={`font-sans font-bold uppercase tracking-[0.2em] mb-1.5 ${compact ? "text-[8px]" : "text-[9px]"}`}
            style={{ color: "rgba(184,150,90,0.55)" }}
          >
            Welcome Offer
          </p>
          <p
            className={`font-serif font-semibold leading-tight ${compact ? "text-sm" : "text-base xl:text-lg"}`}
            style={{ color: PARCHMENT }}
          >
            {site?.bonus}
          </p>
          <p
            className={`font-sans ${compact ? "text-[9px] mt-1" : "text-xs mt-1.5"}`}
            style={{ color: "rgba(184,150,90,0.65)" }}
          >
            {site?.welcomeOffer ?? site?.bonus}
          </p>
        </div>

        {/* CTA */}
        <Link
          href={site?.link || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className={`block w-full font-sans font-bold text-center uppercase tracking-widest transition-opacity hover:opacity-85 ${
            compact ? "py-2.5 text-[10px] mx-3 mb-3" : "py-3.5 text-xs xl:text-sm mx-4 mb-4"
          }`}
          style={{
            width: compact ? "calc(100% - 1.5rem)" : "calc(100% - 2rem)",
            backgroundColor: GOLD,
            color: FOREST,
          }}
        >
          Claim Offer
        </Link>

        {/* Terms */}
        <p
          className={`px-3 pb-3 text-center leading-snug ${compact ? "text-[7px]" : "text-[8px] xl:text-[9px]"}`}
          style={{ color: "rgba(242,236,217,0.3)" }}
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
  const meta = [
    { label: "#2 Ranked", sub: "Premium Pick" },
    { label: "#1 Ranked", sub: "Editors' Choice" },
    { label: "#3 Ranked", sub: "Highly Rated" },
  ]

  return (
    <div
      className="hidden md:flex fixed inset-0 z-50 items-center justify-center p-4"
      style={{ backgroundColor: "rgba(15,35,24,0.94)", backdropFilter: "blur(8px)" }}
    >
      {/* Close button */}
      <button
        type="button"
        onClick={() => setIsOpen(false)}
        className="absolute top-5 right-5 z-[60] flex h-11 w-11 items-center justify-center border transition-colors hover:opacity-80"
        style={{ borderColor: "rgba(184,150,90,0.35)", backgroundColor: FOREST_CARD, color: GOLD }}
        aria-label="Close"
      >
        <X className="w-5 h-5" />
      </button>

      <div className="w-full max-w-5xl">
        {/* Heading */}
        <div className="text-center mb-8 px-2">
          <div className="flex items-center gap-4 justify-center mb-4">
            <div className="h-px w-16 opacity-35" style={{ background: GOLD }} />
            <p className="font-sans text-[8px] font-bold uppercase tracking-[0.42em]" style={{ color: "rgba(184,150,90,0.6)" }}>
              trustedcasinossitesuk.com
            </p>
            <div className="h-px w-16 opacity-35" style={{ background: GOLD }} />
          </div>
          <h2 className="font-serif font-semibold text-2xl lg:text-3xl xl:text-4xl leading-tight" style={{ color: PARCHMENT }}>
            Today&apos;s Premier Offers
          </h2>
          <p className="font-sans text-xs mt-2" style={{ color: "rgba(242,236,217,0.4)" }}>
            Curated for discerning UK players
          </p>
        </div>

        {/* Cards desktop */}
        <div className="hidden lg:flex items-end justify-center gap-4 xl:gap-6 px-2">
          {reordered.map((site, i) => (
            <ModalSiteCard
              key={site?.id ?? i}
              site={site}
              isCenter={i === 1}
              compact={false}
              rankLabel={meta[i].label}
              rankSub={meta[i].sub}
            />
          ))}
        </div>

        {/* Cards tablet */}
        <div className="hidden md:flex lg:hidden items-end justify-center gap-3 px-1">
          {reordered.map((site, i) => (
            <ModalSiteCard
              key={site?.id ?? i}
              site={site}
              isCenter={i === 1}
              compact
              rankLabel={meta[i].label}
              rankSub={meta[i].sub}
            />
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center gap-4 justify-center mt-7">
          <div className="h-px w-10 opacity-18" style={{ background: GOLD }} />
          <p className="text-center font-sans text-xs" style={{ color: "rgba(242,236,217,0.35)" }}>
            18+ · Operator T&amp;Cs apply ·{" "}
            <a
              href="https://www.gambleaware.org"
              className="underline underline-offset-2"
              style={{ color: "rgba(184,150,90,0.55)" }}
              target="_blank"
              rel="noreferrer"
            >
              BeGambleAware.org
            </a>
          </p>
          <div className="h-px w-10 opacity-18" style={{ background: GOLD }} />
        </div>
      </div>
    </div>
  )
}
