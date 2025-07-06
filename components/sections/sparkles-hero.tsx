"use client";
import { HeroParallax } from "../ui/hero-parallax";
import { Montserrat } from "next/font/google";
import { motion, MotionValue } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

const products = [
  {
    title: "Mima Makeup",
    link: "/creation-1",
    thumbnail: "/img/header_img/Logo Mima makeup_Plan de travail 1.jpg",
  },
  {
    title: "Mima Collection",
    link: "/creation-2",
    thumbnail: "/img/header_img/Mockup tshirt Mima makeup (1).jpg",
  },
  {
    title: "Mima Accessories",
    link: "/creation-3",
    thumbnail: "/img/header_img/Mockup Casquette.jpg",
  },
  {
    title: "Konate Marine Logistics",
    link: "/creation-4",
    thumbnail: "/img/header_img/Post Konate marine log.jpg",
  },
  {
    title: "KML Services",
    link: "/creation-5",
    thumbnail: "/img/header_img/Flyers konate marine logistics.jpg",
  },
  {
    title: "KML Brand",
    link: "/creation-6",
    thumbnail: "/img/header_img/Logo Komate marine logistics-04 (1).jpg",
  },
  {
    title: "FEJECI",
    link: "/creation-7",
    thumbnail: "/img/header_img/PHOTO-2024-03-23-08-22-55.jpg",
  },
  {
    title: "KML Services",
    link: "/creation-8",
    thumbnail: "/img/header_img/man-holding-blank-sign_23-2148542728.jpg",
  },
  {
    title: "Idée d'Afrique Products",
    link: "/creation-9",
    thumbnail: "/img/header_img/Flyers .jpeg",
  },
  {
    title: "Doudas",
    link: "/creation-10",
    thumbnail: "/img/header_img/0bda58a3-37b7-4a50-a014-83f7b79862f3.jpg",
  },
  {
    title: "Fedex",
    link: "/creation-11",
    thumbnail: "/img/header_img/525ae4d7-9437-4dbe-b25c-ce1ee913dc17.jpg",
  },
  {
    title: "Africa Brands",
    link: "/creation-12",
    thumbnail: "/img/header_img/02b21557-4e81-46dd-ac22-bd57b7f78d13.jpg",
  },
  {
    title: "Volaille d'Or",
    link: "/creation-13",
    thumbnail: "/img/header_img/2faf4b9d-0ae4-4f01-a304-a58805df757b.jpg",
  },
  {
    title: "Cannelles Editions",
    link: "/creation-14",
    thumbnail: "/img/header_img/34c46d2a-8da2-4882-a625-6f8802bd641c.jpg",
  },
  {
    title: "Idée d'Afrique Cosmétiques",
    link: "/creation-15",
    thumbnail: "/img/header_img/cosmetic-jar-mockup_53876-66986.jpg",
  },
];

export function SparklesHero() {
  return (
    <div className={`relative w-full ${montserrat.className}`}>
      <HeroParallax products={products} />
    </div>
  );
}

export function ProductCard({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
    >
      <Link
        href={product.link}
        className="block group-hover/product:shadow-2xl"
      >
        <div className="absolute inset-0 h-full w-full rounded-xl bg-gray-100 animate-pulse" />
        <div className="relative h-full w-full">
          <Image
            src={product.thumbnail}
            fill
            priority={false}
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 30rem"
            quality={75}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
            className="object-cover object-center rounded-xl"
            alt={product.title}
            onLoad={(e) => {
              // Masquer l'animation de chargement une fois que l'image est chargée
              const target = e.target as HTMLImageElement;
              const parent = target.parentElement?.parentElement;
              if (parent) {
                const loader = parent.querySelector(".animate-pulse");
                if (loader) {
                  loader.classList.add("opacity-0");
                }
              }
            }}
          />
        </div>
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-gradient-to-t from-black to-transparent pointer-events-none rounded-xl"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white title-small font-semibold tracking-wide">
        {product.title}
      </h2>
    </motion.div>
  );
}
