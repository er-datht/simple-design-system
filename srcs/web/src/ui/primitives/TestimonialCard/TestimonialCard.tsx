import { type ReactNode, type HTMLAttributes } from "react";
import { TextHeading } from "../../typography/TextHeading/TextHeading";
import { AvatarBlock } from "../../primitives/Avatar/AvatarBlock";
import { cn } from "../../../utils/cn";
import "./testimonial-card.css";

/**
 * Props for TestimonialCard component
 * Displays a testimonial with quote and author information
 */
export interface TestimonialCardProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The testimonial quote text to display
   * @default "Quote"
   */
  quote?: string;

  /**
   * Avatar to display (can be image or initial type)
   * Passed as Avatar component with configured props
   * @example <Avatar type="image" src="/user.jpg" alt="John Doe" size="md" />
   * @example <Avatar type="initial" name="Jane Smith" size="md" />
   */
  avatar: ReactNode;

  /**
   * Name of the person giving the testimonial
   */
  name: string;

  /**
   * Role, company, or description of the person
   */
  role: string;

  /**
   * Additional CSS classes for the card container
   */
  className?: string;
}

/**
 * TestimonialCard component displays customer testimonials in a card layout.
 *
 * Features:
 * - Clean card design with border and rounded corners
 * - Quote text displayed prominently using TextHeading
 * - Avatar block showing author photo/initial, name, and role
 * - Responsive design with min-width constraint
 * - Uses design system tokens for consistent styling
 * - Supports both image and initial-based avatars
 *
 * Layout:
 * - Vertical flex layout (column)
 * - 24px gap between quote and author info
 * - 24px padding around content
 * - White background with subtle border
 *
 * @example
 * // Basic usage with image avatar
 * <TestimonialCard
 *   quote="This product has transformed our workflow completely. Highly recommended!"
 *   avatar={<Avatar type="image" src="/user.jpg" alt="Jane Doe" size="md" />}
 *   name="Jane Doe"
 *   role="CEO at TechCorp"
 * />
 *
 * @example
 * // With initial avatar
 * <TestimonialCard
 *   quote="Outstanding service and support."
 *   avatar={<Avatar type="initial" name="John Smith" size="md" />}
 *   name="John Smith"
 *   role="Product Manager"
 * />
 *
 * @example
 * // With custom styling
 * <TestimonialCard
 *   quote="Best investment we've made this year."
 *   avatar={<Avatar type="initial" name="Alex" size="lg" />}
 *   name="Alex Johnson"
 *   role="Founder at StartupXYZ"
 *   className="shadow-lg hover:shadow-xl transition-shadow"
 * />
 */
export function TestimonialCard({
  quote = "Quote",
  avatar,
  name,
  role,
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
      <TextHeading text={`"${quote}"`} data-node-id="611:26195" />
      <AvatarBlock
        avatar={avatar}
        title={name}
        description={role}
        data-node-id="2010:15583"
      />
    </div>
  );
}

export default TestimonialCard;
