import { useState, type ImgHTMLAttributes } from "react";
import { cn } from "../../../utils/cn";
import "./image.css";

/**
 * Props for Image component
 */
export interface ImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  /**
   * Image source URL
   */
  src: string;

  /**
   * Alt text for the image (required for accessibility)
   */
  alt: string;

  /**
   * Additional CSS classes
   */
  className?: string;

  /**
   * Callback when image fails to load
   */
  onError?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
}

/**
 * Image Component
 *
 * A robust image component with automatic fallback to a gray background
 * when the primary source fails to load. Handles image loading errors gracefully.
 *
 * **Features:**
 * - Shows gray background on error instead of broken image icon
 * - Full support for standard img attributes (loading, decoding, etc.)
 * - Accessible with required alt text
 * - Clean, minimal error state
 *
 * @example
 * ```tsx
 * // Basic usage with automatic gray background fallback
 * <Image src="/product.jpg" alt="Product photo" />
 *
 * // Large image with automatic fallback
 * <Image
 *   src="/hero-banner.jpg"
 *   alt="Hero banner"
 *   loading="lazy"
 * />
 *
 * // With custom styles
 * <Image
 *   src="/user-avatar.jpg"
 *   alt="User avatar"
 *   className="rounded-full"
 * />
 * ```
 */
export function Image({
  src,
  alt,
  className,
  onError,
  ...rest
}: ImageProps) {
  const [hasError, setHasError] = useState(false);

  const handleError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setHasError(true);

    // Call custom error handler if provided
    onError?.(event);
  };

  // If image failed to load, show gray background
  if (hasError) {
    return (
      <div
        className={cn("image", "image--error", className)}
        role="img"
        aria-label={alt}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={cn("image", className)}
      onError={handleError}
      {...rest}
    />
  );
}

export default Image;
