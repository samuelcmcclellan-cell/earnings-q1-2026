import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Section } from "./components/Section";
import { Scoreboard } from "./components/Scoreboard";
import { ThemeCard } from "./components/ThemeCard";
import { SectorTile } from "./components/SectorTile";
import { SectorDetail } from "./components/SectorDetail";
import { QuoteWall } from "./components/QuoteWall";
import { ReportViewer } from "./components/ReportViewer";
import { Footer } from "./components/Footer";
import { ReactionScatter } from "./components/charts/ReactionScatter";
import { BeatMissBars } from "./components/charts/BeatMissBars";
import { SectorGrowth } from "./components/charts/SectorGrowth";
import { SectorMargins } from "./components/charts/SectorMargins";
import { GuidanceSplit } from "./components/charts/GuidanceSplit";
import { ForwardPE } from "./components/charts/ForwardPE";
import { themes } from "./data/themes";
import { companies } from "./data/companies";
import { sectors } from "./data/sectors";
import { macro } from "./data/macro";
import { quotes } from "./data/quotes";
import { hotTake, execBrief, deepRead } from "./data/reports";
import type { Sector } from "./types";

export default function App() {
  const [active, setActive] = useState("themes");
  const [selectedSector, setSelectedSector] = useState<Sector | null>(null);

  const handleNav = (k: string) => {
    setActive(k);
    document.getElementById(k)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen">
      <Header active={active} onNav={handleNav} />
      <Hero asOfDate={macro.asOf} pctReporting={macro.pctReporting} />

      <Section
        id="scoreboard"
        eyebrow="FactSet Scoreboard"
        title="Six numbers that frame the season."
        subtitle="Sourced directly from FactSet Earnings Insight, 4/24/2026. Comparators show 5-year and 10-year averages, prior-period values, and same-period prior year."
      >
        <Scoreboard m={macro} />
      </Section>

      <Section
        id="themes"
        eyebrow="Five Themes"
        title="What FactSet's data actually says."
        subtitle="Through 28% of S&P 500 reports, five distinct narratives emerge from the season-level statistics — built from FactSet's blended growth, beat rates, sector dispersion, and forward-multiple context."
      >
        <div className="grid md:grid-cols-2 gap-5">
          {themes.map((t) => (
            <ThemeCard key={t.id} theme={t} />
          ))}
        </div>
      </Section>

      <Section
        id="sectors"
        eyebrow="11 Sectors"
        title="Click any sector for the full FactSet drill-down."
        subtitle="Each tile shows blended Q1 2026 earnings growth, revenue growth, EPS beat rate, and net margin — all sourced from FactSet 4/24/2026. Em-dashes indicate fields FactSet does not specify in the text-extractable commentary."
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {sectors.map((s) => (
            <SectorTile
              key={s.id}
              s={s}
              onClick={() => setSelectedSector(s)}
              active={selectedSector?.id === s.id}
            />
          ))}
        </div>
      </Section>

      <Section
        id="data"
        eyebrow="The Data"
        title="Sector dispersion, multiple expansion, and the bar that moved."
        subtitle="Six FactSet-sourced charts: sector growth (earnings vs revenue), sector margins (Q1 vs benchmark), EPS beat rate by sector, this season vs the 5-year average, Q2/FY guidance split, and the forward P/E rerating."
      >
        <div className="grid lg:grid-cols-2 gap-5">
          <SectorGrowth sectors={sectors} />
          <SectorMargins sectors={sectors} />
        </div>
        <div className="mt-5 grid lg:grid-cols-2 gap-5">
          <BeatMissBars sectors={sectors} />
          <ReactionScatter m={macro} />
        </div>
        <div className="mt-5 grid lg:grid-cols-2 gap-5">
          <GuidanceSplit m={macro} />
          <ForwardPE m={macro} />
        </div>
      </Section>

      <Section
        id="quotes"
        eyebrow="Quote Wall"
        title="The lines that actually moved the conversation."
        subtitle="Filterable by theme. Verbatim from prepared remarks and Q&A, with attribution. (Quotes carry over from primary-research transcripts; numerics in the dashboard come from FactSet.)"
      >
        <QuoteWall quotes={quotes} themes={themes.map((t) => ({ id: t.id, title: t.title }))} />
      </Section>

      <Section
        id="reports"
        eyebrow="Three Reads"
        title="The full report — choose your length."
        subtitle="Same season, three distillations. The 100-word hot take, the 500-word executive brief, and the 5,000-word deep read. All numerics sourced from FactSet 4/24/2026."
      >
        <ReportViewer hot={hotTake} exec={execBrief} deep={deepRead} />
      </Section>

      <Footer />

      {selectedSector && (
        <SectorDetail
          s={selectedSector}
          caseStudies={companies.filter((c) => c.sectorId === selectedSector.id)}
          onClose={() => setSelectedSector(null)}
        />
      )}
    </div>
  );
}
