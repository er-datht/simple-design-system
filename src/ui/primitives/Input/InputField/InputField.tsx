import { type InputHTMLAttributes, useId } from "react";
import { cn } from "../../../../utils/cn";

export interface InputFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "onChange"> {
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
   * Current input value (controlled mode)
   * When provided, the component becomes controlled
   */
  value?: string;

  /**
   * Default value for uncontrolled mode
   */
  defaultValue?: string;

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
   * Change handler for input changes
   */
  onChange?: (value: string) => void;
}

/**
 * InputField component provides a single-line text input with optional labels, errors, and descriptions.
 * Supports both controlled and uncontrolled usage patterns.
 *
 * @example
 * // Controlled usage
 * <InputField
 *   label="Email"
 *   placeholder="Enter your email"
 *   value={email}
 *   onChange={(value) => setEmail(value)}
 * />
 *
 * @example
 * // Uncontrolled usage
 * <InputField
 *   label="Username"
 *   defaultValue="john_doe"
 *   placeholder="Enter username"
 * />
 *
 * @example
 * // With error state
 * <InputField
 *   label="Password"
 *   type="password"
 *   value={password}
 *   onChange={(value) => setPassword(value)}
 *   hasError={true}
 *   errorMessage="Password is required"
 * />
 */
export function InputField({
  label,
  disabled = false,
  value,
  defaultValue,
  placeholder = "Placeholder",
  errorMessage,
  hasError = false,
  description,
  className,
  onChange,
  type = "text",
  ...rest
}: InputFieldProps) {
  const id = useId();
  const errorId = `${id}-error`;
  const descriptionId = `${id}-description`;
  const hasLabel = label !== undefined;
  const hasErrorState = hasError || errorMessage !== undefined;
  const showDescription = description !== undefined;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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

      {/* Input */}
      <input
        id={id}
        type={type}
        {...(value !== undefined ? { value } : { defaultValue })}
        placeholder={placeholder}
        disabled={disabled}
        aria-invalid={hasErrorState}
        aria-describedby={
          hasErrorState ? errorId : showDescription ? descriptionId : undefined
        }
        className={cn(
          "w-full h-11 px-3 border rounded-md text-base",
          "focus:outline-none focus:ring-2 focus:ring-offset-0",
          "placeholder:text-gray-400",
          disabled
            ? "border-gray-200 bg-gray-50 text-gray-400 cursor-not-allowed"
            : hasErrorState
            ? "border-red-700 bg-white text-gray-900 focus:ring-red-700"
            : "border-gray-200 bg-white text-gray-900 focus:ring-gray-900 focus:border-gray-900"
        )}
        onChange={handleChange}
        {...rest}
      />

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

export default InputField;
