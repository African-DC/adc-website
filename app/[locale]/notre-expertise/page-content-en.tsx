"use client";

import { Footer } from "@/components/sections/footer";
import { NavbarDemo } from "@/components/sections/navbar-demo";
import { PageHero } from "@/components/sections/page-hero";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Code,
} from "lucide-react";
// BarChart, PenTool icons kept on standby for expertises 02/03 if we reactivate them.
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ScrollProgress from "@/components/ui/scroll-progress";

type Expertise = {
  number: string;
  id: string;
  title: string;
  icon: React.ReactNode;
  tagline: string;
  description: string;
  features: string[];
  specialties: string[];
};

const expertises: Expertise[] = [
  {
    number: "01",
    id: "web",
    title: "Web design & development",
    icon: <Code className="h-5 w-5" strokeWidth={1.5} />,
    tagline:
      "Platforms built to last, not just to impress on launch day.",
    description:
      "Marketing sites, e-commerce, multi-tenant business applications. We build with clean code, architectures that handle real load, and constant attention to the experience of end users.",
    features: [
      "Responsive, mobile-first sites, designed for every connection speed",
      "Technical and content SEO for rankings that actually hold",
      "Intuitive user interfaces, tested in the field",
      "Complete e-commerce solutions, from local payments to logistics",
      "Ongoing maintenance, security updates, technical support",
    ],
    specialties: [
      "Marketing sites",
      "E-commerce",
      "Web applications",
      "Multi-tenant platforms",
    ],
  },
  // Expertises below disabled: ADC no longer provides these services.
  // Reactivate by uncommenting if the offering changes (add BarChart/PenTool to imports).
  // {
  //   number: "02",
  //   id: "graphic",
  //   title: "Design & visual identity",
  //   icon: <PenTool className="h-5 w-5" strokeWidth={1.5} />,
  //   tagline:
  //     "A brand readable in three seconds, memorable in thirty days.",
  //   description:
  //     "Visual identity, marketing collateral, motion design. Our art direction always starts by understanding what your brand wants to say before thinking about how it should look.",
  //   features: [
  //     "Logo creation and complete identity systems",
  //     "Rigorous, usable brand guidelines",
  //     "Print and digital marketing collateral",
  //     "Product packaging designed for local distribution",
  //     "UX/UI interfaces tailored to your target users",
  //   ],
  //   specialties: ["Logo & branding", "Print collateral", "Packaging", "UI/UX"],
  // },
  // {
  //   number: "03",
  //   id: "digital",
  //   title: "Digital marketing",
  //   icon: <BarChart className="h-5 w-5" strokeWidth={1.5} />,
  //   tagline: "Visibility that you can measure, not vanity metrics.",
  //   description:
  //     "SEO strategies, social media, targeted ad campaigns. We build digital marketing plans that convert, with honest monthly reports on what is working and what is not.",
  //   features: [
  //     "On-page and off-page SEO strategies for lasting rankings",
  //     "Editorial management of social media with a clear calendar",
  //     "Targeted ad campaigns (Google Ads, Meta Ads)",
  //     "Email marketing and automation to retain customers",
  //     "Data analysis and transparent monthly reports",
  //   ],
  //   specialties: ["SEO", "Social media", "Online advertising", "Content marketing"],
  // },
];

export default function ExpertisePageContentEn() {
  return (
    <>
      <ScrollProgress />
      <NavbarDemo />

      <PageHero
        title="Our expertise: designing solutions that hold up over time."
        subtitle="A simple discipline: understanding your business before proposing a single line of code."
        eyebrow="Our expertise"
        breadcrumbs={[{ label: "Our expertise", href: "/notre-expertise" }]}
      />

      <main className="overflow-hidden bg-white">
        {/* ===================== INTRO ===================== */}
        <section className="py-20 md:py-24 border-t border-neutral-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              <div className="lg:col-span-7">
                <h2
                  className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] font-medium leading-[1.15] text-neutral-950"
                >
                  We don't sell services by the piece. We solve business
                  problems,{" "}
                  <em className="text-orange-500 font-normal">
                    with the tools that actually fit
                  </em>
                  .
                </h2>
              </div>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-5 text-lg text-neutral-600 leading-relaxed lg:pl-10 lg:border-l border-neutral-300"
              >
                A site is useless if no one can find it, and a product
                won't last if the architecture behind it isn't built to
                endure. Our job: ship solid, mobile-first web platforms,
                designed for the African context.
              </motion.p>
            </div>
          </div>
        </section>

        {/* ===================== EXPERTISES ===================== */}
        <section className="pb-24 md:pb-32">
          <div className="max-w-7xl mx-auto px-6 space-y-28 md:space-y-36">
            {expertises.map((exp, index) => {
              const isEven = index % 2 === 1;
              return (
                <article
                  key={exp.id}
                  id={exp.id}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start border-t border-neutral-200 pt-16 md:pt-20"
                >
                  {/* Left — text */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className={`lg:col-span-7 ${
                      isEven ? "lg:order-2 lg:col-start-6" : ""
                    }`}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <span
                        className="font-serif text-5xl italic font-light text-orange-500/80 leading-none"
                      >
                        {exp.number}
                      </span>
                      <div className="flex items-center justify-center h-11 w-11 rounded-full border border-neutral-200 bg-neutral-50 text-neutral-800">
                        {exp.icon}
                      </div>
                    </div>

                    <h3
                      className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-tight text-neutral-950 mb-6"
                    >
                      {exp.title}
                    </h3>
                    <p
                      className="font-serif text-xl md:text-2xl italic font-light text-neutral-700 leading-snug mb-6 max-w-xl"
                    >
                      {exp.tagline}
                    </p>
                    <p className="text-base md:text-lg text-neutral-600 leading-relaxed max-w-xl mb-8">
                      {exp.description}
                    </p>

                    <ul className="flex flex-wrap gap-2 mb-10">
                      {exp.specialties.map((s) => (
                        <li
                          key={s}
                          className="text-xs tracking-wide px-3 py-1 rounded-full border border-neutral-200 bg-white text-neutral-700"
                        >
                          {s}
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Right — features */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className={`lg:col-span-5 ${
                      isEven ? "lg:order-1 lg:col-start-1 lg:row-start-1" : ""
                    }`}
                  >
                    <div className="lg:sticky lg:top-32 rounded-2xl bg-neutral-50 border border-neutral-200 p-8 md:p-10">
                      <div className="text-xs tracking-[0.22em] uppercase text-neutral-600 mb-6">
                        <span className="inline-block h-px w-8 bg-orange-500 mr-3 align-middle" />
                        What we deliver
                      </div>
                      <ul className="space-y-4">
                        {exp.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-3 text-[15px] text-neutral-700 leading-relaxed"
                          >
                            <Check
                              className="h-4 w-4 text-orange-500 mt-1 flex-shrink-0"
                              strokeWidth={2}
                            />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </article>
              );
            })}
          </div>
        </section>

        {/* ===================== PROCESS ===================== */}
        <section className="py-24 md:py-32 bg-neutral-50 border-t border-neutral-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-16 md:mb-20">
              <div className="mb-6 text-xs tracking-[0.22em] text-neutral-600 uppercase">
                <span className="inline-block h-px w-10 bg-orange-500 mr-3 align-middle" />
                Our process
              </div>
              <h2
                className="font-serif text-4xl md:text-5xl font-medium leading-[1.1] text-neutral-950"
              >
                Four stages.{" "}
                <em className="text-orange-500 font-normal">Zero surprises.</em>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
              {[
                {
                  num: "01",
                  title: "Discovery",
                  text: "We take the time to understand your business, your users, and your constraints.",
                },
                {
                  num: "02",
                  title: "Design",
                  text: "Mockups, user flows, prototypes. Validation at every step, fast iteration.",
                },
                {
                  num: "03",
                  title: "Build",
                  text: "Development in sprints. Regular demos, reviewed code, measured quality.",
                },
                {
                  num: "04",
                  title: "Run",
                  text: "Launch, team training, maintenance, and continuous improvements.",
                },
              ].map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative border-t border-neutral-300 pt-6"
                >
                  <span
                    className="font-serif text-4xl italic font-light text-orange-500/80 leading-none block mb-4"
                  >
                    {step.num}
                  </span>
                  <h3
                    className="font-serif text-xl md:text-2xl font-medium text-neutral-950 mb-3"
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {step.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== CTA ===================== */}
        <section className="py-24 md:py-32 bg-neutral-950 text-white relative overflow-hidden">
          <div
            aria-hidden
            className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-orange-500/15 blur-[140px] pointer-events-none"
          />
          <div className="relative max-w-5xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-3 text-xs tracking-[0.22em] text-neutral-400 uppercase mb-8">
              <span className="inline-block h-px w-10 bg-orange-400" />
              A specific need?
            </div>
            <h2
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] mb-12"
            >
              Tell us what you want to build,{" "}
              <em className="text-orange-400 font-normal">
                we'll tell you how
              </em>
              .
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button asChild variant="cta" size="cta">
                <Link href="/contact">
                  <span>Start a project</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
              <Link
                href="/nos-realisations"
                className="inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-orange-400 transition-colors"
              >
                See our case studies
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
