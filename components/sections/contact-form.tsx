"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Send, X } from "lucide-react";

// Schéma de validation du formulaire
const formSchema = z.object({
  name: z.string().min(2, "Le nom est requis"),
  email: z.string().email("Email invalide"),
  phone: z.string().min(8, "Numéro de téléphone invalide"),
  message: z
    .string()
    .min(10, "Le message doit contenir au moins 10 caractères"),
  offreName: z.string().optional(),
  offrePrice: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

interface SelectedOffreData {
  title: string;
  price: string;
  type: string;
  secondaryPrice?: string;
}

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedOffre, setSelectedOffre] = useState<SelectedOffreData | null>(
    null
  );
  const [loadingOffre, setLoadingOffre] = useState(true);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      offreName: "",
      offrePrice: "",
    },
  });

  // Récupère l'offre sélectionnée depuis localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      setLoadingOffre(true);
      const storedOffre = localStorage.getItem("selectedOffre");

      if (storedOffre) {
        try {
          const parsedOffre = JSON.parse(storedOffre) as SelectedOffreData;
          setSelectedOffre(parsedOffre);

          // Initialise les champs du formulaire avec l'offre sélectionnée
          setValue("offreName", parsedOffre.title);
          setValue("offrePrice", parsedOffre.price);
        } catch (e) {
          console.error("Erreur lors de la récupération de l'offre:", e);
        }
      }

      setLoadingOffre(false);
    }
  }, [setValue]);

  // Fonction pour effacer l'offre sélectionnée
  const clearSelectedOffre = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("selectedOffre");
      setSelectedOffre(null);
      setValue("offreName", "");
      setValue("offrePrice", "");
    }
  };

  const onSubmit = async (data: FormData) => {
    try {
      setIsSubmitting(true);

      // Récupère la clé API depuis les variables d'environnement
      const apiKey = process.env.NEXT_PUBLIC_WEB3FORMS_API_KEY;

      if (!apiKey) {
        throw new Error("Clé API Web3Forms non configurée");
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: apiKey,
          from_name: "Site ADC",
          subject: `Nouvelle demande de contact ${
            data.offreName ? "pour " + data.offreName : ""
          }`,
          ...data,
        }),
      });

      const responseData = await response.json();

      if (responseData.success) {
        setSubmitted(true);
        reset();
        clearSelectedOffre();

        // Reset le succès après quelques secondes
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        throw new Error(responseData.message || "Une erreur est survenue");
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire:", error);
      alert(
        "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 overflow-hidden bg-gradient-to-b from-white to-orange-50"
    >
      {/* Éléments décoratifs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-orange-400 rounded-full filter blur-[150px] opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-red-400 rounded-full filter blur-[150px] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-6 py-2 rounded-full mb-6"
          >
            {/* <Star className="h-4 w-4 fill-orange-600 text-orange-600" /> */}
            <span className="font-medium uppercase text-xl">
              Contactez-nous{" "}
            </span>
          </motion.div>
          <p className="body-text text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Vous avez des questions ou souhaitez en savoir plus sur nos
            services? N'hésitez pas à nous contacter.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Informations de contact */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-10 space-y-8"
          >
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 title-small">
                Africa Digit Consulting
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-orange-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Téléphone</h4>
                    <p className="text-gray-600">
                      +225 27 32 797 538 /05 95 459 843{" "}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-orange-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Email</h4>
                    <p className="text-gray-600">
                      contact@africandigit-consulting.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-orange-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Adresse</h4>
                    <p className="text-gray-600">
                      Netzify Coworking, Rue L158, Angré, Abidjan
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 title-small">
                Horaires d'ouverture
              </h3>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span className="text-gray-600">Lundi - Vendredi:</span>
                  <span className="font-medium text-gray-800">8h - 18h</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Samedi - Dimanche:</span>
                  <span className="font-medium text-gray-800">Fermé</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Formulaire de contact */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {submitted ? (
              <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                <div className="flex justify-center mb-6">
                  <div className="bg-green-100 p-3 rounded-full">
                    <CheckCircle2 className="h-12 w-12 text-green-500" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 title-small">
                  Message envoyé avec succès!
                </h3>
                <p className="body-text text-gray-600 mb-8">
                  Merci de nous avoir contacté. Notre équipe vous répondra dans
                  les plus brefs délais.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3 bg-orange-100 text-orange-600 rounded-lg font-medium hover:bg-orange-200 transition-colors"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                {/* Affichage de l'offre sélectionnée si disponible */}
                {selectedOffre && !loadingOffre && (
                  <div className="mb-6 bg-orange-50 rounded-xl p-4 relative">
                    <button
                      type="button"
                      onClick={clearSelectedOffre}
                      className="absolute top-2 right-2 text-gray-500 hover:text-orange-600"
                    >
                      <X className="h-5 w-5" />
                    </button>
                    <h4 className="font-medium text-gray-800 mb-2">
                      Offre sélectionnée:
                    </h4>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-orange-600 font-medium">
                          {selectedOffre.title}
                        </p>
                        <p className="text-sm text-gray-600">
                          {selectedOffre.type}
                        </p>
                      </div>
                      <div className="font-bold text-gray-800">
                        {selectedOffre.price}
                      </div>
                    </div>
                    <input type="hidden" {...register("offreName")} />
                    <input type="hidden" {...register("offrePrice")} />
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nom complet
                    </label>
                    <input
                      type="text"
                      {...register("name")}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                      placeholder="Votre nom"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      {...register("email")}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                      placeholder="votre@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Téléphone
                    </label>
                    <input
                      type="text"
                      {...register("phone")}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                      placeholder="Votre numéro de téléphone"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      {...register("message")}
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                      placeholder={
                        selectedOffre
                          ? `Je suis intéressé(e) par l'offre ${selectedOffre.title}. Merci de me contacter pour en discuter.`
                          : "Votre message..."
                      }
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-medium flex items-center justify-center gap-2 shadow-lg hover:shadow-orange-200/50 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>Envoi en cours...</>
                    ) : (
                      <>
                        Envoyer votre message
                        <Send className="h-5 w-5" />
                      </>
                    )}
                  </motion.button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
