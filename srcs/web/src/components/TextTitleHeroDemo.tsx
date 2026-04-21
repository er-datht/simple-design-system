import { TextTitleHero } from "../ui/typography/TextTitleHero";

export function TextTitleHeroDemo() {
  return (
    <div className="flex flex-col gap-12">
      <div>
        <h2 className="text-2xl font-bold mb-4">TextTitleHero Component</h2>
        <p className="text-(--sds-color-text-default-secondary) mb-8">
          A large, prominent hero-level heading component designed for maximum
          visual impact. Features 72px bold text optimized for hero sections,
          landing pages, and key page introductions.
        </p>
      </div>

      {/* Basic Usage */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Basic Usage</h3>
        <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
          <TextTitleHero />
        </div>
      </section>

      {/* Custom Text Examples */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Custom Text Examples</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-medium mb-3">
              Short, Impactful Message
            </h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <TextTitleHero text="Welcome" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-3">Product Launch Title</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <TextTitleHero text="Build Amazing Products" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-3">Multi-line Hero Text</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg max-w-4xl">
              <TextTitleHero text="Design System That Scales With Your Team" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-3">Call-to-Action Hero</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <TextTitleHero text="Ready to Get Started?" />
            </div>
          </div>
        </div>
      </section>

      {/* Real-world Examples */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Real-world Examples</h3>

        <div className="space-y-8">
          {/* Landing Page Hero */}
          <div>
            <h4 className="text-lg font-medium mb-3">Landing Page Hero</h4>
            <div className="border-2 border-dashed border-amber-400 p-12 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50">
              <div className="max-w-4xl mx-auto text-center">
                <TextTitleHero text="Transform Your Design Workflow" />
                <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
                  Build consistent, scalable interfaces with our comprehensive
                  design system. Ship faster with pre-built components and
                  design tokens.
                </p>
                <div className="mt-8 flex gap-4 justify-center">
                  <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700">
                    Get Started Free
                  </button>
                  <button className="px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold hover:border-gray-400">
                    View Documentation
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Product Feature Section */}
          <div>
            <h4 className="text-lg font-medium mb-3">Product Feature Section</h4>
            <div className="border-2 border-dashed border-amber-400 p-12 rounded-lg">
              <div className="max-w-5xl mx-auto">
                <TextTitleHero text="Everything You Need to Succeed" />
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="p-6 bg-white shadow-lg rounded-lg">
                    <div className="text-4xl mb-4">🚀</div>
                    <h5 className="text-xl font-semibold mb-2">
                      Fast Setup
                    </h5>
                    <p className="text-gray-600">
                      Get up and running in minutes with our quick start guide
                    </p>
                  </div>
                  <div className="p-6 bg-white shadow-lg rounded-lg">
                    <div className="text-4xl mb-4">🎨</div>
                    <h5 className="text-xl font-semibold mb-2">
                      Beautiful Design
                    </h5>
                    <p className="text-gray-600">
                      Crafted with attention to detail and modern aesthetics
                    </p>
                  </div>
                  <div className="p-6 bg-white shadow-lg rounded-lg">
                    <div className="text-4xl mb-4">⚡</div>
                    <h5 className="text-xl font-semibold mb-2">
                      High Performance
                    </h5>
                    <p className="text-gray-600">
                      Optimized for speed and efficiency in production
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Section */}
          <div>
            <h4 className="text-lg font-medium mb-3">
              Testimonial Section Header
            </h4>
            <div className="border-2 border-dashed border-amber-400 p-12 rounded-lg bg-gray-50">
              <div className="max-w-4xl mx-auto text-center">
                <TextTitleHero text="Loved by Teams Worldwide" />
                <p className="mt-6 text-lg text-gray-600">
                  Join thousands of teams who trust our design system
                </p>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow">
                    <p className="text-gray-700 italic mb-4">
                      "This design system has transformed how we work. We ship
                      features 3x faster now."
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-500 rounded-full" />
                      <div className="text-left">
                        <p className="font-semibold">Sarah Chen</p>
                        <p className="text-sm text-gray-500">Product Lead</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow">
                    <p className="text-gray-700 italic mb-4">
                      "The component library is comprehensive and well-documented.
                      Highly recommend!"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-500 rounded-full" />
                      <div className="text-left">
                        <p className="font-semibold">Marcus Rodriguez</p>
                        <p className="text-sm text-gray-500">Engineering Manager</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          <div>
            <h4 className="text-lg font-medium mb-3">Pricing Section</h4>
            <div className="border-2 border-dashed border-amber-400 p-12 rounded-lg">
              <div className="max-w-4xl mx-auto text-center">
                <TextTitleHero text="Simple, Transparent Pricing" />
                <p className="mt-4 text-lg text-gray-600">
                  Choose the plan that's right for your team
                </p>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="p-8 border-2 border-gray-200 rounded-lg">
                    <h5 className="text-2xl font-bold mb-2">Starter</h5>
                    <p className="text-4xl font-bold mb-4">
                      $29<span className="text-lg text-gray-500">/mo</span>
                    </p>
                    <ul className="space-y-2 text-left mb-6">
                      <li>✓ Up to 5 team members</li>
                      <li>✓ Core components</li>
                      <li>✓ Email support</li>
                    </ul>
                    <button className="w-full py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50">
                      Get Started
                    </button>
                  </div>
                  <div className="p-8 bg-blue-600 text-white rounded-lg shadow-xl">
                    <h5 className="text-2xl font-bold mb-2">Professional</h5>
                    <p className="text-4xl font-bold mb-4">
                      $99<span className="text-lg opacity-80">/mo</span>
                    </p>
                    <ul className="space-y-2 text-left mb-6">
                      <li>✓ Unlimited team members</li>
                      <li>✓ All components</li>
                      <li>✓ Priority support</li>
                      <li>✓ Custom themes</li>
                    </ul>
                    <button className="w-full py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-50">
                      Start Free Trial
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call-to-Action Section */}
          <div>
            <h4 className="text-lg font-medium mb-3">Final Call-to-Action</h4>
            <div className="border-2 border-dashed border-amber-400 p-12 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50">
              <div className="max-w-3xl mx-auto text-center">
                <TextTitleHero text="Start Building Today" />
                <p className="mt-6 text-xl text-gray-700">
                  Join thousands of developers and designers creating amazing
                  experiences
                </p>
                <button className="mt-8 px-8 py-4 bg-purple-600 text-white text-lg rounded-lg font-semibold hover:bg-purple-700 shadow-lg">
                  Create Your Account
                </button>
                <p className="mt-4 text-sm text-gray-500">
                  No credit card required • 14-day free trial
                </p>
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
                <p className="text-gray-600">700 (Bold)</p>
              </div>
              <div>
                <strong>Font Size:</strong>
                <p className="text-gray-600">72px</p>
              </div>
              <div>
                <strong>Line Height:</strong>
                <p className="text-gray-600">1.2 (120%)</p>
              </div>
              <div>
                <strong>Letter Spacing:</strong>
                <p className="text-gray-600">-2.16px (tight optical spacing)</p>
              </div>
              <div>
                <strong>Text Color:</strong>
                <p className="text-gray-600">#1e1e1e (almost black)</p>
              </div>
            </div>
            <div className="mt-6 p-4 bg-gray-50 rounded">
              <strong>Design Tokens:</strong>
              <ul className="mt-2 space-y-1 text-xs font-mono text-gray-600">
                <li>--sds-typography-title-hero-font-family</li>
                <li>--sds-typography-title-hero-font-weight</li>
                <li>--sds-typography-title-hero-size</li>
                <li>--sds-color-text-default-default</li>
              </ul>
            </div>
            <div className="mt-6 p-4 bg-blue-50 rounded border border-blue-200">
              <strong>Usage Guidelines:</strong>
              <ul className="mt-2 space-y-2 text-gray-700">
                <li>
                  • Use for primary hero sections and landing page headlines
                </li>
                <li>• Keep text concise for maximum impact (3-8 words ideal)</li>
                <li>
                  • Pair with supporting subtext for context and clarity
                </li>
                <li>
                  • Ensure sufficient contrast when used on colored backgrounds
                </li>
                <li>
                  • Consider responsive variants for mobile (72px may be large)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TextTitleHeroDemo;
