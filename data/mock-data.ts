import type { BettingSite } from "../types"

const defaultTerms = "18+ | T&Cs apply on operator site | BeGambleAware.org | Please gamble responsibly | Wagering requirements apply"

const rawSites: Omit<BettingSite, "score">[] = [
  {
    id: "betfred",
    name: "Betfred Casino",
    logo: "/betfred.webp",
    bonus: "200 Free Spins",
    welcomeOffer: "Stake £10 & Get 200 Free Spins",
    terms: defaultTerms,
    link: "https://www.betfred.com/casino",
    reviews: 9317,
  },
  {
    id: "boylesports",
    name: "BoyleSports Casino",
    logo: "/boylesports.webp",
    bonus: "£50 Casino Bonus",
    welcomeOffer: "Bet £10 & Get £50 Casino Bonus",
    terms: defaultTerms,
    link: "https://games.boylesports.com",
    reviews: 9204,
  },
  {
    id: "betvictor",
    name: "BetVictor Casino",
    logo: "/betvictor.webp",
    bonus: "£20 Bonus + 50 Free Spins",
    welcomeOffer: "Deposit £10 & Get £20 Casino Bonus + 50 Free Spins",
    terms: defaultTerms,
    link: "https://www.betvictor.com/en-gb/casino",
    reviews: 9088,
  },
  {
    id: "ladbrokes",
    name: "Ladbrokes Casino",
    logo: "/ladbrokes.webp",
    bonus: "100 Free Spins",
    welcomeOffer: "Play £10 on Slots and Get 100 Free Spins",
    terms: defaultTerms,
    link: "https://www.ladbrokes.com/en/games/",
    reviews: 8971,
  },
  {
    id: "midnite",
    name: "Midnite Casino",
    logo: "/midnite.webp",
    bonus: "100 Free Spins",
    welcomeOffer: "Wager £20 and Get 100 Free Spins",
    terms: defaultTerms,
    link: "https://www.midnite.com/casino",
    reviews: 8742,
  },
]

export const bettingSites: BettingSite[] = rawSites.map((site, index) => ({
  ...site,
  score: Math.round((9.8 - index * 0.1) * 10) / 10,
}))
