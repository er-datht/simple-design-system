import { TextTitlePage } from "../ui/typography/TextTitlePage";
import { Button } from "../ui/primitives/Button";
import { TextContentHeading } from "../ui/typography/TextContentHeading";

export function TextTitlePageDemo() {
  return (
    <div className="flex flex-col gap-12">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold mb-4">TextTitlePage Component</h2>
        <p className="text-[color:var(--sds-color-text-default-secondary)] mb-8">
          A large, bold heading component designed for page titles and major
          section headings. Uses the Title Page typography token with 48px
          base size, 700 font weight, and optimized letter spacing for visual
          balance.
        </p>
      </div>

      {/* Basic Usage */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Basic Usage</h3>
        <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
          <TextTitlePage />
        </div>
      </section>

      {/* Custom Text Examples */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Custom Text Examples</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-medium mb-3">
              Welcome Page Title
            </h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <TextTitlePage text="Welcome to Our Platform" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-3">Product Page Title</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <TextTitlePage text="Product Overview" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-3">
              Features Section Title
            </h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <TextTitlePage text="Powerful Features for Modern Teams" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-3">
              About Page Title
            </h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <TextTitlePage text="About Our Story" />
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
            <div className="border-2 border-dashed border-amber-400 p-12 rounded-lg bg-gradient-to-br from-slate-50 to-slate-100">
              <div className="max-w-4xl mx-auto text-center space-y-6">
                <TextTitlePage text="Build Amazing Products Faster" />
                <p className="text-xl text-[color:var(--sds-color-text-default-secondary)] max-w-2xl mx-auto">
                  The complete platform for modern development teams to
                  collaborate, ship, and scale.
                </p>
                <div className="flex gap-4 justify-center mt-8">
                  <Button variant="primary" size="md">
                    Get Started
                  </Button>
                  <Button variant="neutral" size="md">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div>
            <h4 className="text-lg font-medium mb-3">Features Section</h4>
            <div className="border-2 border-dashed border-amber-400 p-12 rounded-lg">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <TextTitlePage text="Everything You Need to Succeed" />
                  <p className="text-lg text-[color:var(--sds-color-text-default-secondary)] mt-4 max-w-2xl mx-auto">
                    Powerful features designed to help you work smarter and
                    faster
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {["Fast Performance", "Easy Integration", "24/7 Support"].map(
                    (feature) => (
                      <div key={feature} className="p-6 bg-white rounded-lg border border-[color:var(--sds-color-border-brand-default)]">
                        <h4 className="text-xl font-semibold mb-2">
                          {feature}
                        </h4>
                        <p className="text-[color:var(--sds-color-text-default-secondary)]">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Content Section with Heading */}
          <div>
            <h4 className="text-lg font-medium mb-3">
              Content Section with Subheading
            </h4>
            <div className="border-2 border-dashed border-amber-400 p-12 rounded-lg">
              <div className="max-w-4xl mx-auto space-y-8">
                <TextTitlePage text="Our Mission" />
                <TextContentHeading
                  heading="Building the Future of Work"
                  subheading="Empowering teams worldwide to achieve more"
                  align="Start"
                />
                <p className="text-lg text-[color:var(--sds-color-text-default-secondary)] leading-relaxed">
                  We believe in creating tools that make work more enjoyable
                  and productive. Our mission is to provide the best
                  experience for teams of all sizes, from startups to
                  enterprises.
                </p>
              </div>
            </div>
          </div>

          {/* Landing Page Header */}
          <div>
            <h4 className="text-lg font-medium mb-3">Landing Page Header</h4>
            <div className="border-2 border-dashed border-amber-400 p-12 rounded-lg bg-slate-900 text-white">
              <div className="max-w-4xl mx-auto space-y-6">
                <div className="inline-block px-4 py-2 bg-blue-500/20 rounded-full text-blue-300 text-sm font-medium mb-4">
                  NEW: Version 2.0 is here
                </div>
                <div className="text-title-page-container">
                  <p
                    className="text-title-page-text"
                    style={{ color: "white" }}
                  >
                    The Next Generation of Development Tools
                  </p>
                </div>
                <p className="text-xl opacity-80 max-w-2xl">
                  Experience unprecedented speed and simplicity with our
                  completely redesigned platform.
                </p>
                <Button variant="primary" size="md">
                  Start Free Trial
                </Button>
              </div>
            </div>
          </div>

          {/* Article/Blog Post Header */}
          <div>
            <h4 className="text-lg font-medium mb-3">
              Article/Blog Post Header
            </h4>
            <div className="border-2 border-dashed border-amber-400 p-12 rounded-lg">
              <article className="max-w-3xl mx-auto">
                <div className="mb-8">
                  <div className="text-sm text-[color:var(--sds-color-text-default-secondary)] mb-4">
                    Published on January 14, 2025 • 5 min read
                  </div>
                  <TextTitlePage text="How to Build Scalable Design Systems" />
                  <div className="mt-6 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-300"></div>
                    <div>
                      <div className="font-semibold">Jane Doe</div>
                      <div className="text-sm text-[color:var(--sds-color-text-default-secondary)]">
                        Product Designer
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-lg text-[color:var(--sds-color-text-default-secondary)] leading-relaxed">
                  Design systems are essential for maintaining consistency
                  across large-scale applications. In this article, we'll
                  explore best practices for creating design systems that
                  scale with your team and product.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Typography Details */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Typography Details</h3>
        <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="font-semibold">Font Family:</span> Inter (Bold)
              </div>
              <div>
                <span className="font-semibold">Font Weight:</span> 700
              </div>
              <div>
                <span className="font-semibold">Font Size:</span> 48px (base)
              </div>
              <div>
                <span className="font-semibold">Line Height:</span> 1.2 (57.6px)
              </div>
              <div>
                <span className="font-semibold">Letter Spacing:</span> -0.96px
              </div>
              <div>
                <span className="font-semibold">Color:</span> #1e1e1e
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-[color:var(--sds-color-text-default-secondary)]">
                <strong>Design Token:</strong> Title Page typography token
                <br />
                <strong>Responsive:</strong> 32px on mobile, 40px on tablet,
                48px on desktop
                <br />
                <strong>Usage:</strong> Page titles, major section headings,
                hero sections
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Responsive Behavior */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Responsive Behavior</h3>
        <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-2">Desktop (1024px+)</h4>
              <p className="text-sm text-[color:var(--sds-color-text-default-secondary)]">
                Full 48px font size with -0.96px letter spacing for optimal
                readability on large screens.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Tablet (768px - 1023px)</h4>
              <p className="text-sm text-[color:var(--sds-color-text-default-secondary)]">
                Reduced to 40px with -0.8px letter spacing to better fit
                medium-sized viewports.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Mobile (Below 768px)</h4>
              <p className="text-sm text-[color:var(--sds-color-text-default-secondary)]">
                Scaled down to 32px with -0.64px letter spacing for
                comfortable reading on mobile devices.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TextTitlePageDemo;
