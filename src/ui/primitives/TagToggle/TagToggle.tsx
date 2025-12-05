import { type HTMLAttributes, type ReactNode } from "react";
import { cn } from "../../../utils/cn";
import { IconCheck } from "../../icons";
import "./tag-toggle.css";

/**
 * Props for TagToggle component
 * A toggle-enabled label with different visual states
 */
export interface TagToggleProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Toggle state - controls visual appearance
   * When true: dark background with icon (active state)
   * When false: light background, no icon (inactive state)
   * @default true
   */
  state?: boolean;

  /**
   * Text label to display
   * @default "Label"
   */
  label?: string;

  /**
   * Controls whether the icon is displayed in the active state
   * Only applies when state is true
   * @default true
   */
  showIcon?: boolean;

  /**
   * Custom icon component to display instead of the default check icon
   * Useful for customizing the active state appearance
   * @default null
   * @example <IconStar size="16" />
   */
  icon?: ReactNode | null;

  /**
   * Additional CSS classes for the tag container
   */
  className?: string;
}

/**
 * TagToggle component displays a toggleable tag/label with distinct active and inactive states.
 *
 * Features:
 * - Two distinct visual states (active/inactive)
 * - Active state: Dark background with optional icon
 * - Inactive state: Light background without icon
 * - Customizable icon support
 * - Uses design system tokens for consistent styling
 * - Rounded corners and proper spacing
 *
 * Layout:
 * - Inline-flex layout for optimal label and icon alignment
 * - 8px gap between icon and label
 * - 12px horizontal padding, 6px vertical padding
 * - Rounded corners (full border-radius)
 *
 * @example
 * // Basic active tag
 * <TagToggle state={true} label="Selected" />
 *
 * @example
 * // Inactive tag
 * <TagToggle state={false} label="Available" />
 *
 * @example
 * // Active tag without icon
 * <TagToggle state={true} label="No Icon" showIcon={false} />
 *
 * @example
 * // Custom icon
 * <TagToggle
 *   state={true}
 *   label="Featured"
 *   icon={<IconStar size="16" />}
 * />
 *
 * @example
 * // With custom styling
 * <TagToggle
 *   state={true}
 *   label="Premium"
 *   className="cursor-pointer hover:opacity-80 transition-opacity"
 * />
 */
export function TagToggle({
  state = true,
  label = "Label",
  showIcon = true,
  icon = null,
  className,
  ...rest
}: TagToggleProps) {
  // Determine which icon to render (custom or default)
  const iconElement = icon || <IconCheck size="16" />;

  if (state) {
    // Active State (state=true)
    return (
      <div
        className={cn("tag-toggle tag-toggle-active", className)}
        data-figma-node-id="157:10317"
        {...rest}
      >
        {showIcon && (
          <span className="tag-toggle-icon" data-figma-node-id="83:31139">
            {iconElement}
          </span>
        )}
        <span
          className="tag-toggle-label-active"
          data-figma-node-id="157:10318"
        >
          {label}
        </span>
      </div>
    );
  }

  // Inactive State (state=false)
  return (
    <div
      className={cn("tag-toggle tag-toggle-inactive", className)}
      data-figma-node-id="157:10319"
      {...rest}
    >
      <span
        className="tag-toggle-label-inactive"
        data-figma-node-id="157:10320"
      >
        {label}
      </span>
    </div>
  );
}
