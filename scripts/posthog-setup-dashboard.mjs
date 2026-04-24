#!/usr/bin/env node
// One-off: seed the "ADC analitycs" dashboard with curated insights.
// Run: PH_TOKEN=phx_xxx node scripts/posthog-setup-dashboard.mjs

const TOKEN = process.env.PH_TOKEN;
if (!TOKEN) {
  console.error(
    "Missing PH_TOKEN env var. Get it from ~/.posthog/credentials.json or run `posthog-cli login`.",
  );
  process.exit(1);
}
const PROJECT_ID = 275078;
const DASHBOARD_ID = 1508541;
const HOST = "https://us.posthog.com";

const trend = (name, description, series, opts = {}) => ({
  name,
  description,
  query: {
    kind: "InsightVizNode",
    source: {
      kind: "TrendsQuery",
      series: series.map((s) => ({
        kind: "EventsNode",
        event: s.event,
        name: s.event,
        math: s.math ?? "total",
        ...(s.properties ? { properties: s.properties } : {}),
      })),
      interval: opts.interval ?? "day",
      dateRange: { date_from: opts.date_from ?? "-30d" },
      trendsFilter: {
        display: opts.display ?? "ActionsLineGraph",
      },
      ...(opts.breakdown
        ? {
            breakdownFilter: {
              breakdown: opts.breakdown,
              breakdown_type: opts.breakdown_type ?? "event",
            },
          }
        : {}),
    },
  },
  dashboards: [DASHBOARD_ID],
});

const funnel = (name, description, series) => ({
  name,
  description,
  query: {
    kind: "InsightVizNode",
    source: {
      kind: "FunnelsQuery",
      series: series.map((s) => ({
        kind: "EventsNode",
        event: s.event,
        name: s.event,
        ...(s.properties ? { properties: s.properties } : {}),
      })),
      dateRange: { date_from: "-30d" },
      funnelsFilter: {
        funnelOrderType: "ordered",
        funnelWindowInterval: 1,
        funnelWindowIntervalUnit: "hour",
      },
    },
  },
  dashboards: [DASHBOARD_ID],
});

const insights = [
  trend(
    "Pages vues — quotidien",
    "Total des pages vues par jour sur les 30 derniers jours.",
    [{ event: "$pageview" }],
  ),
  trend(
    "Top 10 pages",
    "Pages les plus visitées (par URL) sur 7 jours.",
    [{ event: "$pageview" }],
    {
      breakdown: "$current_url",
      date_from: "-7d",
      display: "ActionsBarValue",
    },
  ),
  trend(
    "Répartition FR / EN",
    "Pages vues décomposées par langue affichée.",
    [{ event: "$pageview" }],
    { breakdown: "locale", display: "ActionsPie", date_from: "-30d" },
  ),
  trend(
    "Articles les plus cliqués (blog)",
    "Clics sur les cartes d'articles dans /blog.",
    [{ event: "blog_article_card_click" }],
    { breakdown: "slug", display: "ActionsBarValue", date_from: "-30d" },
  ),
  trend(
    "Canaux de partage utilisés",
    "Quels boutons de partage les lecteurs utilisent réellement.",
    [{ event: "blog_article_share_click" }],
    { breakdown: "channel", display: "ActionsPie", date_from: "-30d" },
  ),
  trend(
    "Lightbox galerie — ouvertures",
    "Ouvertures de la lightbox image par article.",
    [{ event: "blog_gallery_lightbox_open" }],
    { breakdown: "slug", display: "ActionsBarValue", date_from: "-30d" },
  ),
  funnel(
    "Funnel — Formulaire de contact",
    "Page contact → focus formulaire → tentative de soumission → succès.",
    [
      {
        event: "$pageview",
        properties: [
          {
            key: "$current_url",
            value: "/contact",
            operator: "icontains",
            type: "event",
          },
        ],
      },
      { event: "contact_form_focused" },
      { event: "contact_form_submit_attempt" },
      { event: "contact_form_submit_success" },
    ],
  ),
  funnel(
    "Funnel — Newsletter",
    "Page blog → tentative d'inscription newsletter → succès.",
    [
      {
        event: "$pageview",
        properties: [
          {
            key: "$current_url",
            value: "/blog",
            operator: "icontains",
            type: "event",
          },
        ],
      },
      { event: "newsletter_subscribe_attempt" },
      { event: "newsletter_subscribe_success" },
    ],
  ),
  trend(
    "Case studies — KLASSCI vs WOURI",
    "Vues des études de cas, par projet.",
    [{ event: "case_study_view" }],
    { breakdown: "project", display: "ActionsBarValue", date_from: "-30d" },
  ),
  trend(
    "Switch de langue",
    "Combien d'utilisateurs changent activement la langue (FR ↔ EN).",
    [{ event: "language_switched" }],
    { breakdown: "to", display: "ActionsBarValue", date_from: "-30d" },
  ),
];

async function createInsight(payload) {
  const res = await fetch(
    `${HOST}/api/projects/${PROJECT_ID}/insights/`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    },
  );
  const text = await res.text();
  if (!res.ok) {
    return {
      ok: false,
      status: res.status,
      body: text.slice(0, 400),
    };
  }
  const data = JSON.parse(text);
  return { ok: true, id: data.id, short_id: data.short_id };
}

(async () => {
  const results = [];
  for (const insight of insights) {
    const r = await createInsight(insight);
    if (r.ok) {
      console.log(`✓ ${insight.name} → id=${r.id} (${r.short_id})`);
    } else {
      console.log(`✗ ${insight.name} → ${r.status}: ${r.body}`);
    }
    results.push({ name: insight.name, ...r });
  }
  const ok = results.filter((r) => r.ok).length;
  console.log(`\n${ok}/${results.length} insights created on dashboard ${DASHBOARD_ID}`);
})();
