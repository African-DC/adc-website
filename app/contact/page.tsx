"use client";

import { Footer } from "@/components/sections/footer";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { ContactSkeleton } from "@/components/ui/loading-skeletons";
import { NavigationMenuDemo } from "@/components/ui/navigation-menu-demo";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useEffect, useState } from "react";

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <ContactSkeleton />;
  }

  return (
    <div className="min-h-screen bg-black flex flex-col relative">
      <div className="absolute inset-0 z-0">
        <FlickeringGrid
          className="size-full"
          squareSize={4}
          gridGap={6}
          color="#ff942b"
          maxOpacity={0.3}
          flickerChance={0.1}
        />
      </div>

      <NavigationMenuDemo />
      <main className="pt-24 pb-16 px-4 flex-grow relative z-10">
        <div className="mt-8">
          <Breadcrumbs />
        </div>

        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 pb-[0.4rem] bg-gradient-to-r from-[#ff942b] to-orange-600 bg-clip-text text-transparent font-['Open_Sans']">
              Contact
            </h1>
            <p className="text-gray-200 max-w-2xl mx-auto font-['Open_Sans']">
              Nous sommes là pour vous aider. N&apos;hésitez pas à nous
              contacter pour toute question ou demande.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-[#f2f2f2] rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300"
            >
              <h2 className="text-2xl font-semibold mb-8 font-['Open_Sans'] text-[#ff942b] border-b-2 border-[#ff942b]/20 pb-4">
                Nos coordonnées
              </h2>
              <div className="space-y-8">
                <div className="group relative overflow-hidden rounded-xl bg-white p-6 transition-all duration-300 hover:shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#ff942b]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex items-start gap-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#ff942b]/10 group-hover:bg-[#ff942b]/20 transition-all">
                      <MapPin className="h-7 w-7 text-[#ff942b]" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 font-['Open_Sans'] text-lg text-gray-800 group-hover:text-[#ff942b] transition-colors">
                        Adresse
                      </h3>
                      <p className="text-gray-600 font-['Open_Sans'] group-hover:text-gray-700">
                        Netzify Coworking, Rue L158, Angré, Abidjan
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-xl bg-white p-6 transition-all duration-300 hover:shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#ff942b]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex items-start gap-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#ff942b]/10 group-hover:bg-[#ff942b]/20 transition-all">
                      <Mail className="h-7 w-7 text-[#ff942b]" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 font-['Open_Sans'] text-lg text-gray-800 group-hover:text-[#ff942b] transition-colors">
                        Email
                      </h3>
                      <p className="text-gray-600 font-['Open_Sans'] group-hover:text-gray-700">
                        contact@africandigit-consulting.com
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-xl bg-white p-6 transition-all duration-300 hover:shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#ff942b]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex items-start gap-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#ff942b]/10 group-hover:bg-[#ff942b]/20 transition-all">
                      <Phone className="h-7 w-7 text-[#ff942b]" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 font-['Open_Sans'] text-lg text-gray-800 group-hover:text-[#ff942b] transition-colors">
                        Téléphone
                      </h3>
                      <p className="text-gray-600 font-['Open_Sans'] group-hover:text-gray-700">
                        +225 05 95 459 843 / +225 07 98 81 01 78
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-[#f2f2f2] rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300"
            >
              <h2 className="text-2xl font-semibold mb-8 font-['Open_Sans'] text-[#ff942b] border-b-2 border-[#ff942b]/20 pb-4">
                Envoyez-nous un message
              </h2>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2 font-['Open_Sans']"
                  >
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ff942b] focus:border-transparent transition-all font-['Open_Sans'] placeholder-orange-600"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2 font-['Open_Sans']"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ff942b] focus:border-transparent transition-all font-['Open_Sans'] placeholder-orange-600"
                    placeholder="votre@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2 font-['Open_Sans']"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ff942b] focus:border-transparent transition-all font-['Open_Sans'] placeholder-orange-600"
                    placeholder="Votre message..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-[#ff942b] to-orange-600 text-white rounded-lg font-semibold hover:opacity-90 transition-all transform hover:scale-105 flex items-center justify-center gap-2 font-['Open_Sans']"
                >
                  Envoyer
                  <Send className="h-5 w-5" />
                </button>
              </form>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937604!2d2.292292615509614!3d48.85837007928746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1647216074015!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl"
              />
            </div> */}

            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed/v1/place?q=Netzify+Coworking,+Rue+L158,+Angré,+Abidjan&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
