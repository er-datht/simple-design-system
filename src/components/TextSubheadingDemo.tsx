import { TextSubheading } from "../ui/typography/TextSubheading";

export function TextSubheadingDemo() {
  return (
    <div className="flex flex-col gap-12">
      <div>
        <h2 className="text-2xl font-bold mb-4">TextSubheading Component</h2>
        <p className="text-(--sds-color-text-default-secondary) mb-8">
          A fundamental typography primitive for rendering subheading text with
          consistent styling. Applies pre-defined subheading typography standards
          for secondary-level headings beneath main titles. Uses 20px font size
          with 400 weight for clear visual hierarchy.
        </p>
      </div>

      {/* Basic Usage */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Basic Usage</h3>
        <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
          <TextSubheading />
        </div>
      </section>

      {/* Custom Text */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Custom Text Examples</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-medium mb-3">Feature Subheading</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <TextSubheading text="Discover what makes us different" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-3">Section Introduction</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <TextSubheading text="Explore our powerful features and capabilities" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-3">Content Preview</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <TextSubheading text="Everything you need to get started" />
            </div>
          </div>
        </div>
      </section>

      {/* Real-world Examples */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Real-world Examples</h3>

        <div className="space-y-8">
          {/* Hero Section */}
          <div>
            <h4 className="text-lg font-medium mb-3">Hero Section</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <section className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl font-bold mb-4">
                  Welcome to Our Platform
                </h1>
                <TextSubheading text="Build amazing products with our comprehensive toolkit" />
                <div className="mt-6 flex gap-4 justify-center">
                  <button className="px-6 py-2 bg-blue-600 text-white rounded-lg">
                    Get Started
                  </button>
                  <button className="px-6 py-2 border border-gray-300 rounded-lg">
                    Learn More
                  </button>
                </div>
              </section>
            </div>
          </div>

          {/* Feature Section */}
          <div>
            <h4 className="text-lg font-medium mb-3">Feature Section</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <section className="max-w-4xl">
                <h2 className="text-3xl font-bold mb-3">
                  Powerful Features
                </h2>
                <TextSubheading text="Everything you need to succeed in one place" />
                <div className="mt-8 grid grid-cols-3 gap-6">
                  <div className="p-6 bg-gray-50 rounded-lg">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg mb-4"></div>
                    <h4 className="font-semibold mb-2">Lightning Fast</h4>
                    <p className="text-sm text-gray-600">
                      Optimized for speed and performance
                    </p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-lg">
                    <div className="w-12 h-12 bg-green-100 rounded-lg mb-4"></div>
                    <h4 className="font-semibold mb-2">Secure</h4>
                    <p className="text-sm text-gray-600">
                      Enterprise-grade security built-in
                    </p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-lg">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg mb-4"></div>
                    <h4 className="font-semibold mb-2">Scalable</h4>
                    <p className="text-sm text-gray-600">
                      Grows with your business needs
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Article Header */}
          <div>
            <h4 className="text-lg font-medium mb-3">Article Header</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <article className="max-w-2xl">
                <div className="mb-2 text-sm text-blue-600 font-medium">
                  TUTORIAL
                </div>
                <h2 className="text-3xl font-bold mb-3">
                  Getting Started with React
                </h2>
                <TextSubheading text="A comprehensive guide to building your first React application" />
                <div className="mt-4 flex items-center gap-4 text-sm text-gray-600">
                  <span>By Jane Smith</span>
                  <span>•</span>
                  <span>5 min read</span>
                  <span>•</span>
                  <span>Nov 14, 2025</span>
                </div>
                <p className="mt-6 text-gray-700 leading-relaxed">
                  React has become one of the most popular JavaScript libraries
                  for building user interfaces. In this guide, we'll walk through
                  the fundamentals and help you create your first component...
                </p>
              </article>
            </div>
          </div>

          {/* Pricing Card */}
          <div>
            <h4 className="text-lg font-medium mb-3">Pricing Card</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <div className="max-w-sm mx-auto p-8 bg-white shadow-xl rounded-2xl border border-gray-200">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">Premium Plan</h3>
                  <TextSubheading text="For growing teams and businesses" />
                  <div className="mt-6 mb-8">
                    <span className="text-5xl font-bold">$49</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-green-600">✓</span>
                    <span>Unlimited projects</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600">✓</span>
                    <span>Priority support 24/7</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600">✓</span>
                    <span>Advanced analytics dashboard</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600">✓</span>
                    <span>Custom integrations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600">✓</span>
                    <span>Team collaboration tools</span>
                  </li>
                </ul>
                <button className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">
                  Get Started
                </button>
              </div>
            </div>
          </div>

          {/* Testimonial Section */}
          <div>
            <h4 className="text-lg font-medium mb-3">Testimonial Section</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <section className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-3">
                  What Our Customers Say
                </h2>
                <TextSubheading text="Join thousands of satisfied users worldwide" />
                <div className="mt-10 grid grid-cols-2 gap-8">
                  <div className="p-6 bg-gray-50 rounded-lg text-left">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400">★</span>
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4">
                      "This platform transformed the way we work. The features
                      are intuitive and powerful."
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-300 rounded-full"></div>
                      <div>
                        <div className="font-semibold">Sarah Johnson</div>
                        <div className="text-sm text-gray-600">CEO, TechCorp</div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-lg text-left">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400">★</span>
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4">
                      "Incredible value for money. Our productivity has increased
                      significantly since we started using this."
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-300 rounded-full"></div>
                      <div>
                        <div className="font-semibold">Michael Chen</div>
                        <div className="text-sm text-gray-600">CTO, StartupXYZ</div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
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
                <p className="text-gray-600">20px</p>
              </div>
              <div>
                <strong>Line Height:</strong>
                <p className="text-gray-600">1.2 (120% = 24px)</p>
              </div>
              <div>
                <strong>Text Color:</strong>
                <p className="text-gray-600">#1e1e1e</p>
              </div>
              <div>
                <strong>Usage:</strong>
                <p className="text-gray-600">Secondary-level headings</p>
              </div>
            </div>
            <div className="mt-6 p-4 bg-gray-50 rounded">
              <strong>Design Tokens:</strong>
              <ul className="mt-2 space-y-1 text-xs font-mono text-gray-600">
                <li>--sds-typography-subheading-font-family</li>
                <li>--sds-typography-subheading-font-weight</li>
                <li>--sds-typography-subheading-size-medium</li>
                <li>--sds-color-text-default-default</li>
              </ul>
            </div>
            <div className="mt-6 p-4 bg-blue-50 rounded border border-blue-200">
              <strong className="text-blue-900">Accessibility:</strong>
              <ul className="mt-2 space-y-1 text-xs text-blue-800">
                <li>• Color contrast: 21:1 (WCAG AAA compliant)</li>
                <li>• Font size: 20px (excellent readability)</li>
                <li>• Line height: 1.2 (adequate spacing)</li>
                <li>• Semantic HTML with paragraph tag</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TextSubheadingDemo;
