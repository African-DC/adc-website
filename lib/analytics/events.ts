export type ShareChannel =
  | "native"
  | "whatsapp"
  | "linkedin"
  | "x"
  | "facebook"
  | "email"
  | "copy";

export type CaseStudyProject = "klassci" | "wouri";

export type AnalyticsEvent =
  | { name: "nav_click"; props: { item: string; location: "desktop" | "mobile_drawer" } }
  | { name: "mobile_menu_opened"; props: { page: string } }
  | { name: "language_switched"; props: { from: "fr" | "en"; to: "fr" | "en"; page: string } }

  | { name: "home_hero_cta_click"; props: { cta: string; destination: string } }
  | { name: "home_project_click"; props: { project: CaseStudyProject } }
  | { name: "home_services_click"; props: { service: string } }
  | { name: "home_team_card_click"; props: { member: string } }

  | { name: "blog_article_card_click"; props: { slug: string; position: "featured" | "list"; list_index?: number } }
  | { name: "blog_article_view"; props: { slug: string; locale: "fr" | "en"; category: string } }
  | { name: "blog_article_share_open"; props: { slug: string } }
  | { name: "blog_article_share_click"; props: { slug: string; channel: ShareChannel } }
  | { name: "blog_article_share_success"; props: { slug: string; channel: ShareChannel } }
  | { name: "blog_gallery_lightbox_open"; props: { slug?: string; image_index: number; total: number } }
  | { name: "blog_gallery_lightbox_navigate"; props: { slug?: string; direction: "prev" | "next" | "thumb"; target_index: number } }
  | { name: "blog_back_to_blog_click"; props: { slug: string } }
  | { name: "blog_cta_click"; props: { slug: string; cta_label: string; destination: string } }

  | { name: "newsletter_subscribe_attempt"; props: { source: string } }
  | { name: "newsletter_subscribe_success"; props: { source: string } }
  | { name: "newsletter_subscribe_error"; props: { source: string; error: string } }

  | { name: "case_study_view"; props: { project: CaseStudyProject; locale: "fr" | "en" } }
  | { name: "case_study_cta_click"; props: { project: CaseStudyProject; cta: string; destination: string } }
  | { name: "expertise_cta_click"; props: { cta: string; destination: string } }
  | { name: "about_team_visible"; props: Record<string, never> }

  | { name: "contact_form_focused"; props: { field: string } }
  | { name: "contact_form_submit_attempt"; props: { has_company: boolean; message_length_bucket: "<50" | "50-200" | "200+"; project_type?: string } }
  | { name: "contact_form_submit_success"; props: { project_type?: string } }
  | { name: "contact_form_submit_error"; props: { error: string } }
  | { name: "contact_phone_click"; props: { number_index: number } }
  | { name: "contact_email_click"; props: Record<string, never> }
  | { name: "contact_faq_expand"; props: { question_id: string } }

  | { name: "footer_link_click"; props: { destination: string; category: "nav" | "project" | "legal" | "contact" } }
  | { name: "footer_social_click"; props: { platform: "facebook" | "linkedin" } }

  | { name: "cta_click"; props: { label: string; location: string; destination: string } }
  | { name: "outbound_click"; props: { url: string; source: string } };

export type AnalyticsEventName = AnalyticsEvent["name"];

export type EventProps<N extends AnalyticsEventName> = Extract<
  AnalyticsEvent,
  { name: N }
>["props"];
