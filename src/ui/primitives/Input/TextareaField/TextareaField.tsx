import { type TextareaHTMLAttributes, useId } from "react";
import { cn } from "../../../../utils/cn";
import "./textarea-field.css";

export interface TextareaFieldProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "onChange"> {
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
   * Current textarea value (controlled mode)
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
   * Description/helper text
   * When provided, description will be displayed
   */
  description?: string;

  /**
   * Additional CSS classes for the root container
   */
  className?: string;

  /**
   * Change handler for textarea changes
   */
  onChange?: (value: string) => void;
}

/**
 * TextareaField component provides a multi-line text input for longer text content.
 * Supports both controlled and uncontrolled usage patterns.
 *
 * @example
 * // Controlled usage
 * <TextareaField
 *   label="Message"
 *   placeholder="Enter your message..."
 *   value={message}
 *   onChange={(value) => setMessage(value)}
 * />
 *
 * @example
 * // Uncontrolled usage
 * <TextareaField
 *   label="Description"
 *   defaultValue="Initial text"
 *   description="Maximum 500 characters"
 *   rows={5}
 * />
 *
 * @example
 * // With error state
 * <TextareaField
 *   label="Bio"
 *   value={bio}
 *   onChange={(value) => setBio(value)}
 *   errorMessage="Bio is required"
 * />
 */
export function TextareaField({
  label,
  disabled = false,
  value,
  defaultValue,
  placeholder = "Placeholder",
  errorMessage,
  description,
  className,
  onChange,
  rows = 4,
  ...rest
}: TextareaFieldProps) {
  const id = useId();
  const errorId = `${id}-error`;
  const descriptionId = `${id}-description`;
  const hasLabel = label !== undefined;
  const hasError = errorMessage !== undefined;
  const showDescription = description !== undefined;

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <div className={cn("textarea-field", className)}>
      {/* Label */}
      {hasLabel && (
        <label
          htmlFor={id}
          className={cn(
            "textarea-field__label",
            disabled && "textarea-field__label--disabled"
          )}
        >
          {label}
        </label>
      )}

      {/* Description */}
      {showDescription && !hasError && (
        <span
          id={descriptionId}
          className={cn(
            "textarea-field__description",
            disabled && "textarea-field__description--disabled"
          )}
        >
          {description}
        </span>
      )}

      {/* Textarea */}
      <textarea
        id={id}
        {...(value !== undefined ? { value } : { defaultValue })}
        placeholder={placeholder}
        disabled={disabled}
        rows={rows}
        aria-invalid={hasError}
        aria-describedby={
          hasError ? errorId : showDescription ? descriptionId : undefined
        }
        className={cn(
          "textarea-field__textarea",
          hasError && "textarea-field__textarea--error",
          disabled && "textarea-field__textarea--disabled"
        )}
        onChange={handleChange}
        {...rest}
      />

      {/* Error Message */}
      {hasError && (
        <span id={errorId} className="textarea-field__error">
          {errorMessage}
        </span>
      )}
    </div>
  );
}

export default TextareaField;
