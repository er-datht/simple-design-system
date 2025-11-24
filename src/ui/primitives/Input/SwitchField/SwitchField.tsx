import { type InputHTMLAttributes, useId, useState } from "react";
import { cn } from "../../../../utils/cn";
import "./switch-field.css";

export type SwitchValueType = "Checked" | "Unchecked";

export interface SwitchFieldProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "type" | "size" | "onChange"
  > {
  /**
   * Text content for the main label
   * When provided, label will be displayed
   */
  label?: string;

  /**
   * Text content for the description section
   * When provided, description will be displayed
   */
  description?: string;

  /**
   * Whether the field is disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * Error message text
   * When provided, error message will be displayed and field shows error state
   */
  errorMessage?: string;

  /**
   * Visual state of the switch control (controlled mode)
   * If not provided, component manages its own state (uncontrolled mode)
   * @default undefined (uncontrolled)
   */
  valueType?: SwitchValueType;

  /**
   * Default visual state for uncontrolled mode
   * @default "Unchecked"
   */
  defaultValueType?: SwitchValueType;

  /**
   * Additional CSS classes for the root container
   */
  className?: string;

  /**
   * Change handler for switch state changes
   */
  onChange?: (checked: boolean) => void;
}

/**
 * SwitchField component provides a toggle input for binary choices (on/off, true/false).
 * Includes optional label and description text with proper accessibility support.
 *
 * @example
 * // Uncontrolled mode
 * <SwitchField label="Enable notifications" description="Receive email updates" />
 *
 * @example
 * // Controlled mode
 * <SwitchField
 *   label="Dark mode"
 *   valueType={isDark ? "Checked" : "Unchecked"}
 *   onChange={(checked) => setIsDark(checked)}
 * />
 */
export function SwitchField({
  label,
  description,
  disabled = false,
  errorMessage,
  valueType,
  defaultValueType = "Unchecked",
  className,
  onChange,
  ...rest
}: SwitchFieldProps) {
  const id = useId();
  const hasLabel = label !== undefined;
  const hasDescription = description !== undefined;
  const hasError = errorMessage !== undefined;
  const errorId = hasError ? `${id}-error` : undefined;
  const descriptionId = hasDescription ? `${id}-description` : undefined;

  // Internal state for uncontrolled mode
  const [internalValue, setInternalValue] =
    useState<SwitchValueType>(defaultValueType);

  // Determine if component is controlled or uncontrolled
  const isControlled = valueType !== undefined;
  const currentValue = isControlled ? valueType : internalValue;
  const isChecked = currentValue === "Checked";

  // Handle switch changes
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = event.target.checked;
    const newValue: SwitchValueType = newChecked ? "Checked" : "Unchecked";

    // Update internal state if uncontrolled
    if (!isControlled) {
      setInternalValue(newValue);
    }

    // Call parent's onChange if provided
    if (onChange) {
      onChange(newChecked);
    }
  };

  return (
    <div className={cn("switch-field", className)}>
      {/* Switch and Label Row */}
      <div className="switch-field__switch-row">
        {/* Label */}
        {hasLabel && (
          <label
            htmlFor={id}
            className={cn(
              "switch-field__label",
              disabled && "switch-field__label--disabled"
            )}
          >
            {label}
          </label>
        )}

        {/* Hidden native checkbox for accessibility */}
        <input
          type="checkbox"
          id={id}
          className="switch-field__input"
          checked={isChecked}
          disabled={disabled}
          aria-invalid={hasError}
          aria-checked={isChecked}
          aria-describedby={hasError ? errorId : descriptionId}
          onChange={handleChange}
          {...rest}
        />

        {/* Custom Switch Visual */}
        <div
          className={cn(
            "switch-field__switch",
            isChecked
              ? "switch-field__switch--checked"
              : "switch-field__switch--unchecked",
            disabled && "switch-field__switch--disabled",
            hasError && "switch-field__switch--error"
          )}
          onClick={() => {
            if (!disabled) {
              document.getElementById(id)?.click();
            }
          }}
          aria-hidden="true"
        >
          {/* Switch Thumb */}
          <span
            className={cn(
              "switch-field__thumb",
              isChecked
                ? "switch-field__thumb--checked"
                : "switch-field__thumb--unchecked",
              disabled && "switch-field__thumb--disabled"
            )}
          />
        </div>
      </div>

      {/* Description - Optional */}
      {hasDescription && !hasError && (
        <span
          id={descriptionId}
          className={cn(
            "switch-field__description",
            disabled && "switch-field__description--disabled"
          )}
        >
          {description}
        </span>
      )}

      {/* Error Message - Optional */}
      {hasError && (
        <span id={errorId} className="switch-field__error">
          {errorMessage}
        </span>
      )}
    </div>
  );
}

export default SwitchField;
