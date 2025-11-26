import { type ReactNode } from "react";
import { TextContentTitle } from "../../typography/TextContentTitle/TextContentTitle";
import "./hero-form.css";

export type HeroFormProps = {
  title: string;
  subtitle?: string;
  className?: string;
  children?: ReactNode;
};

/**
 * HeroForm component for displaying hero sections with title, subtitle, and contact form
 * Features responsive typography and centered layout with gray background
 * Uses exact Figma design tokens for spacing and colors
 */
export const HeroForm = ({
  title,
  subtitle,
  className,
  children,
}: HeroFormProps) => {
  return (
    <section className={`hero-form ${className || ""}`.trim()}>
      <TextContentTitle
        align="center"
        title={title}
        subtitle={subtitle}
        hasSubtitle={!!subtitle}
        variant="hero"
      />

      {children && <div className="hero-form__form-wrapper">{children}</div>}
    </section>
  );
};
