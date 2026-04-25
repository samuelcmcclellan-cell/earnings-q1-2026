export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="max-w-7xl mx-auto px-6 lg:px-10 py-20 scroll-mt-16">
      <div className="mb-10">
        <div className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-medium">{eyebrow}</div>
        <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-slate-50 leading-tight">{title}</h2>
        {subtitle && <p className="mt-3 max-w-3xl text-base text-slate-400 leading-relaxed">{subtitle}</p>}
      </div>
      {children}
    </section>
  );
}
