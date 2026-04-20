"use client"

import { X, Star, Award, ShieldCheck } from "lucide-react"
import Link from "next/link"

const GOLD = "#C9A84C"
const BLACK = "#0D0D0D"
const BLACK_CARD = "#141414"
const BLACK_LIGHT = "#1E1E1E"
const CRIMSON = "#8B1A1A"
const IVORY = "#F5F0E8"

const TOP_OFFER = {
  rank: 1,
  name: "Betfred Casino",
  logo: "/betfred.webp",
  bonus: "200 Free Spins",
  offer: "Stake £10 & Get 200 Free Spins",
  score: 9.8,
  reviews: 9317,
  link: "https://www.betfred.com/casino",
  highlights: [
    "UKGC Licensed & Regulated",
    "No deposit required to claim",
    "Spins credited within 24 hours",
    "Available on top slot titles",
  ],
  terms:
    "18+ | New customers only | Stake £10 on selected games | 200 free spins credited within 24 hrs | Winnings from spins = bonus funds | 30x wagering on bonus | Max withdrawal from bonus = £500 | T&Cs apply | BeGambleAware.org",
}

interface TermsModalProps {
  isOpen: boolean
  onClose: () => void
}

export function TermsModal({ isOpen, onClose }: TermsModalProps) {
  if (!isOpen) return null

  const starRating = TOP_OFFER.score / 2
  const getStarFill = (i: number) =>
    Math.round(Math.max(0, Math.min(1, starRating - i)) * 5) / 5

  const formatVotes = (v: number) =>
    v.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-4"
      style={{ backgroundColor: "rgba(7,7,7,0.93)", backdropFilter: "blur(8px)" }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="top-offer-modal-title"
      onClick={onClose}
    >
      <div
        className="w-full sm:max-w-md flex flex-col overflow-hidden border"
        style={{
          backgroundColor: BLACK_CARD,
          borderColor: "rgba(201,168,76,0.25)",
          boxShadow: "0 0 60px rgba(139,26,26,0.35), 0 0 0 1px rgba(201,168,76,0.08)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Gold top rule */}
        <div className="h-[2px] shrink-0" style={{ background: GOLD }} />

        {/* Header */}
        <div
          className="shrink-0 flex items-center justify-between px-5 py-3 border-b"
          style={{ backgroundColor: BLACK, borderColor: "rgba(201,168,76,0.15)" }}
        >
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4" style={{ color: GOLD }} />
            <span
              className="font-sans text-[9px] font-bold uppercase tracking-[0.28em]"
              style={{ color: GOLD }}
            >
              Editors&apos; Choice — #1 Ranked Casino
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-7 w-7 shrink-0 items-center justify-center border transition-opacity hover:opacity-60"
            style={{ borderColor: "rgba(201,168,76,0.25)", color: "rgba(245,240,232,0.5)" }}
            aria-label="Close"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Casino logo + score row */}
        <div className="flex items-stretch border-b" style={{ borderColor: "rgba(139,26,26,0.2)" }}>
          {/* Rank badge */}
          <div
            className="w-14 shrink-0 flex flex-col items-center justify-center gap-0.5 border-r"
            style={{ backgroundColor: BLACK, borderColor: "rgba(139,26,26,0.25)" }}
          >
            <span
              className="font-sans text-[7px] font-bold uppercase tracking-[0.2em]"
              style={{ color: "rgba(201,168,76,0.4)" }}
            >
              Rank
            </span>
            <span
              className="font-serif font-bold text-3xl leading-none"
              style={{ color: CRIMSON }}
            >
              {TOP_OFFER.rank}
            </span>
          </div>

          {/* Logo */}
          <div
            className="flex-1 flex items-center justify-center px-6 py-4"
            style={{ backgroundColor: "#ffffff" }}
          >
            <img
              src={TOP_OFFER.logo}
              alt={TOP_OFFER.name}
              className="max-h-14 w-auto max-w-[160px] object-contain"
            />
          </div>

          {/* Score */}
          <div
            className="w-20 shrink-0 flex flex-col items-center justify-center gap-1.5 border-l"
            style={{ backgroundColor: BLACK_LIGHT, borderColor: "rgba(139,26,26,0.2)" }}
          >
            <div
              className="w-14 h-14 border-2 flex flex-col items-center justify-center"
              style={{ borderColor: CRIMSON, backgroundColor: "rgba(139,26,26,0.1)" }}
            >
              <span
                className="font-serif font-bold text-2xl leading-none"
                style={{ color: GOLD }}
              >
                {TOP_OFFER.score.toFixed(1)}
              </span>
              <span
                className="text-[7px] font-sans uppercase tracking-wider mt-0.5"
                style={{ color: "rgba(201,168,76,0.5)" }}
              >
                Score
              </span>
            </div>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => {
                const fill = getStarFill(i)
                return (
                  <span key={i} className="relative inline-block w-2.5 h-2.5 shrink-0">
                    <Star
                      className="absolute inset-0 w-2.5 h-2.5"
                      style={{ fill: "none", stroke: CRIMSON, strokeWidth: 1.5 }}
                    />
                    <Star
                      className="absolute inset-0 w-2.5 h-2.5"
                      style={{
                        fill: GOLD,
                        stroke: GOLD,
                        strokeWidth: 0,
                        clipPath: `inset(0 ${(1 - fill) * 100}% 0 0)`,
                      }}
                    />
                  </span>
                )
              })}
            </div>
            <span className="text-[7px] font-sans" style={{ color: "rgba(245,240,232,0.3)" }}>
              {formatVotes(TOP_OFFER.reviews)}
            </span>
          </div>
        </div>

        {/* Bonus offer block */}
        <div
          className="px-5 py-4 border-b text-center"
          style={{
            borderColor: "rgba(139,26,26,0.2)",
            background: "linear-gradient(to bottom, rgba(139,26,26,0.12), rgba(13,13,13,0))",
          }}
        >
          <p
            className="font-sans text-[8px] font-bold uppercase tracking-[0.28em] mb-1"
            style={{ color: "rgba(139,26,26,0.8)" }}
          >
            Welcome Bonus
          </p>
          <p
            className="font-serif font-bold leading-tight mb-1"
            style={{ color: IVORY, fontSize: "1.6rem" }}
          >
            {TOP_OFFER.bonus}
          </p>
          <p className="font-sans text-sm" style={{ color: "rgba(245,240,232,0.55)" }}>
            {TOP_OFFER.offer}
          </p>
        </div>

        {/* Highlights */}
        <div className="px-5 py-4 border-b" style={{ borderColor: "rgba(139,26,26,0.15)" }}>
          <ul className="space-y-2">
            {TOP_OFFER.highlights.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <ShieldCheck
                  className="w-3.5 h-3.5 mt-0.5 shrink-0"
                  style={{ color: GOLD }}
                />
                <span className="font-sans text-sm" style={{ color: "rgba(245,240,232,0.75)" }}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="px-5 py-5">
          <Link
            href={TOP_OFFER.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center font-sans font-bold text-sm py-4 border transition-all hover:brightness-110"
            style={{
              backgroundColor: CRIMSON,
              color: IVORY,
              borderColor: "rgba(201,168,76,0.35)",
              letterSpacing: "0.12em",
            }}
          >
            CLAIM 200 FREE SPINS
          </Link>
          <p
            className="font-sans text-center text-[9px] mt-2"
            style={{ color: "rgba(245,240,232,0.3)" }}
          >
            Opens Betfred Casino in a new tab
          </p>
        </div>

        {/* Terms footer */}
        <div
          className="border-t px-4 py-3"
          style={{ borderColor: "rgba(139,26,26,0.18)", backgroundColor: BLACK }}
        >
          <p
            className="font-sans text-[8px] font-bold uppercase tracking-wider text-center mb-1.5"
            style={{ color: "rgba(201,168,76,0.4)" }}
          >
            Terms &amp; Conditions
          </p>
          <p
            className="font-sans text-[9px] text-center leading-snug"
            style={{ color: "rgba(245,240,232,0.3)" }}
          >
            {TOP_OFFER.terms}
          </p>
        </div>

        {/* Gold bottom rule */}
        <div className="h-[2px] shrink-0" style={{ background: `linear-gradient(to right, transparent, ${GOLD}, transparent)` }} />
      </div>
    </div>
  )
}
