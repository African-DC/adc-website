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

interface ImageManifest {
  [key: string]: ImageMetadata;
}

let imageManifest: ImageManifest | null = null;

async function loadImageManifest(): Promise<ImageManifest> {
  if (imageManifest) return imageManifest;

  try {
    const response = await fetch('/img/image-manifest.json');
    if (!response.ok) throw new Error('Manifest not available');
    const manifest = await response.json();
    imageManifest = manifest;
    return manifest;
  } catch {
    return {};
  }
}

export async function getImageMetadata(imagePath: string): Promise<ImageMetadata | null> {
  const manifest = await loadImageManifest();
  return manifest[imagePath] || null;
}
