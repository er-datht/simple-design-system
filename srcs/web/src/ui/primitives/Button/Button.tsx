import { type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "../../../utils/cn";
import "./button.css";

export type ButtonVariant = "primary" | "neutral" | "subtle";
export type ButtonSize = "sm" | "md";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Visual style variant of the button
   * @default "primary"
   */
  variant?: ButtonVariant;

  /**
   * Size of the button
   * @default "md"
   */
  size?: ButtonSize;

  /**
   * Button content (text, icons, etc.)
   */
  children: ReactNode;

  /**
   * Optional icon as start to display alongside the text
   */
  iconStart?: ReactNode;

  /**
   * Optional icon as end to display alongside the text
   */
  iconEnd?: ReactNode;

  /**
   * Additional CSS classes
   */
  className?: string;

  /**
   * Disabled state
   */
  disabled?: boolean;
}

/**
 * Button component with multiple variants and sizes
 * Supports primary, neutral, and subtle variants with optional icons
 */
export function Button({
  variant = "primary",
  size = "md",
  children,
  iconStart,
  iconEnd,
  className,
  disabled = false,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={cn(
        // Base styles from button.css
        "button button-shared text-base",
        `button-size-${size}`,

        // Variant styles from button.css
        {
          "button-variant-primary button-variant-primary-hover":
            variant === "primary" && !disabled,
          "button-variant-neutral button-variant-neutral-hover":
            variant === "neutral" && !disabled,
          "button-variant-subtle button-variant-subtle-hover":
            variant === "subtle" && !disabled,
        },

        // Disabled state
        {
          "button-disabled": disabled,
        },

        // Custom classes
        className
      )}
      disabled={disabled}
      {...rest}
    >
      {iconStart && <span className="inline-flex w-4 h-4">{iconStart}</span>}
      {children}
      {iconEnd && <span className="inline-flex w-4 h-4">{iconEnd}</span>}
    </button>
  );
}
