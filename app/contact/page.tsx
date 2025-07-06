"use client";

import { Footer } from "@/components/sections/footer";
import { NavbarDemo } from "@/components/sections/navbar-demo";
import { PageHero } from "@/components/sections/page-hero";
import ScrollProgress from "@/components/ui/scroll-progress";
import { motion } from "framer-motion";
import {
  AtSign,
  CalendarDays,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";
import { useState, useRef } from "react";

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

  const containerRef = useRef<HTMLDivElement>(null);

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

      // Ajout de l'API key depuis les variables d'environnement
      formData.append(
        "access_key",
        process.env.NEXT_PUBLIC_WEB3FORMS_API_KEY || ""
      );

      // Ajout d'un champ pour identifier le site
      formData.append("from_website", "Site ADC");

      // Envoi du formulaire à Web3Forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setFormState((prev) => ({
          ...prev,
          loading: false,
          submitted: true,
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
          service: "web",
        }));
      } else {
        throw new Error(data.message || "Une erreur est survenue");
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire:", error);
      setFormState((prev) => ({
        ...prev,
        loading: false,
        error: true,
      }));
    }
  };

  return (
    <>
      <ScrollProgress />
      <NavbarDemo />

      <PageHero
        title="Contactez-nous"
        subtitle="Prenez contact avec notre équipe et découvrez comment nous pouvons vous accompagner dans votre transformation digitale."
        breadcrumbs={[{ label: "Contact", href: "/contact" }]}
        pageTheme="contact"
        useAbstractBackground={true}
      />

      <main ref={containerRef} className="overflow-hidden">
        {/* Section Formulaire de Contact */}
        <section className="py-20 relative">
          {/* Éléments décoratifs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-300 rounded-full opacity-10 blur-[150px] -z-10"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-400 rounded-full opacity-10 blur-[120px] -z-10"></div>

          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Partie Info Contact */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-8"
              >
                <div>
                  <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                    Prêt à discuter de votre projet?
                  </h2>

                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Notre équipe d'experts est prête à vous aider à concrétiser
                    votre vision digitale. Contactez-nous pour discuter de votre
                    projet et découvrir comment nous pouvons transformer vos
                    idées en réalité.
                  </p>
                </div>

                {/* Infos de contact */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-orange-100 text-orange-600 rounded-xl">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Notre Adresse</h3>
                      <p className="text-gray-600">
                        Netzify Coworking, Rue L158, Angré, Abidjan
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-orange-100 text-orange-600 rounded-xl">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Téléphone</h3>
                      <p className="text-gray-600">
                        +225 27 32 797 538 /05 95 459 843
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-orange-100 text-orange-600 rounded-xl">
                      <AtSign className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Email</h3>
                      <p className="text-gray-600">
                        contact@africadigitconsulting.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-orange-100 text-orange-600 rounded-xl">
                      <CalendarDays className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Horaires d'ouverture</h3>
                      <p className="text-gray-600">Lun - Ven: 8h30 - 17h30</p>
                      <p className="text-gray-600">Sam: Sur rendez-vous</p>
                    </div>
                  </div>
                </div>

                {/* Carte */}
                <div className="mt-8 rounded-xl overflow-hidden h-80 relative shadow-lg">
                  <div className="absolute inset-0 bg-gray-100 animate-pulse flex items-center justify-center z-0">
                    <div className="text-gray-400 flex flex-col items-center">
                      <MapPin className="h-8 w-8 mb-2" />
                      <span>Chargement de la carte...</span>
                    </div>
                  </div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.443572663347!2d-3.9742620245976213!3d5.3477399371242615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1ebcc98c7f3d1%3A0xf2b4e6f0f7079fa4!2sNetzify%20coworking!5e0!3m2!1sfr!2sci!4v1626700000000!5m2!1sfr!2sci"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Carte de localisation African Digit Consulting"
                    className="absolute inset-0 z-10"
                  />
                  <div className="absolute top-4 left-4 bg-white p-3 rounded-lg shadow-md flex items-center gap-2 z-20">
                    <MapPin className="h-4 w-4 text-orange-600" />
                    <span className="text-sm font-medium">
                      African Digit Consulting
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-orange-600 text-white p-3 rounded-lg shadow-md z-20">
                    <Link
                      href="https://goo.gl/maps/1ysQxe7F1X9qiZC76"
                      target="_blank"
                      className="text-sm font-medium flex items-center gap-2"
                    >
                      <span>Itinéraire</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-navigation"
                      >
                        <polygon points="3 11 22 2 13 21 11 13 3 11" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.div>

              {/* Formulaire de contact */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-xl p-8 border border-orange-100"
              >
                {formState.submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Message envoyé!</h3>
                    <p className="text-gray-600 mb-8">
                      Merci de nous avoir contacté. Notre équipe vous répondra
                      dans les plus brefs délais.
                    </p>
                    <button
                      onClick={() =>
                        setFormState((prev) => ({ ...prev, submitted: false }))
                      }
                      className="bg-orange-600 hover:bg-orange-700 text-white py-2 px-6 rounded-lg"
                    >
                      Envoyer un autre message
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center gap-2 mb-6">
                      <MessageSquare className="h-6 w-6 text-orange-600" />
                      <h3 className="text-2xl font-bold">
                        Envoyez-nous un message
                      </h3>
                    </div>

                    {formState.error && (
                      <div className="bg-red-50 border border-red-200 text-red-600 p-4 rounded-lg mb-6">
                        <p className="text-sm">
                          Une erreur s'est produite lors de l'envoi de votre
                          message. Veuillez réessayer ultérieurement.
                        </p>
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium">
                            Nom complet{" "}
                            <span className="text-orange-600">*</span>
                          </label>
                          <input
                            id="name"
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                            placeholder="Votre nom"
                            required
                            className="w-full px-3 py-2 rounded-md border border-gray-200 focus:border-orange-500 focus:ring-orange-500"
                          />
                        </div>

                        <div className="space-y-2">
                          <label
                            htmlFor="email"
                            className="text-sm font-medium"
                          >
                            Email <span className="text-orange-600">*</span>
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            value={formState.email}
                            onChange={handleChange}
                            placeholder="votre@email.com"
                            required
                            className="w-full px-3 py-2 rounded-md border border-gray-200 focus:border-orange-500 focus:ring-orange-500"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label
                            htmlFor="phone"
                            className="text-sm font-medium"
                          >
                            Téléphone
                          </label>
                          <input
                            id="phone"
                            name="phone"
                            value={formState.phone}
                            onChange={handleChange}
                            placeholder="+225 XX XX XX XX XX"
                            className="w-full px-3 py-2 rounded-md border border-gray-200 focus:border-orange-500 focus:ring-orange-500"
                          />
                        </div>

                        <div className="space-y-2">
                          <label
                            htmlFor="company"
                            className="text-sm font-medium"
                          >
                            Entreprise
                          </label>
                          <input
                            id="company"
                            name="company"
                            value={formState.company}
                            onChange={handleChange}
                            placeholder="Votre entreprise"
                            className="w-full px-3 py-2 rounded-md border border-gray-200 focus:border-orange-500 focus:ring-orange-500"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="service"
                          className="text-sm font-medium"
                        >
                          Service désiré{" "}
                          <span className="text-orange-600">*</span>
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formState.service}
                          onChange={handleChange}
                          required
                          className="w-full rounded-md border border-gray-200 py-2.5 px-4 focus:border-orange-500 focus:ring-orange-500"
                        >
                          <option value="web">Développement Web</option>
                          <option value="design">
                            Design & Identité Visuelle
                          </option>
                          <option value="mobile">Applications Mobiles</option>
                          <option value="marketing">Marketing Digital</option>
                          <option value="autre">Autre</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="message"
                          className="text-sm font-medium"
                        >
                          Message <span className="text-orange-600">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formState.message}
                          onChange={handleChange}
                          placeholder="Décrivez votre projet ou votre demande..."
                          rows={5}
                          required
                          className="w-full px-3 py-2 rounded-md border border-gray-200 focus:border-orange-500 focus:ring-orange-500"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={formState.loading}
                        className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white py-3 flex items-center justify-center gap-2 rounded-lg"
                      >
                        {formState.loading ? (
                          <>
                            <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Envoi en cours...
                          </>
                        ) : (
                          <>
                            <Send className="h-5 w-5" />
                            Envoyer le message
                          </>
                        )}
                      </button>

                      <p className="text-xs text-gray-500 text-center">
                        En soumettant ce formulaire, vous acceptez notre{" "}
                        <Link
                          href="javascript:void(0)"
                          className="text-orange-600 hover:underline"
                        >
                          politique de confidentialité
                        </Link>
                      </p>
                    </form>
                  </>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section FAQ */}
        <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Questions fréquentes
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Des réponses aux questions les plus courantes sur nos services
                et notre processus de travail.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white p-6 rounded-xl shadow-sm border border-orange-100"
              >
                <h3 className="text-xl font-semibold mb-3">
                  Combien coûte un projet digital?
                </h3>
                <p className="text-gray-600">
                  Le coût d'un projet digital varie en fonction de sa
                  complexité, de ses fonctionnalités et de son ampleur. Nous
                  proposons des solutions sur mesure adaptées à votre budget et
                  à vos objectifs. Contactez-nous pour obtenir un devis
                  personnalisé.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm border border-orange-100"
              >
                <h3 className="text-xl font-semibold mb-3">
                  Combien de temps faut-il pour réaliser un projet?
                </h3>
                <p className="text-gray-600">
                  La durée d'un projet dépend de sa complexité et de son
                  envergure. Un site vitrine simple peut prendre 2-4 semaines,
                  tandis qu'une application web complexe peut nécessiter
                  plusieurs mois. Nous établissons un calendrier réaliste dès le
                  début du projet.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-6 rounded-xl shadow-sm border border-orange-100"
              >
                <h3 className="text-xl font-semibold mb-3">
                  Comment se déroule le processus de travail?
                </h3>
                <p className="text-gray-600">
                  Notre processus commence par une consultation approfondie pour
                  comprendre vos besoins. Nous passons ensuite à la phase de
                  conception, puis au développement. Après validation, nous
                  procédons au lancement et assurons un suivi post-lancement
                  pour garantir votre satisfaction.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white p-6 rounded-xl shadow-sm border border-orange-100"
              >
                <h3 className="text-xl font-semibold mb-3">
                  Proposez-vous des services de maintenance?
                </h3>
                <p className="text-gray-600">
                  Oui, nous proposons des forfaits de maintenance pour assurer
                  le bon fonctionnement de votre site ou application. Ces
                  forfaits incluent les mises à jour de sécurité, les
                  corrections de bugs et l'assistance technique régulière.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
