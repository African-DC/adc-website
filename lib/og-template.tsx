import { ImageResponse } from "next/og";
import { getArticleBySlug } from "@/lib/blog";

export const alt = "African Digit Consulting — Blog";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadGoogleFont(
  family: string,
  weight: number,
): Promise<ArrayBuffer> {
  const url = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(
    family,
  )}:wght@${weight}&display=swap`;
  const css = await fetch(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
    },
  }).then((res) => res.text());

  const match = css.match(
    /src:\s*url\((https:[^)]+?)\)\s*format\('(?:opentype|truetype)'\)/,
  );
  if (!match) {
    throw new Error(`Could not resolve TTF URL for ${family} ${weight}`);
  }
  const fontRes = await fetch(match[1]);
  if (!fontRes.ok) {
    throw new Error(`Failed to fetch font ${family} ${weight}`);
  }
  return fontRes.arrayBuffer();
}

export async function createBlogOgImage(slug: string) {
  const article = getArticleBySlug(slug);
  const title = article?.title ?? "African Digit Consulting";
  const category = article?.category ?? "Blog";
  const date = article?.publishedAtDisplay ?? "";
  const author = article?.author.name ?? "African Digit Consulting";

  const [frauncesBold, poppinsMedium] = await Promise.all([
    loadGoogleFont("Fraunces", 600),
    loadGoogleFont("Poppins", 500),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#0a0a0a",
          fontFamily: "Poppins",
          position: "relative",
          color: "#ffffff",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -220,
            right: -180,
            width: 620,
            height: 620,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,148,43,0.45) 0%, rgba(255,148,43,0) 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -140,
            left: -120,
            width: 420,
            height: 420,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,148,43,0.18) 0%, rgba(255,148,43,0) 70%)",
            display: "flex",
          }}
        />

        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            padding: "72px 80px",
            height: "100%",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <div
              style={{
                display: "flex",
                fontFamily: "Fraunces",
                fontSize: 44,
                fontWeight: 600,
                letterSpacing: "-0.02em",
                color: "#ffffff",
              }}
            >
              ADC
            </div>
            <div
              style={{
                display: "flex",
                width: 40,
                height: 2,
                background: "#ff942b",
              }}
            />
            <div
              style={{
                display: "flex",
                fontSize: 18,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.75)",
              }}
            >
              African Digit Consulting
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 28,
              maxWidth: 1040,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                fontSize: 20,
                color: "#ff942b",
                textTransform: "uppercase",
                letterSpacing: "0.22em",
                fontWeight: 500,
              }}
            >
              <span>{category}</span>
              {date ? (
                <>
                  <span
                    style={{
                      display: "flex",
                      width: 4,
                      height: 4,
                      borderRadius: "50%",
                      background: "rgba(255,148,43,0.6)",
                    }}
                  />
                  <span style={{ color: "rgba(255,255,255,0.65)" }}>
                    {date}
                  </span>
                </>
              ) : null}
            </div>
            <div
              style={{
                display: "flex",
                fontFamily: "Fraunces",
                fontSize: 64,
                fontWeight: 600,
                lineHeight: 1.1,
                letterSpacing: "-0.015em",
                color: "#ffffff",
              }}
            >
              {title}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingTop: 28,
              borderTop: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 20,
                color: "rgba(255,255,255,0.82)",
                fontWeight: 500,
              }}
            >
              {author}
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 18,
                color: "rgba(255,255,255,0.55)",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              africandigitconsulting.com
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Fraunces",
          data: frauncesBold,
          style: "normal",
          weight: 600,
        },
        {
          name: "Poppins",
          data: poppinsMedium,
          style: "normal",
          weight: 500,
        },
      ],
    },
  );
}
