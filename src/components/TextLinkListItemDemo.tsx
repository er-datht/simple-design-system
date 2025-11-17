import { TextLinkListItem } from "../ui/typography/TextLinkListItem";

export default function TextLinkListItemDemo() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <section>
        <h2 className="text-3xl font-bold mb-4">TextLinkListItem Component</h2>
        <p className="text-lg text-gray-600 mb-4">
          The TextLinkListItem component is a minimal, reusable text element designed
          for displaying individual list items with a single line of text. It serves
          as a building block for creating list structures in the design system,
          providing consistent typography and styling for linked or navigational text
          elements.
        </p>
        <p className="text-sm text-gray-500">
          <strong>Figma Source:</strong>{" "}
          <a
            href="https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=2153-7973"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Text Link List Item Component
          </a>
        </p>
      </section>

      {/* Basic Usage */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">Basic Usage</h3>
        <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg bg-white">
          <ul className="space-y-2">
            <TextLinkListItem text="List item" />
            <TextLinkListItem text="Another item" />
            <TextLinkListItem text="Third item" />
          </ul>
        </div>
        <div className="mt-4 bg-gray-50 p-4 rounded">
          <code className="text-sm">
            {`<ul>
  <TextLinkListItem text="List item" />
  <TextLinkListItem text="Another item" />
  <TextLinkListItem text="Third item" />
</ul>`}
          </code>
        </div>
      </section>

      {/* Custom Text */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">Custom Text Content</h3>
        <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg bg-white">
          <ul className="space-y-2">
            <TextLinkListItem text="Home" />
            <TextLinkListItem text="About Us" />
            <TextLinkListItem text="Services" />
            <TextLinkListItem text="Contact" />
          </ul>
        </div>
        <div className="mt-4 bg-gray-50 p-4 rounded">
          <code className="text-sm">
            {`<ul>
  <TextLinkListItem text="Home" />
  <TextLinkListItem text="About Us" />
  <TextLinkListItem text="Services" />
  <TextLinkListItem text="Contact" />
</ul>`}
          </code>
        </div>
      </section>

      {/* Real-world Examples */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">Real-world Examples</h3>

        <div className="space-y-8">
          {/* Navigation Menu */}
          <div>
            <h4 className="text-lg font-medium mb-3">Navigation Menu</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg bg-white">
              <nav className="max-w-xs">
                <ul className="space-y-3">
                  <TextLinkListItem text="Dashboard" />
                  <TextLinkListItem text="Projects" />
                  <TextLinkListItem text="Team" />
                  <TextLinkListItem text="Settings" />
                </ul>
              </nav>
            </div>
          </div>

          {/* Footer Links */}
          <div>
            <h4 className="text-lg font-medium mb-3">Footer Links</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg bg-white">
              <div className="grid grid-cols-3 gap-8 max-w-3xl">
                <div>
                  <h5 className="font-semibold mb-3">Product</h5>
                  <ul className="space-y-2">
                    <TextLinkListItem text="Features" />
                    <TextLinkListItem text="Pricing" />
                    <TextLinkListItem text="Security" />
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold mb-3">Company</h5>
                  <ul className="space-y-2">
                    <TextLinkListItem text="About" />
                    <TextLinkListItem text="Blog" />
                    <TextLinkListItem text="Careers" />
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold mb-3">Support</h5>
                  <ul className="space-y-2">
                    <TextLinkListItem text="Help Center" />
                    <TextLinkListItem text="Community" />
                    <TextLinkListItem text="Contact" />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Tokens */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">Design Tokens Used</h3>
        <div className="bg-gray-50 p-6 rounded-lg">
          <h4 className="font-medium mb-3">Colors</h4>
          <ul className="list-disc list-inside space-y-1 text-sm mb-4">
            <li>
              <code>--sds-color-text-default-default</code>: #1e1e1e (primary text)
            </li>
          </ul>

          <h4 className="font-medium mb-3">Typography</h4>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>
              <code>--sds-typography-body-font-family</code>: Inter (Regular)
            </li>
            <li>
              <code>--sds-typography-body-font-weight-regular</code>: 400
            </li>
            <li>
              <code>--sds-typography-body-size-medium</code>: 16px
            </li>
          </ul>
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
                <strong>Semantic HTML:</strong> Uses proper <code>&lt;li&gt;</code>{" "}
                element for list items
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span>
                <strong>High Contrast:</strong> Text color meets WCAG AAA standards
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span>
                <strong>Readable Font Size:</strong> 16px font size is easily readable
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span>
                <strong>Line Height:</strong> 1.4 line height ensures proper spacing
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Props Reference */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">Props Reference</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-semibold">Prop</th>
                <th className="px-4 py-2 text-left text-sm font-semibold">Type</th>
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
                  <code>text</code>
                </td>
                <td className="px-4 py-2">string</td>
                <td className="px-4 py-2">"List item"</td>
                <td className="px-4 py-2">The text content displayed in the list item</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
