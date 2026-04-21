import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../../utils/cn";
import "./card-grid-testimonials.css";

/**
 * Props for the CardGridTestimonials component.
 */
export interface CardGridTestimonialsProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Main heading text for the testimonials section
   * @default "Heading"
   */
  heading?: string;

  /**
   * Subheading text providing additional context
   * @default "Subheading"
   */
  subheading?: string;

  /**
   * Testimonial card components to be rendered in the grid
   * Typically TestimonialCard components
   */
  children: ReactNode;
}

/**
 * CardGridTestimonials component displays a responsive grid of customer testimonials.
 *
 * Features:
 * - Responsive layout that adapts from desktop (3 columns) to mobile (1 column)
 * - Section header with heading and subheading
 * - Grid of testimonial cards with quotes and author information
 * - Uses design system tokens for consistent styling
 * - Responsive behavior via CSS media queries (no platform prop needed)
 * - Flexible children pattern for rendering any testimonial components
 *
 * Layout:
 * - Desktop (≥768px): full width, 64px padding, 48px gaps, 3-column grid
 * - Mobile (<768px): full width, 24px padding, 24px gaps, 1-column grid
 *
 * Design Tokens:
 * - Colors: text-default-default, text-default-secondary, background-default-default
 * - Typography: heading (24px/600), subheading (20px/400)
 * - Spacing: 48px section gap, 8px header gap, responsive padding/gaps
 *
 * **Figma Source:** [Card Grid Testimonials](https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=348-13347)
 *
 * @example
 * // Basic usage with TestimonialCard components
 * <CardGridTestimonials
 *   heading="Customer Testimonials"
 *   subheading="Hear what our customers have to say"
 * >
 *   <TestimonialCard
 *     quote="This product has transformed our workflow completely!"
 *     avatar={<Avatar type="image" src="/user1.jpg" alt="Jane Doe" size="md" />}
 *     name="Jane Doe"
 *     role="CEO at TechCorp"
 *   />
 *   <TestimonialCard
 *     quote="Outstanding support and intuitive interface!"
 *     avatar={<Avatar type="image" src="/user2.jpg" alt="John Smith" size="md" />}
 *     name="John Smith"
 *     role="CTO at StartupXYZ"
 *   />
 * </CardGridTestimonials>
 *
 * @example
 * // With initial-based avatars
 * <CardGridTestimonials heading="What Our Users Say">
 *   <TestimonialCard
 *     quote="A game-changer for our organization!"
 *     avatar={<Avatar type="initial" name="Alex Johnson" size="md" />}
 *     name="Alex Johnson"
 *     role="VP of Engineering"
 *   />
 * </CardGridTestimonials>
 */
export function CardGridTestimonials({
  heading = "Heading",
  subheading = "Subheading",
  children,
  className,
  ...rest
}: CardGridTestimonialsProps) {
  return (
    <div
      data-name="CardGridTestimonials"
      data-node-id="348:13348"
      className={cn("card-grid-testimonials", className)}
      {...rest}
    >
      {/* Text Content Heading */}
      <div className="card-grid-testimonials__header">
        <h2 className="card-grid-testimonials__heading">{heading}</h2>
        <p className="card-grid-testimonials__subheading">{subheading}</p>
      </div>

      {/* Card Grid */}
      <div className="card-grid-testimonials__grid" data-node-id="348:13350">
        {children}
      </div>
    </div>
  );
}
