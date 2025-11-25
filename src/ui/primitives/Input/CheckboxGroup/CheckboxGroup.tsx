import { type HTMLAttributes } from "react";
import { cn } from "../../../../utils/cn";
import "./checkbox-group.css";

/**
 * Props for the CheckboxGroup component.
 */
export interface CheckboxGroupProps
  extends HTMLAttributes<HTMLFieldSetElement> {
  /**
   * Legend text for the fieldset. Provides accessible group label.
   * When provided, renders a legend element inside the fieldset.
   */
  label?: string;

  /**
   * Child CheckboxField components to display in the group.
   */
  children: React.ReactNode;

  /**
   * Additional CSS classes for the root fieldset.
   */
  className?: string;

  /**
   * Layout direction for checkbox items.
   * @default "vertical"
   */
  direction?: "vertical" | "horizontal";
}

/**
 * CheckboxGroup component provides a container for grouping multiple CheckboxField components.
 *
 * Uses a semantic fieldset/legend structure for better accessibility. Arranges checkboxes
 * in a vertical or horizontal layout with consistent spacing.
 *
 * **Figma Source:** [Checkbox Group Component](https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=9762:1426)
 *
 * @example
 * <CheckboxGroup label="Preferences">
 *   <CheckboxField label="Email notifications" />
 *   <CheckboxField label="SMS alerts" />
 *   <CheckboxField label="Push notifications" />
 * </CheckboxGroup>
 *
 * @example
 * <CheckboxGroup direction="horizontal">
 *   <CheckboxField label="Option 1" />
 *   <CheckboxField label="Option 2" />
 * </CheckboxGroup>
 */
export function CheckboxGroup({
  label,
  children,
  className,
  direction = "vertical",
  ...rest
}: CheckboxGroupProps) {
  const hasLabel = label !== undefined;

  return (
    <fieldset
      data-name="CheckboxGroup"
      data-node-id="9762:1426"
      className={cn(
        "checkbox-group",
        direction === "horizontal" && "checkbox-group--horizontal",
        className
      )}
      {...rest}
    >
      {/* Legend for accessibility */}
      {hasLabel && <legend className="checkbox-group__legend">{label}</legend>}

      {/* Checkbox items */}
      <div className="checkbox-group__items">{children}</div>
    </fieldset>
  );
}

export default CheckboxGroup;
