import { useState } from "react";
import { FormLogIn, type LogInFormData } from "../ui/forms";

export function FormLogInDemo() {
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (data: LogInFormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSubmitSuccess(true);
    alert(`Logging in...\nEmail: ${data.email}\nPassword: ${data.password}`);

    // Reset success message after 3 seconds
    setTimeout(() => setSubmitSuccess(false), 3000);
  };

  return (
    <div className="space-y-12 p-6">
      {/* Section: Basic Form */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          Basic Form
        </h2>
        <p className="text-gray-600 mb-6">
          A simple login form with automatic validation for email format and
          required fields using Zod schema.
        </p>
        <div className="max-w-md">
          <FormLogIn
            onSubmit={(data) => {
              alert(
                `Logging in...\nEmail: ${data.email}\nPassword: ${data.password}`
              );
            }}
            onForgotPasswordClick={() => alert("Forgot password clicked")}
          />
        </div>
      </section>

      {/* Section: Disabled Form */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          Disabled Form
        </h2>
        <p className="text-gray-600 mb-6">
          Form with all fields disabled, useful for read-only states or when
          loading.
        </p>
        <div className="max-w-md">
          <FormLogIn disabled={true} />
        </div>
      </section>

      {/* Section: Custom Placeholders and Text */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          Custom Placeholders and Text
        </h2>
        <p className="text-gray-600 mb-6">
          Form with customized placeholder text and button labels.
        </p>
        <div className="max-w-md">
          <FormLogIn
            emailPlaceholder="your.email@company.com"
            passwordPlaceholder="Your password"
            signInButtonText="Log In"
            forgotPasswordText="Can't remember your password?"
            onForgotPasswordClick={() =>
              alert("Redirecting to password reset...")
            }
            onSubmit={(data) => {
              alert(`Logging in as: ${data.email}`);
            }}
          />
        </div>
      </section>

      {/* Section: Full Validation Example */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          Full Validation Example
        </h2>
        <p className="text-gray-600 mb-6">
          Complete form with built-in validation and submission handling. Try
          submitting empty or with invalid data.
        </p>
        <div className="max-w-md">
          {submitSuccess && (
            <div
              className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800"
              role="alert"
            >
              Successfully logged in! Redirecting to dashboard...
            </div>
          )}
          <FormLogIn
            onSubmit={handleSubmit}
            onForgotPasswordClick={() => alert("Forgot password clicked")}
            signInButtonText="Log In"
          />
        </div>
      </section>

      {/* Section: Key Features */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          Key Features with React Hook Form
        </h2>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <ul className="space-y-2 text-sm text-blue-900">
            <li className="flex items-start gap-2">
              <span className="text-blue-600">✓</span>
              <span>
                <strong>No State Management:</strong> Form handles email and
                password state internally
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600">✓</span>
              <span>
                <strong>Built-in Validation:</strong> Email format and required
                fields validated automatically
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600">✓</span>
              <span>
                <strong>Type-Safe Data:</strong> onSubmit receives validated
                LogInFormData
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600">✓</span>
              <span>
                <strong>Loading States:</strong> Automatic submitting state
                during async operations
              </span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default FormLogInDemo;
