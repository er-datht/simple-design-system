import { type HTMLAttributes } from "react";
import { cn } from "../../../utils/cn";
import "./text-title-page.css";

/**
 * Props for TextTitlePage component
 * A large, bold heading text for page titles and major sections
 */
export interface TextTitlePageProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The text content to display as the page title
   * @default "Text Title Page"
   */
  text?: string;

  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * TextTitlePage component that displays a large, bold page title
 * Uses design system typography tokens for consistent styling
 *
 * @example
 * // Default usage
 * <TextTitlePage />
 *
 * @example
 * // With custom text
 * <TextTitlePage text="Welcome to Our Site" />
 *
 * @example
 * // With custom text for product pages
 * <TextTitlePage text="Product Overview" />
 *
 * @example
 * // With custom className
 * <TextTitlePage
 *   text="About Us"
 *   className="mb-8"
 * />
 */
export function TextTitlePage({
  text = "Text Title Page",
  className,
  ...rest
}: TextTitlePageProps) {
  return (
    <div
      className={cn("text-title-page-container", className)}
      data-node-id="2087:8490"
      {...rest}
    >
      <p className="text-title-page-text" data-node-id="2087:8464">
        {text}
      </p>
    </div>
  );
}

export default TextTitlePage;
