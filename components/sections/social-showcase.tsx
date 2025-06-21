"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, MessageCircle, Share2, BadgeCheck, Award, Sparkles, Zap } from "lucide-react";
import Link from "next/link";

const profileStats = [
  { label: "J'aime", value: "11 K" },
  { label: "followers", value: "12 K" }
];

export function SocialShowcase() {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-orange-100 relative overflow-hidden">
      {/* Arrière-plan décoratif */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-orange-200 rounded-full mix-blend-multiply opacity-20 blur-[80px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-red-200 rounded-full mix-blend-multiply opacity-20 blur-[100px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <div className="bg-orange-100 text-orange-600 px-6 py-2 rounded-full inline-flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              <span className="font-medium uppercase text-sm">réseaux sociaux professionnels</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Notre empreinte <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">digitale</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Découvrez comment nous transformons la présence en ligne de nos clients avec des stratégies adaptées au marché africain.
          </p>
        </motion.div>
        
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative max-w-2xl w-full"
          >
            {/* Carte principale */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
              {/* Bannière/Header */}
              <div className="relative h-60 sm:h-80 w-full bg-gradient-to-r from-orange-200 to-orange-50 overflow-hidden">
                {/* Collage d'images de clients au fond */}
                <div className="absolute inset-0 opacity-30">
                  <div className="grid grid-cols-4 gap-1 h-full">
                    {Array.from({ length: 16 }).map((_, i) => (
                      <div key={i} className="bg-orange-100/60 rounded-md"></div>
                    ))}
                  </div>
                </div>
                
                {/* Image de profil Africa Brands */}
                <div className="absolute -bottom-16 left-8 w-32 h-32 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl shadow-lg">
                  <Image 
                    src="/img/logoadc.png"
                    alt="Africa Digit Consulting"
                    fill
                    className="object-contain p-2"
                  />
                </div>
                
                {/* Overlay design */}
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md p-3 rounded-xl shadow-md">
                  <div className="flex items-center gap-3">
                    <Image 
                      src="/img/header_img/02b21557-4e81-46dd-ac22-bd57b7f78d13.jpg"
                      alt="Idée d'Afrique"
                      width={40}
                      height={40}
                      className="rounded-lg object-cover"
                    />
                    <div className="text-left">
                      <p className="text-xs text-gray-500">Expertise africaine</p>
                      <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden mt-1">
                        <div className="h-full w-[95%] bg-gradient-to-r from-orange-500 to-red-500"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contenu du profil */}
              <div className="p-6 pt-20">
                <div className="flex flex-wrap justify-between items-start">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-2xl font-bold text-gray-800">Africa Brands</h3>
                      <BadgeCheck className="h-5 w-5 text-blue-500" />
                    </div>
                    
                    <div className="flex items-center gap-4 text-gray-500 mb-4 text-sm">
                      {profileStats.map((stat, index) => (
                        <div key={index} className="flex items-center gap-1">
                          <span className="font-semibold text-gray-700">{stat.value}</span>
                          <span>{stat.label}</span>
                        </div>
                      ))}
                    </div>
                    
                    <p className="text-gray-700 mb-6">
                      Nous conjuguons l'Afrique à travers la promotion des produits classe internationale...
                    </p>
                  </div>
                  
                  <div className="flex gap-2 mt-4 sm:mt-0">
                    <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-lg font-medium shadow-sm hover:shadow-md transition-all flex items-center gap-2">
                      <Heart className="h-4 w-4" />
                      <span>J'aime</span>
                    </button>
                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2">
                      <MessageCircle className="h-4 w-4" />
                    </button>
                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2">
                      <Share2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                
                {/* Onglets */}
                <div className="flex mt-8 border-b border-gray-200">
                  <div className="px-4 py-2 text-orange-500 border-b-2 border-orange-500 font-medium">Publications</div>
                  <div className="px-4 py-2 text-gray-500 hover:text-gray-700 transition-colors">À propos</div>
                  <div className="px-4 py-2 text-gray-500 hover:text-gray-700 transition-colors">Services</div>
                </div>
              </div>
            </div>
            
            {/* Cartes flottantes décoratives */}
            <motion.div 
              initial={{ opacity: 0, x: -40, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -left-8 -bottom-10 bg-white p-4 rounded-xl shadow-lg border border-gray-100 max-w-[200px] transform -rotate-3 hidden md:block"
            >
              <div className="flex items-center gap-3 mb-3">
                <Award className="h-5 w-5 text-orange-500" />
                <h4 className="font-medium text-gray-800">Solutions innovantes</h4>
              </div>
              <p className="text-xs text-gray-600">+30 projets réalisés en Afrique de l'Ouest</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 40, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="absolute -right-8 -bottom-10 bg-white p-4 rounded-xl shadow-lg border border-gray-100 max-w-[200px] transform rotate-3 hidden md:block"
            >
              <div className="flex items-center gap-3 mb-3">
                <Zap className="h-5 w-5 text-orange-500" />
                <h4 className="font-medium text-gray-800">Expertise africaine</h4>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden mt-1">
                <div className="h-full w-[95%] bg-gradient-to-r from-orange-500 to-red-500"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-24"
        >
          <Link href="/notre-expertise" className="bg-white text-gray-800 hover:text-orange-500 font-medium px-8 py-4 rounded-full border border-gray-200 hover:border-orange-300 hover:shadow-md transition-all inline-flex items-center gap-2">
            <span>Explorer nos expertises</span>
            <span className="bg-orange-100 p-1 rounded-full">
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <Award className="h-4 w-4 text-orange-500" />
              </motion.div>
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 