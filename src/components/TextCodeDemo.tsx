import { TextCode } from "../ui/typography/TextCode";

export function TextCodeDemo() {
  return (
    <div className="flex flex-col gap-12">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Text Code Component</h2>
        <p className="text-(--sds-color-text-default-secondary) mb-8">
          A typography primitive for displaying inline or block code content with
          consistent monospace styling. Uses the semantic &lt;code&gt; element
          for better accessibility and SEO, applying the "Body Code" design
          token to ensure proper readability and visual distinction from regular
          text.
        </p>
      </div>

      {/* Basic Usage */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Basic Usage</h3>
        <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
          <TextCode />
        </div>
      </section>

      {/* Code Snippet Examples */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Code Snippet Examples</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-medium mb-3">JavaScript Variable</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <TextCode text="const greeting = 'Hello World';" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-3">Function Call</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <TextCode text="console.log('Debug message')" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-3">Command Line</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <TextCode text="npm install react" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-3">API Endpoint</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <TextCode text="https://api.example.com/v1/users" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-3">File Path</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <TextCode text="/src/components/Button.tsx" />
            </div>
          </div>
        </div>
      </section>

      {/* Real-world Examples */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Real-world Examples</h3>

        <div className="space-y-8">
          {/* Inline Code in Documentation */}
          <div>
            <h4 className="text-lg font-medium mb-3">
              Inline Code in Documentation
            </h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <article className="max-w-2xl space-y-4">
                <h3 className="text-xl font-bold">React Hooks Guide</h3>
                <p className="text-gray-700">
                  To manage state in functional components, use the{" "}
                  <TextCode text="useState" /> hook. It returns an array with
                  two elements: the current state value and a function to update
                  it.
                </p>
                <p className="text-gray-700">
                  For side effects, the <TextCode text="useEffect" /> hook
                  allows you to perform operations after rendering, such as
                  fetching data or subscribing to events.
                </p>
              </article>
            </div>
          </div>

          {/* Installation Instructions */}
          <div>
            <h4 className="text-lg font-medium mb-3">
              Installation Instructions
            </h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <div className="max-w-2xl p-6 bg-white shadow-lg rounded-lg">
                <h3 className="text-xl font-bold mb-4">Getting Started</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-600 mb-2">
                      1. Install the package:
                    </p>
                    <div className="bg-gray-100 p-3 rounded">
                      <TextCode text="npm install @design-system/components" />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">
                      2. Import the component:
                    </p>
                    <div className="bg-gray-100 p-3 rounded">
                      <TextCode text="import { Button } from '@design-system/components';" />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">
                      3. Start the development server:
                    </p>
                    <div className="bg-gray-100 p-3 rounded">
                      <TextCode text="npm run dev" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* API Documentation */}
          <div>
            <h4 className="text-lg font-medium mb-3">API Documentation</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <div className="max-w-3xl">
                <h3 className="text-xl font-bold mb-4">User API Reference</h3>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded">
                        GET
                      </span>
                      <TextCode text="/api/users" />
                    </div>
                    <p className="text-sm text-gray-600">
                      Retrieve a list of all users
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded">
                        POST
                      </span>
                      <TextCode text="/api/users" />
                    </div>
                    <p className="text-sm text-gray-600">Create a new user</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-semibold rounded">
                        PUT
                      </span>
                      <TextCode text="/api/users/:id" />
                    </div>
                    <p className="text-sm text-gray-600">
                      Update an existing user
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Code Reference in Tutorial */}
          <div>
            <h4 className="text-lg font-medium mb-3">
              Code Reference in Tutorial
            </h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <article className="max-w-2xl space-y-4">
                <h3 className="text-xl font-bold">Building Your First Component</h3>
                <div className="space-y-3">
                  <p className="text-gray-700">
                    Create a new file at{" "}
                    <TextCode text="src/components/Card.tsx" /> and add the
                    following structure:
                  </p>
                  <div className="bg-gray-50 p-4 rounded space-y-2">
                    <TextCode text="export interface CardProps {" />
                    <TextCode text="  title: string;" className="ml-4" />
                    <TextCode text="  description?: string;" className="ml-4" />
                    <TextCode text="}" />
                  </div>
                  <p className="text-gray-700">
                    Don't forget to export your component in{" "}
                    <TextCode text="index.ts" /> for easy importing throughout
                    your application.
                  </p>
                </div>
              </article>
            </div>
          </div>

          {/* Technical Specifications */}
          <div>
            <h4 className="text-lg font-medium mb-3">
              Technical Specifications
            </h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <div className="max-w-2xl p-6 bg-white shadow-md rounded-lg">
                <h3 className="text-xl font-bold mb-4">System Requirements</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">Node Version:</span>
                    <TextCode text=">=18.0.0" />
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">Package Manager:</span>
                    <TextCode text="yarn" />
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">React Version:</span>
                    <TextCode text="^19.0.0" />
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">TypeScript Version:</span>
                    <TextCode text="^5.6.2" />
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-gray-600">Config File:</span>
                    <TextCode text="vite.config.ts" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Error Messages with Code */}
          <div>
            <h4 className="text-lg font-medium mb-3">Error Messages</h4>
            <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
              <div className="max-w-2xl space-y-3">
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-start gap-2">
                    <span className="text-red-600 font-semibold">Error:</span>
                    <p className="text-sm text-gray-700">
                      Module not found. Cannot resolve{" "}
                      <TextCode text="'./components/Button'" />
                    </p>
                  </div>
                </div>
                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <div className="flex items-start gap-2">
                    <span className="text-yellow-700 font-semibold">
                      Warning:
                    </span>
                    <p className="text-sm text-gray-700">
                      Prop <TextCode text="isActive" /> is deprecated. Use{" "}
                      <TextCode text="active" /> instead.
                    </p>
                  </div>
                </div>
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600 font-semibold">Info:</span>
                    <p className="text-sm text-gray-700">
                      Environment variable <TextCode text="VITE_API_URL" /> is
                      not set. Using default value.
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
                <p className="text-gray-600">Roboto Mono, sans-serif</p>
              </div>
              <div>
                <strong>Font Weight:</strong>
                <p className="text-gray-600">400 (Regular)</p>
              </div>
              <div>
                <strong>Font Size:</strong>
                <p className="text-gray-600">16px (Body Code)</p>
              </div>
              <div>
                <strong>Line Height:</strong>
                <p className="text-gray-600">1 (tight spacing)</p>
              </div>
              <div>
                <strong>Text Color:</strong>
                <p className="text-gray-600">#1e1e1e</p>
              </div>
              <div>
                <strong>Layout:</strong>
                <p className="text-gray-600">Flex container, items-start</p>
              </div>
            </div>
            <div className="mt-6 p-4 bg-gray-50 rounded">
              <strong>Design Tokens:</strong>
              <ul className="mt-2 space-y-1 text-xs font-mono text-gray-600">
                <li>--sds-typography-code-font-family</li>
                <li>--sds-typography-code-font-weight</li>
                <li>--sds-typography-code-size-base</li>
                <li>--sds-color-text-default-default</li>
              </ul>
            </div>
            <div className="mt-6 p-4 bg-blue-50 rounded">
              <strong>Usage Guidelines:</strong>
              <ul className="mt-2 space-y-2 text-gray-700">
                <li>
                  • Use for inline code snippets, function names, and technical
                  terms
                </li>
                <li>
                  • Semantic &lt;code&gt; element improves accessibility and SEO
                </li>
                <li>
                  • Monospace font (Roboto Mono) provides clear distinction
                  from body text
                </li>
                <li>
                  • Line height of 1 ensures tight spacing suitable for code
                  display
                </li>
                <li>
                  • Maintains consistent 16px size for optimal code readability
                </li>
                <li>
                  • For multi-line code blocks, consider wrapping in &lt;pre&gt;
                  element
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TextCodeDemo;
