"use client";

import { BlogArticleLayout } from "@/components/sections/blog-article-layout";
import { BlogGallery } from "@/components/gallery/blog-gallery";

export default function WouriActionClimatiqueArticlePageEn() {
  return (
    <BlogArticleLayout
      title="WOURI and climate action: a working session at SODEXAM."
      subtitle="A look back at a professional meeting focused on the last mile of weather, agricultural and climate information."
      eyebrow="Blog · Events · July 26, 2026"
      breadcrumbs={[
        { label: "Blog", href: "/blog" },
        {
          label: "WOURI and climate action",
          href: "/blog/wouri-action-climatique-sodexam",
        },
      ]}
      hero={{
        src: "/img/blog/wouri-action-climatique-sodexam/hero.webp",
        alt: "Group photo during a working session at SODEXAM on climate action",
      }}
      cta={{
        title:
          "Working on agriculture, weather information or climate resilience?",
        description:
          "WOURI is designed to bring useful information closer to the people who need it in the field.",
        label: "Discover WOURI",
        href: "/nos-realisations/wouri",
      }}
    >
      <article className="py-12 md:py-16">
        <div className="mx-auto max-w-3xl space-y-8 px-6 text-lg leading-relaxed text-neutral-800">
          <p className="font-serif text-2xl leading-snug font-light text-neutral-900 italic md:text-3xl">
            In Abidjan, ADC was received at SODEXAM to present WOURI and open a
            practical discussion around a decisive question: how can weather,
            agricultural and climate information become more useful for
            producers?
          </p>

          <p>
            This meeting followed a formal approach initiated by our team. We
            will keep only the essential public lesson here: WOURI addresses a
            very clear need, the last mile of information. A forecast, alert or
            advisory only creates value when it reaches people at the right
            time, in an understandable format, through a channel they already
            use.
          </p>

          <h2 className="pt-4 font-serif text-3xl leading-tight font-medium text-neutral-950 md:text-4xl">
            Connecting data to the field.
          </h2>

          <p>
            Climate services are progressing, forecasting capacity is improving
            and data is becoming more structured. The next challenge is useful
            delivery: turning reliable information into a simple, contextual,
            attributed and actionable message for a cooperative, field agent or
            producer.
          </p>

          <p>
            This is exactly the role we want WOURI to play: a voice-first,
            multilingual interface between producers, validated sources and
            useful services. The producer asks a question in their language,
            WOURI understands the context, consults controlled sources and
            returns a clear answer with the right safeguards.
          </p>

          <blockquote className="my-10 border-l-2 border-orange-500 pl-6 font-serif text-2xl leading-snug font-light text-neutral-900 italic md:pl-8 md:text-3xl">
            WOURI does not invent the weather or agronomic science. It
            orchestrates, explains and distributes useful information while
            keeping human expertise where it is needed.
          </blockquote>

          <h2 className="pt-4 font-serif text-3xl leading-tight font-medium text-neutral-950 md:text-4xl">
            What we take away.
          </h2>

          <p>
            This working session confirmed the importance of building bridges
            between climate data, domain expertise and user experience. The
            needs are concrete: anticipate risks, better understand seasons,
            support agricultural decisions, make alerts clearer and better
            measure how they are received in the field.
          </p>

          <p>
            We are intentionally keeping operational details out of this note.
            The public takeaway is simple: climate challenges require serious
            collaboration, clear responsibilities and tools designed with the
            people who will use them.
          </p>

          <p className="text-base text-neutral-500">
            Photos: working session at SODEXAM around climate action and
            digital use cases.
          </p>
        </div>
      </article>

      <BlogGallery
        eyebrow="Gallery · Climate action"
        columns={2}
        aspect="landscape"
        images={[
          {
            src: "/img/blog/wouri-action-climatique-sodexam/1.webp",
            alt: "Participants gathered at SODEXAM during the WOURI meeting",
          },
          {
            src: "/img/blog/wouri-action-climatique-sodexam/2.webp",
            alt: "Group photo during a working session on climate issues",
          },
        ]}
      />
    </BlogArticleLayout>
  );
}
