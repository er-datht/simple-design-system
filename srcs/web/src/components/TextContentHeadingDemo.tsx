import { TextContentHeading } from "../ui/typography/TextContentHeading";

export function TextContentHeadingDemo() {
  return (
    <div className="flex flex-col gap-12">
      <div>
        <h2 className="text-2xl font-bold mb-4">
          TextContentHeading Component
        </h2>
        <p className="text-(--sds-color-text-default-secondary) mb-8">
          A flexible text heading composition component with optional subheading
          and configurable alignment. Uses design system tokens for consistent
          typography.
        </p>
      </div>

      {/* Basic Usage */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Basic Usage</h3>
        <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
          <TextContentHeading />
        </div>
      </section>

      {/* Alignment Variants */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Alignment Variants</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-medium mb-3">Start (Left-aligned)</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <TextContentHeading
                heading="Welcome to Our Platform"
                subheading="Discover amazing features and capabilities"
                align="Start"
              />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-3">Center</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <TextContentHeading
                heading="Welcome to Our Platform"
                subheading="Discover amazing features and capabilities"
                align="Center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Conditional Subheading */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Conditional Subheading</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-medium mb-3">
              With Subheading (default)
            </h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <TextContentHeading
                heading="Our Features"
                subheading="Everything you need to succeed"
                hasSubheading={true}
              />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-3">Without Subheading</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <TextContentHeading
                heading="Our Features"
                hasSubheading={false}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TextContentHeadingDemo;
