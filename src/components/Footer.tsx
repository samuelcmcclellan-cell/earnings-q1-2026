export function Footer() {
  return (
    <footer className="border-t border-slate-800/80 mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 grid md:grid-cols-3 gap-8 text-xs text-slate-500">
        <div>
          <div className="text-slate-300 font-medium text-sm">Q1 2026 Earnings — Deep Read</div>
          <p className="mt-2 leading-relaxed">
            Synthesis of 19 mega-cap earnings reports released between 20 March and 24 April 2026.
            Reflects management commentary as delivered. No paraphrasing, no Yahoo, no Motley Fool.
          </p>
        </div>
        <div>
          <div className="text-slate-300 font-medium">Sources</div>
          <ul className="mt-2 space-y-1.5">
            <li>Company investor relations transcripts</li>
            <li>SEC EDGAR 8-K filings</li>
            <li>Reuters, Financial Times, Bloomberg, CNBC</li>
            <li>Quartr; Stockanalysis.com</li>
          </ul>
        </div>
        <div>
          <div className="text-slate-300 font-medium">Disclaimer</div>
          <p className="mt-2 leading-relaxed">
            For educational and informational purposes only. Not investment advice. Stock reactions reflect 1-day price moves
            following the report; figures rounded.
          </p>
        </div>
      </div>
    </footer>
  );
}
