import { type HTMLAttributes } from "react";
import { cn } from "../../../utils/cn";
import "./text-emphasis.css";

/**
 * Props for TextEmphasis component
 * Displays emphasized text using italic styling
 */
export interface TextEmphasisProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * The text content to display in emphasized (italic) format
   * @default "Text Emphasis"
   */
  text?: string;

  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * TextEmphasis component renders emphasized text using italic styling.
 * Uses semantic paragraph element with body typography in italic style.
 *
 * This component is a typography primitive for emphasizing words or phrases that need visual
 * distinction through italicization. Ideal for introducing concepts, highlighting important terms,
 * or providing contextual emphasis within paragraphs.
 *
 * @example
 * // Basic usage with default text
 * <TextEmphasis />
 *
 * @example
 * // Custom emphasized text
 * <TextEmphasis text="semantic HTML" />
 *
 * @example
 * // Within a paragraph context
 * <p>
 *   This article discusses the concept of <TextEmphasis text="semantic HTML" />,
 *   which is fundamental to building accessible web applications.
 * </p>
 *
 * @example
 * // With additional className
 * <TextEmphasis
 *   text="important term"
 *   className="mb-4"
 * />
 */
export function TextEmphasis({
  text = "Text Emphasis",
  className,
  ...rest
}: TextEmphasisProps) {
  return (
    <span
      className={cn("text-emphasis-container", className)}
      data-name="Text Emphasis"
      data-node-id="2087:8485"
      {...rest}
    >
      <em className="text-emphasis-content" data-node-id="2087:8467">
        {text}
      </em>
    </span>
  );
}

export default TextEmphasis;
