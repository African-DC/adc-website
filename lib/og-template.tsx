import { getArticleBySlug, localize, type BlogLocale } from "@/lib/blog";
import {
  ADC_ORANGE,
  ADC_THEME,
  Footer,
  Glows,
  Header,
  OG_CONTENT_TYPE,
  OG_SIZE,
  assetUri,
  displayUrl,
  photoUri,
  renderOg,
} from "@/lib/og/kit";

/**
 * Image de partage d'un article : le titre à gauche, la photo de l'article à
 * droite, recadrée avec le même `hero.position` que sur le site pour que les
 * visages restent dans le cadre.
 */

export const alt = "African Digit Consulting — Blog";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

const PHOTO_WIDTH = 500;

function titleSize(title: string): number {
  if (title.length > 80) return 42;
  if (title.length > 60) return 48;
  if (title.length > 40) return 54;
  return 60;
}

export async function createBlogOgImage(slug: string, locale: BlogLocale = "fr") {
  const article = getArticleBySlug(slug);
  const title = article ? localize(article.title, locale) : "African Digit Consulting";
  const category = article ? localize(article.category, locale) : "Blog";
  const date = article ? localize(article.publishedAtDisplay, locale) : "";
  const author = article?.author.name ?? "African Digit Consulting";

  const [adcLogo, photo] = await Promise.all([
    assetUri("adc-logo.png"),
    article
      ? photoUri(article.hero.src, PHOTO_WIDTH, OG_SIZE.height, article.hero.position)
      : Promise.resolve(null),
  ]);

  return renderOg(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        background: ADC_THEME.bg,
        fontFamily: "Poppins",
        color: "#ffffff",
      }}
    >
      <Glows theme={ADC_THEME} />

      {photo ? (
        <div style={{ position: "absolute", top: 0, right: 0, display: "flex", width: PHOTO_WIDTH, height: "100%" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={photo} width={PHOTO_WIDTH} height={OG_SIZE.height} alt="" />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: 220,
              height: OG_SIZE.height,
              display: "flex",
              backgroundImage: "linear-gradient(to right, rgba(11,10,9,1), rgba(11,10,9,0.6), rgba(11,10,9,0))",
            }}
          />
        </div>
      ) : null}

      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          width: photo ? 1200 - PHOTO_WIDTH + 30 : "100%",
          height: "100%",
          padding: "44px 70px 36px 60px",
        }}
      >
        <Header adcLogo={adcLogo} eyebrow="Blog" />

        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", flex: 1, gap: 22 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              fontSize: 16,
              letterSpacing: "0.14em",
              whiteSpace: "nowrap",
              textTransform: "uppercase",
            }}
          >
            <div
              style={{
                display: "flex",
                flexShrink: 0,
                padding: "6px 14px",
                borderRadius: 999,
                background: "rgba(255,148,43,0.16)",
                border: "1px solid rgba(255,148,43,0.4)",
                color: ADC_ORANGE,
              }}
            >
              {category}
            </div>
            {date ? <div style={{ display: "flex", flexShrink: 0, color: "rgba(255,255,255,0.62)" }}>{date}</div> : null}
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: "Fraunces",
              fontSize: titleSize(title),
              lineHeight: 1.1,
              letterSpacing: "-0.015em",
            }}
          >
            {title}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 19, color: "rgba(255,255,255,0.8)" }}>
            <div style={{ display: "flex", width: 28, height: 2, background: ADC_ORANGE }} />
            {author}
          </div>
        </div>

        <Footer url={displayUrl("blog", locale)} />
      </div>
    </div>,
  );
}
