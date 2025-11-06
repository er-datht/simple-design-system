import { type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "../../../utils/cn";

export type ButtonVariant = "primary" | "neutral" | "subtle";
export type ButtonSize = "sm" | "md" | "lg";

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
        // Base styles
        `button button-shared button-variant-${variant} button-size-${size}`,

        // Variant styles - Primary
        {
          "button-variant-primary button-variant-primary-hover":
            variant === "primary" && !disabled,
          "focus:ring-(--sds-color-background-brand-default)":
            variant === "primary",
        },

        // Variant styles - Neutral
        {
          "button-variant-neutral button-variant-neutral-hover":
            variant === "neutral" && !disabled,
          "focus:ring-(--sds-color-background-neutral-default)":
            variant === "neutral",
        },

        // Variant styles - Subtle
        {
          "button-variant-subtle button-variant-subtle-hover":
            variant === "subtle" && !disabled,
          "focus:ring-(--sds-color-background-neutral-tertiary)":
            variant === "subtle",
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
      {iconStart}
      {children}
      {iconEnd}
    </button>
  );
}
