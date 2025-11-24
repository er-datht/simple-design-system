import {
  type InputHTMLAttributes,
  useId,
  useState,
  useEffect,
  useRef,
} from "react";
import { cn } from "../../../../utils/cn";
import "./checkbox-field.css";

export type CheckboxValueType = "Unchecked" | "Checked" | "Indeterminate";

/**
 * Props for the CheckboxField component.
 */
export interface CheckboxFieldProps
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
   */
  onChange?: (checked: boolean) => void;
}

/**
 * CheckboxField component combines a checkbox input with an optional label and description text.
 *
 * Provides visual feedback for multiple states (checked, unchecked, indeterminate) and supports
 * both enabled and disabled modes. Uses design tokens for all styling.
 *
 * **Figma Source:** [CheckboxField Component](https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=9762:1441)
 *
 * @example
 * // Basic usage
 * <CheckboxField label="Accept terms" />
 *
 * @example
 * // With description
 * <CheckboxField
 *   label="Subscribe to newsletter"
 *   description="Receive updates about new features"
 * />
 *
 * @example
 * // Controlled mode
 * <CheckboxField
 *   label="Select all"
 *   valueType={isChecked ? "Checked" : "Unchecked"}
 *   onChange={(checked) => setIsChecked(checked)}
 * />
 *
 * @example
 * // Disabled state
 * <CheckboxField
 *   label="Unavailable option"
 *   disabled
 *   valueType="Checked"
 * />
 *
 * @example
 * // Error state
 * <CheckboxField
 *   label="Required field"
 *   errorMessage="This field is required"
 * />
 */
export function CheckboxField({
  label,
  description,
  disabled = false,
  errorMessage,
  valueType,
  defaultValueType = "Unchecked",
  className,
  onChange,
  ...rest
}: CheckboxFieldProps) {
  const id = useId();
  const checkboxRef = useRef<HTMLInputElement>(null);
  const hasDescription = description !== undefined;
  const hasLabel = label !== undefined;
  const hasError = errorMessage !== undefined;
  const errorId = hasError ? `${id}-error` : undefined;
  const descriptionId = hasDescription ? `${id}-description` : undefined;

  // Internal state for uncontrolled mode
  const [internalValue, setInternalValue] =
    useState<CheckboxValueType>(defaultValueType);

  // Determine if component is controlled or uncontrolled
  const isControlled = valueType !== undefined;
  const currentValue = isControlled ? valueType : internalValue;

  // Determine node ID based on disabled state and value type
  const getNodeId = (): string => {
    if (!disabled) {
      switch (currentValue) {
        case "Unchecked":
          return "565:15610";
        case "Checked":
          return "9762:1442";
        case "Indeterminate":
          return "565:15635";
      }
    } else {
      // Disabled
      switch (currentValue) {
        case "Unchecked":
          return "9762:1448";
        case "Checked":
          return "565:15661";
        case "Indeterminate":
          return "587:16995";
      }
    }
  };

  // Handle indeterminate state
  useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = currentValue === "Indeterminate";
    }
  }, [currentValue]);

  // Handle checkbox changes
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = event.target.checked;
    const newValue: CheckboxValueType = newChecked ? "Checked" : "Unchecked";

    // Update internal state if uncontrolled
    if (!isControlled) {
      setInternalValue(newValue);
    }

    // Call parent's onChange if provided
    if (onChange) {
      onChange(newChecked);
    }
  };

  // Handle click on custom checkbox visual
  const handleCheckboxClick = () => {
    if (!disabled && checkboxRef.current) {
      checkboxRef.current.click();
    }
  };

  return (
    <div
      className={cn("checkbox-field", className)}
      data-name="CheckboxField"
      data-node-id={getNodeId()}
    >
      {/* Checkbox and Label Row */}
      <div className="checkbox-field__checkbox-row">
        {/* Hidden native checkbox for accessibility */}
        <input
          ref={checkboxRef}
          type="checkbox"
          id={id}
          className="checkbox-field__input"
          checked={currentValue === "Checked"}
          disabled={disabled}
          aria-invalid={hasError}
          aria-checked={
            currentValue === "Indeterminate"
              ? "mixed"
              : currentValue === "Checked"
          }
          aria-describedby={hasError ? errorId : descriptionId}
          onChange={handleChange}
          {...rest}
        />

        {/* Custom Checkbox Visual */}
        <div
          className={cn(
            "checkbox-field__checkbox",
            currentValue === "Unchecked" &&
              "checkbox-field__checkbox--unchecked",
            currentValue === "Checked" && "checkbox-field__checkbox--checked",
            currentValue === "Indeterminate" &&
              "checkbox-field__checkbox--indeterminate",
            disabled && "checkbox-field__checkbox--disabled",
            hasError && "checkbox-field__checkbox--error"
          )}
          onClick={handleCheckboxClick}
          aria-hidden="true"
        >
          {/* Check Icon */}
          {currentValue === "Checked" && (
            <span
              className={cn(
                "checkbox-field__icon",
                disabled && "checkbox-field__icon--disabled"
              )}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13.3346 4L6.0013 11.3333L2.66797 8" />
              </svg>
            </span>
          )}

          {/* Minus Icon - shown when Indeterminate */}
          {currentValue === "Indeterminate" && (
            <span
              className={cn(
                "checkbox-field__icon",
                disabled && "checkbox-field__icon--disabled"
              )}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3.33203 8H12.6654" />
              </svg>
            </span>
          )}
        </div>

        {/* Label */}
        {hasLabel && (
          <label
            htmlFor={id}
            className={cn(
              "checkbox-field__label",
              disabled && "checkbox-field__label--disabled"
            )}
          >
            {label}
          </label>
        )}
      </div>

      {/* Error Message - Optional */}
      {hasError && (
        <div className="checkbox-field__description-row">
          {/* Space Divider - matches checkbox width for alignment */}
          <div className="checkbox-field__spacer" aria-hidden="true" />

          {/* Error Text */}
          <span id={errorId} className="checkbox-field__error">
            {errorMessage}
          </span>
        </div>
      )}

      {/* Description Row - Optional */}
      {hasDescription && !hasError && (
        <div
          className={cn(
            "checkbox-field__description-row",
            disabled && "checkbox-field__description-row--disabled"
          )}
        >
          {/* Space Divider - matches checkbox width for alignment */}
          <div className="checkbox-field__spacer" aria-hidden="true" />

          {/* Description Text */}
          <span id={descriptionId} className="checkbox-field__description">
            {description}
          </span>
        </div>
      )}
    </div>
  );
}

export default CheckboxField;
