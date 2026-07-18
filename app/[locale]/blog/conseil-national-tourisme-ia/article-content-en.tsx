"use client";

import { BlogGallery } from "@/components/gallery/blog-gallery";
import { BlogArticleLayout } from "@/components/sections/blog-article-layout";

const GALLERY_IMAGES = [
  {
    src: "/img/blog/conseil-national-tourisme-ia/2.webp",
    alt: "Abel Josias BEDE in the audience at the National Tourism Council",
  },
  {
    src: "/img/blog/conseil-national-tourisme-ia/3.webp",
    alt: "Panel at the formal opening of the National Tourism Council",
  },
  {
    src: "/img/blog/conseil-national-tourisme-ia/4.webp",
    alt: "Institutional guests during the National Tourism Council session",
  },
  {
    src: "/img/blog/conseil-national-tourisme-ia/5.webp",
    alt: "View of the room during the National Tourism Council formal opening",
  },
];

export default function ConseilNationalTourismeArticlePageEn() {
  return (
    <BlogArticleLayout
      title="Tourism 2030: AI serving hospitality and tourism performance."
      subtitle="Abel Josias BEDE joined the formal opening and first session of the National Tourism Council to share a vision of AI applied to Ivorian tourism."
      eyebrow="Blog · Events · June 23, 2026"
      breadcrumbs={[
        { label: "Blog", href: "/blog" },
        {
          label: "Tourism 2030",
          href: "/blog/conseil-national-tourisme-ia",
        },
      ]}
      hero={{
        src: "/img/blog/conseil-national-tourisme-ia/1.webp",
        alt: "Abel Josias BEDE speaking as a panelist at the National Tourism Council",
      }}
      cta={{
        title:
          "Are you preparing a digital transformation project in tourism, hospitality or services?",
        description:
          "We can help you structure your data, customer journeys and business tools.",
        label: "Talk to ADC",
      }}
    >
      <article className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-6 space-y-8 text-neutral-800 text-lg leading-relaxed">
          <p className="font-serif text-2xl md:text-3xl italic font-light text-neutral-900 leading-snug">
            Tourism competitiveness no longer depends only on the beauty of a
            destination. It also depends on the quality of data, the fluidity
            of services and the ability of operators to personalise the
            experience before, during and after the trip.
          </p>

          <p>
            With that perspective, Abel Josias BEDE, General Manager of
            African Digit Consulting, took part as a panelist in the formal
            opening and first session of the National Tourism Council. His
            contribution focused on a topic that has become central for the
            sector: the impact of artificial intelligence on tourism and
            hospitality performance.
          </p>

          <p>
            Ivorian tourism is entering a period where digital transformation
            is no longer a side project. It is becoming a condition for
            steering, differentiation and competitiveness. Destinations that
            know how to use their data better understand traveller
            expectations. Hotels that automate repetitive work free up time
            for hospitality, follow-up and service quality.
          </p>

          <h2 className="font-serif text-3xl md:text-4xl font-medium text-neutral-950 leading-tight pt-4">
            Data as the starting point.
          </h2>

          <p>
            Talking about artificial intelligence in tourism does not mean
            starting with spectacular tools. The starting point is more
            concrete: collecting, structuring and connecting data that
            already exists. Bookings, occupancy rates, seasonality, reasons
            for visiting, customer reviews, consumption habits, recurring
            requests and service incidents.
          </p>

          <p>
            Taken separately, these elements remain scattered traces. Brought
            together, they become a decision-making base. They make it
            possible to anticipate activity peaks, improve offers, better
            allocate teams and detect the friction points that weaken the
            traveller experience.
          </p>

          <div className="my-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-neutral-200 p-5 bg-neutral-50">
              <div className="text-xs tracking-[0.18em] uppercase text-orange-600 mb-3">
                Data
              </div>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Centralise useful signals to better understand demand and
                seasonality.
              </p>
            </div>
            <div className="rounded-xl border border-neutral-200 p-5 bg-neutral-50">
              <div className="text-xs tracking-[0.18em] uppercase text-orange-600 mb-3">
                Automation
              </div>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Reduce repetitive work and make daily operations more
                reliable.
              </p>
            </div>
            <div className="rounded-xl border border-neutral-200 p-5 bg-neutral-50">
              <div className="text-xs tracking-[0.18em] uppercase text-orange-600 mb-3">
                Experience
              </div>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Personalise journeys and respond faster to traveller needs.
              </p>
            </div>
          </div>

          <h2 className="font-serif text-3xl md:text-4xl font-medium text-neutral-950 leading-tight pt-4">
            AI as an operational lever.
          </h2>

          <p>
            In hospitality, AI can help adjust pricing, predict occupancy,
            prioritise customer requests, analyse reviews or assist teams in
            managing bookings. In tourism promotion, it can help segment
            audiences, personalise recommendations and identify the content
            that truly triggers interest.
          </p>

          <p>
            But technology only creates value when it integrates with the
            work. An AI model that does not understand local constraints,
            languages, booking habits or connectivity realities remains a
            peripheral tool. To create performance, the starting point must be
            the field, not a demo.
          </p>

          <blockquote className="font-serif my-12 border-l-2 border-orange-500 pl-6 md:pl-8 italic text-2xl md:text-3xl font-light text-neutral-900 leading-snug">
            Innovation is no longer optional. It is becoming a driver of
            competitiveness for Ivorian tourism by 2030.
          </blockquote>

          <h2 className="font-serif text-3xl md:text-4xl font-medium text-neutral-950 leading-tight pt-4">
            What we take away.
          </h2>

          <p>
            This gathering confirms a strong conviction at ADC: service
            sectors need digital tools that bring strategy and execution
            closer together. Tourism, more than many other sectors, lives in
            the details. A faster answer, better anticipation, a clearer
            journey or better shared information can change the perception of
            a destination.
          </p>

          <p>
            The point is not to talk about AI as a trend. The point is to
            build systems that help institutions, hotels, agencies and
            cultural operators work with greater precision.
          </p>

          <p>
            Source: LinkedIn post by Abel Josias BEDE published on June 23,
            2026, available{" "}
            <a
              href="https://fr.linkedin.com/posts/abel-josias-bede-2372a0255_tourisme-intelligenceartificielle-innovation-activity-7475112052383023104-tuBB"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              here
            </a>
            .
          </p>
        </div>
      </article>

      <BlogGallery
        eyebrow="Gallery · National Tourism Council"
        columns={4}
        aspect="landscape"
        images={GALLERY_IMAGES}
      />
    </BlogArticleLayout>
  );
}
