import { TextHeading } from "../ui/typography/TextHeading";

export function TextHeadingDemo() {
  return (
    <div className="flex flex-col gap-12">
      <div>
        <h2 className="text-2xl font-bold mb-4">TextHeading Component</h2>
        <p className="text-(--sds-color-text-default-secondary) mb-8">
          A fundamental typography primitive for rendering heading text with
          consistent styling. Applies pre-defined heading typography standards
          including font family, weight, size, and line height.
        </p>
      </div>

      {/* Basic Usage */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Basic Usage</h3>
        <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
          <TextHeading />
        </div>
      </section>

      {/* Custom Text */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Custom Text Examples</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-medium mb-3">Section Heading</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <TextHeading text="Welcome to Our Platform" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-3">Feature Title</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <TextHeading text="Advanced Features" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-3">Content Section</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <TextHeading text="What Our Customers Say" />
            </div>
          </div>
        </div>
      </section>

      {/* Real-world Examples */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Real-world Examples</h3>

        <div className="space-y-8">
          {/* Article Header */}
          <div>
            <h4 className="text-lg font-medium mb-3">Article Header</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <article className="max-w-2xl">
                <TextHeading text="Getting Started with React" />
                <p className="mt-4 text-gray-600">
                  Learn the fundamentals of React and build your first
                  component. This comprehensive guide covers everything from
                  setup to deployment.
                </p>
              </article>
            </div>
          </div>

          {/* Feature Section */}
          <div>
            <h4 className="text-lg font-medium mb-3">Feature Section</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <section className="max-w-3xl">
                <TextHeading text="Powerful Features" />
                <div className="mt-6 grid grid-cols-2 gap-6">
                  <div className="p-4 bg-gray-50 rounded">
                    <h4 className="font-semibold mb-2">Fast Performance</h4>
                    <p className="text-sm text-gray-600">
                      Optimized for speed and efficiency
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded">
                    <h4 className="font-semibold mb-2">Easy Integration</h4>
                    <p className="text-sm text-gray-600">
                      Seamlessly integrate with your workflow
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Content Card */}
          <div>
            <h4 className="text-lg font-medium mb-3">Content Card</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <div className="max-w-md p-6 bg-white shadow-lg rounded-lg">
                <TextHeading text="Premium Plan" />
                <p className="mt-2 text-gray-600">
                  Everything you need to scale your business
                </p>
                <ul className="mt-4 space-y-2 text-sm">
                  <li>✓ Unlimited projects</li>
                  <li>✓ Priority support</li>
                  <li>✓ Advanced analytics</li>
                </ul>
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
                <p className="text-gray-600">600 (Semi Bold)</p>
              </div>
              <div>
                <strong>Font Size:</strong>
                <p className="text-gray-600">24px</p>
              </div>
              <div>
                <strong>Line Height:</strong>
                <p className="text-gray-600">1.2 (120%)</p>
              </div>
              <div>
                <strong>Letter Spacing:</strong>
                <p className="text-gray-600">-0.48px</p>
              </div>
              <div>
                <strong>Text Color:</strong>
                <p className="text-gray-600">#1e1e1e</p>
              </div>
            </div>
            <div className="mt-6 p-4 bg-gray-50 rounded">
              <strong>Design Tokens:</strong>
              <ul className="mt-2 space-y-1 text-xs font-mono text-gray-600">
                <li>--sds-typography-heading-font-family</li>
                <li>--sds-typography-heading-font-weight</li>
                <li>--sds-typography-heading-size-base</li>
                <li>--sds-color-text-default-default</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TextHeadingDemo;
