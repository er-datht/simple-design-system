import { useId, useState } from "react";
import { Range, getTrackBackground } from "react-range";
import { cn } from "../../../../utils/cn";
import "./slider-field.css";

/**
 * Props for the SliderField component.
 */
export interface SliderFieldProps {
  /**
   * Text content for the label above the slider.
   * When provided, label section will be displayed.
   */
  label?: string;

  /**
   * Description/helper text below the slider.
   * When provided, description will be displayed.
   */
  description?: string;

  /**
   * Whether the field is disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * Current slider value(s). Single value or range [min, max].
   * Use number for single thumb, [number, number] for range.
   * @default [0, 100]
   */
  value?: number | [number, number];

  /**
   * Default slider value(s) for uncontrolled mode.
   * Use number for single thumb, [number, number] for range.
   */
  defaultValue?: number | [number, number];

  /**
   * Minimum slider value.
   * @default 0
   */
  min?: number;

  /**
   * Maximum slider value.
   * @default 100
   */
  max?: number;

  /**
   * Step increment for the slider.
   * @default 1
   */
  step?: number;

  /**
   * Whether to show the current value display.
   * @default true
   */
  showValue?: boolean;

  /**
   * Prefix for the value display (e.g., "$" for currency).
   * @default "$"
   */
  valuePrefix?: string;

  /**
   * Format the value display. Can show single value or range.
   * @default "single"
   */
  valueFormat?: "single" | "range";

  /**
   * Additional CSS classes for the root container.
   */
  className?: string;

  /**
   * Change handler for slider value changes.
   */
  onChange?: (value: number | [number, number]) => void;
}

/**
 * SliderField component provides a range input for selecting values within a continuous range.
 *
 * Supports optional label and description text, with both default and disabled states.
 * Features real-time value display with customizable formatting.
 *
 * **Figma Source:** [Slider Field Component](https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=589:17676&m=dev)
 *
 * @example
 * // Single value mode
 * <SliderField
 *   label="Volume"
 *   value={75}
 *   valueFormat="single"
 *   onChange={(value) => setVolume(value)}
 * />
 *
 * @example
 * // Range mode
 * <SliderField
 *   label="Price Range"
 *   min={0}
 *   max={1000}
 *   step={10}
 *   value={[100, 500]}
 *   valueFormat="range"
 *   onChange={(value) => setPrice(value)}
 *   description="Select your budget"
 *   valuePrefix="$"
 * />
 */
export function SliderField({
  label,
  description,
  disabled = false,
  value: controlledValue,
  defaultValue,
  min = 0,
  max = 100,
  step = 1,
  showValue = true,
  valuePrefix = "$",
  valueFormat = "range",
  className,
  onChange,
}: SliderFieldProps) {
  const id = useId();
  const hasLabel = label !== undefined;
  const hasDescription = description !== undefined;
  const descriptionId = hasDescription ? `${id}-description` : undefined;

  // Internal state for uncontrolled mode
  const [internalValue, setInternalValue] = useState<number | [number, number]>(
    defaultValue ?? [0, 100]
  );

  // Use controlled value if provided, otherwise use internal state
  const value = controlledValue ?? internalValue;

  // Normalize value to array format for react-range
  const normalizedValue = typeof value === "number" ? [min, value] : value;
  const isSingleMode = valueFormat === "single";

  const handleChange = (values: number[]) => {
    const newValue = isSingleMode ? values[1] : (values as [number, number]);

    // Update internal state if uncontrolled
    if (controlledValue === undefined) {
      setInternalValue(newValue);
    }

    // Call onChange if provided
    if (onChange) {
      onChange(newValue);
    }
  };

  // Format the value display
  const formatValue = () => {
    if (valueFormat === "range") {
      const rangeValue = normalizedValue as [number, number];
      return `${valuePrefix}${rangeValue[0]}-${rangeValue[1]}`;
    }
    const singleValue = typeof value === "number" ? value : normalizedValue[1];
    return `${valuePrefix}${singleValue}`;
  };

  // Get the appropriate node ID based on disabled state
  const nodeId = disabled ? "589:17677" : "151:9617";

  return (
    <div
      data-name="SliderField"
      data-node-id={nodeId}
      className={cn(
        "slider-field",
        disabled && "slider-field--disabled",
        className
      )}
    >
      {/* Label Row - contains label and value display */}
      {(hasLabel || showValue) && (
        <div className="slider-field__label-row" data-node-id="48:3202">
          {hasLabel && (
            <label
              htmlFor={id}
              className="slider-field__label"
              data-node-id="280:14082"
            >
              {label}
            </label>
          )}
          {showValue && (
            <span className="slider-field__output" data-node-id="589:17702">
              {formatValue()}
            </span>
          )}
        </div>
      )}

      {/* Slider Container */}
      <div
        className="slider-field__container"
        data-node-id={disabled ? "589:17694" : "565:15435"}
      >
        <Range
          values={normalizedValue}
          min={min}
          max={max}
          step={step}
          disabled={disabled}
          onChange={handleChange}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              className="slider-field__track"
              data-node-id={disabled ? "589:17695" : "565:15436"}
              style={{
                ...props.style,
                background: isSingleMode
                  ? getTrackBackground({
                      values: normalizedValue,
                      colors: [
                        "transparent",
                        "var(--sds-color-background-brand-default)",
                        "var(--sds-color-background-brand-secondary)",
                      ],
                      min,
                      max,
                    })
                  : getTrackBackground({
                      values: normalizedValue,
                      colors: [
                        "var(--sds-color-background-brand-secondary)",
                        "var(--sds-color-background-brand-default)",
                        "var(--sds-color-background-brand-secondary)",
                      ],
                      min,
                      max,
                    }),
              }}
            >
              {children}
            </div>
          )}
          renderThumb={({ index, props }) => {
            const { key, ...restProps } = props;

            // Hide first thumb visually in single mode but still render it
            const isHidden = isSingleMode && index === 0;

            return (
              <div
                key={key}
                {...restProps}
                className={cn(
                  "slider-field__thumb",
                  disabled && "slider-field__thumb--disabled",
                  isHidden && "slider-field__thumb--hidden"
                )}
                data-node-id={
                  disabled
                    ? index === 0
                      ? "589:17696"
                      : "589:17697"
                    : index === 0
                    ? "565:15437"
                    : "565:15438"
                }
                aria-label={
                  isSingleMode
                    ? label || "Slider"
                    : `${label || "Slider"} ${
                        index === 0 ? "minimum" : "maximum"
                      }`
                }
                aria-describedby={descriptionId}
                aria-valuemin={min}
                aria-valuemax={max}
                aria-valuenow={normalizedValue[index]}
                aria-disabled={disabled}
                aria-hidden={isHidden}
                style={{
                  ...restProps.style,
                }}
              />
            );
          }}
        />
      </div>

      {/* Description */}
      {hasDescription && (
        <p
          id={descriptionId}
          className="slider-field__description"
          data-node-id="280:14156"
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default SliderField;
