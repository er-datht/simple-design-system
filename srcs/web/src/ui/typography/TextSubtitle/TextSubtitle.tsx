import { type HTMLAttributes } from "react";
import { cn } from "../../../utils/cn";
import "./text-subtitle.css";

/**
 * Props for TextSubtitle component
 * Displays a subtitle with consistent typography styling
 */
export interface TextSubtitleProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The subtitle text content to display
   * @default "Text Subtitle"
   */
  text?: string;

  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * TextSubtitle component renders subtitle text with consistent styling from the design system.
 * Uses semantic paragraph element with subtitle-level typography for secondary headings and emphasis text.
 *
 * This component applies pre-defined subtitle typography standards including font family,
 * weight (400), size (32px), and line height (1.2) to create visual hierarchy below primary headings.
 *
 * @example
 * // Basic usage with default text
 * <TextSubtitle />
 *
 * @example
 * // Custom subtitle text
 * <TextSubtitle text="This is a subtitle" />
 *
 * @example
 * // With additional className
 * <TextSubtitle
 *   text="Featured Section"
 *   className="mb-4"
 * />
 */
export function TextSubtitle({
  text = "Text Subtitle",
  className,
  ...rest
}: TextSubtitleProps) {
  return (
    <div
      className={cn("text-subtitle-container", className)}
      data-name="Text Subtitle"
      data-node-id="2103:22298"
      {...rest}
    >
      <p className="text-subtitle-text" data-node-id="2103:22297">
        {text}
      </p>
    </div>
  );
}

export default TextSubtitle;
