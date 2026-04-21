import { type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "../../../utils/cn";
import { type ButtonVariant, type ButtonSize } from "./Button";

export interface IconButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
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
   * Icon to display (required)
   */
  icon: ReactNode;

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
 * IconButton component displays only an icon without text
 * Designed for compact actions where an icon clearly represents the action
 * Requires aria-label for accessibility
 */
export function IconButton({
  variant = "primary",
  size = "md",
  icon,
  className,
  disabled = false,
  ...rest
}: IconButtonProps) {
  return (
    <button
      className={cn(
        // Base styles
        `button button-shared icon-button button-variant-${variant} button-size-${size}`,

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
      {icon}
    </button>
  );
}
