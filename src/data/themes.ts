import type { Theme } from "../types";

// Numerics in hooks and evidence are from FactSet Earnings Insight, 4/24/2026.
export const themes: Theme[] = [
  {
    id: "margin-record",
    number: "01",
    title: "Net profit margin just hit a 15-year high.",
    tagline: "13.4% — the highest blended net margin since FactSet started tracking in 2009.",
    hook: "Strip the noise away and the headline FactSet stat is a record. The S&P 500's blended net profit margin for Q1 2026 is 13.4% — the highest the index has ever printed since 2009 (the prior record was 13.2% in Q4 2025). It is well above the 5-year average of 12.3% and the 12.8% Q1 2025 comp. And it is rising: analysts expect 14.1% in Q2, then 14.6% in Q3 and Q4. The S&P 500 is now a higher-margin index than it has ever been.",
    body: "",
    evidence: [
      { ticker: "S&P 500", point: "Q1 2026 blended net margin 13.4% — highest since FactSet began tracking in 2009. Prior record 13.2% (Q4 2025), Q1 2025 was 12.8%, 5-year average 12.3%." },
      { ticker: "INFO TECH", point: "Net margin 29.1% — biggest contributor, up from 25.4% Q1 2025 and 25.3% 5-year average. The single sector behind the index-level margin record." },
      { ticker: "ENERGY", point: "Net margin 6.6% vs 9.6% 5-year average — the largest negative gap-to-trend of any sector and proof the record is concentrated, not broad." },
      { ticker: "UTILITIES", point: "Net margin 15.1% vs 12.1% prior quarter — the biggest QoQ margin gain of any sector, the quiet contributor to the record." },
      { ticker: "COMM SVCS", point: "Net margin 14.1% vs 16.0% Q1 2025 — biggest YoY margin decline of any sector. Even the laggard sector still prints above the index 5-year average." },
      { ticker: "FORWARD", point: "Q2 estimate 14.1%, Q3 14.6%, Q4 14.6% — analysts believe the record gets broken three more times in 2026." }
    ],
    accent: "lime",
    icon: "★",
  },
  {
    id: "ai-power",
    number: "02",
    title: "AI's revenge on physics.",
    tagline: "Information Technology earnings up 46.3%. Tech revenue up 28.1%. Both are sector records.",
    hook: "FactSet ranks the Information Technology sector first on every Q1 2026 metric that matters: highest earnings growth (+46.3%), highest revenue growth (+28.1%), highest net profit margin (29.1%). All 6 industries within Tech are growing earnings — Semis & Equipment +98%, Electronics +33%, Hardware +27%, Software +18%, Comm Equipment +14%, IT Services +7%. Strip out NVIDIA ($1.74 vs $0.81 estimate) and Micron ($12.20 vs $1.56) and the sector still grows 23.3%. Industrials adds the physical-infrastructure side: GE Vernova's $17.44 GAAP print (including $4.5B in M&A gains) on $2.4B of single-quarter data-center orders is the largest single contributor to S&P 500 earnings revisions since March 31.",
    body: "",
    evidence: [
      { ticker: "INFO TECH", point: "Earnings growth +46.3% — highest of all 11 sectors. Strip NVDA + Micron, growth still +23.3%. All 6 industries within Tech reporting earnings growth." },
      { ticker: "INFO TECH", point: "Revenue growth +28.1% — highest of all 11 sectors. Semis & Equipment industry +51% revenue growth alone." },
      { ticker: "GEV", point: "$17.44 vs $1.95 estimate (+794%) is the single largest contributor to S&P 500 earnings revisions since March 31. (GAAP includes $4.5B M&A gains; adj $1.98.)" },
      { ticker: "INTC", point: "$0.29 vs $0.02 estimate — the second-largest contributor to the post-March-31 lift in IT sector growth, alongside TXN's $1.68 vs $1.36." },
      { ticker: "INDUSTRIALS", point: "Sector earnings growth +16.7% — but ex-GE Vernova it's only +6.1%. Power-equipment manufacturer is doing a sector's heavy lifting alone." },
      { ticker: "CY26", point: "Analysts project full-year 2026 S&P 500 earnings growth of 18.6% on revenue growth of 9.5% — Tech and AI-adjacent capex are the engine." }
    ],
    accent: "emerald",
    icon: "⚡",
  },
  {
    id: "consumer-bifurcation",
    number: "03",
    title: "The K-shape, but sharper.",
    tagline: "Consumer Discretionary has the lowest beat rate in the index. Health Care has the highest analyst upside.",
    hook: "FactSet's beat-rate scorecard tells the K-shape story in numbers: Energy, Health Care, Real Estate, Utilities all at 100% EPS beat rates; Consumer Discretionary at 69%, the worst in the index. Same shape on revenue: Consumer Discretionary 69%, Comm Services / Consumer Staples / Energy / Real Estate all at 100%. Forward expectations widen the gap further. Health Care has the highest bottom-up target upside in the S&P at +23.0%, while Real Estate (+9.0%) and Consumer Staples (+10.4%) have the lowest. The market's premium and discount are both being paid — by sector, by quality of franchise, by where the consumer actually showed up.",
    body: "",
    evidence: [
      { ticker: "CONS DISC", point: "Lowest EPS beat rate of any sector at 69%. Tied for lowest revenue beat rate at 69%. Smallest aggregate revenue surprise in the index at +0.4%." },
      { ticker: "ENERGY/HC/RE/UTIL", point: "All four sectors printing 100% EPS beat rates — bar was set low enough that everyone cleared it." },
      { ticker: "HC", point: "Highest analyst price-target upside in the index at +23.0%. UnitedHealth ($7.23 vs $6.58, $111.72B revenue vs $109.43B est) drove much of the post-March-31 upward revision." },
      { ticker: "CONS STAPLES", point: "Lowest Buy-rating share in the index at 43%. Bottom-up upside only +10.4%. Cleanest beats, lowest forward conviction." },
      { ticker: "AXP / PM", point: "Within Cons Disc-adjacent franchises, AmEx Gen Z spend +38% and PM smoke-free 43% of revenue — the premium-end consumer is fine; the volume-end is not." },
      { ticker: "TSLA / NKE", point: "Tesla deliveries missed by ~7,600 units (inventory days from 15 to 27); Nike China guided down ~20% — the Cons Disc 69% beat rate has names you know." }
    ],
    accent: "amber",
    icon: "◨",
  },
  {
    id: "tariff-reset",
    number: "04",
    title: "Tariffs become a line item.",
    tagline: "Even with tariff costs disclosed company by company, the index still prints +15.1% earnings growth.",
    hook: "FactSet doesn't quantify tariffs at the index level — the market does, company by company. Nike: 300 basis points of gross margin, roughly $300M a quarter. P&G: $400M after-tax for fiscal 2026, with $150M of IEEPA refunds 'available' pending the administrative process. RTX: $500M paid in Q1 alone, $850M total exposure. GE Vernova: $250-350M net headwind absorbed inside a RAISED full-year guide. Jamie Dimon's commentary is the macro frame — 'It is hard to figure out what the long-term effects will be' — but the FactSet-level data answers it: 84% of the S&P 500 is beating EPS, the surprise magnitude is +12.3% (well above the 5-year +7.3%), and the index reports its 6th straight quarter of double-digit earnings growth. The line item is paid. The growth keeps coming.",
    body: "",
    evidence: [
      { ticker: "S&P 500", point: "Earnings surprise magnitude +12.3% — well above the 5-year average of +7.3% and 10-year average of +7.1%. Bar got cleared by a wide margin even with tariff drag." },
      { ticker: "INDUSTRIALS", point: "Largest aggregate earnings surprise of any sector at +33.2% above estimates — these are the companies with the biggest tariff exposure, and they crushed the bar anyway." },
      { ticker: "ENERGY", point: "EPS estimates cut hard since March 31: Exxon to $0.97 from $1.83, Chevron to $0.97 from $1.91, Phillips 66 to -$0.53 from $2.07. The energy estimate cut is the price of cheap oil, not tariffs." },
      { ticker: "NKE", point: "300 bps of Q3 gross-margin compression from North America tariffs alone; Q2 FY27 flagged as the 'last material' tariff headwind quarter." },
      { ticker: "PG", point: "~$400M after-tax FY26 tariff cost, with ~$150M of IEEPA refunds 'available' pending the White House process. EPS guide moved to low end without lowering the range." },
      { ticker: "GEV", point: "$250–350M net tariff headwind quantified and fully absorbed inside a RAISED FY26 guide. The cleanest 'priced-in' disclosure of the season." }
    ],
    accent: "rose",
    icon: "▣",
  },
  {
    id: "capital-discipline",
    number: "05",
    title: "The market is rewarding beats less than usual.",
    tagline: "Beat-and-reaffirm gets a lukewarm +0.9%. The 5-year average is +1.0%. Forward valuation is at 20.9x.",
    hook: "FactSet's price-reaction stats tell you the bar moved. Companies with positive EPS surprises in Q1 2026 are seeing a +0.9% average price move (two days before through two days after) — slightly BELOW the 5-year average of +1.0%. Misses are getting punished -2.6%, less than the 5-year -2.9%. Both directions are smaller than usual: the market has front-run the beats and pre-priced the misses. The forward 12-month P/E is now 20.9 — well above the 5-year average (19.9) and 10-year average (18.9), and above where it sat at March 31 (19.7). The S&P 500 is up 8.9% since March 31 while the forward EPS estimate is only up 2.3%. Multiple expansion is doing four times the work of estimate revisions. That is the price of every beat-and-reaffirm.",
    body: "",
    evidence: [
      { ticker: "S&P 500", point: "Forward 12M P/E 20.9 — above 5yr average (19.9), 10yr average (18.9), and March 31 (19.7). Trailing P/E 28.1 vs 5yr 24.6, 10yr 23.3." },
      { ticker: "S&P 500", point: "Index price +8.9% since March 31. Forward EPS estimate +2.3% over the same window. ~75% of the move is multiple expansion, not earnings revision." },
      { ticker: "S&P 500", point: "Beat reaction +0.9% (5yr avg +1.0%); miss reaction -2.6% (5yr avg -2.9%). Both smaller than usual — the market has pre-paid for the result." },
      { ticker: "GUIDANCE", point: "11 companies issued negative Q2 EPS guidance vs 9 positive — 55% negative. Below 5-year (58%) and 10-year (60%) averages, but only just." },
      { ticker: "TARGET", point: "Bottom-up S&P 500 price target 8362.16 vs close 7108.40 = +17.6% upside. Analyst optimism is intact even with multiple at multi-decade highs." },
      { ticker: "FY26/27", point: "Analysts call for 18.6% earnings growth in CY26 on 9.5% revenue. Q2 +20.6%, Q3 +22.7%, Q4 +20.4%. The bar going forward is even higher." }
    ],
    accent: "violet",
    icon: "⬆",
  },
];
