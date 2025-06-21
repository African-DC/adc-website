"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";

interface AbstractBackgroundProps {
  theme: 'about' | 'expertise' | 'portfolio' | 'contact';
  opacity?: number;
}

/**
 * Composant générant des arrière-plans abstraits et élégants pour les pages
 * en utilisant des dégradés et des formes géométriques.
 * Chaque thème a sa propre palette de couleurs et style.
 */
export function AbstractBackground({ theme, opacity = 0.9 }: AbstractBackgroundProps) {
  // Configuration des couleurs et styles en fonction du thème
  const themeStyles = useMemo(() => {
    switch (theme) {
      case 'about':
        return {
          gradientStart: '#764BA2',
          gradientEnd: '#667EEA',
          gradient: 'bg-gradient-to-br from-purple-600 to-blue-500',
          bubbles: [
            { size: 300, left: '5%', top: '10%', delay: 0, color: 'bg-purple-500' },
            { size: 200, left: '80%', top: '20%', delay: 0.3, color: 'bg-blue-500' },
            { size: 150, left: '30%', top: '60%', delay: 0.5, color: 'bg-indigo-500' },
            { size: 100, left: '70%', top: '70%', delay: 0.7, color: 'bg-blue-400' }
          ]
        };
      
      case 'expertise':
        return {
          gradientStart: '#3A7BD5',
          gradientEnd: '#00D2FF',
          gradient: 'bg-gradient-to-br from-blue-600 to-cyan-500',
          bubbles: [
            { size: 250, left: '10%', top: '15%', delay: 0.2, color: 'bg-blue-500' },
            { size: 180, left: '75%', top: '25%', delay: 0, color: 'bg-cyan-500' },
            { size: 120, left: '25%', top: '65%', delay: 0.4, color: 'bg-blue-400' },
            { size: 90, left: '60%', top: '75%', delay: 0.6, color: 'bg-cyan-400' }
          ]
        };
      
      case 'portfolio':
        return {
          gradientStart: '#11998E',
          gradientEnd: '#38EF7D',
          gradient: 'bg-gradient-to-br from-emerald-600 to-green-500',
          bubbles: [
            { size: 280, left: '15%', top: '20%', delay: 0.1, color: 'bg-emerald-500' },
            { size: 190, left: '70%', top: '15%', delay: 0.3, color: 'bg-green-500' },
            { size: 140, left: '20%', top: '70%', delay: 0.5, color: 'bg-emerald-400' },
            { size: 110, left: '65%', top: '65%', delay: 0.2, color: 'bg-green-400' }
          ]
        };
      
      case 'contact':
        return {
          gradientStart: '#FF5F6D',
          gradientEnd: '#FFC371',
          gradient: 'bg-gradient-to-br from-orange-600 to-amber-500',
          bubbles: [
            { size: 260, left: '20%', top: '25%', delay: 0.2, color: 'bg-orange-500' },
            { size: 170, left: '65%', top: '20%', delay: 0.4, color: 'bg-amber-500' },
            { size: 130, left: '15%', top: '65%', delay: 0, color: 'bg-orange-400' },
            { size: 95, left: '75%', top: '70%', delay: 0.3, color: 'bg-amber-400' }
          ]
        };
    }
  }, [theme]);

  return (
    <div className="absolute inset-0 overflow-hidden" style={{opacity}}>
      {/* Fond avec dégradé */}
      <div className={`absolute inset-0 ${themeStyles.gradient}`}></div>
      
      {/* Motif de points */}
      <div className="absolute inset-0 opacity-15">
        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>
      
      {/* Formes abstraites (bulles) */}
      {themeStyles.bubbles.map((bubble, index) => (
        <motion.div
          key={index}
          initial={{ 
            opacity: 0,
            scale: 0.8,
            x: bubble.left === '5%' || bubble.left === '10%' || bubble.left === '15%' || bubble.left === '20%' || bubble.left === '25%' || bubble.left === '30%' ? -50 : 50,
          }}
          animate={{ 
            opacity: 0.4,
            scale: 1,
            x: 0
          }}
          transition={{
            duration: 1.5,
            delay: bubble.delay,
          }}
          className={`absolute ${bubble.color} rounded-full opacity-40 blur-3xl`}
          style={{
            width: bubble.size,
            height: bubble.size,
            left: bubble.left,
            top: bubble.top,
          }}
        />
      ))}
      
      {/* Élément de vague légère en bas */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white/10 backdrop-blur-sm" 
        style={{
          clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 100%)'
        }}
      ></div>
      
      {/* Élément décoratif spécifique au thème */}
      {theme === 'about' && (
        <div className="absolute bottom-10 right-10 w-32 h-32 border-4 border-white/10 rounded-full"></div>
      )}
      {theme === 'expertise' && (
        <div className="absolute top-20 left-[20%] w-40 h-12 border-2 border-white/10 rounded-lg transform rotate-6"></div>
      )}
      {theme === 'portfolio' && (
        <div className="absolute top-[40%] left-[80%] w-24 h-24 border-2 border-white/10 rounded-md transform -rotate-12"></div>
      )}
      {theme === 'contact' && (
        <div className="absolute top-[30%] left-[15%] w-16 h-48 border-2 border-white/10 rounded-full transform -rotate-45"></div>
      )}
    </div>
  );
} 