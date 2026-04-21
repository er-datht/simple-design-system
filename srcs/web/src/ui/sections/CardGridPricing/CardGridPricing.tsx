import { type HTMLAttributes } from "react";
import { cn } from "../../../utils/cn";
import { PricingCard } from "../../primitives/Card/PricingCard";
import {
  NavigationPillList,
  type NavigationPillItem,
} from "../../primitives/Navigation/NavigationPillList";
import "./card-grid-pricing.css";

/**
 * Billing period type
 */
export type BillingPeriod = "monthly" | "yearly";

/**
 * Pricing card configuration
 */
export interface PricingCardConfig {
  /**
   * Plan title
   */
  title: string;
  /**
   * Price amount
   */
  price: string;
  /**
   * Currency symbol
   * @default "$"
   */
  currency?: string;
  /**
   * Billing period label (e.g., "/ mo")
   * @default "/ mo"
   */
  period?: string;
  /**
   * List of features
   */
  features: string[];
  /**
   * Button text label
   */
  buttonLabel: string;
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
}

/**
 * Props for CardGridPricing component
 */
export interface CardGridPricingProps extends HTMLAttributes<HTMLElement> {
  /**
   * Active billing period
   * @default "monthly"
   */
  activePeriod?: BillingPeriod;
  /**
   * Callback when billing period changes
   */
  onPeriodChange?: (period: BillingPeriod) => void;
  /**
   * Whether to show third pill option
   * @default false
   */
  showThirdPillOption?: boolean;
  /**
   * Label for third pill
   * @default "Link"
   */
  thirdPillLabel?: string;
  /**
   * Array of 3 pricing card configurations
   */
  cards: [PricingCardConfig, PricingCardConfig, PricingCardConfig];
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * CardGridPricing Component
 *
 * A responsive pricing section that displays pricing cards in a grid layout
 * with navigation pills for switching between billing periods.
 *
 * **Key Features:**
 * - Desktop: 3 cards per row horizontally
 * - Mobile: Cards stacked vertically
 * - Navigation pills for billing period toggle
 * - Responsive layout using CSS media queries
 *
 * **Figma Source:** [Card Grid Pricing](https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=348-14983)
 *
 * @example
 * ```tsx
 * <CardGridPricing
 *   activePeriod="monthly"
 *   onPeriodChange={(period) => console.log(period)}
 *   cards={[
 *     {
 *       title: 'Starter',
 *       price: '29',
 *       features: ['10 projects', 'Basic analytics', 'Email support'],
 *       buttonLabel: 'Start Free Trial'
 *     },
 *     {
 *       title: 'Professional',
 *       price: '99',
 *       features: ['Unlimited projects', 'Advanced analytics', 'Priority support'],
 *       buttonLabel: 'Start Free Trial',
 *       isBrand: true  // Featured/highlighted card
 *     },
 *     {
 *       title: 'Enterprise',
 *       price: '299',
 *       features: ['Unlimited everything', 'Custom analytics', '24/7 support'],
 *       buttonLabel: 'Contact Sales'
 *     }
 *   ]}
 * />
 * ```
 */
export function CardGridPricing({
  activePeriod = "monthly",
  onPeriodChange,
  showThirdPillOption = false,
  thirdPillLabel = "Link",
  cards,
  className,
  ...rest
}: CardGridPricingProps) {
  // Node IDs for desktop and mobile variants
  const desktopNodeId = "2142:10786";
  const mobileNodeId = "348:14984";
  const desktopGridNodeId = "2143:13149";
  const mobileGridNodeId = "348:14986";

  // Desktop card node IDs
  const desktopCardNodeIds = ["2143:13150", "2143:13151", "2143:13152"];
  // Mobile card node IDs
  const mobileCardNodeIds = ["348:14987", "348:14988", "348:14989"];

  const pillItems: NavigationPillItem[] = [
    { id: "yearly", label: "Yearly" },
    { id: "monthly", label: "Monthly" },
  ];

  return (
    <section
      className={cn("card-grid-pricing", className)}
      data-name="Card Grid Pricing"
      aria-label="Pricing plans"
      {...rest}
    >
      {/* Desktop Variant */}
      <div
        className="card-grid-pricing__desktop"
        data-name="Platform=Desktop"
        data-node-id={desktopNodeId}
      >
        {/* Navigation Pills */}
        <NavigationPillList
          items={pillItems}
          defaultActiveItemId="yearly"
          onItemClick={(id) => console.log("Clicked:", id)}
          className="card-grid-pricing__navigation"
          ariaLabel="Billing period selection"
        />

        {/* Card Grid - Desktop */}
        <div
          id="pricing-cards"
          className="card-grid-pricing__cards"
          data-name="Card Grid"
          data-node-id={desktopGridNodeId}
          role="tabpanel"
        >
          {cards.map((card, index) => (
            <PricingCard
              key={`desktop-card-${index}`}
              title={card.title}
              price={card.price}
              currency={card.currency}
              period={card.period}
              features={card.features}
              buttonLabel={card.buttonLabel}
              onButtonClick={card.onButtonClick}
              isBrand={card.isBrand}
              data-node-id={desktopCardNodeIds[index]}
              className="card-grid-pricing__card"
            />
          ))}
        </div>
      </div>

      {/* Mobile Variant */}
      <div
        className="card-grid-pricing__mobile"
        data-name="Platform=Mobile"
        data-node-id={mobileNodeId}
      >
        {/* Navigation Pills - Mobile */}
        <NavigationPillList
          items={pillItems}
          defaultActiveItemId="yearly"
          onItemClick={(id) => console.log("Clicked:", id)}
          className="card-grid-pricing__navigation"
          ariaLabel="Billing period selection"
        />

        {/* Card Grid - Mobile */}
        <div
          id="pricing-cards-mobile"
          className="card-grid-pricing__cards"
          data-name="Card Grid"
          data-node-id={mobileGridNodeId}
          role="tabpanel"
        >
          {cards.map((card, index) => (
            <PricingCard
              key={`mobile-card-${index}`}
              title={card.title}
              price={card.price}
              currency={card.currency}
              period={card.period}
              features={card.features}
              buttonLabel={card.buttonLabel}
              onButtonClick={card.onButtonClick}
              isBrand={card.isBrand}
              data-node-id={mobileCardNodeIds[index]}
              className="card-grid-pricing__card"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
