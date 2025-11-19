import type { HTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";
import { TextLinkList } from "../../typography/TextLinkList";
import { TextLinkListItem } from "../../typography/TextLinkListItem";
import { cn } from "../../../utils/cn";
import "./footer.css";

// ============================================================================
// Type Definitions
// ============================================================================

/**
 * Props for the main Footer component.
 */
export type FooterProps = HTMLAttributes<HTMLElement> & {
  /** Content to render inside the footer */
  children: ReactNode;
  /** Optional custom className for styling */
  className?: string;
};

/**
 * Props for the Footer.Brand sub-component.
 * Renders the brand section containing logo and optional content.
 */
export type FooterBrandProps = HTMLAttributes<HTMLDivElement> & {
  /** Logo element (typically an image or SVG) */
  logo: ReactNode;
  /** Optional href to make the logo clickable */
  logoHref?: string;
  /** Optional custom className for styling */
  className?: string;
};

/**
 * Props for the Footer.Social sub-component.
 * Container for social media links.
 */
export type FooterSocialProps = HTMLAttributes<HTMLDivElement> & {
  /** Social link components (typically Footer.SocialLink components) */
  children: ReactNode;
  /** Optional custom className for styling */
  className?: string;
};

/**
 * Props for the Footer.SocialLink sub-component.
 * Individual social media link with icon.
 */
export type FooterSocialLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "aria-label"
> & {
  /** URL for the social media profile */
  href: string;
  /** Icon element to display */
  icon: ReactNode;
  /** Accessible label for the link (becomes aria-label) */
  label: string;
  /** Optional custom className for styling */
  className?: string;
};

/**
 * Props for the Footer.Navigation sub-component.
 * Wrapper for grouping navigation columns.
 */
export type FooterNavigationProps = HTMLAttributes<HTMLDivElement> & {
  /** Navigation columns (typically Footer.Nav components) */
  children: ReactNode;
  /** Optional custom className for styling */
  className?: string;
};

/**
 * Props for the Footer.Nav sub-component.
 * Individual navigation column with title and links.
 */
export type FooterNavProps = Omit<HTMLAttributes<HTMLElement>, "title"> & {
  /** Title text for the navigation section */
  title: string;
  /** Optional aria-label (defaults to title if not provided) */
  ariaLabel?: string;
  /** Link density style */
  density?: "Default" | "Tight";
  /** Link items (typically TextLinkListItem components) */
  children: ReactNode;
  /** Optional custom className for styling */
  className?: string;
};

/**
 * Social media link data structure for Footer.Default.
 */
export type SocialLinkData = {
  /** URL for the social media profile */
  href: string;
  /** Icon element to display (ReactNode for maximum flexibility) */
  icon: ReactNode;
  /** Accessible label for the link */
  label: string;
};

/**
 * Navigation section data structure for Footer.Default.
 */
export type NavigationSection = {
  /** Section title */
  title: string;
  /** Optional aria-label (defaults to title) */
  ariaLabel?: string;
  /** Figma node ID for tracking */
  nodeId?: string;
  /** Array of link items */
  items: Array<{ text: string }>;
};

/**
 * Props for the Footer.Default pre-configured component.
 * Recreates the original hardcoded footer layout with customizable data.
 */
export type FooterDefaultProps = HTMLAttributes<HTMLElement> & {
  /** Logo element to display (ReactNode for maximum flexibility) */
  logo: ReactNode;
  /** Optional href to make the logo clickable */
  logoHref?: string;
  /** Array of social media links */
  socialLinks: SocialLinkData[];
  /** Array of navigation sections */
  navigationSections: NavigationSection[];
  /** Optional custom className for styling */
  className?: string;
};

// ============================================================================
// Main Footer Component
// ============================================================================

/**
 * Footer component provides a flexible, composable footer structure for displaying
 * brand information, social media links, and navigation. Uses a compound component
 * pattern for maximum flexibility.
 *
 * **Features:**
 * - Compound component pattern (Footer.Brand, Footer.Social, Footer.Nav, etc.)
 * - Mobile-first responsive design (no platform prop needed)
 * - Design tokens for consistent spacing, colors, and typography
 * - Semantic HTML with accessibility attributes
 * - Pre-configured Footer.Default for common use cases
 *
 * **Responsive Behavior:**
 * - Mobile (<768px): Vertical flex-col layout, 64px gap, tight density
 * - Desktop (≥768px): Horizontal flex-wrap layout, 16px gap, default density
 *
 * **Usage:**
 * ```tsx
 * // Compound component approach (fully customizable)
 * <Footer>
 *   <Footer.Brand logo={<img src="logo.png" alt="Brand" />}>
 *     <Footer.Social>
 *       <Footer.SocialLink href="#" icon={<XIcon />} label="Follow on X" />
 *     </Footer.Social>
 *   </Footer.Brand>
 *   <Footer.Nav title="Products">
 *     <TextLinkListItem text="Product 1" />
 *   </Footer.Nav>
 * </Footer>
 *
 * // Pre-configured approach (quick setup)
 * <Footer.Default
 *   logoSrc="logo.png"
 *   logoAlt="Brand"
 *   socialLinks={[...]}
 *   navigationSections={[...]}
 * />
 * ```
 *
 * **Figma Source:** [Footer Component](https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=321-11357)
 */
export function Footer({ children, className, ...rest }: FooterProps) {
  return (
    <footer
      data-name="Footer"
      data-figma-node-id="321:11357"
      className={cn("footer", className)}
      {...rest}
    >
      <div className="footer__container">{children}</div>
    </footer>
  );
}

// ============================================================================
// Sub-Components
// ============================================================================

/**
 * Footer.Brand sub-component for displaying logo and brand content.
 * Contains the logo and typically wraps Footer.Social.
 *
 * **Usage:**
 * ```tsx
 * <Footer.Brand logo={<img src="logo.png" alt="Brand" />} logoHref="/">
 *   <Footer.Social>{...}</Footer.Social>
 * </Footer.Brand>
 * ```
 */
function FooterBrand({
  logo,
  logoHref,
  children,
  className,
  ...rest
}: FooterBrandProps) {
  return (
    <div
      className={cn("footer__title-section", className)}
      data-figma-node-id="9640:4285"
      {...rest}
    >
      <div className="footer__logo">
        {logoHref ? (
          <a href={logoHref} className="footer__logo-link">
            {logo}
          </a>
        ) : (
          logo
        )}
      </div>
      {children}
    </div>
  );
}

/**
 * Footer.Social sub-component for grouping social media links.
 * Container for Footer.SocialLink components.
 *
 * **Usage:**
 * ```tsx
 * <Footer.Social>
 *   <Footer.SocialLink href="#" icon={<XIcon />} label="Follow on X" />
 *   <Footer.SocialLink href="#" icon={<LinkedInIcon />} label="Follow on LinkedIn" />
 * </Footer.Social>
 * ```
 */
function FooterSocial({ children, className, ...rest }: FooterSocialProps) {
  return (
    <div className={cn("footer__social-icons", className)} {...rest}>
      {children}
    </div>
  );
}

/**
 * Footer.SocialLink sub-component for individual social media links.
 * Automatically applies aria-label for accessibility.
 *
 * **Usage:**
 * ```tsx
 * <Footer.SocialLink
 *   href="https://twitter.com/example"
 *   icon={<img src="x-icon.png" alt="" />}
 *   label="Follow us on X"
 * />
 * ```
 */
function FooterSocialLink({
  href,
  icon,
  label,
  className,
  ...rest
}: FooterSocialLinkProps) {
  return (
    <a
      href={href}
      aria-label={label}
      className={cn("footer__social-link", className)}
      {...rest}
    >
      <div className="footer__social-icon">{icon}</div>
    </a>
  );
}

/**
 * Footer.Navigation sub-component for grouping navigation columns.
 * Wrapper for organizing multiple Footer.Nav components.
 *
 * **Usage:**
 * ```tsx
 * <Footer.Navigation>
 *   <Footer.Nav title="Products">{...}</Footer.Nav>
 *   <Footer.Nav title="Company">{...}</Footer.Nav>
 * </Footer.Navigation>
 * ```
 */
function FooterNavigation({
  children,
  className,
  ...rest
}: FooterNavigationProps) {
  return (
    <div className={className} {...rest}>
      {children}
    </div>
  );
}

/**
 * Footer.Nav sub-component for individual navigation columns.
 * Wraps children in a TextLinkList with automatic title and aria-label.
 *
 * **Usage:**
 * ```tsx
 * <Footer.Nav title="Products" density="Default">
 *   <TextLinkListItem text="Product 1" />
 *   <TextLinkListItem text="Product 2" />
 * </Footer.Nav>
 * ```
 */
function FooterNav({
  title,
  ariaLabel,
  density = "Default",
  children,
  className,
  ...rest
}: FooterNavProps) {
  return (
    <nav
      aria-label={ariaLabel || title}
      className={cn("footer__nav-column", className)}
      {...rest}
    >
      <TextLinkList hasTitle titleText={title} density={density}>
        {children}
      </TextLinkList>
    </nav>
  );
}

/**
 * Footer.Default pre-configured component that recreates the original
 * Figma footer layout. Accepts all content as props instead of hardcoding.
 *
 * **Usage:**
 * ```tsx
 * <Footer.Default
 *   logo={<img src="logo.png" alt="Company Logo" className="footer__logo-image" />}
 *   socialLinks={[
 *     { href: "https://twitter.com/...", icon: <XIcon />, label: "Follow on X" }
 *   ]}
 *   navigationSections={[
 *     {
 *       title: "Products",
 *       items: [{ text: "Product 1" }, { text: "Product 2" }]
 *     }
 *   ]}
 * />
 * ```
 */
function FooterDefault({
  logo,
  logoHref,
  socialLinks,
  navigationSections,
  className,
  ...rest
}: FooterDefaultProps) {
  return (
    <Footer className={className} {...rest}>
      <Footer.Brand logo={logo} logoHref={logoHref}>
        <Footer.Social>
          {socialLinks.map((link, index) => (
            <Footer.SocialLink
              key={index}
              href={link.href}
              icon={link.icon}
              label={link.label}
            />
          ))}
        </Footer.Social>
      </Footer.Brand>

      {navigationSections.map((section, index) => (
        <Footer.Nav
          key={index}
          title={section.title}
          ariaLabel={section.ariaLabel}
          density="Default"
          data-figma-node-id={section.nodeId}
        >
          {section.items.map((item, itemIndex) => (
            <TextLinkListItem key={itemIndex} text={item.text} />
          ))}
        </Footer.Nav>
      ))}
    </Footer>
  );
}

// ============================================================================
// Attach Sub-Components
// ============================================================================

Footer.Brand = FooterBrand;
Footer.Social = FooterSocial;
Footer.SocialLink = FooterSocialLink;
Footer.Navigation = FooterNavigation;
Footer.Nav = FooterNav;
Footer.Default = FooterDefault;
