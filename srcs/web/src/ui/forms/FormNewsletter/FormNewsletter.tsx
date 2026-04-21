import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "../../../utils/cn";
import { InputFieldRHF } from "../../forms-rhf";
import { Button } from "../../primitives/Button";
import { newsletterSchema, type NewsletterFormData } from "../schemas";
import "./form-newsletter.css";

export type FormNewsletterProps = {
  /**
   * Form submission handler - receives validated form data
   */
  onSubmit?: (data: NewsletterFormData) => void | Promise<void>;

  /**
   * Email field placeholder
   * @default "you@example.com"
   */
  emailPlaceholder?: string;

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
 * FormNewsletter component provides a compact newsletter signup form with email input and submit button.
 * Uses react-hook-form for state management and Zod for validation.
 *
 * @example
 * // Basic usage with validated data
 * <FormNewsletter
 *   onSubmit={(data) => {
 *     console.log(data.email); // Typed and validated
 *   }}
 * />
 *
 * @example
 * // With custom placeholder
 * <FormNewsletter
 *   emailPlaceholder="Enter your email"
 *   submitButtonText="Subscribe"
 *   onSubmit={async (data) => await subscribe(data.email)}
 * />
 */
export function FormNewsletter({
  onSubmit,
  emailPlaceholder = "you@example.com",
  submitButtonText = "Submit",
  disabled = false,
  className,
}: FormNewsletterProps) {
  const methods = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
    mode: "onBlur",
    defaultValues: {
      email: "",
    },
  });

  const { handleSubmit, formState } = methods;
  const isSubmitting = formState.isSubmitting;

  const onSubmitHandler = async (data: NewsletterFormData) => {
    await onSubmit?.(data);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        className={cn("form-newsletter", className)}
        noValidate
        data-name="Form Newsletter"
        data-node-id="197:19743"
      >
        {/* Email Field */}
        <div className="form-newsletter__email-wrapper">
          <InputFieldRHF
            name="email"
            label="Email address"
            type="email"
            placeholder={emailPlaceholder}
            disabled={disabled || isSubmitting}
            required
            aria-required="true"
            data-node-id="197:19729"
          />
        </div>

        {/* Submit Button */}
        <div className="form-newsletter__submit-button-wrapper">
          <Button
            type="submit"
            variant="primary"
            size="md"
            disabled={disabled || isSubmitting}
            data-node-id="197:19730"
          >
            {isSubmitting ? "..." : submitButtonText}
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}

export default FormNewsletter;
