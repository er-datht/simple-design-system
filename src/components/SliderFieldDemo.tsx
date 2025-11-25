import { SliderField } from "../ui/primitives/Input/SliderField";

export function SliderFieldDemo() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <section>
        <h2 className="text-3xl font-bold mb-4">Slider Field</h2>
        <p className="text-lg text-gray-600 mb-4">
          A dual-handle range slider component that allows users to select a
          range of values within defined boundaries. Features optional label and
          description text, supports both default and disabled states, and
          provides accessible keyboard navigation.
        </p>
        <p className="text-sm text-gray-500">
          <strong>Figma Source:</strong>{" "}
          <a
            href="https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=589:17676&m=dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Slider Field Component
          </a>
        </p>
      </section>

      {/* Basic Usage */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">Basic Usage</h3>
        <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
          <SliderField label="Volume" value={[0, 50]} />
        </div>
        <div className="mt-4 bg-gray-50 p-4 rounded">
          <code className="text-sm">{`<SliderField label="Volume" value={[0, 50]} />`}</code>
        </div>
      </section>

      {/* State Variants */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">State Variants</h3>

        <div className="space-y-6">
          <div>
            <p className="text-sm text-gray-500 mb-3">Default State</p>
            <div className="border-2 border-dashed border-amber-400 p-6 rounded-lg">
              <SliderField
                label="Label"
                description="Description text for additional context"
                value={[0, 50]}
              />
            </div>
          </div>

          <div>
            <p className="text-sm text-gray-500 mb-3">Disabled State</p>
            <div className="border-2 border-dashed border-amber-400 p-6 rounded-lg">
              <SliderField
                label="Label"
                description="Description text for additional context"
                disabled
                value={[0, 50]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* With/Without Label and Description */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">
          Label and Description Options
        </h3>

        <div className="space-y-6">
          <div>
            <p className="text-sm text-gray-500 mb-3">
              With Label and Description
            </p>
            <div className="border-2 border-dashed border-amber-400 p-6 rounded-lg">
              <SliderField
                label="Budget Range"
                description="Select your preferred budget range"
                value={[0, 50]}
              />
            </div>
          </div>

          <div>
            <p className="text-sm text-gray-500 mb-3">With Label Only</p>
            <div className="border-2 border-dashed border-amber-400 p-6 rounded-lg">
              <SliderField label="Volume" value={[0, 75]} />
            </div>
          </div>

          <div>
            <p className="text-sm text-gray-500 mb-3">Without Label</p>
            <div className="border-2 border-dashed border-amber-400 p-6 rounded-lg">
              <SliderField value={[0, 30]} showValue={false} />
            </div>
          </div>
        </div>
      </section>

      {/* Value Display Formats */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">Value Display Formats</h3>

        <div className="space-y-6">
          <div>
            <p className="text-sm text-gray-500 mb-3">
              Range Format (default) - Shows min-max
            </p>
            <div className="border-2 border-dashed border-amber-400 p-6 rounded-lg">
              <SliderField
                label="Price"
                value={[0, 50]}
                min={0}
                max={100}
                valueFormat="range"
                valuePrefix="$"
              />
            </div>
          </div>

          <div>
            <p className="text-sm text-gray-500 mb-3">
              Single Format - Shows current value
            </p>
            <div className="border-2 border-dashed border-amber-400 p-6 rounded-lg">
              <SliderField
                label="Volume"
                value={[0, 75]}
                valueFormat="single"
                valuePrefix=""
              />
            </div>
          </div>

          <div>
            <p className="text-sm text-gray-500 mb-3">
              Percentage Format - Custom prefix
            </p>
            <div className="border-2 border-dashed border-amber-400 p-6 rounded-lg">
              <SliderField
                label="Opacity"
                value={[0, 80]}
                valueFormat="single"
                valuePrefix=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Examples */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">Interactive Examples</h3>

        <div className="space-y-6">
          <div>
            <p className="text-sm text-gray-500 mb-3">Volume Control</p>
            <div className="border-2 border-dashed border-amber-400 p-6 rounded-lg">
              <SliderField
                label="Volume"
                description="Adjust the audio volume"
                defaultValue={50}
                min={0}
                max={100}
                valueFormat="single"
                valuePrefix=""
              />
            </div>
          </div>

          <div>
            <p className="text-sm text-gray-500 mb-3">Price Range Selector</p>
            <div className="border-2 border-dashed border-amber-400 p-6 rounded-lg">
              <SliderField
                label="Max Price"
                description="Set your maximum budget"
                defaultValue={250}
                min={0}
                max={1000}
                step={10}
                valueFormat="single"
                valuePrefix="$"
              />
            </div>
          </div>

          <div>
            <p className="text-sm text-gray-500 mb-3">Brightness Control</p>
            <div className="border-2 border-dashed border-amber-400 p-6 rounded-lg">
              <SliderField
                label="Brightness"
                description="Adjust screen brightness"
                defaultValue={75}
                min={0}
                max={100}
                step={5}
                valueFormat="single"
                valuePrefix=""
              />
            </div>
          </div>

          <div>
            <p className="text-sm text-gray-500 mb-3">
              Budget Range Selector (Range Format)
            </p>
            <div className="border-2 border-dashed border-amber-400 p-6 rounded-lg">
              <SliderField
                label="Budget Range"
                description="Select your min and max budget"
                defaultValue={[200, 800]}
                min={0}
                max={1000}
                step={50}
                valueFormat="range"
                valuePrefix="$"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Real-world Examples */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">Real-world Examples</h3>

        <div className="space-y-6">
          <div>
            <p className="text-sm text-gray-500 mb-3">
              E-commerce Price Filter
            </p>
            <div className="border-2 border-dashed border-amber-400 p-6 rounded-lg bg-white">
              <div className="max-w-sm">
                <h4 className="text-lg font-medium mb-4">Filters</h4>
                <SliderField
                  label="Price Range"
                  description="Products within this budget will be shown"
                  value={[0, 500]}
                  min={0}
                  max={1000}
                  step={50}
                  valuePrefix="$"
                />
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm text-gray-500 mb-3">Settings Panel</p>
            <div className="border-2 border-dashed border-amber-400 p-6 rounded-lg bg-gray-100">
              <div className="max-w-sm space-y-6">
                <h4 className="text-lg font-medium">Display Settings</h4>
                <SliderField
                  label="Brightness"
                  value={[0, 70]}
                  valueFormat="single"
                  valuePrefix=""
                />
                <SliderField
                  label="Contrast"
                  value={[0, 50]}
                  valueFormat="single"
                  valuePrefix=""
                />
                <SliderField
                  label="Volume"
                  value={[0, 80]}
                  valueFormat="single"
                  valuePrefix=""
                />
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm text-gray-500 mb-3">Disabled in Form</p>
            <div className="border-2 border-dashed border-amber-400 p-6 rounded-lg bg-white">
              <div className="max-w-sm space-y-4">
                <h4 className="text-lg font-medium">Premium Features</h4>
                <p className="text-sm text-gray-500">
                  Upgrade to unlock advanced controls
                </p>
                <SliderField
                  label="Quality"
                  description="HD quality requires premium subscription"
                  value={[0, 50]}
                  disabled
                  valueFormat="single"
                  valuePrefix=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Tokens Used */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">Design Tokens Used</h3>
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-2">Colors</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>
                  <code>--sds-color-text-default-default</code> - Label text
                </li>
                <li>
                  <code>--sds-color-text-default-secondary</code> - Description
                </li>
                <li>
                  <code>--sds-color-background-brand-default</code> - Knob
                </li>
                <li>
                  <code>--sds-color-background-brand-secondary</code> - Track
                </li>
                <li>
                  <code>--sds-color-background-disabled-default</code> -
                  Disabled knob
                </li>
                <li>
                  <code>--sds-color-border-disabled-default</code> - Disabled
                  border
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Typography & Spacing</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>
                  <code>--sds-typography-body-size-medium</code> - 16px
                </li>
                <li>
                  <code>--sds-typography-body-size-small</code> - 14px
                </li>
                <li>
                  <code>--sds-size-space-300</code> - 12px gap
                </li>
                <li>
                  <code>--sds-size-radius-full</code> - Knob/track radius
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
              <span className="text-green-600 mr-2">✓</span>
              <span>
                <strong>Dual Handle Range:</strong> Uses react-range library for
                accessible dual-handle range selection with full keyboard
                support
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span>
                <strong>Label Association:</strong> Label is connected to slider
                for screen reader compatibility
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span>
                <strong>ARIA Attributes:</strong> Includes{" "}
                <code>aria-valuemin</code>, <code>aria-valuemax</code>,{" "}
                <code>aria-valuenow</code>, and <code>aria-describedby</code>{" "}
                for each thumb
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span>
                <strong>Keyboard Navigation:</strong> Arrow keys adjust values,
                Home/End for min/max on each handle
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span>
                <strong>Focus States:</strong> Visible focus outline for
                keyboard users with proper focus management
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span>
                <strong>Disabled State:</strong> Uses <code>aria-disabled</code>{" "}
                attribute with visual indicators
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
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-b">
                  Prop
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-b">
                  Type
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-b">
                  Default
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-b">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 text-sm border-b">
                  <code>label</code>
                </td>
                <td className="px-4 py-2 text-sm border-b text-gray-600">
                  string
                </td>
                <td className="px-4 py-2 text-sm border-b text-gray-600">
                  undefined
                </td>
                <td className="px-4 py-2 text-sm border-b text-gray-600">
                  Label text above the slider
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-sm border-b">
                  <code>description</code>
                </td>
                <td className="px-4 py-2 text-sm border-b text-gray-600">
                  string
                </td>
                <td className="px-4 py-2 text-sm border-b text-gray-600">
                  undefined
                </td>
                <td className="px-4 py-2 text-sm border-b text-gray-600">
                  Helper text below the slider
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-sm border-b">
                  <code>disabled</code>
                </td>
                <td className="px-4 py-2 text-sm border-b text-gray-600">
                  boolean
                </td>
                <td className="px-4 py-2 text-sm border-b text-gray-600">
                  false
                </td>
                <td className="px-4 py-2 text-sm border-b text-gray-600">
                  Whether the field is disabled
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-sm border-b">
                  <code>value</code>
                </td>
                <td className="px-4 py-2 text-sm border-b text-gray-600">
                  [number, number]
                </td>
                <td className="px-4 py-2 text-sm border-b text-gray-600">
                  [0, 100]
                </td>
                <td className="px-4 py-2 text-sm border-b text-gray-600">
                  Current slider range [min, max]
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-sm border-b">
                  <code>min</code>
                </td>
                <td className="px-4 py-2 text-sm border-b text-gray-600">
                  number
                </td>
                <td className="px-4 py-2 text-sm border-b text-gray-600">0</td>
                <td className="px-4 py-2 text-sm border-b text-gray-600">
                  Minimum value
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-sm border-b">
                  <code>max</code>
                </td>
                <td className="px-4 py-2 text-sm border-b text-gray-600">
                  number
                </td>
                <td className="px-4 py-2 text-sm border-b text-gray-600">
                  100
                </td>
                <td className="px-4 py-2 text-sm border-b text-gray-600">
                  Maximum value
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-sm border-b">
                  <code>step</code>
                </td>
                <td className="px-4 py-2 text-sm border-b text-gray-600">
                  number
                </td>
                <td className="px-4 py-2 text-sm border-b text-gray-600">1</td>
                <td className="px-4 py-2 text-sm border-b text-gray-600">
                  Step increment
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-sm border-b">
                  <code>showValue</code>
                </td>
                <td className="px-4 py-2 text-sm border-b text-gray-600">
                  boolean
                </td>
                <td className="px-4 py-2 text-sm border-b text-gray-600">
                  true
                </td>
                <td className="px-4 py-2 text-sm border-b text-gray-600">
                  Show value display
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-sm border-b">
                  <code>valuePrefix</code>
                </td>
                <td className="px-4 py-2 text-sm border-b text-gray-600">
                  string
                </td>
                <td className="px-4 py-2 text-sm border-b text-gray-600">
                  "$"
                </td>
                <td className="px-4 py-2 text-sm border-b text-gray-600">
                  Prefix for value display (e.g., "$")
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-sm border-b">
                  <code>valueFormat</code>
                </td>
                <td className="px-4 py-2 text-sm border-b text-gray-600">
                  "single" | "range"
                </td>
                <td className="px-4 py-2 text-sm border-b text-gray-600">
                  "range"
                </td>
                <td className="px-4 py-2 text-sm border-b text-gray-600">
                  Format for value display
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-sm border-b">
                  <code>onChange</code>
                </td>
                <td className="px-4 py-2 text-sm border-b text-gray-600">
                  (value: [number, number]) =&gt; void
                </td>
                <td className="px-4 py-2 text-sm border-b text-gray-600">
                  undefined
                </td>
                <td className="px-4 py-2 text-sm border-b text-gray-600">
                  Change handler for range values
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-sm border-b">
                  <code>className</code>
                </td>
                <td className="px-4 py-2 text-sm border-b text-gray-600">
                  string
                </td>
                <td className="px-4 py-2 text-sm border-b text-gray-600">
                  undefined
                </td>
                <td className="px-4 py-2 text-sm border-b text-gray-600">
                  Additional CSS classes
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default SliderFieldDemo;
