import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../../utils/cn";
import { Card } from "../../primitives/Card";
import "./card-grid-icon.css";

/**
 * Card item data structure for the icon grid
 */
export interface CardGridIconCardItem {
  /**
   * Icon component (32x32px)
   */
  icon: ReactNode;

  /**
   * Card title/heading
   */
  title: string;

  /**
   * Card description text
   */
  description: string;
}

/**
 * Props for the CardGridIcon component
 */
export interface CardGridIconProps extends HTMLAttributes<HTMLElement> {
  /**
   * Main heading text for the section
   * @default "Heading"
   */
  heading?: string;

  /**
   * Subheading text providing additional context
   * @default "Subheading"
   */
  subheading?: string;

  /**
   * Array of card items to display in the grid (typically 6 cards)
   */
  cards: CardGridIconCardItem[];

  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * CardGridIcon component displays a responsive card grid layout with icon-based content.
 *
 * Features:
 * - Responsive layout that adapts from desktop (1200px max-width) to mobile (375px max-width)
 * - Mobile-first approach with breakpoint at 768px
 * - Desktop: Multi-column grid layout with 64px padding, 64px gap
 * - Mobile: 2-column or single-column layout with 24px padding, 24px gap
 * - Uses design system tokens for consistent styling
 * - Semantic HTML with proper accessibility attributes
 *
 * Layout:
 * - Desktop (≥768px): 1200px max-width, 64px padding, flexible grid, 64px gap
 * - Mobile (<768px): 375px max-width, 24px padding, 2-column layout, 24px gap
 *
 * Design Tokens:
 * - Colors: text-default-default (#1e1e1e), text-default-secondary (#757575), background-default-default (#ffffff)
 * - Typography: heading (24px/600), subheading (20px/400), body (16px/400)
 * - Spacing: 8px header gap, 48px section gap, responsive padding and card gaps
 * - Sizing: 32x32px icons, 240px min-width per card
 *
 * **Figma Source:** [Card Grid Icon Component](https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=348-13221)
 *
 * @example
 * // Basic usage with 6 cards
 * <CardGridIcon
 *   heading="Key Features"
 *   subheading="Everything you need in one place"
 *   cards={[
 *     {
 *       icon: <IconSettings size="32" />,
 *       title: "Easy Setup",
 *       description: "Get started in minutes with our intuitive setup process."
 *     },
 *     {
 *       icon: <IconShield size="32" />,
 *       title: "Secure",
 *       description: "Enterprise-grade security keeps your data safe."
 *     },
 *     // ... 4 more cards
 *   ]}
 * />
 */
export function CardGridIcon({
  heading = "Heading",
  subheading = "Subheading",
  cards,
  className,
  ...rest
}: CardGridIconProps) {
  return (
    <section
      data-name="CardGridIcon"
      data-node-id="348:13221"
      data-node-id-desktop="2143:14417"
      data-node-id-mobile="348:13222"
      className={cn("card-grid-icon", className)}
      {...rest}
    >
      {/* Text Content Heading */}
      <div
        className="card-grid-icon__header"
        data-node-id-desktop="2143:14363"
        data-node-id-mobile="348:13223"
      >
        <h2 className="card-grid-icon__heading">{heading}</h2>
        <p className="card-grid-icon__subheading">{subheading}</p>
      </div>

      {/* Cards Container */}
      <div
        className="card-grid-icon__cards"
        role="list"
        data-node-id-desktop="2143:14362"
        data-node-id-mobile="348:13224"
      >
        {cards.map((card, index) => (
          <Card
            key={index}
            icon={card.icon}
            heading={card.title}
            body={card.description}
            assetType="Icon"
            variant="Default"
            direction="Horizontal"
            className="card-grid-icon__card"
            role="listitem"
          />
        ))}
      </div>
    </section>
  );
}
