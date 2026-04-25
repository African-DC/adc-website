"use client";

import { cn } from "@/lib/utils";
import { track } from "@/lib/analytics/track";
import { m } from "framer-motion";
import { Maximize2 } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ImageLightbox, type LightboxImage } from "./image-lightbox";

type BlogGalleryProps = {
  images: LightboxImage[];
  eyebrow?: string;
  accentColor?: "orange" | "green";
  columns?: 2 | 4;
  aspect?: "square" | "portrait" | "landscape";
  className?: string;
};

const ACCENT_COLOR: Record<"orange" | "green", string> = {
  orange: "#F97316",
  green: "#1a5d3a",
};

export function BlogGallery({
  images,
  eyebrow,
  accentColor = "orange",
  columns = 4,
  aspect = "portrait",
  className,
}: BlogGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const pathname = usePathname();
  const slug = pathname?.split("/").filter(Boolean).pop();

  const openLightbox = (index: number) => {
    track("blog_gallery_lightbox_open", {
      slug,
      image_index: index,
      total: images.length,
    });
    setActiveIndex(index);
  };

  const navigateLightbox = (index: number) => {
    if (activeIndex === null) {
      setActiveIndex(index);
      return;
    }
    const direction: "prev" | "next" | "thumb" =
      index === (activeIndex + 1) % images.length
        ? "next"
        : index === (activeIndex - 1 + images.length) % images.length
          ? "prev"
          : "thumb";
    track("blog_gallery_lightbox_navigate", {
      slug,
      direction,
      target_index: index,
    });
    setActiveIndex(index);
  };

  const gridClass =
    columns === 4
      ? "grid-cols-2 md:grid-cols-4 gap-4 md:gap-5"
      : "grid-cols-1 md:grid-cols-2 gap-4 md:gap-6";

  const aspectClass =
    aspect === "portrait"
      ? "aspect-[4/5]"
      : aspect === "landscape"
        ? "aspect-[4/3]"
        : "aspect-square";

  const sizes =
    columns === 4
      ? "(max-width: 768px) 50vw, 25vw"
      : "(max-width: 768px) 100vw, 50vw";

  return (
    <>
      <section
        className={cn(
          "py-16 md:py-20 bg-neutral-50 border-t border-neutral-200",
          className,
        )}
      >
        <div className="max-w-7xl mx-auto px-6">
          {eyebrow ? (
            <div className="mb-10 text-xs tracking-[0.22em] text-neutral-600 uppercase">
              <span
                className="inline-block h-px w-10 mr-3 align-middle"
                style={{ background: ACCENT_COLOR[accentColor] }}
              />
              {eyebrow}
            </div>
          ) : null}
          <div className={cn("grid", gridClass)}>
            {images.map((img, i) => (
              <m.button
                key={img.src}
                type="button"
                onClick={() => openLightbox(i)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className={cn(
                  "relative rounded-xl overflow-hidden bg-neutral-100 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 cursor-zoom-in",
                  aspectClass,
                )}
                aria-label={img.alt}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  sizes={sizes}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                  <div className="bg-white/95 backdrop-blur rounded-full p-2 shadow-lg">
                    <Maximize2
                      className="h-3.5 w-3.5 text-neutral-900"
                      strokeWidth={2}
                    />
                  </div>
                </div>
              </m.button>
            ))}
          </div>
        </div>
      </section>

      <ImageLightbox
        images={images}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onChange={navigateLightbox}
      />
    </>
  );
}
