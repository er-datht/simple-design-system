import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "../../../utils/cn";
import { InputFieldRHF } from "../../forms-rhf";
import { Button, ButtonGroup } from "../../primitives/Button";
import { TextLink } from "../../typography";
import { logInSchema, type LogInFormData } from "../schemas";
import "./form-log-in.css";

export type FormLogInProps = {
  /**
   * Form submission handler - receives validated form data
   */
  onSubmit?: (data: LogInFormData) => void | Promise<void>;

  /**
   * Email field placeholder
   * @default "Enter your email"
   */
  emailPlaceholder?: string;

  /**
   * Password field placeholder
   * @default "Enter your password"
   */
  passwordPlaceholder?: string;

  /**
   * Forgot password link click handler
   */
  onForgotPasswordClick?: () => void;

  /**
   * Sign in button text
   * @default "Sign In"
   */
  signInButtonText?: string;

  /**
   * Forgot password link text
   * @default "Forgot password?"
   */
  forgotPasswordText?: string;

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
 * FormLogIn component provides a complete login form with email, password fields, and forgot password link.
 * Uses react-hook-form for state management and Zod for validation.
 *
 * @example
 * // Basic usage with validated data
 * <FormLogIn
 *   onSubmit={(data) => handleLogin(data.email, data.password)}
 *   onForgotPasswordClick={() => navigate('/forgot-password')}
 * />
 *
 * @example
 * // With custom placeholders
 * <FormLogIn
 *   emailPlaceholder="your@email.com"
 *   passwordPlaceholder="••••••••"
 *   signInButtonText="Log In"
 *   onSubmit={async (data) => await login(data)}
 * />
 */
export function FormLogIn({
  onSubmit,
  emailPlaceholder = "Enter your email",
  passwordPlaceholder = "Enter your password",
  onForgotPasswordClick,
  signInButtonText = "Sign In",
  forgotPasswordText = "Forgot password?",
  disabled = false,
  className,
}: FormLogInProps) {
  const methods = useForm<LogInFormData>({
    resolver: zodResolver(logInSchema),
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { handleSubmit, formState } = methods;
  const isSubmitting = formState.isSubmitting;

  const onSubmitHandler = async (data: LogInFormData) => {
    await onSubmit?.(data);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        className={cn("form-log-in", className)}
        noValidate
        data-name="Form Log In"
        data-node-id="197:19740"
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
          data-node-id="2144:4295"
        />

        {/* Password Field */}
        <InputFieldRHF
          name="password"
          label="Password"
          type="password"
          placeholder={passwordPlaceholder}
          disabled={disabled || isSubmitting}
          required
          aria-required="true"
          data-node-id="2144:4304"
        />

        {/* Sign In Button Group */}
        <ButtonGroup
          align="justify"
          className="form-log-in__button-group"
          data-node-id="2167:17614"
        >
          <Button
            type="submit"
            variant="primary"
            size="md"
            disabled={disabled || isSubmitting}
            className="form-log-in__submit-button"
          >
            {isSubmitting ? "Signing In..." : signInButtonText}
          </Button>
        </ButtonGroup>

        {/* Forgot Password Link */}
        <TextLink
          text={forgotPasswordText}
          onClick={onForgotPasswordClick}
          data-node-id="2236:15494"
        />
      </form>
    </FormProvider>
  );
}

export default FormLogIn;
