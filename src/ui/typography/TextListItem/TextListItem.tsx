import { type LiHTMLAttributes } from "react";
import { cn } from "../../../utils/cn";
import "./text-list-item.css";

/**
 * Props for TextListItem component
 * A semantic list item element with consistent typography styling
 */
export interface TextListItemProps extends LiHTMLAttributes<HTMLLIElement> {
  /**
   * List item text content
   * @default "List item"
   */
  text?: string;

  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * TextListItem component that displays a semantic list item with bullet point
 * Uses design system typography tokens for consistent styling
 *
 * Important: This component renders a <li> element and should be used within
 * a <ul> or <ol> parent for proper semantic HTML structure.
 *
 * @example
 * // Basic usage with default text
 * <ul>
 *   <TextListItem />
 * </ul>
 *
 * @example
 * // Custom text content
 * <ul>
 *   <TextListItem text="Custom list item text" />
 * </ul>
 *
 * @example
 * // Multiple items in a list
 * <ul className="space-y-2">
 *   <TextListItem text="First item" />
 *   <TextListItem text="Second item" />
 *   <TextListItem text="Third item" />
 * </ul>
 */
export function TextListItem({
  text = "List item",
  className,
  ...rest
}: TextListItemProps) {
  return (
    <li
      className={cn("text-list-item", className)}
      data-node-id="2077:11663"
      {...rest}
    >
      <div className="text-list-item-content" data-node-id="2077:11662">
        <span className="text-list-item-text">{text}</span>
      </div>
    </li>
  );
}

export default TextListItem;
