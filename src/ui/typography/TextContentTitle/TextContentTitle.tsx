import "./text-content-title.css";

export type TextContentTitleVariant = "default" | "hero";

export type TextContentTitleProps = {
  variant?: TextContentTitleVariant;
  align?: "start" | "center";
  hasSubtitle?: boolean;
  title: string;
  subtitle?: string;
};

const TextContentTitle = ({
  variant = "default",
  align = "center",
  hasSubtitle = true,
  title,
  subtitle,
}: TextContentTitleProps) => {
  const shouldShowSubtitle = hasSubtitle && subtitle;

  const className = [
    "text-content-title",
    `text-content-title--${align}`,
    variant === "hero" && "text-content-title--hero",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={className}>
      <h2 className="text-content-title__title">{title}</h2>
      {shouldShowSubtitle && (
        <p className="text-content-title__subtitle">{subtitle}</p>
      )}
    </div>
  );
};

export default TextContentTitle;
