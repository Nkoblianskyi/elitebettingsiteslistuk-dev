import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type React from "react"

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms of use for ukbestcasinosites.com — editorial nature of the service, age restriction (18+), accuracy disclaimer, external links, and governing law.",
  keywords: ["terms of use", "terms and conditions", "ukbestcasinosites terms", "18+ casino UK"],
  openGraph: {
    title: "Terms of Use | UK Best Casino Sites",
    description: "Terms of use governing access to ukbestcasinosites.com.",
    url: "https://ukbestcasinosites.com/terms",
  },
  robots: { index: false, follow: false },
}

const GOLD = "#D4A853"
const FOREST_CARD = "#161616"
const PARCHMENT = "#F5F0E8"

function Section({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <section className="mb-7">
      <div className="flex items-baseline gap-3 mb-3">
        <span className="font-serif font-semibold text-xl shrink-0 w-6 text-right" style={{ color: "rgba(184,150,90,0.35)" }}>
          {number}.
        </span>
        <h2 className="font-serif font-semibold text-xl" style={{ color: PARCHMENT }}>
          {title}
        </h2>
      </div>
      <div className="font-sans text-sm leading-relaxed pl-9" style={{ color: "rgba(242,236,217,0.68)" }}>
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
        className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-wider mb-8 transition-opacity hover:opacity-75"
        style={{ color: "rgba(201,168,76,0.6)" }}
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        Return to Rankings
      </Link>

      <div className="border" style={{ backgroundColor: FOREST_CARD, borderColor: "rgba(184,150,90,0.22)" }}>
        {/* Gold top bar */}
        <div className="h-[3px]" style={{ background: GOLD }} />

        <div className="px-6 py-8 sm:px-10 sm:py-10">
          {/* Page heading */}
          <div className="text-center mb-8 pb-6 border-b" style={{ borderColor: "rgba(184,150,90,0.12)" }}>
            <p className="font-sans text-[8px] font-semibold uppercase tracking-[0.42em] mb-2" style={{ color: "rgba(184,150,90,0.5)" }}>
              ukbestcasinosites.com
            </p>
            <h1 className="font-serif font-semibold text-3xl lg:text-4xl" style={{ color: PARCHMENT }}>
              Terms of Use
            </h1>
            <p className="font-sans text-xs mt-3" style={{ color: "rgba(242,236,217,0.42)" }}>
              Last updated{" "}
              {new Date().toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>

          <div className="space-y-0">
            <Section number="1" title="Agreement">
              <p>
                By accessing ukbestcasinosites.com you agree to be bound by these Terms of Use in full.
                If you do not accept them, please leave the site immediately.
              </p>
            </Section>

            <div className="h-px my-5" style={{ background: "rgba(184,150,90,0.08)" }} />

            <Section number="2" title="Nature of the Service">
              <p>
                We publish independent editorial comparisons and ratings of third-party casinos licensed by the
                UK Gambling Commission. We are not a casino, we do not accept wagers, and we do not hold customer
                funds at any time.
              </p>
            </Section>

            <div className="h-px my-5" style={{ background: "rgba(184,150,90,0.08)" }} />

            <Section number="3" title="Age Restriction">
              <p>
                You must be 18 years of age or older to use this site. All content is directed solely at adults
                in Great Britain who are legally entitled to view gambling-related material.
              </p>
            </Section>

            <div className="h-px my-5" style={{ background: "rgba(184,150,90,0.08)" }} />

            <Section number="4" title="Accuracy of Information">
              <p>
                Bonus offers, game availability, terms, and operator details change without notice. Editorial copy may not
                reflect the most recent modifications. Always verify all information on the operator&apos;s official
                site before making a deposit.
              </p>
            </Section>

            <div className="h-px my-5" style={{ background: "rgba(184,150,90,0.08)" }} />

            <Section number="5" title="External Links">
              <p>
                Outbound links lead to independent third-party websites. Each destination operates under its own
                terms, privacy policy, and regulatory licence. We accept no responsibility for the conduct,
                content, or availability of any external site.
              </p>
            </Section>

            <div className="h-px my-5" style={{ background: "rgba(184,150,90,0.08)" }} />

            <Section number="6" title="Responsible Play">
              <p>
                Gambling should be an enjoyable leisure activity conducted within strict financial limits. Never
                chase losses or borrow money to play. Free confidential support is available from GambleAware,
                GamCare, and Gambling Therapy — see footer for direct links.
              </p>
            </Section>

            <div className="h-px my-5" style={{ background: "rgba(184,150,90,0.08)" }} />

            <Section number="7" title="Intellectual Property">
              <p>
                All editorial text, layout, and graphical assets produced by ukbestcasinosites.com remain
                our exclusive intellectual property. Third-party logos and trademarks are used solely for
                nominative identification and remain the property of their respective owners.
              </p>
            </Section>

            <div className="h-px my-5" style={{ background: "rgba(184,150,90,0.08)" }} />

            <Section number="8" title="Limitation of Liability">
              <p>
                To the fullest extent permitted under English law, we exclude all liability for any loss arising
                from reliance on content published on this site. Nothing in these terms limits liability that
                cannot lawfully be excluded.
              </p>
            </Section>

            <div className="h-px my-5" style={{ background: "rgba(184,150,90,0.08)" }} />

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

            <div className="h-px my-5" style={{ background: "rgba(184,150,90,0.08)" }} />

            <Section number="10" title="Amendments">
              <p>
                We reserve the right to amend these terms at any time. The revised version will be posted on this
                page with an updated date. Continued use of the site after posting constitutes your acceptance of
                the revised terms.
              </p>
            </Section>

            <div className="h-px my-5" style={{ background: "rgba(184,150,90,0.08)" }} />

            <Section number="11" title="Governing Law">
              <p>
                These terms are governed by the laws of England and Wales. The courts of England and Wales shall
                have non-exclusive jurisdiction to resolve any dispute arising under or in connection with them.
              </p>
            </Section>

            {/* 18+ notice */}
            <div
              className="mt-8 border-l-4 px-5 py-5"
              style={{ borderLeftColor: GOLD, backgroundColor: "rgba(184,150,90,0.05)" }}
            >
              <p className="font-sans font-semibold text-sm mb-1.5" style={{ color: GOLD }}>
                18+ Only — Please Play Responsibly
              </p>
              <p className="font-sans text-xs leading-relaxed" style={{ color: "rgba(242,236,217,0.58)" }}>
                ukbestcasinosites.com does not operate a casino or hold player funds. All gaming activity takes
                place on licensed third-party platforms subject to their own terms. Commercial links on this site may
                generate affiliate revenue which does not influence our editorial rankings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
