import { Accordion } from "../../../ui/primitives";
import figma from "@figma/code-connect";

/**
 * Figma Code Connect for Accordion component
 * Maps Figma accordion design to React implementation
 */

figma.connect(
  Accordion,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=7753-4779",
  {
    props: {},
    example: () => (
      <Accordion
        items={[
          {
            id: "item1",
            title: "What is React?",
            content:
              "React is a JavaScript library for building user interfaces.",
          },
          {
            id: "item2",
            title: "What is TypeScript?",
            content:
              "TypeScript is a strongly typed programming language that builds on JavaScript.",
          },
          {
            id: "item3",
            title: "What is Tailwind CSS?",
            content:
              "Tailwind CSS is a utility-first CSS framework for rapidly building custom designs.",
          },
        ]}
        allowMultiple={true}
      />
    ),
  }
);
