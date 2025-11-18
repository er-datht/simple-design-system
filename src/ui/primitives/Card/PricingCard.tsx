import { type HTMLAttributes } from "react";
import { cn } from "../../../utils/cn";
import { TextHeading } from "../../typography/TextHeading/TextHeading";
import { TextPrice } from "../../typography/TextPrice/TextPrice";
import { TextList } from "../../typography/TextList/TextList";
import { TextListItem } from "../../typography/TextListItem/TextListItem";
import "./card.css";

/**
 * Visual variant for color scheme
 */
export type PricingCardVariant = "Stroke" | "Brand";

/**
 * Props for PricingCard component
 */
export interface PricingCardProps extends HTMLAttributes<HTMLElement> {
  /**
   * Determines color scheme and styling
   * - Stroke: Light background with dark button
   * - Brand: Dark background with light button
   * @default "Stroke"
   */
  variant?: PricingCardVariant;

  /**
   * Plan title/name
   * @default "Title"
   */
  title?: string;

  /**
   * Price amount
   * @default "50"
   */
  price?: string;

  /**
   * Currency symbol
   * @default "$"
   */
  currency?: string;

  /**
   * Billing period label
   * @default "/ mo"
   */
  priceLabel?: string;

  /**
   * List of items
   * @default ["First list item", "Second list item", "Third list item", "Fourth list item"]
   */
  list?: string[];

  /**
   * Button text label
   * @default "Button"
   */
  buttonText?: string;

  /**
   * Button click handler
   */
  onButtonClick?: () => void;

  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * PricingCard Component
 *
 * A comprehensive component designed to display pricing information, plan details, and call-to-action buttons.
 * Showcases pricing tiers with titles, prices, feature lists, and actionable buttons.
 *
 * Supports multiple responsive variants (Desktop and Mobile) and styling options (Stroke and Brand themes),
 * making it flexible for various pricing page layouts.
 *
 * **Figma Source:** [PricingCard Component](https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=1444-11846)
 *
 * @example
 * ```tsx
 * // Default Stroke variant
 * <PricingCard />
 *
 * // Brand variant (featured tier)
 * <PricingCard variant="Brand" />
 *
 * // Custom pricing grid
 * <PricingCard
 *   title="Professional"
 *   price="99"
 *   list={["Unlimited projects", "Priority support", "Advanced analytics"]}
 *   buttonText="Subscribe"
 *   variant="Brand"
 * />
 * ```
 */
export function PricingCard({
  variant = "Stroke",
  title = "Title",
  price = "50",
  currency = "$",
  priceLabel = "/ mo",
  list = [
    "First list item",
    "Second list item",
    "Third list item",
    "Fourth list item",
  ],
  buttonText = "Button",
  onButtonClick,
  className,
  ...rest
}: PricingCardProps) {
  // Calculate Figma node ID based on variant (default to Desktop variant)
  const getNodeId = () => {
    const nodeIdMap: Record<string, string> = {
      Stroke: "7722:3736",
      Brand: "1444:13098",
    };
    return nodeIdMap[variant] || "7722:3736";
  };

  // Determine button styling based on variant
  const isStrokeVariant = variant === "Stroke";

  return (
    <article
      className={cn(
        "pricing-card",
        `pricing-card--${variant.toLowerCase()}`,
        className
      )}
      data-name="PricingCard"
      data-node-id={getNodeId()}
      aria-label={`${title} pricing card`}
      {...rest}
    >
      {/* Content Container */}
      <div className="pricing-card__content">
        {/* Top Section */}
        <div className="pricing-card__top-section">
          {/* Desktop: Title visible, Mobile: Hidden (shown in title-price-row) */}
          <div className="pricing-card__title-desktop">
            <TextHeading text={title} />
          </div>

          {/* Desktop: Price visible, Mobile: Hidden (shown in title-price-row) */}
          <div className="pricing-card__price-desktop">
            <TextPrice
              price={price}
              currency={currency}
              label={priceLabel}
              hasLabel={true}
              size="Large"
            />
          </div>

          {/* Mobile only: Title + Price horizontal row */}
          <div className="pricing-card__title-price-row">
            <TextHeading text={title} />
            <TextPrice
              price={price}
              currency={currency}
              label={priceLabel}
              hasLabel={true}
              size="Small"
            />
          </div>

          {/* Features List - responsive density handled by CSS */}
          <TextList density="Default" className="pricing-card__list">
            {list.map((feature, index) => (
              <TextListItem key={index} text={feature} />
            ))}
          </TextList>
        </div>

        {/* Button */}
        <button
          type="button"
          className={cn(
            "pricing-card__button",
            isStrokeVariant
              ? "pricing-card__button--stroke"
              : "pricing-card__button--brand"
          )}
          onClick={onButtonClick}
          aria-label={`${buttonText} for ${title} plan`}
        >
          <span className="pricing-card__button-text">{buttonText}</span>
        </button>
      </div>
    </article>
  );
}

export default PricingCard;
