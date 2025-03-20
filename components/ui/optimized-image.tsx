'use client';

import React, { useState, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';
import { useOptimizedImage, getImageMetadata, ImageMetadata, ImageThumbnail } from '@/lib/image-utils';
import { cn } from '@/lib/utils';

interface OptimizedImageProps extends Omit<ImageProps, 'src' | 'blurDataURL'> {
  src: string;
  size?: 'thumbnail' | 'small' | 'medium' | 'large';
  containerClassName?: string;
}

export function OptimizedImage({
  src,
  alt,
  size = 'medium',
  width,
  height,
  className,
  containerClassName,
  priority,
  fill,
  ...props
}: OptimizedImageProps) {
  const { src: optimizedSrc, blurDataURL, isLoading } = useOptimizedImage(src, size);
  const [loaded, setLoaded] = useState(false);
  const [metadata, setMetadata] = useState<ImageMetadata | null>(null);

  useEffect(() => {
    async function fetchMetadata() {
      const data = await getImageMetadata(src);
      if (data) {
        setMetadata(data);
      }
    }
    
    fetchMetadata();
  }, [src]);

  const handleLoad = () => {
    setLoaded(true);
  };

  const thumbnail = metadata?.thumbnails?.find((t: ImageThumbnail) => t.size === size);
  
  // Déterminer si nous utilisons fill ou dimensions explicites
  const useFill = fill === true;
  const imgWidth = useFill ? undefined : (thumbnail?.width || width || 1200);
  const imgHeight = useFill ? undefined : (thumbnail?.height || height || 800);
  
  return (
    <div className={cn(
      "relative overflow-hidden", 
      useFill && "w-full h-full",
      containerClassName
    )}>
      {!loaded && (
        <div className="absolute inset-0 bg-slate-100 animate-pulse flex items-center justify-center z-0">
          <div className="text-slate-400 text-sm">Chargement...</div>
        </div>
      )}
      
      <Image
        src={optimizedSrc}
        alt={alt}
        width={imgWidth}
        height={imgHeight}
        fill={useFill}
        className={cn(
          "transition-opacity duration-300",
          loaded ? "opacity-100" : "opacity-0",
          className
        )}
        onLoad={handleLoad}
        placeholder={blurDataURL ? "blur" : "empty"}
        blurDataURL={blurDataURL}
        sizes={`(max-width: 640px) 100vw, (max-width: 1024px) 50vw, ${imgWidth || 1200}px`}
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
}: Omit<ImageProps, 'placeholder' | 'blurDataURL'> & { containerClassName?: string }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [blurDataURL, setBlurDataURL] = useState<string | undefined>(undefined);
  
  useEffect(() => {
    async function fetchMetadata() {
      try {
        const data = await getImageMetadata(src as string);
        if (data?.blurDataURL) {
          setBlurDataURL(data.blurDataURL);
        }
      } catch (e) {
        console.error('Error fetching image metadata:', e);
      }
    }
    
    fetchMetadata();
  }, [src]);

  const handleLoad = () => {
    setLoaded(true);
  };

  const handleError = () => {
    setError(true);
    setLoaded(true);
  };

  // Déterminer si nous utilisons fill ou dimensions explicites
  const useFill = fill === true;
  const imgWidth = useFill ? undefined : (width || 1200);
  const imgHeight = useFill ? undefined : (height || 800);

  return (
    <div className={cn(
      "relative overflow-hidden bg-slate-100",
      useFill && "w-full h-full",
      containerClassName
    )}>
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
          alt={alt}
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
          placeholder={blurDataURL ? "blur" : "empty"}
          blurDataURL={blurDataURL}
          sizes={`(max-width: 640px) 100vw, (max-width: 1024px) 50vw, ${imgWidth || 1200}px`}
          {...props}
        />
      )}
    </div>
  );
} 