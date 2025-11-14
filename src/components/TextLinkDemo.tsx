import { TextLink } from "../ui/typography/TextLink";

export function TextLinkDemo() {
  return (
    <div className="flex flex-col gap-12">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold mb-4">TextLink Component</h2>
        <p className="text-(--sds-color-text-default-secondary) mb-8">
          A minimal, reusable text-based hyperlink element with visual feedback
          through underline decoration. Designed with semantic HTML for
          accessibility and consistent typography from the design system.
        </p>
      </div>

      {/* Basic Usage */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Basic Usage</h3>
        <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
          <TextLink />
        </div>
      </section>

      {/* Common Link Types */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Common Link Types</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-medium mb-3">Navigation Links</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <div className="flex gap-6">
                <TextLink text="Home" href="/" />
                <TextLink text="About" href="/about" />
                <TextLink text="Contact" href="/contact" />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-3">Action Links</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <div className="flex flex-col gap-3">
                <TextLink text="Learn More" href="/learn" />
                <TextLink text="Read More" href="/article" />
                <TextLink text="View Details" href="/details" />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-3">External Links</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <div className="flex flex-col gap-3">
                <TextLink
                  text="Visit Documentation"
                  href="https://example.com/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                />
                <TextLink
                  text="GitHub Repository"
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-3">Inline Text Links</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <p className="text-base leading-relaxed">
                Our platform provides powerful tools for developers. You can{" "}
                <TextLink text="read our guide" href="/guide" /> to get started,
                or <TextLink text="join the community" href="/community" /> to
                connect with other users. For advanced features, check out{" "}
                <TextLink text="the documentation" href="/docs" />.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Real-world Examples */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Real-world Examples</h3>

        <div className="space-y-8">
          {/* Article with Links */}
          <div>
            <h4 className="text-lg font-medium mb-3">Article with Links</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <article className="max-w-2xl space-y-4">
                <h3 className="text-2xl font-bold">
                  Getting Started with React
                </h3>
                <p className="text-gray-600">
                  React is a popular JavaScript library for building user
                  interfaces. In this guide, we'll cover the basics and help
                  you create your first component.
                </p>
                <div className="flex gap-4">
                  <TextLink text="Read Full Article →" href="/article/react" />
                  <TextLink text="View Examples" href="/examples" />
                </div>
              </article>
            </div>
          </div>

          {/* Footer Navigation */}
          <div>
            <h4 className="text-lg font-medium mb-3">Footer Navigation</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <footer className="max-w-4xl">
                <div className="grid grid-cols-3 gap-8">
                  <div>
                    <h4 className="font-semibold mb-3">Product</h4>
                    <div className="flex flex-col gap-2">
                      <TextLink text="Features" href="/features" />
                      <TextLink text="Pricing" href="/pricing" />
                      <TextLink text="Security" href="/security" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Company</h4>
                    <div className="flex flex-col gap-2">
                      <TextLink text="About" href="/about" />
                      <TextLink text="Blog" href="/blog" />
                      <TextLink text="Careers" href="/careers" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Resources</h4>
                    <div className="flex flex-col gap-2">
                      <TextLink text="Documentation" href="/docs" />
                      <TextLink text="Help Center" href="/help" />
                      <TextLink text="Contact" href="/contact" />
                    </div>
                  </div>
                </div>
              </footer>
            </div>
          </div>

          {/* Card with Call-to-Action Link */}
          <div>
            <h4 className="text-lg font-medium mb-3">
              Card with Call-to-Action
            </h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <div className="max-w-md p-6 bg-white shadow-lg rounded-lg">
                <h3 className="text-xl font-bold mb-2">Premium Features</h3>
                <p className="text-gray-600 mb-4">
                  Unlock advanced capabilities with our premium plan. Get access
                  to exclusive features and priority support.
                </p>
                <TextLink text="Learn more about Premium →" href="/premium" />
              </div>
            </div>
          </div>

          {/* Breadcrumb Navigation */}
          <div>
            <h4 className="text-lg font-medium mb-3">Breadcrumb Navigation</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <nav className="flex items-center gap-2 text-sm">
                <TextLink text="Home" href="/" />
                <span className="text-gray-400">/</span>
                <TextLink text="Products" href="/products" />
                <span className="text-gray-400">/</span>
                <TextLink text="Category" href="/products/category" />
                <span className="text-gray-400">/</span>
                <span className="text-gray-600">Current Page</span>
              </nav>
            </div>
          </div>

          {/* Help Text with Link */}
          <div>
            <h4 className="text-lg font-medium mb-3">Help Text with Link</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <div className="max-w-md p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-700">
                  Need help getting started?{" "}
                  <TextLink text="Read our quick start guide" href="/quickstart" />{" "}
                  or{" "}
                  <TextLink text="contact our support team" href="/support" />.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive States */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Interactive States</h3>
        <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-600 mb-2">
                Default state with underline:
              </p>
              <TextLink text="Default Link" href="#" />
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2">
                Hover to see color change (hover over link):
              </p>
              <TextLink text="Hover Over Me" href="#" />
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2">
                Focus with keyboard (Tab to focus):
              </p>
              <TextLink text="Focus Me with Tab" href="#" />
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2">
                With click handler (prevents default):
              </p>
              <TextLink
                text="Click Handler Example"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Link clicked!");
                }}
              />
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
                <p className="text-gray-600">Inter, Regular</p>
              </div>
              <div>
                <strong>Font Weight:</strong>
                <p className="text-gray-600">400 (Regular)</p>
              </div>
              <div>
                <strong>Font Size:</strong>
                <p className="text-gray-600">16px</p>
              </div>
              <div>
                <strong>Line Height:</strong>
                <p className="text-gray-600">1.4 (140%)</p>
              </div>
              <div>
                <strong>Text Color:</strong>
                <p className="text-gray-600">#1e1e1e (default)</p>
              </div>
              <div>
                <strong>Text Decoration:</strong>
                <p className="text-gray-600">Underline (solid)</p>
              </div>
              <div>
                <strong>Hover Color:</strong>
                <p className="text-gray-600">#0066cc (blue)</p>
              </div>
              <div>
                <strong>Focus Outline:</strong>
                <p className="text-gray-600">2px solid #0066cc</p>
              </div>
            </div>
            <div className="mt-6 p-4 bg-gray-50 rounded">
              <strong>Design Tokens:</strong>
              <ul className="mt-2 space-y-1 text-xs font-mono text-gray-600">
                <li>--sds-typography-body-font-family</li>
                <li>--sds-typography-body-font-weight-regular</li>
                <li>--sds-typography-body-size-medium</li>
                <li>--sds-color-text-default-default</li>
              </ul>
            </div>
            <div className="mt-6 p-4 bg-blue-50 rounded">
              <strong>Accessibility Features:</strong>
              <ul className="mt-2 space-y-1 text-gray-700">
                <li>✓ Semantic HTML (&lt;a&gt; tag)</li>
                <li>✓ Keyboard navigation support</li>
                <li>✓ Visible focus indicator</li>
                <li>✓ Underline for visual indication</li>
                <li>✓ Color contrast meets WCAG AA standards</li>
                <li>✓ Support for external link attributes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TextLinkDemo;
