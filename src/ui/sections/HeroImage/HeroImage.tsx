import React from "react";
import { cn } from "../../../utils/cn";
import { TextContentTitle } from "../../typography/TextContentTitle";
import "./hero-image.css";

export type HeroImageProps = {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  alt?: string;
  height?: string | number;
  overlay?: boolean;
  overlayOpacity?: number;
  className?: string;
  children?: React.ReactNode;
};

export const HeroImage = ({
  title,
  subtitle,
  backgroundImage,
  alt = "Hero background",
  height = "600px",
  overlay = true,
  overlayOpacity = 0.4,
  className,
  children,
}: HeroImageProps) => {
  const overlayStyle: React.CSSProperties = {
    background: `rgba(0,0,0,${overlayOpacity})`,
  };

  const containerStyle: React.CSSProperties =
    typeof height === "number" ? { height: `${height}px` } : { height };

  return (
    <section
      className={cn("hero-image", className)}
      style={containerStyle}
      aria-label={title}
    >
      <div className="hero-image__background" aria-hidden>
        <img
          src={backgroundImage}
          alt={alt}
          className="hero-image__image"
          loading="lazy"
          decoding="async"
        />
      </div>

      {overlay && <div className="hero-image__overlay" style={overlayStyle} />}

      <div className="hero-image__content">
        <TextContentTitle
          title={title}
          subtitle={subtitle}
          variant="hero"
          align="center"
        />

        {children && <div className="hero-image__actions">{children}</div>}
      </div>
    </section>
  );
};

export default HeroImage;
