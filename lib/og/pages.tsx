import type { ReactNode } from "react";
import { getAllArticles, localize, type BlogLocale } from "@/lib/blog";
import { SHOW_AKWABA } from "@/lib/site-features";
import { CASE_STUDIES, Monogram, Plate } from "@/lib/og/case-study";
import {
  ADC_ORANGE,
  Frame,
  Lead,
  OG_CONTENT_TYPE,
  OG_SIZE,
  Title,
  assetUri,
  displayUrl,
  photoUri,
  renderOg,
} from "@/lib/og/kit";

/**
 * Images de partage des pages principales. Chaque page dit ce qu'elle est et
 * montre ce qu'elle contient : les photos de terrain pour l'accueil, l'équipe
 * pour « À propos », les produits pour « Nos réalisations », les derniers
 * articles pour le blog, les coordonnées pour « Contact ».
 *
 * Les textes reprennent les métadonnées et le contenu des pages : rien n'est
 * inventé ici. Un chiffre ou une coordonnée qui change sur le site doit
 * changer ici aussi.
 */

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

type L = Record<BlogLocale, string>;
const t = (value: L, locale: BlogLocale) => value[locale];

export type PageKey =
  | "home"
  | "about"
  | "expertise"
  | "realisations"
  | "blog"
  | "contact"
  | "privacy";

const PATHS: Record<PageKey, string> = {
  home: "",
  about: "a-propos",
  expertise: "notre-expertise",
  realisations: "nos-realisations",
  blog: "blog",
  contact: "contact",
  privacy: "politique-confidentialite",
};

const ALT: Record<PageKey, string> = {
  home: "African Digit Consulting — Des solutions digitales à fort impact social et humain",
  about: "À propos — African Digit Consulting",
  expertise: "Notre expertise — African Digit Consulting",
  realisations: "Nos réalisations — African Digit Consulting",
  blog: "Le journal — Blog African Digit Consulting",
  contact: "Contact — African Digit Consulting",
  privacy: "Politique de confidentialité — African Digit Consulting",
};

export function pageAlt(page: PageKey): string {
  return ALT[page];
}

/* ------------------------------------------------------------------ */
/* Petits éléments                                                     */
/* ------------------------------------------------------------------ */

function Card({ children, width, padding = "26px 28px", gap = 16 }: { children: ReactNode; width: number; padding?: string; gap?: number }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap,
        width,
        padding,
        borderRadius: 24,
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,148,43,0.22)",
        boxShadow: "0 30px 70px rgba(0,0,0,0.45)",
      }}
    >
      {children}
    </div>
  );
}

function Kicker({ children }: { children: ReactNode }) {
  return (
    <div style={{ display: "flex", fontSize: 13, letterSpacing: "0.18em", textTransform: "uppercase", color: ADC_ORANGE }}>
      {children}
    </div>
  );
}

function Photo({ src, width, height, radius = 18 }: { src: string; width: number; height: number; radius?: number }) {
  return (
    <div
      style={{
        display: "flex",
        width,
        height,
        borderRadius: radius,
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.12)",
        boxShadow: "0 24px 60px rgba(0,0,0,0.5)",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} width={width} height={height} alt="" style={{ objectFit: "cover" }} />
    </div>
  );
}

function Metrics({ items }: { items: { value: string; label: string }[] }) {
  return (
    <div style={{ display: "flex", gap: 34 }}>
      {items.map((m) => (
        <div key={m.label} style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <div style={{ display: "flex", fontSize: 36, color: ADC_ORANGE, lineHeight: 1.1 }}>
            {m.value}
          </div>
          <div style={{ display: "flex", fontSize: 15, color: "rgba(255,255,255,0.7)" }}>{m.label}</div>
        </div>
      ))}
    </div>
  );
}

function TextColumn({ children, width = 520 }: { children: ReactNode; width?: number }) {
  return <div style={{ display: "flex", flexDirection: "column", width, maxWidth: width, flexShrink: 0, gap: 22 }}>{children}</div>;
}

/* ------------------------------------------------------------------ */
/* Pages                                                               */
/* ------------------------------------------------------------------ */

const METRICS = {
  fr: [
    { value: "2023", label: "Année de fondation" },
    { value: "10+", label: "Experts digitaux" },
    { value: "50+", label: "Projets livrés" },
  ],
  en: [
    { value: "2023", label: "Founded" },
    { value: "10+", label: "Digital experts" },
    { value: "50+", label: "Projects delivered" },
  ],
};

async function home(locale: BlogLocale) {
  const [a, b, c] = await Promise.all([assetUri("home-1.jpg"), assetUri("home-2.jpg"), assetUri("home-3.jpg")]);
  return {
    eyebrow: t({ fr: "Agence digitale · Côte d'Ivoire", en: "Digital agency · Côte d'Ivoire" }, locale),
    body: (
      <>
        <TextColumn width={470}>
          <Title size={50}>
            {t({ fr: "Des solutions digitales à fort impact social et humain", en: "Digital solutions with real social and human impact" }, locale)}
          </Title>
          <Lead size={21}>
            {t({ fr: "Utiles, durables, adaptées aux réalités africaines. Le digital au service des peuples.", en: "Useful, durable, grounded in African realities. Technology in service of people." }, locale)}
          </Lead>
          <Metrics items={METRICS[locale]} />
        </TextColumn>
        <div style={{ display: "flex", gap: 12 }}>
          <Photo src={a} width={240} height={370} />
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <Photo src={b} width={264} height={179} />
            <Photo src={c} width={264} height={179} />
          </div>
        </div>
      </>
    ),
  };
}

async function about(locale: BlogLocale) {
  const [team, ...portraits] = await Promise.all([
    assetUri("about-team.jpg"),
    ...[1, 2, 3, 4, 5, 6].map((i) => assetUri(`team-${i}.jpg`)),
  ]);
  return {
    eyebrow: t({ fr: "À propos", en: "About" }, locale),
    body: (
      <>
        <TextColumn width={480}>
          <Title size={56}>
            {t({ fr: "Le digital utile, construit depuis Abidjan", en: "Useful digital, built from Abidjan" }, locale)}
          </Title>
          <Lead size={23}>
            {t({ fr: "Notre histoire, nos piliers, notre équipe.", en: "Our story, our principles, our team." }, locale)}
          </Lead>
          <Metrics items={METRICS[locale]} />
        </TextColumn>
        <div style={{ display: "flex", position: "relative", width: 540, height: 400 }}>
          <Photo src={team} width={540} height={330} radius={22} />
          <div
            style={{
              position: "absolute",
              left: 24,
              bottom: 0,
              display: "flex",
              alignItems: "center",
              padding: "10px 16px",
              borderRadius: 999,
              background: "#14110e",
              border: "1px solid rgba(255,148,43,0.35)",
              boxShadow: "0 18px 40px rgba(0,0,0,0.5)",
            }}
          >
            {portraits.map((src, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  width: 62,
                  height: 62,
                  borderRadius: 31,
                  overflow: "hidden",
                  marginLeft: i === 0 ? 0 : -12,
                  border: "3px solid #14110e",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} width={62} height={62} alt="" />
              </div>
            ))}
            <div style={{ display: "flex", marginLeft: 16, fontSize: 16, color: "rgba(255,255,255,0.85)" }}>
              {t({ fr: "L'équipe ADC", en: "The ADC team" }, locale)}
            </div>
          </div>
        </div>
      </>
    ),
  };
}

const OFFER = {
  fr: {
    title: "Conception & développement web",
    tagline: "Des plateformes pensées pour durer, pas juste pour impressionner au lancement.",
    specialties: ["Sites vitrines", "E-commerce", "Applications web", "Plateformes multi-tenants"],
  },
  en: {
    title: "Web design & development",
    tagline: "Platforms built to last, not just to impress on launch day.",
    specialties: ["Marketing sites", "E-commerce", "Web applications", "Multi-tenant platforms"],
  },
};

async function expertise(locale: BlogLocale) {
  const offer = OFFER[locale];
  return {
    eyebrow: t({ fr: "Notre expertise", en: "Our expertise" }, locale),
    body: (
      <>
        <TextColumn width={460}>
          <Title size={52}>
            {t({ fr: "Concevoir des solutions qui tiennent dans la durée", en: "Designing solutions that hold up over time" }, locale)}
          </Title>
          <Lead size={22}>
            {t({ fr: "Comprendre votre métier avant de proposer une ligne de code.", en: "Understanding your business before proposing a single line of code." }, locale)}
          </Lead>
        </TextColumn>
        <Card width={520} gap={16}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ display: "flex", fontFamily: "Fraunces", fontSize: 40, color: ADC_ORANGE }}>01</div>
            <div style={{ display: "flex", fontSize: 24 }}>{offer.title}</div>
          </div>
          <div style={{ display: "flex", fontFamily: "Poppins Regular", fontSize: 18, lineHeight: 1.4, color: "rgba(255,255,255,0.75)" }}>
            {offer.tagline}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {offer.specialties.map((sp) => (
              <div
                key={sp}
                style={{
                  display: "flex",
                  padding: "8px 14px",
                  borderRadius: 12,
                  background: "rgba(255,148,43,0.12)",
                  border: "1px solid rgba(255,148,43,0.3)",
                  fontSize: 16,
                }}
              >
                {sp}
              </div>
            ))}
          </div>
          <div style={{ display: "flex", height: 1, background: "rgba(255,255,255,0.1)" }} />
          <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 15, color: "rgba(255,255,255,0.8)" }}>
            {["Discovery", "Design", "Build", "Run"].map((step, i) => (
              <div key={step} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                {i > 0 ? <div style={{ display: "flex", width: 18, height: 2, background: "rgba(255,148,43,0.6)" }} /> : null}
                <div style={{ display: "flex", padding: "6px 12px", borderRadius: 999, border: "1px solid rgba(255,255,255,0.2)" }}>
                  {step}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </>
    ),
  };
}

const PRODUCT_LINES: Record<string, L> = {
  klassci: { fr: "Gestion académique pour l'enseignement supérieur", en: "Academic management for higher education" },
  akwaba: { fr: "Assistant IA pour la diaspora ivoirienne", en: "AI assistant for the Ivorian diaspora" },
  wouri: { fr: "Interface vocale pour l'agriculture et le climat", en: "Voice interface for agriculture and climate" },
};

async function realisations(locale: BlogLocale) {
  const slugs = SHOW_AKWABA ? ["akwaba", "klassci", "wouri"] : ["klassci", "wouri"];
  const logos = await Promise.all(
    slugs.map((s) => (CASE_STUDIES[s].logo ? assetUri(CASE_STUDIES[s].logo!) : Promise.resolve(null))),
  );
  return {
    eyebrow: t({ fr: "Nos réalisations", en: "Our work" }, locale),
    body: (
      <>
        <TextColumn width={480}>
          <Title size={66}>{t({ fr: "Nos réalisations", en: "Our work" }, locale)}</Title>
          <Lead size={23}>
            {t({ fr: "Des produits conçus par ADC pour l'éducation, l'agriculture et le climat.", en: "Products built by ADC for education, agriculture and climate." }, locale)}
          </Lead>
        </TextColumn>
        <div style={{ display: "flex", flexDirection: "column", gap: 20, width: 556 }}>
          {slugs.map((slug, i) => {
            const study = CASE_STUDIES[slug];
            const logo = logos[i];
            return (
              <div
                key={slug}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 22,
                  padding: "24px 26px",
                  borderRadius: 22,
                  background: `linear-gradient(120deg, ${study.theme.bg} 0%, ${study.theme.glow}55 100%)`,
                  border: `1px solid ${study.theme.accent}55`,
                  boxShadow: "0 20px 50px rgba(0,0,0,0.45)",
                }}
              >
                {logo ? <Plate src={logo} size={70} /> : <Monogram name={study.name} theme={study.theme} />}
                <div style={{ display: "flex", flexDirection: "column", flex: 1, gap: 4 }}>
                  <div style={{ display: "flex", fontFamily: "Fraunces", fontSize: 38, lineHeight: 1 }}>{study.name}</div>
                  <div style={{ display: "flex", fontFamily: "Poppins Regular", fontSize: 19, color: "rgba(255,255,255,0.8)" }}>
                    {t(PRODUCT_LINES[slug], locale)}
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    width: 12,
                    height: 12,
                    borderRadius: 6,
                    background: study.status.live ? "#22c55e" : ADC_ORANGE,
                  }}
                />
              </div>
            );
          })}
        </div>
      </>
    ),
  };
}

async function blog(locale: BlogLocale) {
  const latest = getAllArticles().slice(0, 3);
  const thumbs = await Promise.all(latest.map((a) => photoUri(a.hero.src, 150, 110, a.hero.position)));
  return {
    eyebrow: t({ fr: "Blog · Actualités", en: "Blog · News" }, locale),
    body: (
      <>
        <TextColumn width={460}>
          <Title size={72}>{t({ fr: "Le journal.", en: "The journal." }, locale)}</Title>
          <Lead size={23}>
            {t({ fr: "Nos observations sur le digital africain, entre pratique du terrain et regard critique.", en: "Our observations on African digital, between field practice and critical perspective." }, locale)}
          </Lead>
        </TextColumn>
        <div style={{ display: "flex", flexDirection: "column", gap: 14, width: 570 }}>
          {latest.map((article, i) => (
            <div
              key={article.slug}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 18,
                padding: 12,
                borderRadius: 18,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div style={{ display: "flex", width: 150, height: 110, borderRadius: 12, overflow: "hidden" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={thumbs[i]} width={150} height={110} alt="" />
              </div>
              <div style={{ display: "flex", flexDirection: "column", flex: 1, gap: 6 }}>
                <Kicker>
                  {localize(article.category, locale)} · {localize(article.publishedAtDisplay, locale)}
                </Kicker>
                <div style={{ display: "flex", fontFamily: "Fraunces", fontSize: 21, lineHeight: 1.2 }}>
                  {localize(article.title, locale)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    ),
  };
}

function ContactLine({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 4, paddingBottom: 14, borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
      <Kicker>{label}</Kicker>
      <div style={{ display: "flex", fontSize: 22 }}>{value}</div>
    </div>
  );
}

async function contact(locale: BlogLocale) {
  return {
    eyebrow: "Contact",
    body: (
      <>
        <TextColumn width={490}>
          <Title size={58}>{t({ fr: "Parlons de votre projet", en: "Let's talk about your project" }, locale)}</Title>
          <Lead size={23}>
            {t({ fr: "Écrivez-nous, appelez-nous, ou venez nous voir à Grand-Bassam. On répond vite.", en: "Write to us, call us, or come visit us in Grand-Bassam. We reply quickly." }, locale)}
          </Lead>
        </TextColumn>
        <Card width={510} gap={14}>
          <ContactLine label="E-mail" value="africandigitconsulting@gmail.com" />
          <ContactLine label={t({ fr: "Téléphone", en: "Phone" }, locale)} value="+225 27 32 797 523 · +225 05 95 45 98 43" />
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <Kicker>{t({ fr: "Bureau", en: "Office" }, locale)}</Kicker>
            <div style={{ display: "flex", fontSize: 22 }}>Siti Dia, Grand-Bassam Monckey-ville</div>
          </div>
        </Card>
      </>
    ),
  };
}

async function privacy(locale: BlogLocale) {
  const badges = [
    { k: t({ fr: "Europe", en: "Europe" }, locale), v: "RGPD / GDPR" },
    { k: t({ fr: "Côte d'Ivoire", en: "Côte d'Ivoire" }, locale), v: t({ fr: "Loi n° 2013-450", en: "Law 2013-450" }, locale) },
  ];
  return {
    eyebrow: t({ fr: "Confidentialité", en: "Privacy" }, locale),
    body: (
      <>
        <TextColumn width={560}>
          <Title size={60}>{t({ fr: "Politique de confidentialité", en: "Privacy Policy" }, locale)}</Title>
          <Lead size={23}>
            {t({ fr: "Comment nous traitons vos données personnelles.", en: "How we handle your personal data." }, locale)}
          </Lead>
        </TextColumn>
        <Card width={440} gap={18} padding="30px 30px">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 72,
              height: 72,
              borderRadius: 20,
              background: "rgba(255,148,43,0.16)",
              border: "1px solid rgba(255,148,43,0.4)",
            }}
          >
            <svg width="36" height="40" viewBox="0 0 24 26" fill="none">
              <path d="M12 1 L22 5 V12 C22 18 17.5 23 12 25 C6.5 23 2 18 2 12 V5 Z" stroke={ADC_ORANGE} strokeWidth="2" />
              <path d="M7.5 13 L10.8 16.3 L16.8 9.8" stroke={ADC_ORANGE} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <Kicker>{t({ fr: "Conforme à", en: "Compliant with" }, locale)}</Kicker>
          {badges.map((b) => (
            <div key={b.v} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: 12, borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
              <div style={{ display: "flex", fontSize: 22 }}>{b.v}</div>
              <div style={{ display: "flex", fontSize: 15, color: "rgba(255,255,255,0.6)" }}>{b.k}</div>
            </div>
          ))}
        </Card>
      </>
    ),
  };
}

const BUILDERS: Record<PageKey, (locale: BlogLocale) => Promise<{ eyebrow: string; body: ReactNode }>> = {
  home,
  about,
  expertise,
  realisations,
  blog,
  contact,
  privacy,
};

export async function createPageOgImage(page: PageKey, locale: BlogLocale = "fr") {
  const [adcLogo, { eyebrow, body }] = await Promise.all([assetUri("adc-logo.png"), BUILDERS[page](locale)]);
  return renderOg(
    <Frame adcLogo={adcLogo} eyebrow={eyebrow} url={displayUrl(PATHS[page], locale)}>
      {body}
    </Frame>,
  );
}
