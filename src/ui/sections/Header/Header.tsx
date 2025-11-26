import { type ReactNode, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  NavigationPillList,
  type NavigationPillItem,
} from "../../primitives/Navigation/NavigationPillList";
import { HeaderAuth } from "../HeaderAuth/HeaderAuth";
import { IconButton } from "../../primitives/Button/IconButton";
import { IconMenu } from "../../icons/IconMenu";
import { IconX } from "../../icons/IconX";
import { IconSun } from "../../icons/IconSun";
import { IconMoon } from "../../icons/IconMoon";
import { useTheme } from "../../../utils/ThemeContext";
import { cn } from "../../../utils/cn";
import "./header.css";

export interface HeaderProps {
  /**
   * Logo icon or component to display in the header
   */
  logoIcon: ReactNode;

  /**
   * Optional href to make the logo clickable
   */
  logoHref?: string;

  /**
   * Callback when logo is clicked
   */
  onLogoClick?: () => void;

  /**
   * Array of navigation items for the NavigationPillList
   */
  navigationItems: NavigationPillItem[];

  /**
   * Currently active navigation item ID
   * If not provided, will be automatically determined from current route
   */
  activeNavigationId?: string;

  /**
   * Whether the user is logged in (for HeaderAuth)
   */
  isLoggedIn: boolean;

  /**
   * User name for HeaderAuth component
   */
  userName?: string;

  /**
   * Avatar image source for HeaderAuth component
   */
  avatarSrc?: string;

  /**
   * Avatar alt text for accessibility
   */
  avatarAlt?: string;

  /**
   * Callback when navigation item is clicked
   */
  onNavigationItemClick?: (itemId: string) => void;

  /**
   * Callback when sign in button is clicked
   */
  onSignInClick?: () => void;

  /**
   * Callback when register button is clicked
   */
  onRegisterClick?: () => void;

  /**
   * Callback when avatar is clicked (logged-in state)
   */
  onAvatarClick?: () => void;

  /**
   * Additional CSS classes for the header container
   */
  className?: string;

  /**
   * Additional CSS classes for navigation items
   */
  itemClassName?: string;
}

/**
 * Header section component with responsive navigation and authentication
 * Built with custom styling following the design system specifications
 *
 * Features:
 * - Three main blocks: Logo, Navigation, and Auth
 * - Responsive design with desktop and mobile layouts
 * - Mobile menu toggle (hamburger menu)
 * - NavigationPillList for navigation items
 * - HeaderAuth component for authentication UI
 * - Semantic HTML with proper ARIA attributes
 * - Keyboard accessible
 *
 * Layout:
 * - Desktop (≥992px): Logo + horizontal navigation + auth (menu button hidden)
 * - Mobile (closed) (<992px): Logo + menu button (navigation/auth hidden)
 * - Mobile (open) (<992px): Logo + close button + vertical navigation + auth
 *
 * @example
 * ```tsx
 * // Desktop with logged-in user
 * <Header
 *   logoIcon={<YourLogoComponent />}
 *   navigationItems={[
 *     { id: '1', label: 'Home', href: '/' },
 *     { id: '2', label: 'About', href: '/about' },
 *     { id: '3', label: 'Contact', href: '/contact' },
 *   ]}
 *   activeNavigationId="1"
 *   isLoggedIn={true}
 *   userName="John Doe"
 *   avatarSrc="/avatar.jpg"
 *   onNavigationItemClick={(id) => console.log(id)}
 *   onAvatarClick={() => setShowMenu(true)}
 * />
 *
 * // Mobile with logged-out user
 * <Header
 *   logoIcon={<YourLogoComponent />}
 *   navigationItems={navigationItems}
 *   isLoggedIn={false}
 *   onSignInClick={() => navigate('/login')}
 *   onRegisterClick={() => navigate('/register')}
 * />
 * ```
 */
export const Header = ({
  logoIcon,
  logoHref,
  onLogoClick,
  navigationItems,
  activeNavigationId,
  isLoggedIn,
  userName,
  avatarSrc,
  avatarAlt,
  onNavigationItemClick,
  onSignInClick,
  onRegisterClick,
  onAvatarClick,
  className,
  itemClassName,
}: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  // Determine active navigation based on current location if not explicitly provided
  const computedActiveNavId =
    activeNavigationId ??
    navigationItems.find((item) => item.href === location.pathname)?.id ??
    navigationItems[0]?.id;

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header
      className={cn(
        "header",
        isMobileMenuOpen && "header-mobile-open",
        className
      )}
    >
      {/* Logo Block */}
      <div className="header-logo-block">
        <div className="header-logo">
          {logoHref || onLogoClick ? (
            <Link
              to={logoHref || "/"}
              onClick={onLogoClick}
              className="header-logo-link"
            >
              {logoIcon}
            </Link>
          ) : (
            logoIcon
          )}
        </div>

        {/* Mobile Menu Toggle Button */}
        <IconButton
          icon={isMobileMenuOpen ? <IconX size="24" /> : <IconMenu size="24" />}
          variant="subtle"
          className="header-menu-button"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="header-navigation"
        />
      </div>

      {/* Navigation Block */}

      <NavigationPillList
        items={navigationItems}
        direction={isMobileMenuOpen ? "column" : "row"}
        activeItemId={computedActiveNavId}
        onItemClick={onNavigationItemClick}
        className={cn(
          "header-navigation-block",
          !isMobileMenuOpen && "header-navigation-hidden"
        )}
        itemClassName={cn("navigation-item", itemClassName)}
      />

      {/* Auth Block */}
      <div
        className={cn(
          "header-auth-block",
          !isMobileMenuOpen && "header-auth-hidden"
        )}
      >
        <HeaderAuth
          isLoggedIn={isLoggedIn}
          userName={userName}
          avatarSrc={avatarSrc}
          avatarAlt={avatarAlt}
          onAvatarClick={onAvatarClick}
          onSignInClick={onSignInClick}
          onRegisterClick={onRegisterClick}
          className={!isLoggedIn ? "w-full" : ""}
        />

        {/* Theme Toggle Button */}
        <IconButton
          icon={theme === "dark" ? <IconSun size="24" /> : <IconMoon size="24" />}
          variant="subtle"
          className="header-theme-toggle"
          onClick={toggleTheme}
          aria-label={
            theme === "dark"
              ? "Switch to light mode"
              : "Switch to dark mode"
          }
        />
      </div>
    </header>
  );
};
