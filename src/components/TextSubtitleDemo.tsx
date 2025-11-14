import { TextSubtitle } from "../ui/typography/TextSubtitle";

export function TextSubtitleDemo() {
  return (
    <div className="flex flex-col gap-12">
      <div>
        <h2 className="text-2xl font-bold mb-4">TextSubtitle Component</h2>
        <p className="text-(--sds-color-text-default-secondary) mb-8">
          A typography primitive for rendering subtitle-level text content.
          Designed for secondary headings or emphasis text with a larger font size (32px)
          than body text while maintaining consistent visual hierarchy.
        </p>
      </div>

      {/* Basic Usage */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Basic Usage</h3>
        <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
          <TextSubtitle />
        </div>
      </section>

      {/* Custom Text Examples */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Custom Text Examples</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-medium mb-3">Section Subtitle</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <TextSubtitle text="Discover Our Platform" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-3">Feature Emphasis</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <TextSubtitle text="Built for developers, by developers" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-3">Callout Text</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <TextSubtitle text="Join thousands of satisfied customers" />
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
              <section className="max-w-4xl mx-auto text-center py-12">
                <h1 className="text-5xl font-bold mb-4">Welcome to Our Platform</h1>
                <TextSubtitle text="Empowering teams to build better products" />
                <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
                  Start your journey with cutting-edge tools and seamless workflows
                  designed to accelerate your development process.
                </p>
                <button className="mt-8 px-6 py-3 bg-black text-white rounded-lg">
                  Get Started
                </button>
              </section>
            </div>
          </div>

          {/* Feature Section */}
          <div>
            <h4 className="text-lg font-medium mb-3">Feature Section</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <section className="max-w-3xl">
                <h2 className="text-3xl font-bold mb-2">Our Features</h2>
                <TextSubtitle text="Everything you need to succeed" />
                <div className="mt-8 grid grid-cols-3 gap-6">
                  <div className="p-6 bg-gray-50 rounded-lg">
                    <div className="text-3xl mb-3">⚡</div>
                    <h4 className="font-semibold mb-2">Lightning Fast</h4>
                    <p className="text-sm text-gray-600">
                      Optimized for performance
                    </p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-lg">
                    <div className="text-3xl mb-3">🔒</div>
                    <h4 className="font-semibold mb-2">Secure by Default</h4>
                    <p className="text-sm text-gray-600">
                      Enterprise-grade security
                    </p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-lg">
                    <div className="text-3xl mb-3">🎨</div>
                    <h4 className="font-semibold mb-2">Beautiful Design</h4>
                    <p className="text-sm text-gray-600">
                      Pixel-perfect interfaces
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Testimonial Section */}
          <div>
            <h4 className="text-lg font-medium mb-3">Testimonial Section</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <section className="max-w-4xl mx-auto text-center py-8">
                <h2 className="text-3xl font-bold mb-2">What Our Customers Say</h2>
                <TextSubtitle text="Don't just take our word for it" />
                <div className="mt-8 grid grid-cols-2 gap-6">
                  <div className="p-6 bg-white shadow-lg rounded-lg text-left">
                    <p className="text-gray-600 mb-4">
                      "This platform has transformed how our team works.
                      The intuitive design and powerful features make it a joy to use."
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                      <div>
                        <p className="font-semibold">Sarah Johnson</p>
                        <p className="text-sm text-gray-500">Product Manager</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 bg-white shadow-lg rounded-lg text-left">
                    <p className="text-gray-600 mb-4">
                      "The best investment we've made this year.
                      Our productivity has increased significantly."
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                      <div>
                        <p className="font-semibold">Michael Chen</p>
                        <p className="text-sm text-gray-500">Engineering Lead</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Content Card */}
          <div>
            <h4 className="text-lg font-medium mb-3">Content Card</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <div className="max-w-lg p-8 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl">
                <h3 className="text-2xl font-bold mb-2">Enterprise Plan</h3>
                <TextSubtitle text="For teams that need more power" />
                <p className="mt-4 text-gray-600">
                  Get advanced features, priority support, and dedicated resources
                  to scale your business to new heights.
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Unlimited projects and team members</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span>24/7 priority support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Advanced analytics and reporting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Custom integrations</span>
                  </li>
                </ul>
                <button className="mt-6 w-full py-3 bg-black text-white rounded-lg font-semibold">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>

          {/* Article Header */}
          <div>
            <h4 className="text-lg font-medium mb-3">Article Header</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <article className="max-w-3xl">
                <div className="text-xs text-gray-500 uppercase tracking-wide mb-2">
                  Product Update • 5 min read
                </div>
                <h1 className="text-4xl font-bold mb-2">
                  Introducing Our New Design System
                </h1>
                <TextSubtitle text="A complete redesign for modern workflows" />
                <div className="flex items-center gap-4 mt-6 pb-6 border-b">
                  <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                  <div>
                    <p className="font-semibold">Emma Wilson</p>
                    <p className="text-sm text-gray-500">Head of Design • March 15, 2025</p>
                  </div>
                </div>
                <div className="mt-6 text-gray-600 space-y-4">
                  <p>
                    Today we're excited to announce the launch of our completely redesigned
                    design system. After months of research, testing, and iteration, we've
                    created a system that's more flexible, accessible, and powerful than ever.
                  </p>
                  <p>
                    Our new design system includes over 100 components, comprehensive documentation,
                    and seamless integration with popular design tools. Whether you're building
                    a simple landing page or a complex application, our design system has you covered.
                  </p>
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
                <strong>Font Family:</strong>
                <p className="text-gray-600">Inter, sans-serif</p>
              </div>
              <div>
                <strong>Font Weight:</strong>
                <p className="text-gray-600">400 (Regular)</p>
              </div>
              <div>
                <strong>Font Size:</strong>
                <p className="text-gray-600">32px</p>
              </div>
              <div>
                <strong>Line Height:</strong>
                <p className="text-gray-600">1.2 (120%)</p>
              </div>
              <div>
                <strong>Letter Spacing:</strong>
                <p className="text-gray-600">normal</p>
              </div>
              <div>
                <strong>Text Color:</strong>
                <p className="text-gray-600">#1e1e1e</p>
              </div>
            </div>
            <div className="mt-6 p-4 bg-gray-50 rounded">
              <strong>Design Tokens:</strong>
              <ul className="mt-2 space-y-1 text-xs font-mono text-gray-600">
                <li>--sds-typography-subtitle-font-family</li>
                <li>--sds-typography-subtitle-font-weight</li>
                <li>--sds-typography-subtitle-size-base</li>
                <li>--sds-color-text-default-default</li>
              </ul>
            </div>
            <div className="mt-6 p-4 bg-blue-50 rounded">
              <strong>Typography Hierarchy:</strong>
              <p className="mt-2 text-gray-700">
                The subtitle component sits between primary headings (24px, weight 600)
                and body text. With its 32px size and regular weight (400), it provides
                emphasis and secondary hierarchy without competing with main headings.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TextSubtitleDemo;
