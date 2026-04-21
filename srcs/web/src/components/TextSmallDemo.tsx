import { TextSmall } from "../ui/typography/TextSmall";

export function TextSmallDemo() {
  return (
    <div className="flex flex-col gap-12">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Text Small Component</h2>
        <p className="text-(--sds-color-text-default-secondary) mb-8">
          A typography primitive for rendering small body text content (14px).
          Perfect for captions, helper text, disclaimers, footnotes, and
          supporting details throughout the design system.
        </p>
      </div>

      {/* Basic Usage */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Basic Usage</h3>
        <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
          <TextSmall />
        </div>
      </section>

      {/* Custom Text Examples */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Custom Text Examples</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-medium mb-3">Caption Text</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <TextSmall text="This is a caption or supporting detail" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-3">Helper Text</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <TextSmall text="We'll never share your information with third parties" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-3">Longer Small Text</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <TextSmall text="This is a longer piece of small text that demonstrates how the TextSmall component handles multiple lines of content while maintaining proper line height and readability." />
            </div>
          </div>
        </div>
      </section>

      {/* Real-world Examples */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Real-world Examples</h3>

        <div className="space-y-8">
          {/* Form Helper Text */}
          <div>
            <h4 className="text-lg font-medium mb-3">Form Helper Text</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <div className="max-w-md space-y-4">
                <div>
                  <label className="block font-semibold mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border rounded-lg mb-1"
                    placeholder="you@example.com"
                  />
                  <TextSmall text="We'll use this to send you important updates" />
                </div>

                <div>
                  <label className="block font-semibold mb-2">Password</label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 border rounded-lg mb-1"
                    placeholder="••••••••"
                  />
                  <TextSmall text="Must be at least 8 characters with numbers and symbols" />
                </div>

                <div>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Subscribe to newsletter</span>
                  </label>
                  <div className="ml-6 mt-1">
                    <TextSmall text="Receive weekly updates and special offers" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image Captions */}
          <div>
            <h4 className="text-lg font-medium mb-3">Image Captions</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
                <figure>
                  <div className="w-full h-48 bg-gray-300 rounded-lg mb-2"></div>
                  <TextSmall text="Mountain landscape at sunset, captured in Iceland" />
                </figure>

                <figure>
                  <div className="w-full h-48 bg-gray-300 rounded-lg mb-2"></div>
                  <TextSmall text="Urban architecture in downtown Tokyo, 2024" />
                </figure>
              </div>
            </div>
          </div>

          {/* Product Cards with Details */}
          <div>
            <h4 className="text-lg font-medium mb-3">Product Cards</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-white shadow-lg rounded-lg">
                  <div className="w-full h-40 bg-gray-200 rounded-lg mb-3"></div>
                  <h4 className="font-bold text-lg mb-1">Premium Plan</h4>
                  <p className="text-2xl font-bold mb-2">$29/mo</p>
                  <TextSmall text="Includes all features plus priority support" />
                  <div className="mt-4">
                    <TextSmall text="*Billed annually at $348" />
                  </div>
                </div>

                <div className="p-6 bg-white shadow-lg rounded-lg">
                  <div className="w-full h-40 bg-gray-200 rounded-lg mb-3"></div>
                  <h4 className="font-bold text-lg mb-1">Pro Plan</h4>
                  <p className="text-2xl font-bold mb-2">$59/mo</p>
                  <TextSmall text="Everything in Premium plus advanced analytics" />
                  <div className="mt-4">
                    <TextSmall text="*Billed annually at $708" />
                  </div>
                </div>

                <div className="p-6 bg-white shadow-lg rounded-lg">
                  <div className="w-full h-40 bg-gray-200 rounded-lg mb-3"></div>
                  <h4 className="font-bold text-lg mb-1">Enterprise</h4>
                  <p className="text-2xl font-bold mb-2">Custom</p>
                  <TextSmall text="Custom solutions for large organizations" />
                  <div className="mt-4">
                    <TextSmall text="*Contact sales for pricing" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Disclaimers & Legal Text */}
          <div>
            <h4 className="text-lg font-medium mb-3">
              Disclaimers & Legal Text
            </h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <div className="max-w-2xl">
                <h3 className="text-xl font-bold mb-4">Terms of Service</h3>
                <div className="space-y-3">
                  <p>
                    By using our service, you agree to the following terms and
                    conditions.
                  </p>
                  <TextSmall text="Last updated: November 14, 2025" />

                  <div className="mt-6 p-4 bg-gray-50 rounded">
                    <p className="mb-2">
                      Your subscription will automatically renew.
                    </p>
                    <TextSmall text="You can cancel anytime from your account settings. Refunds are available within 30 days of purchase subject to our refund policy." />
                  </div>

                  <div className="mt-4 p-4 border-l-4 border-blue-500 bg-blue-50">
                    <p className="font-semibold mb-1">Privacy Notice</p>
                    <TextSmall text="We collect and process personal data in accordance with GDPR and CCPA regulations. Your data is encrypted and never sold to third parties." />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footnotes & References */}
          <div>
            <h4 className="text-lg font-medium mb-3">
              Footnotes & References
            </h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <article className="max-w-2xl">
                <h2 className="text-2xl font-bold mb-4">Research Article</h2>
                <p className="mb-4">
                  Recent studies have shown significant improvements in user
                  engagement through better design systems<sup>1</sup>.
                  Organizations that invest in design infrastructure see up to
                  40% faster development cycles<sup>2</sup>.
                </p>
                <p className="mb-6">
                  The adoption of design tokens has become a standard practice
                  across the industry<sup>3</sup>, enabling better consistency
                  and maintainability.
                </p>

                <div className="border-t pt-6 space-y-2">
                  <h4 className="font-semibold mb-3">References</h4>
                  <TextSmall text="1. Nielsen, J. (2024). 'Design Systems and User Engagement', Journal of UX Research, Vol. 12, pp. 45-67." />
                  <TextSmall text="2. Thompson, R. & Chen, L. (2024). 'Impact of Design Infrastructure on Development Speed', Tech Quarterly, Issue 3." />
                  <TextSmall text="3. Design Systems Survey 2024, conducted by UX Collective with 5,000+ respondents." />
                </div>
              </article>
            </div>
          </div>

          {/* Metadata & Timestamps */}
          <div>
            <h4 className="text-lg font-medium mb-3">
              Metadata & Timestamps
            </h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <div className="space-y-6 max-w-2xl">
                <article className="p-6 bg-white shadow-md rounded-lg">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                    <div>
                      <p className="font-semibold">Sarah Anderson</p>
                      <TextSmall text="Posted 2 hours ago" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2">
                    Introducing Our New Design System
                  </h3>
                  <p className="mb-3">
                    We're excited to share the latest updates to our design
                    system, featuring improved accessibility and performance.
                  </p>
                  <div className="flex gap-4 text-gray-600">
                    <TextSmall text="5 min read" />
                    <TextSmall text="•" />
                    <TextSmall text="1.2k views" />
                    <TextSmall text="•" />
                    <TextSmall text="42 comments" />
                  </div>
                </article>

                <div className="p-6 bg-white shadow-md rounded-lg">
                  <h4 className="font-bold mb-2">File Information</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <p className="font-medium mb-1">Created</p>
                      <TextSmall text="Nov 14, 2025 at 2:30 PM" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Modified</p>
                      <TextSmall text="Nov 14, 2025 at 4:15 PM" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Size</p>
                      <TextSmall text="2.4 MB" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Type</p>
                      <TextSmall text="PDF Document" />
                    </div>
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
                <p className="text-gray-600">400 (Regular)</p>
              </div>
              <div>
                <strong>Font Size:</strong>
                <p className="text-gray-600">14px (Small Body)</p>
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
                <strong>HTML Element:</strong>
                <p className="text-gray-600">&lt;small&gt; (semantic)</p>
              </div>
            </div>
            <div className="mt-6 p-4 bg-gray-50 rounded">
              <strong>Design Tokens:</strong>
              <ul className="mt-2 space-y-1 text-xs font-mono text-gray-600">
                <li>--sds-typography-body-font-family</li>
                <li>--sds-typography-body-font-weight-regular</li>
                <li>--sds-typography-body-size-small</li>
                <li>--sds-color-text-default-default</li>
              </ul>
            </div>
            <div className="mt-6 p-4 bg-blue-50 rounded">
              <strong>Usage Guidelines:</strong>
              <ul className="mt-2 space-y-2 text-gray-700">
                <li>
                  • Use for supporting text, captions, helper text, and fine
                  print
                </li>
                <li>
                  • Perfect for form field hints, image captions, and
                  disclaimers
                </li>
                <li>
                  • Uses semantic &lt;small&gt; element for better accessibility
                </li>
                <li>
                  • 14px size maintains readability while being visually
                  distinct from body text
                </li>
                <li>
                  • 1.4 line height ensures comfortable reading even at smaller
                  size
                </li>
                <li>
                  • Provides excellent contrast ratio (&gt;12:1) for
                  accessibility
                </li>
                <li>• Ideal for metadata, timestamps, and secondary details</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TextSmallDemo;
