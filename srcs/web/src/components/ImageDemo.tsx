import { Image } from "../ui/primitives/Image";

export const ImageDemo = () => {
  return (
    <div className="space-y-8 p-4">
      <section>
        <h2 className="text-2xl font-bold mb-4">Image Component with Error Handling</h2>
        <p className="mb-6 text-gray-600">
          The Image component automatically displays a gray background when the source fails to load.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-3">Valid Image</h3>
        <div className="border rounded-lg p-4 inline-block">
          <Image
            src="/avatar1.svg"
            alt="Valid avatar image"
            className="w-32 h-32"
          />
        </div>
        <p className="mt-2 text-sm text-gray-500">
          Source: <code className="bg-gray-100 px-2 py-1 rounded">/avatar1.svg</code>
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-3">Failed Small Image (Gray Background)</h3>
        <div className="border rounded-lg p-4 inline-block">
          <Image
            src="/non-existent-image.jpg"
            alt="Image that will fail to load"
            className="w-32 h-32 object-cover"
          />
        </div>
        <p className="mt-2 text-sm text-gray-500">
          Source: <code className="bg-gray-100 px-2 py-1 rounded">/non-existent-image.jpg</code>
        </p>
        <p className="mt-1 text-sm text-green-600">
          ✓ Displays clean gray background (#e3e3e3) when image fails
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-3">Failed Large Image (Same Gray Background)</h3>
        <div className="border rounded-lg p-4 inline-block">
          <Image
            src="/non-existent-hero.jpg"
            alt="Large image that will fail to load"
            className="w-96 h-48 object-cover"
          />
        </div>
        <p className="mt-2 text-sm text-gray-500">
          Source: <code className="bg-gray-100 px-2 py-1 rounded">/non-existent-hero.jpg</code>
        </p>
        <p className="mt-1 text-sm text-green-600">
          ✓ Gray background adapts to any container size - no placeholder images needed!
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-3">Error Handling</h3>
        <div className="border rounded-lg p-4 inline-block">
          <Image
            src="/another-missing-image.jpg"
            alt="Failed image example"
            className="w-32 h-32 rounded-lg"
          />
        </div>
        <p className="mt-2 text-sm text-gray-500">
          Source: <code className="bg-gray-100 px-2 py-1 rounded">/another-missing-image.jpg</code>
        </p>
        <p className="mt-1 text-sm text-green-600">
          ✓ Shows gray background with rounded corners (inherits className styles)
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-3">Lazy Loading Support</h3>
        <div className="border rounded-lg p-4 inline-block">
          <Image
            src="/avatar3.svg"
            alt="Lazy loaded image"
            loading="lazy"
            className="w-32 h-32"
          />
        </div>
        <p className="mt-2 text-sm text-gray-500">
          With <code className="bg-gray-100 px-2 py-1 rounded">loading="lazy"</code> attribute
        </p>
      </section>

      <section className="border-t pt-6 mt-6">
        <h3 className="text-xl font-semibold mb-3">Usage Example</h3>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`// Basic usage - shows gray background on error
<Image src="/product.jpg" alt="Product photo" />

// Large image - gray background adapts to size
<Image
  src="/hero-banner.jpg"
  alt="Hero banner"
  loading="lazy"
  className="w-full h-96"
/>

// With custom styles (border, rounded corners, etc.)
<Image
  src="/user-avatar.jpg"
  alt="User avatar"
  className="rounded-full w-32 h-32"
/>

// Lazy loading support
<Image
  src="/gallery-image.jpg"
  alt="Gallery photo"
  loading="lazy"
  decoding="async"
/>`}
        </pre>
      </section>

      <section className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
        <h3 className="text-lg font-semibold mb-2 text-blue-900">Components Updated</h3>
        <p className="text-blue-800 mb-2">The following components now use the Image component with error handling:</p>
        <ul className="list-disc list-inside text-blue-800 space-y-1">
          <li><code className="bg-blue-100 px-2 py-1 rounded">ProductInfoCard</code></li>
          <li><code className="bg-blue-100 px-2 py-1 rounded">PanelImageDouble</code></li>
          <li><code className="bg-blue-100 px-2 py-1 rounded">HeroImage</code></li>
          <li><code className="bg-blue-100 px-2 py-1 rounded">ImageSection</code></li>
        </ul>
      </section>
    </div>
  );
};
