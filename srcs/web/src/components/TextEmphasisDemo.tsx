import { TextEmphasis } from "../ui/typography/TextEmphasis";

export function TextEmphasisDemo() {
  return (
    <div className="flex flex-col gap-12">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Text Emphasis Component</h2>
        <p className="text-(--sds-color-text-default-secondary) mb-8">
          A typography primitive for rendering emphasized text using italic
          styling. Used when text needs visual distinction through
          italicization, typically for introducing concepts, highlighting
          important terms, or providing contextual emphasis within paragraphs.
        </p>
      </div>

      {/* Basic Usage */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Basic Usage</h3>
        <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
          <TextEmphasis />
        </div>
      </section>

      {/* Custom Text Examples */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Custom Text Examples</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-medium mb-3">Technical Term</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <TextEmphasis text="semantic HTML" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-3">Concept Introduction</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <TextEmphasis text="component-based architecture" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-3">Foreign Phrase</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <TextEmphasis text="carpe diem" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-3">Book Title</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <TextEmphasis text="The Design of Everyday Things" />
            </div>
          </div>
        </div>
      </section>

      {/* Real-world Examples */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Real-world Examples</h3>

        <div className="space-y-8">
          {/* Article Content with Inline Emphasis */}
          <div>
            <h4 className="text-lg font-medium mb-3">
              Article Content with Inline Emphasis
            </h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <article className="max-w-2xl space-y-4">
                <h2 className="text-2xl font-bold mb-4">
                  Understanding Semantic HTML
                </h2>
                <p className="text-base leading-relaxed">
                  When building modern web applications, understanding{" "}
                  <TextEmphasis text="semantic HTML" /> is crucial for creating
                  accessible and maintainable code. Semantic elements clearly
                  describe their meaning to both the browser and the developer.
                </p>
                <p className="text-base leading-relaxed">
                  For example, elements like <TextEmphasis text="<article>" />,{" "}
                  <TextEmphasis text="<section>" />, and{" "}
                  <TextEmphasis text="<nav>" /> provide meaning about their
                  content, making it easier for screen readers and search
                  engines to understand the page structure.
                </p>
              </article>
            </div>
          </div>

          {/* Technical Documentation */}
          <div>
            <h4 className="text-lg font-medium mb-3">
              Technical Documentation
            </h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <div className="max-w-2xl space-y-4">
                <h3 className="text-xl font-bold">Component Props</h3>
                <div className="space-y-3">
                  <div className="p-4 bg-gray-50 rounded">
                    <p className="font-semibold mb-1">text</p>
                    <p className="text-sm text-gray-600 mb-2">
                      Type: <TextEmphasis text="string" />
                    </p>
                    <p className="text-sm">
                      The content to be displayed in emphasized format.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded">
                    <p className="font-semibold mb-1">className</p>
                    <p className="text-sm text-gray-600 mb-2">
                      Type: <TextEmphasis text="string (optional)" />
                    </p>
                    <p className="text-sm">
                      Additional CSS classes for custom styling.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Post with Citations */}
          <div>
            <h4 className="text-lg font-medium mb-3">
              Blog Post with Citations
            </h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <article className="max-w-2xl space-y-4">
                <h2 className="text-2xl font-bold mb-4">
                  The Philosophy of Design
                </h2>
                <p className="text-base leading-relaxed">
                  As Don Norman wrote in his seminal work{" "}
                  <TextEmphasis text="The Design of Everyday Things" />, good
                  design is actually harder to notice than poor design because
                  it fits our needs so well that the design becomes invisible.
                </p>
                <p className="text-base leading-relaxed">
                  This principle of <TextEmphasis text="invisible design" />{" "}
                  should guide our approach to user interface development. When
                  users can accomplish their goals without thinking about the
                  interface, we've succeeded.
                </p>
              </article>
            </div>
          </div>

          {/* Educational Content */}
          <div>
            <h4 className="text-lg font-medium mb-3">Educational Content</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <div className="max-w-2xl space-y-6">
                <div>
                  <h3 className="text-lg font-bold mb-2">Key Terminology</h3>
                  <dl className="space-y-3">
                    <div>
                      <dt className="font-semibold">
                        <TextEmphasis text="Component Composition" />
                      </dt>
                      <dd className="text-sm text-gray-600 ml-4 mt-1">
                        The practice of building complex UI by combining
                        simpler, reusable components.
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold">
                        <TextEmphasis text="Props" />
                      </dt>
                      <dd className="text-sm text-gray-600 ml-4 mt-1">
                        Properties passed from parent to child components to
                        configure their behavior.
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold">
                        <TextEmphasis text="State Management" />
                      </dt>
                      <dd className="text-sm text-gray-600 ml-4 mt-1">
                        Techniques for managing and synchronizing data across
                        components.
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          {/* Product Feature Description */}
          <div>
            <h4 className="text-lg font-medium mb-3">
              Product Feature Description
            </h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <div className="max-w-md p-6 bg-white shadow-lg rounded-lg">
                <h3 className="text-xl font-bold mb-2">Premium Features</h3>
                <p className="text-sm text-gray-500 mb-4">
                  Unlock the full potential
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs mt-0.5">
                      ✓
                    </div>
                    <p className="text-sm">
                      Get access to <TextEmphasis text="unlimited projects" />{" "}
                      and collaboration tools
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs mt-0.5">
                      ✓
                    </div>
                    <p className="text-sm">
                      Enjoy <TextEmphasis text="priority support" /> with 24/7
                      availability
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs mt-0.5">
                      ✓
                    </div>
                    <p className="text-sm">
                      Export with{" "}
                      <TextEmphasis text="advanced formatting options" />
                    </p>
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
                <p className="text-gray-600">16px (Medium Body)</p>
              </div>
              <div>
                <strong>Line Height:</strong>
                <p className="text-gray-600">1.4 (140%)</p>
              </div>
              <div>
                <strong>Font Style:</strong>
                <p className="text-gray-600">Italic</p>
              </div>
              <div>
                <strong>Text Color:</strong>
                <p className="text-gray-600">#1e1e1e</p>
              </div>
              <div>
                <strong>Layout:</strong>
                <p className="text-gray-600">Flex container, items-start</p>
              </div>
              <div>
                <strong>Whitespace:</strong>
                <p className="text-gray-600">Normal (wraps)</p>
              </div>
            </div>
            <div className="mt-6 p-4 bg-gray-50 rounded">
              <strong>Design Tokens:</strong>
              <ul className="mt-2 space-y-1 text-xs font-mono text-gray-600">
                <li>--sds-typography-body-font-family</li>
                <li>--sds-typography-body-font-style-italic</li>
                <li>--sds-typography-body-size-medium</li>
                <li>--sds-color-text-default-default</li>
              </ul>
            </div>
            <div className="mt-6 p-4 bg-blue-50 rounded">
              <strong>Usage Guidelines:</strong>
              <ul className="mt-2 space-y-2 text-gray-700">
                <li>
                  • Use for emphasizing specific words or phrases within content
                </li>
                <li>
                  • Ideal for technical terms, concepts, book titles, and
                  foreign phrases
                </li>
                <li>• Maintains consistent 16px size across all breakpoints</li>
                <li>
                  • Avoid overuse - reserve for genuinely important emphasis
                </li>
                <li>• Can be used inline within paragraphs or standalone</li>
                <li>• Provides visual distinction through italic styling</li>
              </ul>
            </div>
            <div className="mt-6 p-4 bg-amber-50 rounded">
              <strong>Accessibility Notes:</strong>
              <ul className="mt-2 space-y-2 text-gray-700">
                <li>• Uses semantic paragraph element for proper structure</li>
                <li>
                  • Text color (#1e1e1e) provides excellent contrast ratio
                  (&gt;16:1)
                </li>
                <li>• 16px font size meets WCAG readable text requirements</li>
                <li>
                  • Italic styling is purely visual and doesn't affect screen
                  readers
                </li>
                <li>
                  • For semantic emphasis, consider using &lt;em&gt; or
                  &lt;strong&gt; elements
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TextEmphasisDemo;
