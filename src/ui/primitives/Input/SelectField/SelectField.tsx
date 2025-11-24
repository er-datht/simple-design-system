import { type SelectHTMLAttributes, useId } from "react";
import { cn } from "../../../../utils/cn";
import { IconChevronDown } from "../../../icons";

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

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {/* Label */}
      {hasLabel && (
        <label
          htmlFor={id}
          className={cn(
            "text-base font-medium",
            disabled ? "text-gray-400" : "text-gray-900"
          )}
        >
          {label}
        </label>
      )}

      {/* Select Container */}
      <div className="relative">
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
            "w-full h-11 px-3 pr-10 border rounded-md text-base appearance-none bg-white",
            "focus:outline-none focus:ring-2 focus:ring-offset-0",
            disabled
              ? "border-gray-200 bg-gray-50 text-gray-400 cursor-not-allowed"
              : hasErrorState
              ? "border-red-700 text-gray-900 focus:ring-red-700"
              : "border-gray-200 text-gray-900 focus:ring-gray-900 focus:border-gray-900",
            !value && !defaultValue && "text-gray-400"
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
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <IconChevronDown
            size="16"
            className={cn(disabled ? "text-gray-400" : "text-gray-500")}
          />
        </div>
      </div>

      {/* Error Message */}
      {errorMessage && (
        <span id={errorId} className="text-sm text-red-700">
          {errorMessage}
        </span>
      )}

      {/* Description */}
      {showDescription && !hasErrorState && (
        <span
          id={descriptionId}
          className={cn(
            "text-sm",
            disabled ? "text-gray-400" : "text-gray-500"
          )}
        >
          {description}
        </span>
      )}
    </div>
  );
}

export default SelectField;
