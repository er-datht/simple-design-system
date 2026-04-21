import { type InputHTMLAttributes, useId } from "react";
import { cn } from "../../../../utils/cn";
import { IconSearch, IconX } from "../../../icons";
import "./search-field.css";

export interface SearchFieldProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "type" | "size" | "onChange"
  > {
  /**
   * Whether the field is disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * Current search value (controlled mode)
   * When provided, the component becomes controlled
   */
  value?: string;

  /**
   * Default value for uncontrolled mode
   */
  defaultValue?: string;

  /**
   * Additional CSS classes for the root container
   */
  className?: string;

  /**
   * Change handler for search input changes
   */
  onChange?: (value: string) => void;

  /**
   * Handler for clearing the search input
   */
  onClear?: () => void;
}

/**
 * SearchField component provides a specialized input for search functionality with icon indicators.
 * Shows a search icon when empty and a clear (X) icon when there's a value.
 * Supports both controlled and uncontrolled usage patterns.
 *
 * @example
 * // Controlled usage
 * <SearchField
 *   value={searchQuery}
 *   placeholder="Search..."
 *   onChange={(value) => setSearchQuery(value)}
 *   onClear={() => setSearchQuery("")}
 * />
 *
 * @example
 * // Uncontrolled usage
 * <SearchField
 *   defaultValue=""
 *   placeholder="Search products..."
 *   onChange={(value) => console.log(value)}
 * />
 */
export function SearchField({
  disabled = false,
  value,
  defaultValue,
  placeholder = "Search...",
  className,
  onChange,
  onClear,
  ...rest
}: SearchFieldProps) {
  const id = useId();
  const hasValue = value !== undefined ? value.length > 0 : false;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  const handleClear = () => {
    if (onClear) {
      onClear();
    } else if (onChange) {
      onChange("");
    }
  };

  return (
    <div className={cn("search-field", className)}>
      {/* Search Input */}
      <input
        id={id}
        type="search"
        {...(value !== undefined ? { value } : { defaultValue })}
        placeholder={placeholder}
        disabled={disabled}
        aria-label="Search"
        className={cn(
          "search-field__input",
          disabled
            ? "search-field__input--disabled"
            : "search-field__input--default"
        )}
        onChange={handleChange}
        {...rest}
      />

      {/* Icon Container */}
      <div className="search-field__icon-container">
        {hasValue && !disabled ? (
          // Clear Icon (X)
          <button
            type="button"
            onClick={handleClear}
            className="search-field__clear-button"
            aria-label="Clear search"
          >
            <IconX
              size="16"
              className={cn(
                disabled
                  ? "search-field__icon--disabled"
                  : "search-field__icon--default"
              )}
            />
          </button>
        ) : (
          // Search Icon
          <IconSearch
            size="16"
            className={cn(
              disabled
                ? "search-field__icon--disabled"
                : "search-field__icon--default"
            )}
          />
        )}
      </div>
    </div>
  );
}

export default SearchField;
