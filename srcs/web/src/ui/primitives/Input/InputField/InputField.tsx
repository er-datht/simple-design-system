import { type InputHTMLAttributes, useId } from "react";
import { cn } from "../../../../utils/cn";
import "./input-field.css";

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
    <div className={cn("input-field", className)}>
      {/* Label */}
      {hasLabel && (
        <label
          htmlFor={id}
          className={cn(
            "input-field__label",
            disabled && "input-field__label--disabled"
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
          "input-field__input",
          hasErrorState && "input-field__input--error",
          disabled && "input-field__input--disabled"
        )}
        onChange={handleChange}
        {...rest}
      />

      {/* Error Message */}
      {errorMessage && (
        <span
          id={errorId}
          className={cn(
            "input-field__error",
            disabled && "input-field__error--disabled"
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
            "input-field__description",
            disabled && "input-field__description--disabled"
          )}
        >
          {description}
        </span>
      )}
    </div>
  );
}

export default InputField;
