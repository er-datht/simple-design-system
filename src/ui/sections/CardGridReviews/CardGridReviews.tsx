import { type HTMLAttributes } from "react";
import { cn } from "../../../utils/cn";
import { TextHeading } from "../../typography";
import { ReviewCard } from "../../primitives";
import "./card-grid-reviews.css";

/**
 * Review data structure
 */
export type Review = {
  /**
   * Unique identifier for the review
   */
  id: string;

  /**
   * Review title/headline
   */
  title: string;

  /**
   * Review body text
   */
  body: string;

  /**
   * Star rating (1-5)
   */
  rating: number;

  /**
   * Reviewer's name
   */
  reviewerName: string;

  /**
   * Review date (supports Date object, ISO string, or timestamp)
   */
  reviewDate: Date | string | number;

  /**
   * Reviewer avatar image URL
   */
  avatarSrc?: string;

  /**
   * Avatar alt text
   */
  avatarAlt?: string;
};

/**
 * Props for CardGridReviews component
 */
export interface CardGridReviewsProps extends HTMLAttributes<HTMLElement> {
  /**
   * Section heading text
   * @default "Latest reviews"
   */
  heading?: string;

  /**
   * Array of reviews to display
   * @default Default sample reviews (3 items)
   */
  reviews?: Review[];

  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Default sample reviews data
 */
const DEFAULT_REVIEWS: Review[] = [
  {
    id: "1",
    title: "Review title",
    body: "Review body",
    rating: 5,
    reviewerName: "Reviewer name",
    reviewDate: new Date(),
  },
  {
    id: "2",
    title: "Review title",
    body: "Review body",
    rating: 5,
    reviewerName: "Reviewer name",
    reviewDate: new Date(),
  },
  {
    id: "3",
    title: "Review title",
    body: "Review body",
    rating: 5,
    reviewerName: "Reviewer name",
    reviewDate: new Date(),
  },
];

/**
 * CardGridReviews Component
 *
 * A responsive section component that displays customer reviews in a grid layout.
 * Showcases multiple review cards with star ratings, review content, and reviewer
 * information. Automatically adapts layout based on viewport size:
 *
 * - Desktop (≥768px): Horizontal grid with larger spacing
 * - Mobile (<768px): Vertical stack with compact spacing
 *
 * **Figma Source:** [CardGridReviews Component](https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=348-15213)
 *
 * **Component Type:** Section
 *
 * @example
 * ```tsx
 * // Basic usage with default reviews
 * <CardGridReviews />
 *
 * // Custom heading and reviews
 * <CardGridReviews
 *   heading="Customer Testimonials"
 *   reviews={[
 *     {
 *       id: "1",
 *       title: "Excellent Product!",
 *       body: "This product exceeded all my expectations. Highly recommended!",
 *       rating: 5,
 *       reviewerName: "John Doe",
 *       reviewDate: new Date(2024, 11, 15),
 *       avatarSrc: "/avatars/john.jpg",
 *       avatarAlt: "John Doe avatar"
 *     },
 *     {
 *       id: "2",
 *       title: "Very Good",
 *       body: "Great quality, minor room for improvement.",
 *       rating: 4,
 *       reviewerName: "Jane Smith",
 *       reviewDate: "2024-12-10",
 *     }
 *   ]}
 * />
 * ```
 */
export function CardGridReviews({
  heading = "Latest reviews",
  reviews = DEFAULT_REVIEWS,
  className,
  ...rest
}: CardGridReviewsProps) {
  return (
    <section
      className={cn("card-grid-reviews", className)}
      data-name="CardGridReviews"
      data-figma-node-id="348:15213"
      aria-label={heading}
      {...rest}
    >
      {/* Section Heading */}
      <div
        className="card-grid-reviews__heading-container"
        data-figma-node-id="2236:16178"
      >
        <TextHeading text={heading} />
      </div>

      {/* Reviews Grid */}
      <div className="card-grid-reviews__grid" data-figma-node-id="2236:16540">
        {reviews.map((review) => (
          <ReviewCard
            key={review.id}
            rating={review.rating}
            reviewTitle={review.title}
            reviewBody={review.body}
            reviewerName={review.reviewerName}
            reviewDate={review.reviewDate}
            avatarSrc={review.avatarSrc}
            avatarAlt={review.avatarAlt}
            data-figma-node-id="2236:16106"
          />
        ))}
      </div>
    </section>
  );
}

export default CardGridReviews;
