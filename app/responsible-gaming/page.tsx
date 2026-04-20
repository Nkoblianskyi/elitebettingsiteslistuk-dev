import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type React from "react"

export const metadata: Metadata = {
  title: "Responsible Play",
  description:
    "trustedcasinossitesuk.com promotes safer play. Learn the warning signs of problem gambling, self-help tools, and UK support organisations including GambleAware and GamCare.",
  keywords: [
    "responsible gambling UK",
    "problem gambling help UK",
    "GambleAware",
    "GamCare",
    "safer casino UK",
    "gambling addiction support",
    "self-exclusion UK",
    "18+ gambling UK",
  ],
  openGraph: {
    title: "Responsible Play | Trusted Casinos Sites UK",
    description:
      "Safer play guidance, warning signs, and UK support organisations for anyone affected by problem gambling.",
    url: "https://trustedcasinossitesuk.com/responsible-gaming",
  },
}

const GOLD = "#C9A84C"
const FOREST_CARD = "#111111"
const PARCHMENT = "#EDE4CC"

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-7">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-[2px] h-5 shrink-0" style={{ background: GOLD }} />
        <h2 className="font-serif font-semibold text-xl" style={{ color: PARCHMENT }}>
          {title}
        </h2>
      </div>
      <div className="font-sans text-sm leading-relaxed space-y-3 pl-5" style={{ color: "rgba(242,236,217,0.68)" }}>
        {children}
      </div>
    </section>
  )
}

function InfoCard({ title, body }: { title: string; body: string }) {
  return (
    <div
      className="border px-5 py-4"
      style={{ borderColor: "rgba(184,150,90,0.18)",         backgroundColor: "rgba(17,17,17,0.6)" }}
    >
      <p className="font-sans font-semibold text-sm mb-1.5" style={{ color: PARCHMENT }}>{title}</p>
      <p className="font-sans text-xs leading-relaxed" style={{ color: "rgba(242,236,217,0.62)" }}>{body}</p>
    </div>
  )
}

function SupportOrg({ name, website }: { name: string; website: string }) {
  return (
    <div
      className="border px-5 py-4"
      style={{ borderColor: "rgba(184,150,90,0.18)",         backgroundColor: "rgba(17,17,17,0.5)" }}
    >
      <p className="font-serif font-semibold text-base mb-1" style={{ color: PARCHMENT }}>{name}</p>
      <p className="font-sans text-xs" style={{ color: "rgba(184,150,90,0.65)" }}>{website}</p>
    </div>
  )
}

export default function ResponsibleGamingPage() {
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
            <p className="font-sans text-[8px] font-bold uppercase tracking-[0.42em] mb-2" style={{ color: "rgba(184,150,90,0.5)" }}>
              trustedcasinossitesuk.com
            </p>
            <h1 className="font-serif font-semibold text-3xl lg:text-4xl" style={{ color: PARCHMENT }}>
              Responsible Play
            </h1>
            <p className="font-sans text-sm mt-3 max-w-xl mx-auto leading-relaxed" style={{ color: "rgba(242,236,217,0.55)" }}>
              We back play that stays inside your limits. If casino games stop being enjoyable, help is always available.
            </p>
          </div>

          {/* Alert bar */}
          <div
            className="border-l-4 px-5 py-5 mb-8"
            style={{ borderLeftColor: GOLD, backgroundColor: "rgba(184,150,90,0.06)" }}
          >
            <p className="font-sans font-semibold text-sm mb-1.5" style={{ color: GOLD }}>
              Important Notice
            </p>
            <p className="font-sans text-sm leading-relaxed" style={{ color: "rgba(242,236,217,0.68)" }}>
              Gambling should always remain an enjoyable leisure activity. If it stops being fun or begins to cause problems
              in your life, it is time to seek help. You are never alone, and support is always available.
            </p>
          </div>

          <Section title="Playing Responsibly">
            <p>
              Responsible play means enjoying casino games as entertainment while maintaining full control over your time
              and budget. It involves understanding the risks, setting limits in advance, and knowing when to stop.
            </p>
            <div className="grid sm:grid-cols-2 gap-3 mt-3">
              {[
                ["Set Time Limits", "Decide how long you will play before you start, and keep to that boundary."],
                ["Set Money Limits", "Only play with funds you can afford to lose. Never borrow money to play."],
                ["Take Regular Breaks", "Step away regularly to maintain perspective and control."],
                ["Never Chase Losses", "Accept losses as part of the entertainment cost. Chasing rarely ends well."],
              ].map(([title, body]) => (
                <InfoCard key={title as string} title={title as string} body={body as string} />
              ))}
            </div>
          </Section>

          <div className="h-px my-6" style={{ background: "rgba(184,150,90,0.1)" }} />

          <Section title="Warning Signs">
            <p>Recognise when play might be becoming a problem. Warning signs include:</p>
            <ul className="space-y-2 mt-2">
              {[
                "Spending more time or money than intended",
                "Feeling anxious, depressed, or guilty about your gambling",
                "Concealing your gambling from family or friends",
                "Borrowing money or selling possessions to fund play",
                "Neglecting work, family, or other responsibilities",
                "Feeling unable to stop or reduce your gambling",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="shrink-0 w-1 h-1 rounded-full mt-2" style={{ backgroundColor: GOLD }} />
                  {item}
                </li>
              ))}
            </ul>
          </Section>

          <div className="h-px my-6" style={{ background: "rgba(184,150,90,0.1)" }} />

          <Section title="Self-Help Tools">
            <p>
              Reputable licensed operators are required to offer tools to help you maintain control, including:
            </p>
            <div className="grid sm:grid-cols-2 gap-3 mt-3">
              {[
                ["Deposit Limits", "Set daily, weekly, or monthly caps on how much you can deposit."],
                ["Session Time Limits", "Restrict how long you can play in a single session."],
                ["Reality Checks", "Receive timed reminders about how long you have been playing."],
                ["Self-Exclusion", "Temporarily or permanently block yourself from licensed platforms."],
              ].map(([title, body]) => (
                <InfoCard key={title as string} title={title as string} body={body as string} />
              ))}
            </div>
          </Section>

          <div className="h-px my-6" style={{ background: "rgba(184,150,90,0.1)" }} />

          <Section title="Support Organisations">
            <p>
              If you are concerned about your gambling or that of someone you know, these organisations provide
              free, confidential support:
            </p>
            <div className="grid sm:grid-cols-2 gap-3 mt-3">
              <SupportOrg name="GambleAware" website="www.begambleaware.org" />
              <SupportOrg name="GamCare" website="www.gamcare.org.uk" />
              <SupportOrg name="Gamblers Anonymous" website="www.gamblersanonymous.org.uk" />
              <SupportOrg name="Gordon Moody Association" website="www.gordonmoody.org.uk" />
              <SupportOrg name="Gambling Therapy" website="www.gamblingtherapy.org" />
              <SupportOrg name="GamStop" website="www.gamstop.co.uk" />
            </div>
          </Section>

          <div className="h-px my-6" style={{ background: "rgba(184,150,90,0.1)" }} />

          <Section title="For Family and Friends">
            <ul className="space-y-2">
              {[
                "Do not ignore the problem or expect it to resolve itself.",
                "Encourage the person to seek professional help.",
                "Do not lend money or pay gambling debts.",
                "Look after your own wellbeing — support is available for affected family members too.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="shrink-0 w-1 h-1 rounded-full mt-2" style={{ backgroundColor: GOLD }} />
                  {item}
                </li>
              ))}
            </ul>
          </Section>

          {/* 18+ notice */}
          <div
            className="mt-8 border-l-4 px-5 py-5"
            style={{ borderLeftColor: GOLD, backgroundColor: "rgba(184,150,90,0.05)" }}
          >
            <p className="font-sans font-semibold text-sm mb-1.5" style={{ color: GOLD }}>
              18+ Only
            </p>
            <p className="font-sans text-xs leading-relaxed" style={{ color: "rgba(242,236,217,0.58)" }}>
              All content on trustedcasinossitesuk.com is directed exclusively at adults aged 18 and over who are
              legally entitled to access gambling-related material in Great Britain.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
