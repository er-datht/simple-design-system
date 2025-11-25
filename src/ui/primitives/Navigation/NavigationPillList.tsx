import { useState, useCallback, useMemo } from "react";
import { cn } from "../../../utils/cn";
import "./navigation-pill.css";

/**
 * Direction variants for navigation pill layout
 */
export type NavigationPillDirection = "column" | "row";

/**
 * Navigation pill item structure
 */
export type NavigationPillItem = {
  /**
   * Unique identifier for the navigation pill item
   */
  id: string;

  /**
   * Label text displayed in the navigation pill item
   */
  label: string;

  /**
   * Whether the navigation pill item is disabled
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
};

export type NavigationPillListProps = {
  /**
   * Array of navigation pill items
   */
  items: NavigationPillItem[];

  /**
   * Layout direction of navigation pill items
   * @default "row"
   */
  direction?: NavigationPillDirection;

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
   * Callback when navigation pill item is clicked
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
   * Accessible label for the navigation landmark
   * @default "Navigation pills"
   */
  ariaLabel?: string;
};

/**
 * NavigationPillList component for creating horizontal pill-style navigation
 * Built with custom styling following the design system specifications from navigation-pill.md
 *
 * Features:
 * - Horizontal or vertical pill layout with consistent spacing
 * - Three states: default, hover, and active
 * - Disabled state support
 * - Controlled and uncontrolled modes
 * - Semantic HTML with proper ARIA attributes
 * - Keyboard navigation support
 * - Flexible rendering as links or buttons
 *
 * @example
 * ```tsx
 * // Controlled mode (horizontal)
 * <NavigationPillList
 *   items={[
 *     { id: '1', label: 'Overview' },
 *     { id: '2', label: 'Analytics' },
 *     { id: '3', label: 'Reports' },
 *   ]}
 *   direction="row"
 *   activeItemId={activeId}
 *   onItemClick={(id) => setActiveId(id)}
 * />
 *
 * // Vertical pill navigation
 * <NavigationPillList
 *   items={[
 *     { id: '1', label: 'Dashboard', href: '/dashboard' },
 *     { id: '2', label: 'Settings', href: '/settings' },
 *   ]}
 *   direction="column"
 *   defaultActiveItemId="1"
 * />
 * ```
 */
export function NavigationPillList({
  items,
  direction = "row",
  activeItemId,
  defaultActiveItemId,
  onItemClick,
  className,
  itemClassName,
  labelClassName,
  ariaLabel = "Navigation pills",
}: NavigationPillListProps) {
  const [internalActiveItemId, setInternalActiveItemId] = useState(
    defaultActiveItemId ?? items[0]?.id
  );

  const currentActiveItemId = activeItemId ?? internalActiveItemId;

  const handleItemClick = useCallback(
    (item: NavigationPillItem) => {
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
        "navigation-pill-list",
        "flex",
        direction === "column" ? "flex-col" : "flex-row",
        className
      ),
    [direction, className]
  );

  // Memoize label classes
  const labelClasses = useMemo(
    () => cn("navigation-pill-label", labelClassName),
    [labelClassName]
  );

  const getItemClasses = useCallback(
    (item: NavigationPillItem, isActive: boolean) => {
      return cn(
        // Base navigation pill item class
        "navigation-pill-item",
        // State classes
        {
          "navigation-pill-item-state-default": !isActive,
          "navigation-pill-item-state-active": isActive,
          "navigation-pill-item-disabled": item.disabled,
        },
        // User custom classes
        itemClassName
      );
    },
    [itemClassName]
  );

  const renderItem = useCallback(
    (item: NavigationPillItem) => {
      const isActive = currentActiveItemId === item.id;
      const itemClasses = getItemClasses(item, isActive);

      const content = <span className={labelClasses}>{item.label}</span>;

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
