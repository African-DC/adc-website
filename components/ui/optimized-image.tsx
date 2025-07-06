"use client";

import { useState, useEffect } from "react";
import Image, { ImageProps } from "next/image";
import {
  getImageMetadata,
  ImageMetadata,
  ImageThumbnail,
} from "@/lib/image-utils";
import { cn } from "@/lib/utils";

interface OptimizedImageProps extends Omit<ImageProps, "src" | "blurDataURL"> {
  src: string;
  size?: "thumbnail" | "small" | "medium" | "large";
  containerClassName?: string;
}

export function OptimizedImage({
  src,
  alt,
  size = "medium",
  width,
  height,
  className,
  containerClassName,
  priority,
  fill,
  ...props
}: OptimizedImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [fallbackSrc, setFallbackSrc] = useState<string | null>(null);
  const [metadata, setMetadata] = useState<ImageMetadata | null>(null);

  // Utiliser le chemin direct quand on est en build statique
  // pour éviter les problèmes de chargement des manifestes
  const imageSrc = fallbackSrc || src;
  const blurDataURL =
    "data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==";

  useEffect(() => {
    // Essayer de charger les métadonnées, mais continuer même si ça échoue
    async function fetchMetadata() {
      try {
        const data = await getImageMetadata(src);
        if (data) {
          setMetadata(data);
          const thumbnail = data.thumbnails?.find(
            (t: ImageThumbnail) => t.size === size
          );
          if (thumbnail) {
            setFallbackSrc(thumbnail.path);
          }
        }
      } catch (error) {
        console.warn(
          `Impossible de charger les métadonnées pour l'image: ${src}`,
          error
        );
      }
    }

    fetchMetadata();

    // Réinitialiser l'état de chargement lorsque la source change
    setLoaded(false);
  }, [src, size]);

  const handleLoad = () => {
    setLoaded(true);
  };

  const handleError = () => {
    // En cas d'erreur, utiliser la source originale comme fallback
    if (fallbackSrc && fallbackSrc !== src) {
      console.warn(
        `Impossible de charger l'image optimisée, utilisation de la source originale: ${src}`
      );
      setFallbackSrc(src);
    } else {
      setLoaded(true); // Marquer comme chargé pour arrêter le spinner
      console.error(`Échec de chargement de l'image: ${src}`);
    }
  };

  // Déterminer les dimensions appropriées
  const thumbnail = metadata?.thumbnails?.find(
    (t: ImageThumbnail) => t.size === size
  );

  // Déterminer si nous utilisons fill ou dimensions explicites
  const useFill = fill === true;
  // Si fill est utilisé, width et height doivent être undefined
  const imgWidth = useFill ? undefined : thumbnail?.width || width || 800;
  const imgHeight = useFill ? undefined : thumbnail?.height || height || 600;

  return (
    <div
      className={cn(
        "relative overflow-hidden",
        useFill && "w-full h-full",
        containerClassName
      )}
    >
      {!loaded && (
        <div className="absolute inset-0 bg-slate-100 animate-pulse flex items-center justify-center z-0">
          <div className="text-slate-400 text-sm">Chargement...</div>
        </div>
      )}

      <Image
        src={imageSrc}
        alt={alt || "Image"}
        width={imgWidth}
        height={imgHeight}
        fill={useFill}
        className={cn(
          "transition-opacity duration-300",
          loaded ? "opacity-100" : "opacity-0",
          className
        )}
        onLoad={handleLoad}
        onError={handleError}
        placeholder="blur"
        blurDataURL={blurDataURL}
        sizes={
          useFill
            ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            : `(max-width: 640px) 100vw, (max-width: 1024px) 50vw, ${imgWidth}px`
        }
        loading={priority ? "eager" : "lazy"}
        priority={priority}
        {...props}
      />
    </div>
  );
}

export function BlurImage({
  src,
  alt,
  width,
  height,
  className,
  containerClassName,
  fill,
  ...props
}: Omit<ImageProps, "placeholder" | "blurDataURL"> & {
  containerClassName?: string;
}) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  // Utiliser un blurDataURL statique pour simplifier et éviter les problèmes de compatibilité
  const blurDataURL =
    "data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==";

  const handleLoad = () => {
    setLoaded(true);
  };

  const handleError = () => {
    setError(true);
    setLoaded(true);
  };

  // Déterminer si nous utilisons fill ou dimensions explicites
  const useFill = fill === true;
  // Si fill est utilisé, width et height doivent être undefined
  const imgWidth = useFill ? undefined : width || 800;
  const imgHeight = useFill ? undefined : height || 600;

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-slate-100",
        useFill && "w-full h-full",
        containerClassName
      )}
    >
      {!loaded && !error && (
        <div className="absolute inset-0 bg-slate-100 animate-pulse flex items-center justify-center z-0">
          <div className="text-slate-400 text-sm">Chargement...</div>
        </div>
      )}

      {error ? (
        <div className="absolute inset-0 bg-slate-100 flex items-center justify-center">
          <div className="text-slate-400 text-sm">Image non disponible</div>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt || "Image"}
          width={imgWidth}
          height={imgHeight}
          fill={useFill}
          className={cn(
            "transition-opacity duration-300",
            loaded ? "opacity-100" : "opacity-0",
            className
          )}
          onLoad={handleLoad}
          onError={handleError}
          placeholder="blur"
          blurDataURL={blurDataURL}
          sizes={
            useFill
              ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              : `(max-width: 640px) 100vw, (max-width: 1024px) 50vw, ${imgWidth}px`
          }
          {...props}
        />
      )}
    </div>
  );
}
