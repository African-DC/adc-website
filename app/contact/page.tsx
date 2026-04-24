"use client";

import { Footer } from "@/components/sections/footer";
import { NavbarDemo } from "@/components/sections/navbar-demo";
import { PageHero } from "@/components/sections/page-hero";
import ScrollProgress from "@/components/ui/scroll-progress";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  ArrowUpRight,
  CheckCircle2,
  CalendarClock,
  Navigation,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const faqs = [
  {
    q: "Combien coûte un projet digital ?",
    a: "Le coût dépend de la complexité, du périmètre et des délais. Nous proposons des solutions sur mesure adaptées à votre budget et à vos objectifs. Contactez-nous pour un devis personnalisé sous 48h.",
  },
  {
    q: "En combien de temps livrez-vous un projet ?",
    a: "Un site vitrine simple prend 2 à 4 semaines. Une application web métier peut demander plusieurs mois. Nous établissons un calendrier réaliste dès le brief et vous tenons informé à chaque étape.",
  },
  {
    q: "Comment se déroule votre processus ?",
    a: "Un brief approfondi pour comprendre votre métier, puis des ateliers de conception, puis le développement itératif. Validation par sprint, mise en ligne, et accompagnement post-lancement.",
  },
  {
    q: "Proposez-vous de la maintenance ?",
    a: "Oui. Des forfaits maintenance couvrent les mises à jour de sécurité, les corrections de bugs et l'assistance technique. Nous restons votre partenaire sur la durée, pas seulement au lancement.",
  },
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    service: "web",
    submitted: false,
    loading: false,
    error: false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState((prev) => ({ ...prev, loading: true, error: false }));

    try {
      const formData = new FormData();
      formData.append("name", formState.name);
      formData.append("email", formState.email);
      formData.append("phone", formState.phone || "Non spécifié");
      formData.append("company", formState.company || "Non spécifié");
      formData.append("message", formState.message);
      formData.append("service", formState.service);
      formData.append(
        "access_key",
        process.env.NEXT_PUBLIC_WEB3FORMS_API_KEY || ""
      );
      formData.append("from_website", "Site ADC");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setFormState({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
          service: "web",
          submitted: true,
          loading: false,
          error: false,
        });
      } else {
        throw new Error(data.message || "Une erreur est survenue");
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire:", error);
      setFormState((prev) => ({ ...prev, loading: false, error: true }));
    }
  };

  const inputClass =
    "w-full h-12 px-4 bg-transparent border border-neutral-200 rounded-lg text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-colors";

  return (
    <>
      <ScrollProgress />
      <NavbarDemo />

      <PageHero
        title="Parlons de votre projet."
        subtitle="Un brief, un café, un appel. Nous répondons sous 48h."
        eyebrow="Contact · Abidjan"
        breadcrumbs={[{ label: "Contact", href: "/contact" }]}
      />

      <main className="overflow-hidden bg-white">
        {/* ===================== FORM + INFOS ===================== */}
        <section className="py-16 md:py-24 border-t border-neutral-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
              {/* Left — editorial contact info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-5"
              >
                <div className="mb-6 text-xs tracking-[0.22em] text-neutral-600 uppercase">
                  <span className="inline-block h-px w-10 bg-orange-500 mr-3 align-middle" />
                  Prendre contact
                </div>

                <h2
                  className="font-serif text-3xl md:text-4xl font-medium leading-tight text-neutral-950 mb-6"
                >
                  Dites-nous{" "}
                  <em className="text-orange-500 font-normal">
                    ce que vous voulez construire
                  </em>
                  . Nous vous dirons comment le rendre utile.
                </h2>

                <p className="text-neutral-600 leading-relaxed mb-10 max-w-md">
                  Que ce soit une première idée, un appel d'offres, ou un
                  projet déjà démarré, nous prenons le temps de comprendre
                  avant de proposer.
                </p>

                <dl className="space-y-7">
                  <div className="flex items-start gap-4 pb-7 border-b border-neutral-200">
                    <MapPin
                      className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0"
                      strokeWidth={1.5}
                    />
                    <div>
                      <dt className="text-xs tracking-[0.15em] uppercase text-neutral-500 mb-1.5">
                        Adresse
                      </dt>
                      <dd className="text-neutral-900">
                        Siti Dia, Grand-Bassam Monckey-ville
                        <br />
                        Côte d'Ivoire
                      </dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 pb-7 border-b border-neutral-200">
                    <Phone
                      className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0"
                      strokeWidth={1.5}
                    />
                    <div>
                      <dt className="text-xs tracking-[0.15em] uppercase text-neutral-500 mb-1.5">
                        Téléphone
                      </dt>
                      <dd>
                        <a
                          href="tel:+2252732797523"
                          className="text-neutral-900 hover:text-orange-600 transition-colors"
                        >
                          +225 27 32 797 523
                        </a>
                        <span className="text-neutral-400 mx-2">·</span>
                        <a
                          href="tel:+22505954598 43"
                          className="text-neutral-900 hover:text-orange-600 transition-colors"
                        >
                          +225 05 95 45 98 43
                        </a>
                      </dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 pb-7 border-b border-neutral-200">
                    <Mail
                      className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0"
                      strokeWidth={1.5}
                    />
                    <div>
                      <dt className="text-xs tracking-[0.15em] uppercase text-neutral-500 mb-1.5">
                        Email
                      </dt>
                      <dd>
                        <a
                          href="mailto:klassci@africandigitconsulting.com"
                          className="text-neutral-900 hover:text-orange-600 transition-colors break-all"
                        >
                          klassci@africandigitconsulting.com
                        </a>
                      </dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <CalendarClock
                      className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0"
                      strokeWidth={1.5}
                    />
                    <div>
                      <dt className="text-xs tracking-[0.15em] uppercase text-neutral-500 mb-1.5">
                        Horaires
                      </dt>
                      <dd className="text-neutral-900">
                        Lun – Ven · 8h30 – 17h30
                        <br />
                        <span className="text-neutral-500">
                          Samedi sur rendez-vous
                        </span>
                      </dd>
                    </div>
                  </div>
                </dl>
              </motion.div>

              {/* Right — form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="lg:col-span-7"
              >
                <div className="relative bg-neutral-50 border border-neutral-200 rounded-2xl p-8 md:p-10">
                  {formState.submitted ? (
                    <div className="flex flex-col items-start py-8">
                      <div className="flex items-center justify-center h-14 w-14 rounded-full bg-green-100 text-green-700 mb-6">
                        <CheckCircle2 className="h-7 w-7" strokeWidth={1.5} />
                      </div>
                      <h3
                        className="font-serif text-3xl md:text-4xl font-medium text-neutral-950 leading-tight mb-4"
                      >
                        Message envoyé.
                      </h3>
                      <p className="text-neutral-600 leading-relaxed mb-8 max-w-md">
                        Merci. Notre équipe vous répond sous 48h, généralement
                        plus tôt.
                      </p>
                      <button
                        type="button"
                        onClick={() =>
                          setFormState((prev) => ({
                            ...prev,
                            submitted: false,
                          }))
                        }
                        className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 hover:text-orange-600 transition-colors"
                      >
                        Envoyer un autre message
                        <ArrowUpRight className="h-4 w-4" />
                      </button>
                    </div>
                  ) : (
                    <>
                      <div className="mb-8">
                        <h3
                          className="font-serif text-2xl md:text-3xl font-medium text-neutral-950 leading-tight mb-2"
                        >
                          Votre brief.
                        </h3>
                        <p className="text-sm text-neutral-500">
                          Les champs suivis d'un{" "}
                          <span className="text-orange-500">*</span> sont
                          obligatoires.
                        </p>
                      </div>

                      {formState.error && (
                        <div
                          role="alert"
                          className="border border-red-200 bg-red-50 text-red-700 text-sm px-4 py-3 rounded-lg mb-6"
                        >
                          Une erreur s'est produite. Veuillez réessayer ou
                          nous écrire directement à{" "}
                          <a
                            href="mailto:klassci@africandigitconsulting.com"
                            className="underline"
                          >
                            klassci@africandigitconsulting.com
                          </a>
                          .
                        </div>
                      )}

                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label
                              htmlFor="name"
                              className="block text-xs tracking-[0.12em] uppercase text-neutral-600 mb-2"
                            >
                              Nom complet{" "}
                              <span className="text-orange-500">*</span>
                            </label>
                            <input
                              id="name"
                              name="name"
                              value={formState.name}
                              onChange={handleChange}
                              placeholder="Votre nom"
                              required
                              className={inputClass}
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="email"
                              className="block text-xs tracking-[0.12em] uppercase text-neutral-600 mb-2"
                            >
                              Email <span className="text-orange-500">*</span>
                            </label>
                            <input
                              id="email"
                              name="email"
                              type="email"
                              value={formState.email}
                              onChange={handleChange}
                              placeholder="votre@email.com"
                              required
                              className={inputClass}
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label
                              htmlFor="phone"
                              className="block text-xs tracking-[0.12em] uppercase text-neutral-600 mb-2"
                            >
                              Téléphone
                            </label>
                            <input
                              id="phone"
                              name="phone"
                              value={formState.phone}
                              onChange={handleChange}
                              placeholder="+225 XX XX XX XX XX"
                              className={inputClass}
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="company"
                              className="block text-xs tracking-[0.12em] uppercase text-neutral-600 mb-2"
                            >
                              Entreprise
                            </label>
                            <input
                              id="company"
                              name="company"
                              value={formState.company}
                              onChange={handleChange}
                              placeholder="Votre entreprise"
                              className={inputClass}
                            />
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="service"
                            className="block text-xs tracking-[0.12em] uppercase text-neutral-600 mb-2"
                          >
                            Type de projet{" "}
                            <span className="text-orange-500">*</span>
                          </label>
                          <select
                            id="service"
                            name="service"
                            value={formState.service}
                            onChange={handleChange}
                            required
                            className={inputClass}
                          >
                            <option value="web">Développement web</option>
                            <option value="design">
                              Design & identité visuelle
                            </option>
                            <option value="mobile">
                              Application mobile
                            </option>
                            <option value="marketing">
                              Marketing digital
                            </option>
                            <option value="autre">Autre</option>
                          </select>
                        </div>

                        <div>
                          <label
                            htmlFor="message"
                            className="block text-xs tracking-[0.12em] uppercase text-neutral-600 mb-2"
                          >
                            Votre message{" "}
                            <span className="text-orange-500">*</span>
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            value={formState.message}
                            onChange={handleChange}
                            placeholder="Décrivez votre projet, votre besoin, vos contraintes…"
                            rows={5}
                            required
                            className={`${inputClass} h-auto py-3 resize-y`}
                          />
                        </div>

                        <div className="pt-2">
                          <Button
                            type="submit"
                            disabled={formState.loading}
                            variant="cta"
                            size="cta"
                            className="w-full sm:w-auto"
                          >
                            {formState.loading ? (
                              <>
                                <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                <span>Envoi en cours…</span>
                              </>
                            ) : (
                              <>
                                <span>Envoyer le brief</span>
                                <ArrowUpRight className="h-4 w-4" />
                              </>
                            )}
                          </Button>
                          <p className="mt-4 text-xs text-neutral-500">
                            En soumettant ce formulaire, vous acceptez notre{" "}
                            <Link
                              href="/politique-confidentialite"
                              className="text-orange-600 hover:underline"
                            >
                              politique de confidentialité
                            </Link>
                            .
                          </p>
                        </div>
                      </form>
                    </>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ===================== MAP ===================== */}
        <section className="py-12 md:py-16 border-t border-neutral-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-10">
              <div className="lg:col-span-5">
                <div className="mb-6 text-xs tracking-[0.22em] text-neutral-600 uppercase">
                  <span className="inline-block h-px w-10 bg-orange-500 mr-3 align-middle" />
                  Nous rendre visite
                </div>
                <h2
                  className="font-serif text-3xl md:text-4xl font-medium leading-tight text-neutral-950 mb-4"
                >
                  Grand-Bassam, Côte d'Ivoire.
                </h2>
                <p className="text-neutral-600 leading-relaxed mb-6">
                  Notre bureau est à Siti Dia, Grand-Bassam Monckey-ville. Un café
                  vous attend. Préférez-vous qu'on passe chez vous ? On peut
                  aussi.
                </p>
                <a
                  href="https://goo.gl/maps/1ysQxe7F1X9qiZC76"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 hover:text-orange-600 transition-colors"
                >
                  <Navigation className="h-4 w-4" strokeWidth={1.8} />
                  Voir l'itinéraire
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} />
                </a>
              </div>

              <div className="lg:col-span-7 relative rounded-2xl overflow-hidden border border-neutral-200 aspect-[16/10] md:aspect-[16/9]">
                <iframe
                  src="https://www.google.com/maps?q=Grand-Bassam+Monckey-ville,+C%C3%B4te+d'Ivoire&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Carte de localisation ADC"
                  className="absolute inset-0"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ===================== FAQ ===================== */}
        <section className="py-24 md:py-32 border-t border-neutral-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-12 md:mb-16">
              <div className="lg:col-span-5">
                <div className="mb-6 text-xs tracking-[0.22em] text-neutral-600 uppercase">
                  <span className="inline-block h-px w-10 bg-orange-500 mr-3 align-middle" />
                  Questions fréquentes
                </div>
                <h2
                  className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-tight text-neutral-950"
                >
                  Ce qu'on nous demande{" "}
                  <em className="text-orange-500 font-normal">
                    le plus souvent
                  </em>
                  .
                </h2>
              </div>

              <div className="lg:col-span-7">
                <ul className="divide-y divide-neutral-200 border-t border-b border-neutral-200">
                  {faqs.map((item, i) => (
                    <motion.li
                      key={item.q}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.08 }}
                    >
                      <details className="group py-6">
                        <summary className="flex items-start justify-between gap-6 cursor-pointer list-none">
                          <span
                            className="font-serif text-lg md:text-xl font-medium text-neutral-950 pr-4"
                          >
                            <span className="text-orange-500/80 italic mr-4 text-sm tabular-nums">
                              0{i + 1}
                            </span>
                            {item.q}
                          </span>
                          <span className="flex-shrink-0 mt-1 flex items-center justify-center h-8 w-8 rounded-full border border-neutral-200 text-neutral-500 group-open:rotate-45 group-open:border-orange-500 group-open:text-orange-500 transition-all">
                            +
                          </span>
                        </summary>
                        <p className="mt-4 pr-12 text-neutral-600 leading-relaxed max-w-2xl">
                          {item.a}
                        </p>
                      </details>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
