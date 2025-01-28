"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

interface ImageType {
  src: string;
  alt: string;
}

export function CTASection() {
  const [images, setImages] = useState<ImageType[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const loadImages = useCallback(() => {
    const imageList: ImageType[] = [
      { src: "/img/crea1.webp", alt: "Image 1" },
      { src: "/img/crea2.jpg", alt: "Image 2" },
      { src: "/img/crea3.jpg", alt: "Image 3" },
    ];
    setImages(imageList);
  }, []);

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  useEffect(() => {
    loadImages();
  }, [loadImages]);

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;

    if (autoplay) {
      interval = setInterval(() => {
        handleNext();
      }, 5000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [autoplay, handleNext]);

  const handleMouseEnter = () => setAutoplay(false);
  const handleMouseLeave = () => setAutoplay(true);

  if (images.length === 0) return null;

  return (
    <section className="relative py-20 overflow-hidden">
      <div
        className="relative max-w-7xl mx-auto px-4"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative h-[500px] rounded-2xl overflow-hidden">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transform scale-105 transition-transform duration-1000"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff942b]/90 to-orange-600/90 mix-blend-multiply" />
            </div>
          ))}
          <div className="absolute inset-0 flex items-center justify-between p-4 z-10">
            <button
              onClick={handlePrevious}
              className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
            >
              ←
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
            >
              →
            </button>
          </div>
          <div className="absolute inset-0 flex items-center justify-center z-0">
            <div className="text-center text-white p-8">
              <h2 className="text-4xl font-bold mb-4 font-['Open_Sans']">
                Transformez votre présence digitale
              </h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto font-['Open_Sans']">
                Découvrez comment nous pouvons vous aider à atteindre vos
                objectifs numériques.
              </p>
              <a
                href="/contact"
                className="inline-block px-8 py-3 bg-white text-[#ff942b] rounded-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105 font-['Open_Sans']"
              >
                Commencer maintenant
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
