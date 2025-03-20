"use client";

import {
  IconBrandFacebook,
  // IconBrandInstagram,
  IconBrandLinkedin,
  // IconBrandTwitter,
  IconMail,
  IconPhone,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const fadeInUp = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.5, ease: "easeOut" },
  };

  return (
    <footer className="bg-gradient-to-b from-[#ff942b] to-orange-600 font-['Open_Sans']">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Logo et Description */}
          <motion.div
            className="col-span-1 md:col-span-2"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={{
              initial: { opacity: 0, x: -20 },
              animate: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-xl p-4 inline-block mb-6">
              <Image
                src="/img/logoadc.png"
                alt="African Digit Consulting"
                width={200}
                height={80}
              />
            </div>
            <p className="text-white/90 mb-6  text-lg font-['Open_Sans']">
            Faire la transformation digitale une clé de réussite internationale pour les organisations et les entreprises africaines.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://web.facebook.com/p/African-Digit-Consulting-100092649035928/?_rdc=1&_rdr"
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/20 flex items-center justify-center group hover:bg-white transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconBrandFacebook className="h-5 w-5 text-white group-hover:text-[#ff942b] transition-colors duration-300" />
              </motion.a>
              {/* <motion.a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/20 flex items-center justify-center group hover:bg-white transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconBrandTwitter className="h-5 w-5 text-white group-hover:text-[#ff942b] transition-colors duration-300" />
              </motion.a> */}
              <motion.a
                href="https://www.linkedin.com/company/african-digit-consulting/?originalSubdomain=ci"
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/20 flex items-center justify-center group hover:bg-white transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconBrandLinkedin className="h-5 w-5 text-white group-hover:text-[#ff942b] transition-colors duration-300" />
              </motion.a>
              {/* <motion.a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/20 flex items-center justify-center group hover:bg-white transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconBrandInstagram className="h-5 w-5 text-white group-hover:text-[#ff942b] transition-colors duration-300" />
              </motion.a> */}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            className="col-span-1"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={{
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6 text-white font-['Open_Sans']">
              Nos Services
            </h3>
            <ul className="space-y-4">
              <motion.li variants={fadeInUp}>
                <Link
                  href="#"
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  Stratégie des moyens digitaux
                </Link>
              </motion.li>
              <motion.li variants={fadeInUp}>
                <Link
                  href="#"
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  Gestion des réseaux sociaux
                </Link>
              </motion.li>
              <motion.li variants={fadeInUp}>
                <Link
                  href="#"
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  Création de contenu
                </Link>
              </motion.li>
              <motion.li variants={fadeInUp}>
                <Link
                  href="#"
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  Solutions digitales
                </Link>
              </motion.li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            className="col-span-2"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={{
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold mb-6 text-white font-['Open_Sans']">
              Contact
            </h3>
            <ul className="space-y-4">
              <motion.li
                variants={fadeInUp}
                className="flex items-center space-x-3"
              >
                <IconPhone className="h-5 w-5 text-white" />
                <span className="text-white/80 ">+225 27 32 797 538 /05 95 459 843 </span>
              </motion.li>
              <motion.li
                variants={fadeInUp}
                className="flex items-center space-x-3"
              >
                <IconMail className="h-5 w-5 text-white" />
                <span className="text-white/80">contact@africadigitconsulting.com</span>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          className="mt-12 pt-8 border-t border-white/10"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={{
            initial: { opacity: 0 },
            animate: { opacity: 1 },
          }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-center text-white/80 font-['Open_Sans']">
            © {new Date().getFullYear()} Africa Digit Consulting. Tous droits
            réservés.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
