import { type HTMLAttributes } from "react";
import { cn } from "../../../utils/cn";
import "./text-strong.css";

/**
 * Props for TextStrong component
 * Displays body text with bold/semi-bold styling for emphasis
 */
export interface TextStrongProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The text content to display
   * @default "Text Strong"
   */
  text?: string;

  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * TextStrong component renders body-level text content with bold/semi-bold styling.
 * Uses semantic paragraph element with increased font weight (600) for emphasis.
 *
 * This component is a fundamental typography primitive for emphasizing content within paragraphs,
 * important labels, captions, and highlighted content. It applies design tokens for font family,
 * weight, size, line height, and color to maintain consistency across the application.
 *
 * @example
 * // Basic usage with default text
 * <TextStrong />
 *
 * @example
 * // Custom text content
 * <TextStrong text="Important information" />
 *
 * @example
 * // Within a paragraph context
 * <div className="flex flex-col gap-4">
 *   <Text text="Regular body text followed by" />
 *   <TextStrong text="emphasized strong text" />
 * </div>
 *
 * @example
 * // With additional className
 * <TextStrong
 *   text="Highlighted content"
 *   className="mb-4"
 * />
 */
export function TextStrong({
  text = "Text Strong",
  className,
  ...rest
}: TextStrongProps) {
  return (
    <div
      className={cn("text-strong-container", className)}
      data-name="Text Strong"
      data-node-id="2087:8486"
      {...rest}
    >
      <p className="text-strong-content" data-node-id="2087:8468">
        {text}
      </p>
    </div>
  );
}

export default TextStrong;
