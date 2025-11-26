import { useState } from "react";
import { FormShipping, type ShippingFormData } from "../ui/forms";
import { Button } from "../ui/primitives/Button";

export function FormShippingDemo() {
  const [submitted, setSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<ShippingFormData | null>(
    null
  );

  const handleSubmit = async (data: ShippingFormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubmitted(true);
    setSubmittedData(data);
    alert(
      `Form submitted successfully!\n\nData:\n${JSON.stringify(data, null, 2)}`
    );

    // Reset success message after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleReset = () => {
    setSubmitted(false);
    setSubmittedData(null);
  };

  return (
    <div className="space-y-8 py-8">
      {/* Demo Title */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          FormShipping Demo
        </h2>
        <p className="text-gray-600">
          A complete form section for collecting shipping information with
          automatic validation using react-hook-form and Zod.
        </p>
      </div>

      {/* Default Usage */}
      <section>
        <h3 className="text-lg font-medium text-gray-800 mb-4">
          Default Usage
        </h3>
        <div className="max-w-md">
          <FormShipping
            onSubmit={(data) => {
              alert(`Shipping info saved:\n${JSON.stringify(data, null, 2)}`);
            }}
            buttons={
              <Button variant="primary" type="submit">
                Save shipping information
              </Button>
            }
          />
        </div>
      </section>

      {/* Full Validation Example */}
      <section>
        <h3 className="text-lg font-medium text-gray-800 mb-4">
          Full Validation Example
        </h3>
        <div className="text-gray-600 mb-4">
          <p>
            Try submitting with empty fields or invalid data. Validation
            includes:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Full name required</li>
            <li>Location selection required</li>
            <li>Delivery note optional</li>
            <li>Terms acceptance required</li>
          </ul>
        </div>
        <div className="max-w-md">
          <FormShipping
            onSubmit={handleSubmit}
            buttons={
              <>
                <Button variant="subtle" type="button" onClick={handleReset}>
                  Reset
                </Button>
                <Button variant="primary" type="submit">
                  Save shipping information
                </Button>
              </>
            }
          />
        </div>
        {submitted && (
          <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-md">
            <p className="text-green-800 text-sm">
              Form submitted successfully!
            </p>
          </div>
        )}
        {submittedData && (
          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-md">
            <h4 className="font-semibold text-blue-900 mb-2">
              Submitted Data:
            </h4>
            <pre className="text-sm text-blue-800 overflow-x-auto">
              {JSON.stringify(submittedData, null, 2)}
            </pre>
          </div>
        )}
      </section>

      {/* Custom Labels */}
      <section>
        <h3 className="text-lg font-medium text-gray-800 mb-4">
          Custom Labels and Heading
        </h3>
        <div className="max-w-md">
          <FormShipping
            heading="Delivery Details"
            subheading="Enter your shipping preferences below"
            fullNameLabel="Recipient Name"
            locationLabel="Shipping Region"
            deliveryNoteLabel="Additional Instructions"
            acceptTermsLabel="I agree to the shipping policy"
            acceptTermsDescription="View our shipping policy"
            locationOptions={[
              { label: "North America", value: "na" },
              { label: "Europe", value: "eu" },
              { label: "Asia Pacific", value: "apac" },
              { label: "South America", value: "sa" },
            ]}
            onSubmit={(data) => {
              alert(
                `Delivery details saved:\n${JSON.stringify(data, null, 2)}`
              );
            }}
            buttons={
              <Button variant="primary" type="submit">
                Confirm delivery details
              </Button>
            }
          />
        </div>
      </section>

      {/* Multiple Buttons */}
      <section>
        <h3 className="text-lg font-medium text-gray-800 mb-4">
          Multiple Action Buttons
        </h3>
        <div className="max-w-md">
          <FormShipping
            onSubmit={(data) => {
              alert(`Form submitted:\n${JSON.stringify(data, null, 2)}`);
            }}
            buttons={
              <>
                <Button variant="subtle" type="button">
                  Cancel
                </Button>
                <Button variant="neutral" type="button">
                  Save as Draft
                </Button>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </>
            }
          />
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
                <strong>Zero Boilerplate:</strong> No need to manage 4 field
                states in parent
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600">✓</span>
              <span>
                <strong>Smart Validation:</strong> Zod schema validates all
                required fields
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600">✓</span>
              <span>
                <strong>Type-Safe Data:</strong> onSubmit receives validated
                ShippingFormData
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600">✓</span>
              <span>
                <strong>Flexible Buttons:</strong> Custom button area accepts
                any ReactNode
              </span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default FormShippingDemo;
