import { useState } from "react";
import { FormForgotPassword, type ForgotPasswordFormData } from "../ui/forms";

export function FormForgotPasswordDemo() {
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (data: ForgotPasswordFormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSubmitSuccess(true);
    alert(`Password reset link sent to: ${data.email}`);

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
          A simple password reset form with automatic email validation using
          Zod schema.
        </p>
        <div className="max-w-md">
          <FormForgotPassword
            onSubmit={(data) => {
              alert(`Password reset link sent to: ${data.email}`);
            }}
            onCancel={() => alert("Cancelled")}
          />
        </div>
      </section>

      {/* Section: Disabled Form */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          Disabled Form
        </h2>
        <p className="text-gray-600 mb-6">
          Form with all fields disabled, useful for read-only states.
        </p>
        <div className="max-w-md">
          <FormForgotPassword disabled={true} />
        </div>
      </section>

      {/* Section: Custom Button Text */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          Custom Button Text
        </h2>
        <p className="text-gray-600 mb-6">
          Form with customized button labels.
        </p>
        <div className="max-w-md">
          <FormForgotPassword
            emailPlaceholder="your.email@company.com"
            resetButtonText="Send Reset Link"
            cancelButtonText="Go Back"
            onCancel={() => alert("Going back...")}
            onSubmit={(data) => {
              alert(`Reset link sent to: ${data.email}`);
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
              Password reset link sent! Check your email.
            </div>
          )}
          <FormForgotPassword
            onSubmit={handleSubmit}
            onCancel={() => alert("Cancelled")}
            resetButtonText="Send Reset Link"
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
                <strong>No State Management Needed:</strong> Form handles email
                state internally
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600">✓</span>
              <span>
                <strong>Email Validation:</strong> Zod schema validates email
                format automatically
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600">✓</span>
              <span>
                <strong>Type-Safe Callback:</strong> onSubmit receives validated
                ForgotPasswordFormData
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600">✓</span>
              <span>
                <strong>Loading State:</strong> Submit button shows loading
                indicator during async operations
              </span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default FormForgotPasswordDemo;
