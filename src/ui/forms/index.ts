/**
 * Form Components
 * Centralized exports for all form section components
 */

// Contact Form
export { FormContact, type FormContactProps } from "./FormContact";

// Forgot Password Form
export {
  FormForgotPassword,
  type FormForgotPasswordProps,
} from "./FormForgotPassword";

// Log In Form
export { FormLogIn, type FormLogInProps } from "./FormLogIn";

// Newsletter Form
export { FormNewsletter, type FormNewsletterProps } from "./FormNewsletter";

// Register Form
export {
  FormRegister,
  type FormRegisterProps,
  type RegisterFormData,
} from "./FormRegister";

// Shipping Form
export { FormShipping, type FormShippingProps } from "./FormShipping";

// Form Data Types
export type {
  ContactFormData,
  ForgotPasswordFormData,
  LogInFormData,
  NewsletterFormData,
  ShippingFormData,
} from "./schemas";
