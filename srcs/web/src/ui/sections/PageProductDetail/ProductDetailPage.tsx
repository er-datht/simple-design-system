import { useState, type HTMLAttributes } from "react";
import { cn } from "../../../utils/cn";
import { Accordion, type AccordionItem } from "../../primitives";
import { Button } from "../../primitives";
import { IconButton } from "../../primitives";
import { Image } from "../../primitives";
import { SelectField, type SelectOption } from "../../primitives";
import { Tag } from "../../primitives";
import { IconHeart } from "../../icons/IconHeart";
import "./product-detail-page.css";

/**
 * Product data structure passed to onButtonClick callback
 */
export interface ProductData {
  // Core product info
  title: string;
  description: string;
  price: number;
  tagLabel: string;

  // Images
  imageUrl?: string;
  imageAlt?: string;

  // User selections
  selectedOptions: {
    [key: string]: string | undefined;
  };
}

/**
 * Props for PageProductDetail component
 * Displays a product detail page with image, pricing, description, form fields, and purchase options
 */
export interface ProductDetailPageProps extends HTMLAttributes<HTMLElement> {
  /**
   * Product title/heading
   * @default "Product Name"
   */
  title?: string;

  /**
   * Product description text
   * @default "Product description text goes here."
   */
  description?: string;

  /**
   * Product price (numeric value, will be formatted with $)
   * @default 50
   */
  price?: number;

  /**
   * Tag/badge text for special indicators (e.g., "On Sale", "New")
   * @default "Featured"
   */
  tagLabel?: string;

  /**
   * Product image URL or path
   * @default undefined (shows placeholder)
   */
  imageUrl?: string;

  /**
   * Alt text for product image
   * @default "Product image"
   */
  imageAlt?: string;

  /**
   * Label for first select field
   * @default "Size"
   */
  selectField1Label?: string;

  /**
   * Options for first select field
   */
  selectField1Options?: SelectOption[];

  /**
   * Default value for first select field
   */
  selectField1Value?: string;

  /**
   * Label for second select field
   * @default "Color"
   */
  selectField2Label?: string;

  /**
   * Options for second select field
   */
  selectField2Options?: SelectOption[];

  /**
   * Default value for second select field
   */
  selectField2Value?: string;

  /**
   * Primary action button text
   * @default "Add to Cart"
   */
  buttonText?: string;

  /**
   * Callback when primary button is clicked
   * Receives all product data including user selections
   */
  onButtonClick?: (productData: ProductData) => void;

  /**
   * Callback when favorite/heart button is clicked
   */
  onFavoriteClick?: () => void;

  /**
   * Whether the product is favorited
   * @default false
   */
  isFavorited?: boolean;

  /**
   * FAQ/Accordion items for additional product information
   */
  accordionItems?: AccordionItem[];

  /**
   * Whether multiple accordion items can be open simultaneously
   * @default false
   */
  allowMultipleAccordion?: boolean;

  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * PageProductDetail component that displays a complete product detail page
 * with image, pricing, description, customization options, and purchase CTA
 *
 * Features:
 * - Responsive mobile-first design (vertical mobile, horizontal desktop)
 * - Product image with placeholder background
 * - Pricing with tag indicator
 * - Two customization select fields
 * - Primary action button for purchase/add to cart
 * - Floating favorite/wishlist button
 * - FAQ accordion section
 * - Design system token integration for consistent styling
 * - Accessible form fields and interactive elements
 *
 * Layout:
 * - Mobile (< 768px): Vertical stack, 24px padding, 24px gaps
 * - Desktop (>= 768px): Horizontal 2-column, 64px padding, 64px gaps
 *
 * **Figma Source:** [Product Detail Page](https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=348-15147)
 *
 * @example
 * // Basic usage
 * <PageProductDetail
 *   title="Premium Headphones"
 *   description="High-quality wireless headphones with noise cancellation."
 *   price={149.99}
 *   tagLabel="Best Seller"
 *   imageUrl="/products/headphones.jpg"
 * />
 *
 * @example
 * // With custom select fields
 * <PageProductDetail
 *   title="Cotton T-Shirt"
 *   price={29.99}
 *   selectField1Label="Size"
 *   selectField1Options={[
 *     { label: "Small", value: "sm" },
 *     { label: "Medium", value: "md" },
 *     { label: "Large", value: "lg" }
 *   ]}
 *   selectField2Label="Color"
 *   selectField2Options={[
 *     { label: "Black", value: "black" },
 *     { label: "White", value: "white" }
 *   ]}
 * />
 *
 * @example
 * // With FAQ accordion
 * <PageProductDetail
 *   title="Smart Watch"
 *   price={299}
 *   accordionItems={[
 *     { id: 1, title: "What's in the box?", content: "Watch, charging cable, manual" },
 *     { id: 2, title: "Battery life?", content: "Up to 7 days on a single charge" }
 *   ]}
 *   allowMultipleAccordion={true}
 * />
 */
export function PageProductDetail({
  title = "Product Name",
  description = "Product description text goes here.",
  price = 50,
  tagLabel = "Featured",
  imageUrl,
  imageAlt = "Product image",
  selectField1Label = "Size",
  selectField1Options = [
    { label: "Small", value: "sm" },
    { label: "Medium", value: "md" },
    { label: "Large", value: "lg" },
  ],
  selectField1Value,
  selectField2Label = "Color",
  selectField2Options = [
    { label: "Black", value: "black" },
    { label: "White", value: "white" },
  ],
  selectField2Value,
  buttonText = "Add to Cart",
  onButtonClick,
  onFavoriteClick,
  isFavorited = false,
  accordionItems = [
    {
      id: 1,
      title: "Product Details",
      content:
        "Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list.",
    },
  ],
  allowMultipleAccordion = false,
  className,
  ...rest
}: ProductDetailPageProps) {
  // State for tracking user selections
  const [selectedField1, setSelectedField1] = useState<string | undefined>(
    selectField1Value || selectField1Options[0]?.value
  );
  const [selectedField2, setSelectedField2] = useState<string | undefined>(
    selectField2Value || selectField2Options[0]?.value
  );

  // Handle button click with all product data
  const handleButtonClick = () => {
    if (onButtonClick) {
      const productData: ProductData = {
        title: title || "Product Name",
        description: description || "Product description text goes here.",
        price: price || 50,
        tagLabel: tagLabel || "Featured",
        imageUrl,
        imageAlt: imageAlt || "Product image",
        selectedOptions: {
          [selectField1Label || "Size"]: selectedField1,
          [selectField2Label || "Color"]: selectedField2,
        },
      };

      onButtonClick(productData);
    }
  };

  return (
    <section
      className={cn("product-detail-page", className)}
      data-node-id="348:15148"
      {...rest}
    >
      <div className="product-detail-section" data-node-id="348:15149">
        {/* Image Container */}
        <div
          className="product-detail-image-container"
          data-node-id="3049:2455"
        >
          <div className="product-detail-image-wrapper">
            {/* Background Placeholder */}
            <div className="product-detail-image-placeholder" />

            {/* Product Image (if provided) */}
            {imageUrl && (
              <Image
                src={imageUrl}
                alt={imageAlt}
                className="product-detail-image"
              />
            )}
          </div>

          {/* Floating Favorite Button */}
          <div className="product-detail-favorite-button">
            <IconButton
              variant="primary"
              icon={<IconHeart size="20" />}
              onClick={onFavoriteClick}
              aria-label={
                isFavorited ? "Remove from favorites" : "Add to favorites"
              }
              className={cn({ "is-favorited": isFavorited })}
            />
          </div>
        </div>

        {/* Content Column */}
        <div className="product-detail-content" data-node-id="348:15151">
          {/* Body Section */}
          <div className="product-detail-body">
            {/* Title */}
            <div className="product-detail-title-block">
              <h1 className="product-detail-title">{title}</h1>
            </div>

            {/* Price Block */}
            <div className="product-detail-price-block">
              <Tag scheme="positive" variant="secondary" label={tagLabel} />
              <div className="product-detail-price">
                <span className="product-detail-price-currency">$</span>
                <span className="product-detail-price-amount">{price}</span>
              </div>
            </div>

            {/* Description */}
            <p className="product-detail-description">{description}</p>
          </div>

          {/* Form Fields */}
          <div className="product-detail-fields" data-node-id="348:15159">
            <SelectField
              label={selectField1Label}
              value={selectedField1}
              options={selectField1Options}
              onChange={setSelectedField1}
              data-node-id="348:15160"
            />
            <SelectField
              label={selectField2Label}
              value={selectedField2}
              options={selectField2Options}
              onChange={setSelectedField2}
              data-node-id="348:15161"
            />
          </div>

          {/* Primary Action Button */}
          <Button
            variant="primary"
            className="product-detail-button"
            onClick={handleButtonClick}
          >
            {buttonText}
          </Button>

          {/* Accordion FAQ Section */}
          {accordionItems && accordionItems.length > 0 && (
            <div className="product-detail-accordion">
              <Accordion
                items={accordionItems}
                allowMultiple={allowMultipleAccordion}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default PageProductDetail;
