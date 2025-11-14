import { type InputHTMLAttributes, useId, useState } from "react";
import { cn } from "../../../../utils/cn";
import "./checkbox-field.css";

export type CheckboxState = "Default" | "Disabled";
export type CheckboxValueType = "Unchecked" | "Checked" | "Indeterminate";

export interface CheckboxFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
  /**
   * Controls visibility of the description row
   * @default true
   */
  hasDescription?: boolean;

  /**
   * Text content for the description section
   * @default "Description"
   */
  description?: string;

  /**
   * Text content for the main label
   * @default "Label"
   */
  label?: string;

  /**
   * Controls enabled/disabled appearance and interactivity
   * @default "Default"
   */
  state?: CheckboxState;

  /**
   * Visual state of the checkbox control (controlled mode)
   * If not provided, component manages its own state (uncontrolled mode)
   * @default undefined (uncontrolled)
   */
  valueType?: CheckboxValueType;

  /**
   * Default visual state for uncontrolled mode
   * @default "Unchecked"
   */
  defaultValueType?: CheckboxValueType;

  /**
   * Additional CSS classes for the root container
   */
  className?: string;

  /**
   * Change handler for checkbox state changes
   * In uncontrolled mode, this is called when user interacts
   * In controlled mode, parent must update valueType prop
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * CheckboxField component combines a checkbox input with an optional label and description text.
 * Provides visual feedback for multiple states (checked, unchecked, indeterminate) and supports
 * both enabled and disabled modes.
 *
 * Can be used in controlled or uncontrolled mode:
 * - Uncontrolled (default): Component manages its own state internally
 * - Controlled: Parent manages state via valueType prop
 *
 * @example
 * // Uncontrolled mode (component manages state)
 * <CheckboxField label="Accept terms" description="I agree to the terms and conditions" />
 *
 * @example
 * // Controlled mode
 * <CheckboxField
 *   label="Select all"
 *   valueType={value}
 *   onChange={(e) => setValue(e.target.checked ? "Checked" : "Unchecked")}
 *   hasDescription={false}
 * />
 */
export function CheckboxField({
  hasDescription = true,
  description = "Description",
  label = "Label",
  state = "Default",
  valueType,
  defaultValueType = "Unchecked",
  className,
  onChange,
  ...rest
}: CheckboxFieldProps) {
  const id = useId();
  const descriptionId = hasDescription ? `${id}-description` : undefined;
  const isDisabled = state === "Disabled";

  // Internal state for uncontrolled mode
  const [internalValue, setInternalValue] =
    useState<CheckboxValueType>(defaultValueType);

  // Determine if component is controlled or uncontrolled
  const isControlled = valueType !== undefined;
  const currentValue = isControlled ? valueType : internalValue;

  // Handle checkbox changes
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue: CheckboxValueType = event.target.checked
      ? "Checked"
      : "Unchecked";

    // Update internal state if uncontrolled
    if (!isControlled) {
      setInternalValue(newValue);
    }

    // Call parent's onChange if provided
    if (onChange) {
      onChange(event);
    }
  };

  // Determine the node ID based on state and currentValue combination
  const getNodeId = () => {
    if (state === "Default") {
      if (currentValue === "Checked") return "9762:1442";
      if (currentValue === "Unchecked") return "565:15610";
      if (currentValue === "Indeterminate") return "565:15635";
    } else if (state === "Disabled") {
      if (currentValue === "Checked") return "565:15661";
      if (currentValue === "Unchecked") return "9762:1448";
      if (currentValue === "Indeterminate") return "587:16995";
    }
    return "9762:1442"; // fallback
  };

  return (
    <div
      className={cn("checkbox-field-root", className)}
      data-name={`State=${state}, ValueType=${currentValue}`}
      data-node-id={getNodeId()}
    >
      {/* Checkbox and Label Row */}
      <div className="checkbox-field-row">
        {/* Hidden native checkbox for accessibility */}
        <input
          type="checkbox"
          id={id}
          className="checkbox-field-input"
          checked={currentValue === "Checked"}
          disabled={isDisabled}
          aria-checked={
            currentValue === "Indeterminate"
              ? "mixed"
              : currentValue === "Checked"
          }
          aria-describedby={descriptionId}
          onChange={handleChange}
          {...rest}
        />

        {/* Custom Checkbox Visual */}
        <div
          className={cn("checkbox-field-control", {
            "checkbox-field-control-checked": currentValue === "Checked",
            "checkbox-field-control-unchecked": currentValue === "Unchecked",
            "checkbox-field-control-indeterminate":
              currentValue === "Indeterminate",
            "checkbox-field-control-disabled": isDisabled,
          })}
          onClick={() => {
            if (!isDisabled) {
              document.getElementById(id)?.click();
            }
          }}
        >
          {/* Check Icon - shown when Checked */}
          {currentValue === "Checked" && (
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={cn("checkbox-field-icon", {
                "checkbox-field-icon-disabled": isDisabled,
              })}
            >
              <path
                d="M13.3346 4L6.0013 11.3333L2.66797 8"
                stroke="var(--stroke-0)"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}

          {/* Minus Icon - shown when Indeterminate */}
          {currentValue === "Indeterminate" && (
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={cn("checkbox-field-icon", {
                "checkbox-field-icon-disabled": isDisabled,
              })}
            >
              <path
                d="M3.33203 8H12.6654"
                stroke="var(--stroke-0)"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>

        {/* Label */}
        <label htmlFor={id} className="checkbox-field-label">
          {label}
        </label>
      </div>

      {/* Description Row - Optional */}
      {hasDescription && (
        <div
          className={cn("checkbox-field-description-row", {
            "checkbox-field-description-row-disabled": isDisabled,
          })}
        >
          {/* Space Divider - matches checkbox width for alignment */}
          <div className="checkbox-field-spacer" />

          {/* Description Text */}
          <div id={descriptionId} className="checkbox-field-description">
            {description}
          </div>
        </div>
      )}
    </div>
  );
}

export default CheckboxField;
