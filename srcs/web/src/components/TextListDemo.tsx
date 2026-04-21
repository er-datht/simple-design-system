import { TextList } from "../ui/typography/TextList";
import { TextListItem } from "../ui/typography/TextListItem";

export function TextListDemo() {
  return (
    <div className="flex flex-col gap-12">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold mb-4">TextList Component</h2>
        <p className="text-(--sds-color-text-default-secondary) mb-8">
          A flexible, reusable list container that displays bulleted items with
          optional title support. Provides two density variants (Default and
          Tight) for controlling vertical spacing between list items, making it
          suitable for various content layouts from comfortable reading to
          compact displays.
        </p>
      </div>

      {/* Basic Usage */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Basic Usage</h3>
        <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
          <TextList>
            <TextListItem text="First list item" />
            <TextListItem text="Second list item" />
            <TextListItem text="Third list item" />
            <TextListItem text="Fourth list item" />
          </TextList>
        </div>
      </section>

      {/* Density Variants */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Density Variants</h3>
        <div className="space-y-6">
          {/* Default Density */}
          <div>
            <h4 className="text-lg font-medium mb-3">Default Density (12px gap)</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <TextList density="Default">
                <TextListItem text="Comfortable reading experience" />
                <TextListItem text="Standard spacing for content areas" />
                <TextListItem text="Good visual separation between items" />
                <TextListItem text="Best for primary content sections" />
                <TextListItem text="Desktop and tablet optimized" />
              </TextList>
            </div>
          </div>

          {/* Tight Density */}
          <div>
            <h4 className="text-lg font-medium mb-3">Tight Density (8px gap)</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <TextList density="Tight">
                <TextListItem text="Compact display format" />
                <TextListItem text="Space-efficient layout" />
                <TextListItem text="Ideal for sidebars and mobile" />
                <TextListItem text="Dense information displays" />
                <TextListItem text="Limited vertical space scenarios" />
              </TextList>
            </div>
          </div>
        </div>
      </section>

      {/* With Title */}
      <section>
        <h3 className="text-xl font-semibold mb-4">With Optional Title</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-medium mb-3">Default Title</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <TextList hasTitle={true}>
                <TextListItem text="Item with default title" />
                <TextListItem text="Second item in list" />
                <TextListItem text="Third item in list" />
              </TextList>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-3">Custom Title</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <TextList hasTitle={true} titleText="Key Features">
                <TextListItem text="Lightning-fast performance" />
                <TextListItem text="Intuitive user interface" />
                <TextListItem text="Comprehensive documentation" />
                <TextListItem text="Active community support" />
              </TextList>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-3">Title with Tight Density</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <TextList hasTitle={true} titleText="Benefits" density="Tight">
                <TextListItem text="Reduced memory footprint" />
                <TextListItem text="Faster load times" />
                <TextListItem text="Better mobile experience" />
                <TextListItem text="Optimized for performance" />
              </TextList>
            </div>
          </div>
        </div>
      </section>

      {/* Real-world Examples */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Real-world Examples</h3>

        <div className="space-y-8">
          {/* Product Features Section */}
          <div>
            <h4 className="text-lg font-medium mb-3">Product Features</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <div className="max-w-4xl">
                <h2 className="text-3xl font-bold mb-8">Why Choose Our Platform?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <TextList hasTitle={true} titleText="Performance">
                      <TextListItem text="Sub-second page load times" />
                      <TextListItem text="99.99% uptime guarantee" />
                      <TextListItem text="Global CDN distribution" />
                      <TextListItem text="Automatic scaling" />
                    </TextList>
                  </div>
                  <div>
                    <TextList hasTitle={true} titleText="Security">
                      <TextListItem text="256-bit SSL encryption" />
                      <TextListItem text="Regular security audits" />
                      <TextListItem text="GDPR compliant" />
                      <TextListItem text="Two-factor authentication" />
                    </TextList>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Documentation Page */}
          <div>
            <h4 className="text-lg font-medium mb-3">Documentation Requirements</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <article className="max-w-3xl">
                <h2 className="text-2xl font-bold mb-4">Installation Guide</h2>
                <p className="mb-6 text-(--sds-color-text-default-secondary)">
                  Follow these steps to get started with the platform:
                </p>

                <div className="space-y-6">
                  <section>
                    <h3 className="text-xl font-semibold mb-3">Prerequisites</h3>
                    <TextList hasTitle={true} titleText="Required Software">
                      <TextListItem text="Node.js version 18 or higher" />
                      <TextListItem text="npm or yarn package manager" />
                      <TextListItem text="Git version control" />
                      <TextListItem text="Modern web browser (Chrome, Firefox, Safari)" />
                    </TextList>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold mb-3">Installation Steps</h3>
                    <TextList>
                      <TextListItem text="Clone the repository from GitHub" />
                      <TextListItem text="Install dependencies with npm install" />
                      <TextListItem text="Configure environment variables" />
                      <TextListItem text="Run development server with npm start" />
                      <TextListItem text="Open browser to localhost:3000" />
                    </TextList>
                  </section>
                </div>
              </article>
            </div>
          </div>

          {/* Sidebar Navigation */}
          <div>
            <h4 className="text-lg font-medium mb-3">Sidebar with Tight Lists</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <div className="flex gap-8">
                {/* Main Content */}
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-4">Dashboard Overview</h2>
                  <p className="text-(--sds-color-text-default-secondary)">
                    Welcome to your dashboard. Use the sidebar to navigate
                    between different sections and features of the application.
                  </p>
                </div>

                {/* Sidebar */}
                <aside className="w-64 p-4 bg-gray-50 rounded-lg">
                  <div className="space-y-6">
                    <TextList hasTitle={true} titleText="Quick Links" density="Tight">
                      <TextListItem text="Dashboard" />
                      <TextListItem text="Projects" />
                      <TextListItem text="Team Members" />
                      <TextListItem text="Settings" />
                    </TextList>

                    <TextList hasTitle={true} titleText="Resources" density="Tight">
                      <TextListItem text="Documentation" />
                      <TextListItem text="API Reference" />
                      <TextListItem text="Support Center" />
                      <TextListItem text="Community Forum" />
                    </TextList>
                  </div>
                </aside>
              </div>
            </div>
          </div>

          {/* Pricing Card */}
          <div>
            <h4 className="text-lg font-medium mb-3">Pricing Plan Features</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl">
                {/* Basic Plan */}
                <div className="p-6 bg-white shadow-lg rounded-lg border-2 border-gray-200">
                  <h3 className="text-xl font-bold mb-2">Basic</h3>
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-3xl font-bold">$9</span>
                    <span className="text-gray-500">/month</span>
                  </div>
                  <TextList hasTitle={true} titleText="Includes">
                    <TextListItem text="5 projects" />
                    <TextListItem text="10 GB storage" />
                    <TextListItem text="Email support" />
                    <TextListItem text="Basic analytics" />
                  </TextList>
                  <button className="w-full mt-6 py-2 px-4 bg-gray-200 rounded-lg hover:bg-gray-300">
                    Choose Basic
                  </button>
                </div>

                {/* Pro Plan */}
                <div className="p-6 bg-white shadow-lg rounded-lg border-2 border-blue-500">
                  <div className="inline-block px-3 py-1 bg-blue-500 text-white text-xs font-bold rounded-full mb-2">
                    POPULAR
                  </div>
                  <h3 className="text-xl font-bold mb-2">Pro</h3>
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-3xl font-bold">$29</span>
                    <span className="text-gray-500">/month</span>
                  </div>
                  <TextList hasTitle={true} titleText="Everything in Basic, plus">
                    <TextListItem text="Unlimited projects" />
                    <TextListItem text="100 GB storage" />
                    <TextListItem text="Priority support" />
                    <TextListItem text="Advanced analytics" />
                    <TextListItem text="Custom integrations" />
                  </TextList>
                  <button className="w-full mt-6 py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    Choose Pro
                  </button>
                </div>

                {/* Enterprise Plan */}
                <div className="p-6 bg-white shadow-lg rounded-lg border-2 border-gray-200">
                  <h3 className="text-xl font-bold mb-2">Enterprise</h3>
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-3xl font-bold">$99</span>
                    <span className="text-gray-500">/month</span>
                  </div>
                  <TextList hasTitle={true} titleText="Everything in Pro, plus">
                    <TextListItem text="Unlimited storage" />
                    <TextListItem text="24/7 phone support" />
                    <TextListItem text="Dedicated account manager" />
                    <TextListItem text="Custom SLA" />
                    <TextListItem text="On-premise option" />
                  </TextList>
                  <button className="w-full mt-6 py-2 px-4 bg-gray-200 rounded-lg hover:bg-gray-300">
                    Contact Sales
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Post with Multiple Lists */}
          <div>
            <h4 className="text-lg font-medium mb-3">Blog Article Content</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <article className="max-w-3xl">
                <h1 className="text-3xl font-bold mb-4">10 Best Practices for Web Development</h1>
                <p className="text-(--sds-color-text-default-secondary) mb-8">
                  Published on November 14, 2025 • 5 min read
                </p>

                <div className="space-y-8">
                  <section>
                    <h2 className="text-2xl font-bold mb-4">Frontend Excellence</h2>
                    <p className="mb-4 text-(--sds-color-text-default-secondary)">
                      Modern frontend development requires attention to several key areas:
                    </p>
                    <TextList hasTitle={true} titleText="Core Principles">
                      <TextListItem text="Write semantic HTML for better accessibility" />
                      <TextListItem text="Use CSS custom properties for theming" />
                      <TextListItem text="Implement responsive design from mobile-first" />
                      <TextListItem text="Optimize images and assets for performance" />
                      <TextListItem text="Follow component-based architecture patterns" />
                    </TextList>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">Backend Best Practices</h2>
                    <p className="mb-4 text-(--sds-color-text-default-secondary)">
                      Server-side development should focus on these fundamentals:
                    </p>
                    <TextList hasTitle={true} titleText="Essential Guidelines">
                      <TextListItem text="Design RESTful APIs with clear endpoints" />
                      <TextListItem text="Implement proper authentication and authorization" />
                      <TextListItem text="Use database indexing for query optimization" />
                      <TextListItem text="Write comprehensive API documentation" />
                      <TextListItem text="Set up proper error handling and logging" />
                    </TextList>
                  </section>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Design Details */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Design Details</h3>
        <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
          <div className="space-y-4 text-sm">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <strong>Title Font Family:</strong>
                <p className="text-gray-600">Inter, sans-serif</p>
              </div>
              <div>
                <strong>Title Font Weight:</strong>
                <p className="text-gray-600">600 (Semi Bold)</p>
              </div>
              <div>
                <strong>List Item Font Weight:</strong>
                <p className="text-gray-600">400 (Regular)</p>
              </div>
              <div>
                <strong>Font Size:</strong>
                <p className="text-gray-600">16px (Medium Body)</p>
              </div>
              <div>
                <strong>Line Height:</strong>
                <p className="text-gray-600">1.4 (140%)</p>
              </div>
              <div>
                <strong>Title Color:</strong>
                <p className="text-gray-600">#1e1e1e (Primary)</p>
              </div>
              <div>
                <strong>Item Color:</strong>
                <p className="text-gray-600">#757575 (Secondary)</p>
              </div>
              <div>
                <strong>Bullet Indent:</strong>
                <p className="text-gray-600">24px (margin-start)</p>
              </div>
            </div>
            <div className="mt-6 p-4 bg-gray-50 rounded">
              <strong>Design Tokens:</strong>
              <ul className="mt-2 space-y-1 text-xs font-mono text-gray-600">
                <li>--sds-typography-body-font-family</li>
                <li>--sds-typography-body-font-weight-regular</li>
                <li>--sds-typography-body-font-weight-strong</li>
                <li>--sds-typography-body-size-medium</li>
                <li>--sds-color-text-default-default</li>
                <li>--sds-color-text-default-secondary</li>
                <li>--sds-size-space-200 (8px - Tight density)</li>
                <li>--sds-size-space-300 (12px - Default density)</li>
                <li>--sds-size-space-400 (16px - Title padding)</li>
              </ul>
            </div>
            <div className="mt-6 p-4 bg-blue-50 rounded">
              <strong>Usage Guidelines:</strong>
              <ul className="mt-2 space-y-2 text-gray-700">
                <li>• Use Default density (12px gap) for comfortable reading in main content areas</li>
                <li>• Switch to Tight density (8px gap) for sidebars, mobile views, or space-constrained layouts</li>
                <li>• Enable title (hasTitle) when list needs contextual heading</li>
                <li>• Component uses semantic &lt;ul&gt; element for proper accessibility</li>
                <li>• Each TextListItem renders as &lt;li&gt; with disc bullet styling</li>
                <li>• Bullet points indented 24px for clear visual hierarchy</li>
                <li>• Title text uses semi-bold weight (600) for emphasis</li>
                <li>• List items use regular weight (400) for readability</li>
              </ul>
            </div>
            <div className="mt-6 p-4 bg-purple-50 rounded">
              <strong>Common Use Cases:</strong>
              <ul className="mt-2 space-y-2 text-gray-700">
                <li>• Feature lists in marketing pages</li>
                <li>• Documentation steps and requirements</li>
                <li>• Pricing plan feature comparisons</li>
                <li>• Navigation menus in sidebars</li>
                <li>• Article content with bulleted lists</li>
                <li>• Product specifications and benefits</li>
                <li>• FAQ responses with multiple points</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TextListDemo;
