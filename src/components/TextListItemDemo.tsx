import { TextListItem } from "../ui/typography/TextListItem";

export function TextListItemDemo() {
  return (
    <div className="flex flex-col gap-12">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold mb-4">TextListItem Component</h2>
        <p className="text-(--sds-color-text-default-secondary) mb-8">
          A semantic list item element with consistent typography styling and
          bullet point indicator. Uses design system tokens for body text
          styling and should be used within <code>&lt;ul&gt;</code> or{" "}
          <code>&lt;ol&gt;</code> elements.
        </p>
      </div>

      {/* Basic Usage */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Basic Usage</h3>
        <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
          <ul>
            <TextListItem />
          </ul>
        </div>
      </section>

      {/* Custom Text Content */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Custom Text Content</h3>
        <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
          <ul className="space-y-2">
            <TextListItem text="First custom item" />
            <TextListItem text="Second custom item" />
            <TextListItem text="Third custom item" />
          </ul>
        </div>
      </section>

      {/* Multiple Items - Features List */}
      <section>
        <h3 className="text-xl font-semibold mb-4">
          Real-world Example: Features List
        </h3>
        <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg ">
          <div className="max-w-2xl">
            <h4 className="text-xl font-semibold mb-4">Key Features</h4>
            <ul className="space-y-2">
              <TextListItem text="Easy to use and integrate" />
              <TextListItem text="Responsive across all devices" />
              <TextListItem text="Built with accessibility in mind" />
              <TextListItem text="Customizable design tokens" />
              <TextListItem text="Lightweight and performant" />
            </ul>
          </div>
        </div>
      </section>

      {/* In Content Section */}
      <section>
        <h3 className="text-xl font-semibold mb-4">
          Real-world Example: Content Section
        </h3>
        <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg ">
          <article className="max-w-3xl space-y-6">
            <h2 className="text-2xl font-bold">Getting Started Guide</h2>
            <p className="text-(--sds-color-text-default-default)">
              Follow these simple steps to get up and running with our platform:
            </p>
            <ul className="space-y-2">
              <TextListItem text="Create your free account" />
              <TextListItem text="Complete your profile information" />
              <TextListItem text="Choose your subscription plan" />
              <TextListItem text="Invite team members to collaborate" />
              <TextListItem text="Start building your first project" />
            </ul>
            <p className="text-(--sds-color-text-default-default) mt-4">
              Need help? Check out our documentation or contact support.
            </p>
          </article>
        </div>
      </section>

      {/* Documentation Style */}
      <section>
        <h3 className="text-xl font-semibold mb-4">
          Real-world Example: Documentation
        </h3>
        <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg ">
          <div className="max-w-3xl space-y-6">
            <h3 className="text-xl font-semibold">API Requirements</h3>
            <p className="text-(--sds-color-text-default-default)">
              Before making API calls, ensure you have:
            </p>
            <ul className="space-y-2 mb-6">
              <TextListItem text="Valid API authentication token" />
              <TextListItem text="Proper CORS configuration" />
              <TextListItem text="Rate limiting headers enabled" />
            </ul>

            <h3 className="text-xl font-semibold">Best Practices</h3>
            <ul className="space-y-2">
              <TextListItem text="Always validate user input" />
              <TextListItem text="Implement error handling" />
              <TextListItem text="Use environment variables" />
              <TextListItem text="Monitor API usage metrics" />
            </ul>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section>
        <h3 className="text-xl font-semibold mb-4">
          Real-world Example: Benefits Section
        </h3>
        <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Why Choose Our Platform?
              </h2>
              <p className="text-lg text-(--sds-color-text-default-default) mb-8">
                Join thousands of satisfied customers who trust us for their
                business needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className=" rounded-lg p-6 shadow-sm">
                <h4 className="text-lg font-semibold mb-4">For Developers</h4>
                <ul className="space-y-2">
                  <TextListItem text="Modern API architecture" />
                  <TextListItem text="Comprehensive documentation" />
                  <TextListItem text="Active developer community" />
                  <TextListItem text="Regular updates and support" />
                </ul>
              </div>

              <div className=" rounded-lg p-6 shadow-sm">
                <h4 className="text-lg font-semibold mb-4">For Businesses</h4>
                <ul className="space-y-2">
                  <TextListItem text="Enterprise-grade security" />
                  <TextListItem text="99.9% uptime guarantee" />
                  <TextListItem text="Dedicated account manager" />
                  <TextListItem text="Custom integration support" />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Details */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Design Details</h3>
        <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg bg-gray-50">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Typography</h4>
              <ul className="space-y-1 text-sm text-(--sds-color-text-default-secondary)">
                <li>
                  • Font: Inter Regular (via{" "}
                  <code>--sds-typography-body-font-family</code>)
                </li>
                <li>
                  • Size: 16px (via{" "}
                  <code>--sds-typography-body-size-medium</code>)
                </li>
                <li>
                  • Weight: 400 (via{" "}
                  <code>--sds-typography-body-font-weight-regular</code>)
                </li>
                <li>• Line Height: 1.4 (140%)</li>
                <li>
                  • Color: Secondary gray (via{" "}
                  <code>--sds-color-text-default-secondary</code>)
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Layout</h4>
              <ul className="space-y-1 text-sm text-(--sds-color-text-default-secondary)">
                <li>• Height: 22px (fixed)</li>
                <li>• Margin Left: 24px (bullet point clearance)</li>
                <li>• List Style: Disc bullet</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Accessibility</h4>
              <ul className="space-y-1 text-sm text-(--sds-color-text-default-secondary)">
                <li>
                  • Semantic HTML: Uses proper <code>&lt;li&gt;</code> element
                </li>
                <li>• Screen reader friendly: Announces as "bullet, [text]"</li>
                <li>
                  • Must be used within <code>&lt;ul&gt;</code> or{" "}
                  <code>&lt;ol&gt;</code> parent
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TextListItemDemo;
