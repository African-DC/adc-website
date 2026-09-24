import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import sharp from "sharp";
import type { ReactElement, ReactNode } from "react";

/**
 * Socle commun de toutes les images de partage (Open Graph / X) du site :
 * polices, en-tête signé ADC, pied de page, lecture des images.
 *
 * Les fichiers lus au rendu vivent dans `assets/og/` (visuels préparés pour le
 * partage) et `public/img/blog/` (photos des articles). Les deux dossiers sont
 * ajoutés aux fonctions déployées par `outputFileTracingIncludes`
 * (next.config.mjs) : sans cela, Vercel ne les embarquerait pas.
 */

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

export const ADC_ORANGE = "#ff942b";

export type OgTheme = { bg: string; glow: string; accent: string; soft: string };

export const ADC_THEME: OgTheme = {
  bg: "#0b0a09",
  glow: ADC_ORANGE,
  accent: "#ffc38a",
  soft: "rgba(255,148,43,0.14)",
};

async function loadGoogleFont(family: string, weight: number): Promise<ArrayBuffer> {
  const url = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(family)}:wght@${weight}&display=swap`;
  const css = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" },
  }).then((res) => res.text());
  const match = css.match(/src:\s*url\((https:[^)]+?)\)\s*format\('(?:opentype|truetype)'\)/);
  if (!match) throw new Error(`Could not resolve TTF URL for ${family} ${weight}`);
  const res = await fetch(match[1]);
  if (!res.ok) throw new Error(`Failed to fetch font ${family} ${weight}`);
  return res.arrayBuffer();
}

let fontsPromise: ReturnType<typeof fetchFonts> | null = null;

async function fetchFonts() {
  const [fraunces, poppins, poppinsRegular] = await Promise.all([
    loadGoogleFont("Fraunces", 600),
    loadGoogleFont("Poppins", 500),
    loadGoogleFont("Poppins", 400),
  ]);
  return [
    { name: "Fraunces", data: fraunces, style: "normal" as const, weight: 600 as const },
    { name: "Poppins", data: poppins, style: "normal" as const, weight: 500 as const },
    { name: "Poppins Regular", data: poppinsRegular, style: "normal" as const, weight: 400 as const },
  ];
}

function fonts() {
  fontsPromise ??= fetchFonts().catch((error) => {
    fontsPromise = null;
    throw error;
  });
  return fontsPromise;
}

/** Visuel préparé pour le partage, dans `assets/og/`. */
export async function assetUri(name: string): Promise<string> {
  const buffer = await readFile(join(process.cwd(), "assets/og", name));
  const mime = name.endsWith(".png") ? "image/png" : "image/jpeg";
  return `data:${mime};base64,${buffer.toString("base64")}`;
}

/**
 * Photo du site (chemin public, ex. `/img/blog/x/hero.webp`), recadrée et
 * convertie en JPEG : le moteur de rendu ne lit pas le WebP. `position` suit
 * la syntaxe CSS `object-position` en pourcentages (« 50% 20% »), la même que
 * le champ `hero.position` du catalogue du blog.
 */
export async function photoUri(
  src: string,
  width: number,
  height: number,
  position = "50% 50%",
): Promise<string> {
  const input = await readFile(join(process.cwd(), "public", src));
  const [px, py] = position
    .split(/\s+/)
    .map((v) => Math.min(1, Math.max(0, parseFloat(v) / 100)))
    .map((v) => (Number.isFinite(v) ? v : 0.5));
  const base = sharp(input).rotate();
  const meta = await base.metadata();
  const oriented = meta.orientation && meta.orientation >= 5;
  const iw = (oriented ? meta.height : meta.width) ?? width;
  const ih = (oriented ? meta.width : meta.height) ?? height;
  const scale = Math.max(width / iw, height / ih);
  const rw = Math.round(iw * scale);
  const rh = Math.round(ih * scale);
  const left = Math.round((rw - width) * (px ?? 0.5));
  const top = Math.round((rh - height) * (py ?? 0.5));
  const output = await base
    .resize(rw, rh)
    .extract({ left, top, width, height })
    .jpeg({ quality: 80 })
    .toBuffer();
  return `data:image/jpeg;base64,${output.toString("base64")}`;
}

export function Glows({ theme }: { theme: OgTheme }) {
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: -260,
          right: -160,
          width: 760,
          height: 760,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${theme.glow}80 0%, ${theme.glow}00 68%)`,
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
    </>
  );
}

export function StatusPill({ label, color }: { label: string; color: string }) {
  return (
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
      <div style={{ display: "flex", width: 10, height: 10, borderRadius: 5, background: color }} />
      {label}
    </div>
  );
}

export function Header({
  adcLogo,
  eyebrow,
  right,
}: {
  adcLogo: string;
  eyebrow: string;
  right?: ReactNode;
}) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
        <div style={{ display: "flex", padding: "8px 14px", borderRadius: 12, background: "#ffffff" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={adcLogo} width={112} height={54} alt="" />
        </div>
        <div style={{ display: "flex", width: 34, height: 2, background: ADC_ORANGE }} />
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
      {right ?? null}
    </div>
  );
}

export function Footer({ url }: { url: string }) {
  return (
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
  );
}

/** Adresse affichée en pied d'image, sans le préfixe `/fr` (locale par défaut). */
export function displayUrl(path: string, locale: "fr" | "en"): string {
  const clean = path.replace(/^\/+|\/+$/g, "");
  const prefix = locale === "en" ? "en" : "";
  return ["africandigitconsulting.com", prefix, clean].filter(Boolean).join("/");
}

/**
 * Cadre standard : fond, halos, en-tête ADC, contenu, pied de page.
 * `children` occupe la bande centrale.
 */
export function Frame({
  theme = ADC_THEME,
  adcLogo,
  eyebrow,
  headerRight,
  url,
  children,
  background,
}: {
  theme?: OgTheme;
  adcLogo: string;
  eyebrow: string;
  headerRight?: ReactNode;
  url: string;
  children: ReactNode;
  /** Calque posé entre le fond et le contenu (ex. photo pleine hauteur). */
  background?: ReactNode;
}) {
  return (
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
      <Glows theme={theme} />
      {background ?? null}
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
        <Header adcLogo={adcLogo} eyebrow={eyebrow} right={headerRight} />
        <div style={{ display: "flex", flex: 1, alignItems: "center", justifyContent: "space-between", gap: 44 }}>
          {children}
        </div>
        <Footer url={url} />
      </div>
    </div>
  );
}

export function Title({ children, size = 64 }: { children: ReactNode; size?: number }) {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        fontFamily: "Fraunces",
        fontSize: size,
        lineHeight: 1.08,
        letterSpacing: "-0.02em",
        color: "#ffffff",
      }}
    >
      {children}
    </div>
  );
}

export function Lead({ children, size = 25 }: { children: ReactNode; size?: number }) {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        fontFamily: "Poppins Regular",
        fontSize: size,
        lineHeight: 1.42,
        color: "rgba(255,255,255,0.84)",
      }}
    >
      {children}
    </div>
  );
}

export async function renderOg(node: ReactElement) {
  return new ImageResponse(node, { ...OG_SIZE, fonts: await fonts() });
}
