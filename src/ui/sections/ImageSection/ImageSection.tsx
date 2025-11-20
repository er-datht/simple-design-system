import { cn } from "../../../utils/cn";
import "./image-section.css";

export interface ImageSectionProps {
  backgroundImage?: string;
  height?: string;
  className?: string;
  alt?: string;
}

export const ImageSection = ({
  backgroundImage,
  height = "400px",
  className,
  alt = "Section image",
}: ImageSectionProps) => {
  return (
    <section
      className={cn("image-section", className)}
      style={{ height }}
      data-name="ImageSection"
    >
      <div className="image-section__background" />
      {backgroundImage && (
        <img
          src={backgroundImage}
          alt={alt}
          className="image-section__image"
          loading="lazy"
          decoding="async"
        />
      )}
    </section>
  );
};
