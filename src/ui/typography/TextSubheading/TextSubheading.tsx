import { type HTMLAttributes } from "react";
import { cn } from "../../../utils/cn";
import "./text-subheading.css";

/**
 * Props for TextSubheading component
 * Displays a subheading with consistent typography styling
 */
export interface TextSubheadingProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The subheading text content to display
   * @default "Text Subheading"
   */
  text?: string;

  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * TextSubheading component renders subheading text with consistent styling from the design system.
 * Uses semantic paragraph element with subheading-level typography for secondary heading text.
 *
 * This component applies pre-defined subheading typography standards including font family,
 * weight, size, and line height to create visual hierarchy beneath main headings.
 *
 * @example
 * // Basic usage with default text
 * <TextSubheading />
 *
 * @example
 * // Custom subheading text
 * <TextSubheading text="Discover our features" />
 *
 * @example
 * // With additional className
 * <TextSubheading
 *   text="Section Overview"
 *   className="mb-4"
 * />
 */
export function TextSubheading({
  text = "Text Subheading",
  className,
  ...rest
}: TextSubheadingProps) {
  return (
    <div
      className={cn("text-subheading-container", className)}
      data-name="Text Subheading"
      data-node-id="2103:22303"
      {...rest}
    >
      <p className="text-subheading-text" data-node-id="2103:22302">
        {text}
      </p>
    </div>
  );
}

export default TextSubheading;
