import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import type { ReactNode } from "react";
import { loadGoogleFont } from "@/lib/og-template";
import type { BlogLocale } from "@/lib/blog";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Images de partage des études de cas.
 *
 * Chaque projet porte son propre contexte : couleurs du produit, logo, fiche
 * (secteur, canaux, statut) et un visuel qui montre ce que fait le produit —
 * la vraie interface pour KLASSCI, un échange réel tiré de la page pour AKWABA
 * et WOURI. Le logo ADC reste présent, en signature, pas en sujet.
 */

type Localized = Record<BlogLocale, string>;

type Bubble = { from: "user" | "bot"; label: Localized; text: Localized; voice?: boolean };

type CaseStudy = {
  name: string;
  path: string;
  logo?: AssetKey;
  theme: { bg: string; glow: string; accent: string; soft: string };
  tagline: Localized;
  facts: { label: Localized; value: Localized }[];
  status: { label: Localized; live: boolean };
  visual:
    | { kind: "screenshot"; src: AssetKey; badge: { value: string; label: Localized } }
    | { kind: "chat"; bubbles: Bubble[]; footnote: Localized };
};

const CASE_STUDIES: Record<string, CaseStudy> = {
  klassci: {
    name: "KLASSCI",
    path: "klassci",
    logo: "klassciLogo",
    theme: { bg: "#06122a", glow: "#0453cb", accent: "#5e91de", soft: "rgba(94,145,222,0.16)" },
    tagline: {
      fr: "Le CRM éducatif de l'enseignement supérieur : parcours LMD, finances en temps réel, bulletins, paie.",
      en: "The educational CRM for higher education: LMD pathways, real-time finance, report cards, payroll.",
    },
    facts: [
      { label: { fr: "Secteur", en: "Sector" }, value: { fr: "Éducation", en: "Education" } },
      { label: { fr: "Déploiement", en: "Deployment" }, value: { fr: "Multi-tenants", en: "Multi-tenant" } },
      { label: { fr: "Cycles", en: "Cycles" }, value: { fr: "Primaire → doctorat", en: "Primary → PhD" } },
    ],
    status: { label: { fr: "En production", en: "In production" }, live: true },
    visual: {
      kind: "screenshot",
      src: "klassciDashboard",
      badge: { value: "10", label: { fr: "établissements en production", en: "institutions in production" } },
    },
  },
  akwaba: {
    name: "AKWABA",
    path: "akwaba",
    theme: { bg: "#1a0f06", glow: "#E8590C", accent: "#fbbf91", soft: "rgba(232,89,12,0.18)" },
    tagline: {
      fr: "L'assistant IA de la diaspora ivoirienne : démarches consulaires et investissement, sur le Web et WhatsApp.",
      en: "The AI assistant for the Ivorian diaspora: consular procedures and investment, on Web and WhatsApp.",
    },
    facts: [
      { label: { fr: "Canaux", en: "Channels" }, value: { fr: "Web · WhatsApp", en: "Web · WhatsApp" } },
      { label: { fr: "Langues", en: "Languages" }, value: { fr: "Français · locales", en: "French · local" } },
      { label: { fr: "Secteur", en: "Sector" }, value: { fr: "Diaspora · IA", en: "Diaspora · AI" } },
    ],
    status: { label: { fr: "En production", en: "In production" }, live: true },
    visual: {
      kind: "chat",
      bubbles: [
        {
          from: "user",
          label: { fr: "Diaspora · Paris", en: "Diaspora · Paris" },
          text: {
            fr: "Un agent me propose un service express payé par Mobile Money. C'est fiable ?",
            en: "An agent offers me an express service paid via Mobile Money. Is it reliable?",
          },
        },
        {
          from: "bot",
          label: { fr: "AKWABA", en: "AKWABA" },
          text: {
            fr: "Prudence. Le consulat ne facture jamais ce service par Mobile Money : c'est une arnaque connue. Ne payez rien.",
            en: "Be careful. The consulate never charges this via Mobile Money: it's a known scam. Do not pay anything.",
          },
        },
      ],
      footnote: { fr: "Démarches consulaires · alerte anti-arnaque", en: "Consular procedures · scam alert" },
    },
  },
  wouri: {
    name: "WOURI",
    path: "wouri",
    logo: "wouriLogo",
    theme: { bg: "#0c2418", glow: "#4a8f63", accent: "#a7d7b5", soft: "rgba(167,215,181,0.14)" },
    tagline: {
      fr: "L'interface vocale agricole et climatique : la voix, le contexte local et des sources validées.",
      en: "The voice-first agricultural and climate interface: voice, local context and validated sources.",
    },
    facts: [
      { label: { fr: "Secteur", en: "Sector" }, value: { fr: "Agritech · Climat", en: "Agritech · Climate" } },
      { label: { fr: "Canaux", en: "Channels" }, value: { fr: "WhatsApp · Appel", en: "WhatsApp · Call" } },
      { label: { fr: "Langues", en: "Languages" }, value: { fr: "Français · Dioula", en: "French · Dioula" } },
    ],
    status: { label: { fr: "En consolidation", en: "In consolidation" }, live: false },
    visual: {
      kind: "chat",
      bubbles: [
        {
          from: "user",
          voice: true,
          label: { fr: "Message vocal · Producteur", en: "Voice note · Producer" },
          text: {
            fr: "La pluie est annoncée. Je peux traiter mon champ aujourd'hui ?",
            en: "Rain is forecast. Can I treat my field today?",
          },
        },
        {
          from: "bot",
          label: { fr: "WOURI", en: "WOURI" },
          text: {
            fr: "Une pluie est probable dans les prochaines heures. Évitez l'application avant l'averse.",
            en: "Rain is likely in the next few hours. Avoid applying before the shower.",
          },
        },
      ],
      footnote: { fr: "Source météo datée · Confiance élevée", en: "Dated weather source · High confidence" },
    },
  },
};

export function caseStudyAlt(slug: string, locale: BlogLocale): string {
  const study = CASE_STUDIES[slug];
  const kind = locale === "en" ? "Case study" : "Étude de cas";
  return study ? `${study.name} — ${kind} · African Digit Consulting` : "African Digit Consulting";
}

/**
 * Chemins littéraux, un par fichier : le traçage des fichiers de Next ne suit
 * que les chemins qu'il peut lire tels quels. Un chemin construit à partir
 * d'une variable laisserait l'image hors de la fonction déployée.
 */
const ASSETS = {
  adc: () => readFile(join(process.cwd(), "assets/og/adc-logo.png")),
  klassciLogo: () => readFile(join(process.cwd(), "assets/og/klassci-logo.png")),
  klassciDashboard: () => readFile(join(process.cwd(), "assets/og/klassci-dashboard.jpg")),
  wouriLogo: () => readFile(join(process.cwd(), "assets/og/wouri-logo.png")),
} as const;

type AssetKey = keyof typeof ASSETS;

async function asDataUri(key: AssetKey): Promise<string> {
  const buffer = await ASSETS[key]();
  const mime = key === "klassciDashboard" ? "image/jpeg" : "image/png";
  return `data:${mime};base64,${buffer.toString("base64")}`;
}

function Plate({ src, size: box }: { src: string; size: number }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: box,
        height: box,
        borderRadius: box * 0.24,
        background: "#ffffff",
        boxShadow: "0 12px 30px rgba(0,0,0,0.35)",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} width={box * 0.74} height={box * 0.74} alt="" />
    </div>
  );
}

function Monogram({ name, theme }: { name: string; theme: CaseStudy["theme"] }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 84,
        height: 84,
        borderRadius: 20,
        background: `linear-gradient(135deg, ${theme.glow}, ${theme.accent})`,
        fontFamily: "Fraunces",
        fontSize: 48,
        color: theme.bg,
      }}
    >
      {name.charAt(0)}
    </div>
  );
}

function Screenshot({
  src,
  study,
  locale,
}: {
  src: string;
  study: CaseStudy;
  locale: BlogLocale;
}) {
  if (study.visual.kind !== "screenshot") return null;
  const { badge } = study.visual;
  return (
    <div style={{ display: "flex", position: "relative", width: 560, height: 360 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: 560,
          borderRadius: 16,
          overflow: "hidden",
          background: "#ffffff",
          border: `1px solid ${study.theme.soft}`,
          boxShadow: "0 30px 70px rgba(0,0,0,0.55)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            height: 34,
            padding: "0 14px",
            background: "#eef2f8",
          }}
        >
          {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
            <div key={c} style={{ display: "flex", width: 11, height: 11, borderRadius: 6, background: c }} />
          ))}
          <div
            style={{
              display: "flex",
              marginLeft: 16,
              padding: "3px 14px",
              borderRadius: 8,
              background: "#ffffff",
              fontSize: 13,
              color: "#64748b",
            }}
          >
            klassci.com
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} width={560} height={276} alt="" style={{ objectFit: "cover", objectPosition: "0 0" }} />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          position: "absolute",
          left: -34,
          bottom: -28,
          padding: "14px 22px",
          borderRadius: 16,
          background: study.theme.bg,
          border: `1px solid ${study.theme.accent}`,
          boxShadow: "0 18px 40px rgba(0,0,0,0.5)",
        }}
      >
        <div style={{ display: "flex", fontFamily: "Fraunces", fontSize: 44, color: "#ffffff" }}>
          {badge.value}
        </div>
        <div style={{ display: "flex", width: 150, fontSize: 16, lineHeight: 1.3, color: study.theme.accent }}>
          {badge.label[locale]}
        </div>
      </div>
    </div>
  );
}

function VoiceWave({ color }: { color: string }) {
  const bars = [10, 22, 14, 30, 18, 26, 12, 24, 16, 28, 10, 20, 14, 8];
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 4, height: 32 }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 30,
          height: 30,
          borderRadius: 15,
          background: color,
          marginRight: 8,
        }}
      >
        <svg width="12" height="14" viewBox="0 0 12 14" style={{ marginLeft: 3 }}>
          <path d="M0 0 L12 7 L0 14 Z" fill="#ffffff" />
        </svg>
      </div>
      {bars.map((h, i) => (
        <div key={i} style={{ display: "flex", width: 4, height: h, borderRadius: 2, background: color }} />
      ))}
      <div style={{ display: "flex", marginLeft: 10, fontSize: 15, color: "#64748b" }}>0:07</div>
    </div>
  );
}

function Chat({ study, locale }: { study: CaseStudy; locale: BlogLocale }) {
  if (study.visual.kind !== "chat") return null;
  const { bubbles, footnote } = study.visual;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 18,
        width: 520,
        padding: "28px 26px",
        borderRadius: 28,
        background: "rgba(255,255,255,0.05)",
        border: `1px solid ${study.theme.soft}`,
        boxShadow: "0 30px 70px rgba(0,0,0,0.45)",
      }}
    >
      {bubbles.map((b, i) => {
        const mine = b.from === "user";
        return (
          <div
            key={i}
            style={{
              display: "flex",
              flexDirection: "column",
              alignSelf: mine ? "flex-end" : "flex-start",
              maxWidth: 420,
              gap: 6,
            }}
          >
            <div
              style={{
                display: "flex",
                alignSelf: mine ? "flex-end" : "flex-start",
                fontSize: 13,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: mine ? "rgba(255,255,255,0.55)" : study.theme.accent,
              }}
            >
              {b.label[locale]}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
                padding: "14px 18px",
                borderRadius: mine ? "20px 20px 6px 20px" : "20px 20px 20px 6px",
                background: mine ? "#ffffff" : study.theme.glow,
                color: mine ? "#1e293b" : "#ffffff",
                fontSize: 19,
                lineHeight: 1.4,
              }}
            >
              {b.voice ? <VoiceWave color={study.theme.glow} /> : null}
              <div style={{ display: "flex", fontStyle: b.voice ? "italic" : "normal", color: b.voice ? "#475569" : undefined }}>
                {b.voice ? (locale === "en" ? `“${b.text[locale]}”` : `« ${b.text[locale]} »`) : b.text[locale]}
              </div>
            </div>
          </div>
        );
      })}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          marginTop: 4,
          fontSize: 15,
          color: "rgba(255,255,255,0.6)",
        }}
      >
        <div style={{ display: "flex", width: 8, height: 8, borderRadius: 4, background: study.theme.accent }} />
        {footnote[locale]}
      </div>
    </div>
  );
}

export async function createCaseStudyOgImage(slug: string, locale: BlogLocale = "fr") {
  const study = CASE_STUDIES[slug];
  if (!study) throw new Error(`Unknown case study: ${slug}`);

  const [fraunces, poppins, poppinsRegular, adcLogo, productLogo, screenshot] = await Promise.all([
    loadGoogleFont("Fraunces", 600),
    loadGoogleFont("Poppins", 500),
    loadGoogleFont("Poppins", 400),
    asDataUri("adc"),
    study.logo ? asDataUri(study.logo) : Promise.resolve(null),
    study.visual.kind === "screenshot" ? asDataUri(study.visual.src) : Promise.resolve(null),
  ]);

  const { theme } = study;
  const eyebrow = locale === "en" ? "Case study" : "Étude de cas";
  const url = `africandigitconsulting.com/${locale === "en" ? "en/" : ""}nos-realisations/${study.path}`;

  let visual: ReactNode;
  if (study.visual.kind === "screenshot" && screenshot) {
    visual = <Screenshot src={screenshot} study={study} locale={locale} />;
  } else {
    visual = <Chat study={study} locale={locale} />;
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: theme.bg,
          fontFamily: "Poppins",
          color: "#ffffff",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -260,
            right: -160,
            width: 760,
            height: 760,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${theme.glow}88 0%, ${theme.glow}00 68%)`,
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -200,
            left: -160,
            width: 480,
            height: 480,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,148,43,0.16) 0%, rgba(255,148,43,0) 70%)",
            display: "flex",
          }}
        />

        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
            padding: "44px 60px 36px",
          }}
        >
          {/* Signature ADC + nature de la page */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
              <div style={{ display: "flex", padding: "8px 14px", borderRadius: 12, background: "#ffffff" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={adcLogo} width={112} height={54} alt="" />
              </div>
              <div style={{ display: "flex", width: 34, height: 2, background: "#ff942b" }} />
              <div
                style={{
                  display: "flex",
                  fontSize: 17,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.78)",
                }}
              >
                {eyebrow}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "8px 18px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.18)",
                background: "rgba(255,255,255,0.06)",
                fontSize: 16,
                color: "rgba(255,255,255,0.88)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  background: study.status.live ? "#22c55e" : "#ff942b",
                }}
              />
              {study.status.label[locale]}
            </div>
          </div>

          {/* Contenu : identité du produit à gauche, preuve à droite */}
          <div style={{ display: "flex", flex: 1, alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", flexDirection: "column", width: 500, gap: 24 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
                {productLogo ? <Plate src={productLogo} size={84} /> : <Monogram name={study.name} theme={theme} />}
                <div
                  style={{
                    display: "flex",
                    fontFamily: "Fraunces",
                    fontSize: 72,
                    letterSpacing: "-0.02em",
                    lineHeight: 1,
                  }}
                >
                  {study.name}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  fontFamily: "Poppins Regular",
                  fontSize: 25,
                  lineHeight: 1.42,
                  color: "rgba(255,255,255,0.86)",
                }}
              >
                {study.tagline[locale]}
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                {study.facts.map((f) => (
                  <div
                    key={f.label.fr}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      gap: 3,
                      height: 62,
                      padding: "0 14px",
                      borderRadius: 12,
                      background: theme.soft,
                      border: `1px solid ${theme.soft}`,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        fontSize: 11,
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        color: theme.accent,
                      }}
                    >
                      {f.label[locale]}
                    </div>
                    <div style={{ display: "flex", fontSize: 15, color: "#ffffff" }}>{f.value[locale]}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: "flex", paddingRight: 6 }}>{visual}</div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingTop: 18,
              borderTop: "1px solid rgba(255,255,255,0.12)",
              fontSize: 16,
              color: "rgba(255,255,255,0.55)",
            }}
          >
            <div style={{ display: "flex" }}>African Digit Consulting</div>
            <div style={{ display: "flex", letterSpacing: "0.04em" }}>{url}</div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Fraunces", data: fraunces, style: "normal", weight: 600 },
        { name: "Poppins", data: poppins, style: "normal", weight: 500 },
        { name: "Poppins Regular", data: poppinsRegular, style: "normal", weight: 400 },
      ],
    },
  );
}
