import { type ReactNode } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "../../../utils/cn";
import {
  InputFieldRHF,
  SelectFieldRHF,
  TextareaFieldRHF,
  CheckboxFieldRHF,
} from "../../forms-rhf";
import { type SelectOption } from "../../primitives/Input";
import { ButtonGroup } from "../../primitives/Button";
import { shippingSchema, type ShippingFormData } from "../schemas";
import "./form-shipping.css";

export type FormShippingProps = {
  /**
   * Heading text for the form
   * @default "Shipping information"
   */
  heading?: string;

  /**
   * Subheading/description text
   * @default "We ship within 2 working days"
   */
  subheading?: string;

  /**
   * Full name field label
   * @default "Full Name"
   */
  fullNameLabel?: string;

  /**
   * Full name field description
   */
  fullNameDescription?: string;

  /**
   * Location field label
   * @default "Location"
   */
  locationLabel?: string;

  /**
   * Location field options
   */
  locationOptions?: SelectOption[];

  /**
   * Location field description
   */
  locationDescription?: string;

  /**
   * Delivery note field label
   * @default "Delivery note"
   */
  deliveryNoteLabel?: string;

  /**
   * Delivery note field description
   */
  deliveryNoteDescription?: string;

  /**
   * Checkbox label
   * @default "I accept the terms"
   */
  acceptTermsLabel?: string;

  /**
   * Checkbox description
   * @default "Read our T&Cs"
   */
  acceptTermsDescription?: string;

  /**
   * Button group content (buttons)
   */
  buttons?: ReactNode;

  /**
   * Form submission handler - receives validated form data
   */
  onSubmit?: (data: ShippingFormData) => void | Promise<void>;

  /**
   * Additional CSS classes for the root container
   */
  className?: string;
};

/**
 * FormShipping component is a complete form section for collecting and managing
 * shipping information from users. Uses react-hook-form for state management
 * and Zod for validation.
 *
 * **Figma Source:** [Form Shipping Component](https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=197:23153&m=dev)
 *
 * @example
 * // Basic usage with validated data
 * <FormShipping
 *   onSubmit={(data) => {
 *     console.log(data.fullName, data.location, data.deliveryNote, data.acceptTerms);
 *   }}
 *   buttons={<Button type="submit">Save shipping information</Button>}
 * />
 *
 * @example
 * // With custom labels and options
 * <FormShipping
 *   heading="Delivery Details"
 *   subheading="Fast shipping available"
 *   fullNameLabel="Recipient Name"
 *   locationLabel="Shipping Country"
 *   locationOptions={[
 *     { label: "United States", value: "us" },
 *     { label: "Canada", value: "ca" }
 *   ]}
 *   deliveryNoteLabel="Special Instructions"
 *   acceptTermsLabel="I agree to shipping terms"
 *   onSubmit={async (data) => await saveShippingInfo(data)}
 *   buttons={
 *     <>
 *       <Button variant="neutral" onClick={handleCancel}>Cancel</Button>
 *       <Button type="submit">Save</Button>
 *     </>
 *   }
 * />
 */
export function FormShipping({
  heading = "Shipping information",
  subheading = "We ship within 2 working days",
  fullNameLabel = "Full Name",
  fullNameDescription,
  locationLabel = "Location",
  locationOptions = [
    { label: "United States", value: "us" },
    { label: "Canada", value: "ca" },
    { label: "United Kingdom", value: "uk" },
    { label: "Germany", value: "de" },
    { label: "France", value: "fr" },
    { label: "Australia", value: "au" },
  ],
  locationDescription,
  deliveryNoteLabel = "Delivery note",
  deliveryNoteDescription,
  acceptTermsLabel = "I accept the terms",
  acceptTermsDescription = "Read our T&Cs",
  buttons,
  onSubmit,
  className,
}: FormShippingProps) {
  const methods = useForm<ShippingFormData>({
    resolver: zodResolver(shippingSchema),
    mode: "onBlur",
    defaultValues: {
      fullName: "",
      location: "",
      deliveryNote: "",
      acceptTerms: false,
    },
  });

  const { handleSubmit } = methods;

  const onSubmitHandler = async (data: ShippingFormData) => {
    await onSubmit?.(data);
  };

  return (
    <FormProvider {...methods}>
      <form
        className={cn("form-shipping", className)}
        onSubmit={handleSubmit(onSubmitHandler)}
        data-node-id="197:23153"
      >
        <fieldset className="form-shipping__fieldset">
          {/* Legend - Header Section */}
          <legend className="form-shipping__legend" data-node-id="197:23151">
            <h2 className="form-shipping__heading" data-node-id="3043:212">
              {heading}
            </h2>
            <p className="form-shipping__subheading" data-node-id="197:23149">
              {subheading}
            </p>
          </legend>

          {/* Full Name Input */}
          <div className="form-shipping__field" data-node-id="197:23059">
            <InputFieldRHF
              name="fullName"
              label={fullNameLabel}
              placeholder="Enter your full name"
              description={fullNameDescription}
            />
          </div>

          {/* Location Select */}
          <div className="form-shipping__field" data-node-id="197:23060">
            <SelectFieldRHF
              name="location"
              label={locationLabel}
              options={locationOptions}
              placeholder="Select a location"
              description={locationDescription}
            />
          </div>

          {/* Delivery Note Textarea */}
          <div className="form-shipping__field" data-node-id="197:23062">
            <TextareaFieldRHF
              name="deliveryNote"
              label={deliveryNoteLabel}
              placeholder="Enter delivery instructions..."
              description={deliveryNoteDescription}
              rows={4}
            />
          </div>

          {/* Terms Acceptance Checkbox */}
          <div className="form-shipping__field" data-node-id="197:23126">
            <CheckboxFieldRHF
              name="acceptTerms"
              label={acceptTermsLabel}
              description={acceptTermsDescription}
            />
          </div>

          {/* Button Group - Actions */}
          {buttons && (
            <div className="form-shipping__actions" data-node-id="197:23063">
              <ButtonGroup align="justify">{buttons}</ButtonGroup>
            </div>
          )}
        </fieldset>
      </form>
    </FormProvider>
  );
}

export default FormShipping;
