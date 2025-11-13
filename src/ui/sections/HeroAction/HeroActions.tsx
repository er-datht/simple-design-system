import { type ReactNode } from "react";
import TextContentTitle from "../../typography/TextContentTitle/TextContentTitle";
import { ButtonGroup } from "../../primitives/Button/ButtonGroup";
import "./hero-actions.css";

export type HeroActionsProps = {
  /**
   * The main title text
   */
  title: string;

  /**
   * Optional subtitle text
   */
  subtitle?: string;

  /**
   * Button components to display in the action area
   */
  buttons: ReactNode;

  /**
   * Additional CSS classes
   */
  className?: string;
};

/**
 * HeroActions component for displaying hero sections with title, subtitle, and action buttons
 * Features responsive typography that adapts between desktop and mobile viewports
 */
const HeroActions = ({
  title,
  subtitle,
  buttons,
  className,
}: HeroActionsProps) => {
  return (
    <section className={`hero-actions ${className || ""}`.trim()}>
      <TextContentTitle
        variant="hero"
        align="center"
        title={title}
        subtitle={subtitle}
        hasSubtitle={!!subtitle}
      />
      <ButtonGroup align="center">{buttons}</ButtonGroup>
    </section>
  );
};

export default HeroActions;
