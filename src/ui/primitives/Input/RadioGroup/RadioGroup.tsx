import React, { type HTMLAttributes, useState } from "react";
import { cn } from "../../../../utils/cn";
import "./radio-group.css";
import type { RadioFieldProps } from "../RadioField/RadioField";

/**
 * Props for the RadioGroup component.
 */
export interface RadioGroupProps
  extends Omit<HTMLAttributes<HTMLFieldSetElement>, "onChange"> {
  /**
   * Name attribute for all radio inputs in the group.
   * All RadioField children should share this name for mutual exclusivity.
   */
  name: string;

  /**
   * Currently selected value in the group.
   * Use with onChange for controlled mode.
   */
  value?: string;

  /**
   * Default selected value for uncontrolled mode.
   * Use when you don't need to control the state externally.
   */
  defaultValue?: string;

  /**
   * Callback when selection changes.
   * Receives the value of the newly selected radio.
   */
  onChange?: (value: string) => void;

  /**
   * Legend text for the fieldset. Provides accessible group label.
   * When provided, renders a legend element inside the fieldset.
   */
  label?: string;

  /**
   * Child RadioField components to display in the group.
   */
  children: React.ReactNode;

  /**
   * Additional CSS classes for the root fieldset.
   */
  className?: string;

  /**
   * Layout direction for radio items.
   * @default "vertical"
   */
  direction?: "vertical" | "horizontal";
}

/**
 * RadioGroup component provides a container for grouping multiple RadioField components.
 *
 * Uses a semantic fieldset with role="radiogroup" for better accessibility. Arranges radio buttons
 * in a vertical or horizontal layout with consistent spacing. Supports both controlled and
 * uncontrolled modes for managing selection state.
 *
 * **Figma Source:** [Radio Group Component](https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=624:23642)
 *
 * @example
 * // Uncontrolled mode - group manages selection internally
 * <RadioGroup name="options" label="Select an option">
 *   <RadioField label="Option 1" value="option1" />
 *   <RadioField label="Option 2" value="option2" />
 *   <RadioField label="Option 3" value="option3" />
 * </RadioGroup>
 *
 * @example
 * // Uncontrolled mode with default value
 * <RadioGroup name="options" defaultValue="option2" label="Select an option">
 *   <RadioField label="Option 1" value="option1" />
 *   <RadioField label="Option 2" value="option2" />
 *   <RadioField label="Option 3" value="option3" />
 * </RadioGroup>
 *
 * @example
 * // Controlled mode - parent manages state
 * const [selected, setSelected] = useState("");
 *
 * <RadioGroup name="options" value={selected} onChange={setSelected} label="Select an option">
 *   <RadioField label="Option 1" value="option1" />
 *   <RadioField label="Option 2" value="option2" />
 * </RadioGroup>
 *
 * @example
 * // Horizontal layout
 * <RadioGroup name="quick" direction="horizontal" label="Quick Options">
 *   <RadioField label="A" value="a" />
 *   <RadioField label="B" value="b" />
 * </RadioGroup>
 */
export function RadioGroup({
  name,
  value,
  defaultValue,
  onChange,
  label,
  children,
  className,
  direction = "vertical",
  ...rest
}: RadioGroupProps) {
  const hasLabel = label !== undefined;

  // Internal state for uncontrolled mode
  const [internalValue, setInternalValue] = useState<string | undefined>(defaultValue);

  // Determine if group is in controlled mode
  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : internalValue;

  // Clone children and inject name, checked state, and onChange handler
  const enhancedChildren = React.Children.map(children, (child) => {
    if (!React.isValidElement<RadioFieldProps>(child)) {
      return child;
    }

    const childValue = child.props.value as string | undefined;
    const isChecked = childValue === currentValue;

    // Create enhanced onChange that calls both child's onChange and group's onChange
    const enhancedOnChange = (checked: boolean) => {
      // Call the child's original onChange if it exists
      if (child.props.onChange) {
        child.props.onChange(checked);
      }

      // Update state when checked
      if (checked && childValue !== undefined) {
        // Update internal state if uncontrolled
        if (!isControlled) {
          setInternalValue(childValue);
        }

        // Call the group's onChange
        if (onChange) {
          onChange(childValue);
        }
      }
    };

    // Clone the child with enhanced props
    return React.cloneElement(child, {
      name,
      valueType: isChecked ? "Checked" : "Unchecked",
      onChange: enhancedOnChange,
    });
  });

  return (
    <fieldset
      role="radiogroup"
      data-name="RadioGroup"
      data-node-id="624:23642"
      className={cn(
        "radio-group",
        direction === "horizontal" && "radio-group--horizontal",
        className
      )}
      {...rest}
    >
      {/* Legend for accessibility */}
      {hasLabel && <legend className="radio-group__legend">{label}</legend>}

      {/* Radio items */}
      <div className="radio-group__items">{enhancedChildren}</div>
    </fieldset>
  );
}

export default RadioGroup;
