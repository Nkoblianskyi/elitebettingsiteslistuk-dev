"use client"

import Link from "next/link"
import { useState } from "react"
import { SiteWordmark } from "@/components/site-wordmark"

const NAV = [
  { href: "/about",              label: "About" },
  { href: "/responsible-gaming", label: "Responsible Play" },
  { href: "/terms",              label: "Terms" },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40" style={{ backgroundColor: "#0C0F0D", borderBottom: "1px solid rgba(201,168,76,0.12)" }}>
      {/* Single 2px gold rule at the very top */}
      <div className="top-rule w-full" />

      <div className="flex items-center justify-between px-6 md:px-10 lg:px-16" style={{ height: "56px" }}>

        {/* Left: wordmark */}
        <Link href="/" className="shrink-0 hover:opacity-80 transition-opacity">
          <SiteWordmark variant="header" />
        </Link>

        {/* Centre: date rule — desktop only */}
        <div className="hidden lg:flex flex-1 items-center justify-center gap-6 px-8">
          <div className="flex-1 h-px" style={{ background: "rgba(201,168,76,0.12)" }} />
          <span className="font-sans text-[9px] uppercase tracking-[0.35em]" style={{ color: "rgba(201,168,76,0.35)" }}>
            United Kingdom · GC Licensed Operators
          </span>
          <div className="flex-1 h-px" style={{ background: "rgba(201,168,76,0.12)" }} />
        </div>

        {/* Right: nav links — desktop */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Primary navigation">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-sans text-[10px] font-semibold uppercase tracking-[0.25em] transition-colors hover:text-[#C9A84C]"
              style={{ color: "rgba(237,228,204,0.42)" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className="block w-5 h-px" style={{ background: menuOpen ? "#C9A84C" : "rgba(237,228,204,0.5)" }} />
          <span className="block w-5 h-px" style={{ background: menuOpen ? "#C9A84C" : "rgba(237,228,204,0.5)" }} />
          <span className="block w-4 h-px" style={{ background: menuOpen ? "#C9A84C" : "rgba(237,228,204,0.5)" }} />
        </button>
      </div>

      {/* Mobile menu drawer */}
      {menuOpen && (
        <nav
          className="md:hidden border-t"
          style={{ backgroundColor: "#0C0F0D", borderColor: "rgba(201,168,76,0.12)" }}
          aria-label="Mobile navigation"
        >
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center px-6 py-4 border-b font-sans text-[11px] font-semibold uppercase tracking-[0.28em] transition-colors hover:text-[#C9A84C]"
              style={{ borderColor: "rgba(201,168,76,0.08)", color: "rgba(237,228,204,0.55)" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
