import type { BettingSite } from "../types"

const defaultTerms = "18+ | T&Cs apply on operator site | BeGambleAware.org | Please gamble responsibly | Wagering requirements apply"

const rawSites: Omit<BettingSite, "score">[] = [
  {
    id: "ladbrokes",
    name: "Ladbrokes Casino",
    logo: "/ladbrokes.webp",
    bonus: "Up to £500 Welcome Bonus",
    welcomeOffer: "100% Deposit Match + 50 Free Spins",
    terms: defaultTerms,
    link: "https://casino.ladbrokes.com",
    reviews: 8971,
  },
  {
    id: "midnite",
    name: "Midnite",
    logo: "/midnite.webp",
    bonus: "£30 Casino Bonus",
    welcomeOffer: "Claim £30 on First Deposit",
    terms: defaultTerms,
    link: "https://www.midnite.com",
    reviews: 8742,
  },
  {
    id: "betfred",
    name: "Betfred Casino",
    logo: "/betfred.webp",
    bonus: "£50 Free Spins",
    welcomeOffer: "50 Free Spins on Sign Up",
    terms: defaultTerms,
    link: "https://www.betfred.com/casino",
    reviews: 9317,
  },
  {
    id: "boylesports",
    name: "BoyleSports Casino",
    logo: "/boylesports.webp",
    bonus: "£40 Welcome Bonus",
    welcomeOffer: "New Players Only",
    terms: defaultTerms,
    link: "https://www.boylesports.com/casino",
    reviews: 9204,
  },
  {
    id: "betvictor",
    name: "BetVictor Casino",
    logo: "/betvictor.webp",
    bonus: "£30 Casino Bonus",
    welcomeOffer: "£30 in Casino Bonus Funds",
    terms: defaultTerms,
    link: "https://www.betvictor.com/en-gb/casino",
    reviews: 9088,
  },
  {
    id: "spreadex",
    name: "Spreadex",
    logo: "/spreadex.webp",
    bonus: "£60 Casino Welcome",
    welcomeOffer: "Deposit £10, Get £60 Bonus",
    terms: defaultTerms,
    link: "https://www.spreadex.com/casino",
    reviews: 8619,
  },
]

export const bettingSites: BettingSite[] = rawSites.map((site, index) => ({
  ...site,
  score: Math.round((9.8 - index * 0.1) * 10) / 10,
}))
