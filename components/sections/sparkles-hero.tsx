"use client";
import { HeroParallax } from "../ui/hero-parallax";

const products = [
  {
    title: "Création Digitale",
    link: "/creation-1",
    thumbnail: "/img/crea1.webp",
  },
  {
    title: "Solutions Numériques",
    link: "/creation-2",
    thumbnail: "/img/crea2.jpg",
  },
  {
    title: "Innovation Digitale",
    link: "/creation-3",
    thumbnail: "/img/crea3.jpg",
  },
  {
    title: "Expertise Digitale",
    link: "/creation-4",
    thumbnail: "/img/crea.jpg",
  },
  {
    title: "Création Digitale",
    link: "/creation-5",
    thumbnail: "/img/crea1.webp",
  },
  {
    title: "Solutions Numériques",
    link: "/creation-6",
    thumbnail: "/img/crea2.jpg",
  },
  {
    title: "Innovation Digitale",
    link: "/creation-7",
    thumbnail: "/img/crea3.jpg",
  },
  {
    title: "Expertise Digitale",
    link: "/creation-8",
    thumbnail: "/img/crea.jpg",
  },
  {
    title: "Création Digitale",
    link: "/creation-9",
    thumbnail: "/img/crea1.webp",
  },
  {
    title: "Solutions Numériques",
    link: "/creation-10",
    thumbnail: "/img/crea2.jpg",
  },
  {
    title: "Innovation Digitale",
    link: "/creation-11",
    thumbnail: "/img/crea3.jpg",
  },
  {
    title: "Expertise Digitale",
    link: "/creation-12",
    thumbnail: "/img/crea.jpg",
  },
  {
    title: "Création Digitale",
    link: "/creation-13",
    thumbnail: "/img/crea1.webp",
  },
  {
    title: "Solutions Numériques",
    link: "/creation-14",
    thumbnail: "/img/crea2.jpg",
  },
  {
    title: "Innovation Digitale",
    link: "/creation-15",
    thumbnail: "/img/crea3.jpg",
  },
];

export function SparklesHero() {
  return (
    <div className="relative w-full">
      <HeroParallax products={products} /> 
    </div>
  );
}
