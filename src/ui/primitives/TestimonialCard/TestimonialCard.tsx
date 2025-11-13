import { type HTMLAttributes } from "react";
import { cn } from "../../../utils/cn";
import { Avatar } from "../Avatar/Avatar";
import { AvatarBlock } from "../Avatar/AvatarBlock";
import "./testimonial-card.css";

/**
 * Props for TestimonialCard component
 * Displays a customer testimonial with quote, avatar, name, and title
 */
export interface TestimonialCardProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The testimonial quote text
   */
  quote: string;

  /**
   * Customer name
   */
  customerName: string;

  /**
   * Customer title/role
   */
  customerTitle: string;

  /**
   * URL for customer avatar image
   */
  avatarUrl: string;

  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * TestimonialCard component that displays a customer testimonial
 * Combines a quote, avatar, customer name, and title in a card layout
 *
 * @example
 * // Basic usage
 * <TestimonialCard
 *   quote="This product transformed our workflow!"
 *   customerName="Sarah Johnson"
 *   customerTitle="Product Manager at TechCorp"
 *   avatarUrl="/avatars/sarah.jpg"
 * />
 *
 * @example
 * // With custom className
 * <TestimonialCard
 *   quote="Excellent service and support!"
 *   customerName="John Doe"
 *   customerTitle="CEO at StartupCo"
 *   avatarUrl="/avatars/john.jpg"
 *   className="my-custom-class"
 * />
 */
export function TestimonialCard({
  quote,
  customerName,
  customerTitle,
  avatarUrl,
  className,
  ...rest
}: TestimonialCardProps) {
  return (
    <div
      className={cn("testimonial-card", className)}
      data-name="Testimonial Card"
      data-node-id="7717:3946"
      {...rest}
    >
      <blockquote
        className="testimonial-card-quote"
        data-name="Text Heading"
        data-node-id="611:26195"
      >
        "{quote}"
      </blockquote>
      <AvatarBlock
        avatar={
          <Avatar
            type="image"
            src={avatarUrl}
            alt={`${customerName}'s profile picture`}
            size="lg"
            shape="circle"
          />
        }
        title={customerName}
        description={customerTitle}
        className="testimonial-card-avatar-block"
        data-name="Avatar Block"
        data-node-id="2010:15583"
      />
    </div>
  );
}

export default TestimonialCard;
