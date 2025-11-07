import { type ReactNode, type HTMLAttributes, Children } from "react";
import { cn } from "../../../utils/cn";
import "./avatar-group.css";

export type AvatarGroupSpacing = "spaced" | "overlap";

export interface AvatarGroupProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Avatar components to group together
   */
  children: ReactNode;

  /**
   * Spacing between avatars
   * @default "spaced"
   */
  spacing?: AvatarGroupSpacing;

  /**
   * Whether to show overflow count indicator
   * @default false
   */
  showOverflow?: boolean;

  /**
   * Maximum number of avatars to display before showing overflow count
   * Only applies when showOverflow is true
   * @default 3
   */
  maxVisible?: number;

  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * AvatarGroup component for displaying multiple avatars together
 * Supports different spacing configurations for various layouts
 *
 * @example
 * // Basic avatar group with default spacing
 * <AvatarGroup>
 *   <Avatar type="image" src="/user1.jpg" alt="User 1" />
 *   <Avatar type="image" src="/user2.jpg" alt="User 2" />
 *   <Avatar type="initial" name="John Doe" />
 * </AvatarGroup>
 *
 * @example
 * // Avatar group with overlap spacing
 * <AvatarGroup spacing="overlap">
 *   <Avatar type="image" src="/user1.jpg" alt="User 1" size="sm" />
 *   <Avatar type="image" src="/user2.jpg" alt="User 2" size="sm" />
 *   <Avatar type="initial" name="Jane" size="sm" />
 * </AvatarGroup>
 *
 * @example
 * // Avatar group with overflow count
 * <AvatarGroup showOverflow maxVisible={3}>
 *   <Avatar type="image" src="/user1.jpg" alt="User 1" />
 *   <Avatar type="image" src="/user2.jpg" alt="User 2" />
 *   <Avatar type="image" src="/user3.jpg" alt="User 3" />
 *   <Avatar type="image" src="/user4.jpg" alt="User 4" />
 *   <Avatar type="image" src="/user5.jpg" alt="User 5" />
 * </AvatarGroup>
 */
export function AvatarGroup({
  children,
  spacing = "spaced",
  showOverflow = false,
  maxVisible = 3,
  className,
  ...rest
}: AvatarGroupProps) {
  // Convert children to array for manipulation
  const childrenArray = Children.toArray(children);
  const totalCount = childrenArray.length;

  // Determine visible children and overflow count
  const visibleChildren =
    showOverflow && totalCount > maxVisible
      ? childrenArray.slice(0, maxVisible)
      : childrenArray;

  const overflowCount =
    showOverflow && totalCount > maxVisible ? totalCount - maxVisible : 0;

  return (
    <div
      className={cn(
        // Base styles
        "avatar-group-shared",

        // Spacing variant
        `avatar-group-spacing-${spacing}`,

        // Custom classes
        className
      )}
      role="group"
      {...rest}
    >
      {spacing === "overlap" ? (
        <>
          <div className="avatar-group-overlap-inner">{visibleChildren}</div>
          {overflowCount > 0 && (
            <span className="avatar-group-overflow-count">+{overflowCount}</span>
          )}
        </>
      ) : (
        <>
          {visibleChildren}
          {overflowCount > 0 && (
            <span className="avatar-group-overflow-count">+{overflowCount}</span>
          )}
        </>
      )}
    </div>
  );
}

export default AvatarGroup;
