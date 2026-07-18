import Image from "next/image";

type TrustedClientsSectionProps = {
  locale: "fr" | "en";
};

const CLIENT_LOGOS = [
  {
    name: "Cannelles Éditions",
    src: "/img/clients-trusted/cannelles-editions.webp",
  },
  {
    name: "Côte d'Ivoire Emballages",
    src: "/img/clients-trusted/cote-ivoire-emballages.webp",
  },
  { name: "ES BTP", src: "/img/clients-trusted/es-btp.webp" },
  { name: "GIZ", src: "/img/clients-trusted/giz.webp" },
  {
    name: "Ministère de l'Enseignement technique",
    src: "/img/clients-trusted/ministere-enseignement-technique.webp",
  },
  { name: "AVE Group International", src: "/img/clients-trusted/ave-group.webp" },
  { name: "FEJECI", src: "/img/clients-trusted/fejeci.webp" },
  { name: "Impact'Lab UNESCO", src: "/img/clients-trusted/impactlab-unesco.webp" },
  { name: "Pierre Émeraude", src: "/img/clients-trusted/pierre-emeraude.webp" },
  { name: "DGCE", src: "/img/clients-trusted/dgce.webp" },
  { name: "Doudas", src: "/img/clients-trusted/doudas.webp" },
  { name: "FedEx", src: "/img/clients-trusted/fedex.webp" },
  { name: "Colis Trans", src: "/img/clients-trusted/colis-trans.webp" },
];

const COPY = {
  fr: {
    eyebrow: "Ils nous font confiance",
    title: "Des organisations publiques, privées et associatives avancent avec ADC.",
  },
  en: {
    eyebrow: "Trusted by",
    title: "Public, private and nonprofit organisations move forward with ADC.",
  },
} as const;

export function TrustedClientsSection({ locale }: TrustedClientsSectionProps) {
  const copy = COPY[locale];
  const logos = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section className="relative overflow-hidden border-y border-neutral-200 bg-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-14">
          <div>
            <div className="mb-4 inline-flex items-center gap-3 text-xs tracking-[0.22em] text-neutral-600 uppercase">
              <span className="inline-block h-px w-10 bg-orange-500" />
              {copy.eyebrow}
            </div>
            <h2 className="max-w-xl font-serif text-3xl font-medium leading-tight text-neutral-950 md:text-4xl">
              {copy.title}
            </h2>
          </div>

          <div className="relative min-w-0 overflow-hidden">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent"
            />
            <div className="trusted-logo-marquee flex w-max items-center gap-4">
              {logos.map((logo, index) => (
                <div
                  key={`${logo.name}-${index}`}
                  className="flex h-24 w-44 shrink-0 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50 px-5"
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={180}
                    height={96}
                    className="max-h-16 w-auto max-w-full object-contain"
                    sizes="176px"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
