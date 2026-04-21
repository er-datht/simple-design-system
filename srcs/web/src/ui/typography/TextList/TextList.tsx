import { type HTMLAttributes, type ReactNode } from "react";
import { cn } from "../../../utils/cn";
import "./text-list.css";

/**
 * Density variants for TextList component
 */
export type TextListDensity = "Default" | "Tight";

/**
 * Props for TextList component
 * Flexible list container with optional title and configurable spacing
 */
export interface TextListProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Controls visibility of the title section above the list
   * @default false
   */
  hasTitle?: boolean;

  /**
   * Controls vertical gap between list items
   * - "Default": 12px gap (comfortable reading)
   * - "Tight": 8px gap (compact display)
   * @default "Default"
   */
  density?: TextListDensity;

  /**
   * Title text to display when hasTitle is true
   * @default "Text Strong"
   */
  titleText?: string;

  /**
   * Child elements - typically TextListItem components
   */
  children?: ReactNode;

  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * TextList component renders a flexible list container with optional title support.
 * Provides two density variants (Default and Tight) for controlling vertical spacing
 * between list items, making it suitable for various content layouts.
 *
 * The component uses semantic <ul> element and is designed to contain TextListItem
 * components for proper accessibility and list structure.
 *
 * @example
 * // Basic usage with Default density
 * <TextList>
 *   <TextListItem text="First item" />
 *   <TextListItem text="Second item" />
 *   <TextListItem text="Third item" />
 * </TextList>
 *
 * @example
 * // With title enabled
 * <TextList hasTitle={true} titleText="Features">
 *   <TextListItem text="Fast performance" />
 *   <TextListItem text="Easy to use" />
 *   <TextListItem text="Great support" />
 * </TextList>
 *
 * @example
 * // Tight density for compact display
 * <TextList density="Tight">
 *   <TextListItem text="Item 1" />
 *   <TextListItem text="Item 2" />
 *   <TextListItem text="Item 3" />
 * </TextList>
 */
export function TextList({
  hasTitle = false,
  density = "Default",
  titleText = "Text Strong",
  children,
  className,
  ...rest
}: TextListProps) {
  // Determine gap based on density
  const gapClass =
    density === "Tight"
      ? "gap-(--sds-size-space-200)"
      : "gap-(--sds-size-space-300)";

  // Set data-name for Figma sync
  const dataName = `Density=${density}`;
  const nodeId = density === "Tight" ? "480:6150" : "2010:10204";

  return (
    <div
      className={cn("text-list-container", className)}
      data-name={dataName}
      data-node-id={nodeId}
      {...rest}
    >
      {hasTitle && (
        <div className="text-list-title" data-node-id="2162:8058">
          <p className="text-list-title-text" data-node-id="2162:8059">
            {titleText}
          </p>
        </div>
      )}
      <ul className={cn("text-list-items", gapClass)}>{children}</ul>
    </div>
  );
}

export default TextList;
