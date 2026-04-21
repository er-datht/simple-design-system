import { useState, type HTMLAttributes } from "react";
import { cn } from "../../../utils/cn";
import { ProductInfoCard } from "../../primitives/Card";
import { SearchField } from "../../primitives/Input";
import {
  TagToggleGroup,
  type TagToggleItem,
} from "../../primitives/TagToggleGroup";
import { Tag } from "../../primitives/Tag";
import { CheckboxField, CheckboxGroup } from "../../primitives/Input";
import { SliderField } from "../../primitives/Input";
import { IconButton } from "../../primitives/Button";
import { IconSliders } from "../../icons";
import "./page-product-results.css";

/**
 * Product type for card data
 */
export type Product = {
  id: string;
  name: string;
  price: string;
  description: string;
  imageUrl?: string;
  imageAlt?: string;
};

/**
 * Filter option type
 */
export type FilterOption = {
  id: string;
  label: string;
  description?: string;
};

/**
 * Filter state structure
 */
export type FilterState = {
  keywords: string[];
  labels: string[];
  colors: string[];
  sizes: string[];
  priceRange: { min: number; max: number };
  selectedCategories: string[];
  searchQuery: string;
};

/**
 * Props for PageProductResults component
 */
export interface PageProductResultsProps extends HTMLAttributes<HTMLElement> {
  /**
   * Array of products to display in the grid
   * @default []
   */
  products?: Product[];

  /**
   * Initial filter state
   */
  filters?: Partial<FilterState>;

  /**
   * Category filter items for tag toggle group
   * @default [{ id: "react", label: "React" }, { id: "vue", label: "Vue" }, { id: "angular", label: "Angular" }]
   */
  categoryItems?: TagToggleItem[];

  /**
   * Label filter options (checkboxes)
   */
  labelOptions?: FilterOption[];

  /**
   * Color filter options (checkboxes)
   */
  colorOptions?: FilterOption[];

  /**
   * Size filter options (checkboxes)
   */
  sizeOptions?: FilterOption[];

  /**
   * Callback when filters change
   */
  onFilterChange?: (filters: FilterState) => void;

  /**
   * Callback when a product card is clicked
   */
  onProductClick?: (productId: string) => void;

  /**
   * Callback when the mobile filter button is clicked
   */
  onMobileFilterToggle?: () => void;

  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * PageProductResults Component
 *
 * A comprehensive product browsing and filtering page section that displays a collection of
 * products with advanced filtering capabilities. Features a responsive layout that adapts
 * between desktop (sidebar filters) and mobile (compact filter bar) viewports.
 *
 * Key Features:
 * - Responsive layout with CSS media queries (no platform prop needed)
 * - Desktop: Two-column layout with sidebar filters + product grid
 * - Mobile: Single-column with icon button for filter panel
 * - Search functionality for product filtering
 * - Category tag toggles (React, Vue, Angular, etc.)
 * - Advanced sidebar filters: Keywords, Labels, Colors, Sizes, Price Range
 * - Flexible product grid with responsive card sizing
 *
 * Layout Behavior:
 * - Desktop (≥768px): Sidebar (240px) + Main content (flex: 1)
 * - Mobile (<768px): Single column, hidden sidebar
 *
 * Design Tokens:
 * - Uses CSS variables from src/theme.css for consistent styling
 * - All spacing, colors, typography follow design system
 *
 * Accessibility:
 * - Semantic HTML with proper ARIA attributes
 * - Keyboard navigation support
 * - Screen reader friendly labels
 * - Proper focus management
 *
 * **Figma Source:** [Page Product Results](https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=348:13517&m=dev)
 *
 * @example
 * ```tsx
 * // Basic usage with default data
 * <PageProductResults />
 *
 * // With custom products
 * <PageProductResults
 *   products={[
 *     { id: "1", name: "Wireless Mouse", price: "$49.99", description: "Ergonomic design" },
 *     { id: "2", name: "Keyboard", price: "$79.99", description: "Mechanical switches" }
 *   ]}
 * />
 *
 * // With custom filters and callbacks
 * <PageProductResults
 *   products={products}
 *   categoryItems={[
 *     { id: "tech", label: "Tech" },
 *     { id: "accessories", label: "Accessories" }
 *   ]}
 *   onFilterChange={(filters) => console.log(filters)}
 *   onProductClick={(id) => navigate(`/product/${id}`)}
 * />
 * ```
 */
export function PageProductResults({
  products = [],
  filters,
  categoryItems = [
    { id: "react", label: "React" },
    { id: "vue", label: "Vue" },
    { id: "angular", label: "Angular" },
  ],
  labelOptions = [
    { id: "label1", label: "Label", description: "Description" },
    { id: "label2", label: "Label", description: "Description" },
    { id: "label3", label: "Label", description: "Description" },
  ],
  colorOptions = [
    { id: "color1", label: "Label", description: "Description" },
    { id: "color2", label: "Label", description: "Description" },
    { id: "color3", label: "Label", description: "Description" },
  ],
  sizeOptions = [
    { id: "size1", label: "Label", description: "Description" },
    { id: "size2", label: "Label", description: "Description" },
    { id: "size3", label: "Label", description: "Description" },
  ],
  onFilterChange,
  onProductClick,
  onMobileFilterToggle,
  className,
  ...rest
}: PageProductResultsProps) {
  // Mobile filter menu state
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Initialize filter state
  const [filterState, setFilterState] = useState<FilterState>({
    keywords: filters?.keywords || ["Spring", "Smart", "Modern"],
    labels: filters?.labels || [],
    colors: filters?.colors || [],
    sizes: filters?.sizes || [],
    priceRange: filters?.priceRange || { min: 0, max: 1000 },
    selectedCategories: filters?.selectedCategories || ["react"],
    searchQuery: filters?.searchQuery || "",
  });

  // Toggle mobile filter menu
  const handleMobileFilterToggle = () => {
    setIsMobileFilterOpen(!isMobileFilterOpen);
    onMobileFilterToggle?.();
  };

  // Close mobile filter menu
  const closeMobileFilter = () => {
    setIsMobileFilterOpen(false);
  };

  // Update filter state and notify parent
  const updateFilters = (updates: Partial<FilterState>) => {
    const newFilters = { ...filterState, ...updates };
    setFilterState(newFilters);
    onFilterChange?.(newFilters);
  };

  // Handle keyword removal
  const handleRemoveKeyword = (keyword: string) => {
    updateFilters({
      keywords: filterState.keywords.filter((k) => k !== keyword),
    });
  };

  // Handle search change
  const handleSearchChange = (value: string) => {
    updateFilters({ searchQuery: value });
  };

  // Handle category toggle
  const handleCategoryToggle = (itemId: string) => {
    // TagToggleGroup calls onToggle with individual item IDs
    // For multi-select, toggle the item in/out of the array
    const isSelected = filterState.selectedCategories.includes(itemId);
    const selectedCategories = isSelected
      ? filterState.selectedCategories.filter((id) => id !== itemId)
      : [...filterState.selectedCategories, itemId];
    updateFilters({ selectedCategories });
  };

  // Handle checkbox changes
  const handleLabelChange = (id: string, checked: boolean) => {
    const labels = checked
      ? [...filterState.labels, id]
      : filterState.labels.filter((l) => l !== id);
    updateFilters({ labels });
  };

  const handleColorChange = (id: string, checked: boolean) => {
    const colors = checked
      ? [...filterState.colors, id]
      : filterState.colors.filter((c) => c !== id);
    updateFilters({ colors });
  };

  const handleSizeChange = (id: string, checked: boolean) => {
    const sizes = checked
      ? [...filterState.sizes, id]
      : filterState.sizes.filter((s) => s !== id);
    updateFilters({ sizes });
  };

  // Handle price range change
  const handlePriceRangeChange = (value: number | [number, number]) => {
    // Handle single value for max price
    const maxValue = typeof value === "number" ? value : value[1];
    updateFilters({
      priceRange: { ...filterState.priceRange, max: maxValue },
    });
  };

  return (
    <main
      className={cn("page-product-results", className)}
      data-figma-node-id="2261:25363"
      {...rest}
    >
      {/* Mobile Filter Overlay */}
      {isMobileFilterOpen && (
        <div
          className="page-product-results__filter-overlay"
          onClick={closeMobileFilter}
          aria-hidden="true"
        />
      )}

      {/* Filter Menu (Desktop Only - Hidden on Mobile via CSS) */}
      <aside
        className={cn(
          "page-product-results__filter-menu",
          isMobileFilterOpen && "page-product-results__filter-menu--open"
        )}
        aria-label="Product filters"
        data-figma-node-id="189:29064"
      >
        {/* Keywords Section */}
        <section
          className="page-product-results__filter-section"
          data-figma-node-id="189:29086"
        >
          <h2
            className="page-product-results__filter-heading"
            data-figma-node-id="189:29087"
          >
            Keywords
          </h2>
          <div
            className="page-product-results__keyword-list"
            data-figma-node-id="189:29088"
            role="list"
          >
            {filterState.keywords.map((keyword, index) => (
              <Tag
                key={keyword}
                scheme="neutral"
                variant="secondary"
                label={keyword}
                onRemove={() => handleRemoveKeyword(keyword)}
                data-figma-node-id={
                  index === 0
                    ? "189:29089"
                    : index === 1
                    ? "189:29090"
                    : "189:29091"
                }
              />
            ))}
          </div>
        </section>

        {/* Label Checkbox Group */}
        <section
          className="page-product-results__filter-section"
          data-figma-node-id="189:29066"
        >
          <h2 className="page-product-results__filter-heading">Labels</h2>
          <CheckboxGroup data-figma-node-id="377:16404">
            {labelOptions.map((option) => (
              <CheckboxField
                key={option.id}
                label={option.label}
                description={option.description}
                checked={filterState.labels.includes(option.id)}
                onChange={(checked) => handleLabelChange(option.id, checked)}
              />
            ))}
          </CheckboxGroup>
        </section>

        {/* Price Range Slider */}
        <div
          className="page-product-results__filter-section"
          data-figma-node-id="189:29070"
        >
          <SliderField
            label="Price Range"
            defaultValue={[
              filterState.priceRange.min,
              filterState.priceRange.max,
            ]}
            min={0}
            max={1000}
            step={10}
            valueFormat="range"
            valuePrefix="$"
            onChange={handlePriceRangeChange}
          />
        </div>

        {/* Color Checkbox Group */}
        <section
          className="page-product-results__filter-section"
          data-figma-node-id="189:29071"
        >
          <h2
            className="page-product-results__filter-heading"
            data-figma-node-id="189:29072"
          >
            Color
          </h2>
          <CheckboxGroup data-figma-node-id="377:13816">
            {colorOptions.map((option) => (
              <CheckboxField
                key={option.id}
                label={option.label}
                description={option.description}
                checked={filterState.colors.includes(option.id)}
                onChange={(checked) => handleColorChange(option.id, checked)}
              />
            ))}
          </CheckboxGroup>
        </section>

        {/* Size Checkbox Group */}
        <section
          className="page-product-results__filter-section"
          data-figma-node-id="377:14931"
        >
          <h2
            className="page-product-results__filter-heading"
            data-figma-node-id="377:14932"
          >
            Size
          </h2>
          <CheckboxGroup data-figma-node-id="377:14933">
            {sizeOptions.map((option) => (
              <CheckboxField
                key={option.id}
                label={option.label}
                description={option.description}
                checked={filterState.sizes.includes(option.id)}
                onChange={(checked) => handleSizeChange(option.id, checked)}
              />
            ))}
          </CheckboxGroup>
        </section>
      </aside>

      {/* Main Content Area */}
      <section
        className="page-product-results__main-content"
        data-figma-node-id="83:31568"
      >
        {/* Filter Bar */}
        <div
          className="page-product-results__filter-bar"
          role="search"
          data-figma-node-id="189:29643"
        >
          {/* Search Filter Container */}
          <div
            className="page-product-results__search-container"
            data-figma-node-id="348:13770"
          >
            {/* Mobile Filter Toggle Button (Hidden on Desktop via CSS) */}
            <IconButton
              variant="primary"
              size="md"
              icon={<IconSliders size="20" />}
              onClick={handleMobileFilterToggle}
              aria-label="Toggle filters"
              aria-expanded={isMobileFilterOpen}
              className="page-product-results__mobile-filter-btn"
              data-figma-node-id="348:13760"
            />

            {/* Search Field */}
            <SearchField
              placeholder="Search"
              value={filterState.searchQuery}
              onChange={handleSearchChange}
              data-figma-node-id="348:13771"
              className="page-product-results__search-field"
            />
          </div>

          {/* Category Tag Toggle Group */}
          <TagToggleGroup
            items={categoryItems}
            selectedIds={filterState.selectedCategories}
            onToggle={handleCategoryToggle}
            data-figma-node-id="189:29645"
          />
        </div>

        {/* Product Grid */}
        <div
          className="page-product-results__product-grid"
          role="list"
          data-figma-node-id="83:31570"
        >
          {products.length > 0 ? (
            products.map((product, index) => (
              <ProductInfoCard
                key={product.id}
                productName={product.name}
                price={product.price}
                description={product.description}
                imageUrl={product.imageUrl}
                imageAlt={product.imageAlt || product.name}
                onClick={() => onProductClick?.(product.id)}
                role="listitem"
                data-figma-node-id={`83:3157${index + 1}`}
              />
            ))
          ) : (
            <p className="page-product-results__no-results">
              No products found. Try adjusting your filters.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}

export default PageProductResults;
