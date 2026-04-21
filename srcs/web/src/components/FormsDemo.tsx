import { Tabs } from "../ui/primitives/Tab";
import FormShippingDemo from "./FormShippingDemo";
import FormRegisterDemo from "./FormRegisterDemo";
import FormContactDemo from "./FormContactDemo";
import FormLogInDemo from "./FormLogInDemo";
import FormNewsletterDemo from "./FormNewsletterDemo";
import FormForgotPasswordDemo from "./FormForgotPasswordDemo";

export function FormsDemo() {
  return (
    <Tabs
      items={[
        {
          id: "form-shipping",
          label: "Form Shipping",
          content: <FormShippingDemo />,
        },
        {
          id: "form-register",
          label: "Form Register",
          content: <FormRegisterDemo />,
        },
        {
          id: "form-newsletter",
          label: "Form Newsletter",
          content: <FormNewsletterDemo />,
        },
        {
          id: "form-login",
          label: "Form Login",
          content: <FormLogInDemo />,
        },
        {
          id: "form-forgot-password",
          label: "Form Forgot Password",
          content: <FormForgotPasswordDemo />,
        },
        {
          id: "form-contact",
          label: "Form Contact",
          content: <FormContactDemo />,
        },
      ]}
      defaultActiveTab="form-shipping"
    />
  );
}
