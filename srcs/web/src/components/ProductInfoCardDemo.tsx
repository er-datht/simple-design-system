import { ProductInfoCard } from "../ui/primitives/Card";

export default function ProductInfoCardDemo() {
  return (
    <div className="space-y-12 p-8">
      {/* Header */}
      <section>
        <h1 className="text-3xl font-bold mb-4">Product Info Card</h1>
        <p className="text-lg text-gray-600 mb-4">
          A compact, self-contained component designed to display product
          information including an image, title, price, and optional
          description. Perfect for product listings, catalogs, and e-commerce
          interfaces.
        </p>
        <p className="text-sm text-gray-500">
          <strong>Figma Source:</strong>{" "}
          <a
            href="https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=7753:4465&m=dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Product Info Card Component
          </a>
        </p>
      </section>

      {/* Basic Usage */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Basic Usage</h2>
        <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg inline-block">
          <ProductInfoCard />
        </div>
        <div className="mt-4 bg-gray-50 p-4 rounded">
          <code className="text-sm">{`<ProductInfoCard />`}</code>
        </div>
      </section>

      {/* With Custom Content */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">With Custom Content</h2>
        <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg inline-block">
          <ProductInfoCard
            productName="Premium Headphones"
            price="$299.99"
            description="High-quality wireless headphones with active noise cancellation"
            imageUrl="/product.svg"
            imageAlt="Premium Headphones"
          />
        </div>
        <div className="mt-4 bg-gray-50 p-4 rounded">
          <pre className="text-sm overflow-x-auto">
            {`<ProductInfoCard
  productName="Premium Headphones"
  price="$299.99"
  description="High-quality wireless headphones with active noise cancellation"
  imageUrl="/product.svg"
  imageAlt="Premium Headphones"
/>`}
          </pre>
        </div>
      </section>

      {/* With Custom Image */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">With Custom Image</h2>
        <p className="text-gray-600 mb-4">
          Use the{" "}
          <code className="bg-gray-100 px-2 py-1 rounded">imageUrl</code> prop
          to display a custom product image:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ProductInfoCard
            productName="Wireless Earbuds"
            price="$149.99"
            description="True wireless with premium sound quality"
            imageUrl="/product.svg"
            imageAlt="Wireless Earbuds"
          />
          <ProductInfoCard
            productName="Smart Speaker"
            price="$199.99"
            description="Voice-controlled home assistant"
            imageUrl="/product.svg"
            imageAlt="Smart Speaker"
          />
          <ProductInfoCard
            productName="Portable Charger"
            price="$59.99"
            description="20,000mAh fast charging power bank"
            imageUrl="/product.svg"
            imageAlt="Portable Charger"
          />
        </div>
      </section>

      {/* Without Description */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Without Description</h2>
        <p className="text-gray-600 mb-4">
          Set{" "}
          <code className="bg-gray-100 px-2 py-1 rounded">
            showDescription=false
          </code>{" "}
          to hide the description text:
        </p>
        <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg inline-block">
          <ProductInfoCard
            productName="Smart Watch"
            price="$399"
            showDescription={false}
          />
        </div>
        <div className="mt-4 bg-gray-50 p-4 rounded">
          <pre className="text-sm overflow-x-auto">
            {`<ProductInfoCard
  productName="Smart Watch"
  price="$399"
  showDescription={false}
/>`}
          </pre>
        </div>
      </section>

      {/* Product Grid */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Product Grid</h2>
        <p className="text-gray-600 mb-6">
          Product Info Cards work great in grid layouts for e-commerce catalogs:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProductInfoCard
            productName="Wireless Mouse"
            price="$49.99"
            description="Ergonomic design with precision tracking"
          />
          <ProductInfoCard
            productName="Mechanical Keyboard"
            price="$129.99"
            description="RGB backlit with custom switches"
          />
          <ProductInfoCard
            productName="USB-C Hub"
            price="$79.99"
            description="7-in-1 multiport adapter"
          />
          <ProductInfoCard
            productName="Laptop Stand"
            price="$39.99"
            description="Adjustable aluminum stand"
          />
        </div>
      </section>

      {/* Real-World Examples */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Real-World Examples</h2>

        {/* E-commerce Product Listing */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">
            E-commerce Product Listing
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ProductInfoCard
              productName="Running Shoes"
              price="$89.99"
              description="Lightweight and breathable design"
            />
            <ProductInfoCard
              productName="Yoga Mat"
              price="$29.99"
              description="Non-slip surface, 6mm thick"
            />
            <ProductInfoCard
              productName="Water Bottle"
              price="$19.99"
              description="Insulated stainless steel"
            />
          </div>
        </div>

        {/* Featured Products */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Featured Products</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProductInfoCard
              productName="Professional Camera"
              price="$1,299"
              description="Full-frame mirrorless with 4K video"
            />
            <ProductInfoCard
              productName="Drone Kit"
              price="$799"
              description="4K camera with obstacle avoidance"
            />
          </div>
        </div>

        {/* Compact Cards (No Description) */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Compact Cards (No Description)
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <ProductInfoCard
              productName="Notebook"
              price="$12.99"
              showDescription={false}
            />
            <ProductInfoCard
              productName="Pen Set"
              price="$8.99"
              showDescription={false}
            />
            <ProductInfoCard
              productName="Sticky Notes"
              price="$4.99"
              showDescription={false}
            />
            <ProductInfoCard
              productName="Desk Organizer"
              price="$24.99"
              showDescription={false}
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
                  <code>--sds-color-slate-200</code>: #e3e3e3
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Typography</h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <code>--sds-typography-body-font-family</code>: Inter
                </li>
                <li>
                  <code>--sds-typography-body-size-medium</code>: 16px
                </li>
                <li>
                  <code>--sds-typography-body-font-weight-regular</code>: 400
                </li>
                <li>
                  <code>--sds-typography-body-font-weight-strong</code>: 600
                </li>
                <li>
                  <code>--sds-typography-body-size-small</code>: 14px
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Spacing</h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <code>--sds-size-space-200</code>: 8px
                </li>
                <li>
                  <code>--sds-size-space-400</code>: 16px
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
                <li>Min Card Width: 240px</li>
                <li>Image Height: 247px</li>
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
                <strong>ARIA Labels:</strong> Includes descriptive aria-label
                for screen readers
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span>
                <strong>Image Accessibility:</strong> Decorative images marked
                with aria-hidden, product images support alt text
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span>
                <strong>Color Contrast:</strong> Primary text (#1e1e1e) on white
                provides 18.5:1 ratio (WCAG AAA)
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span>
                <strong>Color Contrast:</strong> Secondary text (#757575) on
                white provides 5.6:1 ratio (WCAG AA)
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
                <strong>Responsive Design:</strong> Maintains readability at
                minimum 240px width
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
                <td className="px-6 py-4 text-sm font-mono">showDescription</td>
                <td className="px-6 py-4 text-sm font-mono">boolean</td>
                <td className="px-6 py-4 text-sm font-mono">true</td>
                <td className="px-6 py-4 text-sm">
                  Controls visibility of description text
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-mono">productName</td>
                <td className="px-6 py-4 text-sm font-mono">string</td>
                <td className="px-6 py-4 text-sm font-mono">"Product Name"</td>
                <td className="px-6 py-4 text-sm">Product name or title</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-mono">price</td>
                <td className="px-6 py-4 text-sm font-mono">string</td>
                <td className="px-6 py-4 text-sm font-mono">"$0"</td>
                <td className="px-6 py-4 text-sm">Product price</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-mono">description</td>
                <td className="px-6 py-4 text-sm font-mono">string</td>
                <td className="px-6 py-4 text-sm font-mono">
                  "Product description"
                </td>
                <td className="px-6 py-4 text-sm">
                  Product description or supporting text
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-mono">imageUrl</td>
                <td className="px-6 py-4 text-sm font-mono">string</td>
                <td className="px-6 py-4 text-sm font-mono">undefined</td>
                <td className="px-6 py-4 text-sm">
                  Product image URL (shows placeholder if not provided)
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-mono">imageAlt</td>
                <td className="px-6 py-4 text-sm font-mono">string</td>
                <td className="px-6 py-4 text-sm font-mono">"Product image"</td>
                <td className="px-6 py-4 text-sm">
                  Alt text for product image
                </td>
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
