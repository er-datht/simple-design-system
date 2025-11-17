import { TextLinkList } from "../ui/typography/TextLinkList";
import { TextLinkListItem } from "../ui/typography/TextLinkListItem";

export default function TextLinkListDemo() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <section>
        <h2 className="text-3xl font-bold mb-4">TextLinkList Component</h2>
        <p className="text-lg text-gray-600 mb-4">
          The TextLinkList component is a flexible, density-aware container for
          displaying a vertical list of text links with optional section titles.
          It supports two density modes (Default and Tight) to adapt spacing
          based on content requirements, making it ideal for navigation menus,
          related links sections, and list-based content.
        </p>
        <p className="text-sm text-gray-500">
          <strong>Figma Source:</strong>{" "}
          <a
            href="https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=322-9321"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Text Link List Component
          </a>
        </p>
      </section>

      {/* Basic Usage */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">Basic Usage</h3>
        <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg bg-white">
          <TextLinkList titleText="Quick Links">
            <TextLinkListItem text="Home" />
            <TextLinkListItem text="About" />
            <TextLinkListItem text="Services" />
            <TextLinkListItem text="Contact" />
          </TextLinkList>
        </div>
        <div className="mt-4 bg-gray-50 p-4 rounded">
          <code className="text-sm">
            {`<TextLinkList titleText="Quick Links">
  <TextLinkListItem text="Home" />
  <TextLinkListItem text="About" />
  <TextLinkListItem text="Services" />
  <TextLinkListItem text="Contact" />
</TextLinkList>`}
          </code>
        </div>
      </section>

      {/* Density Variants */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">Density Variants</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-medium mb-3">
              Default Density (12px gap)
            </h4>
            <p className="text-sm text-gray-600 mb-3">
              Standard spacing for general navigation and link lists. Provides
              clear visual separation between items.
            </p>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg bg-white">
              <TextLinkList titleText="Main Navigation" density="Default">
                <TextLinkListItem text="Dashboard" />
                <TextLinkListItem text="Projects" />
                <TextLinkListItem text="Team Members" />
                <TextLinkListItem text="Settings" />
                <TextLinkListItem text="Analytics" />
              </TextLinkList>
            </div>
            <div className="mt-2 bg-gray-50 p-4 rounded">
              <code className="text-sm">
                {`<TextLinkList titleText="Main Navigation" density="Default">
  <TextLinkListItem text="Dashboard" />
  <TextLinkListItem text="Projects" />
  ...
</TextLinkList>`}
              </code>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-3">
              Tight Density (8px gap)
            </h4>
            <p className="text-sm text-gray-600 mb-3">
              Compact spacing for sidebars, dropdowns, and space-constrained
              layouts. Creates a more condensed vertical footprint.
            </p>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg bg-white">
              <TextLinkList titleText="Recent Files" density="Tight">
                <TextLinkListItem text="Document.pdf" />
                <TextLinkListItem text="Presentation.pptx" />
                <TextLinkListItem text="Spreadsheet.xlsx" />
                <TextLinkListItem text="Notes.txt" />
                <TextLinkListItem text="Image.png" />
              </TextLinkList>
            </div>
            <div className="mt-2 bg-gray-50 p-4 rounded">
              <code className="text-sm">
                {`<TextLinkList titleText="Recent Files" density="Tight">
  <TextLinkListItem text="Document.pdf" />
  <TextLinkListItem text="Presentation.pptx" />
  ...
</TextLinkList>`}
              </code>
            </div>
          </div>
        </div>
      </section>

      {/* Title Variations */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">Title Variations</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-medium mb-3">With Title (Default)</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg bg-white">
              <div className="grid grid-cols-2 gap-8">
                <TextLinkList titleText="Product" density="Default">
                  <TextLinkListItem text="Features" />
                  <TextLinkListItem text="Pricing" />
                  <TextLinkListItem text="Security" />
                </TextLinkList>
                <TextLinkList titleText="Company" density="Default">
                  <TextLinkListItem text="About" />
                  <TextLinkListItem text="Blog" />
                  <TextLinkListItem text="Careers" />
                </TextLinkList>
              </div>
            </div>
            <div className="mt-2 bg-gray-50 p-4 rounded">
              <code className="text-sm">
                {`<TextLinkList titleText="Product">
  <TextLinkListItem text="Features" />
  ...
</TextLinkList>`}
              </code>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-3">Without Title</h4>
            <p className="text-sm text-gray-600 mb-3">
              Use <code>hasTitle={"{false}"}</code> to hide the title section
              when context is clear from surrounding content.
            </p>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg bg-white">
              <TextLinkList hasTitle={false} density="Default">
                <TextLinkListItem text="Privacy Policy" />
                <TextLinkListItem text="Terms of Service" />
                <TextLinkListItem text="Cookie Policy" />
              </TextLinkList>
            </div>
            <div className="mt-2 bg-gray-50 p-4 rounded">
              <code className="text-sm">
                {`<TextLinkList hasTitle={false}>
  <TextLinkListItem text="Privacy Policy" />
  ...
</TextLinkList>`}
              </code>
            </div>
          </div>
        </div>
      </section>

      {/* Real-world Examples */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">Real-world Examples</h3>

        <div className="space-y-8">
          {/* Footer Navigation */}
          <div>
            <h4 className="text-lg font-medium mb-3">Footer Navigation</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg bg-white">
              <footer className=" text-white p-8 rounded">
                <div className="grid grid-cols-4 gap-8 max-w-6xl mx-auto">
                  <TextLinkList titleText="Product" density="Tight">
                    <TextLinkListItem text="Features" />
                    <TextLinkListItem text="Integrations" />
                    <TextLinkListItem text="Pricing" />
                    <TextLinkListItem text="Security" />
                  </TextLinkList>
                  <TextLinkList titleText="Resources" density="Tight">
                    <TextLinkListItem text="Documentation" />
                    <TextLinkListItem text="API Reference" />
                    <TextLinkListItem text="Community" />
                    <TextLinkListItem text="Support" />
                  </TextLinkList>
                  <TextLinkList titleText="Company" density="Tight">
                    <TextLinkListItem text="About Us" />
                    <TextLinkListItem text="Blog" />
                    <TextLinkListItem text="Careers" />
                    <TextLinkListItem text="Press Kit" />
                  </TextLinkList>
                  <TextLinkList titleText="Legal" density="Tight">
                    <TextLinkListItem text="Privacy" />
                    <TextLinkListItem text="Terms" />
                    <TextLinkListItem text="Cookies" />
                  </TextLinkList>
                </div>
              </footer>
            </div>
          </div>

          {/* Sidebar Navigation */}
          <div>
            <h4 className="text-lg font-medium mb-3">Sidebar Navigation</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg bg-white">
              <div className="flex gap-8">
                <aside className="w-64 bg-gray-50 p-6 rounded border border-gray-200">
                  <TextLinkList titleText="Dashboard" density="Default">
                    <TextLinkListItem text="Overview" />
                    <TextLinkListItem text="Analytics" />
                    <TextLinkListItem text="Reports" />
                    <TextLinkListItem text="Export Data" />
                  </TextLinkList>

                  <div className="mt-6">
                    <TextLinkList titleText="Settings" density="Default">
                      <TextLinkListItem text="Profile" />
                      <TextLinkListItem text="Preferences" />
                      <TextLinkListItem text="Billing" />
                    </TextLinkList>
                  </div>
                </aside>
                <main className="flex-1 p-6 bg-white rounded border border-gray-200">
                  <h3 className="text-xl font-semibold mb-2">
                    Main Content Area
                  </h3>
                  <p className="text-gray-600">
                    The sidebar navigation uses Default density for comfortable
                    spacing in desktop layouts.
                  </p>
                </main>
              </div>
            </div>
          </div>

          {/* Related Links Section */}
          <div>
            <h4 className="text-lg font-medium mb-3">Related Links Section</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg bg-white">
              <article className="max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">
                  Getting Started Guide
                </h3>
                <p className="text-gray-700 mb-6">
                  Learn the basics of our platform with this comprehensive
                  guide...
                </p>
                <div className="bg-blue-50 p-6 rounded border border-blue-200">
                  <TextLinkList titleText="Related Articles" density="Default">
                    <TextLinkListItem text="Installation Guide" />
                    <TextLinkListItem text="Configuration Options" />
                    <TextLinkListItem text="Best Practices" />
                    <TextLinkListItem text="Advanced Features" />
                    <TextLinkListItem text="Troubleshooting" />
                  </TextLinkList>
                </div>
              </article>
            </div>
          </div>

          {/* Dropdown Menu */}
          <div>
            <h4 className="text-lg font-medium mb-3">Dropdown Menu</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg bg-white">
              <div className="inline-block bg-white rounded-lg shadow-lg border border-gray-200 p-4">
                <TextLinkList hasTitle={false} density="Tight">
                  <TextLinkListItem text="View Profile" />
                  <TextLinkListItem text="Account Settings" />
                  <TextLinkListItem text="Notifications" />
                  <TextLinkListItem text="Help Center" />
                  <TextLinkListItem text="Sign Out" />
                </TextLinkList>
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
              <code>--sds-color-text-default-default</code>: #1e1e1e (primary
              text)
            </li>
          </ul>

          <h4 className="font-medium mb-3">Typography</h4>
          <ul className="list-disc list-inside space-y-1 text-sm mb-4">
            <li>
              <code>--sds-typography-body-font-family</code>: Inter
            </li>
            <li>
              <code>--sds-typography-body-size-medium</code>: 16px
            </li>
            <li>
              <code>--sds-typography-body-font-weight-strong</code>: 600 (title)
            </li>
            <li>
              <code>--sds-typography-body-font-weight-regular</code>: 400
              (items)
            </li>
          </ul>

          <h4 className="font-medium mb-3">Spacing</h4>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>
              <code>--sds-size-space-100</code>: 4px (Tight title padding)
            </li>
            <li>
              <code>--sds-size-space-200</code>: 8px (Tight density gap)
            </li>
            <li>
              <code>--sds-size-space-300</code>: 12px (Default density gap)
            </li>
            <li>
              <code>--sds-size-space-400</code>: 16px (Default title padding)
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
                <strong>Semantic HTML:</strong> Uses proper{" "}
                <code>&lt;ul&gt;</code> and <code>&lt;li&gt;</code> elements for
                list structure
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span>
                <strong>Visual Hierarchy:</strong> Title uses stronger font
                weight (600) to establish hierarchy
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span>
                <strong>Flexible Spacing:</strong> Density variants adapt to
                different layout needs
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span>
                <strong>High Contrast:</strong> Text color meets WCAG AAA
                standards
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-600 mr-2">⚠</span>
              <span>
                <strong>Recommendation:</strong> Add <code>aria-label</code> or{" "}
                <code>aria-labelledby</code> to describe list purpose if title
                is hidden
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
                  <code>hasTitle</code>
                </td>
                <td className="px-4 py-2">boolean</td>
                <td className="px-4 py-2">true</td>
                <td className="px-4 py-2">
                  Determines whether the title section is displayed above the
                  list items
                </td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">
                  <code>density</code>
                </td>
                <td className="px-4 py-2">"Default" | "Tight"</td>
                <td className="px-4 py-2">"Default"</td>
                <td className="px-4 py-2">
                  Controls spacing between list items (Default: 12px, Tight:
                  8px)
                </td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">
                  <code>titleText</code>
                </td>
                <td className="px-4 py-2">string</td>
                <td className="px-4 py-2">"Text Strong"</td>
                <td className="px-4 py-2">
                  The text content for the optional title/section heading
                </td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">
                  <code>children</code>
                </td>
                <td className="px-4 py-2">ReactNode</td>
                <td className="px-4 py-2">-</td>
                <td className="px-4 py-2">
                  List items to be rendered (typically TextLinkListItem
                  components)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
