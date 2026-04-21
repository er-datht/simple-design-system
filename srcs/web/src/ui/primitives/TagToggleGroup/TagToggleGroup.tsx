import { type HTMLAttributes, type ReactNode } from "react";
import { cn } from "../../../utils/cn";
import { TagToggle } from "../TagToggle";
import "./tag-toggle-group.css";

/**
 * Individual item in the TagToggleGroup
 */
export interface TagToggleItem {
  /**
   * Unique identifier for this tag item
   */
  id: string;

  /**
   * Text label to display
   */
  label: string;

  /**
   * Optional custom icon to display when selected
   * If not provided, uses default check icon
   * @default IconCheck
   */
  icon?: ReactNode;
}

/**
 * Props for TagToggleGroup component
 */
export interface TagToggleGroupProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onToggle"> {
  /**
   * Array of tag items to display
   */
  items: TagToggleItem[];

  /**
   * Array of selected item IDs
   * For controlled mode, manage this state externally
   * @example ["item1", "item3"]
   */
  selectedIds?: string[];

  /**
   * Callback fired when a tag is toggled
   * Receives the ID of the toggled item
   * @param itemId - The ID of the toggled item
   */
  onToggle?: (itemId: string) => void;

  /**
   * Allow multiple items to be selected simultaneously
   * When false, only one item can be selected at a time
   * @default false
   */
  allowMultiple?: boolean;

  /**
   * Show icons in selected tags
   * @default true
   */
  showIcons?: boolean;

  /**
   * Additional CSS classes for the container
   */
  className?: string;
}

/**
 * TagToggleGroup displays a horizontal collection of selectable tag elements.
 * Users can toggle between options for filtering, categorization, or multi-selection.
 *
 * Features:
 * - Single or multi-selection modes
 * - Controlled and uncontrolled modes
 * - Customizable icons per tag
 * - Responsive flex layout
 * - Keyboard navigation support
 * - ARIA-compliant for accessibility
 * - Uses design system tokens
 *
 * Layout:
 * - Horizontal flex row with 8px gap between items
 * - Tags wrap on smaller screens for responsive behavior
 * - Each tag maintains consistent spacing and styling
 *
 * Visual States:
 * - Selected: Dark background (#2c2c2c) with light text and icon
 * - Unselected: Light background (#f5f5f5) with gray text
 *
 * @example
 * // Controlled single-selection mode
 * const [selectedIds, setSelectedIds] = useState<string[]>(["react"]);
 *
 * <TagToggleGroup
 *   items={[
 *     { id: "react", label: "React" },
 *     { id: "vue", label: "Vue" },
 *     { id: "angular", label: "Angular" }
 *   ]}
 *   selectedIds={selectedIds}
 *   onToggle={(id) => setSelectedIds([id])}
 *   allowMultiple={false}
 * />
 *
 * @example
 * // Multi-selection mode with custom icons
 * <TagToggleGroup
 *   items={[
 *     { id: "new", label: "New", icon: <IconStar size="16" /> },
 *     { id: "sale", label: "Sale", icon: <IconTag size="16" /> },
 *     { id: "featured", label: "Featured" }
 *   ]}
 *   selectedIds={["new", "featured"]}
 *   onToggle={handleToggle}
 *   allowMultiple={true}
 * />
 *
 * @example
 * // Uncontrolled mode (internal state)
 * <TagToggleGroup
 *   items={categories}
 *   onToggle={(id) => console.log("Toggled:", id)}
 * />
 */
export function TagToggleGroup({
  items,
  selectedIds = [],
  onToggle,
  allowMultiple,
  showIcons = true,
  className,
  ...rest
}: TagToggleGroupProps) {
  const handleTagClick = (itemId: string) => {
    onToggle?.(itemId);
  };

  return (
    <div
      className={cn("tag-toggle-group", className)}
      data-figma-node-id="157:10352"
      role="group"
      aria-label="Toggle options"
      {...rest}
    >
      {items.map((item) => {
        const isSelected = selectedIds.includes(item.id);

        return (
          <button
            key={item.id}
            onClick={() => handleTagClick(item.id)}
            aria-pressed={isSelected}
            className="tag-toggle-group-item"
            type="button"
          >
            <TagToggle
              state={isSelected}
              label={item.label}
              showIcon={showIcons}
              icon={item?.icon}
            />
          </button>
        );
      })}
    </div>
  );
}
