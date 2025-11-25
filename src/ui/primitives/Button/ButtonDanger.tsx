import { type ReactNode } from "react";
import { cn } from "../../../utils/cn";
import { type ButtonProps } from "./Button";

export interface ButtonDangerProps extends ButtonProps {
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
}

/**
 * ButtonDanger component for destructive or dangerous actions
 * Uses red/danger color scheme to indicate caution
 */
export function ButtonDanger({
  variant = "primary",
  size = "md",
  children,
  iconStart,
  iconEnd,
  className,
  disabled = false,
  ...rest
}: ButtonDangerProps) {
  return (
    <button
      className={cn(
        // Base styles
        `button button-shared button-danger-variant-${variant} button-size-${size}`,

        // Variant styles - Primary
        {
          "button-danger-variant-primary button-danger-variant-primary-hover":
            variant === "primary" && !disabled,
          "focus:ring-(--sds-color-background-danger-default)":
            variant === "primary",
        },

        // Variant styles - Neutral
        {
          "button-danger-variant-neutral button-danger-variant-neutral-hover":
            variant === "neutral" && !disabled,
          "focus:ring-(--sds-color-background-neutral-default)":
            variant === "neutral",
        },

        // Variant styles - Subtle
        {
          "button-danger-variant-subtle button-danger-variant-subtle-hover":
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
