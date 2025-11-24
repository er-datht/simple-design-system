import { useState } from "react";
import { CheckboxField } from "../ui/primitives/Input/CheckboxField";

export function CheckboxFieldDemo() {
  const [isChecked, setIsChecked] = useState(false);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const allItems = ["Option 1", "Option 2", "Option 3"];
  const allSelected = selectedItems.length === allItems.length;
  const someSelected =
    selectedItems.length > 0 && selectedItems.length < allItems.length;

  const handleSelectAll = () => {
    if (allSelected) {
      setSelectedItems([]);
    } else {
      setSelectedItems([...allItems]);
    }
  };

  const handleItemToggle = (item: string) => {
    setSelectedItems((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  return (
    <div className="space-y-12">
      {/* Header */}
      <section>
        <h2 className="text-3xl font-bold mb-4">CheckboxField</h2>
        <p className="text-lg text-gray-600 mb-4">
          A form input component that allows users to select one or more options
          from a set. It combines a checkbox input element with a label and
          optional description text, supporting multiple states (checked,
          unchecked, indeterminate) and interaction states (default, disabled).
        </p>
        <p className="text-sm text-gray-500">
          <strong>Figma Source:</strong>{" "}
          <a
            href="https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=9762:1441"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            CheckboxField Component
          </a>
        </p>
      </section>

      {/* Basic Usage */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">Basic Usage</h3>
        <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
          <CheckboxField label="Accept terms and conditions" />
        </div>
        <div className="mt-4 bg-gray-50 p-4 rounded">
          <code className="text-sm">{`<CheckboxField label="Accept terms and conditions" />`}</code>
        </div>
      </section>

      {/* With Description */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">With Description</h3>
        <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
          <CheckboxField
            label="Subscribe to newsletter"
            description="Receive updates about new features and promotions"
          />
        </div>
        <div className="mt-4 bg-gray-50 p-4 rounded">
          <code className="text-sm whitespace-pre">{`<CheckboxField
  label="Subscribe to newsletter"
  description="Receive updates about new features and promotions"
/>`}</code>
        </div>
      </section>

      {/* All Value Types - Default State */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">
          Value Types (Default State)
        </h3>
        <div className="grid gap-6">
          <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
            <p className="text-sm text-gray-500 mb-4 font-medium">Unchecked</p>
            <CheckboxField
              label="Unchecked option"
              description="This checkbox is not selected"
              isChecked={false}
            />
          </div>
          <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
            <p className="text-sm text-gray-500 mb-4 font-medium">Checked</p>
            <CheckboxField
              label="Checked option"
              description="This checkbox is selected"
              isChecked
            />
          </div>
          <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
            <p className="text-sm text-gray-500 mb-4 font-medium">
              Indeterminate
            </p>
            <CheckboxField
              label="Indeterminate option"
              description="Represents partial selection in nested checkboxes"
              isIndeterminate
            />
          </div>
        </div>
      </section>

      {/* Disabled States */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">Disabled States</h3>
        <div className="grid gap-6">
          <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
            <p className="text-sm text-gray-500 mb-4 font-medium">
              Disabled - Unchecked
            </p>
            <CheckboxField
              label="Disabled unchecked"
              description="This option is not available"
              disabled
              isChecked={false}
            />
          </div>
          <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
            <p className="text-sm text-gray-500 mb-4 font-medium">
              Disabled - Checked
            </p>
            <CheckboxField
              label="Disabled checked"
              description="This option is selected but cannot be changed"
              disabled
              isChecked
            />
          </div>
          <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
            <p className="text-sm text-gray-500 mb-4 font-medium">
              Disabled - Indeterminate
            </p>
            <CheckboxField
              label="Disabled indeterminate"
              description="Partial selection state, cannot be modified"
              disabled
              isIndeterminate
            />
          </div>
        </div>
      </section>

      {/* Error States */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">Error States</h3>
        <div className="grid gap-6">
          <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
            <p className="text-sm text-gray-500 mb-4 font-medium">
              Error - Unchecked
            </p>
            <CheckboxField
              label="I accept the terms and conditions"
              description="You must accept the terms to continue"
              errorMessage="Please accept the terms and conditions"
              isChecked={false}
            />
          </div>
          <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
            <p className="text-sm text-gray-500 mb-4 font-medium">
              Error - Checked
            </p>
            <CheckboxField
              label="Send me promotional emails"
              errorMessage="This option conflicts with your privacy settings"
              isChecked
            />
          </div>
        </div>
      </section>

      {/* Interactive Example - Simple Toggle */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">Interactive Example</h3>
        <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
          <CheckboxField
            label="Enable notifications"
            description="Receive push notifications for important updates"
            isChecked={isChecked}
            onChange={(checked) => setIsChecked(checked)}
          />
          <p className="text-sm text-gray-500 mt-4">
            Current state:{" "}
            <strong>{isChecked ? "Checked" : "Unchecked"}</strong>
          </p>
        </div>
        <div className="mt-4 bg-gray-50 p-4 rounded">
          <code className="text-sm whitespace-pre">{`const [isChecked, setIsChecked] = useState(false);

<CheckboxField
  label="Enable notifications"
  description="Receive push notifications for important updates"
  isChecked={isChecked}
  onChange={(checked) => setIsChecked(checked)}
/>`}</code>
        </div>
      </section>

      {/* Real-world Example - Select All Pattern */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">Real-world Examples</h3>

        {/* Select All Pattern */}
        <div className="mb-8">
          <h4 className="text-lg font-medium mb-4">Select All Pattern</h4>
          <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
            <div className="space-y-4">
              <CheckboxField
                label="Select all options"
                isChecked={allSelected}
                isIndeterminate={someSelected}
                onChange={handleSelectAll}
              />
              <div className="ml-6 space-y-2">
                {allItems.map((item) => (
                  <CheckboxField
                    key={item}
                    label={item}
                    isChecked={selectedItems.includes(item)}
                    onChange={() => handleItemToggle(item)}
                  />
                ))}
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Selected: {selectedItems.length} of {allItems.length}
            </p>
          </div>
        </div>

        {/* Terms and Conditions */}
        <div className="mb-8">
          <h4 className="text-lg font-medium mb-4">
            Terms and Conditions Form
          </h4>
          <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
            <div className="space-y-4">
              <CheckboxField
                label="I agree to the Terms of Service"
                description="You must agree to our Terms of Service to create an account"
              />
              <CheckboxField
                label="I agree to the Privacy Policy"
                description="Learn how we collect, use, and protect your data"
              />
              <CheckboxField
                label="Subscribe to marketing emails"
                description="Receive news, updates, and promotional offers (optional)"
              />
            </div>
          </div>
        </div>

        {/* Settings Panel */}
        <div>
          <h4 className="text-lg font-medium mb-4">Settings Panel</h4>
          <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
            <div className="space-y-4">
              <CheckboxField
                label="Enable dark mode"
                description="Switch to dark theme for better viewing at night"
                isChecked
              />
              <CheckboxField
                label="Auto-save documents"
                description="Automatically save your work every 5 minutes"
                isChecked
              />
              <CheckboxField
                label="Enable spell check"
                description="Highlight spelling errors as you type"
                disabled
                isChecked
              />
            </div>
          </div>
        </div>
      </section>

      {/* Design Tokens Used */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">Design Tokens Used</h3>
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Colors</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <code className="bg-gray-200 px-1 rounded">
                    --sds-color-background-default-default
                  </code>{" "}
                  - Unchecked background
                </li>
                <li>
                  <code className="bg-gray-200 px-1 rounded">
                    --sds-color-background-brand-default
                  </code>{" "}
                  - Checked/Indeterminate background
                </li>
                <li>
                  <code className="bg-gray-200 px-1 rounded">
                    --sds-color-background-disabled-default
                  </code>{" "}
                  - Disabled background
                </li>
                <li>
                  <code className="bg-gray-200 px-1 rounded">
                    --sds-color-text-default-default
                  </code>{" "}
                  - Label text
                </li>
                <li>
                  <code className="bg-gray-200 px-1 rounded">
                    --sds-color-text-default-secondary
                  </code>{" "}
                  - Description text
                </li>
                <li>
                  <code className="bg-gray-200 px-1 rounded">
                    --sds-color-border-brand-tertiary
                  </code>{" "}
                  - Unchecked border
                </li>
                <li>
                  <code className="bg-gray-200 px-1 rounded">
                    --sds-color-icon-brand-on-brand
                  </code>{" "}
                  - Icon on dark background
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Typography & Spacing</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <code className="bg-gray-200 px-1 rounded">
                    --sds-typography-body-font-family
                  </code>{" "}
                  - Inter font
                </li>
                <li>
                  <code className="bg-gray-200 px-1 rounded">
                    --sds-typography-body-size-medium
                  </code>{" "}
                  - 16px text
                </li>
                <li>
                  <code className="bg-gray-200 px-1 rounded">
                    --sds-typography-body-font-weight-regular
                  </code>{" "}
                  - 400 weight
                </li>
                <li>
                  <code className="bg-gray-200 px-1 rounded">
                    --sds-size-space-300
                  </code>{" "}
                  - 12px gap
                </li>
                <li>
                  <code className="bg-gray-200 px-1 rounded">
                    --sds-size-radius-100
                  </code>{" "}
                  - 4px border radius
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Accessibility Features */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">Accessibility Features</h3>
        <div className="bg-gray-50 p-6 rounded-lg">
          <ul className="space-y-3 text-sm">
            <li className="flex items-start">
              <span className="text-green-600 mr-2 mt-0.5">&#10003;</span>
              <span>
                <strong>Semantic HTML:</strong> Uses native{" "}
                <code className="bg-gray-200 px-1 rounded">
                  &lt;input type="checkbox"&gt;
                </code>{" "}
                element for proper form behavior
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2 mt-0.5">&#10003;</span>
              <span>
                <strong>Label Association:</strong> Label is connected to input
                via <code className="bg-gray-200 px-1 rounded">htmlFor</code>/
                <code className="bg-gray-200 px-1 rounded">id</code> attributes
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2 mt-0.5">&#10003;</span>
              <span>
                <strong>ARIA Attributes:</strong> Uses{" "}
                <code className="bg-gray-200 px-1 rounded">
                  aria-checked="mixed"
                </code>{" "}
                for indeterminate state and{" "}
                <code className="bg-gray-200 px-1 rounded">
                  aria-describedby
                </code>{" "}
                for description
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2 mt-0.5">&#10003;</span>
              <span>
                <strong>Keyboard Navigation:</strong> Supports Tab for focus and
                Space to toggle
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2 mt-0.5">&#10003;</span>
              <span>
                <strong>Focus Indicator:</strong> Clear outline ring when
                focused via keyboard
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2 mt-0.5">&#10003;</span>
              <span>
                <strong>Disabled State:</strong> Native{" "}
                <code className="bg-gray-200 px-1 rounded">disabled</code>{" "}
                attribute prevents interaction and removes from tab order
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Props Reference */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">Props Reference</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">
                  Prop
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">
                  Type
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">
                  Default
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 text-sm font-mono">label</td>
                <td className="px-4 py-3 text-sm font-mono">string</td>
                <td className="px-4 py-3 text-sm">-</td>
                <td className="px-4 py-3 text-sm">
                  Text content for the main label. When provided, label is
                  displayed.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono">description</td>
                <td className="px-4 py-3 text-sm font-mono">string</td>
                <td className="px-4 py-3 text-sm">-</td>
                <td className="px-4 py-3 text-sm">
                  Text for the description section. When provided, description
                  row is displayed.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono">disabled</td>
                <td className="px-4 py-3 text-sm font-mono">boolean</td>
                <td className="px-4 py-3 text-sm">false</td>
                <td className="px-4 py-3 text-sm">
                  Whether the field is disabled.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono">errorMessage</td>
                <td className="px-4 py-3 text-sm font-mono">string</td>
                <td className="px-4 py-3 text-sm">-</td>
                <td className="px-4 py-3 text-sm">
                  Error message text. When provided, shows error state.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono">isChecked</td>
                <td className="px-4 py-3 text-sm font-mono">boolean</td>
                <td className="px-4 py-3 text-sm">-</td>
                <td className="px-4 py-3 text-sm">
                  Whether the checkbox is checked (controlled mode). If not
                  provided, component manages its own state.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono">defaultIsChecked</td>
                <td className="px-4 py-3 text-sm font-mono">boolean</td>
                <td className="px-4 py-3 text-sm">false</td>
                <td className="px-4 py-3 text-sm">
                  Default checked state for uncontrolled mode.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono">isIndeterminate</td>
                <td className="px-4 py-3 text-sm font-mono">boolean</td>
                <td className="px-4 py-3 text-sm">false</td>
                <td className="px-4 py-3 text-sm">
                  Whether the checkbox is in indeterminate state.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono">onChange</td>
                <td className="px-4 py-3 text-sm font-mono">
                  (checked: boolean) =&gt; void
                </td>
                <td className="px-4 py-3 text-sm">-</td>
                <td className="px-4 py-3 text-sm">
                  Change handler called when checkbox state changes.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono">className</td>
                <td className="px-4 py-3 text-sm font-mono">string</td>
                <td className="px-4 py-3 text-sm">-</td>
                <td className="px-4 py-3 text-sm">
                  Additional CSS classes for the root container.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default CheckboxFieldDemo;
