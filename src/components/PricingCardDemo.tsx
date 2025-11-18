import { PricingCard } from "../ui/primitives/Card";

export default function PricingCardDemo() {
  return (
    <div className="space-y-16 p-8">
      {/* Header */}
      <section>
        <h1 className="text-3xl font-bold mb-4">PricingCard Component</h1>
        <p className="text-gray-600 mb-4">
          A comprehensive component designed to display pricing information,
          plan details, and call-to-action buttons. Showcases pricing tiers with
          titles, prices, feature lists, and actionable buttons.
        </p>
        <p className="text-gray-600 mb-4">
          The component supports multiple responsive variants (Desktop and
          Mobile) and styling options (Stroke and Brand themes), making it
          flexible for various pricing page layouts.
        </p>
        <a
          href="https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=1444-11846"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          View in Figma →
        </a>
      </section>

      {/* Basic Usage */}
      <section className="border-2 border-dashed border-amber-400 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Basic Usage</h2>
        <p className="text-gray-600 mb-6">
          Default Desktop Stroke variant with standard settings:
        </p>
        <div className="flex justify-center">
          <PricingCard />
        </div>
      </section>

      {/* Real-World Pricing Grid */}
      <section className="border-2 border-dashed border-amber-400 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Real-World Pricing Grid</h2>
        <p className="text-gray-600 mb-6">
          Three-tier pricing page with featured plan using Brand variant:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <PricingCard
            variant="Stroke"
            title="Starter"
            price="29"
            currency="$"
            priceLabel="/ mo"
            list={[
              "10 projects",
              "Basic analytics",
              "Email support",
              "Community access",
            ]}
            buttonText="Start Free Trial"
            onButtonClick={() => alert("Starter plan selected")}
          />

          <PricingCard
            variant="Stroke"
            title="Professional"
            price="99"
            currency="$"
            priceLabel="/ mo"
            list={[
              "Unlimited projects",
              "Advanced analytics",
              "Priority support",
              "Custom integrations",
            ]}
            buttonText="Subscribe Now"
            onButtonClick={() => alert("Professional plan selected")}
          />

          <PricingCard
            variant="Stroke"
            title="Enterprise"
            price="299"
            currency="$"
            priceLabel="/ mo"
            list={[
              "Unlimited everything",
              "Dedicated support",
              "SLA guarantees",
              "Custom contracts",
            ]}
            buttonText="Contact Sales"
            onButtonClick={() => alert("Enterprise plan selected")}
          />
        </div>
      </section>

      {/* Customization Examples */}
      <section className="border-2 border-dashed border-amber-400 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Customization Examples</h2>
        <p className="text-gray-600 mb-6">
          Customize content, pricing, features, and button text:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <PricingCard
            variant="Stroke"
            title="Annual Plan"
            price="990"
            currency="$"
            priceLabel="/ year"
            list={[
              "Save 2 months",
              "All Pro features",
              "Yearly invoicing",
              "Priority onboarding",
            ]}
            buttonText="Buy Annual"
          />

          <PricingCard
            variant="Stroke"
            title="Lifetime"
            price="2,499"
            currency="$"
            priceLabel=""
            list={[
              "One-time payment",
              "Lifetime updates",
              "Forever support",
              "VIP community",
            ]}
            buttonText="Get Lifetime Access"
          />
        </div>
      </section>

      {/* Design Tokens Used */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Design Tokens Used</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Colors</h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <code>--sds-color-background-default-default</code>: #ffffff
                  (Stroke card)
                </li>
                <li>
                  <code>--sds-color-background-brand-default</code>: #2c2c2c
                  (Brand card, Stroke button)
                </li>
                <li>
                  <code>--sds-color-background-neutral-tertiary</code>: #e3e3e3
                  (Brand button)
                </li>
                <li>
                  <code>--sds-color-border-default-default</code>: #d9d9d9
                  (Stroke card border)
                </li>
                <li>
                  <code>--sds-color-border-brand-default</code>: #2c2c2c (Brand
                  card border)
                </li>
                <li>
                  <code>--sds-color-border-neutral-secondary</code>: #767676
                  (Brand button border)
                </li>
                <li>
                  <code>--sds-color-text-default-default</code>: #1e1e1e (Brand
                  button text)
                </li>
                <li>
                  <code>--sds-color-text-brand-on-brand</code>: #f5f5f5 (Stroke
                  button text)
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
                  <code>--sds-typography-heading-font-weight</code>: 600 (Semi
                  Bold)
                </li>
                <li>
                  <code>--sds-typography-heading-size-base</code>: 24px (Title)
                </li>
                <li>
                  <code>--sds-typography-subtitle-size-small</code>: 24px
                  (Price)
                </li>
                <li>
                  <code>--sds-typography-body-font-family</code>: Inter
                </li>
                <li>
                  <code>--sds-typography-body-font-weight-regular</code>: 400
                </li>
                <li>
                  <code>--sds-typography-body-size-small</code>: 14px (Price
                  label)
                </li>
                <li>
                  <code>--sds-typography-body-size-medium</code>: 16px (Button
                  text)
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Spacing</h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <code>--sds-size-space-200</code>: 8px (Button gap)
                </li>
                <li>
                  <code>--sds-size-space-300</code>: 12px (Button padding)
                </li>
                <li>
                  <code>--sds-size-space-400</code>: 16px (Top section gap)
                </li>
                <li>
                  <code>--sds-size-space-600</code>: 24px (Card main gap, Mobile
                  padding)
                </li>
                <li>
                  <code>--sds-size-space-800</code>: 32px (Desktop padding)
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Sizing & Radius</h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <code>--sds-size-radius-200</code>: 8px (Card border radius)
                </li>
                <li>
                  <code>--sds-size-stroke-border</code>: 1px (Border width)
                </li>
                <li>Card Width: 300px (Fixed width)</li>
                <li>Card Min-Width: 240px (Minimum constraint)</li>
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
              ✓ Semantic <code>&lt;article&gt;</code> element for card container
            </li>
            <li>
              ✓ Proper <code>&lt;button&gt;</code> elements with type="button"
            </li>
            <li>
              ✓ <code>&lt;ul&gt;</code> and <code>&lt;li&gt;</code> for feature
              lists
            </li>
            <li>
              ✓ ARIA labels on card and button (e.g., "Subscribe for
              Professional plan")
            </li>
            <li>
              ✓ Keyboard accessible buttons with visible focus states (2px
              outline)
            </li>
            <li>
              ✓ WCAG AA color contrast compliance (tested for both variants)
            </li>
            <li>
              ✓ Minimum touch target size (12px padding = 48px+ height including
              content)
            </li>
            <li>
              ✓ Responsive design with device-specific layouts (Desktop/Mobile
              props)
            </li>
          </ul>
        </div>
      </section>

      {/* Responsive Behavior */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Responsive Behavior</h2>
        <div className="bg-purple-50 p-6 rounded-lg">
          <p className="text-gray-600 mb-4">
            The PricingCard component automatically adapts its layout based on
            screen size using CSS media queries at 768px breakpoint. Resize your
            browser window to see the responsive behavior in action!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">
                Desktop Layout (&gt; 768px)
              </h3>
              <ul className="space-y-1 text-sm">
                <li>
                  • All content items are <strong>centered</strong>
                </li>
                <li>
                  • Title and price displayed <strong>vertically</strong>
                </li>
                <li>
                  • TextPrice uses <strong>Large</strong> size variant
                </li>
                <li>
                  • TextList uses <strong>Default</strong> density (more
                  spacing)
                </li>
                <li>
                  • Padding: <strong>32px</strong> (premium appearance)
                </li>
                <li>• Professional, symmetrical layout for featured tiers</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Mobile Layout (&lt; 768px)</h3>
              <ul className="space-y-1 text-sm">
                <li>
                  • All content items are <strong>left-aligned</strong>
                </li>
                <li>
                  • Title and price displayed{" "}
                  <strong>horizontally side-by-side</strong>
                </li>
                <li>
                  • TextPrice uses <strong>Small</strong> size variant
                </li>
                <li>
                  • TextList uses <strong>Default</strong> density
                </li>
                <li>
                  • Padding: <strong>24px</strong> (space-efficient)
                </li>
                <li>• Compact layout optimized for mobile screens</li>
              </ul>
            </div>
          </div>
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
                <td className="px-6 py-4 text-sm font-mono">variant</td>
                <td className="px-6 py-4 text-sm font-mono">
                  "Stroke" | "Brand"
                </td>
                <td className="px-6 py-4 text-sm font-mono">"Stroke"</td>
                <td className="px-6 py-4 text-sm">
                  Determines color scheme and styling
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-mono">title</td>
                <td className="px-6 py-4 text-sm font-mono">string</td>
                <td className="px-6 py-4 text-sm font-mono">"Title"</td>
                <td className="px-6 py-4 text-sm">Plan title/name</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-mono">price</td>
                <td className="px-6 py-4 text-sm font-mono">string</td>
                <td className="px-6 py-4 text-sm font-mono">"50"</td>
                <td className="px-6 py-4 text-sm">Price amount</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-mono">currency</td>
                <td className="px-6 py-4 text-sm font-mono">string</td>
                <td className="px-6 py-4 text-sm font-mono">"$"</td>
                <td className="px-6 py-4 text-sm">Currency symbol</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-mono">priceLabel</td>
                <td className="px-6 py-4 text-sm font-mono">string</td>
                <td className="px-6 py-4 text-sm font-mono">"/ mo"</td>
                <td className="px-6 py-4 text-sm">Billing period label</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-mono">features</td>
                <td className="px-6 py-4 text-sm font-mono">string[]</td>
                <td className="px-6 py-4 text-sm font-mono">
                  ["First...", ...]
                </td>
                <td className="px-6 py-4 text-sm">List of feature items</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-mono">buttonText</td>
                <td className="px-6 py-4 text-sm font-mono">string</td>
                <td className="px-6 py-4 text-sm font-mono">"Button"</td>
                <td className="px-6 py-4 text-sm">Button text label</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-mono">onButtonClick</td>
                <td className="px-6 py-4 text-sm font-mono">() =&gt; void</td>
                <td className="px-6 py-4 text-sm font-mono">undefined</td>
                <td className="px-6 py-4 text-sm">Button click handler</td>
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
