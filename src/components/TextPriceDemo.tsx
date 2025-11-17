import { TextPrice } from "../ui/typography/TextPrice";

export default function TextPriceDemo() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <section>
        <h2 className="text-3xl font-bold mb-4">TextPrice Component</h2>
        <p className="text-lg text-gray-600 mb-4">
          The TextPrice component displays pricing information in a clear,
          hierarchical format with currency symbol, price amount, and optional
          billing label. It supports two size variants (Large and Small) for
          flexible use across different contexts and screen sizes.
        </p>
        <p className="text-sm text-gray-500">
          <strong>Figma Source:</strong>{" "}
          <a
            href="https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=1443-10386"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Text Price Component
          </a>
        </p>
      </section>

      {/* Basic Usage */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">Basic Usage</h3>
        <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg ">
          <div className="flex items-center justify-center gap-12">
            <div className="text-center">
              <p className="text-sm text-gray-500 mb-2">Default (Large)</p>
              <TextPrice />
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-500 mb-2">Small Variant</p>
              <TextPrice size="Small" />
            </div>
          </div>
        </div>
        <div className="mt-4  p-4 rounded">
          <code className="text-sm">
            {`<TextPrice />
<TextPrice size="Small" />`}
          </code>
        </div>
      </section>

      {/* Size Variants */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">Size Variants</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-medium mb-3">Large (Default)</h4>
            <p className="text-sm text-gray-600 mb-3">
              Used for primary pricing displays, hero sections, and prominent
              CTAs. Features 48px price with 24px currency symbol.
            </p>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg ">
              <div className="flex justify-center">
                <TextPrice
                  price="99"
                  currency="$"
                  label="/ month"
                  size="Large"
                />
              </div>
            </div>
            <div className="mt-2  p-4 rounded">
              <code className="text-sm">
                {`<TextPrice price="99" currency="$" label="/ month" size="Large" />`}
              </code>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-3">Small</h4>
            <p className="text-sm text-gray-600 mb-3">
              Compact pricing for secondary information, sidebars, and
              space-constrained layouts. Features 24px price with 16px currency
              symbol.
            </p>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg ">
              <div className="flex justify-center">
                <TextPrice
                  price="29"
                  currency="$"
                  label="/ month"
                  size="Small"
                />
              </div>
            </div>
            <div className="mt-2  p-4 rounded">
              <code className="text-sm">
                {`<TextPrice price="29" currency="$" label="/ month" size="Small" />`}
              </code>
            </div>
          </div>
        </div>
      </section>

      {/* Label Variations */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">Label Variations</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-medium mb-3">With Label (Default)</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg ">
              <div className="flex items-center justify-center gap-8">
                <TextPrice price="50" label="/ mo" />
                <TextPrice price="199" label="/ year" />
                <TextPrice price="499" label="billed annually" />
              </div>
            </div>
            <div className="mt-2  p-4 rounded">
              <code className="text-sm">
                {`<TextPrice price="50" label="/ mo" />
<TextPrice price="199" label="/ year" />
<TextPrice price="499" label="billed annually" />`}
              </code>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-3">Without Label</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg ">
              <div className="flex justify-center">
                <TextPrice price="99" currency="$" hasLabel={false} />
              </div>
            </div>
            <div className="mt-2  p-4 rounded">
              <code className="text-sm">
                {`<TextPrice price="99" currency="$" hasLabel={false} />`}
              </code>
            </div>
          </div>
        </div>
      </section>

      {/* Currency Options */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">Currency Options</h3>
        <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg ">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-xs text-gray-500 mb-2">US Dollar</p>
              <TextPrice price="50" currency="$" size="Small" />
            </div>
            <div className="text-center">
              <p className="text-xs text-gray-500 mb-2">Euro</p>
              <TextPrice price="45" currency="€" size="Small" />
            </div>
            <div className="text-center">
              <p className="text-xs text-gray-500 mb-2">British Pound</p>
              <TextPrice price="40" currency="£" size="Small" />
            </div>
            <div className="text-center">
              <p className="text-xs text-gray-500 mb-2">Japanese Yen</p>
              <TextPrice price="5000" currency="¥" size="Small" />
            </div>
          </div>
        </div>
        <div className="mt-4  p-4 rounded">
          <code className="text-sm">
            {`<TextPrice price="50" currency="$" />
<TextPrice price="45" currency="€" />
<TextPrice price="40" currency="£" />
<TextPrice price="5000" currency="¥" />`}
          </code>
        </div>
      </section>

      {/* Design Tokens */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">Design Tokens Used</h3>
        <div className=" p-6 rounded-lg">
          <h4 className="font-medium mb-3">Colors</h4>
          <ul className="list-disc list-inside space-y-1 text-sm mb-4">
            <li>
              <code>--sds-color-text-default-default</code>: #1e1e1e (primary
              text)
            </li>
          </ul>

          <h4 className="font-medium mb-3">Typography - Large Variant</h4>
          <ul className="list-disc list-inside space-y-1 text-sm mb-4">
            <li>
              <code>--sds-typography-title-page-size-base</code>: 48px (price
              amount)
            </li>
            <li>
              <code>--sds-typography-subtitle-size-small</code>: 24px (currency
              symbol)
            </li>
            <li>
              <code>--sds-typography-body-size-small</code>: 14px (label)
            </li>
          </ul>

          <h4 className="font-medium mb-3">Typography - Small Variant</h4>
          <ul className="list-disc list-inside space-y-1 text-sm mb-4">
            <li>
              <code>--sds-typography-heading-size-base</code>: 24px (price
              amount)
            </li>
            <li>
              <code>--sds-typography-body-size-medium</code>: 16px (currency
              symbol)
            </li>
            <li>
              <code>--sds-typography-body-size-small</code>: 14px (label)
            </li>
          </ul>
        </div>
      </section>

      {/* Accessibility Features */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">Accessibility Features</h3>
        <div className=" p-6 rounded-lg">
          <ul className="space-y-2 text-sm">
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span>
                <strong>High Contrast:</strong> Text color #1e1e1e provides
                17.7:1 contrast ratio on white backgrounds (exceeds WCAG AAA)
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span>
                <strong>Readable Font Sizes:</strong> Large variant (48px) and
                Small variant (24px) both exceed minimum size requirements
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span>
                <strong>Visual Hierarchy:</strong> Size and weight differences
                create clear information hierarchy
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span>
                <strong>Semantic HTML:</strong> Uses appropriate paragraph
                elements for content structure
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-600 mr-2">⚠</span>
              <span>
                <strong>Recommendation:</strong> Consider adding aria-label for
                screen readers (e.g., "Price: $50 per month")
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Props Reference */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">Props Reference</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full  border border-gray-200">
            <thead className="">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-semibold">
                  Prop
                </th>
                <th className="px-4 py-2 text-left text-sm font-semibold">
                  Type
                </th>
                <th className="px-4 py-2 text-left text-sm font-semibold">
                  Default
                </th>
                <th className="px-4 py-2 text-left text-sm font-semibold">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-t">
                <td className="px-4 py-2">
                  <code>price</code>
                </td>
                <td className="px-4 py-2">string</td>
                <td className="px-4 py-2">"50"</td>
                <td className="px-4 py-2">The main price amount to display</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">
                  <code>currency</code>
                </td>
                <td className="px-4 py-2">string</td>
                <td className="px-4 py-2">"$"</td>
                <td className="px-4 py-2">
                  Currency symbol to display before price
                </td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">
                  <code>label</code>
                </td>
                <td className="px-4 py-2">string</td>
                <td className="px-4 py-2">"/ mo"</td>
                <td className="px-4 py-2">
                  Billing period or subscription label
                </td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">
                  <code>hasLabel</code>
                </td>
                <td className="px-4 py-2">boolean</td>
                <td className="px-4 py-2">true</td>
                <td className="px-4 py-2">
                  Controls visibility of the label text
                </td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">
                  <code>size</code>
                </td>
                <td className="px-4 py-2">"Large" | "Small"</td>
                <td className="px-4 py-2">"Large"</td>
                <td className="px-4 py-2">Component size variant</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
