import { StatsCard } from "../ui/primitives/Card";
import {
  IconClock,
  IconUser,
  IconHome,
  IconCode,
  IconTrendingUp,
  IconRefreshCw,
  IconArrowRight,
} from "../ui/icons";

export default function StatsCardDemo() {
  return (
    <div className="space-y-12 p-8">
      {/* Header */}
      <section>
        <h1 className="text-3xl font-bold mb-4">Stats Card</h1>
        <p className="text-lg text-gray-600 mb-4">
          A compact, reusable component designed to display statistical
          information with a prominent icon, a numerical headline, and
          supporting body text. Perfect for dashboards, analytics interfaces,
          and data visualization layouts.
        </p>
        <p className="text-sm text-gray-500">
          <strong>Figma Source:</strong>{" "}
          <a
            href="https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=2236:15082"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Stats Card Component
          </a>
        </p>
      </section>

      {/* Basic Usage */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Basic Usage</h2>
        <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg inline-block">
          <StatsCard />
        </div>
        <div className="mt-4 bg-gray-50 p-4 rounded">
          <code className="text-sm">{`<StatsCard />`}</code>
        </div>
      </section>

      {/* With Custom Content */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">With Custom Content</h2>
        <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg inline-block">
          <StatsCard value="1,234" label="Total Users" />
        </div>
        <div className="mt-4 bg-gray-50 p-4 rounded">
          <pre className="text-sm overflow-x-auto">
            {`<StatsCard
  value="1,234"
  label="Total Users"
/>`}
          </pre>
        </div>
      </section>

      {/* With Custom Icon */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">With Custom Icon</h2>
        <p className="text-gray-600 mb-6">
          Pass an Icon component via the{" "}
          <code className="bg-gray-100 px-2 py-1 rounded">icon</code> prop:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatsCard
            icon={<IconUser size="40" />}
            value="567"
            label="Active Users"
          />
          <StatsCard
            icon={<IconHome size="40" />}
            value="42"
            label="Properties"
          />
          <StatsCard
            icon={<IconCode size="40" />}
            value="128"
            label="API Calls"
          />
        </div>
        <div className="mt-4 bg-gray-50 p-4 rounded">
          <pre className="text-sm overflow-x-auto">
            {`<StatsCard
  icon={<IconUser size="40" />}
  value="567"
  label="Active Users"
/>
<StatsCard
  icon={<IconHome size="40" />}
  value="42"
  label="Properties"
/>
<StatsCard
  icon={<IconCode size="40" />}
  value="128"
  label="API Calls"
/>`}
          </pre>
        </div>
      </section>

      {/* Icon Sizes */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Icon Sizes</h2>
        <p className="text-gray-600 mb-6">
          Control the icon size using the Icon component's{" "}
          <code className="bg-gray-100 px-2 py-1 rounded">size</code> prop:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
          <StatsCard
            icon={<IconClock size="14" />}
            value="100"
            label="Size 14"
          />
          <StatsCard
            icon={<IconClock size="16" />}
            value="100"
            label="Size 16"
          />
          <StatsCard
            icon={<IconClock size="20" />}
            value="100"
            label="Size 20"
          />
          <StatsCard
            icon={<IconClock size="24" />}
            value="100"
            label="Size 24"
          />
          <StatsCard
            icon={<IconClock size="32" />}
            value="100"
            label="Size 32"
          />
          <StatsCard
            icon={<IconClock size="40" />}
            value="100"
            label="Size 40"
          />
        </div>
        <div className="mt-4 bg-gray-50 p-4 rounded">
          <pre className="text-sm overflow-x-auto">
            {`<StatsCard icon={<IconClock size="14" />} value="100" label="Size 14" />
<StatsCard icon={<IconClock size="16" />} value="100" label="Size 16" />
<StatsCard icon={<IconClock size="20" />} value="100" label="Size 20" />
<StatsCard icon={<IconClock size="24" />} value="100" label="Size 24" />
<StatsCard icon={<IconClock size="32" />} value="100" label="Size 32" />
<StatsCard icon={<IconClock size="40" />} value="100" label="Size 40" />`}
          </pre>
        </div>
      </section>

      {/* Stats Dashboard Grid */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Dashboard Grid</h2>
        <p className="text-gray-600 mb-6">
          Stats Cards work great in grid layouts for dashboards and analytics:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard
            icon={<IconClock size="40" />}
            value="2,847"
            label="Total Visitors"
          />
          <StatsCard
            icon={<IconUser size="40" />}
            value="1,439"
            label="New Users"
          />
          <StatsCard
            icon={<IconTrendingUp size="40" />}
            value="$12,847"
            label="Revenue"
          />
          <StatsCard
            icon={<IconClock size="40" />}
            value="94.3%"
            label="Satisfaction"
          />
        </div>
      </section>

      {/* Real-World Examples */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Real-World Examples</h2>

        {/* Analytics Dashboard */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Analytics Dashboard</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatsCard
              icon={<IconClock size="40" />}
              value="24,567"
              label="Page Views"
            />
            <StatsCard
              icon={<IconArrowRight size="40" />}
              value="8.5%"
              label="Conversion Rate"
            />
            <StatsCard
              icon={<IconRefreshCw size="40" />}
              value="3m 24s"
              label="Avg. Session"
            />
          </div>
        </div>

        {/* E-commerce Metrics */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">E-commerce Metrics</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard
              icon={<IconTrendingUp size="40" />}
              value="$45,231"
              label="Total Sales"
            />
            <StatsCard
              icon={<IconClock size="40" />}
              value="892"
              label="Orders"
            />
            <StatsCard
              icon={<IconTrendingUp size="40" />}
              value="$50.72"
              label="Avg. Order Value"
            />
            <StatsCard
              icon={<IconCode size="40" />}
              value="4,231"
              label="Products Sold"
            />
          </div>
        </div>

        {/* Server Metrics */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Server Metrics</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard value="99.98%" label="Uptime" />
            <StatsCard value="45ms" label="Response Time" />
            <StatsCard value="1.2M" label="Requests" />
            <StatsCard value="0.01%" label="Error Rate" />
          </div>
        </div>

        {/* Team Performance */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Team Performance</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatsCard
              icon={<IconClock size="40" />}
              value="147"
              label="Tasks Completed"
            />
            <StatsCard
              icon={<IconCode size="40" />}
              value="23"
              label="Projects Active"
            />
            <StatsCard
              icon={<IconUser size="40" />}
              value="12"
              label="Team Members"
            />
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
                  <code>--sds-color-background-default-default</code>: #ffffff
                </li>
                <li>
                  <code>--sds-color-border-default-default</code>: #d9d9d9
                </li>
                <li>
                  <code>--sds-color-text-default-default</code>: #1e1e1e
                </li>
                <li>
                  <code>--sds-color-icon-default-default</code>: #1e1e1e
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
                  <code>--sds-typography-heading-size-base</code>: 24px
                </li>
                <li>
                  <code>--sds-typography-heading-font-weight</code>: 600
                </li>
                <li>
                  <code>--sds-typography-body-font-family</code>: Inter
                </li>
                <li>
                  <code>--sds-typography-body-size-medium</code>: 16px
                </li>
                <li>
                  <code>--sds-typography-body-font-weight-regular</code>: 400
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Spacing</h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <code>--sds-size-space-100</code>: 4px
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
                <li>Icon Size: 40px</li>
                <li>Min Card Width: 240px</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Accessibility Features */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Accessibility Features</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <ul className="space-y-2 text-sm">
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span>
                <strong>Semantic HTML:</strong> Uses article element for proper
                document structure
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span>
                <strong>ARIA Labels:</strong> Includes descriptive aria-label
                combining label and value
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span>
                <strong>Decorative Icons:</strong> Icons marked with
                aria-hidden="true"
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span>
                <strong>Color Contrast:</strong> Text color (#1e1e1e) on white
                provides 18:1 ratio (WCAG AAA)
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span>
                <strong>Typography Components:</strong> Uses design system
                typography for consistency
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span>
                <strong>Centered Layout:</strong> Clear visual hierarchy with
                centered alignment
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span>
                <strong>Responsive Design:</strong> Maintains readability at
                minimum 240px width
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Props Reference */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Props Reference</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200">
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
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 text-sm font-mono">icon</td>
                <td className="px-6 py-4 text-sm font-mono">IconElement</td>
                <td className="px-6 py-4 text-sm font-mono">undefined</td>
                <td className="px-6 py-4 text-sm">
                  Optional Icon component from design system (e.g., IconClock,
                  IconUser). Ignore icon prop to hide icon section. Control size
                  via Icon component's size prop.
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-mono">value</td>
                <td className="px-6 py-4 text-sm font-mono">string</td>
                <td className="px-6 py-4 text-sm font-mono">"100"</td>
                <td className="px-6 py-4 text-sm">
                  Statistical value to display
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-mono">label</td>
                <td className="px-6 py-4 text-sm font-mono">string</td>
                <td className="px-6 py-4 text-sm font-mono">"Body text"</td>
                <td className="px-6 py-4 text-sm">
                  Label describing the statistic
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
