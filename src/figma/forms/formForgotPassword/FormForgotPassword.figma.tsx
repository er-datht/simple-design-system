import { FormForgotPassword } from "../../../ui/forms";
import figma from "@figma/code-connect";

/**
 * FormForgotPassword Code Connect documentation
 * Links the FormForgotPassword component to its Figma design for Dev Mode integration
 */

figma.connect(
  FormForgotPassword,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk?node-id=197%3A19744",
  {
    props: {
      // No Figma variant properties are directly mapped for this component
      // The form is a static composition of InputField and ButtonGroup primitives
    },
    example: () => (
      <FormForgotPassword onSubmit={async () => {}} onCancel={() => {}} />
    ),
  }
);
