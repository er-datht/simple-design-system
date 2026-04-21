import { FormContact } from "../../../ui/forms";
import figma from "@figma/code-connect";

/**
 * FormContact Code Connect documentation
 * Links the FormContact component to its Figma design for Dev Mode integration
 */

figma.connect(
  FormContact,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk?node-id=197%3A19741",
  {
    props: {
      // No Figma variant properties are directly mapped for this component
      // The form is a static composition of InputField and TextareaField primitives
    },
    example: () => <FormContact onSubmit={async () => {}} />,
  }
);
