import { useState } from "react";
import { FormNewsletter, type NewsletterFormData } from "../ui/forms";

export function FormNewsletterDemo() {
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (data: NewsletterFormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSubmitSuccess(true);
    alert(`Newsletter signup for: ${data.email}`);

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
          A simple newsletter signup form with automatic validation. The form
          validates email format and required fields using Zod schema.
        </p>
        <div className="max-w-md">
          <FormNewsletter
            onSubmit={(data) => {
              alert(`Newsletter signup for: ${data.email}`);
            }}
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
          <FormNewsletter disabled={true} />
        </div>
      </section>

      {/* Section: Custom Placeholder and Button Text */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          Custom Placeholder and Button Text
        </h2>
        <p className="text-gray-600 mb-6">
          Form with customized placeholder and submit button text.
        </p>
        <div className="max-w-md">
          <FormNewsletter
            emailPlaceholder="Enter your email address"
            submitButtonText="Subscribe"
            onSubmit={(data) => {
              alert(`Subscribed: ${data.email}`);
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
          submitting empty or with invalid data. Validation happens on blur and
          on submit.
        </p>
        <div className="max-w-md">
          {submitSuccess && (
            <div
              className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800"
              role="alert"
            >
              Successfully subscribed! Check your email for confirmation.
            </div>
          )}
          <FormNewsletter
            onSubmit={handleSubmit}
            submitButtonText="Subscribe"
          />
        </div>
      </section>

      {/* Section: Multiple Forms on Page */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          Multiple Forms on Page
        </h2>
        <p className="text-gray-600 mb-6">
          Demonstrates multiple newsletter forms with different configurations.
          Each form manages its own state independently.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-medium mb-3 text-gray-800">
              Footer Newsletter
            </h3>
            <FormNewsletter
              emailPlaceholder="your@email.com"
              submitButtonText="Join"
              onSubmit={(data) => alert(`Footer signup: ${data.email}`)}
            />
          </div>
          <div>
            <h3 className="text-lg font-medium mb-3 text-gray-800">
              Blog Newsletter
            </h3>
            <FormNewsletter
              emailPlaceholder="Enter email"
              submitButtonText="Sign Up"
              onSubmit={(data) => alert(`Blog signup: ${data.email}`)}
            />
          </div>
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
                <strong>Automatic State Management:</strong> No need to manage
                email state in parent component
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600">✓</span>
              <span>
                <strong>Built-in Validation:</strong> Zod schema validates
                email format and required fields
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600">✓</span>
              <span>
                <strong>Type-Safe Data:</strong> onSubmit receives fully typed
                and validated NewsletterFormData
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600">✓</span>
              <span>
                <strong>Loading States:</strong> Form automatically manages
                submitting state during async operations
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600">✓</span>
              <span>
                <strong>Error Messages:</strong> Validation errors display
                automatically below fields
              </span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default FormNewsletterDemo;
