import { useState } from "react";
import type { HTMLAttributes } from "react";
import { cn } from "../../../utils/cn";
import "./avatar.css";

export type AvatarSize = "sm" | "md" | "lg";
export type AvatarShape = "circle" | "square";
export type AvatarType = "image" | "initial";

/**
 * Props for Avatar component
 * Supports both image and initial display types
 */
export type AvatarProps = {
  /**
   * Type of avatar to display
   */
  type: AvatarType;

  /**
   * Image source URL (required when type is "image")
   */
  src?: string;

  /**
   * Image alt text (used when type is "image", also used as fallback initial if image fails to load)
   */
  alt?: string;

  /**
   * Name to extract initial from (required when type is "initial", displays first character)
   */
  name?: string;

  /**
   * Size of the avatar
   * @default "md"
   */
  size?: AvatarSize;

  /**
   * Shape of the avatar
   * @default "circle"
   */
  shape?: AvatarShape;

  /**
   * Additional CSS classes
   */
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

const sizeClasses: Record<AvatarSize, string> = {
  sm: "avatar-size-sm",
  md: "avatar-size-md",
  lg: "avatar-size-lg",
};

const shapeClasses: Record<AvatarShape, string> = {
  circle: "avatar-shape-circle",
  square: "avatar-shape-square",
};

/**
 * Avatar component that displays either an image or initials
 * Supports multiple sizes and shapes with automatic fallback to initials on image error
 *
 * @example
 * // Image avatar
 * <Avatar type="image" src="/user.jpg" alt="John Doe" size="md" shape="circle" />
 *
 * @example
 * // Initial avatar
 * <Avatar type="initial" name="Jane Smith" size="lg" shape="square" />
 *
 * @example
 * // With click handler
 * <Avatar type="initial" name="Alex" onClick={() => handleClick()} />
 */
export function Avatar(props: AvatarProps) {
  const { size = "md", shape = "circle", className, ...rest } = props;
  const [imageError, setImageError] = useState(false);

  const containerClasses = cn(
    // Base styles
    "avatar",

    // Size styles
    sizeClasses[size],

    // Shape styles
    shapeClasses[shape],

    // Custom classes
    className
  );

  // Get initial character from name or alt text
  const getInitial = (text: string): string => {
    const trimmed = text.trim();
    return trimmed.length > 0 ? trimmed[0].toUpperCase() : "?";
  };

  // Render initial avatar
  const renderInitial = (name: string) => {
    const initial = getInitial(name);

    return (
      <div
        {...(rest as HTMLAttributes<HTMLDivElement>)}
        className={containerClasses}
        role="img"
        aria-label={name}
      >
        <span className={cn("avatar-initial", `avatar-initial-${size}`)}>
          {initial}
        </span>
      </div>
    );
  };

  // If type is initial or image has error, render initial avatar
  if (props.type === "initial") {
    const name = props.name || props.alt || "?";
    return renderInitial(name);
  }

  if (props.type === "image" && imageError) {
    const fallbackName = props.alt || props.name || "?";
    return renderInitial(fallbackName);
  }

  // Render image avatar
  const { src = "", alt = "" } = props;

  return (
    <div
      {...(rest as HTMLAttributes<HTMLDivElement>)}
      className={containerClasses}
      role="img"
      aria-label={alt}
    >
      <img
        src={src}
        alt={alt}
        className="avatar-image"
        onError={() => setImageError(true)}
      />
    </div>
  );
}

export default Avatar;
