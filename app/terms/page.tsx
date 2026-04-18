import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms of use for elitebettingsiteslistuk.com — editorial nature of the service, age restriction (18+), accuracy disclaimer, external links, and governing law.",
  keywords: ["terms of use", "terms and conditions", "elitebettingsiteslistuk terms", "18+ betting UK"],
  openGraph: {
    title: "Terms of Use | Elite Betting Sites UK",
    description: "Terms of use governing access to elitebettingsiteslistuk.com.",
    url: "https://elitebettingsiteslistuk.com/terms",
  },
  robots: { index: false, follow: false },
}

const GOLD = "#C9A84C"
const NAVY_CARD = "#131E2B"
const IVORY = "#F5F0E8"

function Section({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <section className="mb-7">
      <div className="flex items-baseline gap-3 mb-3">
        <span
          className="font-serif font-bold text-xs shrink-0"
          style={{ color: "rgba(201,168,76,0.5)" }}
        >
          {number}.
        </span>
        <h2 className="font-serif font-bold text-xl" style={{ color: IVORY }}>
          {title}
        </h2>
      </div>
      <div
        className="font-sans text-sm leading-relaxed pl-6"
        style={{ color: "rgba(245,240,232,0.7)" }}
      >
        {children}
      </div>
    </section>
  )
}

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-wider mb-8 transition-opacity hover:opacity-75"
        style={{ color: "rgba(201,168,76,0.7)" }}
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        Return to Rankings
      </Link>

      <div
        className="border"
        style={{ backgroundColor: NAVY_CARD, borderColor: "rgba(201,168,76,0.25)" }}
      >
        {/* Gold top bar */}
        <div className="h-[2px]" style={{ background: GOLD }} />

        <div className="px-6 py-8 sm:px-10 sm:py-10">
          {/* Page heading */}
          <div className="text-center mb-8 pb-6 border-b" style={{ borderColor: "rgba(201,168,76,0.15)" }}>
            <p
              className="text-[9px] font-sans font-bold uppercase tracking-[0.35em] mb-2"
              style={{ color: "rgba(201,168,76,0.55)" }}
            >
              elitebettingsiteslistuk.com
            </p>
            <h1 className="font-serif font-bold text-3xl lg:text-4xl" style={{ color: IVORY }}>
              Terms of Use
            </h1>
            <p
              className="font-sans text-xs mt-3"
              style={{ color: "rgba(245,240,232,0.45)" }}
            >
              Last updated{" "}
              {new Date().toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-0">
            <Section number="1" title="Agreement">
              <p>
                By accessing elitebettingsiteslistuk.com you agree to be bound by these Terms of Use in full.
                If you do not accept them, please leave the site immediately.
              </p>
            </Section>

            <div className="h-px my-5" style={{ background: "rgba(201,168,76,0.1)" }} />

            <Section number="2" title="Nature of the Service">
              <p>
                We publish independent editorial comparisons and ratings of third-party bookmakers licensed by the
                UK Gambling Commission. We are not a bookmaker, we do not accept wagers, and we do not hold customer
                funds at any time.
              </p>
            </Section>

            <div className="h-px my-5" style={{ background: "rgba(201,168,76,0.1)" }} />

            <Section number="3" title="Age Restriction">
              <p>
                You must be 18 years of age or older to use this site. All content is directed solely at adults
                in Great Britain who are legally entitled to view gambling-related advertising.
              </p>
            </Section>

            <div className="h-px my-5" style={{ background: "rgba(201,168,76,0.1)" }} />

            <Section number="4" title="Accuracy of Information">
              <p>
                Bonus offers, odds, terms, and operator details change without notice. Editorial copy may not
                reflect the most recent modifications. Always verify all information on the operator&apos;s official
                site before placing a deposit.
              </p>
            </Section>

            <div className="h-px my-5" style={{ background: "rgba(201,168,76,0.1)" }} />

            <Section number="5" title="External Links">
              <p>
                Outbound links lead to independent third-party websites. Each destination operates under its own
                terms, privacy policy, and regulatory licence. We accept no responsibility for the conduct,
                content, or availability of any external site.
              </p>
            </Section>

            <div className="h-px my-5" style={{ background: "rgba(201,168,76,0.1)" }} />

            <Section number="6" title="Responsible Gambling">
              <p>
                Gambling should be an enjoyable leisure activity conducted within strict financial limits. Never
                chase losses or borrow money to bet. Free confidential support is available from GambleAware,
                GamCare, and Gambling Therapy — see footer for direct links.
              </p>
            </Section>

            <div className="h-px my-5" style={{ background: "rgba(201,168,76,0.1)" }} />

            <Section number="7" title="Intellectual Property">
              <p>
                All editorial text, layout, and graphical assets produced by elitebettingsiteslistuk.com remain
                our exclusive intellectual property. Third-party logos and trademarks are used solely for
                nominative identification and remain the property of their respective owners.
              </p>
            </Section>

            <div className="h-px my-5" style={{ background: "rgba(201,168,76,0.1)" }} />

            <Section number="8" title="Limitation of Liability">
              <p>
                To the fullest extent permitted under English law, we exclude all liability for any loss arising
                from reliance on content published on this site. Nothing in these terms limits liability that
                cannot lawfully be excluded.
              </p>
            </Section>

            <div className="h-px my-5" style={{ background: "rgba(201,168,76,0.1)" }} />

            <Section number="9" title="Privacy">
              <p>
                The collection and use of personal data is governed by our{" "}
                <Link
                  href="/privacy-policy"
                  className="font-semibold underline underline-offset-2 transition-opacity hover:opacity-75"
                  style={{ color: GOLD }}
                >
                  Privacy Policy
                </Link>
                , which forms part of these Terms of Use.
              </p>
            </Section>

            <div className="h-px my-5" style={{ background: "rgba(201,168,76,0.1)" }} />

            <Section number="10" title="Amendments">
              <p>
                We reserve the right to amend these terms at any time. The revised version will be posted on this
                page with an updated date. Continued use of the site after posting constitutes your acceptance of
                the revised terms.
              </p>
            </Section>

            <div className="h-px my-5" style={{ background: "rgba(201,168,76,0.1)" }} />

            <Section number="11" title="Governing Law">
              <p>
                These terms are governed by the laws of England and Wales. The courts of England and Wales shall
                have non-exclusive jurisdiction to resolve any dispute arising under or in connection with them.
              </p>
            </Section>

            {/* 18+ notice */}
            <div
              className="mt-8 border-l-4 px-5 py-5"
              style={{ borderLeftColor: GOLD, backgroundColor: "rgba(201,168,76,0.06)" }}
            >
              <p className="font-sans font-semibold text-sm mb-1.5" style={{ color: GOLD }}>
                18+ Only — Please Gamble Responsibly
              </p>
              <p className="font-sans text-xs leading-relaxed" style={{ color: "rgba(245,240,232,0.6)" }}>
                elitebettingsiteslistuk.com does not accept wagers or hold player funds. All betting activity takes
                place on licensed third-party platforms subject to their own terms and conditions. Commercial links
                on this site may generate affiliate revenue which does not influence our editorial rankings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
