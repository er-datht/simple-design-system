import { type InputHTMLAttributes, useId, useState } from "react";
import { cn } from "../../../../utils/cn";
import "./switch-field.css";

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
   * Whether the switch is checked (controlled mode)
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
 *   isChecked={isDark}
 *   onChange={(checked) => setIsDark(checked)}
 * />
 */
export function SwitchField({
  label,
  description,
  disabled = false,
  errorMessage,
  isChecked,
  defaultIsChecked = false,
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
  const [internalChecked, setInternalChecked] =
    useState<boolean>(defaultIsChecked);

  // Determine if component is controlled or uncontrolled
  const isControlled = isChecked !== undefined;
  const currentChecked = isControlled ? isChecked : internalChecked;

  // Handle switch changes
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
          checked={currentChecked}
          disabled={disabled}
          aria-invalid={hasError}
          aria-checked={currentChecked}
          aria-describedby={hasError ? errorId : descriptionId}
          onChange={handleChange}
          {...rest}
        />

        {/* Custom Switch Visual */}
        <div
          className={cn(
            "switch-field__switch",
            currentChecked
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
              currentChecked
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
