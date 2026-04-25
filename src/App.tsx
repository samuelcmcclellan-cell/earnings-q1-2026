import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Section } from "./components/Section";
import { Scoreboard } from "./components/Scoreboard";
import { ThemeCard } from "./components/ThemeCard";
import { CompanyTile } from "./components/CompanyTile";
import { CompanyDetail } from "./components/CompanyDetail";
import { QuoteWall } from "./components/QuoteWall";
import { ReportViewer } from "./components/ReportViewer";
import { Footer } from "./components/Footer";
import { ReactionScatter } from "./components/charts/ReactionScatter";
import { BeatMissBars } from "./components/charts/BeatMissBars";
import { SectorGrowth } from "./components/charts/SectorGrowth";
import { themes } from "./data/themes";
import { companies } from "./data/companies";
import { quotes } from "./data/quotes";
import { hotTake, execBrief, deepRead } from "./data/reports";
import type { CompanyEarnings } from "./types";

export default function App() {
  const [active, setActive] = useState("themes");
  const [selected, setSelected] = useState<CompanyEarnings | null>(null);

  const handleNav = (k: string) => {
    setActive(k);
    document.getElementById(k)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen">
      <Header active={active} onNav={handleNav} />
      <Hero asOfDate="24 April 2026" reportCount={companies.length} />

      <Section
        id="scoreboard"
        eyebrow="Season Scoreboard"
        title="Six numbers that frame the season."
        subtitle="The headline numbers don't tell the story — but they tell you which story to look for."
      >
        <Scoreboard companies={companies} />
      </Section>

      <Section
        id="themes"
        eyebrow="Four Themes"
        title="What the transcripts actually said."
        subtitle="Forget the noise. Across 19 mega-cap reports, four distinct narratives emerged from what executives chose to emphasize and what they chose to deflect."
      >
        <div className="grid md:grid-cols-2 gap-5">
          {themes.map((t) => (
            <ThemeCard key={t.id} theme={t} />
          ))}
        </div>
      </Section>

      <Section
        id="data"
        eyebrow="The Data"
        title="Beat, miss, and the price of being right."
        subtitle="Three reads of the season: surprise magnitude, what the market paid for, and where growth actually showed up."
      >
        <div className="grid lg:grid-cols-2 gap-5">
          <BeatMissBars companies={companies} />
          <ReactionScatter companies={companies} />
        </div>
        <div className="mt-5">
          <SectorGrowth companies={companies} />
        </div>
      </Section>

      <Section
        id="companies"
        eyebrow="19 Reports"
        title="Click any company for the full quote, guidance, and takeaways."
        subtitle="Each tile shows the headline beat or miss, day-1 stock reaction, guidance posture, and one quote that captures the call."
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {companies.map((c) => (
            <CompanyTile
              key={c.ticker}
              c={c}
              onClick={() => setSelected(c)}
              active={selected?.ticker === c.ticker}
            />
          ))}
        </div>
      </Section>

      <Section
        id="quotes"
        eyebrow="Quote Wall"
        title="The lines that actually moved the conversation."
        subtitle="Filterable by theme. Verbatim from prepared remarks and Q&A, with attribution."
      >
        <QuoteWall quotes={quotes} themes={themes.map((t) => ({ id: t.id, title: t.title }))} />
      </Section>

      <Section
        id="reports"
        eyebrow="Three Reads"
        title="The full report — choose your length."
        subtitle="Same season, three distillations. The 100-word hot take, the 500-word executive brief, and the 5,000-word deep read."
      >
        <ReportViewer hot={hotTake} exec={execBrief} deep={deepRead} />
      </Section>

      <Footer />

      {selected && <CompanyDetail c={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
