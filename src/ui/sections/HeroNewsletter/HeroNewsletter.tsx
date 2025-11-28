import { type ReactNode } from "react";
import { TextContentTitle } from "../../typography/TextContentTitle/TextContentTitle";
import "./hero-newsletter.css";

export type HeroNewsletterProps = {
  title: string;
  subtitle?: string;
  className?: string;
  children?: ReactNode;
};

/**
 * HeroNewsletter component for displaying hero sections with title, subtitle, and newsletter form
 * Features responsive typography and centered layout with gray background
 * Uses exact Figma design tokens for spacing and colors
 *
 * @see https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=348-15919
 */
export const HeroNewsletter = ({
  title,
  subtitle,
  className,
  children,
}: HeroNewsletterProps) => {
  return (
    <section className={`hero-newsletter ${className || ""}`.trim()}>
      <TextContentTitle
        align="center"
        title={title}
        subtitle={subtitle}
        hasSubtitle={!!subtitle}
        variant="hero"
      />

      {children && (
        <div className="hero-newsletter__form-wrapper">{children}</div>
      )}
    </section>
  );
};
