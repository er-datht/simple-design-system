import { type SelectHTMLAttributes, useId } from "react";
import { cn } from "../../../../utils/cn";
import { IconChevronDown } from "../../../icons";
import "./select-field.css";

export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectFieldProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size" | "onChange"> {
  /**
   * Text content for the main label
   * When provided, label will be displayed
   */
  label?: string;

  /**
   * Whether the field is disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * Current selected value (controlled mode)
   * When provided, the component becomes controlled
   */
  value?: string;

  /**
   * Default value for uncontrolled mode
   */
  defaultValue?: string;

  /**
   * Array of options for the select
   */
  options: SelectOption[];

  /**
   * Placeholder text when no value is selected
   * @default "Select an option"
   */
  placeholder?: string;

  /**
   * Error message text
   * When provided, error message will be displayed and field shows error state
   */
  errorMessage?: string;

  /**
   * Whether the field should display error styling
   * Can be used independently of errorMessage for visual error indication
   * @default false
   */
  hasError?: boolean;

  /**
   * Description/helper text
   * When provided, description will be displayed
   */
  description?: string;

  /**
   * Additional CSS classes for the root container
   */
  className?: string;

  /**
   * Change handler for select changes
   */
  onChange?: (value: string) => void;
}

/**
 * SelectField component provides a dropdown selection input with optional error states and descriptions.
 * Supports both controlled and uncontrolled usage patterns.
 *
 * @example
 * // Controlled usage
 * <SelectField
 *   label="Country"
 *   options={[
 *     { label: "United States", value: "us" },
 *     { label: "Canada", value: "ca" }
 *   ]}
 *   value={country}
 *   onChange={(value) => setCountry(value)}
 * />
 *
 * @example
 * // Uncontrolled usage
 * <SelectField
 *   label="Language"
 *   options={[
 *     { label: "English", value: "en" },
 *     { label: "Spanish", value: "es" }
 *   ]}
 *   defaultValue="en"
 * />
 *
 * @example
 * // With error state
 * <SelectField
 *   label="Country"
 *   options={countries}
 *   value={country}
 *   onChange={(value) => setCountry(value)}
 *   hasError={true}
 *   errorMessage="Please select a country"
 * />
 */
export function SelectField({
  label,
  disabled = false,
  value,
  defaultValue,
  options,
  placeholder = "Select an option",
  errorMessage,
  hasError = false,
  description,
  className,
  onChange,
  ...rest
}: SelectFieldProps) {
  const id = useId();
  const errorId = `${id}-error`;
  const descriptionId = `${id}-description`;
  const hasLabel = label !== undefined;
  const hasErrorState = hasError || errorMessage !== undefined;
  const showDescription = description !== undefined;
  const isPlaceholder = !value && !defaultValue;

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <div className={cn("select-field", className)}>
      {/* Label */}
      {hasLabel && (
        <label
          htmlFor={id}
          className={cn(
            "select-field__label",
            disabled && "select-field__label--disabled"
          )}
        >
          {label}
        </label>
      )}

      {/* Select Container */}
      <div className="select-field__container">
        <select
          id={id}
          {...(value !== undefined ? { value } : { defaultValue })}
          disabled={disabled}
          aria-invalid={hasErrorState}
          aria-describedby={
            hasErrorState
              ? errorId
              : showDescription
              ? descriptionId
              : undefined
          }
          className={cn(
            "select-field__select",
            "truncate",
            hasErrorState && "select-field__select--error",
            disabled && "select-field__select--disabled",
            isPlaceholder && "select-field__select--placeholder"
          )}
          onChange={handleChange}
          {...rest}
        >
          {/* Placeholder Option */}
          <option value="" disabled>
            {placeholder}
          </option>

          {/* Options */}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        {/* Chevron Icon */}
        <div
          className={cn(
            "select-field__icon",
            disabled && "select-field__icon--disabled"
          )}
        >
          <IconChevronDown size="16" />
        </div>
      </div>

      {/* Error Message */}
      {errorMessage && (
        <span
          id={errorId}
          className={cn(
            "select-field__error",
            disabled && "select-field__error--disabled"
          )}
        >
          {errorMessage}
        </span>
      )}

      {/* Description */}
      {showDescription && !hasErrorState && (
        <span
          id={descriptionId}
          className={cn(
            "select-field__description",
            disabled && "select-field__description--disabled"
          )}
        >
          {description}
        </span>
      )}
    </div>
  );
}

export default SelectField;
