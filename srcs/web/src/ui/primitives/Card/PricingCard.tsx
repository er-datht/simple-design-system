import { type HTMLAttributes } from "react";
import { cn } from "../../../utils/cn";
import { Button } from "../Button/Button";
import { TextHeading } from "../../typography/TextHeading/TextHeading";
import { TextPrice } from "../../typography/TextPrice/TextPrice";
import { TextList } from "../../typography/TextList/TextList";
import { TextListItem } from "../../typography/TextListItem/TextListItem";
import "./card.css";

/**
 * Props for PricingCard component
 */
export interface PricingCardProps extends HTMLAttributes<HTMLElement> {
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
  period?: string;

  /**
   * List of feature items
   * @default ["First list item", "Second list item", "Third list item", "Fourth list item"]
   */
  features?: string[];

  /**
   * Button text label
   * @default "Button"
   */
  buttonLabel?: string;

  /**
   * Button click handler
   */
  onButtonClick?: () => void;

  /**
   * Whether to use the brand variant (dark/inverted styling)
   * Creates a highlighted/featured card appearance
   * @default false
   */
  isBrand?: boolean;

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
 * Supports multiple responsive variants (Desktop and Mobile) with theme-based styling,
 * making it flexible for various pricing page layouts.
 *
 * **Figma Source:** [PricingCard Component](https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=1444-11846)
 *
 * @example
 * ```tsx
 * // Default usage
 * <PricingCard />
 *
 * // Custom pricing card
 * <PricingCard
 *   title="Professional"
 *   price="99"
 *   features={["Unlimited projects", "Priority support", "Advanced analytics"]}
 *   buttonLabel="Subscribe"
 * />
 *
 * // Featured/highlighted card with brand styling
 * <PricingCard
 *   title="Enterprise"
 *   price="299"
 *   features={["Unlimited everything", "24/7 support", "Custom analytics"]}
 *   buttonLabel="Contact Sales"
 *   isBrand={true}
 * />
 * ```
 */
export function PricingCard({
  title = "Title",
  price = "50",
  currency = "$",
  period = "/ mo",
  features = [
    "First list item",
    "Second list item",
    "Third list item",
    "Fourth list item",
  ],
  buttonLabel = "Button",
  onButtonClick,
  isBrand = false,
  className,
  ...rest
}: PricingCardProps) {
  return (
    <article
      className={cn(
        "pricing-card",
        isBrand ? "pricing-card--brand" : "pricing-card--stroke",
        className
      )}
      data-name="PricingCard"
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
              label={period}
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
              label={period}
              hasLabel={true}
              size="Small"
            />
          </div>

          {/* Features List - responsive density handled by CSS */}
          <TextList density="Default" className="pricing-card__list">
            {features.map((feature, index) => (
              <TextListItem key={index} text={feature} />
            ))}
          </TextList>
        </div>

        {/* Button */}
        <Button
          variant="primary"
          size="md"
          onClick={onButtonClick}
          aria-label={`${buttonLabel} for ${title} plan`}
          className="pricing-card__button"
        >
          {buttonLabel}
        </Button>
      </div>
    </article>
  );
}

export default PricingCard;
