import { type HTMLAttributes } from "react";
import { cn } from "../../../utils/cn";
import "./text.css";

/**
 * Props for Text component
 * Displays body-level text content with consistent typography styling
 */
export interface TextProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The text content to display
   * @default "Text"
   */
  text?: string;

  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Text component renders body-level text content with consistent styling from the design system.
 * Uses semantic paragraph element with body typography for standard content.
 *
 * This component is a fundamental typography primitive for body copy, descriptions, and general
 * text content. It applies design tokens for font family, weight, size, line height, and color
 * to maintain consistency across the application.
 *
 * @example
 * // Basic usage with default text
 * <Text />
 *
 * @example
 * // Custom text content
 * <Text text="This is a custom text message" />
 *
 * @example
 * // Multiple paragraphs with spacing
 * <div className="flex flex-col gap-4">
 *   <Text text="First paragraph of content" />
 *   <Text text="Second paragraph of content" />
 * </div>
 *
 * @example
 * // With additional className
 * <Text
 *   text="Styled content"
 *   className="mb-4"
 * />
 */
export function Text({
  text = "Text",
  className,
  ...rest
}: TextProps) {
  return (
    <div
      className={cn("text-container", className)}
      data-name="Text"
      data-node-id="2087:8487"
      {...rest}
    >
      <p className="text-content" data-node-id="2087:8469">
        {text}
      </p>
    </div>
  );
}

export default Text;
