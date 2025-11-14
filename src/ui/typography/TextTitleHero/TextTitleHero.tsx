import { type HTMLAttributes } from "react";
import { cn } from "../../../utils/cn";
import "./text-title-hero.css";

/**
 * Props for TextTitleHero component
 * Displays a large, prominent hero-level heading
 */
export interface TextTitleHeroProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The hero title text content to display
   * @default "Text Title Hero"
   */
  text?: string;

  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * TextTitleHero component renders large, impactful hero-level heading text.
 * Uses 72px bold typography optimized for maximum visual impact in hero sections.
 *
 * This component applies hero-level typography standards including large font size (72px),
 * bold weight (700), tight letter spacing (-2.16px), and compact line height (1.2)
 * to create commanding visual presence.
 *
 * @example
 * // Basic usage with default text
 * <TextTitleHero />
 *
 * @example
 * // Custom hero title text
 * <TextTitleHero text="Welcome to Our Platform" />
 *
 * @example
 * // In a hero section with additional spacing
 * <TextTitleHero
 *   text="Build Amazing Products"
 *   className="mb-6"
 * />
 */
export function TextTitleHero({
  text = "Text Title Hero",
  className,
  ...rest
}: TextTitleHeroProps) {
  return (
    <div
      className={cn("text-title-hero-container", className)}
      data-name="Text Title Hero"
      data-node-id="2087:8491"
      {...rest}
    >
      <p className="text-title-hero-text" data-node-id="2087:8463">
        {text}
      </p>
    </div>
  );
}

export default TextTitleHero;
