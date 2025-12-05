import { type HTMLAttributes } from "react";
import React from "react";
import { cn } from "../../../utils/cn";
import { TextHeading } from "../../typography/TextHeading/TextHeading";
import { Text } from "../../typography/Text/Text";
import { type IconProps } from "../Icon";
import "./card.css";

/**
 * Type for icon elements that can be passed to StatsCard
 * Only accepts Icon components from the design system
 */
type IconElement = React.ReactElement<IconProps> | null;

/**
 * Props for StatsCard component
 */
export interface StatsCardProps extends HTMLAttributes<HTMLElement> {
  /**
   * Optional Icon component from the design system
   * Pass an Icon component (e.g., IconClock, IconUser) to display an icon
   * Pass null to explicitly hide the icon section
   * @default undefined (no icon shown)
   */
  icon?: IconElement;

  /**
   * Statistical value to display
   * @default "100"
   */
  value?: string;

  /**
   * Label describing the statistic
   * @default "Body text"
   */
  label?: string;

  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * StatsCard Component
 *
 * A compact, reusable component designed to display statistical information with
 * a prominent icon, a numerical headline, and supporting body text. Perfect for
 * dashboards, analytics interfaces, and data visualization layouts.
 *
 * Commonly used to highlight key metrics such as user counts, engagement rates,
 * revenue figures, or other KPIs in a visually organized manner.
 *
 * **Figma Source:** [Stats Card Component](https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=2236:15082)
 *
 * @example
 * ```tsx
 * // Basic usage (no icon)
 * <StatsCard value="100" label="Total Users" />
 *
 * // With Icon component (default size)
 * <StatsCard
 *   icon={<IconClock />}
 *   value="567"
 *   label="Active Sessions"
 * />
 *
 * // With Icon component and custom size
 * <StatsCard
 *   icon={<IconUser size="32" />}
 *   value="1,234"
 *   label="Total Users"
 * />
 * ```
 */
export function StatsCard({
  icon,
  value = "100",
  label = "Body text",
  className,
  ...rest
}: StatsCardProps) {
  return (
    <article
      className={cn("stats-card", className)}
      data-name="Stats Card"
      data-node-id="2236:15082"
      aria-label={`${label}: ${value}`}
      {...rest}
    >
      {/* Icon Section */}
      {icon && <div className="stats-card__icon">{icon}</div>}

      {/* Content Section */}
      <div className="stats-card__content" data-node-id="611:26190">
        {/* Value (Heading) */}
        <TextHeading text={value} data-node-id="611:26191" />

        {/* Label (Body Text) */}
        <Text text={label} data-node-id="611:26192" />
      </div>
    </article>
  );
}

export default StatsCard;
