import { type HTMLAttributes } from "react";
import { cn } from "../../../utils/cn";
import "./text-content-heading.css";

export type TextContentHeadingAlign = "Start" | "Center";

/**
 * Props for TextContentHeading component
 * Displays a heading with optional subheading text
 */
export interface TextContentHeadingProps
  extends HTMLAttributes<HTMLDivElement> {
  /**
   * Main heading text
   * @default "Heading"
   */
  heading?: string;

  /**
   * Optional subheading text (shown when hasSubheading is true)
   * @default "Subheading"
   */
  subheading?: string;

  /**
   * Whether to show the subheading
   * @default true
   */
  hasSubheading?: boolean;

  /**
   * Text alignment
   * - "Start": Left-aligned (default)
   * - "Center": Center-aligned
   * @default "Start"
   */
  align?: TextContentHeadingAlign;

  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * TextContentHeading component that displays a section heading with optional subheading
 * Uses design system typography tokens for consistent styling
 *
 * @example
 * // Basic usage with heading and subheading
 * <TextContentHeading
 *   heading="What our customers say"
 *   subheading="Join hundreds of satisfied users"
 * />
 *
 * @example
 * // Heading only (without subheading)
 * <TextContentHeading
 *   heading="Features"
 *   hasSubheading={false}
 * />
 *
 * @example
 * // With custom className
 * <TextContentHeading
 *   heading="About Us"
 *   subheading="Learn more about our story"
 *   className="my-custom-class"
 * />
 *
 * @example
 * // Center-aligned for hero sections
 * <TextContentHeading
 *   heading="Welcome to Our Platform"
 *   subheading="The best solution for your needs"
 *   align="Center"
 * />
 */
export function TextContentHeading({
  heading = "Heading",
  subheading = "Subheading",
  hasSubheading = true,
  align = "Start",
  className,
  ...rest
}: TextContentHeadingProps) {
  return (
    <div
      className={cn(
        "text-content-heading-container",
        `text-content-heading-align-${align.toLowerCase()}`,
        className
      )}
      data-name={`Align=${align}`}
      data-node-id={align === "Center" ? "2153:7835" : "2144:3863"}
      {...rest}
    >
      <h2
        className="text-content-heading-heading"
        data-node-id="2144:3861"
      >
        {heading}
      </h2>
      {hasSubheading && (
        <p
          className="text-content-heading-subheading"
          data-node-id="2144:3862"
        >
          {subheading}
        </p>
      )}
    </div>
  );
}

export default TextContentHeading;
