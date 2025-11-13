import TextContentTitle from "../ui/typography/TextContentTitle/TextContentTitle";

export function TextContentTitleDemo() {
  return (
    <div className="space-y-8">
      {/* Basic Usage */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Basic Usage</h2>
        <div className="space-y-4">
          <TextContentTitle
            title="Welcome to Our Platform"
            subtitle="Discover amazing features and possibilities"
          />
        </div>
      </section>

      {/* Alignment Variants */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Alignment Variants</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Start (Default)</h3>
            <div className="p-4 rounded border border-dashed border-amber-600">
              <TextContentTitle
                align="start"
                title="Left Aligned Title"
                subtitle="This subtitle is aligned to the start"
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Center</h3>
            <div className="p-4 rounded border border-dashed border-amber-600">
              <TextContentTitle
                align="center"
                title="Centered Title"
                subtitle="This subtitle is centered"
              />
            </div>
          </div>
        </div>
      </section>

      {/* With/Without Subtitle */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Subtitle Variations</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">
              With Subtitle (Default)
            </h3>
            <div className="p-4 rounded border border-dashed border-amber-600">
              <TextContentTitle
                title="Title with Subtitle"
                subtitle="This is a descriptive subtitle"
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Without Subtitle</h3>
            <div className="p-4 rounded border border-dashed border-amber-600">
              <TextContentTitle title="Title Only" hasSubtitle={false} />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">
              Subtitle Prop Not Provided
            </h3>
            <div className="p-4 rounded border border-dashed border-amber-600">
              <TextContentTitle title="Title without subtitle prop" />
            </div>
          </div>
        </div>
      </section>

      {/* Real-world Examples */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Real-world Examples</h2>
        <div className="space-y-6">
          <div className="p-4 rounded border border-dashed border-amber-600">
            <TextContentTitle
              align="center"
              title="Get Started Today"
              subtitle="Join thousands of users already using our platform"
            />
          </div>

          <div className="p-4 rounded border border-dashed border-amber-600">
            <TextContentTitle
              title="Product Features"
              subtitle="Everything you need to build amazing applications"
            />
          </div>

          <div className="p-4 rounded border border-dashed border-amber-600">
            <TextContentTitle
              align="center"
              title="Contact Us"
              hasSubtitle={false}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
