import { type ReactNode, useState, useCallback, useMemo } from "react";
import { cn } from "../../../utils/cn";
import "./navigation.css";

/**
 * Direction variants for navigation layout
 */
export type NavigationDirection = "column" | "row";

/**
 * Size variants for navigation items
 */
export type NavigationSize = "sm" | "md";

/**
 * Navigation item structure
 */
export type NavigationItem = {
  /**
   * Unique identifier for the navigation item
   */
  id: string;

  /**
   * Label text displayed in the navigation item
   */
  label: string;

  /**
   * Optional icon to display (ReactNode for flexibility)
   */
  icon?: ReactNode;

  /**
   * Whether the navigation item is disabled
   */
  disabled?: boolean;

  /**
   * Optional href for navigation link
   */
  href?: string;

  /**
   * Optional click handler for custom navigation behavior
   */
  onClick?: () => void;

  /**
   * Layout direction for icon and label within this item
   * @default "row"
   */
  itemDirection?: NavigationDirection;
};

export type NavigationListProps = {
  /**
   * Array of navigation items
   */
  items: NavigationItem[];

  /**
   * Layout direction of navigation items
   * @default "row"
   */
  direction?: NavigationDirection;

  /**
   * Size variant for navigation items
   * @default "md"
   */
  size?: NavigationSize;

  /**
   * Currently active item ID (controlled mode)
   */
  activeItemId?: string;

  /**
   * Default active item ID (uncontrolled mode)
   * @default First item's ID
   */
  defaultActiveItemId?: string;

  /**
   * Callback when navigation item is clicked
   */
  onItemClick?: (itemId: string) => void;

  /**
   * Additional CSS classes for container
   */
  className?: string;

  /**
   * Additional CSS classes for individual items
   */
  itemClassName?: string;

  /**
   * Additional CSS classes for item labels
   */
  labelClassName?: string;

  /**
   * Additional CSS classes for item icons
   */
  iconClassName?: string;

  /**
   * Accessible label for the navigation landmark
   * @default "Navigation"
   */
  ariaLabel?: string;
};

/**
 * NavigationList component for creating vertical or horizontal navigation menus
 * Built with custom styling following the design system specifications
 *
 * Features:
 * - Two layout directions: row (horizontal) and column (vertical)
 * - Per-item direction control for icon/label layout (itemDirection prop)
 * - Two sizes: sm and md
 * - Icon support with proper accessibility
 * - Controlled and uncontrolled modes for active state
 * - Disabled state support
 * - Semantic HTML with proper ARIA attributes
 * - Keyboard navigation support
 * - Flexible rendering as links or buttons
 *
 * @example
 * ```tsx
 * // Controlled mode with icons (default row item direction)
 * <NavigationList
 *   items={[
 *     { id: '1', label: 'Home', icon: <IconHome size="24" /> },
 *     { id: '2', label: 'Profile', icon: <IconUser size="24" /> },
 *   ]}
 *   direction="column"
 *   size="md"
 *   activeItemId={activeId}
 *   onItemClick={(id) => setActiveId(id)}
 * />
 *
 * // Mixed item directions - icons above labels
 * <NavigationList
 *   items={[
 *     { id: '1', label: 'Dashboard', icon: <IconDashboard />, itemDirection: 'column' },
 *     { id: '2', label: 'Settings', icon: <IconSettings />, itemDirection: 'column' },
 *   ]}
 *   direction="row"
 *   size="md"
 * />
 *
 * // Uncontrolled mode with links
 * <NavigationList
 *   items={[
 *     { id: '1', label: 'Dashboard', href: '/dashboard' },
 *     { id: '2', label: 'Settings', href: '/settings' },
 *   ]}
 *   defaultActiveItemId="1"
 * />
 * ```
 */
export function NavigationList({
  items,
  direction = "row",
  size = "md",
  activeItemId,
  defaultActiveItemId,
  onItemClick,
  className,
  itemClassName,
  labelClassName,
  iconClassName,
  ariaLabel = "Navigation",
}: NavigationListProps) {
  const [internalActiveItemId, setInternalActiveItemId] = useState(
    defaultActiveItemId ?? items[0]?.id
  );

  const currentActiveItemId = activeItemId ?? internalActiveItemId;

  const handleItemClick = useCallback(
    (item: NavigationItem) => {
      if (item.disabled) return;

      setInternalActiveItemId(item.id);
      onItemClick?.(item.id);
      item.onClick?.();
    },
    [onItemClick]
  );

  // Memoize container classes
  const containerClasses = useMemo(
    () =>
      cn(
        "navigation-list",
        "flex",
        direction === "column" ? "flex-col" : "flex-row",
        className
      ),
    [direction, className]
  );

  // Memoize icon and label classes
  const iconWrapperClasses = useMemo(
    () => cn("navigation-icon", iconClassName),
    [iconClassName]
  );

  const labelClasses = useMemo(
    () => cn("navigation-label", labelClassName),
    [labelClassName]
  );

  const getItemClasses = useCallback(
    (item: NavigationItem, isActive: boolean) => {
      return cn(
        // Base navigation item class
        "navigation-item",
        // Content direction variant (icon + label layout within item)
        `navigation-item-content-direction-${item.itemDirection ?? "row"}`,
        // Size variant
        `navigation-item-size-${size}`,
        // State classes
        {
          "navigation-item-state-default": !isActive,
          "navigation-item-state-active": isActive,
          "navigation-item-disabled": item.disabled,
        },
        // User custom classes
        itemClassName
      );
    },
    [size, itemClassName]
  );

  const renderItem = useCallback(
    (item: NavigationItem) => {
      const isActive = currentActiveItemId === item.id;
      const itemClasses = getItemClasses(item, isActive);

      const content = (
        <>
          {item.icon && (
            <span className={iconWrapperClasses} aria-hidden="true">
              {item.icon}
            </span>
          )}
          <span className={labelClasses}>{item.label}</span>
        </>
      );

      // Common props
      const commonProps = {
        className: itemClasses,
        "aria-current": isActive ? ("page" as const) : undefined,
        "aria-disabled": item.disabled || undefined,
      };

      // If item has href, render as anchor tag
      if (item.href && !item.disabled) {
        return (
          <a
            key={item.id}
            href={item.href}
            {...commonProps}
            onClick={(e) => {
              // Allow custom onClick to potentially prevent default
              if (item.onClick || onItemClick) {
                e.preventDefault();
                handleItemClick(item);
              }
            }}
          >
            {content}
          </a>
        );
      }

      // Otherwise render as button
      return (
        <button
          key={item.id}
          type="button"
          {...commonProps}
          onClick={() => handleItemClick(item)}
          disabled={item.disabled}
        >
          {content}
        </button>
      );
    },
    [
      currentActiveItemId,
      getItemClasses,
      iconWrapperClasses,
      labelClasses,
      onItemClick,
      handleItemClick,
    ]
  );

  if (items.length === 0) {
    return null;
  }

  return (
    <nav className={containerClasses} aria-label={ariaLabel}>
      {items.map(renderItem)}
    </nav>
  );
}
