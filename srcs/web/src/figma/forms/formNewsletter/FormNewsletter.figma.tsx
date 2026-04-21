import { FormNewsletter } from "../../../ui/forms";
import figma from "@figma/code-connect";

/**
 * FormNewsletter Code Connect documentation
 * Links the FormNewsletter component to its Figma design for Dev Mode integration
 */

figma.connect(
  FormNewsletter,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk?node-id=197%3A19743",
  {
    props: {
      // No Figma variant properties are directly mapped for this component
      // The form uses react-hook-form for internal state management
    },
    example: () => <FormNewsletter onSubmit={async () => {}} />,
  }
);
