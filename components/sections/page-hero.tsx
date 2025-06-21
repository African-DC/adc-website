"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Sparkles, Lightbulb, PenTool, Briefcase, MessageSquare, ShieldCheck, LightbulbIcon, MailIcon } from "lucide-react";
import { AbstractBackground } from "./abstract-backgrounds";

interface PageHeroProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  breadcrumbs: { label: string; href: string }[];
  accentColor?: string;
  pageTheme?: 'about' | 'expertise' | 'portfolio' | 'contact' | 'default';
  useAbstractBackground?: boolean;
}

export function PageHero({
  title,
  subtitle,
  backgroundImage,
  breadcrumbs,
  accentColor,
  pageTheme = 'default',
  useAbstractBackground = true,
}: PageHeroProps) {
  // Determine the theme-based styles
  const getThemeStyles = () => {
    switch (pageTheme) {
      case 'about':
        return {
          gradient: accentColor || "from-purple-600 to-indigo-500",
          patternColor: "#ffffff12",
          accent: "purple-300",
          icon: <ShieldCheck className="h-10 w-10 text-purple-200" />,
          pattern: "bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:24px_24px]"
        };
      case 'expertise':
        return {
          gradient: accentColor || "from-blue-600 to-cyan-500",
          patternColor: "#ffffff12",
          accent: "blue-300",
          icon: <LightbulbIcon className="h-10 w-10 text-blue-200" />,
          pattern: "bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:24px_24px]"
        };
      case 'portfolio':
        return {
          gradient: accentColor || "from-emerald-600 to-green-500",
          patternColor: "#ffffff12",
          accent: "emerald-300",
          icon: <Sparkles className="h-10 w-10 text-emerald-200" />,
          pattern: "bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:24px_24px]"
        };
      case 'contact':
        return {
          gradient: accentColor || "from-orange-600 to-amber-500",
          patternColor: "#ffffff12",
          accent: "orange-300",
          icon: <MailIcon className="h-10 w-10 text-orange-200" />,
          pattern: "bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:24px_24px]"
        };
      default:
        return {
          gradient: accentColor || "from-orange-500 to-amber-400",
          patternColor: "#ffffff12",
          accent: "orange-300",
          icon: <Sparkles className="h-10 w-10 text-orange-200" />,
          pattern: "bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:24px_24px]"
        };
    }
  };

  const themeStyles = getThemeStyles();

  return (
    <section className="relative min-h-[40vh] flex items-center overflow-hidden">
      {/* Arrière-plan avec image ou fond abstrait */}
      <div className="absolute inset-0 z-0">
        {useAbstractBackground ? (
          <AbstractBackground theme={pageTheme === 'default' ? 'contact' : pageTheme} />
        ) : (
          backgroundImage && (
            <>
              <Image
                src={backgroundImage}
                alt={title}
                fill
                priority
                className="object-cover object-center"
              />
              <div className={`absolute inset-0 bg-gradient-to-r ${themeStyles.gradient} opacity-85 mix-blend-multiply`} />
            </>
          )
        )}
        
        {/* Motif géométrique */}
        <div className="absolute inset-0 opacity-15">
          <div className={`h-full w-full ${themeStyles.pattern}`}></div>
        </div>
        
        {/* Cercles et éléments décoratifs */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-white rounded-full opacity-10 blur-[60px]"></div>
        <div className="absolute -bottom-40 -left-20 w-80 h-80 bg-white rounded-full opacity-10 blur-[80px]"></div>
        
        {/* Éléments spécifiques au thème */}
        <div className={`absolute top-10 right-10 w-10 h-48 bg-${themeStyles.accent} opacity-20 rounded-full blur-md`}></div>
        <div className={`absolute bottom-10 left-1/4 w-24 h-24 bg-${themeStyles.accent} opacity-10 rounded-md blur-md transform rotate-45`}></div>
      </div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-20 md:py-32">
        {/* Icône thématique */}
        <div className="absolute right-10 top-10 opacity-70 hidden md:block">
          {themeStyles.icon}
        </div>
        
        {/* Fil d'Ariane */}
        <div className="mb-8">
          <nav className="flex items-center space-x-2 text-sm text-white/80">
            <Link 
              href="/" 
              className="hover:text-white transition-colors duration-200"
            >
              Accueil
            </Link>
            {breadcrumbs.map((crumb, index) => (
              <div key={crumb.href} className="flex items-center space-x-2">
                <ChevronRight className="h-4 w-4 text-white/60" />
                {index === breadcrumbs.length - 1 ? (
                  <span className="text-white font-medium">{crumb.label}</span>
                ) : (
                  <Link 
                    href={crumb.href}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {crumb.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
        
        {/* Titre et Sous-titre */}
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
          >
            <span className="relative inline-block">
              <span className="relative z-10">{title}</span>
              <span className="absolute -bottom-2 left-0 right-0 h-3 bg-white/20 rounded-lg -z-10"></span>
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-white/90"
          >
            {subtitle}
          </motion.p>
        </div>
        
        {/* Élément décoratif supplémentaire spécifique à chaque page */}
        {pageTheme === 'about' && (
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="absolute top-20 left-1/2 transform -translate-x-1/2 md:left-auto md:right-40 bg-purple-400/20 backdrop-blur-sm h-16 w-16 rounded-lg rotate-12 z-[-1]"
          />
        )}
        
        {pageTheme === 'expertise' && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="absolute top-10 right-1/3 bg-blue-400/20 backdrop-blur-sm h-20 w-20 rounded-full z-[-1]"
          />
        )}
        
        {pageTheme === 'portfolio' && (
          <motion.div
            initial={{ opacity: 0, rotate: -20 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="absolute bottom-10 right-40 bg-emerald-400/20 backdrop-blur-sm h-16 w-16 rounded-md transform rotate-45 z-[-1]"
          />
        )}
        
        {pageTheme === 'contact' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="absolute bottom-20 right-20 bg-orange-400/20 backdrop-blur-sm h-20 w-20 rounded-full z-[-1]"
          />
        )}
        
        {/* Formes décoratives communes */}
        <div className="absolute bottom-0 right-0 transform translate-y-1/2 translate-x-1/4">
          <div className="w-40 h-40 border-4 border-white/10 rounded-full"></div>
        </div>
        <div className="absolute top-1/4 right-1/4 hidden md:block">
          <div className="w-16 h-16 border-2 border-white/20 rounded-lg transform rotate-45"></div>
        </div>
      </div>
    </section>
  );
} 