import React from "react";
import { IconChevronDown, IconChevronUp } from "../../icons";
import "./accordion.css";

type AccordionItemProps = {
  title?: string;
  content?: string;
  state?: boolean;
  onToggle?: () => void;
  className?: string;
};

export const AccordionItem: React.FC<AccordionItemProps> = ({
  title = "Title",
  content = "Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list.",
  state = false,
  onToggle,
  className = "",
}) => {
  const id = React.useId();

  return (
    <div
      className={`sds-accordion-item ${state ? "open" : "closed"} ${className}`}
      style={{ width: "100%" }}
      data-node-id={state ? "7723:4487" : "7723:4485"}
      role="button"
      aria-expanded={state}
      aria-controls={`accordion-content-${id}`}
      tabIndex={0}
      onClick={onToggle}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onToggle && onToggle();
        }
      }}
    >
      <div className="sds-accordion-title">
        <p className="sds-accordion-title-text">{title}</p>
        <span className="sds-accordion-icon" aria-hidden="true">
          {state ? <IconChevronUp size="20" /> : <IconChevronDown size="20" />}
        </span>
      </div>

      {state && (
        <div id={`accordion-content-${id}`} className="sds-accordion-content">
          <div className="sds-accordion-content-inner">
            <p>{content}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
