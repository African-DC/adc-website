"use client";

import { BlogArticleLayout } from "@/components/sections/blog-article-layout";
import { BlogGallery } from "@/components/gallery/blog-gallery";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";

export default function EquipeAdcVeloArticlePageEn() {
  return (
    <BlogArticleLayout
      title="Digital tested against the field: the ADC team takes to the bike."
      subtitle="An internal initiative where our team swaps the screen for handlebars, to experience soft mobility in Abidjan first-hand."
      eyebrow="Blog · Initiatives · August 5, 2026"
      breadcrumbs={[
        { label: "Blog", href: "/blog" },
        {
          label: "The ADC team on bikes",
          href: "/blog/equipe-adc-velo-mobilite-douce",
        },
      ]}
      hero={{
        src: "/img/blog/equipe-adc-velo-mobilite-douce/hero.webp",
        alt: "Three members of the African Digit Consulting team on bikes, helmets on, in Abidjan",
      }}
      cta={{
        title: "Working on a digital project grounded in reality?",
        description:
          "We design solutions shaped with the people who will actually use them.",
        label: "Let's talk about your project",
        href: "/contact",
      }}
    >
      <article className="py-12 md:py-16">
        <div className="mx-auto max-w-3xl space-y-8 px-6 text-lg leading-relaxed text-neutral-800">
          <p className="font-serif text-2xl leading-snug font-light text-neutral-900 italic md:text-3xl">
            Helmets on, three members of the ADC team took to the streets of
            Abidjan by bike. An internal initiative, with no cameras and no
            protocol — just a team going to see for itself.
          </p>

          <p>
            We spend most of our days designing interfaces, writing code and
            documenting user journeys. That is our craft. But it carries a quiet
            risk: ending up imagining uses from behind a screen, without ever
            experiencing them.
          </p>

          <h2 className="pt-4 font-serif text-3xl leading-tight font-medium text-neutral-950 md:text-4xl">
            Practising what we stand for.
          </h2>

          <p>
            We advocate for digital that is useful, frugal and adapted to African
            realities. It felt only consistent to hold our own organisation to the
            same standard, starting with a simple gesture: getting around
            differently. The bicycle is not merely a talking point about the green
            transition. It is a use case, with its own constraints and surprises.
          </p>

          <p>
            Riding through Abidjan, even over a short distance, teaches in minutes
            what no scoping note truly conveys: the real state of the road, the
            space left for cyclists, the heat depending on the hour, the gap
            between a distance on a map and the same distance actually travelled.
          </p>

          <aside className="flex flex-col gap-4 border-y border-neutral-200 py-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-neutral-950">
                How we work.
              </p>
              <p className="mt-1 text-base text-neutral-600">
                Understanding the context before proposing a solution: it is the
                common thread across our engagements.
              </p>
            </div>
            <Link
              href="/notre-expertise"
              className="inline-flex min-h-11 shrink-0 items-center gap-2 font-semibold text-orange-600 transition-colors hover:text-orange-700"
            >
              Discover our expertise
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </aside>

          <h2 className="pt-4 font-serif text-3xl leading-tight font-medium text-neutral-950 md:text-4xl">
            What the field teaches.
          </h2>

          <p>
            A constraint is better understood when it is lived. That holds for
            cycling as for every use case we design for: a producer checking
            weather information, a parent following a child's schooling, an agent
            entering a transaction at the end of the day. Behind every screen
            there is a context — an unstable connection, a shared phone, a moment
            in the day, a tiredness.
          </p>

          <blockquote className="my-10 border-l-2 border-orange-500 pl-6 font-serif text-2xl leading-snug font-light text-neutral-900 italic md:pl-8 md:text-3xl">
            You cannot properly design for a use you have never experienced.
          </blockquote>

          <p>
            This conviction guides our method: spending time with the people
            concerned, observing before proposing, testing early and accepting to
            revisit an idea when the field contradicts it. A bike ride obviously
            does not replace a usage study. It simply reminds us where the work
            must start.
          </p>

          <h2 className="pt-4 font-serif text-3xl leading-tight font-medium text-neutral-950 md:text-4xl">
            One team, one conviction.
          </h2>

          <p>
            Beyond method, there is the team. Going out together, moving
            differently and sharing a simple moment is also part of what we want
            to build: a company where environmental convictions do not stop at
            good intentions.
          </p>

          <p className="text-base text-neutral-500">
            Photos: soft-mobility initiative by the African Digit Consulting team,
            Abidjan.
          </p>
        </div>
      </article>

      <BlogGallery
        eyebrow="Gallery · Soft mobility"
        columns={4}
        aspect="portrait"
        images={[
          {
            src: "/img/blog/equipe-adc-velo-mobilite-douce/1.webp",
            alt: "The ADC team on bikes, helmets on, ready to set off",
          },
          {
            src: "/img/blog/equipe-adc-velo-mobilite-douce/2.webp",
            alt: "Wide view of the ADC team cycling in Abidjan at the end of the day",
          },
          {
            src: "/img/blog/equipe-adc-velo-mobilite-douce/3.webp",
            alt: "Two members of the ADC team in the saddle, helmets on, during the ride",
          },
          {
            src: "/img/blog/equipe-adc-velo-mobilite-douce/4.webp",
            alt: "Close-up of an ADC team member on a bike, helmet on and smiling, at the end of the day",
          },
        ]}
      />
    </BlogArticleLayout>
  );
}
