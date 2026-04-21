import type { HTMLAttributes } from "react";
import { cn } from "../../../utils/cn";
import "./text-price.css";

/**
 * Props for the TextPrice component.
 */
export interface TextPriceProps extends HTMLAttributes<HTMLDivElement> {
  /** The main price amount to display */
  price?: string;
  /** Currency symbol to display before price */
  currency?: string;
  /** Billing period or subscription label */
  label?: string;
  /** Controls visibility of the label text */
  hasLabel?: boolean;
  /** Component size variant */
  size?: "Large" | "Small";
}

/**
 * TextPrice component displays pricing information in a clear, hierarchical format
 * with currency symbol, price amount, and optional billing label.
 *
 * Supports two size variants (Large and Small) for flexible use across different
 * contexts and screen sizes.
 *
 * **Figma Source:** [Text Price Component](https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=1443-10386)
 */
export function TextPrice({
  price = "50",
  currency = "$",
  label = "/ mo",
  hasLabel = true,
  size = "Large",
  className,
  ...rest
}: TextPriceProps) {
  const nodeId = size === "Large" ? "2142:11622" : "1444:10496";
  const ariaLabel = `Price: ${currency}${price}${hasLabel ? ` ${label}` : ""}`;

  return (
    <div
      data-name="TextPrice"
      data-node-id={nodeId}
      className={cn("text-price", `text-price--${size.toLowerCase()}`, className)}
      aria-label={ariaLabel}
      {...rest}
    >
      <div className="text-price__price-group">
        <p className="text-price__currency">{currency}</p>
        <p className="text-price__amount">{price}</p>
      </div>
      {hasLabel && <p className="text-price__label">{label}</p>}
    </div>
  );
}
