/**
 * Utilitaires pour la gestion des images optimisées
 */

import type { ImageProps } from 'next/image';
import React from 'react';

// Interface pour les métadonnées d'une image
export interface ImageThumbnail {
  size: string;
  path: string;
  webpPath: string;
  width: number;
  height: number;
  fileSize: number;
  webpSize: number;
}

export interface ImageMetadata {
  original: string;
  thumbnails: ImageThumbnail[];
  blurDataURL: string;
  timestamp: string;
}

export interface ImageManifest {
  [key: string]: ImageMetadata;
}

// Fonction pour charger le manifeste des images
let imageManifest: ImageManifest | null = null;

export async function loadImageManifest(): Promise<ImageManifest> {
  if (imageManifest) {
    return imageManifest;
  }

  try {
    const response = await fetch('/img/image-manifest.json');
    if (!response.ok) {
      throw new Error('Impossible de charger le manifeste des images');
    }
    const manifest = await response.json();
    imageManifest = manifest;
    return manifest;
  } catch (error) {
    console.error('Erreur lors du chargement du manifeste des images:', error);
    return {};
  }
}

// Fonction pour obtenir les métadonnées d'une image
export async function getImageMetadata(imagePath: string): Promise<ImageMetadata | null> {
  const manifest = await loadImageManifest();
  return manifest[imagePath] || null;
}

// Fonction pour obtenir le chemin d'une image optimisée
export async function getOptimizedImagePath(
  imagePath: string, 
  size: 'thumbnail' | 'small' | 'medium' | 'large' = 'medium',
  preferWebP: boolean = true
): Promise<string> {
  const metadata = await getImageMetadata(imagePath);
  
  if (!metadata) {
    return imagePath; // Retourner le chemin original si pas de métadonnées
  }
  
  const thumbnail = metadata.thumbnails.find(t => t.size === size);
  
  if (!thumbnail) {
    return imagePath; // Retourner le chemin original si la taille demandée n'existe pas
  }
  
  return preferWebP ? thumbnail.webpPath : thumbnail.path;
}

// Fonction pour obtenir les propriétés d'une image optimisée pour Next.js Image
export async function getOptimizedImageProps(
  imagePath: string,
  size: 'thumbnail' | 'small' | 'medium' | 'large' = 'medium'
): Promise<Partial<ImageProps>> {
  const metadata = await getImageMetadata(imagePath);
  
  if (!metadata) {
    return {
      src: imagePath
    };
  }
  
  const thumbnail = metadata.thumbnails.find(t => t.size === size);
  
  if (!thumbnail) {
    return {
      src: imagePath
    };
  }
  
  return {
    src: thumbnail.path,
    width: thumbnail.width,
    height: thumbnail.height,
    blurDataURL: metadata.blurDataURL,
    placeholder: "blur"
  };
}

// Fonction pour obtenir une URL d'image avec la bonne taille
export function getSizedImageUrl(imagePath: string, size: 'thumbnail' | 'small' | 'medium' | 'large' = 'medium'): string {
  if (!imagePath) return '';
  
  // Vérifier si l'image est déjà une version optimisée
  if (imagePath.includes('-thumbnail') || 
      imagePath.includes('-small') || 
      imagePath.includes('-medium') || 
      imagePath.includes('-large')) {
    return imagePath;
  }
  
  const extension = imagePath.split('.').pop() || '';
  return imagePath.replace(`.${extension}`, `-${size}.${extension}`);
}

// Hook personnalisé pour utiliser des images optimisées
export function useOptimizedImage(
  imagePath: string, 
  size: 'thumbnail' | 'small' | 'medium' | 'large' = 'medium'
): {
  src: string;
  blurDataURL?: string;
  isLoading: boolean;
} {
  const [state, setState] = React.useState({
    src: imagePath,
    blurDataURL: undefined as string | undefined,
    isLoading: true
  });
  
  React.useEffect(() => {
    let isMounted = true;
    
    async function loadOptimizedImage() {
      try {
        const metadata = await getImageMetadata(imagePath);
        
        if (!metadata || !isMounted) return;
        
        const thumbnail = metadata.thumbnails.find(t => t.size === size);
        
        if (thumbnail && isMounted) {
          const supportsWebP = checkWebPSupport();
          setState({
            src: supportsWebP ? thumbnail.webpPath : thumbnail.path,
            blurDataURL: metadata.blurDataURL,
            isLoading: false
          });
        }
      } catch (error) {
        console.error('Erreur lors du chargement de l\'image optimisée:', error);
        if (isMounted) {
          setState({
            src: imagePath,
            blurDataURL: undefined,
            isLoading: false
          });
        }
      }
    }
    
    loadOptimizedImage();
    
    return () => {
      isMounted = false;
    };
  }, [imagePath, size]);
  
  return state;
}

// Fonction pour vérifier si le navigateur supporte WebP
let webpSupported: boolean | null = null;

export function checkWebPSupport(): boolean {
  if (webpSupported !== null) return webpSupported;
  
  if (typeof window === 'undefined') {
    return false;
  }
  
  const canvas = document.createElement('canvas');
  if (canvas.getContext && canvas.getContext('2d')) {
    webpSupported = canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  } else {
    webpSupported = false;
  }
  
  return webpSupported;
} 