type ImpactMetricsProps = {
  locale: "fr" | "en";
};

const content = {
  fr: {
    eyebrow: "Notre trajectoire",
    metrics: [
      { value: "2023", label: "Année de fondation" },
      { value: "10+", label: "Experts digitaux" },
      { value: "50+", label: "Projets livrés" },
    ],
  },
  en: {
    eyebrow: "Our trajectory",
    metrics: [
      { value: "2023", label: "Founded" },
      { value: "10+", label: "Digital experts" },
      { value: "50+", label: "Projects delivered" },
    ],
  },
} as const;

export function ImpactMetrics({ locale }: ImpactMetricsProps) {
  const t = content[locale];

  return (
    <section className="border-b border-neutral-200 bg-white">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-10 md:grid-cols-[0.8fr_1.2fr] md:items-end md:py-12">
        <div>
          <div className="inline-flex items-center gap-3 text-xs tracking-[0.22em] text-neutral-500 uppercase">
            <span className="inline-block h-px w-10 bg-orange-500" />
            {t.eyebrow}
          </div>
        </div>

        <dl className="grid grid-cols-3 gap-4 md:gap-10">
          {t.metrics.map((metric, i) => (
            <div key={metric.label} className="border-l border-neutral-200 pl-4">
              <dt className="font-serif text-3xl leading-none font-semibold text-neutral-950 md:text-5xl">
                <span
                  aria-hidden
                  className="mb-3 block font-sans text-[10px] font-normal tracking-wider text-neutral-400 tabular-nums md:text-xs"
                >
                  0{i + 1}
                </span>
                {metric.value}
              </dt>
              <dd className="mt-3 text-[10px] tracking-[0.12em] text-neutral-500 uppercase md:text-xs">
                {metric.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
