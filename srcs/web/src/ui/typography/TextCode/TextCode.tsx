import { type HTMLAttributes } from "react";
import { cn } from "../../../utils/cn";
import "./text-code.css";

/**
 * Props for TextCode component
 * Displays inline or block code content with monospace typography
 */
export interface TextCodeProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * The code content to display
   * @default "Text Code"
   */
  text?: string;

  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * TextCode component renders code content with consistent monospace styling from the design system.
 * Uses semantic <code> element for better accessibility and SEO.
 *
 * This component is a typography primitive for displaying inline code snippets, technical terms,
 * or code blocks. It applies design tokens for font family (Roboto Mono), weight, size, and color
 * to ensure proper code readability and visual distinction from regular text.
 *
 * @example
 * // Basic usage with default text
 * <TextCode />
 *
 * @example
 * // Custom code snippet
 * <TextCode text="const greeting = 'Hello World';" />
 *
 * @example
 * // Inline code within text
 * <p>Use the <TextCode text="useState" /> hook for state management.</p>
 *
 * @example
 * // Multiple code snippets
 * <div className="flex flex-col gap-2">
 *   <TextCode text="npm install" />
 *   <TextCode text="npm run dev" />
 * </div>
 *
 * @example
 * // With additional className
 * <TextCode
 *   text="console.log('Debug message')"
 *   className="mb-4"
 * />
 */
export function TextCode({
  text = "Text Code",
  className,
  ...rest
}: TextCodeProps) {
  return (
    <span
      className={cn("text-code-container", className)}
      data-name="TextCode"
      data-node-id="2104:22325"
      {...rest}
    >
      <code className="text-code-content" data-node-id="2104:22323">
        {text}
      </code>
    </span>
  );
}

export default TextCode;
