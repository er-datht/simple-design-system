import { useState } from "react";
import { RadioGroup } from "../ui/primitives/Input/RadioGroup";
import { RadioField } from "../ui/primitives/Input/RadioField";

export function RadioGroupDemo() {
  const [plan, setPlan] = useState<string>("basic");
  const [frequency, setFrequency] = useState<string>("");
  const [theme, setTheme] = useState<string>("light");
  const [priority, setPriority] = useState<string>("medium");

  return (
    <div className="space-y-12 p-8">
      {/* Header */}
      <section>
        <h2 className="text-3xl font-bold mb-4">RadioGroup</h2>
        <p className="text-lg text-gray-600 mb-4">
          A container component that groups multiple RadioField components with
          consistent spacing and layout. Uses semantic fieldset/legend structure
          for better accessibility. Supports both vertical and horizontal
          layouts. Radio groups ensure mutual exclusivity where only one option
          can be selected at a time.
        </p>
        <p className="text-sm text-gray-500">
          <strong>Figma Source:</strong>{" "}
          <a
            href="https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=624:23642"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            RadioGroup Component
          </a>
        </p>
      </section>

      {/* Basic Usage - Vertical */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">
          Basic Usage - Vertical Layout
        </h3>
        <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
          <RadioGroup name="basic-options" label="Select an option">
            <RadioField label="Option 1" name="basic-options" value="option1" />
            <RadioField label="Option 2" name="basic-options" value="option2" />
            <RadioField label="Option 3" name="basic-options" value="option3" />
          </RadioGroup>
        </div>
        <div className="mt-4 bg-gray-50 p-4 rounded">
          <code className="text-sm whitespace-pre">{`<RadioGroup name="basic-options" label="Select an option">
  <RadioField label="Option 1" name="basic-options" value="option1" />
  <RadioField label="Option 2" name="basic-options" value="option2" />
  <RadioField label="Option 3" name="basic-options" value="option3" />
</RadioGroup>`}</code>
        </div>
      </section>

      {/* Horizontal Layout */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">Horizontal Layout</h3>
        <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
          <RadioGroup
            name="quick-options"
            label="Quick Options"
            direction="horizontal"
          >
            <RadioField label="Choice A" name="quick-options" value="a" />
            <RadioField label="Choice B" name="quick-options" value="b" />
            <RadioField label="Choice C" name="quick-options" value="c" />
          </RadioGroup>
        </div>
        <div className="mt-4 bg-gray-50 p-4 rounded">
          <code className="text-sm whitespace-pre">{`<RadioGroup name="quick-options" label="Quick Options" direction="horizontal">
  <RadioField label="Choice A" name="quick-options" value="a" />
  <RadioField label="Choice B" name="quick-options" value="b" />
  <RadioField label="Choice C" name="quick-options" value="c" />
</RadioGroup>`}</code>
        </div>
      </section>

      {/* Without Label */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">Without Label</h3>
        <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
          <RadioGroup name="no-label">
            <RadioField
              label="Daily"
              description="Receive updates every day"
              name="no-label"
              value="daily"
            />
            <RadioField
              label="Weekly"
              description="Receive updates once a week"
              name="no-label"
              value="weekly"
            />
            <RadioField
              label="Monthly"
              description="Receive updates once a month"
              name="no-label"
              value="monthly"
            />
          </RadioGroup>
        </div>
      </section>

      {/* With Descriptions */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">With Descriptions</h3>
        <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
          <RadioGroup name="plans" label="Select a Plan">
            <RadioField
              label="Basic"
              description="Best for personal use"
              name="plans"
              value="basic"
            />
            <RadioField
              label="Pro"
              description="Best for small teams"
              name="plans"
              value="pro"
            />
            <RadioField
              label="Enterprise"
              description="Best for large organizations"
              name="plans"
              value="enterprise"
            />
          </RadioGroup>
        </div>
      </section>

      {/* Mixed States */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">Mixed States</h3>
        <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
          <RadioGroup name="subscription" label="Subscription Tier">
            <RadioField
              label="Free"
              description="Basic features included"
              name="subscription"
              value="free"
              isChecked
            />
            <RadioField
              label="Pro"
              description="Advanced features"
              name="subscription"
              value="pro"
              disabled
              isChecked={false}
            />
            <RadioField
              label="Enterprise"
              description="Contact required"
              name="subscription"
              value="enterprise"
              errorMessage="Not available in your region"
              isChecked={false}
            />
          </RadioGroup>
        </div>
      </section>

      {/* Interactive Example - Subscription Plans */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">
          Interactive Example - Subscription Plans
        </h3>
        <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
          <RadioGroup
            name="plan-selection"
            value={plan}
            onChange={setPlan}
            label="Choose your plan"
          >
            <RadioField
              label="Basic"
              description="$9/month - Perfect for individuals"
              name="plan-selection"
              value="basic"
              isChecked={plan === "basic"}
              onChange={(checked) => checked && setPlan("basic")}
            />
            <RadioField
              label="Professional"
              description="$29/month - Great for small teams"
              name="plan-selection"
              value="professional"
              isChecked={plan === "professional"}
              onChange={(checked) => checked && setPlan("professional")}
            />
            <RadioField
              label="Enterprise"
              description="$99/month - For large organizations"
              name="plan-selection"
              value="enterprise"
              isChecked={plan === "enterprise"}
              onChange={(checked) => checked && setPlan("enterprise")}
            />
          </RadioGroup>
          <p className="text-sm text-gray-500 mt-4">
            Selected plan: <strong>{plan}</strong>
          </p>
        </div>
        <div className="mt-4 bg-gray-50 p-4 rounded">
          <code className="text-sm whitespace-pre">{`const [plan, setPlan] = useState<string>("basic");

<RadioGroup name="plan-selection" value={plan} onChange={setPlan} label="Choose your plan">
  <RadioField
    label="Basic"
    name="plan-selection"
    value="basic"
    isChecked={plan === "basic"}
    onChange={(checked) => checked && setPlan("basic")}
  />
  {/* ... more options */}
</RadioGroup>`}</code>
        </div>
      </section>

      {/* Real-world Example - Email Frequency */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">
          Real-world Example - Email Frequency
        </h3>
        <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
          <RadioGroup
            name="email-frequency"
            value={frequency}
            onChange={setFrequency}
            label="Email notification frequency"
          >
            <RadioField
              label="Real-time"
              description="Get notified immediately for every update"
              name="email-frequency"
              value="realtime"
              isChecked={frequency === "realtime"}
              onChange={(checked) => checked && setFrequency("realtime")}
            />
            <RadioField
              label="Daily Digest"
              description="Receive a daily summary of all updates"
              name="email-frequency"
              value="daily"
              isChecked={frequency === "daily"}
              onChange={(checked) => checked && setFrequency("daily")}
            />
            <RadioField
              label="Weekly Summary"
              description="Get a weekly overview every Monday"
              name="email-frequency"
              value="weekly"
              isChecked={frequency === "weekly"}
              onChange={(checked) => checked && setFrequency("weekly")}
            />
            <RadioField
              label="Never"
              description="Turn off email notifications completely"
              name="email-frequency"
              value="never"
              isChecked={frequency === "never"}
              onChange={(checked) => checked && setFrequency("never")}
            />
          </RadioGroup>
          <p className="text-sm text-gray-500 mt-4">
            Selected frequency: <strong>{frequency || "None selected"}</strong>
          </p>
        </div>
      </section>

      {/* Real-world Example - Theme Selection */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">
          Real-world Example - Theme Selection
        </h3>
        <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
          <RadioGroup
            name="theme-selection"
            value={theme}
            onChange={setTheme}
            label="Appearance"
            direction="horizontal"
          >
            <RadioField
              label="Light"
              name="theme-selection"
              value="light"
              isChecked={theme === "light"}
              onChange={(checked) => checked && setTheme("light")}
            />
            <RadioField
              label="Dark"
              name="theme-selection"
              value="dark"
              isChecked={theme === "dark"}
              onChange={(checked) => checked && setTheme("dark")}
            />
            <RadioField
              label="System"
              name="theme-selection"
              value="system"
              isChecked={theme === "system"}
              onChange={(checked) => checked && setTheme("system")}
            />
          </RadioGroup>
          <p className="text-sm text-gray-500 mt-4">
            Selected theme: <strong>{theme}</strong>
          </p>
        </div>
      </section>

      {/* Real-world Example - Priority Selection */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">
          Real-world Example - Task Priority
        </h3>
        <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
          <RadioGroup
            name="priority"
            value={priority}
            onChange={setPriority}
            label="Task Priority"
          >
            <RadioField
              label="Low"
              description="Can be completed when time permits"
              name="priority"
              value="low"
              isChecked={priority === "low"}
              onChange={(checked) => checked && setPriority("low")}
            />
            <RadioField
              label="Medium"
              description="Should be completed within the week"
              name="priority"
              value="medium"
              isChecked={priority === "medium"}
              onChange={(checked) => checked && setPriority("medium")}
            />
            <RadioField
              label="High"
              description="Needs immediate attention"
              name="priority"
              value="high"
              isChecked={priority === "high"}
              onChange={(checked) => checked && setPriority("high")}
            />
            <RadioField
              label="Critical"
              description="Blocker - requires urgent resolution"
              name="priority"
              value="critical"
              isChecked={priority === "critical"}
              onChange={(checked) => checked && setPriority("critical")}
            />
          </RadioGroup>
          <p className="text-sm text-gray-600 mt-4">
            Selected priority: <strong>{priority}</strong>
          </p>
        </div>
      </section>

      {/* Design Tokens */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">Design Tokens Used</h3>
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Spacing</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>
                  <code>--sds-size-space-300</code>: 12px (gap between items)
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Typography</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>
                  <code>--sds-typography-body-font-family</code>: Inter
                </li>
                <li>
                  <code>--sds-typography-body-size-medium</code>: 16px
                </li>
                <li>
                  <code>--sds-typography-body-font-weight-medium</code>: 500
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Colors</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>
                  <code>--sds-color-text-default-default</code>: #1e1e1e
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
          <ul className="space-y-2 text-sm">
            <li className="flex items-start">
              <span className="text-green-600 mr-2">OK</span>
              <span>
                <strong>Semantic HTML:</strong> Uses fieldset and legend
                elements for proper form group semantics
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">OK</span>
              <span>
                <strong>ARIA Role:</strong> Fieldset with role="radiogroup" for
                screen reader recognition
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">OK</span>
              <span>
                <strong>Keyboard Navigation:</strong> Arrow keys to navigate
                between options, Tab to focus/blur group
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">OK</span>
              <span>
                <strong>Mutual Exclusivity:</strong> Shared name attribute
                ensures only one option is selected
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">OK</span>
              <span>
                <strong>Associated Labels:</strong> Each RadioField uses native
                label elements with htmlFor
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">OK</span>
              <span>
                <strong>Description Support:</strong> Optional descriptions are
                connected via aria-describedby
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
                <th className="px-4 py-2 text-left text-sm font-semibold border-b">
                  Prop
                </th>
                <th className="px-4 py-2 text-left text-sm font-semibold border-b">
                  Type
                </th>
                <th className="px-4 py-2 text-left text-sm font-semibold border-b">
                  Default
                </th>
                <th className="px-4 py-2 text-left text-sm font-semibold border-b">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border-b">
                  <code className="text-sm">name</code>
                </td>
                <td className="px-4 py-2 border-b">
                  <code className="text-sm">string</code>
                </td>
                <td className="px-4 py-2 border-b text-gray-500">Required</td>
                <td className="px-4 py-2 border-b text-sm">
                  Name attribute for all radio inputs (ensures mutual
                  exclusivity)
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">
                  <code className="text-sm">value</code>
                </td>
                <td className="px-4 py-2 border-b">
                  <code className="text-sm">string</code>
                </td>
                <td className="px-4 py-2 border-b text-gray-500">-</td>
                <td className="px-4 py-2 border-b text-sm">
                  Currently selected value (for controlled mode)
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">
                  <code className="text-sm">onChange</code>
                </td>
                <td className="px-4 py-2 border-b">
                  <code className="text-sm">{"(value: string) => void"}</code>
                </td>
                <td className="px-4 py-2 border-b text-gray-500">-</td>
                <td className="px-4 py-2 border-b text-sm">
                  Callback when selection changes
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">
                  <code className="text-sm">label</code>
                </td>
                <td className="px-4 py-2 border-b">
                  <code className="text-sm">string</code>
                </td>
                <td className="px-4 py-2 border-b text-gray-500">-</td>
                <td className="px-4 py-2 border-b text-sm">
                  Legend text for the fieldset (accessible group label)
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">
                  <code className="text-sm">children</code>
                </td>
                <td className="px-4 py-2 border-b">
                  <code className="text-sm">React.ReactNode</code>
                </td>
                <td className="px-4 py-2 border-b text-gray-500">Required</td>
                <td className="px-4 py-2 border-b text-sm">
                  RadioField components to display in the group
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">
                  <code className="text-sm">direction</code>
                </td>
                <td className="px-4 py-2 border-b">
                  <code className="text-sm">"vertical" | "horizontal"</code>
                </td>
                <td className="px-4 py-2 border-b">
                  <code className="text-sm">"vertical"</code>
                </td>
                <td className="px-4 py-2 border-b text-sm">
                  Layout direction for radio items
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">
                  <code className="text-sm">className</code>
                </td>
                <td className="px-4 py-2 border-b">
                  <code className="text-sm">string</code>
                </td>
                <td className="px-4 py-2 border-b text-gray-500">-</td>
                <td className="px-4 py-2 border-b text-sm">
                  Additional CSS classes for the root fieldset
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default RadioGroupDemo;
