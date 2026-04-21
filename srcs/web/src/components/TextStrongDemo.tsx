import { TextStrong } from "../ui/typography/TextStrong";
import { Text } from "../ui/typography/Text";

export function TextStrongDemo() {
  return (
    <div className="flex flex-col gap-12">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold mb-4">TextStrong Component</h2>
        <p className="text-(--sds-color-text-default-secondary) mb-8">
          A typography primitive for rendering bold/semi-bold body text with
          increased font weight (600). Used for emphasizing important content,
          labels, captions, and highlighted text within the design system.
        </p>
      </div>

      {/* Basic Usage */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Basic Usage</h3>
        <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
          <TextStrong />
        </div>
      </section>

      {/* Custom Text Examples */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Custom Text Examples</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-medium mb-3">Emphasis Text</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <TextStrong text="This is important information" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-3">Label Text</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <TextStrong text="Required Field" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-3">Combined with Regular Text</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <div className="flex flex-col gap-4">
                <Text text="This is regular body text with normal font weight (400)." />
                <TextStrong text="This is strong text with bold font weight (600) for emphasis." />
                <Text text="Back to regular text for standard content." />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-3">Longer Content</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <TextStrong text="This is a longer paragraph of bold text that demonstrates how the TextStrong component handles emphasized body copy. It maintains consistent typography with proper line height and font weight for comfortable reading." />
            </div>
          </div>
        </div>
      </section>

      {/* Real-world Examples */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Real-world Examples</h3>

        <div className="space-y-8">
          {/* Call-out Box */}
          <div>
            <h4 className="text-lg font-medium mb-3">Call-out Box</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <div className="max-w-2xl p-6 bg-blue-50 border-l-4 border-blue-500 rounded">
                <TextStrong text="Important Notice" />
                <div className="mt-2">
                  <Text text="Your account will be upgraded to the premium plan starting next month. You'll receive all premium features including priority support and advanced analytics." />
                </div>
              </div>
            </div>
          </div>

          {/* Feature Highlights */}
          <div>
            <h4 className="text-lg font-medium mb-3">Feature Highlights</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <section className="max-w-3xl">
                <h2 className="text-2xl font-bold mb-6">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 bg-white shadow rounded-lg">
                    <TextStrong text="Lightning Fast" />
                    <div className="mt-2">
                      <Text text="Optimized performance with sub-second load times and smooth interactions." />
                    </div>
                  </div>
                  <div className="p-4 bg-white shadow rounded-lg">
                    <TextStrong text="Enterprise Security" />
                    <div className="mt-2">
                      <Text text="Bank-level encryption and compliance with industry standards." />
                    </div>
                  </div>
                  <div className="p-4 bg-white shadow rounded-lg">
                    <TextStrong text="24/7 Support" />
                    <div className="mt-2">
                      <Text text="Round-the-clock assistance from our dedicated support team." />
                    </div>
                  </div>
                  <div className="p-4 bg-white shadow rounded-lg">
                    <TextStrong text="Easy Integration" />
                    <div className="mt-2">
                      <Text text="Seamless setup with comprehensive documentation and APIs." />
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Product Card with Pricing */}
          <div>
            <h4 className="text-lg font-medium mb-3">Product Card</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <div className="max-w-sm p-6 bg-white shadow-lg rounded-lg">
                <h3 className="text-xl font-bold mb-2">Premium Plan</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl font-bold">$49</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <TextStrong text="Unlimited projects" />
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <TextStrong text="Priority support" />
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <TextStrong text="Advanced analytics" />
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <TextStrong text="Custom integrations" />
                  </div>
                </div>
                <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Get Started
                </button>
              </div>
            </div>
          </div>

          {/* Form Labels */}
          <div>
            <h4 className="text-lg font-medium mb-3">Form Labels</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <form className="max-w-md space-y-4">
                <div>
                  <TextStrong text="Full Name" />
                  <input
                    type="text"
                    className="mt-1 w-full px-4 py-2 border rounded-lg"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <TextStrong text="Email Address" />
                  <input
                    type="email"
                    className="mt-1 w-full px-4 py-2 border rounded-lg"
                    placeholder="john@example.com"
                  />
                  <div className="mt-1">
                    <Text text="We'll never share your email with anyone else." />
                  </div>
                </div>
                <div>
                  <TextStrong text="Password" />
                  <input
                    type="password"
                    className="mt-1 w-full px-4 py-2 border rounded-lg"
                    placeholder="••••••••"
                  />
                </div>
              </form>
            </div>
          </div>

          {/* Stats Display */}
          <div>
            <h4 className="text-lg font-medium mb-3">Statistics Display</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <div className="max-w-3xl">
                <h2 className="text-2xl font-bold mb-6">Platform Statistics</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-6 bg-white shadow rounded-lg text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">10K+</div>
                    <TextStrong text="Active Users" />
                  </div>
                  <div className="p-6 bg-white shadow rounded-lg text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">99.9%</div>
                    <TextStrong text="Uptime" />
                  </div>
                  <div className="p-6 bg-white shadow rounded-lg text-center">
                    <div className="text-4xl font-bold text-purple-600 mb-2">50M+</div>
                    <TextStrong text="API Requests" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Article with Mixed Typography */}
          <div>
            <h4 className="text-lg font-medium mb-3">Article Content</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <article className="max-w-2xl">
                <h2 className="text-2xl font-bold mb-4">Best Practices for UI Design</h2>
                <div className="space-y-4">
                  <div>
                    <TextStrong text="1. Maintain Visual Hierarchy" />
                    <div className="mt-2">
                      <Text text="Use different font weights, sizes, and colors to create a clear visual hierarchy that guides users through your content naturally." />
                    </div>
                  </div>
                  <div>
                    <TextStrong text="2. Ensure Proper Contrast" />
                    <div className="mt-2">
                      <Text text="Always verify that text has sufficient contrast against its background. Aim for WCAG AA compliance at minimum (4.5:1 for normal text)." />
                    </div>
                  </div>
                  <div>
                    <TextStrong text="3. Choose Readable Typography" />
                    <div className="mt-2">
                      <Text text="Select fonts that are easy to read at various sizes. Maintain appropriate line height (1.4-1.6) and limit line length to 50-75 characters." />
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>

          {/* Alert/Warning Messages */}
          <div>
            <h4 className="text-lg font-medium mb-3">Alert Messages</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <div className="max-w-2xl space-y-4">
                <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded">
                  <TextStrong text="Success!" />
                  <div className="mt-1">
                    <Text text="Your changes have been saved successfully." />
                  </div>
                </div>
                <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
                  <TextStrong text="Warning" />
                  <div className="mt-1">
                    <Text text="Your session will expire in 5 minutes. Please save your work." />
                  </div>
                </div>
                <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded">
                  <TextStrong text="Error" />
                  <div className="mt-1">
                    <Text text="Unable to connect to the server. Please check your internet connection and try again." />
                  </div>
                </div>
              </div>
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
                <strong>Font Family:</strong>
                <p className="text-gray-600">Inter, sans-serif</p>
              </div>
              <div>
                <strong>Font Weight:</strong>
                <p className="text-gray-600">600 (Semi Bold / Strong)</p>
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
                <strong>Text Color:</strong>
                <p className="text-gray-600">#1e1e1e</p>
              </div>
              <div>
                <strong>Layout:</strong>
                <p className="text-gray-600">Flex container, items-start</p>
              </div>
            </div>
            <div className="mt-6 p-4 bg-gray-50 rounded">
              <strong>Design Tokens:</strong>
              <ul className="mt-2 space-y-1 text-xs font-mono text-gray-600">
                <li>--sds-typography-body-font-family</li>
                <li>--sds-typography-body-font-weight-strong</li>
                <li>--sds-typography-body-size-medium</li>
                <li>--sds-color-text-default-default</li>
              </ul>
            </div>
            <div className="mt-6 p-4 bg-blue-50 rounded">
              <strong>Usage Guidelines:</strong>
              <ul className="mt-2 space-y-2 text-gray-700">
                <li>• Use for emphasizing important text within paragraphs or as labels</li>
                <li>• Font weight 600 provides clear emphasis without being too heavy</li>
                <li>• Maintains same size (16px) as regular body text - only weight differs</li>
                <li>• Perfect for form labels, feature titles, and call-out content</li>
                <li>• Pairs well with regular Text component (weight 400) for hierarchy</li>
                <li>• Maintains excellent contrast ratio (&gt;12:1) for accessibility</li>
              </ul>
            </div>
            <div className="mt-6 p-4 bg-purple-50 rounded">
              <strong>When to Use:</strong>
              <ul className="mt-2 space-y-2 text-gray-700">
                <li>• Form labels and field descriptions</li>
                <li>• Feature titles in cards or sections</li>
                <li>• Important notices or call-outs</li>
                <li>• Statistics labels or captions</li>
                <li>• Alert message titles</li>
                <li>• Pricing plan features</li>
                <li>• Article section headings (when not using heading components)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TextStrongDemo;
