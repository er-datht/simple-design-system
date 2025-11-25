import { FormRegister } from "../../../ui/forms";
import figma from "@figma/code-connect";

/**
 * FormRegister Code Connect documentation
 * Links the FormRegister component to its Figma design for Dev Mode integration
 */

figma.connect(
  FormRegister,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk?node-id=197%3A19742",
  {
    props: {
      // No Figma variant properties are directly mapped for this component
      // The form is a composition of InputField, CheckboxField, and ButtonGroup primitives
    },
    example: () => (
      <FormRegister
        onSubmit={async () => {}}
        emailLabel="Email"
        passwordLabel="Password"
        checkboxLabel="I accept the terms"
        checkboxDescription="Read our T&Cs"
        submitButtonLabel="Register"
      />
    ),
  }
);
