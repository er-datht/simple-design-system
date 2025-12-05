import React from "react";
import "./accordion.css";
import AccordionItem from "./AccordionItem";

/**
 * AccordionItem Type
 *
 * Defines the structure for individual accordion items when using the controlled mode.
 * Each item represents a collapsible section with a title and content.
 *
 * @typedef {Object} AccordionItem
 * @property {string | number} [id] - Unique identifier for the accordion item (used as React key)
 * @property {string} [title] - Header text displayed in the accordion button
 * @property {string} [content] - Body content shown when the accordion item is expanded
 * @property {boolean} [state] - Initial open/closed state of the accordion item (deprecated - use internal state management instead)
 */
export type AccordionItem = {
  id?: string | number;
  title?: string;
  content?: string;
  state?: boolean;
};

/**
 * Props for Accordion component
 *
 * @typedef {Object} AccordionProps
 * @property {React.ReactNode} [children] - Custom accordion content (uncontrolled mode). Use when you need full control over accordion structure.
 * @property {string} [className] - Additional CSS classes to apply to the accordion wrapper
 * @property {AccordionItem[]} [items] - Array of accordion items (controlled mode). When provided, accordion is auto-generated from this data.
 * @property {boolean} [allowMultiple=false] - When true, allows multiple accordion items to be open simultaneously. When false, opening one item closes others.
 *
 * @example
 * ```tsx
 * // Controlled mode with items array
 * <Accordion
 *   items={[
 *     { id: 1, title: "Section 1", content: "Content for section 1" },
 *     { id: 2, title: "Section 2", content: "Content for section 2" }
 *   ]}
 * />
 *
 * // Allow multiple sections open
 * <Accordion
 *   items={items}
 *   allowMultiple={true}
 * />
 *
 * // Uncontrolled mode with custom children
 * <Accordion>
 *   <AccordionItem title="Custom" content="Custom content" />
 * </Accordion>
 * ```
 */
export type AccordionProps = {
  children?: React.ReactNode;
  className?: string;
  items?: AccordionItem[];
  allowMultiple?: boolean;
};

/**
 * Accordion Component
 *
 * A flexible accordion component that supports both controlled and uncontrolled modes.
 * Provides collapsible sections with smooth animations and keyboard navigation support.
 *
 * **Key Features:**
 * - Two modes: controlled (with items prop) or uncontrolled (with children)
 * - Single or multiple expansion modes via `allowMultiple` prop
 * - Automatic state management for expand/collapse behavior
 * - Smooth CSS transitions for opening and closing
 * - First item open by default in controlled mode
 * - Keyboard accessible (Enter/Space to toggle)
 *
 * **Behavior:**
 * - **Controlled Mode**: Pass an `items` array to auto-generate accordion sections
 * - **Uncontrolled Mode**: Pass custom `AccordionItem` components as children
 * - **Single Mode** (default): Opening a new section automatically closes others
 * - **Multiple Mode**: Multiple sections can be open simultaneously
 *
 * **Accessibility:**
 * - Uses semantic button elements for accordion headers
 * - Implements ARIA attributes for screen readers
 * - Keyboard navigable with Enter and Space keys
 * - Visual focus indicators for keyboard navigation
 *
 * **Figma Source:** [Accordion Component](https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=2211-13682)
 *
 * @example
 * ```tsx
 * // Basic usage with items array (controlled)
 * <Accordion
 *   items={[
 *     { id: 1, title: "What is your return policy?", content: "We accept returns within 30 days..." },
 *     { id: 2, title: "Do you ship internationally?", content: "Yes, we ship to over 50 countries..." },
 *     { id: 3, title: "How can I track my order?", content: "Once shipped, you'll receive a tracking number..." }
 *   ]}
 * />
 *
 * // Allow multiple sections to be open
 * <Accordion
 *   items={faqItems}
 *   allowMultiple={true}
 * />
 *
 * // Uncontrolled mode with custom children
 * <Accordion>
 *   <AccordionItem
 *     title="Custom Section"
 *     content="Custom content with full control"
 *     state={true}
 *     onToggle={() => console.log("Toggled")}
 *   />
 * </Accordion>
 *
 * // With custom styling
 * <Accordion
 *   items={items}
 *   className="my-custom-accordion"
 *   allowMultiple={false}
 * />
 * ```
 *
 * @param {AccordionProps} props - Component props
 * @param {React.ReactNode} [props.children] - Custom accordion content (uncontrolled mode)
 * @param {string} [props.className] - Additional CSS classes
 * @param {AccordionItem[]} [props.items] - Array of items to render (controlled mode)
 * @param {boolean} [props.allowMultiple=false] - Allow multiple sections open simultaneously
 *
 * @returns {React.ReactElement} The rendered Accordion component
 */
export const Accordion: React.FC<AccordionProps> = ({
  children,
  className = "",
  items,
  allowMultiple = false,
}) => {
  const [openIndexes, setOpenIndexes] = React.useState<number[]>(
    items && items.length ? [0] : []
  );

  const toggleIndex = (index: number) => {
    if (allowMultiple) {
      setOpenIndexes((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    } else {
      setOpenIndexes((prev) => (prev[0] === index ? [] : [index]));
    }
  };

  if (items && items.length) {
    return (
      <div className={`sds-accordion ${className}`}>
        {items.map((it, i) => (
          <AccordionItem
            key={it.id ?? i}
            title={it.title}
            content={it.content}
            state={openIndexes.includes(i)}
            onToggle={() => toggleIndex(i)}
          />
        ))}
      </div>
    );
  }

  return <div className={`sds-accordion ${className}`}>{children}</div>;
};

export default Accordion;
