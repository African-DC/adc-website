"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, m } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect } from "react";

export type LightboxImage = { src: string; alt: string };

type ImageLightboxProps = {
  images: LightboxImage[];
  activeIndex: number | null;
  onClose: () => void;
  onChange: (index: number) => void;
};

export function ImageLightbox({
  images,
  activeIndex,
  onClose,
  onChange,
}: ImageLightboxProps) {
  const isOpen = activeIndex !== null;

  const goPrev = useCallback(() => {
    if (activeIndex === null) return;
    onChange((activeIndex - 1 + images.length) % images.length);
  }, [activeIndex, images.length, onChange]);

  const goNext = useCallback(() => {
    if (activeIndex === null) return;
    onChange((activeIndex + 1) % images.length);
  }, [activeIndex, images.length, onChange]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "ArrowRight") goNext();
    };
    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, onClose, goPrev, goNext]);

  return (
    <AnimatePresence>
      {isOpen && activeIndex !== null ? (
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          className="fixed inset-0 z-[100] flex flex-col bg-neutral-950/98 md:bg-neutral-950/95 md:backdrop-blur-md"
        >
          <div className="relative flex items-center justify-between px-6 pt-6 md:px-8 md:pt-8 z-10">
            <div className="text-white/70 text-xs tracking-[0.2em] uppercase font-medium">
              {String(activeIndex + 1).padStart(2, "0")}
              <span className="mx-2 text-white/30">/</span>
              {String(images.length).padStart(2, "0")}
            </div>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              aria-label="Close"
              className="h-11 w-11 rounded-full bg-white/5 hover:bg-white/15 text-white flex items-center justify-center backdrop-blur border border-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
            >
              <X className="h-5 w-5" strokeWidth={1.8} />
            </button>
          </div>

          <div
            className="relative flex-1 flex items-center justify-center px-4 md:px-20 py-6 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {images.length > 1 ? (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goPrev();
                }}
                aria-label="Previous image"
                className="hidden md:flex absolute left-4 md:left-8 z-10 h-14 w-14 rounded-full bg-white/5 hover:bg-white/15 text-white items-center justify-center backdrop-blur border border-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
              >
                <ChevronLeft className="h-7 w-7" strokeWidth={1.6} />
              </button>
            ) : null}

            <AnimatePresence mode="wait" initial={false}>
              <m.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.28, ease: [0.2, 0.8, 0.2, 1] }}
                drag={images.length > 1 ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -80) goNext();
                  else if (info.offset.x > 80) goPrev();
                }}
                className="relative w-full h-full max-w-6xl flex flex-col items-center justify-center gap-4 select-none"
              >
                <div className="relative w-full flex-1 min-h-0">
                  <Image
                    src={images[activeIndex].src}
                    alt={images[activeIndex].alt}
                    fill
                    priority
                    draggable={false}
                    className="object-contain"
                    sizes="90vw"
                  />
                </div>
                <p className="text-white/70 text-sm md:text-base text-center max-w-2xl px-4 font-serif italic">
                  {images[activeIndex].alt}
                </p>
              </m.div>
            </AnimatePresence>

            {images.length > 1 ? (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goNext();
                }}
                aria-label="Next image"
                className="hidden md:flex absolute right-4 md:right-8 z-10 h-14 w-14 rounded-full bg-white/5 hover:bg-white/15 text-white items-center justify-center backdrop-blur border border-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
              >
                <ChevronRight className="h-7 w-7" strokeWidth={1.6} />
              </button>
            ) : null}
          </div>

          {images.length > 1 ? (
            <div
              className="relative flex items-center justify-center gap-2 px-6 pb-6 md:pb-8 overflow-x-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-2">
                {images.map((img, i) => (
                  <button
                    key={img.src}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onChange(i);
                    }}
                    aria-label={`Go to image ${i + 1}`}
                    aria-current={i === activeIndex}
                    className={cn(
                      "relative flex-shrink-0 h-14 w-14 rounded-lg overflow-hidden border-2 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500",
                      i === activeIndex
                        ? "border-orange-500 opacity-100 scale-105"
                        : "border-white/10 opacity-50 hover:opacity-90 hover:border-white/30",
                    )}
                  >
                    <Image
                      src={img.src}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  </button>
                ))}
              </div>
            </div>
          ) : null}
        </m.div>
      ) : null}
    </AnimatePresence>
  );
}
