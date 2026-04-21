import { ReviewCard } from "../ui/primitives/Card";

export default function ReviewCardDemo() {
  return (
    <div className="space-y-12 p-8">
      {/* Header */}
      <section>
        <h1 className="text-3xl font-bold mb-4">Review Card</h1>
        <p className="text-lg text-gray-600 mb-4">
          A testimonial/review display component designed to showcase user
          feedback with visual rating indicators. Presents complete user reviews
          including star ratings, review title and body text, and reviewer
          information (avatar, name, and date).
        </p>
        <p className="text-sm text-gray-500">
          <strong>Figma Source:</strong>{" "}
          <a
            href="https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=2236:16106"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Review Card Component
          </a>
        </p>
      </section>

      {/* Basic Usage */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Basic Usage</h2>
        <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
          <ReviewCard />
        </div>
        <div className="mt-4 bg-gray-50 p-4 rounded">
          <code className="text-sm">{`<ReviewCard />`}</code>
        </div>
      </section>

      {/* With Custom Content */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">With Custom Content</h2>
        <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
          <ReviewCard
            rating={5}
            reviewTitle="Excellent Product!"
            reviewBody="This product exceeded all my expectations. The quality is outstanding and the customer service was fantastic. Highly recommended for anyone looking for reliability and performance."
            reviewerName="Sarah Johnson"
            reviewDate={new Date(2024, 11, 15)}
            avatarSrc="/avatar5.svg"
          />
        </div>
        <div className="mt-4 bg-gray-50 p-4 rounded">
          <pre className="text-sm overflow-x-auto">
            {`<ReviewCard
  rating={5}
  reviewTitle="Excellent Product!"
  reviewBody="This product exceeded all my expectations..."
  reviewerName="Sarah Johnson"
  reviewDate={new Date(2024, 11, 15)} // December 15, 2024
/>`}
          </pre>
        </div>
      </section>

      {/* Date Format Examples */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Date Format Examples</h2>
        <p className="text-gray-600 mb-6">
          The <code className="bg-gray-100 px-2 py-1 rounded">reviewDate</code>{" "}
          prop accepts multiple input formats and automatically formats them as
          "MMMM DD, YYYY":
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-sm font-semibold mb-2">Date Object</h3>
            <ReviewCard
              rating={5}
              reviewTitle="Using Date Object"
              reviewBody="Passed as: new Date(2024, 11, 15)"
              reviewerName="Date Example"
              reviewDate={new Date(2024, 11, 15)}
            />
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-2">ISO String</h3>
            <ReviewCard
              rating={5}
              reviewTitle="Using ISO String"
              reviewBody='Passed as: "2024-12-15"'
              reviewerName="ISO Example"
              reviewDate="2024-12-15"
            />
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-2">Timestamp</h3>
            <ReviewCard
              rating={5}
              reviewTitle="Using Timestamp"
              reviewBody="Passed as: 1734220800000"
              reviewerName="Timestamp Example"
              reviewDate={1734220800000}
            />
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-2">
              Formatted String (Backwards Compatible)
            </h3>
            <ReviewCard
              rating={5}
              reviewTitle="Using Formatted String"
              reviewBody='Passed as: "December 15, 2024"'
              reviewerName="String Example"
              reviewDate="December 15, 2024"
            />
          </div>
        </div>
      </section>

      {/* Rating Variations */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Rating Variations</h2>
        <p className="text-gray-600 mb-6">
          The component supports ratings from 1 to 5 stars:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ReviewCard
            rating={5}
            reviewTitle="Perfect!"
            reviewBody="Absolutely love it. Five stars all the way!"
            reviewerName="Alex Chen"
            reviewDate={new Date(2024, 10, 10)}
          />
          <ReviewCard
            rating={4}
            reviewTitle="Very Good"
            reviewBody="Great quality with minor room for improvement."
            reviewerName="Maria Garcia"
            reviewDate={new Date(2024, 10, 8)}
          />
          <ReviewCard
            rating={3}
            reviewTitle="Good"
            reviewBody="Solid product, meets basic expectations."
            reviewerName="James Wilson"
            reviewDate={new Date(2024, 10, 5)}
          />
          <ReviewCard
            rating={2}
            reviewTitle="Could Be Better"
            reviewBody="Some issues that need addressing."
            reviewerName="Emma Davis"
            reviewDate={new Date(2024, 10, 3)}
          />
          <ReviewCard
            rating={1}
            reviewTitle="Not Satisfied"
            reviewBody="Did not meet my expectations unfortunately."
            reviewerName="Michael Brown"
            reviewDate={new Date(2024, 10, 1)}
          />
        </div>
      </section>

      {/* Real-World Examples */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Real-World Examples</h2>

        {/* Product Reviews */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Product Reviews</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ReviewCard
              rating={5}
              reviewTitle="Amazing Quality"
              reviewBody="I've been using this product for three months now and it's still performing like new. The build quality is exceptional and it's worth every penny. Would definitely buy again!"
              reviewerName="Jennifer Lee"
              reviewDate={new Date(2024, 11, 10)}
            />
            <ReviewCard
              rating={5}
              reviewTitle="Best Purchase This Year"
              reviewBody="Absolutely exceeded my expectations. The attention to detail is remarkable and the customer support team was incredibly helpful. Can't recommend this enough!"
              reviewerName="Robert Taylor"
              reviewDate={new Date(2024, 11, 8)}
            />
          </div>
        </div>

        {/* Service Reviews */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Service Reviews</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ReviewCard
              rating={4}
              reviewTitle="Great Experience"
              reviewBody="The service was professional and timely. Minor delays but overall very satisfied with the outcome. Would use again for future projects."
              reviewerName="David Martinez"
              reviewDate={new Date(2024, 10, 28)}
            />
            <ReviewCard
              rating={5}
              reviewTitle="Outstanding Service"
              reviewBody="From start to finish, the experience was seamless. The team was responsive, knowledgeable, and went above and beyond to ensure everything was perfect."
              reviewerName="Lisa Anderson"
              reviewDate={new Date(2024, 10, 25)}
            />
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Customer Testimonials</h3>
          <div className="space-y-6">
            <ReviewCard
              rating={5}
              reviewTitle="Transformed Our Business"
              reviewBody="Since implementing this solution, our productivity has increased by 300%. The team is more efficient, our clients are happier, and we've seen significant cost savings. This is exactly what we needed to scale our operations."
              reviewerName="Thomas Johnson"
              reviewDate={new Date(2024, 11, 5)}
            />
            <ReviewCard
              rating={5}
              reviewTitle="Game Changer"
              reviewBody="We've tried many similar products but this one stands out. The ease of use combined with powerful features makes it perfect for teams of any size. Highly recommended for businesses looking to streamline their workflow."
              reviewerName="Patricia Williams"
              reviewDate={new Date(2024, 11, 1)}
            />
          </div>
        </div>
      </section>

      {/* Design Tokens */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Design Tokens Used</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Colors</h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <code>--sds-color-background-default-default</code>: #ffffff
                </li>
                <li>
                  <code>--sds-color-border-default-default</code>: #d9d9d9
                </li>
                <li>
                  <code>--sds-color-text-default-default</code>: #1e1e1e
                </li>
                <li>
                  <code>--sds-color-text-default-secondary</code>: #757575
                </li>
                <li>
                  <code>--sds-color-icon-brand-default</code>: #2c2c2c
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Typography</h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <code>--sds-typography-heading-font-family</code>: Inter
                </li>
                <li>
                  <code>--sds-typography-heading-size-base</code>: 24px
                </li>
                <li>
                  <code>--sds-typography-heading-font-weight</code>: 600
                </li>
                <li>
                  <code>--sds-typography-body-font-family</code>: Inter
                </li>
                <li>
                  <code>--sds-typography-body-size-medium</code>: 16px
                </li>
                <li>
                  <code>--sds-typography-body-font-weight-regular</code>: 400
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Spacing</h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <code>--sds-size-space-100</code>: 4px
                </li>
                <li>
                  <code>--sds-size-space-600</code>: 24px
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Sizing & Radius</h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <code>--sds-size-radius-200</code>: 8px
                </li>
                <li>
                  <code>--sds-size-stroke-border</code>: 1px
                </li>
                <li>
                  <code>--sds-size-icon-large</code>: 40px (Avatar)
                </li>
                <li>
                  <code>--sds-size-radius-full</code>: 9999px (Avatar)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Accessibility Features */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Accessibility Features</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <ul className="space-y-2 text-sm">
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span>
                <strong>Semantic HTML:</strong> Uses article element for proper
                document structure
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span>
                <strong>ARIA Labels:</strong> Star rating includes descriptive
                aria-label (e.g., "5 star rating")
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span>
                <strong>Role Attributes:</strong> Rating container uses
                role="img" for screen reader support
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span>
                <strong>Decorative Icons:</strong> Star icons marked with
                aria-hidden="true"
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span>
                <strong>Color Contrast:</strong> Primary text (#1e1e1e) on white
                provides 16.5:1 ratio (WCAG AAA)
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span>
                <strong>Color Contrast:</strong> Secondary text (#757575) on
                white provides 5.3:1 ratio (WCAG AA)
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span>
                <strong>Typography Components:</strong> Uses design system
                typography for consistency
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span>
                <strong>Avatar Accessibility:</strong> Includes alt text for
                reviewer avatar images
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Props Reference */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Props Reference</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                  Prop
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                  Default
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 text-sm font-mono">rating</td>
                <td className="px-6 py-4 text-sm font-mono">number</td>
                <td className="px-6 py-4 text-sm font-mono">5</td>
                <td className="px-6 py-4 text-sm">Star rating (1-5)</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-mono">reviewTitle</td>
                <td className="px-6 py-4 text-sm font-mono">string</td>
                <td className="px-6 py-4 text-sm font-mono">"Review title"</td>
                <td className="px-6 py-4 text-sm">Review title/headline</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-mono">reviewBody</td>
                <td className="px-6 py-4 text-sm font-mono">string</td>
                <td className="px-6 py-4 text-sm font-mono">"Review body"</td>
                <td className="px-6 py-4 text-sm">Review body text</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-mono">reviewerName</td>
                <td className="px-6 py-4 text-sm font-mono">string</td>
                <td className="px-6 py-4 text-sm font-mono">"Reviewer name"</td>
                <td className="px-6 py-4 text-sm">Reviewer's name</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-mono">reviewDate</td>
                <td className="px-6 py-4 text-sm font-mono">
                  Date | string | number
                </td>
                <td className="px-6 py-4 text-sm font-mono">new Date()</td>
                <td className="px-6 py-4 text-sm">
                  Review date (Date object, ISO string, or timestamp). Formatted
                  as "MMMM DD, YYYY"
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-mono">avatarSrc</td>
                <td className="px-6 py-4 text-sm font-mono">string</td>
                <td className="px-6 py-4 text-sm font-mono">undefined</td>
                <td className="px-6 py-4 text-sm">
                  Reviewer avatar image source
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-mono">avatarAlt</td>
                <td className="px-6 py-4 text-sm font-mono">string</td>
                <td className="px-6 py-4 text-sm font-mono">
                  "Reviewer avatar"
                </td>
                <td className="px-6 py-4 text-sm">Avatar alt text</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-mono">className</td>
                <td className="px-6 py-4 text-sm font-mono">string</td>
                <td className="px-6 py-4 text-sm font-mono">undefined</td>
                <td className="px-6 py-4 text-sm">Additional CSS classes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
