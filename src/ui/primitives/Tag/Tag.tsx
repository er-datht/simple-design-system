import { type ReactNode } from "react";
import { IconX } from "../../icons/IconX";
import { cn } from "../../../utils/cn";
import "./tag.css";

export type TagScheme = "brand" | "neutral" | "positive" | "danger" | "warning";
export type TagVariant = "primary" | "secondary";

export interface TagProps {
  /**
   * Color scheme determining the visual theme
   * @default "brand"
   */
  scheme?: TagScheme;

  /**
   * Visual style variant (solid primary colors vs. lighter secondary backgrounds)
   * @default "primary"
   */
  variant?: TagVariant;

  /**
   * The text content displayed in the tag
   */
  label: string;

  /**
   * Optional callback when the tag is removed (shows X button when provided)
   */
  onRemove?: () => void;

  /**
   * Additional CSS classes
   */
  className?: string;

  /**
   * Children content (overrides label if provided)
   */
  children?: ReactNode;
}

/**
 * Tag component - A versatile, dismissible label element used for categorizing,
 * marking, or labeling content with visual emphasis.
 *
 * Features:
 * - Five color schemes: Brand, Neutral, Positive, Danger, Warning
 * - Two variant styles: Primary (solid colors) and Secondary (lighter backgrounds)
 * - Optional removable functionality with X button
 * - Interactive hover states with visual feedback
 * - Semantic HTML with proper accessibility attributes
 * - Uses design system tokens for consistent styling
 *
 * Color Schemes:
 * - Brand: Primary brand colors for general categorization
 * - Neutral: Subtle gray tones for neutral information
 * - Positive: Green tones for success/positive states
 * - Danger: Red tones for errors/critical states
 * - Warning: Yellow/orange tones for warnings/cautions
 *
 * Variants:
 * - Primary: Bold, solid background colors with high contrast
 * - Secondary: Lighter background colors with softer appearance
 *
 * Design Tokens:
 * - Typography: 14px font size, 400 weight, 20px line height
 * - Spacing: 4px horizontal padding, 2px vertical padding
 * - Border Radius: 4px for rounded corners
 * - Remove Button: 16x16px icon with hover states
 *
 * **Figma Source:** [Tag Component](https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=56-8833)
 *
 * @example
 * // Basic brand tag
 * <Tag label="Featured" />
 *
 * @example
 * // Danger tag with secondary variant
 * <Tag
 *   scheme="danger"
 *   variant="secondary"
 *   label="Error"
 * />
 *
 * @example
 * // Removable tag with callback
 * <Tag
 *   scheme="positive"
 *   label="Active"
 *   onRemove={() => console.log('Tag removed')}
 * />
 *
 * @example
 * // Custom content using children
 * <Tag scheme="warning">
 *   <strong>Important</strong>
 * </Tag>
 */
export function Tag({
  scheme = "brand",
  variant = "primary",
  label,
  onRemove,
  className,
  children,
}: TagProps) {
  const isRemovable = !!onRemove;

  // Get Figma node ID based on scheme and variant
  const getFigmaNodeId = () => {
    const nodeMap: Record<string, string> = {
      "brand-primary": "56:8833",
      "brand-secondary": "56:9873",
      "danger-primary": "56:8835",
      "danger-secondary": "56:9879",
      "positive-primary": "56:8837",
      "positive-secondary": "56:9885",
      "warning-primary": "56:8839",
      "warning-secondary": "56:9891",
      "neutral-primary": "56:8831",
      "neutral-secondary": "56:9867",
    };
    return nodeMap[`${scheme}-${variant}`] || "";
  };

  return (
    <div
      className={cn(
        // Base styles
        "tag",
        `tag-scheme-${scheme}`,
        `tag-variant-${variant}`,
        className
      )}
      data-figma-node-id={getFigmaNodeId()}
    >
      <span className="tag-label">{children || label}</span>
      {isRemovable && (
        <button
          type="button"
          onClick={onRemove}
          aria-label={`Remove ${label} tag`}
          className="tag-remove-button"
          data-figma-node-id="3052:82"
        >
          <IconX size="16" className="" />
        </button>
      )}
    </div>
  );
}
