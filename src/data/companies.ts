import type { CompanyEarnings } from "../types";

export const companies: CompanyEarnings[] = [
  {
    ticker: "ACN",
    name: "Accenture",
    sector: "Consulting",
    reportDate: "Mar 19",
    fiscalPeriod: "FQ2 2026",
    epsActual: 2.93,
    epsEstimate: 2.85,
    epsSurprisePct: 2.8,
    revenueActualBn: 18.04,
    revenueEstimateBn: 17.83,
    revenueGrowthYoY: 8.0,
    stockReaction1d: -4.2,
    guidance: "raised",
    guidanceNote: "FY26 revenue growth raised to 3–5% local currency (4–6% ex-federal). EPS raised to $13.65–$13.90. Federal Services a ~1pt drag on FY growth; $9.3B capital return target reaffirmed.",
    takeaways: [
      "Record $22.1B bookings — 41 deals over $100M; cumulative AI bookings now $11.5B.",
      "85,000+ AI & data professionals, already past the 80K FY26 target.",
      "Federal Services (Trump-era efficiency push) knocked ~2 points off Americas growth; beat-and-raise punished for it."
    ],
    topQuote: {
      speaker: "Julie Sweet",
      role: "CEO",
      quote: "AI is permeating everything we do because it either is driving why clients are actually doing things — like moving to the cloud — or when we're doing something that isn't specific AI, they're looking at our AI credentials because everything is aimed to get to AI."
    },
    themeTags: ["ai-power", "capital-discipline"],
    status: "beat"
  },
  {
    ticker: "NKE",
    name: "Nike",
    sector: "Consumer",
    reportDate: "Mar 31",
    fiscalPeriod: "FQ3 2026",
    epsActual: 0.35,
    epsEstimate: 0.28,
    epsSurprisePct: 25.0,
    revenueActualBn: 11.28,
    revenueEstimateBn: 11.20,
    revenueGrowthYoY: 0.1,
    stockReaction1d: -9.0,
    guidance: "lowered",
    guidanceNote: "Q4 revenue guided down 2–4%; Greater China down ~20%. Gross margin to compress another 25–75 bps with ~250 bps tariff hit. Earnings inflection pushed to fiscal Q2 2027.",
    takeaways: [
      "EPS crushed the bar (+25%) but a guided 20% China revenue collapse sent shares to a 9-year low.",
      "Tariffs quantified: 300 bps hit to Q3 gross margin from North America tariffs alone.",
      "'Win Now' inventory destock = self-inflicted ~5 pt revenue headwind, explicitly framed as structural cleanup."
    ],
    topQuote: {
      speaker: "Elliott Hill",
      role: "CEO",
      quote: "While our comeback is taking longer than we would like, we have a clear set of plans in place, and we expect to complete our Win Now actions by the end of the calendar year."
    },
    themeTags: ["tariff-reset", "consumer-bifurcation"],
    status: "beat"
  },
  {
    ticker: "GS",
    name: "Goldman Sachs",
    sector: "Banks",
    reportDate: "Apr 13",
    fiscalPeriod: "Q1 2026",
    epsActual: 17.55,
    epsEstimate: 16.47,
    epsSurprisePct: 6.6,
    revenueActualBn: 17.23,
    revenueEstimateBn: 16.95,
    revenueGrowthYoY: 13.0,
    stockReaction1d: -3.0,
    guidance: "reaffirmed",
    guidanceNote: "No formal full-year guidance (per firm convention). Mideast flagged as a live deal/IPO headwind; backlog still at 4-year high. Innovator acquisition adds $31B AUS.",
    takeaways: [
      "Second-highest-revenue quarter in firm history; Advisory +89%, IB fees +48%.",
      "Wealth franchise posted 33rd consecutive quarter of long-term net inflows — $62B.",
      "Sold off anyway because 'second-highest ever' wasn't 'record ever.' The bar moved."
    ],
    topQuote: {
      speaker: "David Solomon",
      role: "CEO",
      quote: "The environment for investment banking activity continues to be incredibly robust, particularly M&A activity. The backlog closed 2025 at its highest level in four years."
    },
    themeTags: ["capital-discipline"],
    status: "beat"
  },
  {
    ticker: "JPM",
    name: "JPMorgan Chase",
    sector: "Banks",
    reportDate: "Apr 14",
    fiscalPeriod: "Q1 2026",
    epsActual: 5.94,
    epsEstimate: 5.49,
    epsSurprisePct: 8.2,
    revenueActualBn: 50.5,
    revenueEstimateBn: 49.2,
    revenueGrowthYoY: 10.0,
    stockReaction1d: -1.0,
    guidance: "lowered",
    guidanceNote: "FY26 total NII trimmed to ~$103B (from ~$104.5B). Expense guide reaffirmed. Dimon hedged on tariffs, Mideast, and credit-cycle risk despite robust consumer data.",
    takeaways: [
      "Record Markets quarter — $11.6B (FICC +21%, Equities +17%); IB fees +28%.",
      "NII guidance cut $1.5B overshadowed the beat; credit provisions came in $500M below estimate.",
      "Dimon repeatedly flagged trade battles as making SMB capex planning 'hard' — the loudest banker voice on tariffs."
    ],
    topQuote: {
      speaker: "Jamie Dimon",
      role: "CEO",
      quote: "The trade battles are clearly not over, and it should be expected that many nations are analyzing how and with whom they should create trade arrangements. It is hard to figure out what the long-term effects will be."
    },
    themeTags: ["tariff-reset", "capital-discipline"],
    status: "beat"
  },
  {
    ticker: "BLK",
    name: "BlackRock",
    sector: "Banks",
    reportDate: "Apr 14",
    fiscalPeriod: "Q1 2026",
    epsActual: 12.53,
    epsEstimate: 11.54,
    epsSurprisePct: 8.6,
    revenueActualBn: 6.70,
    revenueEstimateBn: 6.67,
    revenueGrowthYoY: 27.0,
    stockReaction1d: 2.4,
    guidance: "reaffirmed",
    guidanceNote: "Structural 6–7% organic base fee growth target. LifePath with private-market allocations launching this year. iShares Bitcoin Trust now ~$54B AUM (~50% of US spot BTC ETF market).",
    takeaways: [
      "AUM crossed $13.89T on record Q1 iShares inflows of $132B and organic base-fee growth of ~13%.",
      "27% revenue growth was boosted meaningfully by HPS/GIP private-markets platform fees — M&A pivot is paying.",
      "Fink: 'More advancements on private markets to 401(k) in the last 12 months than in the last 20 years.'"
    ],
    topQuote: {
      speaker: "Larry Fink",
      role: "CEO",
      quote: "We've seen more advancements on private markets to 401(k) in the last 12 months than in the last 20 years. Demand for private credit products is structural."
    },
    themeTags: ["capital-discipline"],
    status: "beat"
  },
  {
    ticker: "JNJ",
    name: "Johnson & Johnson",
    sector: "Healthcare",
    reportDate: "Apr 14",
    fiscalPeriod: "Q1 2026",
    epsActual: 2.70,
    epsEstimate: 2.66,
    epsSurprisePct: 1.5,
    revenueActualBn: 24.1,
    revenueEstimateBn: 23.6,
    revenueGrowthYoY: 10.0,
    stockReaction1d: 1.4,
    guidance: "raised",
    guidanceNote: "FY26 sales raised to $100.3–$101.3B (midpoint +7.0%). EPS raised to $11.45–$11.65. Dividend raised 3.1% to $5.36 annualized. Stelara biosimilar erosion -61.7% now framed as 'in the rearview.'",
    takeaways: [
      "Innovative Medicine +11.2%, MedTech +7.7% — cardiovascular +13–14% led by Shockwave +18.5%.",
      "Stelara cliff is real but contained — double-digit growth ex-Stelara confirms the patent-cliff landing.",
      "Talc: March 2026 LA ruling cut a $950M punitive award to $16M, signaling a more contained eventual settlement."
    ],
    topQuote: {
      speaker: "Joaquin Duato",
      role: "Chairman & CEO",
      quote: "We said 2026 would be a year of accelerated growth and impact for Johnson & Johnson. Progress in our pipeline accelerated in Q1 with the FDA approval of Tecvayli plus Darzalex Faspro."
    },
    themeTags: ["consumer-bifurcation"],
    status: "beat"
  },
  {
    ticker: "MS",
    name: "Morgan Stanley",
    sector: "Banks",
    reportDate: "Apr 15",
    fiscalPeriod: "Q1 2026",
    epsActual: 3.43,
    epsEstimate: 3.04,
    epsSurprisePct: 12.8,
    revenueActualBn: 20.58,
    revenueEstimateBn: 19.4,
    revenueGrowthYoY: 16.0,
    stockReaction1d: 5.4,
    guidance: "reaffirmed",
    guidanceNote: "Wealth pre-tax margin target 30% reaffirmed (printed 30.4% in Q1). $20B+ buyback authorization intact; 300+ bps CET1 buffer.",
    takeaways: [
      "Record quarter across every segment — Equities $5.15B (~$450M above Street), IB +36%, Wealth $8.52B.",
      "Wealth passed the 30% pre-tax margin target with $118B in Net New Assets — operating leverage realized.",
      "Cleanest print of the bank cohort; stock closed at a fresh 52-week high."
    ],
    topQuote: {
      speaker: "Ted Pick",
      role: "CEO",
      quote: "AI is our friend. It is just the latest generation of technology that is going to be part of the ecosystem. Copiloting, where super agents work to drive efficiency and effectiveness across the wealth portfolio."
    },
    themeTags: ["ai-power", "capital-discipline"],
    status: "beat"
  },
  {
    ticker: "NFLX",
    name: "Netflix",
    sector: "Entertainment",
    reportDate: "Apr 16",
    fiscalPeriod: "Q1 2026",
    epsActual: 6.61,
    epsEstimate: 5.65,
    epsSurprisePct: 17.0,
    revenueActualBn: 12.25,
    revenueEstimateBn: 12.17,
    revenueGrowthYoY: 16.2,
    stockReaction1d: -9.7,
    guidance: "reaffirmed",
    guidanceNote: "FY26 revenue $50.7–$51.7B (12–14%) maintained, not raised. Q2 revenue guide of $12.574B came in below ~$12.63B consensus. $3B ad revenue target reaffirmed; ad-tier MAUs now 190M. Reed Hastings exiting board.",
    takeaways: [
      "Walked away from Warner Bros. bid — Sarandos: 'Nice to have, not a need to have.' Major M&A discipline signal.",
      "Ad-tier MAUs hit 190M (>60% of sign-ups in ad markets); advertiser base grew 70% YoY.",
      "Print was a clean beat; stock still -9.7% because Q2 revenue guide light and Hastings board exit was a one-two punch."
    ],
    topQuote: {
      speaker: "Ted Sarandos",
      role: "Co-CEO",
      quote: "When the cost of the Warner Bros. deal grew beyond the net value to our business and to our shareholders, we were willing to put emotion and ego aside and walk away. It was a nice to have, not a need to have."
    },
    themeTags: ["capital-discipline", "consumer-bifurcation"],
    status: "beat"
  },
  {
    ticker: "GE",
    name: "GE Aerospace",
    sector: "Industrial",
    reportDate: "Apr 21",
    fiscalPeriod: "Q1 2026",
    epsActual: 1.86,
    epsEstimate: 1.60,
    epsSurprisePct: 16.3,
    revenueActualBn: 11.6,
    revenueEstimateBn: 10.71,
    revenueGrowthYoY: 29.0,
    stockReaction1d: -4.5,
    guidance: "reaffirmed",
    guidanceNote: "FY26 maintained (trending high end): revenue +~21%, EPS $7.10–$7.40, FCF $8.0–$8.4B. Services revenue growth raised to ~$4B. Departures cut from mid-single-digit to flat/low-single-digit on Middle East conflict.",
    takeaways: [
      "Orders exploded +87% YoY — CES orders nearly doubled; backlog now $170B+, up $30B since YE2024.",
      "Defense book-to-bill >2 for second straight quarter — 'record defense orders for this decade.'",
      "Culp flagged that absent Middle East conflict impact, guidance would likely have been raised — that missed raise is why the stock fell."
    ],
    topQuote: {
      speaker: "Larry Culp",
      role: "CEO",
      quote: "Engine deliveries up 43%, LEAP up 63%. Defense book-to-bill was above 2 for the second consecutive quarter — record defense orders for this decade."
    },
    themeTags: ["ai-power"],
    status: "beat"
  },
  {
    ticker: "UNH",
    name: "UnitedHealth",
    sector: "Healthcare",
    reportDate: "Apr 21",
    fiscalPeriod: "Q1 2026",
    epsActual: 7.23,
    epsEstimate: 6.59,
    epsSurprisePct: 9.7,
    revenueActualBn: 111.7,
    revenueEstimateBn: 109.4,
    revenueGrowthYoY: 2.0,
    stockReaction1d: 9.0,
    guidance: "raised",
    guidanceNote: "FY26 adj EPS raised to >$18.25 (from >$17.75). MCR improved 90 bps to 83.9%. Pricing ~10% for 2026 contracts; cost trend 7–8%. Trade-off: deliberately sacrificing MA membership for margin. $1.5B 2026 AI spend.",
    takeaways: [
      "The 2025 meltdown narrative inverted — 90 bps MCR improvement confirmed pricing reset worked.",
      "Deliberate 'margin over membership' framing in MA was the single most important strategic shift.",
      "UNH printed the biggest 1-day rally of the season (+9%); Humana +5% in sympathy."
    ],
    topQuote: {
      speaker: "Stephen Hemsley",
      role: "CEO",
      quote: "This management team believes we are a long way from performing to our full potential. We remain on track to invest nearly $1.5 billion in AI-related initiatives in 2026."
    },
    themeTags: ["ai-power", "consumer-bifurcation"],
    status: "beat"
  },
  {
    ticker: "RTX",
    name: "RTX Corp",
    sector: "Industrial",
    reportDate: "Apr 21",
    fiscalPeriod: "Q1 2026",
    epsActual: 1.78,
    epsEstimate: 1.51,
    epsSurprisePct: 17.9,
    revenueActualBn: 22.1,
    revenueEstimateBn: 21.44,
    revenueGrowthYoY: 9.0,
    stockReaction1d: -3.4,
    guidance: "raised",
    guidanceNote: "FY26 adj sales raised to $92.5–$93.5B; EPS $6.70–$6.90. FCF maintained $8.25–$8.75B. Tariffs: $500M IEEPA paid, refund process live; estimated ~$850M total exposure. GTF Advantage certified; AOG count down ~15%.",
    takeaways: [
      "Record $271B backlog (+25%); 12 straight quarters of munitions deliveries up — 40% YoY this Q.",
      "Raytheon booked $6.6B of awards including 5 landmark framework deals for Tomahawk/AMRAAM/SM family.",
      "Even a guidance RAISE couldn't overcome tariff-payment optics and GTF overhang — stock still sold off."
    ],
    topQuote: {
      speaker: "Christopher Calio",
      role: "CEO",
      quote: "The current landscape clearly underscores the need for munitions depth, integrated air and missile defense technology, and more advanced capabilities to counter evolving threats."
    },
    themeTags: ["tariff-reset", "capital-discipline"],
    status: "beat"
  },
  {
    ticker: "GEV",
    name: "GE Vernova",
    sector: "Industrial",
    reportDate: "Apr 22",
    fiscalPeriod: "Q1 2026",
    epsActual: 1.98,
    epsEstimate: 1.90,
    epsSurprisePct: 4.2,
    revenueActualBn: 9.34,
    revenueEstimateBn: 9.27,
    revenueGrowthYoY: 16.0,
    stockReaction1d: 13.5,
    guidance: "raised",
    guidanceNote: "FY26 revenue raised to $44.5–$45.5B, EBITDA margin +100 bps on both ends to 12–14%, FCF raised. Tariff net headwind $250–350M fully absorbed. Gas turbines on track for 20 GW annualized capacity by March; 24 GW by 2028.",
    takeaways: [
      "Orders exploded +71% YoY; backlog at $163B on $45B revenue — 3.5x+ forward visibility.",
      "Data-center orders of $2.4B in ONE quarter exceeded ALL of 2025 — the cleanest 'AI = power' print anywhere.",
      "Stock +13.5% — best post-earnings move in Vernova's public history."
    ],
    topQuote: {
      speaker: "Scott Strazik",
      role: "CEO",
      quote: "Quarter-to-date, we have booked more Power equipment orders in terms of value than we did in all of Q1 2026. Approximately 80% of our total gigawatts under contract are with traditional customers with the remaining 20% explicitly supporting data centers."
    },
    themeTags: ["ai-power", "tariff-reset"],
    status: "beat"
  },
  {
    ticker: "LRCX",
    name: "Lam Research",
    sector: "Semiconductors",
    reportDate: "Apr 22",
    fiscalPeriod: "FQ3 2026",
    epsActual: 1.47,
    epsEstimate: 1.36,
    epsSurprisePct: 8.1,
    revenueActualBn: 5.84,
    revenueEstimateBn: 5.65,
    revenueGrowthYoY: 24.0,
    stockReaction1d: 4.5,
    guidance: "raised",
    guidanceNote: "Q4 FY26 revenue $6.6B ± $0.4B; EPS $1.65 ± $0.15. 2026 WFE outlook raised to $140B (from $135B) with 'upward bias.' Advanced packaging revenue to grow >50% in CY2026. China at 34% of mix (down from 35%).",
    takeaways: [
      "First-ever $2B Customer Support quarter — services flywheel is real and recurring.",
      "Advanced packaging to grow >50% in CY26 as HBM4 stack height + 1C-node DRAM ramp.",
      "'Token economics' quote is the slogan of the season — AI memory hierarchy moving into NAND."
    ],
    topQuote: {
      speaker: "Tim Archer",
      role: "CEO",
      quote: "AI transformation is moving beyond compute and into the storage layer. Token economics are driving changes to the memory hierarchy used in AI data centers. We now expect WFE of $140 billion with a bias to the upside."
    },
    themeTags: ["ai-power"],
    status: "beat"
  },
  {
    ticker: "TXN",
    name: "Texas Instruments",
    sector: "Semiconductors",
    reportDate: "Apr 22",
    fiscalPeriod: "Q1 2026",
    epsActual: 1.68,
    epsEstimate: 1.38,
    epsSurprisePct: 21.7,
    revenueActualBn: 4.83,
    revenueEstimateBn: 4.52,
    revenueGrowthYoY: 19.0,
    stockReaction1d: 16.8,
    guidance: "raised",
    guidanceNote: "Q2 revenue $5.0–$5.4B (vs. $4.85B consensus); EPS $1.77–$2.05. FY26 capex $2–3B (down from $5B peak run-rate) — exiting the six-year elevated capex cycle. Inventory days falling toward 150–200 band.",
    takeaways: [
      "Data-center end-market exploded +90% YoY and >25% sequentially — the surprise inside the surprise.",
      "Industrial +30% YoY, automotive +MSD — the long-debated industrial cycle bottom is behind us.",
      "Capex normalization is on — the FCF reflex of the CHIPS Act era is finally coming."
    ],
    topQuote: {
      speaker: "Haviv Ilan",
      role: "CEO",
      quote: "Industrial increased more than 30% year over year, growing broadly across all sectors and regions. We are very happy that we have internalized our supply because we are seeing more and more bottlenecks."
    },
    themeTags: ["ai-power"],
    status: "beat"
  },
  {
    ticker: "TSLA",
    name: "Tesla",
    sector: "Auto/Tech",
    reportDate: "Apr 22",
    fiscalPeriod: "Q1 2026",
    epsActual: 0.41,
    epsEstimate: 0.37,
    epsSurprisePct: 10.8,
    revenueActualBn: 22.39,
    revenueEstimateBn: 22.64,
    revenueGrowthYoY: 16.0,
    stockReaction1d: -3.6,
    guidance: "mixed",
    guidanceNote: "FY26 capex raised to >$25B (from $20B; was $8.5B in 2025). Full-year FCF now expected negative. Cybercab, Tesla Semi, Megapack 3 all on schedule. Robotaxi revenue 'not super material' in 2026; meaningful only in 2027. Optimus production start late July/August.",
    takeaways: [
      "The $25B capex print IS the story — up $5B from January guide; Tesla is officially an AI-infrastructure-spending company.",
      "Deliveries missed by ~7,600 units; inventory days jumped from 15 to 27 — demand softness on display.",
      "Musk pushed the meaningful robotaxi contribution out to 2027; Optimus 3 reveal delayed 'close to production' over IP concerns."
    ],
    topQuote: {
      speaker: "Vaibhav Taneja",
      role: "CFO",
      quote: "Our current expectation for 2026 is over $25 billion of CapEx. We're further increasing our investment in AI-related initiatives, including the AI infrastructure to support robotaxi and the launch of Optimus."
    },
    themeTags: ["ai-power", "consumer-bifurcation"],
    status: "beat"
  },
  {
    ticker: "PM",
    name: "Philip Morris Intl",
    sector: "Consumer",
    reportDate: "Apr 22",
    fiscalPeriod: "Q1 2026",
    epsActual: 1.96,
    epsEstimate: 1.83,
    epsSurprisePct: 7.1,
    revenueActualBn: 10.1,
    revenueEstimateBn: 9.95,
    revenueGrowthYoY: 9.1,
    stockReaction1d: 6.0,
    guidance: "raised",
    guidanceNote: "FY26 EPS raised to $8.36–$8.51 (+10.9–12.9% reported; 7.5–9.5% constant-currency). Guide raised for FX only — operational line untouched, implying beat-and-raise pipeline. Currency tailwind ~$0.25 EPS.",
    takeaways: [
      "Smoke-free now 43% of revenue; IQOS surpassed Marlboro to become PMI's #1 nicotine brand globally.",
      "ZYN US optics: shipments -23.5% but offtake +10% = pure retailer destocking, not consumer rejection.",
      "International modern oral +42% — the international ZYN runway is a multi-year tailwind just starting."
    ],
    topQuote: {
      speaker: "Jacek Olczak",
      role: "CEO",
      quote: "Our performance exceeded our expectations in the first quarter, with an outstanding delivery from IQOS driving very good growth for the group against a strong prior-year comparison."
    },
    themeTags: ["consumer-bifurcation"],
    status: "beat"
  },
  {
    ticker: "AXP",
    name: "American Express",
    sector: "Consumer",
    reportDate: "Apr 23",
    fiscalPeriod: "Q1 2026",
    epsActual: 4.28,
    epsEstimate: 4.00,
    epsSurprisePct: 7.0,
    revenueActualBn: 18.91,
    revenueEstimateBn: 18.80,
    revenueGrowthYoY: 11.0,
    stockReaction1d: -1.4,
    guidance: "reaffirmed",
    guidanceNote: "FY26 revenue growth 9–10% reaffirmed; EPS $17.30–$17.90 reaffirmed. Marketing expense raised to mid-single-digit growth (from prior). NFL payments partner starting 2026 season.",
    takeaways: [
      "Billed Business +10% = highest quarterly growth in 3 years. Gen Z spend +38%, Millennial +13%.",
      "Platinum refresh is working: Gen Z/Millennial = half of new Platinums but 1/3 of balances.",
      "Beat punished because guidance was reaffirmed-not-raised while marketing spend goes up — classic Q1 2026 pattern."
    ],
    topQuote: {
      speaker: "Steve Squeri",
      role: "CEO",
      quote: "Gen Z is up 38%. The millennials are up 13%. Our millennial and Gen Z credit performance is better than the industry's Gen X and baby boomer."
    },
    themeTags: ["consumer-bifurcation"],
    status: "beat"
  },
  {
    ticker: "INTC",
    name: "Intel",
    sector: "Semiconductors",
    reportDate: "Apr 23",
    fiscalPeriod: "Q1 2026",
    epsActual: 0.29,
    epsEstimate: 0.01,
    epsSurprisePct: 2800.0,
    revenueActualBn: 13.6,
    revenueEstimateBn: 12.32,
    revenueGrowthYoY: 7.0,
    stockReaction1d: 23.6,
    guidance: "raised",
    guidanceNote: "Q2 revenue $13.8–$14.8B (above ~$13B consensus); GAAP EPS $0.08; non-GAAP $0.20; GM ~39% midpoint. 18A in commercial ramp via Core Ultra Series 3. 14A outpacing 18A; multiple customers 'actively evaluating.' Google Cloud multi-year Xeon deal.",
    takeaways: [
      "DCAI revenue $5.05B (+22% YoY) beat by ~$640M — Intel CPUs still AI head-nodes and not irrelevant.",
      "Foundry losses narrowed $72M sequentially; 18A 'ahead of internal projections,' 14A outpacing it.",
      "Biggest one-day move since October 1987 (+24%); Lip-Bu Tan's CPU-first AI thesis gets a Google-validated stamp."
    ],
    topQuote: {
      speaker: "Lip-Bu Tan",
      role: "CEO & Chairman",
      quote: "The CPU is reinserting itself as the indispensable foundation of the AI era. 18A wafers are now running ahead of internal projections, representing a meaningful inflection in our execution."
    },
    themeTags: ["ai-power"],
    status: "beat"
  },
  {
    ticker: "PG",
    name: "Procter & Gamble",
    sector: "Consumer",
    reportDate: "Apr 24",
    fiscalPeriod: "FQ3 2026",
    epsActual: 1.59,
    epsEstimate: 1.54,
    epsSurprisePct: 3.2,
    revenueActualBn: 21.2,
    revenueEstimateBn: 20.57,
    revenueGrowthYoY: 7.0,
    stockReaction1d: 3.5,
    guidance: "mixed",
    guidanceNote: "FY26 organic sales maintained (in-line to +4%), EPS range maintained but now expected at LOW END. Tariff cost ~$400M after-tax FY26; $150M commodity headwind; ~$150M FQ4 transport hit. 70th consecutive annual dividend increase.",
    takeaways: [
      "First quarter of company-wide volume growth in a year — all 10 categories, all 7 regions green.",
      "Tariff disclosure is among the cleanest in CPG — ~$400M after-tax with $150M refunds available pending process.",
      "EPS guide moves to low end without dropping the range — tariff honesty + volume optimism = rally."
    ],
    topQuote: {
      speaker: "Andre Schulten",
      role: "CFO",
      quote: "The cost impact is broader than just commodity. We have about 150 million after-tax in refunds available from the IEPA part tariff. We are following the process the US Administration is beginning to lay out."
    },
    themeTags: ["tariff-reset", "consumer-bifurcation"],
    status: "beat"
  }
];
