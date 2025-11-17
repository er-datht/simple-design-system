import type { LiHTMLAttributes } from "react";
import { cn } from "../../../utils/cn";
import "./text-link-list-item.css";

/**
 * Props for the TextLinkListItem component.
 */
export interface TextLinkListItemProps extends LiHTMLAttributes<HTMLLIElement> {
  /** The text content displayed in the list item */
  text?: string;
}

/**
 * TextLinkListItem component is a minimal, reusable text element designed for
 * displaying individual list items with a single line of text.
 *
 * It serves as a building block for creating list structures in the design system,
 * providing consistent typography and styling for linked or navigational text elements.
 *
 * **Figma Source:** [Text Link List Item Component](https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=2153-7973)
 */
export function TextLinkListItem({
  text = "List item",
  className,
  ...rest
}: TextLinkListItemProps) {
  return (
    <li
      data-name="TextLinkListItem"
      data-node-id="2153:7973"
      className={cn("text-link-list-item", className)}
      {...rest}
    >
      <span className="text-link-list-item__text">{text}</span>
    </li>
  );
}
