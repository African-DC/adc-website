"use client";

import { BlogArticleLayout } from "@/components/sections/blog-article-layout";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";

export default function AdcAndyCostaAveloArticlePageEn() {
  return (
    <BlogArticleLayout
      title="From WOURI to AVELO: ADC and Andy Costa imagine digital in service of the green transition."
      subtitle="During a meeting with eco-entrepreneur Andy Costa, ADC shared its vision of impact-driven innovation and laid the first foundations for a collaboration around the AVELO app."
      eyebrow="Blog · Meetings & New Projects · August 5, 2026"
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
            At African Digit Consulting, we hold a simple conviction: technology
            delivers its greatest value when it answers a real need, improves a
            concrete experience and durably contributes to the development of
            communities.
          </p>

          <p>
            It is in this spirit that our team recently met Andy Costa, an
            Ivorian eco-entrepreneur, founder of MyDream For Africa and a leading
            advocate for cycling and sustainable mobility in Africa.
          </p>

          <p>
            For several years, Andy Costa has worked to make the bicycle far more
            than a means of transport. Through his initiatives, he positions it as
            a tool for sustainable mobility, environmental awareness, economic
            activity and a better quality of life. His commitment to green
            transport, cycle lanes and cycling-related activities has been
            documented for years.
          </p>

          <h2 className="pt-4 font-serif text-3xl leading-tight font-medium text-neutral-950 md:text-4xl">
            Where digital innovation meets ecological commitment.
          </h2>

          <p>
            This meeting gave the African Digit Consulting team and Andy Costa a
            chance to discuss how digital can support environmental initiatives
            designed in Africa. Our team notably presented WOURI, the agritech and
            climate-tech solution built by ADC to make agricultural and climate
            information more accessible to producers.
          </p>

          <p>
            WOURI lets a user ask a question in writing or by voice message. The
            solution interprets the context of the request, consults controlled
            sources and returns a simple, contextual answer, progressively
            available in several local languages. WhatsApp is its primary target
            channel, alongside web, mobile and calls.
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
            Beyond its use in agriculture, WOURI embodies ADC's approach:
            designing accessible technologies, rooted in local realities and able
            to support concrete social and environmental change.
          </p>

          <h2 className="pt-4 font-serif text-3xl leading-tight font-medium text-neutral-950 md:text-4xl">
            AVELO: bringing a digital dimension to green mobility.
          </h2>

          <p>
            The discussions also opened a new prospect for collaboration. Andy
            Costa asked African Digit Consulting to explore the design of the
            AVELO app, a digital platform meant to support the management and
            growth of his bicycle fleet.
          </p>

          <p>
            AVELO is a green-mobility initiative led by Andy Costa. In February
            2026, a first fleet of around ten bikes was handed over to the project
            for a pilot deployment at Banco National Park. The initiative aims to
            encourage non-polluting travel within the park, improve the visitor
            experience and create economic opportunities for young people. The
            project also plans a gradual rollout to other reserves and natural
            sites across Côte d'Ivoire.
          </p>

          <p>
            The future app should turn this physical fleet into a service that is
            more structured, simpler to use and easier to steer. Depending on the
            needs defined during the scoping phase, the platform could notably
            include:
          </p>

          <ul className="grid list-disc gap-2 pl-6 marker:text-orange-500 sm:grid-cols-2">
            <li>registering and identifying bikes;</li>
            <li>managing rentals and reservations;</li>
            <li>assigning bikes to different sites;</li>
            <li>tracking check-outs, check-ins and returns;</li>
            <li>managing users and agents;</li>
            <li>reporting breakdowns or incidents;</li>
            <li>planning maintenance operations;</li>
            <li>tracking payments and revenue;</li>
            <li>viewing usage statistics;</li>
            <li>
              progressively measuring the project's environmental and social
              impact.
            </li>
          </ul>

          <p>
            The goal will therefore not simply be to build a mobile app. It will
            be to put in place a genuine digital fleet-management system, able to
            support AVELO's operational growth.
          </p>

          <h2 className="pt-4 font-serif text-3xl leading-tight font-medium text-neutral-950 md:text-4xl">
            From a physical bike to a connected mobility service.
          </h2>

          <p>
            The success of a shared-mobility initiative depends as much on the
            availability of equipment as on the quality of its management. As the
            fleet grows, it becomes necessary to know, in real time or at regular
            intervals:
          </p>

          <ul className="grid list-disc gap-2 pl-6 marker:text-orange-500 sm:grid-cols-2">
            <li>which bikes are available;</li>
            <li>which bikes are in use;</li>
            <li>which equipment needs maintenance;</li>
            <li>which sites see the highest demand;</li>
            <li>which activities generate revenue;</li>
            <li>
              and how the project contributes to employment, ecotourism and the
              reduction of polluting travel.
            </li>
          </ul>

          <p>
            The AVELO app will need to make this information accessible to users
            and to the teams operating the fleet alike. It could feature several
            complementary interfaces: a simple experience for users, a dedicated
            space for field agents, and an administrative dashboard for overall
            steering of the activity.
          </p>

          <h2 className="pt-4 font-serif text-3xl leading-tight font-medium text-neutral-950 md:text-4xl">
            Two projects, one shared philosophy.
          </h2>

          <p>
            At first glance, WOURI and AVELO operate in two different sectors.
            WOURI mainly addresses the agricultural world, while AVELO concerns
            soft mobility and bike management. Yet both initiatives rest on a
            common philosophy: using technology to make a sustainable solution
            more accessible, more effective and closer to its users.
          </p>

          <blockquote className="my-10 border-l-2 border-orange-500 pl-6 font-serif text-2xl leading-snug font-light text-neutral-900 italic md:pl-8 md:text-3xl">
            In both cases, digital is not an end in itself. It becomes a way to
            organise, simplify and amplify an impact-driven initiative.
          </blockquote>

          <h2 className="pt-4 font-serif text-3xl leading-tight font-medium text-neutral-950 md:text-4xl">
            ADC, technology partner for impact projects.
          </h2>

          <p>
            This meeting confirms the positioning African Digit Consulting aims to
            strengthen: that of a company able to support project leaders from the
            expression of the need to the deployment of a complete digital
            solution. ADC's involvement around AVELO could notably cover:
          </p>

          <ol className="grid list-decimal gap-2 pl-6 marker:font-semibold marker:text-orange-500">
            <li>analysing current activities and fleet needs;</li>
            <li>defining user and agent journeys;</li>
            <li>functional and visual design of the platform;</li>
            <li>developing the app and its dashboard;</li>
            <li>integrating reservation, tracking and payment mechanisms;</li>
            <li>training the teams in charge of operations;</li>
            <li>maintaining and gradually evolving the solution.</li>
          </ol>

          <p>
            This methodology is meant to build a tool that matches field realities,
            rather than transposing a generic or ill-suited technology model.
          </p>

          <h2 className="pt-4 font-serif text-3xl leading-tight font-medium text-neutral-950 md:text-4xl">
            A collaboration to build on solid foundations.
          </h2>

          <p>
            The next step will be to organise a scoping phase with Andy Costa and
            the teams involved in AVELO. This phase will notably help clarify:
          </p>

          <ul className="grid list-disc gap-2 pl-6 marker:text-orange-500 sm:grid-cols-2">
            <li>the current size and composition of the fleet;</li>
            <li>the different operating sites;</li>
            <li>how rentals work;</li>
            <li>the categories of users involved;</li>
            <li>the payment methods considered;</li>
            <li>the responsibilities of field agents;</li>
            <li>maintenance needs;</li>
            <li>the activity and impact indicators to track;</li>
            <li>and the priorities for the first version of the app.</li>
          </ul>

          <p>
            The goal will be to define a minimum viable product, focused on the
            essential functions, then gradually evolve the platform based on real
            usage and field feedback.
          </p>

          <h2 className="pt-4 font-serif text-3xl leading-tight font-medium text-neutral-950 md:text-4xl">
            Advancing African solutions.
          </h2>

          <p>
            Through WOURI and the prospect opened by AVELO, African Digit
            Consulting reaffirms its commitment to a digital that is useful,
            responsible and built around African realities. The meeting with Andy
            Costa therefore represents far more than an exchange between an
            eco-entrepreneur and a technology company: it symbolises the
            convergence of two forms of expertise — that of an actor engaged for
            years in green mobility, and that of a digital team determined to turn
            impact projects into accessible, structured and scalable solutions.
          </p>

          <p>
            Because environmental challenges call for concrete answers, we believe
            the future will be built by bringing together visionaries,
            communities, institutions and technological skills. With WOURI, we
            bring climate information closer to producers. With AVELO, we want to
            bring green mobility closer to its users.
          </p>

          <div className="mt-12 grid gap-5 border-t border-neutral-200 pt-10 sm:grid-cols-3">
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
              <p className="text-xs font-semibold tracking-[0.15em] text-orange-600 uppercase">
                About AVELO
              </p>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                A green-mobility initiative led by eco-entrepreneur Andy Costa. It
                aims to make cycling more accessible, support ecotourism, reduce
                the harms of polluting transport and create economic opportunities
                around operating and maintaining bike fleets. A first operational
                phase launched at Banco National Park in February 2026.
              </p>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
              <p className="text-xs font-semibold tracking-[0.15em] text-orange-600 uppercase">
                About WOURI
              </p>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                An agritech and climate-tech solution built by African Digit
                Consulting. It gives producers access to understandable,
                contextual agricultural and climate information, progressively
                available in several local languages, by text or voice message.
              </p>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
              <p className="text-xs font-semibold tracking-[0.15em] text-orange-600 uppercase">
                About ADC
              </p>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                African Digit Consulting designs useful, durable digital solutions
                adapted to African realities, and supports organisations,
                entrepreneurs and institutions in designing, building and
                deploying digital products with impact.
              </p>
            </div>
          </div>
        </div>
      </article>
    </BlogArticleLayout>
  );
}
