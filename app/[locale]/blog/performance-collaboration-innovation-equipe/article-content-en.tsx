"use client";

import { BlogGallery } from "@/components/gallery/blog-gallery";
import { BlogArticleLayout } from "@/components/sections/blog-article-layout";

const GALLERY_IMAGES = [
  {
    src: "/img/blog/performance-collaboration-innovation-equipe/2.webp",
    alt: "Presentation of a digital solution during an ADC meeting",
  },
  {
    src: "/img/blog/performance-collaboration-innovation-equipe/3.webp",
    alt: "ADC team gathered for a collaborative working session",
  },
  {
    src: "/img/blog/performance-collaboration-innovation-equipe/4.webp",
    alt: "ADC team members following a product demonstration",
  },
  {
    src: "/img/blog/performance-collaboration-innovation-equipe/5.webp",
    alt: "ADC working session with laptops and presentation screen",
  },
];

export default function PerformanceEquipeArticlePageEn() {
  return (
    <BlogArticleLayout
      title="Performance, collaboration and innovation: the rhythm of a team moving forward."
      subtitle="A look back at a working session focused on continuous improvement, team coordination and building stronger digital solutions."
      eyebrow="Blog · Events · June 26, 2026"
      breadcrumbs={[
        { label: "Blog", href: "/blog" },
        {
          label: "Team performance",
          href: "/blog/performance-collaboration-innovation-equipe",
        },
      ]}
      hero={{
        src: "/img/blog/performance-collaboration-innovation-equipe/1.webp",
        alt: "ADC team gathered for a performance review session",
      }}
      cta={{
        title:
          "Do you want to structure your digital operations with a team that understands the field?",
        description:
          "We design business tools built around the real constraints of African organisations.",
        label: "Talk to our team",
      }}
    >
      <article className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-6 space-y-8 text-neutral-800 text-lg leading-relaxed">
          <p className="font-serif text-2xl md:text-3xl italic font-light text-neutral-900 leading-snug">
            Performance is rarely built through big statements. It is built
            through regular checkpoints, followed decisions, honest feedback
            and a team's ability to learn faster than its own blockers.
          </p>

          <p>
            At African Digit Consulting, every weekend is an opportunity to
            slow down the operational rhythm and look at the work clearly.
            What did we ship? What is blocking? What did we learn from users,
            clients, tests and demonstrations? Which decisions must be made
            before the next sequence?
          </p>

          <p>
            This working session is part of that discipline. A team gathered
            around a shared objective: improve our performance, strengthen
            our collaboration and keep innovating with more method.
          </p>

          <h2 className="font-serif text-3xl md:text-4xl font-medium text-neutral-950 leading-tight pt-4">
            Align before accelerating.
          </h2>

          <p>
            A startup can quickly confuse motion with progress. Tasks move
            forward, meetings pile up, requests come in, emergencies change
            shape. Without time for alignment, a team can work a lot without
            learning enough.
          </p>

          <p>
            That is why these checkpoints matter. They reconnect technical
            choices to business needs, customer feedback to product
            priorities, and commercial ambitions to the real delivery
            capacity. Sustainable performance often starts with a simple
            question: are we all solving the same problem?
          </p>

          <div className="my-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-neutral-200 p-5 bg-neutral-50">
              <div className="text-xs tracking-[0.18em] uppercase text-orange-600 mb-3">
                Observe
              </div>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Review deliveries, feedback and weak signals.
              </p>
            </div>
            <div className="rounded-xl border border-neutral-200 p-5 bg-neutral-50">
              <div className="text-xs tracking-[0.18em] uppercase text-orange-600 mb-3">
                Decide
              </div>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Turn observations into concrete, actionable priorities.
              </p>
            </div>
            <div className="rounded-xl border border-neutral-200 p-5 bg-neutral-50">
              <div className="text-xs tracking-[0.18em] uppercase text-orange-600 mb-3">
                Ship
              </div>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Execute with clear responsibility and a quality standard.
              </p>
            </div>
          </div>

          <h2 className="font-serif text-3xl md:text-4xl font-medium text-neutral-950 leading-tight pt-4">
            Behind every solution, a team.
          </h2>

          <p>
            The digital products we build are not created in isolation. They
            take shape through exchanges between design, development,
            integration, customer follow-up, strategy and leadership. A
            successful feature depends as much on code quality as on a clear
            need, precise testing and the ability to make the right decision
            at the right time.
          </p>

          <p>
            The images from this session tell a simple story: innovation is
            collective. It requires questioning, useful disagreement,
            listening and constant attention to the real impact of the
            solutions we put in the hands of organisations.
          </p>

          <blockquote className="font-serif my-12 border-l-2 border-orange-500 pl-6 md:pl-8 italic text-2xl md:text-3xl font-light text-neutral-900 leading-snug">
            Growing means learning, adapting and progressing together.
          </blockquote>

          <h2 className="font-serif text-3xl md:text-4xl font-medium text-neutral-950 leading-tight pt-4">
            A method built for the long run.
          </h2>

          <p>
            Digital transformation in Africa is not only about launching
            platforms. It means maintaining products, supporting users,
            integrating local constraints and improving journeys through real
            use. It is long-term work.
          </p>

          <p>
            To hold that level of ambition, the team must become its own
            continuous improvement system. That is what these sessions
            install: a culture where we measure, adjust, share learnings and
            where everyone better understands their role in collective
            success.
          </p>

          <p>
            Source: LinkedIn post by Abel Josias BEDE published on June 26,
            2026, available{" "}
            <a
              href="https://fr.linkedin.com/posts/abel-josias-bede-2372a0255_innovation-teamwork-performance-activity-7476391483387006976-htkL"
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
        eyebrow="Gallery · ADC team session"
        columns={4}
        aspect="landscape"
        images={GALLERY_IMAGES}
      />
    </BlogArticleLayout>
  );
}
