import figma from "@figma/code-connect";
import { FormShipping } from "../../../ui/forms";
import { Button } from "../../../ui/primitives";

/**
 * Code Connect documentation for FormShipping component
 * Links the Figma design to the React implementation
 */

figma.connect(
  FormShipping,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk?node-id=197%3A23153",
  {
    props: {
      // FormShipping is a static form layout in Figma
      // Props are mapped to the component's configurable fields
    },
    example: () => (
      <FormShipping
        heading="Shipping information"
        subheading="We ship within 2 working days"
        fullNameLabel="Full Name"
        fullNameDescription="Description"
        locationLabel="Location"
        locationOptions={[
          { label: "United States", value: "us" },
          { label: "Canada", value: "ca" },
        ]}
        locationDescription="Description"
        deliveryNoteLabel="Delivery note"
        deliveryNoteDescription="Description"
        acceptTermsLabel="I accept the terms"
        acceptTermsDescription="Read our T&Cs"
        buttons={
          <Button variant="primary" size="md">
            Save shipping information
          </Button>
        }
        onSubmit={async () => {}}
      />
    ),
  }
);
