import type { HTMLAttributes } from "react";
import { cn } from "../../../utils/cn";
import { Card } from "../../primitives/Card";
import { Button } from "../../primitives/Button";
import "./card-grid-content-list.css";

/**
 * Card item data structure for the grid
 */
export interface CardGridContentListCardItem {
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
   * Card body text content
   */
  body: string;

  /**
   * Optional button text (if not provided, no button is shown)
   */
  buttonText?: string;
}

/**
 * Props for the CardGridContentList component
 */
export interface CardGridContentListProps
  extends HTMLAttributes<HTMLElement> {
  /**
   * Main heading text for the content list section
   * @default "Heading"
   */
  heading?: string;

  /**
   * Subheading text providing additional context
   * @default "Subheading"
   */
  subheading?: string;

  /**
   * Array of card items to display in the grid
   */
  cards: CardGridContentListCardItem[];

  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * CardGridContentList component displays a responsive container with heading/subheading
 * followed by a grid of content cards with images, titles, body text, and optional action buttons.
 *
 * Features:
 * - Responsive layout that adapts from desktop (1200px max-width) to mobile (375px max-width)
 * - Mobile-first approach with breakpoint at 768px
 * - Dynamic card variant switching (Stroke on desktop, Default on mobile)
 * - Flexible card gap (24px desktop, 48px mobile)
 * - Uses design system tokens for consistent styling
 * - Integration with Card and Button primitives
 * - Semantic HTML with proper accessibility attributes
 *
 * Layout:
 * - Desktop (≥768px): 1200px max-width, 64px padding, 24px card gap, Stroke variant
 * - Mobile (<768px): 375px max-width, 24px padding, 48px card gap, Default variant
 *
 * Design Tokens:
 * - Colors: text-default-default, text-default-secondary, background-default-default
 * - Typography: heading (24px/600), subheading (20px/400), body (16px/400)
 * - Spacing: 8px header gap, 48px section gap, responsive padding and card gaps
 * - Sizing: 160px image size, 8px border radius
 *
 * **Figma Source:** [Card Grid Content List](https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=348-13407)
 *
 * @example
 * // Basic usage with image cards
 * <CardGridContentList
 *   heading="Featured Content"
 *   subheading="Explore our latest articles and resources"
 *   cards={[
 *     {
 *       image: "/avatar1.svg",
 *       alt: "User avatar",
 *       title: "Getting Started",
 *       body: "Learn the basics of our platform with this comprehensive guide.",
 *       buttonText: "View Profile"
 *     },
 *     {
 *       image: "/avatar2.svg",
 *       alt: "Team member",
 *       title: "Advanced Features",
 *       body: "Discover powerful features that will streamline your workflow.",
 *       buttonText: "Learn More"
 *     }
 *   ]}
 * />
 *
 * @example
 * // With cards without buttons
 * <CardGridContentList
 *   heading="Team Members"
 *   subheading="Meet our talented team"
 *   cards={[
 *     {
 *       image: "/team-member.jpg",
 *       alt: "Jane Doe",
 *       title: "Jane Doe",
 *       body: "Senior Engineer with 10 years of experience in full-stack development."
 *     }
 *   ]}
 * />
 */
export function CardGridContentList({
  heading = "Heading",
  subheading = "Subheading",
  cards,
  className,
  ...rest
}: CardGridContentListProps) {
  return (
    <section
      data-name="CardGridContentList"
      data-node-id="2142:12241"
      data-node-id-mobile="348:13408"
      className={cn("card-grid-content-list", className)}
      {...rest}
    >
      {/* Text Content Heading */}
      <div className="card-grid-content-list__header">
        <h2 className="card-grid-content-list__heading">{heading}</h2>
        <p className="card-grid-content-list__subheading">{subheading}</p>
      </div>

      {/* Cards Container */}
      <div
        className="card-grid-content-list__cards"
        data-node-id="189:29929"
        data-node-id-mobile="348:13410"
      >
        {cards.map((card, index) => (
          <Card
            key={index}
            assetType="Image"
            image={card.image}
            alt={card.alt}
            heading={card.title}
            body={card.body}
            direction="Horizontal"
            className="card-grid-content-list__card"
          >
            {card.buttonText && (
              <Button variant="neutral">{card.buttonText}</Button>
            )}
          </Card>
        ))}
      </div>
    </section>
  );
}
