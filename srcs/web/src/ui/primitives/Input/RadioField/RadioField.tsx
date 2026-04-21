import { type InputHTMLAttributes, useId, useState } from "react";
import { cn } from "../../../../utils/cn";
import "./radio-field.css";

export interface RadioFieldProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "type" | "size" | "onChange"
  > {
  /**
   * Text content for the description section
   * When provided, description row will be displayed
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
   * Text content for the main label
   * @default "Label"
   */
  label?: string;

  /**
   * Whether the radio is checked (controlled mode)
   * If not provided, component manages its own state (uncontrolled mode)
   * @default undefined (uncontrolled)
   */
  isChecked?: boolean;

  /**
   * Default checked state for uncontrolled mode
   * @default false
   */
  defaultIsChecked?: boolean;

  /**
   * Additional CSS classes for the root container
   */
  className?: string;

  /**
   * Change handler for radio state changes
   */
  onChange?: (checked: boolean) => void;
}

/**
 * RadioField component combines a radio input with an optional label and description text.
 * Provides visual feedback for checked/unchecked states and supports both enabled and disabled modes.
 *
 * Can be used in controlled or uncontrolled mode:
 * - Uncontrolled (default): Component manages its own state internally
 * - Controlled: Parent manages state via isChecked prop
 *
 * @example
 * // Uncontrolled mode
 * <RadioField label="Option 1" description="Select this option" name="options" />
 *
 * @example
 * // Controlled mode
 * <RadioField
 *   label="Option 1"
 *   isChecked={selected === "option1"}
 *   onChange={(checked) => checked && setSelected("option1")}
 * />
 */
export function RadioField({
  description,
  disabled = false,
  errorMessage,
  label = "Label",
  isChecked,
  defaultIsChecked = false,
  className,
  onChange,
  ...rest
}: RadioFieldProps) {
  const id = useId();
  const hasDescription = description !== undefined;
  const hasError = errorMessage !== undefined;
  const errorId = hasError ? `${id}-error` : undefined;
  const descriptionId = hasDescription ? `${id}-description` : undefined;

  // Internal state for uncontrolled mode
  const [internalChecked, setInternalChecked] =
    useState<boolean>(defaultIsChecked);

  // Determine if component is controlled or uncontrolled
  const isControlled = isChecked !== undefined;
  const currentChecked = isControlled ? isChecked : internalChecked;

  // Handle radio changes
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = event.target.checked;

    // Update internal state if uncontrolled
    if (!isControlled) {
      setInternalChecked(newChecked);
    }

    // Call parent's onChange if provided
    if (onChange) {
      onChange(newChecked);
    }
  };

  return (
    <div className={cn("radio-field", className)}>
      {/* Hidden native radio for accessibility */}
      <input
        type="radio"
        id={id}
        className="radio-field__input"
        checked={currentChecked}
        disabled={disabled}
        aria-invalid={hasError}
        aria-describedby={hasError ? errorId : descriptionId}
        onChange={handleChange}
        {...rest}
      />

      {/* Custom Radio Visual */}
      <div
        className={cn(
          "radio-field__button",
          !currentChecked && "radio-field__button--unchecked",
          currentChecked && "radio-field__button--checked",
          disabled && "radio-field__button--disabled",
          hasError && "radio-field__button--error"
        )}
        onClick={() => {
          if (!disabled) {
            document.getElementById(id)?.click();
          }
        }}
        aria-hidden="true"
      />

      {/* Label Container */}
      <div className="radio-field__label-container">
        {/* Label */}
        <label
          htmlFor={id}
          className={cn(
            "radio-field__label",
            disabled && "radio-field__label--disabled"
          )}
        >
          {label}
        </label>

        {/* Description - Optional */}
        {hasDescription && !hasError && (
          <span
            id={descriptionId}
            className={cn(
              "radio-field__description",
              disabled && "radio-field__description--disabled"
            )}
          >
            {description}
          </span>
        )}

        {/* Error Message - Optional */}
        {hasError && (
          <span id={errorId} className="radio-field__error">
            {errorMessage}
          </span>
        )}
      </div>
    </div>
  );
}

export default RadioField;
