import { type HTMLAttributes } from "react";
import { cn } from "../../../utils/cn";
import "./text-small.css";

/**
 * Props for TextSmall component
 * Displays small body text content with consistent typography styling
 */
export interface TextSmallProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The text content to display
   * @default "Text Small"
   */
  text?: string;

  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * TextSmall component renders small body text content with consistent styling from the design system.
 * Uses semantic small element with body small typography for supporting text, captions, and fine print.
 *
 * This component is a fundamental typography primitive for smaller text content like captions,
 * disclaimers, helper text, and supporting details. It applies design tokens for font family,
 * weight, size (14px), line height, and color to maintain consistency across the application.
 *
 * @example
 * // Basic usage with default text
 * <TextSmall />
 *
 * @example
 * // Custom text content
 * <TextSmall text="This is small supporting text" />
 *
 * @example
 * // Caption for an image
 * <figure>
 *   <img src="photo.jpg" alt="Landscape" />
 *   <TextSmall text="Photo taken in 2024" />
 * </figure>
 *
 * @example
 * // Helper text for a form field
 * <div>
 *   <label>Email</label>
 *   <input type="email" />
 *   <TextSmall text="We'll never share your email" />
 * </div>
 *
 * @example
 * // With additional className
 * <TextSmall
 *   text="Disclaimer text"
 *   className="mt-2"
 * />
 */
export function TextSmall({
  text = "Text Small",
  className,
  ...rest
}: TextSmallProps) {
  return (
    <div
      className={cn("text-small-container", className)}
      data-name="Text Small"
      data-node-id="2087:8484"
      {...rest}
    >
      <small className="text-small-content" data-node-id="2087:8470">
        {text}
      </small>
    </div>
  );
}

export default TextSmall;
