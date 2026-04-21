import { type HTMLAttributes } from "react";
import { cn } from "../../../utils/cn";
import { Accordion, type AccordionItem } from "../../primitives/Accordion";
import { TextContentHeading } from "../../typography/TextContentHeading";
import "./page-accordion.css";

/**
 * Props for PageAccordion component
 * Displays a FAQ-style section with heading and accordion items
 */
export interface PageAccordionProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Main heading text for the section
   * @default "Heading"
   */
  heading?: string;

  /**
   * Subheading text that appears below the main heading
   * @default "Subheading"
   */
  subheading?: string;

  /**
   * Array of accordion items to display
   * Each item should have title and content properties
   */
  items?: AccordionItem[];

  /**
   * Whether multiple accordion items can be open simultaneously
   * - true: Multiple items can be open at once
   * - false: Only one item can be open at a time (default)
   * @default false
   */
  allowMultiple?: boolean;

  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * PageAccordion component that displays a FAQ section with heading and collapsible items
 * Uses TextContentHeading for the section header and Accordion for the FAQ items
 *
 * Features:
 * - Responsive mobile-first design (24px mobile padding, 64px desktop padding)
 * - Center-aligned heading and subheading
 * - Customizable accordion items with title and content
 * - Optional multi-expand behavior (allowMultiple prop)
 * - Design system token integration for consistent styling
 * - Accessible accordion implementation with keyboard navigation
 *
 * @example
 * // Basic usage with FAQ items
 * <PageAccordion
 *   heading="Frequently Asked Questions"
 *   subheading="Find answers to common questions"
 *   items={[
 *     { id: 1, title: "What is this?", content: "This is an FAQ section." },
 *     { id: 2, title: "How does it work?", content: "It uses accordion components." }
 *   ]}
 * />
 *
 * @example
 * // Allow multiple items to be open
 * <PageAccordion
 *   heading="Help Center"
 *   items={faqItems}
 *   allowMultiple={true}
 * />
 *
 * @example
 * // With custom className
 * <PageAccordion
 *   heading="Support"
 *   subheading="We're here to help"
 *   items={supportItems}
 *   className="custom-faq-section"
 * />
 */
export function PageAccordion({
  heading = "Heading",
  subheading = "Subheading",
  items = [],
  allowMultiple = false,
  className,
  ...rest
}: PageAccordionProps) {
  return (
    <section
      className={cn("page-accordion", className)}
      data-node-id="2142:11009"
      {...rest}
    >
      <TextContentHeading
        heading={heading}
        subheading={subheading}
        align="Center"
        hasSubheading={true}
      />

      <div className="page-accordion-content" data-node-id="7753:4779">
        <Accordion items={items} allowMultiple={allowMultiple} />
      </div>
    </section>
  );
}

export default PageAccordion;
