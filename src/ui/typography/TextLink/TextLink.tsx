import { type AnchorHTMLAttributes } from "react";
import { cn } from "../../../utils/cn";
import "./text-link.css";

/**
 * Props for TextLink component
 * A minimal, reusable text-based hyperlink with visual feedback through underline
 */
export interface TextLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * The text content to display in the link
   * @default "Text Link"
   */
  text?: string;

  /**
   * The URL the link points to
   * @default "#"
   */
  href?: string;

  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * TextLink component renders a semantic hyperlink with consistent typography styling.
 * Uses design system tokens for colors, fonts, and spacing to maintain consistency.
 *
 * This component follows accessible web standards with proper semantic HTML (<a> tag),
 * visual feedback through underline decoration, and support for keyboard navigation.
 *
 * @example
 * // Basic usage with default text
 * <TextLink />
 *
 * @example
 * // Custom link with href
 * <TextLink text="Learn More" href="/about" />
 *
 * @example
 * // External link with custom styling
 * <TextLink
 *   text="Visit Website"
 *   href="https://example.com"
 *   target="_blank"
 *   rel="noopener noreferrer"
 *   className="text-blue-600"
 * />
 *
 * @example
 * // With click handler
 * <TextLink
 *   text="View Details"
 *   href="#"
 *   onClick={(e) => {
 *     e.preventDefault();
 *     console.log('Link clicked');
 *   }}
 * />
 */
export function TextLink({
  text = "Text Link",
  href = "#",
  className,
  ...rest
}: TextLinkProps) {
  return (
    <a
      href={href}
      className={cn("text-link", className)}
      data-name="Text Link"
      data-node-id="2087:8483"
      {...rest}
    >
      {text}
    </a>
  );
}

export default TextLink;
