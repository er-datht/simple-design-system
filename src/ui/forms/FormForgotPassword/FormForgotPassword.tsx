import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "../../../utils/cn";
import { InputFieldRHF } from "../../forms-rhf";
import { Button, ButtonGroup } from "../../primitives/Button";
import { forgotPasswordSchema, type ForgotPasswordFormData } from "../schemas";
import "./form-forgot-password.css";

export type FormForgotPasswordProps = {
  /**
   * Form submission handler - receives validated form data
   */
  onSubmit?: (data: ForgotPasswordFormData) => void | Promise<void>;

  /**
   * Email field placeholder
   * @default "Enter your email"
   */
  emailPlaceholder?: string;

  /**
   * Cancel button click handler
   */
  onCancel?: () => void;

  /**
   * Reset password button text
   * @default "Reset Password"
   */
  resetButtonText?: string;

  /**
   * Cancel button text
   * @default "Cancel"
   */
  cancelButtonText?: string;

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
 * FormForgotPassword component provides a password recovery form with email input and action buttons.
 * Uses react-hook-form for state management and Zod for validation.
 *
 * @example
 * // Basic usage with validated data
 * <FormForgotPassword
 *   onSubmit={(data) => handlePasswordReset(data.email)}
 *   onCancel={() => navigate('/login')}
 * />
 *
 * @example
 * // With custom text
 * <FormForgotPassword
 *   emailPlaceholder="your@email.com"
 *   resetButtonText="Send Reset Link"
 *   onSubmit={async (data) => await resetPassword(data.email)}
 * />
 */
export function FormForgotPassword({
  onSubmit,
  emailPlaceholder = "Enter your email",
  onCancel,
  resetButtonText = "Reset Password",
  cancelButtonText = "Cancel",
  disabled = false,
  className,
}: FormForgotPasswordProps) {
  const methods = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    mode: "onBlur",
    defaultValues: {
      email: "",
    },
  });

  const { handleSubmit, formState } = methods;
  const isSubmitting = formState.isSubmitting;

  const onSubmitHandler = async (data: ForgotPasswordFormData) => {
    await onSubmit?.(data);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        className={cn("form-forgot-password", className)}
        noValidate
        data-name="Form Forgot Password"
        data-node-id="197:19744"
      >
        {/* Email Field */}
        <InputFieldRHF
          name="email"
          label="Email"
          type="email"
          placeholder={emailPlaceholder}
          disabled={disabled || isSubmitting}
          required
          aria-required="true"
          data-node-id="2144:4343"
        />

        {/* Button Group */}
        <ButtonGroup
          align="center"
          className="form-forgot-password__button-group"
          data-node-id="2143:14917"
        >
          <Button
            type="button"
            variant="neutral"
            size="md"
            disabled={disabled || isSubmitting}
            onClick={onCancel}
          >
            {cancelButtonText}
          </Button>
          <Button
            type="submit"
            variant="primary"
            size="md"
            disabled={disabled || isSubmitting}
          >
            {isSubmitting ? "Resetting..." : resetButtonText}
          </Button>
        </ButtonGroup>
      </form>
    </FormProvider>
  );
}

export default FormForgotPassword;
