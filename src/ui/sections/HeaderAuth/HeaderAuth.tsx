import { Avatar } from "../../primitives/Avatar/Avatar";
import { Button, ButtonGroup } from "../../primitives/Button";
import { IconChevronDown } from "../../icons/IconChevronDown";
import { cn } from "../../../utils/cn";
import "./header-auth.css";

export interface HeaderAuthProps {
  /**
   * Controls whether the user is logged in
   * - When `true`: Displays avatar with dropdown icon (logged-in state)
   * - When `false`: Displays Sign in and Register buttons (logged-out state)
   */
  isLoggedIn: boolean;

  /**
   * Handler for avatar/dropdown click in logged-in state
   * Typically opens a user menu or dropdown
   */
  onAvatarClick?: () => void;

  /**
   * Handler for sign in button click in logged-out state
   */
  onSignInClick?: () => void;

  /**
   * Handler for register button click in logged-out state
   */
  onRegisterClick?: () => void;

  /**
   * Avatar image source
   * If provided, displays image avatar; otherwise displays initials from userName
   */
  avatarSrc?: string;

  /**
   * User name for avatar initials fallback and accessibility
   * @default "User"
   */
  userName?: string;

  /**
   * Avatar alt text for accessibility
   * @default "User avatar"
   */
  avatarAlt?: string;

  /**
   * Configurable sign in button text for internationalization support
   * @default "Sign in"
   */
  signInText?: string;

  /**
   * Configurable register button text for internationalization support
   * @default "Register"
   */
  registerText?: string;

  /**
   * Additional CSS classes for the container
   */
  className?: string;

  /**
   * Additional CSS classes for the sign in button
   */
  signInButtonClassName?: string;

  /**
   * Additional CSS classes for the register button
   */
  registerButtonClassName?: string;
}

/**
 * HeaderAuth component for displaying authentication UI in application headers
 * Built with custom styling following the design system specifications
 *
 * Features:
 * - Two states: logged-in (avatar + dropdown) and logged-out (sign in/register buttons)
 * - Avatar with image or initials fallback
 * - Configurable button text for internationalization
 * - IconChevronDown indicator for dropdown functionality
 * - Hover states with background color changes
 * - Keyboard accessible with proper focus states
 * - Semantic HTML with proper ARIA attributes
 * - Flexible styling via className props
 *
 * @example
 * ```tsx
 * // Logged-out state with default text
 * <HeaderAuth
 *   isLoggedIn={false}
 *   onSignInClick={() => navigate('/login')}
 *   onRegisterClick={() => navigate('/register')}
 *   className="w-[400px]"
 * />
 *
 * // Logged-in state with initials avatar
 * <HeaderAuth
 *   isLoggedIn={true}
 *   userName="John Doe"
 *   onAvatarClick={() => setShowMenu(true)}
 * />
 *
 * // Logged-in state with image avatar
 * <HeaderAuth
 *   isLoggedIn={true}
 *   avatarSrc="/images/user-avatar.jpg"
 *   avatarAlt="John Doe"
 *   userName="John Doe"
 *   onAvatarClick={() => setShowMenu(true)}
 * />
 *
 * // Internationalized buttons
 * <HeaderAuth
 *   isLoggedIn={false}
 *   signInText="Se connecter"
 *   registerText="S'inscrire"
 *   onSignInClick={handleLogin}
 *   onRegisterClick={handleRegister}
 *   className="w-[400px]"
 * />
 *
 * // Custom button styling
 * <HeaderAuth
 *   isLoggedIn={false}
 *   signInButtonClassName="custom-signin"
 *   registerButtonClassName="custom-register"
 *   onSignInClick={handleLogin}
 *   onRegisterClick={handleRegister}
 * />
 * ```
 */
export const HeaderAuth = ({
  isLoggedIn,
  onAvatarClick,
  onSignInClick,
  onRegisterClick,
  avatarSrc,
  userName = "User",
  avatarAlt = "User avatar",
  signInText = "Sign in",
  registerText = "Register",
  className,
  signInButtonClassName,
  registerButtonClassName,
}: HeaderAuthProps) => {
  if (isLoggedIn) {
    return (
      <button
        className={cn("header-auth-logged-in", className)}
        onClick={onAvatarClick}
        aria-label="User menu"
        type="button"
      >
        <Avatar
          type={avatarSrc ? "image" : "initial"}
          src={avatarSrc}
          alt={avatarAlt}
          name={userName}
          size="md"
          shape="circle"
        />
        <IconChevronDown size="16" />
      </button>
    );
  }

  return (
    <ButtonGroup
      align="center"
      className={cn("header-auth-logged-out", className)}
    >
      <Button
        variant="neutral"
        size="md"
        onClick={onSignInClick}
        className={cn("header-auth-logged-out-button", signInButtonClassName)}
      >
        {signInText}
      </Button>
      <Button
        variant="primary"
        size="md"
        onClick={onRegisterClick}
        className={cn("header-auth-logged-out-button", registerButtonClassName)}
      >
        {registerText}
      </Button>
    </ButtonGroup>
  );
};
