import { useState } from "react";
import {
  PageProductResults,
  type Product,
  type FilterState,
} from "../ui/sections/PageProductResults";

/**
 * Sample product data for demonstration
 */
const sampleProducts: Product[] = [
  {
    id: "1",
    name: "Wireless Mouse",
    price: "$49.99",
    description: "Ergonomic design with precision tracking",
    imageUrl: "/product.svg",
    imageAlt: "Wireless Mouse",
  },
  {
    id: "2",
    name: "Mechanical Keyboard",
    price: "$129.99",
    description: "Cherry MX switches with RGB lighting",
    imageUrl: "/product.svg",
    imageAlt: "Mechanical Keyboard",
  },
  {
    id: "3",
    name: "USB-C Hub",
    price: "$79.99",
    description: "7-in-1 multiport adapter for laptops",
    imageUrl: "/product.svg",
    imageAlt: "USB-C Hub",
  },
  {
    id: "4",
    name: "Laptop Stand",
    price: "$39.99",
    description: "Aluminum stand with adjustable height",
    imageUrl: "/product.svg",
    imageAlt: "Laptop Stand",
  },
  {
    id: "5",
    name: "Webcam HD",
    price: "$89.99",
    description: "1080p video with auto-focus and noise reduction",
    imageUrl: "/product.svg",
    imageAlt: "Webcam HD",
  },
  {
    id: "6",
    name: "Monitor Light Bar",
    price: "$59.99",
    description: "LED desk lamp with auto-dimming",
    imageUrl: "/product.svg",
    imageAlt: "Monitor Light Bar",
  },
  {
    id: "7",
    name: "Cable Organizer",
    price: "$19.99",
    description: "Keep your desk cables tidy and organized",
    imageUrl: "/product.svg",
    imageAlt: "Cable Organizer",
  },
  {
    id: "8",
    name: "Desk Mat",
    price: "$29.99",
    description: "Large mouse pad with stitched edges",
    imageUrl: "/product.svg",
    imageAlt: "Desk Mat",
  },
  {
    id: "9",
    name: "Wireless Charger",
    price: "$34.99",
    description: "Fast charging pad for Qi-enabled devices",
    imageUrl: "/product.svg",
    imageAlt: "Wireless Charger",
  },
];

/**
 * PageProductResultsDemo Component
 *
 * Comprehensive demonstration of the PageProductResults component showcasing:
 * - Responsive layout (desktop sidebar, mobile compact)
 * - Product filtering with search
 * - Category tag toggles
 * - Sidebar filter options (keywords, labels, colors, sizes, price range)
 * - Product grid with sample data
 * - Filter state management
 *
 * Features demonstrated:
 * 1. Default state with pre-selected filters
 * 2. Interactive filtering with live updates
 * 3. Product card click handling
 * 4. Mobile filter toggle button
 * 5. Keyword tag removal
 * 6. Search functionality
 * 7. Category selection
 * 8. Checkbox filters for labels, colors, sizes
 * 9. Price range slider
 */
export function PageProductResultsDemo() {
  const [filterState, setFilterState] = useState<FilterState | null>(null);
  const [clickedProduct, setClickedProduct] = useState<string | null>(null);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const handleFilterChange = (filters: FilterState) => {
    setFilterState(filters);
    console.log("Filters updated:", filters);
  };

  const handleProductClick = (productId: string) => {
    setClickedProduct(productId);
    console.log("Product clicked:", productId);
    // In a real app, you would navigate to the product detail page
    // navigate(`/product/${productId}`);
  };

  const handleMobileFilterToggle = () => {
    setMobileFilterOpen(!mobileFilterOpen);
    console.log("Mobile filter panel toggled:", !mobileFilterOpen);
    // In a real app, you would open a modal/drawer with filter options
  };

  return (
    <div className="space-y-8">
      {/* Section Heading */}
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold">Page Product Results</h2>
        <p className="text-gray-600">
          A comprehensive product browsing page with advanced filtering
          capabilities. Features responsive layout with sidebar filters on
          desktop and compact filter bar on mobile.
        </p>
      </div>

      {/* Demo Controls & State Display */}
      <div className="p-4 bg-gray-50 rounded-lg space-y-4">
        <h3 className="font-semibold text-lg">Demo State</h3>

        {/* Current Filter State */}
        {filterState && (
          <div className="space-y-2">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <strong>Search Query:</strong>{" "}
                {filterState.searchQuery || "(empty)"}
              </div>
              <div>
                <strong>Keywords:</strong> {filterState.keywords.join(", ")}
              </div>
              <div>
                <strong>Selected Categories:</strong>{" "}
                {filterState.selectedCategories.join(", ")}
              </div>
              <div>
                <strong>Price Range:</strong> $0 - ${filterState.priceRange.max}
              </div>
              <div>
                <strong>Labels:</strong>{" "}
                {filterState.labels.length > 0
                  ? filterState.labels.join(", ")
                  : "None"}
              </div>
              <div>
                <strong>Colors:</strong>{" "}
                {filterState.colors.length > 0
                  ? filterState.colors.join(", ")
                  : "None"}
              </div>
              <div>
                <strong>Sizes:</strong>{" "}
                {filterState.sizes.length > 0
                  ? filterState.sizes.join(", ")
                  : "None"}
              </div>
              <div>
                <strong>Mobile Filter Open:</strong>{" "}
                {mobileFilterOpen ? "Yes" : "No"}
              </div>
            </div>

            {clickedProduct && (
              <div className="mt-2 p-2 bg-blue-50 rounded">
                <strong>Last Clicked Product ID:</strong> {clickedProduct}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Variant 1: Default with all features */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Default Configuration</h3>
        <p className="text-gray-600">
          Complete page with sidebar filters, search, category toggles, and
          product grid. Resize your browser to see the responsive behavior.
        </p>
        <div className="border border-gray-300 rounded-lg overflow-hidden">
          <PageProductResults
            products={sampleProducts}
            categoryItems={[
              { id: "react", label: "React" },
              { id: "vue", label: "Vue" },
              { id: "angular", label: "Angular" },
            ]}
            labelOptions={[
              { id: "new", label: "New Arrival", description: "Latest products" },
              {
                id: "sale",
                label: "On Sale",
                description: "Discounted items",
              },
              {
                id: "featured",
                label: "Featured",
                description: "Editor's picks",
              },
            ]}
            colorOptions={[
              { id: "black", label: "Black", description: "Classic black" },
              { id: "white", label: "White", description: "Pure white" },
              { id: "silver", label: "Silver", description: "Metallic silver" },
            ]}
            sizeOptions={[
              { id: "small", label: "Small", description: "Compact size" },
              { id: "medium", label: "Medium", description: "Standard size" },
              { id: "large", label: "Large", description: "Extra large" },
            ]}
            onFilterChange={handleFilterChange}
            onProductClick={handleProductClick}
            onMobileFilterToggle={handleMobileFilterToggle}
          />
        </div>
      </div>

      {/* Variant 2: Custom category filters */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Custom Category Filters</h3>
        <p className="text-gray-600">
          Same component with different category options to demonstrate
          flexibility.
        </p>
        <div className="border border-gray-300 rounded-lg overflow-hidden">
          <PageProductResults
            products={sampleProducts.slice(0, 6)}
            categoryItems={[
              { id: "tech", label: "Tech" },
              { id: "accessories", label: "Accessories" },
              { id: "cables", label: "Cables" },
              { id: "stands", label: "Stands" },
            ]}
            filters={{
              keywords: ["Modern", "Minimal"],
              selectedCategories: ["tech"],
            }}
            onProductClick={handleProductClick}
            onMobileFilterToggle={handleMobileFilterToggle}
          />
        </div>
      </div>

      {/* Variant 3: Limited products */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Limited Product Set</h3>
        <p className="text-gray-600">
          Displaying only 3 products to show grid behavior with fewer items.
        </p>
        <div className="border border-gray-300 rounded-lg overflow-hidden">
          <PageProductResults
            products={sampleProducts.slice(0, 3)}
            categoryItems={[
              { id: "all", label: "All" },
              { id: "popular", label: "Popular" },
            ]}
            filters={{
              keywords: ["Essential"],
              selectedCategories: ["all"],
            }}
            onProductClick={handleProductClick}
            onMobileFilterToggle={handleMobileFilterToggle}
          />
        </div>
      </div>

      {/* Variant 4: Empty state */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Empty State</h3>
        <p className="text-gray-600">
          No products to display - shows the "no results" message.
        </p>
        <div className="border border-gray-300 rounded-lg overflow-hidden">
          <PageProductResults
            products={[]}
            categoryItems={[
              { id: "none", label: "None Available" },
            ]}
            onProductClick={handleProductClick}
            onMobileFilterToggle={handleMobileFilterToggle}
          />
        </div>
      </div>

      {/* Usage Notes */}
      <div className="p-6 bg-blue-50 rounded-lg space-y-4">
        <h3 className="font-semibold text-lg">Usage Notes</h3>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>
            <strong>Responsive Design:</strong> The component automatically
            adapts between desktop (sidebar) and mobile (compact) layouts using
            CSS media queries at 768px breakpoint.
          </li>
          <li>
            <strong>Desktop Layout:</strong> Displays sidebar filters on the
            left (240px width) with main content area on the right. Product grid
            shows multiple columns.
          </li>
          <li>
            <strong>Mobile Layout:</strong> Hides sidebar filters and shows icon
            button to toggle filter panel. Search bar takes full width. Product
            grid adjusts to smaller columns.
          </li>
          <li>
            <strong>Filtering:</strong> Supports search, category toggles,
            keyword tags (removable), checkbox filters (labels, colors, sizes),
            and price range slider.
          </li>
          <li>
            <strong>State Management:</strong> All filter state is managed
            internally with callbacks to notify parent components of changes.
          </li>
          <li>
            <strong>Accessibility:</strong> Uses semantic HTML (main, aside,
            section, fieldset), proper ARIA labels, keyboard navigation support.
          </li>
          <li>
            <strong>Design Tokens:</strong> All styling uses CSS variables from
            theme.css for consistency.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PageProductResultsDemo;
