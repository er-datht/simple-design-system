import { type ReactNode, type HTMLAttributes } from "react";
import { cn } from "../../../utils/cn";
import "./card.css";

export type CardAssetType = "Icon" | "Image";
export type CardVariant = "Stroke" | "Default";
export type CardDirection = "Horizontal" | "Vertical";
export type InfoIconSize = "32" | "48";

export interface CardProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  /**
   * Main heading text content
   * @default "Title"
   */
  heading?: string;

  /**
   * Secondary body text content
   * @default "Body text for whatever you'd like to say..."
   */
  body?: string;

  /**
   * Custom icon node (overrides default Info icon)
   * @default null
   */
  icon?: ReactNode | null;

  /**
   * Type of asset to display
   * @default "Icon"
   */
  assetType?: CardAssetType;

  /**
   * Border styling variant
   * @default "Stroke"
   */
  variant?: CardVariant;

  /**
   * Layout direction
   * @default "Horizontal"
   */
  direction?: CardDirection;

  /**
   * Path to image asset (used when assetType is "Image")
   * @default undefined
   */
  image?: string;

  /**
   * Alt text for image (used when assetType is "Image" and image prop is provided)
   * @default Falls back to heading or "Card image"
   */
  alt?: string;

  /**
   * Children elements to render in the button group
   */
  children?: ReactNode;

  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Info Icon Component
 * Internal icon component used as default when no custom icon is provided
 */
interface InfoIconProps {
  size?: InfoIconSize;
  className?: string;
}

const InfoIcon = ({ size = "48", className }: InfoIconProps) => {
  const iconSize = size === "32" ? 32 : 48;
  const iconNodeId = size === "32" ? "4039:11823" : "4039:11409";

  return (
    <div
      className={cn("card__icon-wrapper", className)}
      style={{ width: `${iconSize}px`, height: `${iconSize}px` }}
      data-node-id={iconNodeId}
    >
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle
          cx="24"
          cy="24"
          r="20"
          stroke="var(--sds-color-icon-default-default, #1e1e1e)"
          strokeWidth="1.6"
        />
        <path
          d="M24 22v10M24 16v2"
          stroke="var(--sds-color-icon-default-default, #1e1e1e)"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

/**
 * Image Placeholder Component
 * Used when assetType is "Image"
 */
const ImagePlaceholder = () => {
  return (
    <div className="card__image-placeholder" aria-hidden="true">
      <div className="card__image-background" />
      <div className="card__image-overlay" />
    </div>
  );
};

/**
 * Card Component
 *
 * A flexible, multi-variant card component designed to present content with optional icons or images,
 * supporting both horizontal and vertical layouts with optional borders and call-to-action buttons.
 *
 * Features:
 * - 8 variant combinations (Icon/Image × Default/Stroke × Horizontal/Vertical)
 * - Custom icon override support
 * - Conditional rendering for button section based on children
 * - Design token-based styling
 * - Figma node ID sync via data attributes
 * - WCAG-compliant color contrast
 *
 * @example
 * ```tsx
 * // Icon variant with border, horizontal layout
 * <Card
 *   heading="New Feature Launch"
 *   body="Discover our latest innovation designed to streamline your workflow."
 *   assetType="Icon"
 *   variant="Stroke"
 *   direction="Horizontal"
 * >
 *   <Button variant="primary">Learn More</Button>
 * </Card>
 *
 * // Image variant, vertical layout, no border, no buttons
 * <Card
 *   heading="Customer Testimonial"
 *   body="This product transformed how we manage our projects. Highly recommended!"
 *   assetType="Image"
 *   variant="Default"
 *   direction="Vertical"
 * />
 * ```
 */
export const Card = ({
  heading = "Title",
  body = "Body text for whatever you'd like to say...",
  icon = null,
  assetType = "Icon",
  variant = "Stroke",
  direction = "Horizontal",
  image,
  alt,
  children,
  className,
  ...rest
}: CardProps) => {
  // Calculate Figma node ID based on variant combination
  const getNodeId = () => {
    const nodeIdMap: Record<string, string> = {
      "Icon-Default-Horizontal": "2142:11381",
      "Icon-Default-Vertical": "2144:2945",
      "Icon-Stroke-Horizontal": "2142:11388",
      "Icon-Stroke-Vertical": "2144:2952",
      "Image-Default-Horizontal": "2142:11395",
      "Image-Default-Vertical": "2144:2966",
      "Image-Stroke-Horizontal": "2142:11402",
      "Image-Stroke-Vertical": "2144:2973",
    };
    const key = `${assetType}-${variant}-${direction}`;
    return nodeIdMap[key] || "2142:11380";
  };

  return (
    <div
      className={cn(
        "card",
        `card--${variant.toLowerCase()}`,
        `card--${direction.toLowerCase()}`,
        className
      )}
      data-name="Card"
      data-node-id={getNodeId()}
      {...rest}
    >
      {/* Asset Container (Icon or Image) */}
      <div className="card__asset">
        {assetType === "Icon" ? (
          icon !== null ? (
            <div className="card__custom-icon">{icon}</div>
          ) : (
            <InfoIcon size="32" />
          )
        ) : image ? (
          <img
            src={image}
            alt={alt || heading || "Card image"}
            className="card__image"
          />
        ) : (
          <ImagePlaceholder />
        )}
      </div>

      {/* Body Container */}
      <div className="card__body">
        {/* Text Section */}
        <div className="card__text-section">
          <h2 className="card__heading" data-node-id="280:11380">
            {heading}
          </h2>
          <p className="card__body-text" data-node-id="280:11684">
            {body}
          </p>
        </div>

        {/* Button Group (Conditional) */}
        {children && (
          <div className="card__button-container" data-node-id="2142:11387">
            {children}
          </div>
        )}
      </div>
    </div>
  );
};
