import type { BettingSite } from "../types"

const defaultTerms = "18+ | New customers only | Wagering requirements apply | T&Cs apply | BeGambleAware.org | Please play responsibly"

const rawSites: Omit<BettingSite, "score">[] = [
  {
    id: "site-one",
    name: "Premier Casino",
    logo: "/ladbrokes.webp",
    bonus: "Up to £500 Bonus",
    welcomeOffer: "100% First Deposit Match",
    terms: defaultTerms,
    link: "https://www.gamblingcommission.gov.uk/",
    reviews: 8971,
  },
  {
    id: "site-two",
    name: "Royal Tables",
    logo: "/midnite.webp",
    bonus: "£50 Free Spins",
    welcomeOffer: "No Deposit Required",
    terms: defaultTerms,
    link: "https://www.gamblingcommission.gov.uk/",
    reviews: 8742,
  },
  {
    id: "site-three",
    name: "Grand Club",
    logo: "/betfred.webp",
    bonus: "£200 Welcome Pack",
    welcomeOffer: "Bonus + 100 Spins",
    terms: defaultTerms,
    link: "https://www.gamblingcommission.gov.uk/",
    reviews: 9317,
  },
  {
    id: "site-four",
    name: "Estate Gaming",
    logo: "/boylesports.webp",
    bonus: "£150 Match Bonus",
    welcomeOffer: "New Members Offer",
    terms: defaultTerms,
    link: "https://www.gamblingcommission.gov.uk/",
    reviews: 9204,
  },
  {
    id: "site-five",
    name: "Prestige Play",
    logo: "/betvictor.webp",
    bonus: "£100 Free Bet",
    welcomeOffer: "Instant Bonus Credited",
    terms: defaultTerms,
    link: "https://www.gamblingcommission.gov.uk/",
    reviews: 9088,
  },
  {
    id: "site-six",
    name: "Crest Casino",
    logo: "/spreadex.webp",
    bonus: "Deposit £10 Get £60",
    welcomeOffer: "Triple Match Offer",
    terms: defaultTerms,
    link: "https://www.gamblingcommission.gov.uk/",
    reviews: 8619,
  },
]

export const bettingSites: BettingSite[] = rawSites.map((site, index) => ({
  ...site,
  score: Math.round((9.8 - index * 0.1) * 10) / 10,
}))
