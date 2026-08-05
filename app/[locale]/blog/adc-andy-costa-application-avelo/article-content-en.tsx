"use client";

import { BlogArticleLayout } from "@/components/sections/blog-article-layout";
import { BlogGallery } from "@/components/gallery/blog-gallery";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";

export default function AdcAndyCostaAveloArticlePageEn() {
  return (
    <BlogArticleLayout
      title="From WOURI to AVELO: ADC and Andy Costa imagine digital in service of the green transition."
      subtitle="During a meeting with eco-entrepreneur Andy Costa, ADC shared its vision of impact-driven innovation and laid the first foundations for a collaboration around the AVELO app."
      eyebrow="Blog · Meetings & New Projects · July 31, 2026"
      breadcrumbs={[
        { label: "Blog", href: "/blog" },
        {
          label: "ADC × Andy Costa — AVELO",
          href: "/blog/adc-andy-costa-application-avelo",
        },
      ]}
      hero={{
        src: "/img/blog/adc-andy-costa-application-avelo/hero.webp",
        alt: "The African Digit Consulting team with Andy Costa, recognisable by his green helmet, during their meeting in Abidjan",
        position: "50% 15%",
      }}
      cta={{
        title: "Working on a project with environmental or social impact?",
        description:
          "We support project leaders from the initial need all the way to a complete digital solution.",
        label: "Let's talk about your project",
        href: "/contact",
      }}
    >
      <article className="py-12 md:py-16">
        <div className="mx-auto max-w-3xl space-y-8 px-6 text-lg leading-relaxed text-neutral-800">
          <p className="font-serif text-2xl leading-snug font-light text-neutral-900 italic md:text-3xl">
            In Abidjan, our team met Andy Costa, an eco-entrepreneur and
            ambassador of cycling in Africa. From that exchange came a shared
            conviction: digital can accelerate the sustainable initiatives being
            designed across the continent.
          </p>

          <p>
            Founder of MyDream For Africa and recognisable by his green helmet,
            Andy Costa has worked for years to make the bicycle far more than a
            means of transport — a tool for sustainable mobility, environmental
            awareness and economic activity. It is also the conviction that guides
            our work: technology only holds value when it answers a real need and
            durably serves communities.
          </p>

          <h2 className="pt-4 font-serif text-3xl leading-tight font-medium text-neutral-950 md:text-4xl">
            Where digital meets ecological commitment.
          </h2>

          <p>
            The conversation focused on what digital can bring to African
            environmental projects. We presented WOURI, our agritech and
            climate-tech solution: a producer asks a question in writing or by
            voice, WOURI interprets the context, consults controlled sources and
            returns a simple answer, progressively available in several local
            languages — with WhatsApp as its primary channel, alongside web,
            mobile and calls.
          </p>

          <aside className="flex flex-col gap-4 border-y border-neutral-200 py-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-neutral-950">
                New to WOURI?
              </p>
              <p className="mt-1 text-base text-neutral-600">
                Its role, workflow and safeguards are explained in our full case
                study.
              </p>
            </div>
            <Link
              href="/nos-realisations/wouri"
              className="inline-flex min-h-11 shrink-0 items-center gap-2 font-semibold text-orange-600 transition-colors hover:text-orange-700"
            >
              Discover WOURI
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </aside>

          <p>
            Beyond agriculture, WOURI embodies our approach: accessible
            technologies, rooted in local realities and able to support concrete
            change.
          </p>

          <h2 className="pt-4 font-serif text-3xl leading-tight font-medium text-neutral-950 md:text-4xl">
            AVELO: a digital dimension for green mobility.
          </h2>

          <p>
            From that exchange came a prospect for collaboration. Andy Costa asked
            African Digit Consulting to explore AVELO, an app to manage and grow
            his bicycle fleet. Led by him, the initiative began with a pilot
            deployment at Banco National Park in February 2026, with a first fleet
            of around ten bikes, ahead of a gradual rollout to other reserves and
            natural sites across Côte d'Ivoire.
          </p>

          <p>
            The point is not merely to build a mobile app, but to turn a physical
            fleet into a service that is structured and easy to steer:
            registering bikes, rentals and reservations, maintenance, revenue
            tracking, usage statistics and a progressive measure of environmental
            and social impact. The platform could bring together a simple
            experience for users, a dedicated space for field agents and a
            dashboard for overall steering of the activity.
          </p>

          <h2 className="pt-4 font-serif text-3xl leading-tight font-medium text-neutral-950 md:text-4xl">
            Two projects, one shared philosophy.
          </h2>

          <p>
            WOURI and AVELO operate in different sectors — agriculture on one side,
            soft mobility on the other — yet rest on the same idea: putting
            technology at the service of a sustainable solution, to make it more
            accessible, more effective and closer to its users.
          </p>

          <blockquote className="my-10 border-l-2 border-orange-500 pl-6 font-serif text-2xl leading-snug font-light text-neutral-900 italic md:pl-8 md:text-3xl">
            In both cases, digital is not an end in itself. It becomes a way to
            organise, simplify and amplify an impact-driven initiative.
          </blockquote>

          <h2 className="pt-4 font-serif text-3xl leading-tight font-medium text-neutral-950 md:text-4xl">
            Building on solid foundations.
          </h2>

          <p>
            The next step will be a scoping phase with Andy Costa and the AVELO
            teams, to clarify the fleet's composition, the operating sites, how
            rentals work, the payment methods and the impact indicators to track.
            The goal: define a minimum viable product focused on the essentials,
            then evolve it based on real usage and field feedback.
          </p>

          <p>
            With WOURI, we bring climate information closer to producers. With
            AVELO, we want to bring green mobility closer to its users — because
            environmental challenges call for concrete answers, built with the
            people who carry them.
          </p>

          <p className="text-base text-neutral-500">
            Photo: working meeting between African Digit Consulting and Andy
            Costa, Abidjan.
          </p>
        </div>
      </article>

      <BlogGallery
        eyebrow="Gallery · The meeting"
        columns={2}
        aspect="portrait"
        images={[
          {
            src: "/img/blog/adc-andy-costa-application-avelo/hero.webp",
            alt: "The African Digit Consulting team with Andy Costa, recognisable by his green helmet, during their meeting in Abidjan",
          },
        ]}
      />
    </BlogArticleLayout>
  );
}
