import { Card } from "../ui/primitives/Card";
import { Button } from "../ui/primitives/Button/Button";
import { ButtonDanger } from "../ui/primitives/Button/ButtonDanger";
import { ButtonGroup } from "../ui/primitives/Button/ButtonGroup";

export default function CardDemo() {
  return (
    <div className="space-y-16 p-8">
      {/* Header */}
      <section>
        <h1 className="text-3xl font-bold mb-4">Card Component</h1>
        <p className="text-gray-600 mb-4">
          A flexible, multi-variant card component designed to present content
          with optional icons or images, supporting both horizontal and vertical
          layouts with optional borders and call-to-action buttons.
        </p>
        <a
          href="https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=2142-11380"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          View in Figma →
        </a>
      </section>

      {/* Basic Usage */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Basic Usage</h2>
        <div className="flex flex-wrap gap-8">
          <Card
            heading="Default Card"
            body="This is a simple card with default settings. It includes an icon, border, and horizontal layout."
          >
            <Button variant="primary">Learn More</Button>
          </Card>
        </div>
      </section>

      {/* All 8 Variants */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">All Variants</h2>
        <p className="text-gray-600 mb-6">
          The Card component supports 8 different configuration combinations:
        </p>

        {/* Icon Variants */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Icon Variants</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Icon + Default + Horizontal */}
            <div>
              <p className="text-sm text-gray-500 mb-2">
                Icon • Default • Horizontal
              </p>
              <Card
                assetType="Icon"
                variant="Default"
                direction="Horizontal"
                heading="No Border Icon"
                body="This card has an icon with no border in horizontal layout."
              >
                <Button variant="primary">Action</Button>
              </Card>
            </div>

            {/* Icon + Default + Vertical */}
            <div>
              <p className="text-sm text-gray-500 mb-2">
                Icon • Default • Vertical
              </p>
              <Card
                assetType="Icon"
                variant="Default"
                direction="Vertical"
                heading="Vertical Icon Card"
                body="This card has an icon on top with no border."
              >
                <Button variant="primary">Action</Button>
              </Card>
            </div>

            {/* Icon + Stroke + Horizontal */}
            <div>
              <p className="text-sm text-gray-500 mb-2">
                Icon • Stroke • Horizontal
              </p>
              <Card
                assetType="Icon"
                variant="Stroke"
                direction="Horizontal"
                heading="Bordered Icon Card"
                body="This card has an icon with border and padding in horizontal layout."
              >
                <Button variant="primary">Action</Button>
              </Card>
            </div>

            {/* Icon + Stroke + Vertical */}
            <div>
              <p className="text-sm text-gray-500 mb-2">
                Icon • Stroke • Vertical
              </p>
              <Card
                assetType="Icon"
                variant="Stroke"
                direction="Vertical"
                heading="Vertical Bordered Icon"
                body="This card has an icon on top with border and padding."
              >
                <Button variant="primary">Action</Button>
              </Card>
            </div>
          </div>
        </div>

        {/* Image Variants */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Image Variants</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Image + Default + Horizontal */}
            <div>
              <p className="text-sm text-gray-500 mb-2">
                Image • Default • Horizontal
              </p>
              <Card
                assetType="Image"
                variant="Default"
                direction="Horizontal"
                heading="Image Card"
                body="This card displays a 160x160px image placeholder with no border."
              >
                <Button variant="primary">View More</Button>
              </Card>
            </div>

            {/* Image + Default + Vertical */}
            <div>
              <p className="text-sm text-gray-500 mb-2">
                Image • Default • Vertical
              </p>
              <Card
                assetType="Image"
                variant="Default"
                direction="Vertical"
                heading="Vertical Image Card"
                body="This card has an image on top with no border."
              >
                <Button variant="primary">View More</Button>
              </Card>
            </div>

            {/* Image + Stroke + Horizontal */}
            <div>
              <p className="text-sm text-gray-500 mb-2">
                Image • Stroke • Horizontal
              </p>
              <Card
                assetType="Image"
                variant="Stroke"
                direction="Horizontal"
                heading="Bordered Image Card"
                body="This card has an image with border and padding in horizontal layout."
              >
                <Button variant="primary">View More</Button>
              </Card>
            </div>

            {/* Image + Stroke + Vertical */}
            <div>
              <p className="text-sm text-gray-500 mb-2">
                Image • Stroke • Vertical
              </p>
              <Card
                assetType="Image"
                variant="Stroke"
                direction="Vertical"
                heading="Vertical Bordered Image"
                body="This card has an image on top with border and padding."
              >
                <Button variant="primary">View More</Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Content Examples */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Custom Content Examples</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card
            heading="Premium Feature"
            body="Unlock advanced capabilities with our premium tier. Get access to exclusive tools, priority support, and unlimited projects."
            variant="Stroke"
            direction="Horizontal"
          >
            <ButtonGroup align="justify">
              <Button variant="primary">Upgrade Now</Button>
              <Button variant="neutral">Learn More</Button>
            </ButtonGroup>
          </Card>

          <Card
            heading="Customer Success Story"
            body="See how our platform helped increase productivity by 300% and reduce operational costs significantly."
            assetType="Image"
            variant="Stroke"
            direction="Vertical"
          >
            <Button variant="primary">Read Story</Button>
          </Card>
        </div>
      </section>

      {/* Without Buttons */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Without Buttons</h2>
        <p className="text-gray-600 mb-6">
          Simply don't pass{" "}
          <code className="bg-gray-100 px-2 py-1 rounded">children</code> to
          hide the button section:
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card
            heading="Information Card"
            body="This card provides information without requiring user action. Perfect for displaying stats, facts, or announcements."
            variant="Stroke"
          />

          <Card
            heading="Testimonial"
            body="This product completely transformed how we work. The team is more productive and our clients are happier than ever!"
            assetType="Image"
            variant="Default"
            direction="Vertical"
          />
        </div>
      </section>

      {/* Custom Image Examples */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Custom Image Examples</h2>
        <p className="text-gray-600 mb-6">
          Pass a custom image path via the{" "}
          <code className="bg-gray-100 px-2 py-1 rounded">image</code> prop to
          display actual images instead of placeholders:
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card
            assetType="Image"
            image="/avatar5.svg"
            alt="User avatar"
            heading="User Profile"
            body="Display custom images like avatars, product photos, or any visual content with the image prop."
            variant="Stroke"
            direction="Horizontal"
          >
            <Button variant="neutral">View Profile</Button>
          </Card>

          <Card
            assetType="Image"
            image="/avatar5.svg"
            alt="Team member"
            heading="Team Member"
            body="Perfect for team pages, user directories, or any content that benefits from visual representation."
            variant="Stroke"
            direction="Vertical"
          >
            <Button variant="primary">Contact</Button>
          </Card>
        </div>
      </section>

      {/* Custom Icon Override */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Custom Icon Override</h2>
        <p className="text-gray-600 mb-6">
          Pass a custom icon via the{" "}
          <code className="bg-gray-100 px-2 py-1 rounded">icon</code> prop:
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card
            heading="Custom Icon Example"
            body="Replace the default Info icon with any custom React component or SVG icon of your choice."
            icon={
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 4L4 10v8c0 7.5 5.2 14.5 12 16.3 6.8-1.8 12-8.8 12-16.3v-8L16 4z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
                <path
                  d="M12 16l3 3 6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
            variant="Stroke"
          >
            <Button variant="primary">Secure Now</Button>
          </Card>

          <Card
            heading="Warning Alert"
            body="Use custom icons to convey different states like warnings, errors, or success messages."
            icon={
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 2L2 28h28L16 2z"
                  stroke="#ff9800"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
                <path
                  d="M16 12v6M16 22v2"
                  stroke="#ff9800"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            }
            variant="Stroke"
          >
            <ButtonDanger>Review</ButtonDanger>
          </Card>
        </div>
      </section>

      {/* Real-World Examples */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Real-World Examples</h2>

        <div className="space-y-8">
          {/* Feature Showcase */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Feature Showcase</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card
                heading="Fast Performance"
                body="Lightning-fast load times ensure your users stay engaged and productive."
                variant="Default"
                direction="Vertical"
              />
              <Card
                heading="Secure by Default"
                body="Enterprise-grade security keeps your data safe with end-to-end encryption."
                variant="Default"
                direction="Vertical"
              />
              <Card
                heading="Easy Integration"
                body="Get started in minutes with our simple API and comprehensive documentation."
                variant="Default"
                direction="Vertical"
              />
            </div>
          </div>

          {/* Product Cards */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Product Cards</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card
                heading="Pro Plan"
                body="Perfect for growing teams. Includes advanced features, priority support, and unlimited projects."
                assetType="Image"
                variant="Stroke"
                direction="Horizontal"
              >
                <Button variant="primary">Start Free Trial</Button>
              </Card>
              <Card
                heading="Enterprise Plan"
                body="For large organizations. Custom integrations, dedicated support, and SLA guarantees."
                assetType="Image"
                variant="Stroke"
                direction="Horizontal"
              >
                <Button variant="primary">Contact Sales</Button>
              </Card>
            </div>
          </div>

          {/* Testimonials */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Testimonials</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card
                heading="Amazing Product!"
                body="This tool has completely transformed how our team collaborates. We've seen a 50% increase in productivity since switching."
                assetType="Image"
                variant="Default"
                direction="Horizontal"
              />
              <Card
                heading="Best Decision Ever"
                body="The customer support is outstanding and the features are exactly what we needed. Highly recommended for any team!"
                assetType="Image"
                variant="Default"
                direction="Horizontal"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Design Tokens */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Design Tokens Used</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Colors</h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <code>--sds-color-text-default-default</code>: #1e1e1e
                </li>
                <li>
                  <code>--sds-color-text-default-secondary</code>: #757575
                </li>
                <li>
                  <code>--sds-color-background-default-default</code>: #ffffff
                </li>
                <li>
                  <code>--sds-color-border-default-default</code>: #d9d9d9
                </li>
                <li>
                  <code>--sds-color-slate-200</code>: #e3e3e3
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Typography</h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <code>--sds-typography-heading-font-family</code>: Inter
                </li>
                <li>
                  <code>--sds-typography-heading-font-weight</code>: 600
                </li>
                <li>
                  <code>--sds-typography-heading-size-base</code>: 24px
                </li>
                <li>
                  <code>--sds-typography-body-font-family</code>: Inter
                </li>
                <li>
                  <code>--sds-typography-body-font-weight-regular</code>: 400
                </li>
                <li>
                  <code>--sds-typography-body-size-medium</code>: 16px
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Spacing</h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <code>--sds-size-space-200</code>: 8px
                </li>
                <li>
                  <code>--sds-size-space-400</code>: 16px
                </li>
                <li>
                  <code>--sds-size-space-600</code>: 24px
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Sizing & Radius</h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <code>--sds-size-radius-200</code>: 8px
                </li>
                <li>
                  <code>--sds-size-stroke-border</code>: 1px
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Accessibility Features */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Accessibility Features</h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <ul className="space-y-2">
            <li>
              ✓ Semantic HTML with proper heading hierarchy (
              <code>&lt;h2&gt;</code> for heading)
            </li>
            <li>
              ✓ Decorative images marked with <code>aria-hidden="true"</code>
            </li>
            <li>
              ✓ WCAG-compliant color contrast (18.3:1 for heading, 7.8:1 for
              body)
            </li>
            <li>✓ Keyboard navigation support via ButtonGroup</li>
            <li>✓ Touch targets meet 44px minimum (icon 32px, image 160px)</li>
            <li>✓ Responsive design with mobile-optimized layouts</li>
          </ul>
        </div>
      </section>

      {/* Props Reference */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Props Reference</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                  Prop
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                  Default
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 text-sm font-mono">heading</td>
                <td className="px-6 py-4 text-sm font-mono">string</td>
                <td className="px-6 py-4 text-sm font-mono">"Title"</td>
                <td className="px-6 py-4 text-sm">Main heading text content</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-mono">body</td>
                <td className="px-6 py-4 text-sm font-mono">string</td>
                <td className="px-6 py-4 text-sm font-mono">"Body text..."</td>
                <td className="px-6 py-4 text-sm">
                  Secondary body text content
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-mono">icon</td>
                <td className="px-6 py-4 text-sm font-mono">
                  ReactNode | null
                </td>
                <td className="px-6 py-4 text-sm font-mono">null</td>
                <td className="px-6 py-4 text-sm">
                  Custom icon node (overrides default Info icon)
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-mono">assetType</td>
                <td className="px-6 py-4 text-sm font-mono">
                  "Icon" | "Image"
                </td>
                <td className="px-6 py-4 text-sm font-mono">"Icon"</td>
                <td className="px-6 py-4 text-sm">Type of asset to display</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-mono">variant</td>
                <td className="px-6 py-4 text-sm font-mono">
                  "Stroke" | "Default"
                </td>
                <td className="px-6 py-4 text-sm font-mono">"Stroke"</td>
                <td className="px-6 py-4 text-sm">Border styling variant</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-mono">direction</td>
                <td className="px-6 py-4 text-sm font-mono">
                  "Horizontal" | "Vertical"
                </td>
                <td className="px-6 py-4 text-sm font-mono">"Horizontal"</td>
                <td className="px-6 py-4 text-sm">Layout direction</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-mono">image</td>
                <td className="px-6 py-4 text-sm font-mono">string</td>
                <td className="px-6 py-4 text-sm font-mono">undefined</td>
                <td className="px-6 py-4 text-sm">
                  Path to image asset (used when assetType is "Image")
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-mono">alt</td>
                <td className="px-6 py-4 text-sm font-mono">string</td>
                <td className="px-6 py-4 text-sm font-mono">undefined</td>
                <td className="px-6 py-4 text-sm">
                  Alt text for image (falls back to heading or "Card image")
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-mono">children</td>
                <td className="px-6 py-4 text-sm font-mono">ReactNode</td>
                <td className="px-6 py-4 text-sm font-mono">undefined</td>
                <td className="px-6 py-4 text-sm">
                  Button components to render in button group
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-mono">className</td>
                <td className="px-6 py-4 text-sm font-mono">string</td>
                <td className="px-6 py-4 text-sm font-mono">undefined</td>
                <td className="px-6 py-4 text-sm">Additional CSS classes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
