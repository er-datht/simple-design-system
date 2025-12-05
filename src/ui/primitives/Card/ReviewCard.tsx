import { type HTMLAttributes } from "react";
import { format, isValid, parseISO } from "date-fns";
import { cn } from "../../../utils/cn";
import { TextHeading } from "../../typography";
import { Text } from "../../typography";
import { AvatarBlock } from "../Avatar";
import { Avatar } from "../Avatar";
import "./card.css";
import { IconStar } from "../../icons";

/**
 * Props for ReviewCard component
 */
export interface ReviewCardProps extends HTMLAttributes<HTMLElement> {
  /**
   * Star rating (1-5)
   * @default 5
   */
  rating?: number;

  /**
   * Review title/headline
   * @default "Review title"
   */
  reviewTitle?: string;

  /**
   * Review body text
   * @default "Review body"
   */
  reviewBody?: string;

  /**
   * Reviewer's name
   * @default "Reviewer name"
   */
  reviewerName?: string;

  /**
   * Review date (supports Date object, ISO string, or timestamp)
   * Will be formatted as "MMMM DD, YYYY" (e.g., "December 15, 2024")
   * @default new Date()
   */
  reviewDate?: Date | string | number;

  /**
   * Reviewer avatar image source
   * @default undefined
   */
  avatarSrc?: string;

  /**
   * Avatar alt text
   * @default "Reviewer avatar"
   */
  avatarAlt?: string;

  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Format date to "MMMM DD, YYYY" format
 * Handles Date objects, ISO strings, timestamps, and plain strings
 * @param date - Date to format (Date, string, or number)
 * @returns Formatted date string
 */
const formatReviewDate = (date: Date | string | number | undefined): string => {
  if (!date) {
    return format(new Date(), "MMMM dd, yyyy");
  }

  // If it's already a formatted string (not ISO), return as-is for backwards compatibility
  if (typeof date === "string" && !date.includes("-") && !date.includes("T")) {
    return date;
  }

  try {
    let dateObj: Date;

    if (date instanceof Date) {
      dateObj = date;
    } else if (typeof date === "string") {
      dateObj = parseISO(date);
    } else {
      dateObj = new Date(date);
    }

    if (!isValid(dateObj)) {
      return typeof date === "string"
        ? date
        : format(new Date(), "MMMM dd, yyyy");
    }

    return format(dateObj, "MMMM dd, yyyy");
  } catch {
    return typeof date === "string"
      ? date
      : format(new Date(), "MMMM dd, yyyy");
  }
};

/**
 * ReviewCard Component
 *
 * A testimonial/review display component designed to showcase user feedback with
 * visual rating indicators. Presents a complete user review including a star rating,
 * review title and body text, and reviewer information (avatar, name, and date).
 *
 * Perfect for testimonials, customer reviews, and user feedback displays.
 *
 * **Figma Source:** [Review Card Component](https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=2236:16106)
 *
 * @example
 * ```tsx
 * // Basic usage (uses current date)
 * <ReviewCard />
 *
 * // With Date object
 * <ReviewCard
 *   rating={5}
 *   reviewTitle="Excellent Product!"
 *   reviewBody="This product exceeded all my expectations. Highly recommended!"
 *   reviewerName="John Doe"
 *   reviewDate={new Date(2024, 11, 15)} // December 15, 2024
 *   avatarSrc="/avatars/john.jpg"
 * />
 *
 * // With ISO string
 * <ReviewCard
 *   rating={4}
 *   reviewTitle="Very Good"
 *   reviewBody="Great quality, minor room for improvement."
 *   reviewDate="2024-12-15"
 * />
 *
 * // With timestamp
 * <ReviewCard
 *   rating={5}
 *   reviewTitle="Amazing!"
 *   reviewBody="Best purchase ever!"
 *   reviewDate={1702598400000}
 * />
 *
 * // Backwards compatible with formatted string
 * <ReviewCard
 *   rating={5}
 *   reviewTitle="Great!"
 *   reviewBody="Highly recommend!"
 *   reviewDate="December 15, 2024"
 * />
 * ```
 */
export function ReviewCard({
  rating = 5,
  reviewTitle = "Review title",
  reviewBody = "Review body",
  reviewerName = "Reviewer name",
  reviewDate,
  avatarSrc,
  avatarAlt = "Reviewer avatar",
  className,
  ...rest
}: ReviewCardProps) {
  // Clamp rating between 1 and 5
  const clampedRating = Math.min(5, Math.max(1, rating));

  // Format the review date
  const formattedDate = formatReviewDate(reviewDate);

  return (
    <article
      className={cn("review-card", className)}
      data-name="ReviewCard"
      data-node-id="2236:16106"
      aria-label={`Review by ${reviewerName}`}
      {...rest}
    >
      {/* Star Rating */}
      <div
        className="review-card__rating"
        data-node-id="638:14360"
        role="img"
        aria-label={`${clampedRating} star rating`}
      >
        {Array.from({ length: 5 }, (_, index) => (
          <div
            key={index}
            className={cn(
              "review-card__star",
              index < clampedRating && "review-card__star--filled"
            )}
            data-node-id={`638:1436${index + 1}`}
          >
            <IconStar />
          </div>
        ))}
      </div>

      {/* Review Body (Title + Text) */}
      <div className="review-card__body" data-node-id="2236:16105">
        <TextHeading text={reviewTitle} data-node-id="611:25625" />
        <Text text={reviewBody} data-node-id="611:25950" />
      </div>

      {/* Avatar Block (Reviewer Info) */}
      <div className="review-card__avatar-container" data-node-id="2236:16098">
        <AvatarBlock
          title={reviewerName}
          description={formattedDate}
          avatar={
            <Avatar
              type="image"
              src={avatarSrc || "/avatar.jpg"}
              alt={avatarAlt}
              size="lg"
              shape="circle"
            />
          }
        />
      </div>
    </article>
  );
}

export default ReviewCard;
