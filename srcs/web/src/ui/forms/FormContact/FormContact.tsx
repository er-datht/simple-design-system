import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "../../../utils/cn";
import { InputFieldRHF, TextareaFieldRHF } from "../../forms-rhf";
import { Button, ButtonGroup } from "../../primitives/Button";
import { contactSchema, type ContactFormData } from "../schemas";
import "./form-contact.css";

export type FormContactProps = {
  /**
   * Form submission handler - receives validated form data
   */
  onSubmit?: (data: ContactFormData) => void | Promise<void>;

  /**
   * Name field placeholder
   * @default "Enter your name"
   */
  namePlaceholder?: string;

  /**
   * Surname field placeholder
   * @default "Enter your surname"
   */
  surnamePlaceholder?: string;

  /**
   * Email field placeholder
   * @default "Enter your email"
   */
  emailPlaceholder?: string;

  /**
   * Message field placeholder
   * @default "Enter your message"
   */
  messagePlaceholder?: string;

  /**
   * Submit button text
   * @default "Submit"
   */
  submitButtonText?: string;

  /**
   * Whether all form fields are disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * Additional CSS classes for the form container
   */
  className?: string;
};

/**
 * FormContact component provides a comprehensive contact form with name, surname, email, and message fields.
 * Uses react-hook-form for state management and Zod for validation.
 *
 * @example
 * // Basic usage with validated data
 * <FormContact
 *   onSubmit={(data) => {
 *     console.log(data.name, data.surname, data.email, data.message);
 *   }}
 * />
 *
 * @example
 * // With custom placeholders
 * <FormContact
 *   namePlaceholder="First name"
 *   surnamePlaceholder="Last name"
 *   emailPlaceholder="your@email.com"
 *   messagePlaceholder="What can we help you with?"
 *   submitButtonText="Send Message"
 *   onSubmit={async (data) => await sendContactForm(data)}
 * />
 */
export function FormContact({
  onSubmit,
  namePlaceholder = "Enter your name",
  surnamePlaceholder = "Enter your surname",
  emailPlaceholder = "Enter your email",
  messagePlaceholder = "Enter your message",
  submitButtonText = "Submit",
  disabled = false,
  className,
}: FormContactProps) {
  const methods = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      surname: "",
      email: "",
      message: "",
    },
  });

  const { handleSubmit, formState } = methods;
  const isSubmitting = formState.isSubmitting;

  const onSubmitHandler = async (data: ContactFormData) => {
    await onSubmit?.(data);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        className={cn("form-contact", className)}
        noValidate
        data-name="Form Contact"
        data-node-id="197:19741"
      >
        {/* Name Field */}
        <InputFieldRHF
          name="name"
          label="Name"
          placeholder={namePlaceholder}
          disabled={disabled || isSubmitting}
          required
          aria-required="true"
          data-node-id="2106:7340"
        />

        {/* Surname Field */}
        <InputFieldRHF
          name="surname"
          label="Surname"
          placeholder={surnamePlaceholder}
          disabled={disabled || isSubmitting}
          required
          aria-required="true"
          data-node-id="2106:7349"
        />

        {/* Email Field */}
        <InputFieldRHF
          name="email"
          label="Email"
          type="email"
          placeholder={emailPlaceholder}
          disabled={disabled || isSubmitting}
          required
          aria-required="true"
          data-node-id="2106:7364"
        />

        {/* Message Field */}
        <TextareaFieldRHF
          name="message"
          label="Message"
          placeholder={messagePlaceholder}
          disabled={disabled || isSubmitting}
          rows={4}
          required
          aria-required="true"
          data-node-id="2106:7373"
        />

        {/* Submit Button Group */}
        <ButtonGroup
          align="justify"
          className="form-contact__button-group"
          data-node-id="373:10990"
        >
          <Button
            type="submit"
            variant="primary"
            size="md"
            disabled={disabled || isSubmitting}
            className="form-contact__submit-button"
          >
            {isSubmitting ? "Submitting..." : submitButtonText}
          </Button>
        </ButtonGroup>
      </form>
    </FormProvider>
  );
}

export default FormContact;
