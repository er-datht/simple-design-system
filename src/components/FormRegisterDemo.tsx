import { useState } from "react";
import { FormRegister, type RegisterFormData } from "../ui/forms";

export function FormRegisterDemo() {
  const [submittedData, setSubmittedData] = useState<RegisterFormData | null>(
    null
  );

  const handleRegister = async (formData: RegisterFormData) => {
    setSubmittedData(null);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setSubmittedData(formData);
    alert(`Registration successful!\nEmail: ${formData.email}`);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b border-gray-200 pb-4">
        <h1 className="text-3xl font-bold text-gray-900">
          FormRegister Component
        </h1>
        <p className="mt-2 text-gray-600">
          A registration form component using react-hook-form and Zod for
          validation. Combines email and password input fields with a terms
          acceptance checkbox. Designed for user sign-up flows with validation
          support and accessibility best practices.
        </p>
        <a
          href="https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=197:19742"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block text-blue-600 hover:text-blue-800 underline"
        >
          View in Figma
        </a>
      </div>

      {/* Example 1: Default Form */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          1. Default Form - Basic Usage
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          The default FormRegister with all standard labels and placeholders.
          Includes built-in Zod validation for email format (with uppercase,
          lowercase, and number requirement), password length (min 8 characters),
          and terms acceptance.
        </p>
        <div className="border-2 border-dashed border-amber-300 rounded-lg p-6 bg-amber-50 flex justify-center">
          <FormRegister onSubmit={handleRegister} />
        </div>
      </section>

      {/* Example 2: Custom Labels and Descriptions */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          2. Custom Labels and Descriptions
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          FormRegister with customized labels, placeholders, and descriptions
          for all fields. Perfect for localization or specific use cases.
        </p>
        <div className="border-2 border-dashed border-blue-300 rounded-lg p-6 bg-blue-50 flex justify-center">
          <FormRegister
            emailLabel="Email Address"
            emailPlaceholder="you@example.com"
            emailDescription="We'll never share your email with anyone else"
            passwordLabel="Create Password"
            passwordPlaceholder="Enter a secure password"
            passwordDescription="Must be at least 8 characters long with uppercase, lowercase, and number"
            checkboxLabel="I agree to the Terms of Service"
            checkboxDescription="By checking this box, you agree to our Terms of Service and Privacy Policy"
            submitButtonLabel="Create Account"
            onSubmit={handleRegister}
          />
        </div>
      </section>

      {/* Example 3: Disabled State */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          3. Disabled State
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          FormRegister with all fields disabled. Useful when registration is
          temporarily unavailable.
        </p>
        <div className="border-2 border-dashed border-purple-300 rounded-lg p-6 bg-purple-50 flex justify-center">
          <FormRegister
            disabled={true}
            emailLabel="Email"
            passwordLabel="Password"
          />
        </div>
      </section>

      {/* Validation Rules */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Built-in Validation (Zod Schema)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>✓ Required field</li>
              <li>✓ Must be valid email format</li>
              <li>✓ Auto-trimmed and lowercased on submit</li>
            </ul>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Password</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>✓ Required field</li>
              <li>✓ Minimum 8 characters</li>
              <li>✓ Must contain uppercase letter</li>
              <li>✓ Must contain lowercase letter</li>
              <li>✓ Must contain number</li>
            </ul>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Terms</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>✓ Required acceptance</li>
              <li>✓ Must be checked to submit</li>
              <li>✓ Error shown if unchecked</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Key Features with React Hook Form
        </h2>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <ul className="space-y-2 text-sm text-blue-900">
            <li className="flex items-start gap-2">
              <span className="text-blue-600">✓</span>
              <span>
                <strong>No State Management:</strong> Form handles all field
                state internally
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600">✓</span>
              <span>
                <strong>Zod Schema Validation:</strong> Type-safe validation
                with comprehensive rules
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600">✓</span>
              <span>
                <strong>Type-Safe Data:</strong> onSubmit receives validated
                RegisterFormData
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600">✓</span>
              <span>
                <strong>Smart Validation:</strong> Validates on blur and on
                submit for optimal UX
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Submitted Data Display */}
      {submittedData && (
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Last Submitted Data
          </h2>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <pre className="text-sm">
              <code>
                {JSON.stringify(
                  {
                    email: submittedData.email,
                    password: "[REDACTED]",
                    acceptTerms: submittedData.acceptTerms,
                  },
                  null,
                  2
                )}
              </code>
            </pre>
          </div>
        </section>
      )}
    </div>
  );
}

export default FormRegisterDemo;
