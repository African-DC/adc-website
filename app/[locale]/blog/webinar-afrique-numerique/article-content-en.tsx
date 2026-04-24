"use client";

import { BlogArticleLayout } from "@/components/sections/blog-article-layout";

export default function WebinarAfriqueArticlePageEn() {
  return (
    <BlogArticleLayout
      title="Webinar: a vision for Digital Africa."
      subtitle="Our team took the floor to share its reading of the challenges and opportunities of digital in French-speaking Africa."
      eyebrow="Blog · Vision"
      breadcrumbs={[
        { label: "Blog", href: "/blog" },
        {
          label: "Digital Africa Webinar",
          href: "/blog/webinar-afrique-numerique",
        },
      ]}
      hero={{
        src: "/img/blog/webinar-afrique-affiche.webp",
        alt: "Official poster of the ADC webinar on Digital Africa",
      }}
      cta={{
        title: "Want to continue the conversation?",
        label: "Write to us",
      }}
    >
      <article className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-6 space-y-7 text-neutral-800 text-lg leading-relaxed">
          <p className="font-serif text-2xl md:text-3xl italic font-light text-neutral-900 leading-snug">
            Digital Africa is often told in two speeds: either as a
            technological El Dorado, or as a continent falling behind.
            The reality is elsewhere, more fragmented, more concrete.
          </p>

          <p>
            In this webinar, we shared with our community a grounded
            reading of digital Africa — the way we see it from Abidjan,
            the way our clients experience it daily in their professions.
          </p>

          <h2 className="font-serif text-3xl md:text-4xl font-medium text-neutral-950 leading-tight pt-4">
            Three angles to understand.
          </h2>

          <p>
            We structured the webinar around three questions that
            constantly come up in our conversations with partners and
            clients.
          </p>

          <div className="my-8 space-y-6">
            <div>
              <h3 className="font-serif text-xl font-medium text-neutral-950 mb-2">
                What digital sovereignty for Africa?
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                Cloud, hosting, sensitive data. A strategic field for
                governments and private companies handling critical data.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl font-medium text-neutral-950 mb-2">
                How does AI serve the continent?
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                Between consumer tools and business applications, we
                shared how we concretely use it in our projects (KLASSCI,
                WOURI).
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl font-medium text-neutral-950 mb-2">
                Where does real digital transformation happen?
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                Rarely in big announcements. More often in the small
                daily decisions of SMEs, schools, NGOs who adopt tools to
                save time and better serve their users.
              </p>
            </div>
          </div>

          <blockquote className="font-serif my-10 border-l-2 border-orange-500 pl-6 md:pl-8 italic text-2xl md:text-3xl font-light text-neutral-900 leading-snug">
            Digital Africa is not waiting for others to tell its story.
            It needs builders, here, working with its constraints.
          </blockquote>

          <h2 className="font-serif text-3xl md:text-4xl font-medium text-neutral-950 leading-tight pt-4">
            What we take away.
          </h2>

          <p>
            Exchanges with participants were rich. A shared observation:
            Digital Africa is moving forward, unevenly. Countries that
            invested in infrastructure, training and clear regulation are
            pulling ahead. Côte d&apos;Ivoire is well positioned on those
            three axes, which explains the buzz currently observed in
            Abidjan.
          </p>

          <p>
            For us, the vision remains the same. Build useful products,
            rooted in local realities, that deliver measurable change to
            their users. The rest will follow.
          </p>
        </div>
      </article>
    </BlogArticleLayout>
  );
}
