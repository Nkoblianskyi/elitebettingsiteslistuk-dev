import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type React from "react"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for elitecasinossitesuk.com — how we handle personal data, legal bases under UK GDPR, your rights, and how to contact us.",
  keywords: ["privacy policy", "UK GDPR", "data protection", "elitecasinossitesuk privacy"],
  openGraph: {
    title: "Privacy Policy | Elite Casinos Sites UK",
    description: "How elitecasinossitesuk.com handles your personal data under UK GDPR.",
    url: "https://elitecasinossitesuk.com/privacy-policy",
  },
  robots: { index: false, follow: false },
}

const GOLD = "#C9A84C"
const BLACK_CARD = "#141414"
const CRIMSON = "#8B1A1A"
const IVORY = "#F5F0E8"

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-7">
      <h2 className="font-serif font-bold text-lg sm:text-xl mb-3" style={{ color: IVORY }}>
        {title}
      </h2>
      <div
        className="font-sans text-sm leading-relaxed space-y-3"
        style={{ color: "rgba(245,240,232,0.66)" }}
      >
        {children}
      </div>
    </section>
  )
}

export default function PrivacyPolicyPage() {
  const reviewed = new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-wider mb-8 transition-opacity hover:opacity-75"
        style={{ color: "rgba(201,168,76,0.65)" }}
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        Return to Rankings
      </Link>

      <div className="border" style={{ backgroundColor: BLACK_CARD, borderColor: "rgba(139,26,26,0.3)" }}>
        <div className="h-[3px]" style={{ background: CRIMSON }} />
        <div className="h-px" style={{ background: "rgba(201,168,76,0.2)" }} />

        <div className="px-6 py-8 sm:px-10 sm:py-10">
          {/* Heading */}
          <div
            className="text-center mb-8 pb-6 border-b"
            style={{ borderColor: "rgba(139,26,26,0.18)" }}
          >
            <p
              className="text-[9px] font-sans font-bold uppercase tracking-[0.35em] mb-2"
              style={{ color: "rgba(201,168,76,0.5)" }}
            >
              elitecasinossitesuk.com
            </p>
            <h1 className="font-serif font-bold text-3xl lg:text-4xl" style={{ color: IVORY }}>
              Privacy Policy
            </h1>
            <p className="font-sans text-xs mt-3" style={{ color: "rgba(245,240,232,0.38)" }}>
              Last reviewed: {reviewed}
            </p>
          </div>

          <Section title="Who We Are">
            <p>
              elitecasinossitesuk.com publishes independent editorial comparisons of UK-licensed online casino
              operators. This policy explains what personal data may come into contact with our systems and how we
              handle it responsibly, in compliance with the UK General Data Protection Regulation (UK GDPR) and the
              Data Protection Act 2018.
            </p>
          </Section>

          <div className="h-px my-5" style={{ background: "rgba(139,26,26,0.1)" }} />

          <Section title="Data We May Process">
            <ul className="space-y-1.5 list-disc pl-4">
              <li>
                <strong style={{ color: IVORY }}>Technical logs:</strong> IP address, browser type and version,
                approximate geographic location derived from IP, and access timestamps.
              </li>
              <li>
                <strong style={{ color: IVORY }}>Usage signals:</strong> Pages visited, approximate scroll depth,
                and interaction events — only where analytics cookies have been accepted.
              </li>
              <li>
                <strong style={{ color: IVORY }}>Communications:</strong> If you contact us by email, we retain the
                correspondence for as long as is reasonably necessary to resolve your enquiry, after which it is
                securely deleted.
              </li>
            </ul>
            <p
              className="text-xs mt-2 border-l-2 pl-3"
              style={{ color: "rgba(245,240,232,0.42)", borderColor: "rgba(139,26,26,0.4)" }}
            >
              We operate no casino. We hold no betting history, payment card data, account credentials, or sensitive
              personal information associated with gambling activity.
            </p>
          </Section>

          <div className="h-px my-5" style={{ background: "rgba(139,26,26,0.1)" }} />

          <Section title="Legal Bases (UK GDPR)">
            <p>
              Where UK law applies, we rely on{" "}
              <strong style={{ color: IVORY }}>legitimate interest</strong> to operate, maintain, and secure this
              website, and on <strong style={{ color: IVORY }}>consent</strong> where we request it — for example,
              the acceptance of non-essential analytics cookies via our cookie banner. You may withdraw consent at
              any time using your browser settings or by selecting &quot;Essential Only&quot; in our cookie banner.
            </p>
          </Section>

          <div className="h-px my-5" style={{ background: "rgba(139,26,26,0.1)" }} />

          <Section title="Sharing Your Data">
            <p>
              Hosting infrastructure providers, analytics vendors, and affiliate network platforms may process limited
              technical data on our behalf under appropriate contractual safeguards. We do not sell personal data as
              a product, nor do we share it for third-party marketing purposes. Lawful requests from public authorities
              will be honoured when legally required.
            </p>
          </Section>

          <div className="h-px my-5" style={{ background: "rgba(139,26,26,0.1)" }} />

          <Section title="Retention">
            <p>
              Server access logs are rotated on a short automated cycle. Analytics data is retained in anonymised
              aggregate form with no individual user identification. Email correspondence is deleted once the matter
              is fully resolved, unless a longer retention period is required by applicable law.
            </p>
          </Section>

          <div className="h-px my-5" style={{ background: "rgba(139,26,26,0.1)" }} />

          <Section title="Security">
            <p>
              All traffic to and from this site is encrypted via HTTPS. We apply access controls to administrative
              interfaces and partner exclusively with service providers that maintain security practices consistent
              with industry standards. No online system is entirely immune to breach — we encourage you to report any
              suspected vulnerability by contacting us directly.
            </p>
          </Section>

          <div className="h-px my-5" style={{ background: "rgba(139,26,26,0.1)" }} />

          <Section title="Your Rights">
            <p>
              Under UK GDPR, you may request access to, rectification of, erasure of, restriction of processing of,
              or portability of your personal data where applicable. Requests should be directed to us in writing
              using the contact details below.
            </p>
            <p>
              UK residents may also lodge complaints with the{" "}
              <a
                href="https://ico.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-medium"
                style={{ color: GOLD }}
              >
                Information Commissioner&apos;s Office (ICO)
              </a>
              .
            </p>
          </Section>

          <div className="h-px my-5" style={{ background: "rgba(139,26,26,0.1)" }} />

          <Section title="Children">
            <p>
              Our services are directed exclusively at adults aged 18 and over. We do not knowingly collect or
              process data from minors. If you believe a child has interacted with this site, please contact us
              immediately and we will arrange the prompt removal of any associated data.
            </p>
          </Section>

          <div className="h-px my-5" style={{ background: "rgba(139,26,26,0.1)" }} />

          <Section title="International Transfers">
            <p>
              Certain subprocessors we rely on may operate servers outside the UK or EEA. Where this applies, we
              rely on appropriate transfer mechanisms — such as UK Standard Contractual Clauses or equivalent
              adequacy decisions — to ensure your data receives an equivalent level of protection.
            </p>
          </Section>

          <div className="h-px my-5" style={{ background: "rgba(139,26,26,0.1)" }} />

          <Section title="Changes to This Policy">
            <p>
              Material updates will be published here with a revised review date at the top of this page. Continued
              use of the site following publication of a material change constitutes acceptance of the revised policy,
              except where fresh consent is required under applicable law.
            </p>
          </Section>

          <div className="h-px my-5" style={{ background: "rgba(139,26,26,0.1)" }} />

          <Section title="Contact">
            <p>
              For data protection enquiries or to exercise your rights, please write to{" "}
              <a
                href="mailto:info@elitecasinossitesuk.com"
                className="underline font-medium"
                style={{ color: GOLD }}
              >
                info@elitecasinossitesuk.com
              </a>
              .
            </p>
            <p>
              For cookie-specific information, see our{" "}
              <Link href="/cookie-policy" className="underline font-medium" style={{ color: GOLD }}>
                Cookie Policy
              </Link>
              .
            </p>
          </Section>
        </div>
      </div>
    </div>
  )
}
