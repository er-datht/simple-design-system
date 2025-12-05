import type { LiHTMLAttributes } from "react";
import { Link } from "react-router-dom";
import { cn } from "../../../utils/cn";
import "./text-link-list-item.css";

/**
 * Helper function to determine if a link is internal
 */
const isInternalLink = (href: string): boolean => {
  return href.startsWith('/') ||
    (!href.startsWith('http://') && !href.startsWith('https://') &&
     !href.startsWith('mailto:') && !href.startsWith('tel:'));
};

/**
 * Props for the TextLinkListItem component.
 */
export interface TextLinkListItemProps
  extends Omit<LiHTMLAttributes<HTMLLIElement>, "onClick"> {
  /** The text content displayed in the link */
  text?: string;

  /** The URL the link points to */
  href?: string;

  /** Link target attribute (e.g., "_blank" for new tab) */
  target?: string;

  /** Link rel attribute for security/SEO (e.g., "noopener noreferrer") */
  rel?: string;

  /** Click handler for the link */
  onLinkClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

/**
 * TextLinkListItem component is a semantic list item containing a navigational link.
 *
 * It combines a list item element with an anchor tag to create clickable navigation
 * items within link lists. This component is designed to be used within TextLinkList
 * for footer navigation, sidebar menus, and other linked list structures.
 *
 * **Usage Context:**
 * - Footer link lists
 * - Sidebar navigation menus
 * - Table of contents
 * - Related links sections
 *
 * **Accessibility Features:**
 * - Semantic HTML with proper <li> and <a> structure
 * - Keyboard navigation support
 * - Focus-visible outline for accessibility
 * - Support for screen readers with proper link text
 *
 * @example
 * // Basic usage
 * <ul>
 *   <TextLinkListItem text="Home" href="/" />
 *   <TextLinkListItem text="About" href="/about" />
 * </ul>
 *
 * @example
 * // External link with security attributes
 * <TextLinkListItem
 *   text="Documentation"
 *   href="https://example.com/docs"
 *   target="_blank"
 *   rel="noopener noreferrer"
 * />
 *
 * @example
 * // With click handler (SPA routing)
 * <TextLinkListItem
 *   text="Products"
 *   href="/products"
 *   onLinkClick={(e) => {
 *     e.preventDefault();
 *     navigate('/products');
 *   }}
 * />
 *
 * **Figma Source:** [Text Link List Item Component](https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=2153-7973)
 */
export function TextLinkListItem({
  text = "List item",
  href = "#",
  target,
  rel,
  onLinkClick,
  className,
  ...rest
}: TextLinkListItemProps) {
  return (
    <li
      data-name="TextLinkListItem"
      data-node-id="2153:7973"
      className={cn("text-link-list-item", className)}
      {...rest}
    >
      {isInternalLink(href) ? (
        <Link
          to={href}
          onClick={onLinkClick}
          className="text-link-list-item__link"
        >
          {text}
        </Link>
      ) : (
        <a
          href={href}
          target={target}
          rel={rel}
          onClick={onLinkClick}
          className="text-link-list-item__link"
        >
          {text}
        </a>
      )}
    </li>
  );
}
