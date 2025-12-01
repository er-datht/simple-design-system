import { TagToggle } from "../../../ui/primitives/TagToggle";
import figma from "@figma/code-connect";

/**
 * Code Connect mapping for TagToggle component
 * Maps Figma State variant to semantic state boolean prop
 */
figma.connect(
  TagToggle,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=157-10316",
  {
    props: {
      state: figma.enum("State", {
        On: true,
        Off: false,
      }),
      label: figma.string("Label"),
      icon: figma.instance("Icon"),
      showIcon: figma.boolean("Show Icon"),
    },
    example: (props) => (
      <TagToggle
        state={props.state}
        label={props.label}
        icon={props.icon}
        showIcon={props.showIcon}
      />
    ),
  }
);
