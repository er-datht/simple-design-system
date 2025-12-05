import { type ReactNode, type HTMLAttributes } from "react";
import { cn } from "../../../utils/cn";
import "./avatar-block.css";

export interface AvatarBlockProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Avatar component to display
   */
  avatar: ReactNode;

  /**
   * Title text to display next to the avatar
   */
  title: string;

  /**
   * Optional description text to display below the title
   */
  description?: string;

  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * AvatarBlock component that displays an avatar with title and optional description
 * Combines an Avatar component with text content in a horizontal layout
 *
 * @example
 * // Basic usage with initial avatar
 * <AvatarBlock
 *   avatar={<Avatar type="initial" name="John Doe" size="md" />}
 *   title="John Doe"
 *   description="Software Engineer"
 * />
 *
 * @example
 * // With image avatar
 * <AvatarBlock
 *   avatar={<Avatar type="image" src="/user.jpg" alt="Jane Smith" size="sm" />}
 *   title="Jane Smith"
 * />
 *
 * @example
 * // With custom props and click handler
 * <AvatarBlock
 *   avatar={<Avatar type="initial" name="Bob Wilson" size="lg" shape="square" />}
 *   title="Bob Wilson"
 *   description="Product Manager"
 *   className="custom-class"
 *   onClick={() => handleClick()}
 * />
 */
export function AvatarBlock({
  avatar,
  title,
  description,
  className,
  ...rest
}: AvatarBlockProps) {
  return (
    <div
      className={cn(
        // Base styles
        "avatar-block-container",

        // Custom classes
        className
      )}
      {...rest}
    >
      {avatar}
      <div className="avatar-block-content">
        <div className="avatar-block-title">{title}</div>
        {description && (
          <div className="avatar-block-description">{description}</div>
        )}
      </div>
    </div>
  );
}

export default AvatarBlock;
