export function Footer() {
  return (
    <footer className="border-t border-slate-800/80 mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 grid md:grid-cols-3 gap-8 text-xs text-slate-500">
        <div>
          <div className="text-slate-300 font-medium text-sm">Q1 2026 Earnings — FactSet Read</div>
          <p className="mt-2 leading-relaxed">
            S&amp;P 500 earnings season through 28% reporting (24 April 2026). All blended growth rates, beat statistics, sector aggregates, and
            forward valuation figures sourced from FactSet Earnings Insight.
          </p>
        </div>
        <div>
          <div className="text-slate-300 font-medium">Primary Source</div>
          <ul className="mt-2 space-y-1.5">
            <li>
              <a
                href="https://advantage.factset.com/hubfs/Website/Resources%20Section/Research%20Desk/Earnings%20Insight/EarningsInsight_042426.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 underline-offset-2 hover:underline"
              >
                FactSet Earnings Insight, 4/24/2026 (John Butters)
              </a>
            </li>
            <li>Company investor relations transcripts (verbatim quotes)</li>
            <li>SEC EDGAR 8-K filings (case-study figures)</li>
          </ul>
        </div>
        <div>
          <div className="text-slate-300 font-medium">Disclaimer</div>
          <p className="mt-2 leading-relaxed">
            For educational and informational purposes only. Not investment advice. FactSet figures are blended (actual where reported,
            estimated where not). Where FactSet does not specify a value in text-extractable commentary, the dashboard renders an em-dash rather than fabricating.
          </p>
        </div>
      </div>
    </footer>
  );
}
