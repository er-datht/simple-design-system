import { type HTMLAttributes } from "react";
import { cn } from "../../../utils/cn";
import "./text-heading.css";

/**
 * Props for TextHeading component
 * Displays a heading with consistent typography styling
 */
export interface TextHeadingProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The heading text content to display
   * @default "Text Heading"
   */
  text?: string;

  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * TextHeading component renders heading text with consistent styling from the design system.
 * Uses semantic paragraph element with heading-level typography for flexible usage.
 *
 * This component applies pre-defined heading typography standards including font family,
 * weight, size, and line height to create visual hierarchy in the application.
 *
 * @example
 * // Basic usage with default text
 * <TextHeading />
 *
 * @example
 * // Custom heading text
 * <TextHeading text="Welcome to our platform" />
 *
 * @example
 * // With additional className
 * <TextHeading
 *   text="Featured Content"
 *   className="mb-4"
 * />
 */
export function TextHeading({
  text = "Text Heading",
  className,
  ...rest
}: TextHeadingProps) {
  return (
    <div
      className={cn("text-heading-container", className)}
      data-name="Text Heading"
      data-node-id="2087:8488"
      {...rest}
    >
      <p className="text-heading-text" data-node-id="2087:8466">
        {text}
      </p>
    </div>
  );
}

export default TextHeading;
