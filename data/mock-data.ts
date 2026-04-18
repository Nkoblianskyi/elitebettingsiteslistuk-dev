import type { BettingSite } from "../types"

const defaultTerms = "18+ | T&Cs apply on operator site | BeGambleAware.org | Please gamble responsibly"

const rawSites: Omit<BettingSite, "score">[] = [
  {
    id: "ladbrokes",
    name: "Ladbrokes",
    logo: "/ladbrokes.webp",
    bonus: "Only £5 to Claim £30",
    welcomeOffer: "£30 Welcome Bonus",
    terms: defaultTerms,
    link: "https://www.ladbrokes.com/",
    reviews: 8971,
  },
  {
    id: "midnite",
    name: "Midnite",
    logo: "/midnite.webp",
    bonus: "Get £30 in Free Bets",
    welcomeOffer: "£30 Free Bets",
    terms: defaultTerms,
    link: "https://www.midnite.com",
    reviews: 8742,
  },
  {
    id: "betfred",
    name: "Betfred",
    logo: "/betfred.webp",
    bonus: "Get £50 Free Bets",
    welcomeOffer: "£50 Free Bets",
    terms: defaultTerms,
    link: "https://www.betfred.com/",
    reviews: 9317,
  },
  {
    id: "boylesports",
    name: "BoyleSports",
    logo: "/boylesports.webp",
    bonus: "£40 Welcome Offer",
    welcomeOffer: "New Customers Only",
    terms: defaultTerms,
    link: "https://www.boylesports.com",
    reviews: 9204,
  },
  {
    id: "betvictor",
    name: "BetVictor",
    logo: "/betvictor.webp",
    bonus: "Get £30 Free Bets",
    welcomeOffer: "£30 Free Bets",
    terms: defaultTerms,
    link: "https://www.betvictor.com/",
    reviews: 9088,
  },

  {
    id: "spreadex",
    name: "Spreadex",
    logo: "/spreadex.webp",
    bonus: "Bet £10, Get £60",
    welcomeOffer: "£60 in Free Bets",
    terms: defaultTerms,
    link: "https://www.spreadex.com",
    reviews: 8619,
  },
]

export const bettingSites: BettingSite[] = rawSites.map((site, index) => ({
  ...site,
  score: Math.round((9.8 - index * 0.1) * 10) / 10,
}))
