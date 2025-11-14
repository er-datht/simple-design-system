import { useState } from "react";
import { CheckboxField } from "../ui/primitives/Input/CheckboxField";
import type { CheckboxValueType } from "../ui/primitives/Input/CheckboxField";

export function CheckboxFieldDemo() {
  // State for interactive examples
  const [termsAccepted, setTermsAccepted] =
    useState<CheckboxValueType>("Unchecked");
  const [newsletterAccepted, setNewsletterAccepted] =
    useState<CheckboxValueType>("Checked");
  const [selectAllState, setSelectAllState] =
    useState<CheckboxValueType>("Indeterminate");

  return (
    <div className="flex flex-col gap-12">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold mb-4">CheckboxField Component</h2>
        <p className="text-(--sds-color-text-default-secondary) mb-8">
          A composite form component that combines a checkbox input with an
          optional label and description text. Supports multiple states
          (checked, unchecked, indeterminate) and both enabled and disabled
          modes.
        </p>
      </div>

      {/* Basic Usage */}
      <section>
        <h3 className="text-xl font-semibold mb-4">
          Basic Usage (Uncontrolled)
        </h3>
        <p className="text-sm text-(--sds-color-text-default-secondary) mb-4">
          Component manages its own state internally. No state management
          needed.
        </p>
        <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
          <CheckboxField
            label="I agree to the terms and conditions"
            description="By checking this box, you accept our terms of service and privacy policy."
          />
        </div>
      </section>

      {/* All State Combinations */}
      <section>
        <h3 className="text-xl font-semibold mb-4">
          All State Combinations (6 Variants)
        </h3>
        <p className="text-sm text-(--sds-color-text-default-secondary) mb-4">
          These examples use controlled mode with fixed valueType props to
          showcase all visual states.
        </p>
        <div className="space-y-6">
          {/* Default State - Unchecked */}
          <div>
            <h4 className="text-lg font-medium mb-3">Default - Unchecked</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <CheckboxField
                label="Default unchecked checkbox"
                description="This is the default unchecked state with description text."
                state="Default"
                valueType="Unchecked"
              />
            </div>
          </div>

          {/* Default State - Checked */}
          <div>
            <h4 className="text-lg font-medium mb-3">Default - Checked</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <CheckboxField
                label="Default checked checkbox"
                description="This is the default checked state with description text."
                state="Default"
                valueType="Checked"
              />
            </div>
          </div>

          {/* Default State - Indeterminate */}
          <div>
            <h4 className="text-lg font-medium mb-3">
              Default - Indeterminate
            </h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <CheckboxField
                label="Default indeterminate checkbox"
                description="This is the indeterminate state, often used for 'select all' functionality."
                state="Default"
                valueType="Indeterminate"
              />
            </div>
          </div>

          {/* Disabled State - Unchecked */}
          <div>
            <h4 className="text-lg font-medium mb-3">Disabled - Unchecked</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <CheckboxField
                label="Disabled unchecked checkbox"
                description="This checkbox is disabled and cannot be interacted with."
                state="Disabled"
                valueType="Unchecked"
              />
            </div>
          </div>

          {/* Disabled State - Checked */}
          <div>
            <h4 className="text-lg font-medium mb-3">Disabled - Checked</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <CheckboxField
                label="Disabled checked checkbox"
                description="This checkbox is checked but disabled, preserving the selected state."
                state="Disabled"
                valueType="Checked"
              />
            </div>
          </div>

          {/* Disabled State - Indeterminate */}
          <div>
            <h4 className="text-lg font-medium mb-3">
              Disabled - Indeterminate
            </h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <CheckboxField
                label="Disabled indeterminate checkbox"
                description="This checkbox is in indeterminate state and disabled."
                state="Disabled"
                valueType="Indeterminate"
              />
            </div>
          </div>
        </div>
      </section>

      {/* With and Without Description */}
      <section>
        <h3 className="text-xl font-semibold mb-4">
          With and Without Description
        </h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-medium mb-3">With Description</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <div className="space-y-4">
                <CheckboxField
                  label="Enable notifications"
                  description="Receive email notifications about important updates."
                  hasDescription={true}
                  valueType="Checked"
                />
                <CheckboxField
                  label="Enable marketing emails"
                  description="Get promotional offers and product updates."
                  hasDescription={true}
                  valueType="Unchecked"
                />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-3">Without Description</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <div className="space-y-4">
                <CheckboxField
                  label="I accept the terms"
                  hasDescription={false}
                  valueType="Checked"
                />
                <CheckboxField
                  label="Subscribe to newsletter"
                  hasDescription={false}
                  valueType="Unchecked"
                />
                <CheckboxField
                  label="Select all items"
                  hasDescription={false}
                  valueType="Indeterminate"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Examples */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Interactive Examples</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-medium mb-3">
              User Consent Form (Controlled)
            </h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <div className="space-y-4">
                <CheckboxField
                  label="I agree to the terms and conditions"
                  description="You must accept our terms of service to continue."
                  valueType={termsAccepted}
                  onChange={(e) => {
                    setTermsAccepted(
                      e.target.checked ? "Checked" : "Unchecked"
                    );
                  }}
                />
                <CheckboxField
                  label="Subscribe to newsletter (optional)"
                  description="Receive updates about new features and products."
                  valueType={newsletterAccepted}
                  onChange={(e) => {
                    setNewsletterAccepted(
                      e.target.checked ? "Checked" : "Unchecked"
                    );
                  }}
                />
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <p className="text-sm text-(--sds-color-text-default-secondary)">
                    Current state: Terms {termsAccepted.toLowerCase()},{" "}
                    Newsletter {newsletterAccepted.toLowerCase()}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-3">
              Select All with Indeterminate State
            </h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <CheckboxField
                label="Select all notifications"
                description="Toggle all notification preferences at once."
                valueType={selectAllState}
                hasDescription={true}
                onChange={() => {
                  // Cycle through states: Unchecked -> Checked -> Indeterminate
                  if (selectAllState === "Unchecked") {
                    setSelectAllState("Checked");
                  } else if (selectAllState === "Checked") {
                    setSelectAllState("Indeterminate");
                  } else {
                    setSelectAllState("Unchecked");
                  }
                }}
              />
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-sm text-(--sds-color-text-default-secondary)">
                  Current state: {selectAllState} (click to cycle through
                  states)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real-world Examples */}
      <section>
        <h3 className="text-xl font-semibold mb-4">
          Real-world Examples (Uncontrolled)
        </h3>
        <p className="text-sm text-(--sds-color-text-default-secondary) mb-4">
          These examples use uncontrolled mode. Try clicking the checkboxes -
          they work!
        </p>
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-medium mb-3">Account Settings Form</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg bg-white">
              <div className="max-w-md">
                <h3 className="text-lg font-semibold mb-4">Privacy Settings</h3>
                <div className="space-y-4">
                  <CheckboxField
                    label="Make my profile public"
                    description="Your profile will be visible to all users."
                    defaultValueType="Checked"
                  />
                  <CheckboxField
                    label="Show my email address"
                    description="Other users can see your email on your profile."
                    defaultValueType="Unchecked"
                  />
                  <CheckboxField
                    label="Allow search engines to index my profile"
                    description="Your profile may appear in search results."
                    defaultValueType="Unchecked"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-3">
              Subscription Preferences
            </h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg bg-white">
              <div className="max-w-md">
                <h3 className="text-lg font-semibold mb-4">
                  Email Notifications
                </h3>
                <div className="space-y-4">
                  <CheckboxField
                    label="Product updates"
                    description="Get notified when we release new features."
                    defaultValueType="Checked"
                  />
                  <CheckboxField
                    label="Weekly digest"
                    description="A weekly summary of your activity."
                    defaultValueType="Checked"
                  />
                  <CheckboxField
                    label="Marketing emails"
                    description="Special offers and promotions."
                    defaultValueType="Unchecked"
                  />
                  <CheckboxField
                    label="Security alerts (required)"
                    description="Critical security notifications about your account."
                    state="Disabled"
                    valueType="Checked"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-3">Checkout Agreement</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg bg-white">
              <div className="max-w-md p-6 border border-gray-200 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">
                  Complete Your Order
                </h3>
                <div className="space-y-4 mb-6">
                  <CheckboxField
                    label="I agree to the terms and conditions"
                    description="Required to complete your purchase."
                    defaultValueType="Unchecked"
                  />
                  <CheckboxField
                    label="Save payment method for future purchases"
                    description="Your payment information will be securely stored."
                    defaultValueType="Checked"
                    hasDescription={true}
                  />
                </div>
                <button
                  className="w-full py-3 px-4 bg-(--sds-color-background-brand-default) text-white rounded-lg font-medium"
                  disabled
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Details */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Design Details</h3>
        <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
          <div className="space-y-4 text-sm">
            <div>
              <h4 className="font-semibold mb-2">Typography</h4>
              <ul className="space-y-1 text-(--sds-color-text-default-secondary)">
                <li>
                  Label: Inter, Regular 400, 16px, Line height 1.4, Color
                  #1e1e1e
                </li>
                <li>
                  Description: Inter, Regular 400, 16px, Line height 1.4, Color
                  #757575
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Colors</h4>
              <ul className="space-y-1 text-(--sds-color-text-default-secondary)">
                <li>Checked background: #2c2c2c</li>
                <li>Unchecked background: #ffffff</li>
                <li>Disabled background: #d9d9d9</li>
                <li>Unchecked border: #757575</li>
                <li>Disabled border: #b2b2b2</li>
                <li>Check icon: #f5f5f5</li>
                <li>Disabled icon: #b3b3b3</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Spacing & Sizing</h4>
              <ul className="space-y-1 text-(--sds-color-text-default-secondary)">
                <li>Checkbox size: 16x16px</li>
                <li>Border radius: 4px</li>
                <li>Gap between checkbox and label: 12px</li>
                <li>Container width: 240px</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Accessibility</h4>
              <ul className="space-y-1 text-(--sds-color-text-default-secondary)">
                <li>Keyboard accessible (Tab and Space key)</li>
                <li>aria-checked reflects state (true/false/mixed)</li>
                <li>aria-describedby links description to checkbox</li>
                <li>Label associated via htmlFor attribute</li>
                <li>WCAG AAA contrast for label text (21.2:1)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CheckboxFieldDemo;
