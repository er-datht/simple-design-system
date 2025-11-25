import { useState } from "react";
import { FormContact, type ContactFormData } from "../ui/forms";

export function FormContactDemo() {
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (data: ContactFormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSubmitSuccess(true);
    alert(
      `Form submitted!\nName: ${data.name}\nSurname: ${data.surname}\nEmail: ${data.email}\nMessage: ${data.message}`
    );

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
          A comprehensive contact form with automatic validation for all fields
          using Zod schema.
        </p>
        <div className="max-w-md">
          <FormContact
            onSubmit={(data) => {
              alert(
                `Form submitted!\nName: ${data.name}\nSurname: ${data.surname}\nEmail: ${data.email}\nMessage: ${data.message}`
              );
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
          Form with all fields disabled, useful for read-only states or when
          loading.
        </p>
        <div className="max-w-md">
          <FormContact disabled={true} />
        </div>
      </section>

      {/* Section: Form with Custom Placeholders */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          Custom Placeholders
        </h2>
        <p className="text-gray-600 mb-6">
          Form with customized placeholder text for each field.
        </p>
        <div className="max-w-md">
          <FormContact
            namePlaceholder="First name"
            surnamePlaceholder="Last name"
            emailPlaceholder="your.email@company.com"
            messagePlaceholder="Tell us about your project..."
            submitButtonText="Send Message"
            onSubmit={(data) => {
              alert(`Message sent from ${data.name} ${data.surname}`);
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
          submitting empty or with invalid data. Validation includes:
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Name and surname required</li>
            <li>Valid email format</li>
            <li>Message min 10 characters, max 500 characters</li>
          </ul>
        </p>
        <div className="max-w-md">
          {submitSuccess && (
            <div
              className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800"
              role="alert"
            >
              Message sent successfully! We'll get back to you soon.
            </div>
          )}
          <FormContact onSubmit={handleSubmit} submitButtonText="Send Message" />
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
                <strong>Zero State Management:</strong> No need to manage 4
                separate field states in parent
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600">✓</span>
              <span>
                <strong>Comprehensive Validation:</strong> All fields validated
                with appropriate rules
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600">✓</span>
              <span>
                <strong>Type-Safe Data:</strong> onSubmit receives validated
                ContactFormData
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600">✓</span>
              <span>
                <strong>Smart Validation:</strong> Validates on blur and on
                submit for better UX
              </span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default FormContactDemo;
