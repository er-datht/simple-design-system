import { type ReactNode } from "react";
import { cn } from "../../../utils/cn";

export interface ButtonGroupProps {
  /**
   * Button components to group together
   */
  children: ReactNode;

  /**
   * Layout alignment of the button group
   * @default "justify"
   */
  align?: "justify" | "start" | "center" | "end" | "stack";

  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * ButtonGroup component for grouping multiple buttons together
 * Provides consistent spacing and alignment for button collections
 */
export function ButtonGroup({
  children,
  align = "justify",
  className,
}: ButtonGroupProps) {
  return (
    <div
      className={cn(
        // Base styles
        `button-group-shared button-group-align-${align}`,

        // Custom classes
        className
      )}
      role="group"
    >
      {children}
    </div>
  );
}
