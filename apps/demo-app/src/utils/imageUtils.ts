import { useCallback } from 'react';

/**
 * Utility hook for preloading images
 */
export const useImagePreloader = () => {
  const preloadImage = useCallback((src: string) => {
    return new Promise<void>((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve();
      img.onerror = () => reject(new Error(`Failed to preload image: ${src}`));
      img.src = src;
    });
  }, []);

  const preloadImages = useCallback(
    async (sources: string[]) => {
      try {
        await Promise.all(sources.map(preloadImage));
      } catch (error) {
        console.warn('Some images failed to preload:', error);
      }
    },
    [preloadImage]
  );

  return { preloadImage, preloadImages };
};

/**
 * Check if WebP format is supported by the browser
 */
export const supportsWebP = (): boolean => {
  try {
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  } catch {
    return false;
  }
};

/**
 * Generate responsive srcSet for different screen densities
 */
export const generateSrcSet = (baseSrc: string): string => {
  const extension = baseSrc.split('.').pop();
  const baseName = baseSrc.replace(`.${extension}`, '');

  // For SVGs, just return the source
  if (extension === 'svg') {
    return baseSrc;
  }

  // Generate different sizes (1x, 2x, 3x)
  return [
    `${baseName}.${extension} 1x`,
    `${baseName}@2x.${extension} 2x`,
    `${baseName}@3x.${extension} 3x`,
  ].join(', ');
};

/**
 * Get optimized image source with WebP support
 */
export const getOptimizedSrc = (originalSrc: string): string => {
  if (originalSrc.endsWith('.svg')) {
    return originalSrc; // Don't convert SVGs
  }

  if (supportsWebP() && !originalSrc.includes('.webp')) {
    return originalSrc.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  }

  return originalSrc;
};
