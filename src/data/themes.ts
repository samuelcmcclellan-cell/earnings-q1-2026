import type { Theme } from "../types";

export const themes: Theme[] = [
  {
    id: "ai-power",
    number: "01",
    title: "AI's revenge on physics.",
    tagline: "The picks-and-shovels trade moved from slides to order books.",
    hook: "For two years, 'AI infrastructure' was a narrative. This quarter it became a revenue line. GE Vernova booked $2.4B of data-center electrification orders in a single quarter — more than all of 2025 combined. Texas Instruments' data-center end-market grew 90% YoY. Lam raised the 2026 WFE forecast to $140 billion with 'upward bias.' Intel's DCAI crushed by $640M. Even UnitedHealth budgeted $1.5 billion in AI spend. The AI trade is no longer about the hyperscalers — it's about everyone who sells them electrons, atoms, and silicon.",
    body: "",
    evidence: [
      { ticker: "GEV", point: "$2.4B of data-center orders in Q1 alone exceeded the full-year 2025 total. Backlog now $163B on $45B revenue — 3.5x forward visibility." },
      { ticker: "TXN", point: "Data-center end-market +90% YoY. 'Industrial increased more than 30% year over year, growing broadly across all sectors and regions.' — Ilan" },
      { ticker: "LRCX", point: "2026 WFE forecast raised to $140B with 'upward bias'; advanced packaging growing >50% as HBM4 stack height ramps." },
      { ticker: "INTC", point: "DCAI revenue $5.05B (+22% YoY), biggest one-day stock move since October 1987 (+24%)." },
      { ticker: "GE", point: "LEAP engine deliveries +63%; defense book-to-bill >2 for second straight quarter — 'record defense orders for this decade.'" },
      { ticker: "UNH", point: "$1.5B earmarked for AI initiatives in 2026, making Optum's data platform the medium-term cost reset vector." }
    ],
    accent: "emerald",
    icon: "⚡",
  },
  {
    id: "consumer-bifurcation",
    number: "02",
    title: "The K-shape, but sharper.",
    tagline: "Premium holds. Mass cracks. Pharma flies. China breaks.",
    hook: "AmEx Gen-Z card members spent 38% more year-over-year. Philip Morris' smoke-free portfolio crossed 43% of revenue. J&J raised guidance on pharma strength. And then: Nike guided Greater China down 20%, P&G moved its EPS guide to the low end of range, Tesla deliveries missed by 7,600 units and inventory days jumped from 15 to 27, and Netflix revenue beat didn't matter because Q2 guidance was light. One consumer is loaded, one is trading down, and the spread between them is the widest it's been in this cycle.",
    body: "",
    evidence: [
      { ticker: "AXP", point: "Gen Z card spend +38%, Millennial +13%. Platinum refresh: Gen Z/Millennial = half of new Platinums, 1/3 of balances." },
      { ticker: "PM", point: "Smoke-free now 43% of revenue; IQOS surpassed Marlboro to become PMI's #1 nicotine brand globally." },
      { ticker: "NKE", point: "Q4 Greater China guided down ~20%. 300 bps of gross-margin compression from North American tariffs alone." },
      { ticker: "PG", point: "First quarter of company-wide volume growth in a year — but EPS guide moves to low end of range on tariff and commodity pressure." },
      { ticker: "TSLA", point: "Deliveries missed by ~7,600 units; inventory days climbed from 15 to 27; full-year FCF now guided negative." },
      { ticker: "JNJ", point: "Innovative Medicine +11.2%, MedTech +7.7% (cardiovascular +13–14%) — pharma demand is its own consumer cohort." }
    ],
    accent: "amber",
    icon: "◨",
  },
  {
    id: "tariff-reset",
    number: "03",
    title: "Tariffs become a line item.",
    tagline: "From an abstract risk to a specific dollar amount in the model.",
    hook: "For the first time in this cycle, executives are quantifying tariff impact with precision. Nike: 300 basis points of gross margin — roughly $300M a quarter. P&G: $400M after-tax FY26, with $150M available in IEEPA refunds pending the US Administration's process. RTX: $500M already paid, ~$850M in total exposure. GE Vernova: $250–350M net headwind already absorbed in guidance. Jamie Dimon warned small-business capex planning is now 'hard' because of tariff uncertainty. The word stopped meaning 'political risk' and started meaning 'line 23 of the bridge slide.'",
    body: "",
    evidence: [
      { ticker: "NKE", point: "300 bps of Q3 gross-margin hit attributed to North America tariffs. Q2 FY27 flagged as the 'last material' tariff headwind — milestone investors will mark to." },
      { ticker: "PG", point: "~$400M after-tax FY26 tariff cost, with ~$150M in refunds 'available' pending the administrative process the White House is laying out." },
      { ticker: "RTX", point: "$500M in IEEPA tariff payments in Q1 alone; total exposure ~$850M. Refund process active, but nothing booked in guidance." },
      { ticker: "GEV", point: "$250–350M net tariff headwind quantified and fully absorbed in raised FY26 guidance — the cleanest 'priced-in' disclosure." },
      { ticker: "JPM", point: "Dimon: 'The trade battles are clearly not over. It is hard to figure out what the long-term effects will be.' The lead banker calling out SMB capex paralysis." },
      { ticker: "PM", point: "Raised FY26 guide for currency alone — tariff impact navigated, not absorbed. Constant-currency operational guide unchanged." }
    ],
    accent: "rose",
    icon: "▣",
  },
  {
    id: "capital-discipline",
    number: "04",
    title: "The bar moved. Raise or die.",
    tagline: "Beat-and-reaffirm is the new beat-and-miss.",
    hook: "Ten of the 19 companies we covered BEAT consensus and the stock fell anyway. Nike (+25% EPS surprise, -9%). Goldman Sachs (second-highest revenue quarter in firm history, -3%). Accenture (record bookings, raised guidance, -4.2%). Netflix (17% EPS beat, -9.7%). GE Aerospace (orders +87% YoY, -4.5%). The companies that rallied — Morgan Stanley, BlackRock, UnitedHealth, Philip Morris, GE Vernova, Texas Instruments, Intel — all raised guidance. Not reaffirmed. Not pointed at the high end. Actually raised. The bar reset: beat-and-raise is now the floor. Beat-and-reaffirm is punished. The market is paying for forward slope, not backward proof.",
    body: "",
    evidence: [
      { ticker: "NFLX", point: "Beat EPS by 17%, +16% revenue growth — stock -9.7% on light Q2 guide and reaffirmed (not raised) FY. Hastings board exit compounded." },
      { ticker: "GS", point: "Second-highest revenue in firm history, Advisory +89%, IB fees +48% — stock -3% on Mideast IPO caution and no formal raise." },
      { ticker: "ACN", point: "Record $22.1B bookings, raised FY26 guide, 85K+ AI professionals — stock -4.2% to a 52-week low on federal-services drag." },
      { ticker: "MS", point: "Beat across every segment; Wealth passed 30% PTI margin; $118B NNA. Stock +5.4% to fresh 52-week high — cleanest rally of the season." },
      { ticker: "TXN", point: "Q2 guide $5.0–$5.4B against $4.85B consensus; capex cycle turning. Stock +16.8% — the biggest jump in over a year." },
      { ticker: "RTX", point: "Guidance RAISED and still -3.4% — tariff-payment optics and GTF powder-metal overhang outweighed the print. A warning to every company carrying 'yes but' risk into 2H." }
    ],
    accent: "violet",
    icon: "⬆",
  },
];
