"use client";

import { useState, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';
import { cn } from '@/lib/utils';

interface ProgressiveImageProps extends Omit<ImageProps, 'onLoad' | 'onError'> {
  lowQualitySrc?: string;
  containerClassName?: string;
}

/**
 * Composant pour charger progressivement les images avec un effet de flou
 * Utilise une version basse qualité de l'image pendant le chargement
 */
export function ProgressiveImage({
  src,
  alt,
  lowQualitySrc = "data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==",
  className,
  containerClassName,
  ...props
}: ProgressiveImageProps) {
  const [loading, setLoading] = useState(true);
  const [currentSrc, setCurrentSrc] = useState(lowQualitySrc);

  useEffect(() => {
    // Reset loading state when source changes
    setLoading(true);
    setCurrentSrc(lowQualitySrc);
  }, [src, lowQualitySrc]);

  return (
    <div className={cn("relative overflow-hidden", containerClassName)}>
      <Image
        {...props}
        src={src}
        alt={alt}
        className={cn(
          className,
          "transition-opacity duration-300",
          loading ? "opacity-0" : "opacity-100"
        )}
        onLoadingComplete={() => {
          setLoading(false);
          setCurrentSrc(src as string);
        }}
      />
      
      {loading && (
        <div className="absolute inset-0 animate-pulse bg-gray-200">
          <Image
            {...props}
            src={lowQualitySrc}
            alt={alt}
            className={cn(
              className,
              "blur-sm transition-opacity duration-500 opacity-30"
            )}
          />
        </div>
      )}
    </div>
  );
}

/**
 * Composant pour afficher une image avec un effet de flou
 * à partir d'une URL de données base64 très petite pendant le chargement
 */
export function BlurImage({
  src,
  alt,
  className,
  ...props
}: Omit<ImageProps, 'placeholder' | 'blurDataURL'>) {
  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
      loading="lazy"
      {...props}
    />
  );
} 