import Link from "next/link"
import { SiteWordmark } from "@/components/site-wordmark"

const LEGAL_NAV = [
  { href: "/terms",           label: "Terms of Use" },
  { href: "/privacy-policy",  label: "Privacy Policy" },
  { href: "/cookie-policy",   label: "Cookie Policy" },
]

const SITE_NAV = [
  { href: "/",                 label: "Rankings" },
  { href: "/about",            label: "About" },
  { href: "/responsible-gaming", label: "Responsible Play" },
]

const RG_LINKS = [
  { href: "https://www.gamstop.co.uk/",         img: "/gamstop.svg",                    alt: "GamStop" },
  { href: "https://www.begambleaware.org/",      img: "/gamble-aware.png",               alt: "BeGambleAware" },
  { href: "https://www.gamcare.org.uk/",         img: "/gamcare.png",                    alt: "GamCare" },
  { href: "https://www.gamblingtherapy.org/",    img: "/gordon.png",                     alt: "Gambling Therapy" },
  { href: "https://www.gamblingcommission.gov.uk/", img: "/Gambling_Commission_logo.png", alt: "UK Gambling Commission" },
]

export function Footer() {
  return (
    <footer
      className="w-full mt-0"
      style={{ backgroundColor: "#0A0D0B", borderTop: "1px solid rgba(201,168,76,0.12)" }}
    >
      {/* Single gold rule */}
      <div className="top-rule w-full" />

      {/* Three-column editorial layout */}
      <div className="mx-auto max-w-5xl xl:max-w-6xl px-6 md:px-10 lg:px-0 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

          {/* Col 1: Brand + description */}
          <div>
            <SiteWordmark variant="footer" className="block mb-6" />
            <p
              className="font-sans text-xs leading-loose mb-6"
              style={{ color: "rgba(237,228,204,0.38)" }}
            >
              An independent editorial comparison platform for UK-licensed casino platforms.
              We do not accept wagers or hold player funds.
            </p>
            <p
              className="font-sans text-[8px] uppercase tracking-[0.35em]"
              style={{ color: "rgba(201,168,76,0.35)" }}
            >
              trustedcasinossitesuk.com
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div className="flex gap-12 md:gap-8 md:justify-center">
            <div>
              <p
                className="font-sans text-[8px] font-bold uppercase tracking-[0.4em] mb-5"
                style={{ color: "rgba(201,168,76,0.4)" }}
              >
                Site
              </p>
              <nav className="flex flex-col gap-3" aria-label="Footer site navigation">
                {SITE_NAV.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="font-sans text-xs transition-colors hover:text-[#C9A84C]"
                    style={{ color: "rgba(237,228,204,0.45)" }}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
            <div>
              <p
                className="font-sans text-[8px] font-bold uppercase tracking-[0.4em] mb-5"
                style={{ color: "rgba(201,168,76,0.4)" }}
              >
                Legal
              </p>
              <nav className="flex flex-col gap-3" aria-label="Footer legal navigation">
                {LEGAL_NAV.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="font-sans text-xs transition-colors hover:text-[#C9A84C]"
                    style={{ color: "rgba(237,228,204,0.45)" }}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          {/* Col 3: Responsible gambling */}
          <div>
            <p
              className="font-sans text-[8px] font-bold uppercase tracking-[0.4em] mb-5"
              style={{ color: "rgba(201,168,76,0.4)" }}
            >
              Responsible Play
            </p>
            <div className="flex flex-wrap gap-3">
              {RG_LINKS.map((rg) => (
                <Link
                  key={rg.href}
                  href={rg.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-2 transition-opacity hover:opacity-100"
                  style={{ backgroundColor: "rgba(255,255,255,0.06)", opacity: 0.7 }}
                >
                  <img src={rg.img} alt={rg.alt} className="h-6 w-auto object-contain" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px my-12" style={{ background: "rgba(201,168,76,0.08)" }} />

        {/* Bottom row: disclaimer + copyright */}
        <div className="flex flex-col md:flex-row gap-4 md:items-end justify-between">
          <p
            className="font-sans text-[10px] leading-loose max-w-2xl"
            style={{ color: "rgba(237,228,204,0.28)" }}
          >
            Commercial links may generate affiliate revenue which does not influence editorial rankings.
            All casino activity takes place on licensed third-party platforms under their own terms.
            Identity and location verification applies. 18+ only. UK residents.
          </p>
          <p
            className="font-sans text-[9px] uppercase tracking-[0.3em] shrink-0"
            style={{ color: "rgba(201,168,76,0.3)" }}
          >
            &copy; {new Date().getFullYear()} trustedcasinossitesuk.com
          </p>
        </div>
      </div>
    </footer>
  )
}
