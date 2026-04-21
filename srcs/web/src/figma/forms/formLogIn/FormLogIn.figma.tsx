import { FormLogIn } from "../../../ui/forms";
import figma from "@figma/code-connect";

/**
 * FormLogIn Code Connect documentation
 * Links the FormLogIn component to its Figma design for Dev Mode integration
 */

figma.connect(
  FormLogIn,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk?node-id=197%3A19740",
  {
    props: {
      // No Figma variant properties are directly mapped for this component
      // The form is a static composition of InputField, ButtonGroup, and TextLink primitives
    },
    example: () => (
      <FormLogIn onSubmit={async () => {}} onForgotPasswordClick={() => {}} />
    ),
  }
);
