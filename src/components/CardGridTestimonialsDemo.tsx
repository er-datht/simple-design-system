import { CardGridTestimonials } from "../ui/sections/CardGridTestimonials";
import { TestimonialCard } from "../ui/primitives/TestimonialCard";
import { Avatar } from "../ui/primitives/Avatar";

export default function CardGridTestimonialsDemo() {

  return (
    <div className="space-y-12">
      {/* Header */}
      <section>
        <h2 className="text-3xl font-bold mb-4">Card Grid Testimonials</h2>
        <p className="text-lg text-gray-600 mb-4">
          A responsive section component that displays customer testimonials in
          a grid layout. Adapts from a 3-column desktop layout to a
          single-column mobile layout using CSS media queries.
        </p>
        <p className="text-sm text-gray-500">
          <strong>Figma Source:</strong>{" "}
          <a
            href="https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=348-13347"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Card Grid Testimonials
          </a>
        </p>
      </section>

      {/* Basic Usage */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">Basic Usage</h3>
        <p className="text-gray-600 mb-4">
          Default testimonial grid with 6 testimonials, image avatars, and
          custom heading/subheading. Uses the TestimonialCard component for each
          card.
        </p>
        <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg bg-white">
          <CardGridTestimonials
            heading="Customer Testimonials"
            subheading="Hear what our customers have to say about their experience"
          >
            <TestimonialCard
              quote="This product has completely transformed our workflow."
              avatar={<Avatar type="image" src="/avatar1.svg" alt="Sarah Chen" size="md" />}
              name="Sarah Chen"
              role="CEO at TechCorp"
            />
            <TestimonialCard
              quote="Outstanding support and an intuitive interface. Our team was up and running in no time."
              avatar={<Avatar type="image" src="/avatar2.svg" alt="Michael Rodriguez" size="md" />}
              name="Michael Rodriguez"
              role="Product Manager at InnovateCo"
            />
            <TestimonialCard
              quote="The ROI has exceeded our expectations. Best investment we've made this year."
              avatar={<Avatar type="image" src="/avatar3.svg" alt="Emily Thompson" size="md" />}
              name="Emily Thompson"
              role="CFO at Growth Industries"
            />
            <TestimonialCard
              quote="Scalable, reliable, and performant. Everything we needed and more."
              avatar={<Avatar type="image" src="/avatar1.svg" alt="David Kim" size="md" />}
              name="David Kim"
              role="CTO at StartupXYZ"
            />
            <TestimonialCard
              quote="The customer service is exceptional. They truly care about our success."
              avatar={<Avatar type="image" src="/avatar2.svg" alt="Jessica Martinez" size="md" />}
              name="Jessica Martinez"
              role="Operations Director"
            />
            <TestimonialCard
              quote="Simple yet powerful. Exactly what our business needed to scale efficiently."
              avatar={<Avatar type="image" src="/avatar3.svg" alt="Ryan O'Brien" size="md" />}
              name="Ryan O'Brien"
              role="Founder at Digital Solutions"
            />
          </CardGridTestimonials>
        </div>
        <div className="mt-4 bg-gray-50 p-4 rounded">
          <pre className="text-sm overflow-x-auto">
            <code>{`<CardGridTestimonials
  heading="Customer Testimonials"
  subheading="Hear what our customers have to say"
>
  <TestimonialCard
    quote="This product has transformed our workflow."
    avatar={<Avatar type="image" src="/user1.jpg" alt="Sarah Chen" size="md" />}
    name="Sarah Chen"
    role="CEO at TechCorp"
  />
  <TestimonialCard
    quote="Outstanding support and intuitive interface!"
    avatar={<Avatar type="image" src="/user2.jpg" alt="Michael Rodriguez" size="md" />}
    name="Michael Rodriguez"
    role="Product Manager"
  />
  {/* ... more testimonials */}
</CardGridTestimonials>`}</code>
          </pre>
        </div>
      </section>

      {/* With Initial Avatars */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">With Initial Avatars</h3>
        <p className="text-gray-600 mb-4">
          Testimonials can use initial-based avatars instead of images for a
          cleaner look.
        </p>
        <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg bg-white">
          <CardGridTestimonials
            heading="What Our Users Say"
            subheading="Real feedback from real users"
          >
            <TestimonialCard
              quote="A game-changer for our organization. Highly recommended to anyone in the industry!"
              avatar={<Avatar type="initial" name="Alex Johnson" size="md" />}
              name="Alex Johnson"
              role="VP of Engineering"
            />
            <TestimonialCard
              quote="Seamless integration with our existing tools. The documentation is top-notch."
              avatar={<Avatar type="initial" name="Taylor Brown" size="md" />}
              name="Taylor Brown"
              role="Lead Developer"
            />
            <TestimonialCard
              quote="Worth every penny. The value proposition is clear and delivered upon."
              avatar={<Avatar type="initial" name="Morgan Lee" size="md" />}
              name="Morgan Lee"
              role="Business Analyst"
            />
          </CardGridTestimonials>
        </div>
        <div className="mt-4 bg-gray-50 p-4 rounded">
          <pre className="text-sm overflow-x-auto">
            <code>{`<CardGridTestimonials
  heading="What Our Users Say"
  subheading="Real feedback from real users"
>
  <TestimonialCard
    quote="A game-changer for our organization!"
    avatar={<Avatar type="initial" name="Alex Johnson" size="md" />}
    name="Alex Johnson"
    role="VP of Engineering"
  />
  <TestimonialCard
    quote="Seamless integration with our tools."
    avatar={<Avatar type="initial" name="Taylor Brown" size="md" />}
    name="Taylor Brown"
    role="Lead Developer"
  />
  {/* ... more testimonials */}
</CardGridTestimonials>`}</code>
          </pre>
        </div>
      </section>

      {/* Custom Children */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">Flexible Children Pattern</h3>
        <p className="text-gray-600 mb-4">
          The children pattern allows you to render any type of testimonial component
          or even custom cards. You have full control over what content appears in the grid.
        </p>
        <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg bg-white">
          <CardGridTestimonials
            heading="Client Success Stories"
            subheading="Join thousands of satisfied customers"
          >
            <TestimonialCard
              quote="This product has completely transformed our workflow."
              avatar={<Avatar type="image" src="/avatar1.svg" alt="Sarah Chen" size="md" />}
              name="Sarah Chen"
              role="CEO at TechCorp"
            />
            <TestimonialCard
              quote="Outstanding support and an intuitive interface."
              avatar={<Avatar type="image" src="/avatar2.svg" alt="Michael Rodriguez" size="md" />}
              name="Michael Rodriguez"
              role="Product Manager"
            />
            <TestimonialCard
              quote="Best investment we've made this year."
              avatar={<Avatar type="image" src="/avatar3.svg" alt="Emily Thompson" size="md" />}
              name="Emily Thompson"
              role="CFO at Growth Industries"
            />
          </CardGridTestimonials>
        </div>
        <div className="mt-4 bg-gray-50 p-4 rounded">
          <pre className="text-sm overflow-x-auto">
            <code>{`<CardGridTestimonials
  heading="Client Success Stories"
  subheading="Join thousands of satisfied customers"
>
  <TestimonialCard
    quote="This product transformed our workflow."
    avatar={<Avatar type="image" src="/user1.jpg" alt="Sarah Chen" size="md" />}
    name="Sarah Chen"
    role="CEO at TechCorp"
  />
  {/* ... more testimonials */}
</CardGridTestimonials>`}</code>
          </pre>
        </div>
      </section>

      {/* Responsive Behavior */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">Responsive Behavior</h3>
        <div className="bg-gray-50 p-6 rounded-lg space-y-4">
          <div>
            <h4 className="font-semibold text-lg mb-2">
              Desktop Layout (≥768px)
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>
                  <strong>Max Width:</strong> 1200px
                  (--sds-responsive-device-width)
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>
                  <strong>Padding:</strong> 64px (--sds-size-space-1600)
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>
                  <strong>Grid Gap:</strong> 48px (--sds-size-space-1200)
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>
                  <strong>Layout:</strong> 3 columns (cards wrap with flex: 1 0
                  0 and min-width: 300px)
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-2">
              Mobile Layout (&lt;768px)
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>
                  <strong>Max Width:</strong> 375px
                  (--sds-responsive-device-width)
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>
                  <strong>Padding:</strong> 24px (--sds-size-space-600)
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>
                  <strong>Grid Gap:</strong> 24px (--sds-size-space-600)
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>
                  <strong>Layout:</strong> 1 column (cards stack vertically)
                </span>
              </li>
            </ul>
          </div>
          <div className="bg-blue-50 p-4 rounded border border-blue-200">
            <p className="text-sm text-blue-900">
              <strong>Note:</strong> Resize your browser window to see the
              responsive behavior in action. The layout automatically adjusts
              using CSS media queries without requiring a platform prop.
            </p>
          </div>
        </div>
      </section>

      {/* Design Tokens */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">Design Tokens Used</h3>
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Colors</h4>
              <ul className="space-y-2 text-sm font-mono">
                <li>--sds-color-text-default-default (#1e1e1e)</li>
                <li>--sds-color-text-default-secondary (#757575)</li>
                <li>--sds-color-text-default-tertiary (#b3b3b3)</li>
                <li>--sds-color-background-default-default (#ffffff)</li>
                <li>--sds-color-border-default-default (#d9d9d9)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Typography</h4>
              <ul className="space-y-2 text-sm font-mono">
                <li>--sds-typography-heading-size-base (24px)</li>
                <li>--sds-typography-heading-font-weight (600)</li>
                <li>--sds-typography-subheading-size-medium (20px)</li>
                <li>--sds-typography-body-size-medium (16px)</li>
                <li>--sds-typography-body-font-weight-strong (600)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Spacing</h4>
              <ul className="space-y-2 text-sm font-mono">
                <li>--sds-size-space-050 (2px)</li>
                <li>--sds-size-space-200 (8px)</li>
                <li>--sds-size-space-300 (12px)</li>
                <li>--sds-size-space-600 (24px)</li>
                <li>--sds-size-space-1200 (48px)</li>
                <li>--sds-size-space-1600 (64px)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Sizing & Radius</h4>
              <ul className="space-y-2 text-sm font-mono">
                <li>--sds-size-icon-large (40px)</li>
                <li>--sds-size-radius-200 (8px)</li>
                <li>--sds-size-radius-full (9999px)</li>
                <li>--sds-size-stroke-border (1px)</li>
                <li>--sds-responsive-device-width (1200px/375px)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Accessibility Features */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">Accessibility Features</h3>
        <div className="bg-gray-50 p-6 rounded-lg">
          <ul className="space-y-2 text-sm">
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span>
                <strong>Semantic HTML:</strong> Uses semantic heading elements
                (h2, p) for proper document structure
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span>
                <strong>Avatar Alt Text:</strong> Avatar components include
                proper alt text for screen readers
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span>
                <strong>Color Contrast:</strong> All text meets WCAG AA
                standards (4.5:1 minimum contrast ratio)
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span>
                <strong>Figma Node IDs:</strong> Includes data-node-id
                attributes for Figma Code Connect synchronization
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span>
                <strong>Responsive Design:</strong> Content reflows naturally on
                all screen sizes for better readability
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span>
                <strong>Testimonial Card Component:</strong> Reuses accessible
                TestimonialCard component with proper semantic structure
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Props Reference */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">Props Reference</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left border-b border-gray-200 font-semibold">
                  Prop
                </th>
                <th className="px-4 py-2 text-left border-b border-gray-200 font-semibold">
                  Type
                </th>
                <th className="px-4 py-2 text-left border-b border-gray-200 font-semibold">
                  Default
                </th>
                <th className="px-4 py-2 text-left border-b border-gray-200 font-semibold">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-gray-200">
                <td className="px-4 py-2 font-mono">heading</td>
                <td className="px-4 py-2 font-mono">string</td>
                <td className="px-4 py-2 font-mono">"Heading"</td>
                <td className="px-4 py-2">
                  Main heading text for the testimonials section
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-2 font-mono">subheading</td>
                <td className="px-4 py-2 font-mono">string</td>
                <td className="px-4 py-2 font-mono">"Subheading"</td>
                <td className="px-4 py-2">
                  Subheading text providing additional context
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-2 font-mono">children</td>
                <td className="px-4 py-2 font-mono">ReactNode</td>
                <td className="px-4 py-2 font-mono">required</td>
                <td className="px-4 py-2">
                  Testimonial card components to render in the grid (typically TestimonialCard components)
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-2 font-mono">className</td>
                <td className="px-4 py-2 font-mono">string</td>
                <td className="px-4 py-2 font-mono">undefined</td>
                <td className="px-4 py-2">
                  Additional CSS classes for the root container
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-4 bg-blue-50 p-4 rounded border border-blue-200">
          <h4 className="font-semibold mb-2">Usage Pattern</h4>
          <pre className="text-sm overflow-x-auto bg-white p-3 rounded">
            <code>{`// Pass TestimonialCard components as children
<CardGridTestimonials heading="..." subheading="...">
  <TestimonialCard
    quote="..."
    avatar={<Avatar ... />}
    name="..."
    role="..."
  />
  {/* ... more cards */}
</CardGridTestimonials>`}</code>
          </pre>
        </div>
      </section>

      {/* Usage Tips */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">Usage Tips</h3>
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <ul className="space-y-3 text-sm">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2 font-bold">1.</span>
              <div>
                <strong>Use TestimonialCard Components:</strong> Pass
                TestimonialCard components as children for consistent styling
                and accessibility. The children pattern gives you full control
                over rendering.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2 font-bold">2.</span>
              <div>
                <strong>Provide 3-6 Testimonials:</strong> For optimal visual
                balance, use 3 or 6 testimonials to fill rows evenly on desktop
                (3 columns).
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2 font-bold">3.</span>
              <div>
                <strong>Avatar Images:</strong> Use high-quality square images
                for avatars. The component automatically crops them to circles.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2 font-bold">4.</span>
              <div>
                <strong>Quote Length:</strong> Keep quotes concise (1-2
                sentences) for better readability and visual consistency across
                cards.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2 font-bold">5.</span>
              <div>
                <strong>Responsive Testing:</strong> Test on various screen
                sizes to ensure the layout adapts properly from 3-column to
                1-column.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2 font-bold">6.</span>
              <div>
                <strong>Flexible Content:</strong> The children pattern allows
                you to mix different card types or add custom elements to the
                grid as needed.
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
