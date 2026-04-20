"use client"

import { useState } from "react"
import { Modal } from "./modal"
import { CookieBanner } from "./cookie-banner"
import { AdvertiserDisclosureModal } from "./advertiser-disclosure-modal"
import { TermsModal } from "./terms-modal"
import { bettingSites } from "../data/mock-data"
import { HeroSection } from "./hero-section"
import { MainLayout } from "./main-layout"
import { SitesList } from "./sites-list"
import { InfoSections } from "./info-sections"

export default function IrishPage() {
  const [isAdvertiserModalOpen, setIsAdvertiserModalOpen] = useState(false)
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false)

  return (
    <>
      {/* Hero is full-bleed: outside MainLayout container */}
      <HeroSection
        onAdvertiserModalOpen={() => setIsAdvertiserModalOpen(true)}
        onTermsModalOpen={() => setIsTermsModalOpen(true)}
      />

      <MainLayout>
        <SitesList />
        <InfoSections />
      </MainLayout>

      <Modal bettingSites={bettingSites} casinoSites={[]} />
      <CookieBanner />
      <AdvertiserDisclosureModal isOpen={isAdvertiserModalOpen} onClose={() => setIsAdvertiserModalOpen(false)} />
      <TermsModal isOpen={isTermsModalOpen} onClose={() => setIsTermsModalOpen(false)} />
    </>
  )
}
