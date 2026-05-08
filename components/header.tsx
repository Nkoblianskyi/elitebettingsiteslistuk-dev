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
    <header
      className="sticky top-0 z-40"
      style={{ backgroundColor: "#07070f", borderBottom: "1px solid rgba(184,147,90,0.13)" }}
    >
      {/* 2px gold top accent */}
      <div style={{ height: "2px", backgroundColor: "#B8935A", width: "100%" }} />

      <div
        className="flex items-center justify-between px-6 md:px-10 lg:px-16"
        style={{ height: "60px" }}
      >
        {/* Left: wordmark */}
        <Link href="/" className="shrink-0 transition-opacity hover:opacity-75">
          <SiteWordmark variant="header" />
        </Link>

        {/* Centre: tagline — desktop only */}
        <div className="hidden lg:flex flex-1 items-center justify-center gap-5 px-8">
          <div className="flex-1 h-px" style={{ background: "rgba(184,147,90,0.1)" }} />
          <span
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "8px",
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "0.42em",
              color: "rgba(184,147,90,0.32)",
            }}
          >
            United Kingdom · UKGC Licensed Operators
          </span>
          <div className="flex-1 h-px" style={{ background: "rgba(184,147,90,0.1)" }} />
        </div>

        {/* Right: nav — desktop */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Primary navigation">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "10px",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.28em",
                color: "rgba(238,229,208,0.4)",
                transition: "color 0.15s",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#B8935A")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(238,229,208,0.4)")}
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
          <span className="block w-5 h-px" style={{ backgroundColor: menuOpen ? "#B8935A" : "rgba(238,229,208,0.5)" }} />
          <span className="block w-5 h-px" style={{ backgroundColor: menuOpen ? "#B8935A" : "rgba(238,229,208,0.5)" }} />
          <span className="block w-3 h-px" style={{ backgroundColor: menuOpen ? "#B8935A" : "rgba(238,229,208,0.5)" }} />
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <nav
          className="md:hidden"
          style={{ backgroundColor: "#07070f", borderTop: "1px solid rgba(184,147,90,0.1)" }}
          aria-label="Mobile navigation"
        >
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "16px 24px",
                borderBottom: "1px solid rgba(184,147,90,0.07)",
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "11px",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.3em",
                color: "rgba(238,229,208,0.55)",
                textDecoration: "none",
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
