import type { MacroStats } from "../types";

// Source: FactSet Earnings Insight, John Butters, 4/24/2026.
// https://advantage.factset.com/hubfs/Website/Resources%20Section/Research%20Desk/Earnings%20Insight/EarningsInsight_042426.pdf
export const macro: MacroStats = {
  asOf: "24 April 2026",

  // Scorecard
  pctReporting: 28,
  epsBeatPct: 84,
  revBeatPct: 81,
  epsSurprisePct: 12.3,
  epsSurprise5yr: 7.3,
  epsSurprise10yr: 7.1,
  revSurprisePct: 2.0,
  revSurprise5yr: 2.0,
  revSurprise10yr: 1.5,

  // Blended growth and revisions
  earningsGrowth: 15.1,
  earningsGrowthLastWeek: 13.0,
  earningsGrowthMar31: 13.1,
  revenueGrowth: 10.3,
  revenueGrowthLastWeek: 10.0,
  revenueGrowthMar31: 9.9,

  // Net profit margin (record-setting)
  netMargin: 13.4,
  netMarginPriorRecord: 13.2,
  netMarginYearAgo: 12.8,
  netMargin5yr: 12.3,

  // Price reaction context
  beatReaction: 0.9,
  beatReaction5yr: 1.0,
  missReaction: -2.6,
  missReaction5yr: -2.9,

  // Forward analyst estimates
  q2EarningsGrowth: 20.6,
  q2RevenueGrowth: 10.7,
  q3EarningsGrowth: 22.7,
  q3RevenueGrowth: 9.5,
  q4EarningsGrowth: 20.4,
  q4RevenueGrowth: 9.1,
  cy26EarningsGrowth: 18.6,
  cy26RevenueGrowth: 9.5,

  // Guidance
  q2NegativeGuide: 11,
  q2PositiveGuide: 9,
  q2GuideNegPct: 55,
  q2GuideNegPct5yr: 58,
  q2GuideNegPct10yr: 60,
  fyNegativeGuide: 138,
  fyPositiveGuide: 124,

  // Valuation
  fwdPE: 20.9,
  fwdPE5yr: 19.9,
  fwdPE10yr: 18.9,
  fwdPEMar31: 19.7,
  trailingPE: 28.1,
  trailingPE5yr: 24.6,
  trailingPE10yr: 23.3,
  bottomUpTarget: 8362.16,
  indexClose: 7108.40,
  targetUpsidePct: 17.6,
  indexChangeSinceMar31: 8.9,
  fwdEpsChangeSinceMar31: 2.3,

  // Streaks
  consecDoubleDigitGrowthQuarters: 6,
  consecPositiveGrowthQuarters: 11,
};
