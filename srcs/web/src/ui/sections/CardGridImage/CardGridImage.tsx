import type { HTMLAttributes } from "react";
import { cn } from "../../../utils/cn";
import { Card } from "../../primitives/Card";
import "./card-grid-image.css";

/**
 * Card item data structure for the grid
 */
export interface CardGridImageCardItem {
  /**
   * Image source URL
   */
  image: string;

  /**
   * Alternative text for the image
   */
  alt: string;

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
 * Props for the CardGridImage component
 */
export interface CardGridImageProps extends HTMLAttributes<HTMLElement> {
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
  cards: CardGridImageCardItem[];

  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * CardGridImage component displays a responsive card grid layout with image-based content.
 *
 * Features:
 * - Responsive layout that adapts from desktop (1200px max-width) to mobile (375px max-width)
 * - Mobile-first approach with breakpoint at 768px
 * - Desktop: 3-column grid layout with 64px padding
 * - Mobile: Single-column stacked layout with 24px padding
 * - Uses design system tokens for consistent styling
 * - Semantic HTML with proper accessibility attributes
 *
 * Layout:
 * - Desktop (≥768px): 1200px max-width, 64px padding, 3-column grid, 48px gap
 * - Mobile (<768px): 375px max-width, 24px padding, stacked layout, 48px gap
 *
 * Design Tokens:
 * - Colors: text-default-default (#1e1e1e), text-default-secondary (#757575), background-default-default (#ffffff)
 * - Typography: heading (24px/600), subheading (20px/400), body (16px/400)
 * - Spacing: 8px header gap, 48px section gap, responsive padding
 * - Sizing: 160x160px image placeholders, 8px border radius
 *
 * **Figma Source:** [Card Grid Image](https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=348-14431)
 *
 * @example
 * // Basic usage with 6 cards
 * <CardGridImage
 *   heading="Our Services"
 *   subheading="Discover what we can do for you"
 *   cards={[
 *     {
 *       image: "/service1.jpg",
 *       alt: "Design services",
 *       title: "Design",
 *       description: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story."
 *     },
 *     // ... 5 more cards
 *   ]}
 * />
 */
export function CardGridImage({
  heading = "Heading",
  subheading = "Subheading",
  cards,
  className,
  ...rest
}: CardGridImageProps) {
  return (
    <section
      data-name="CardGridImage"
      data-node-id="348:14431"
      data-node-id-desktop="2142:12529"
      data-node-id-mobile="348:14432"
      className={cn("card-grid-image", className)}
      {...rest}
    >
      {/* Text Content Heading */}
      <div className="card-grid-image__header">
        <h2 className="card-grid-image__heading">{heading}</h2>
        <p className="card-grid-image__subheading">{subheading}</p>
      </div>

      {/* Cards Grid */}
      <div
        className="card-grid-image__cards"
        data-node-id-desktop-row1="2142:12359"
        data-node-id-desktop-row2="373:12330"
        data-node-id-mobile-row1="348:14434"
        data-node-id-mobile-row2="373:12334"
      >
        {cards.map((card, index) => (
          <Card
            key={index}
            assetType="Image"
            image={card.image}
            alt={card.alt}
            heading={card.title}
            body={card.description}
            variant="Stroke"
            direction="Horizontal"
            className="card-grid-image__card"
          />
        ))}
      </div>
    </section>
  );
}
