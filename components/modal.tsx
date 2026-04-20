"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import Link from "next/link"
import type { BettingSite } from "../types"

interface Top3ModalProps {
  bettingSites: BettingSite[]
  casinoSites: BettingSite[]
}

function ScoreArc({ score }: { score: number }) {
  const radius = 28
  const circumference = 2 * Math.PI * radius
  const dash = (score / 10) * circumference
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" aria-label={`Score ${score} out of 10`}>
      <circle cx="36" cy="36" r={radius} stroke="rgba(201,168,76,0.12)" strokeWidth="2" fill="none" />
      <circle
        cx="36" cy="36" r={radius}
        stroke="#C9A84C" strokeWidth="2" fill="none"
        strokeDasharray={`${dash} ${circumference}`}
        strokeLinecap="butt"
        transform="rotate(-90 36 36)"
      />
      <text x="36" y="40" textAnchor="middle" fill="#C9A84C" fontSize="14" fontFamily="Georgia, serif" fontWeight="300">
        {score.toFixed(1)}
      </text>
    </svg>
  )
}

function ModalCard({ site, position }: { site: BettingSite; position: number }) {
  const isFirst = position === 1
  return (
    <div
      className="flex flex-col"
      style={{
        flex: isFirst ? "0 0 38%" : "0 0 28%",
        border: `1px solid ${isFirst ? "rgba(201,168,76,0.4)" : "rgba(201,168,76,0.15)"}`,
        backgroundColor: isFirst ? "#141a16" : "#0f1310",
        transform: isFirst ? "scale(1.03)" : "none",
      }}
    >
      {/* Rank strip */}
      <div
        className="flex items-center justify-between px-4 py-2.5"
        style={{
          borderBottom: `1px solid ${isFirst ? "rgba(201,168,76,0.25)" : "rgba(201,168,76,0.1)"}`,
          backgroundColor: isFirst ? "rgba(201,168,76,0.08)" : "transparent",
        }}
      >
        <span
          className="font-serif font-light text-3xl leading-none"
          style={{ color: isFirst ? "#C9A84C" : "rgba(201,168,76,0.35)" }}
        >
          {position}
        </span>
        {isFirst && (
          <span
            className="font-sans text-[8px] font-bold uppercase tracking-[0.3em]"
            style={{ color: "rgba(201,168,76,0.7)" }}
          >
            Top Ranked
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col items-center px-4 py-5 gap-3 flex-1">
        <ScoreArc score={site.score} />

        <div className="text-center">
          <p className="font-sans text-[8px] uppercase tracking-[0.3em] mb-1.5" style={{ color: "rgba(201,168,76,0.45)" }}>
            Welcome Offer
          </p>
          <p
            className="font-serif font-semibold leading-tight"
            style={{ color: "#EDE4CC", fontSize: isFirst ? "1.25rem" : "1rem" }}
          >
            {site.bonus}
          </p>
          <p className="font-sans text-[10px] mt-1" style={{ color: "rgba(237,228,204,0.42)" }}>
            {site.welcomeOffer ?? site.bonus}
          </p>
        </div>

        <Link
          href={site.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center font-sans font-bold text-[10px] uppercase tracking-[0.28em] py-3 transition-opacity hover:opacity-85 mt-auto"
          style={{ backgroundColor: isFirst ? "#C9A84C" : "rgba(201,168,76,0.15)", color: isFirst ? "#0C0F0D" : "#C9A84C", border: isFirst ? "none" : "1px solid rgba(201,168,76,0.3)" }}
        >
          Claim Offer
        </Link>
      </div>

      {/* Terms */}
      <p className="px-4 pb-3 font-sans text-[7px] text-center leading-snug" style={{ color: "rgba(237,228,204,0.2)" }}>
        {site.terms}
      </p>
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
  // Display order: #2, #1, #3
  const display = [top3[1], top3[0], top3[2]]
  const positions = [2, 1, 3]

  return (
    <div
      className="hidden md:flex fixed inset-0 z-50 items-center justify-center p-6"
      style={{ backgroundColor: "rgba(12,15,13,0.92)", backdropFilter: "blur(10px)" }}
    >
      {/* Close */}
      <button
        type="button"
        onClick={() => setIsOpen(false)}
        className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center border transition-colors hover:border-[#C9A84C]"
        style={{ borderColor: "rgba(201,168,76,0.25)", backgroundColor: "#111510", color: "#C9A84C" }}
        aria-label="Close"
      >
        <X className="w-4 h-4" />
      </button>

      <div className="w-full max-w-4xl">
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="font-sans text-[8px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: "rgba(201,168,76,0.45)" }}>
            trustedcasinossitesuk.com
          </p>
          <h2
            className="font-serif font-light leading-none"
            style={{ color: "#EDE4CC", fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Today&apos;s{" "}
            <em style={{ color: "#C9A84C" }}>Premier</em>{" "}
            Offers
          </h2>
          <div className="w-10 h-px mx-auto mt-5" style={{ background: "#C9A84C" }} />
        </div>

        {/* Cards — desktop flex */}
        <div className="hidden lg:flex items-end justify-center gap-4">
          {display.map((site, i) => (
            <ModalCard key={site?.id ?? i} site={site} position={positions[i]} />
          ))}
        </div>

        {/* Compact tablet layout */}
        <div className="hidden md:flex lg:hidden flex-col gap-3 max-w-sm mx-auto">
          {top3.map((site, i) => (
            <div
              key={site?.id ?? i}
              className="flex items-center gap-4 border px-4 py-4"
              style={{
                backgroundColor: "#111510",
                borderColor: "rgba(201,168,76,0.18)",
              }}
            >
              <span className="font-serif font-light text-3xl shrink-0" style={{ color: "rgba(201,168,76,0.5)" }}>
                {i + 1}
              </span>
              <div className="flex-1 min-w-0">
                <p className="font-serif font-semibold text-sm" style={{ color: "#EDE4CC" }}>{site.bonus}</p>
                <p className="font-sans text-[10px] mt-0.5" style={{ color: "rgba(237,228,204,0.42)" }}>{site.welcomeOffer}</p>
              </div>
              <Link
                href={site.link}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 font-sans font-bold text-[9px] uppercase tracking-[0.2em] px-4 py-2.5"
                style={{ backgroundColor: "#C9A84C", color: "#0C0F0D" }}
              >
                Claim
              </Link>
            </div>
          ))}
        </div>

        {/* Footer */}
        <p className="text-center font-sans text-[9px] mt-8" style={{ color: "rgba(237,228,204,0.3)" }}>
          18+ &nbsp; T&amp;Cs apply &nbsp;{" "}
          <a href="https://www.gambleaware.org" target="_blank" rel="noreferrer" className="underline underline-offset-2" style={{ color: "rgba(201,168,76,0.5)" }}>
            BeGambleAware.org
          </a>
        </p>
      </div>
    </div>
  )
}
