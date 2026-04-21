import { Text } from "../ui/typography/Text";

export function TextDemo() {
  return (
    <div className="flex flex-col gap-12">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Text Component</h2>
        <p className="text-(--sds-color-text-default-secondary) mb-8">
          A fundamental typography primitive for rendering body-level text content
          with consistent styling. Used for standard body copy, descriptions, and
          general content throughout the design system.
        </p>
      </div>

      {/* Basic Usage */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Basic Usage</h3>
        <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
          <Text />
        </div>
      </section>

      {/* Custom Text Examples */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Custom Text Examples</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-medium mb-3">Short Description</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <Text text="This is a simple text description." />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-3">Longer Content</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <Text text="This is a longer paragraph of text that demonstrates how the Text component handles body copy. It maintains consistent typography with proper line height for comfortable reading across different viewport sizes." />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-3">Multiple Paragraphs</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <div className="flex flex-col gap-4">
                <Text text="First paragraph of content that introduces the topic." />
                <Text text="Second paragraph providing additional details and context about the subject matter." />
                <Text text="Third paragraph concluding the discussion with final thoughts." />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real-world Examples */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Real-world Examples</h3>

        <div className="space-y-8">
          {/* Article Content */}
          <div>
            <h4 className="text-lg font-medium mb-3">Article Content</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <article className="max-w-2xl">
                <h2 className="text-2xl font-bold mb-4">Understanding React Components</h2>
                <Text text="React components are the building blocks of any React application. They allow you to split the UI into independent, reusable pieces that can be managed separately." />
                <Text text="Components can be either functional or class-based, though functional components with hooks have become the modern standard for writing React applications." />
                <div className="mt-4">
                  <Text text="By leveraging composition, components can be nested and combined to create complex user interfaces while maintaining clean, maintainable code." />
                </div>
              </article>
            </div>
          </div>

          {/* Product Description */}
          <div>
            <h4 className="text-lg font-medium mb-3">Product Description</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <div className="max-w-md p-6 bg-white shadow-lg rounded-lg">
                <h3 className="text-xl font-bold mb-2">Premium Wireless Headphones</h3>
                <p className="text-sm text-gray-500 mb-4">$299.99</p>
                <Text text="Experience crystal-clear audio with our premium wireless headphones. Featuring active noise cancellation, 30-hour battery life, and premium comfort padding for all-day wear." />
                <div className="mt-4">
                  <Text text="Perfect for commuting, working from home, or enjoying your favorite music in peace." />
                </div>
              </div>
            </div>
          </div>

          {/* Feature Section */}
          <div>
            <h4 className="text-lg font-medium mb-3">Feature Section</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <section className="max-w-3xl">
                <h2 className="text-2xl font-bold mb-4">Why Choose Our Platform</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 bg-gray-50 rounded">
                    <h4 className="font-semibold mb-2">Fast Performance</h4>
                    <Text text="Optimized for speed with sub-second load times and smooth interactions throughout your experience." />
                  </div>
                  <div className="p-4 bg-gray-50 rounded">
                    <h4 className="font-semibold mb-2">Easy Integration</h4>
                    <Text text="Seamlessly integrate with your existing tools and workflows using our comprehensive API." />
                  </div>
                  <div className="p-4 bg-gray-50 rounded">
                    <h4 className="font-semibold mb-2">24/7 Support</h4>
                    <Text text="Our dedicated support team is available around the clock to help you succeed." />
                  </div>
                  <div className="p-4 bg-gray-50 rounded">
                    <h4 className="font-semibold mb-2">Secure & Reliable</h4>
                    <Text text="Enterprise-grade security with 99.9% uptime SLA ensures your data is always safe." />
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Testimonial */}
          <div>
            <h4 className="text-lg font-medium mb-3">Testimonial Card</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <div className="max-w-lg p-6 bg-white shadow-md rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <p className="font-semibold">Sarah Johnson</p>
                    <p className="text-sm text-gray-500">Product Manager</p>
                  </div>
                </div>
                <Text text="This platform has transformed how our team collaborates. The intuitive interface and powerful features have increased our productivity by 40%." />
              </div>
            </div>
          </div>

          {/* Help Text / Instructions */}
          <div>
            <h4 className="text-lg font-medium mb-3">Help Text & Instructions</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <div className="max-w-md">
                <label className="block font-semibold mb-2">Email Address</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg mb-2"
                  placeholder="you@example.com"
                />
                <Text text="We'll never share your email with anyone else. You can unsubscribe at any time." />
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
                <li>--sds-typography-body-font-weight-regular</li>
                <li>--sds-typography-body-size-medium</li>
                <li>--sds-color-text-default-default</li>
              </ul>
            </div>
            <div className="mt-6 p-4 bg-blue-50 rounded">
              <strong>Usage Guidelines:</strong>
              <ul className="mt-2 space-y-2 text-gray-700">
                <li>• Use for standard body copy, descriptions, and general content</li>
                <li>• Maintains consistent 16px size across all breakpoints for readability</li>
                <li>• 1.4 line height ensures comfortable reading experience</li>
                <li>• Text wraps naturally based on parent container width</li>
                <li>• Provides excellent contrast ratio (&gt;12:1) for accessibility</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TextDemo;
