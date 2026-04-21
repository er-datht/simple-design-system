import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "../../../utils/cn";
import { InputFieldRHF, CheckboxFieldRHF } from "../../forms-rhf";
import { ButtonGroup, Button } from "../../primitives/Button";
import { registerSchema, type RegisterFormData } from "../schemas";
import "./form-register.css";

/**
 * Props for the FormRegister component
 */
export interface FormRegisterProps {
  /**
   * Callback when form is submitted with valid data
   */
  onSubmit?: (formData: RegisterFormData) => Promise<void> | void;

  /**
   * Additional CSS classes for the root container
   */
  className?: string;

  /**
   * Email field label
   * @default "Email"
   */
  emailLabel?: string;

  /**
   * Password field label
   * @default "Password"
   */
  passwordLabel?: string;

  /**
   * Email field placeholder
   * @default "Value"
   */
  emailPlaceholder?: string;

  /**
   * Password field placeholder
   * @default "Value"
   */
  passwordPlaceholder?: string;

  /**
   * Email field description/helper text
   */
  emailDescription?: string;

  /**
   * Password field description/helper text
   */
  passwordDescription?: string;

  /**
   * Checkbox label text
   * @default "Label"
   */
  checkboxLabel?: string;

  /**
   * Checkbox description text
   * @default "Description"
   */
  checkboxDescription?: string;

  /**
   * Submit button label
   * @default "Register"
   */
  submitButtonLabel?: string;

  /**
   * Whether to disable the entire form
   * @default false
   */
  disabled?: boolean;
}

/**
 * FormRegister component provides a registration form with email, password,
 * and terms acceptance fields. Uses react-hook-form for state management
 * and Zod for validation with accessibility best practices.
 *
 * **Figma Source:** [Form Register Component](https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=197:19742)
 *
 * @example
 * // Basic usage with validated data
 * <FormRegister
 *   onSubmit={async (data) => {
 *     console.log(data.email, data.password, data.acceptTerms);
 *     await registerUser(data);
 *   }}
 * />
 *
 * @example
 * // With custom labels and descriptions
 * <FormRegister
 *   emailLabel="Email Address"
 *   emailDescription="We'll never share your email"
 *   passwordLabel="Create Password"
 *   passwordDescription="Must be at least 8 characters"
 *   checkboxLabel="I agree to the Terms of Service"
 *   checkboxDescription="By checking this, you agree to our policies"
 *   submitButtonLabel="Create Account"
 *   onSubmit={async (data) => await handleRegister(data)}
 * />
 */
export function FormRegister({
  onSubmit,
  className,
  emailLabel = "Email",
  passwordLabel = "Password",
  emailPlaceholder = "Value",
  passwordPlaceholder = "Value",
  emailDescription,
  passwordDescription,
  checkboxLabel = "Label",
  checkboxDescription = "Description",
  submitButtonLabel = "Register",
  disabled = false,
}: FormRegisterProps) {
  const methods = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
      acceptTerms: false,
    },
  });

  const { handleSubmit, formState } = methods;
  const isSubmitting = formState.isSubmitting;
  const isFormDisabled = disabled || isSubmitting;

  const onSubmitHandler = async (data: RegisterFormData) => {
    // Normalize email before submission
    const normalizedData: RegisterFormData = {
      ...data,
      email: data.email.trim().toLowerCase(),
    };

    await onSubmit?.(normalizedData);
  };

  return (
    <FormProvider {...methods}>
      <form
        className={cn("form-register", className)}
        onSubmit={handleSubmit(onSubmitHandler)}
        noValidate
        data-name="FormRegister"
        data-node-id="197:19742"
      >
        {/* Email Input Field */}
        <InputFieldRHF
          name="email"
          label={emailLabel}
          type="email"
          placeholder={emailPlaceholder}
          description={emailDescription}
          disabled={isFormDisabled}
          autoComplete="email"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck={false}
          className="form-register__field"
          data-node-id="2144:4323"
        />

        {/* Password Input Field */}
        <InputFieldRHF
          name="password"
          label={passwordLabel}
          type="password"
          placeholder={passwordPlaceholder}
          description={passwordDescription}
          disabled={isFormDisabled}
          autoComplete="new-password"
          className="form-register__field"
          data-node-id="2144:4314"
        />

        {/* Terms Checkbox Field */}
        <CheckboxFieldRHF
          name="acceptTerms"
          label={checkboxLabel}
          description={checkboxDescription}
          disabled={isFormDisabled}
          className="form-register__checkbox"
          data-node-id="2144:4332"
        />

        {/* Button Group */}
        <ButtonGroup
          align="justify"
          className="form-register__button-group"
          data-node-id="2167:17639"
        >
          <Button
            type="submit"
            variant="primary"
            size="md"
            disabled={isFormDisabled}
            className="form-register__submit-button"
            aria-busy={isSubmitting}
          >
            {isSubmitting ? "Registering..." : submitButtonLabel}
          </Button>
        </ButtonGroup>
      </form>
    </FormProvider>
  );
}

export default FormRegister;

// Export the type from schemas for backward compatibility
export type { RegisterFormData } from "../schemas";
