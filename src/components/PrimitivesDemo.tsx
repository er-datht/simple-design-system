import { ButtonsDemo } from "./ButtonsDemo";
import { AvatarsDemo } from "./AvatarsDemo";
import { NavigationDemo } from "./NavigationDemo";
import TestimonialCardDemo from "./TestimonialCardDemo";
import { CheckboxFieldDemo } from "./CheckboxFieldDemo";
import { Tabs } from "../ui/primitives/Tab";

export function PrimitivesDemo() {
  return (
    <Tabs
      items={[
        {
          id: "buttons",
          label: "Buttons",
          content: <ButtonsDemo />,
        },
        {
          id: "avatars",
          label: "Avatars",
          content: <AvatarsDemo />,
        },
        {
          id: "navigation",
          label: "Navigation",
          content: <NavigationDemo />,
        },
        {
          id: "card",
          label: "Card",
          content: (
            <Tabs
              items={[
                {
                  id: "testimonial-card",
                  label: "Testimonial Card",
                  content: <TestimonialCardDemo />,
                },
              ]}
              defaultActiveTab="testimonial-card"
            />
          ),
        },
        {
          id: "input",
          label: "Input",
          content: (
            <Tabs
              items={[
                {
                  id: "checkbox-field",
                  label: "Checkbox Field",
                  content: <CheckboxFieldDemo />,
                },
              ]}
              defaultActiveTab="checkbox-field"
            />
          ),
        },
      ]}
      defaultActiveTab="buttons"
    />
  );
}
