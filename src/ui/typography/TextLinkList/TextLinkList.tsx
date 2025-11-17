import type { HTMLAttributes, ReactNode } from "react";
import { useId } from "react";
import { cn } from "../../../utils/cn";
import "./text-link-list.css";

/**
 * Props for the TextLinkList component.
 */
export interface TextLinkListProps extends HTMLAttributes<HTMLDivElement> {
  /** Determines whether the title section is displayed above the list items */
  hasTitle?: boolean;
  /** Controls spacing between list items; "Default" uses 12px gap, "Tight" uses 8px gap */
  density?: "Default" | "Tight";
  /** The text content for the optional title/section heading */
  titleText?: string;
  /** List items to be rendered within the component (typically TextLinkListItem components) */
  children?: ReactNode;
}

/**
 * TextLinkList component is a flexible, density-aware container for displaying
 * a vertical list of text links with optional section titles.
 *
 * It supports two density modes (Default and Tight) to adapt spacing based on
 * content requirements, making it ideal for navigation menus, related links sections,
 * and list-based content.
 *
 * **Figma Source:** [Text Link List Component](https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=322-9321)
 */
export function TextLinkList({
  hasTitle = false,
  density = "Default",
  titleText = "Text Strong",
  children,
  className,
  ...rest
}: TextLinkListProps) {
  const nodeId = density === "Default" ? "2153:7990" : "322:9322";
  const titleId = useId();

  return (
    <div
      data-name="TextLinkList"
      data-node-id={nodeId}
      className={cn(
        "text-link-list",
        `text-link-list--${density.toLowerCase()}`,
        className
      )}
      {...rest}
    >
      {hasTitle && (
        <div className="text-link-list__title-section">
          <div className="text-link-list__title">
            <p id={titleId} className="text-link-list__title-text">
              {titleText}
            </p>
          </div>
        </div>
      )}
      <ul
        className="text-link-list__items"
        aria-labelledby={hasTitle ? titleId : undefined}
      >
        {children}
      </ul>
    </div>
  );
}
