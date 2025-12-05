import React from "react";
import Accordion from "../ui/primitives/Accordion/Accordion";
import AccordionItem from "../ui/primitives/Accordion/AccordionItem";

export default function AccordionDemo() {
  const [openIndex, setOpenIndex] = React.useState<number>(0);

  const items = [
    {
      title: "How do I use this?",
      content:
        "Use the Accordion component by providing AccordionItem children. Control open state via props or use the demo's state.",
    },
    {
      title: "What is the price?",
      content: "Pricing is flexible. Contact sales for details.",
    },
    {
      title: "Is there support?",
      content: "Yes — we offer community and paid support plans.",
    },
  ];

  return (
    <Accordion>
      {items.map((it, i) => (
        <AccordionItem
          key={i}
          title={it.title}
          content={it.content}
          state={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
        />
      ))}
    </Accordion>
  );
}
