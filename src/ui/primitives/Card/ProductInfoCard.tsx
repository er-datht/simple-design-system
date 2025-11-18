import { type HTMLAttributes } from "react";
import { cn } from "../../../utils/cn";
import { Text } from "../../typography/Text/Text";
import { TextStrong } from "../../typography/TextStrong/TextStrong";
import { TextSmall } from "../../typography/TextSmall/TextSmall";
import "./card.css";

/**
 * Props for ProductInfoCard component
 */
export interface ProductInfoCardProps extends HTMLAttributes<HTMLElement> {
  /**
   * Controls visibility of the description text element
   * @default true
   */
  showDescription?: boolean;

  /**
   * Product name or title
   * @default "Product Name"
   */
  productName?: string;

  /**
   * Product price
   * @default "$0"
   */
  price?: string;

  /**
   * Product description or supporting text
   * @default "Product description"
   */
  description?: string;

  /**
   * Product image URL
   * @default undefined (shows placeholder)
   */
  imageUrl?: string;

  /**
   * Alt text for product image
   * @default "Product image"
   */
  imageAlt?: string;

  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * ProductInfoCard Component
 *
 * A compact, self-contained component designed to display product information including
 * an image, title, price, and optional description. Perfect for product listings,
 * catalogs, and e-commerce interfaces.
 *
 * Features a clean, minimal design with rounded corners, subtle borders, and a flexible
 * layout that adapts to different content scenarios.
 *
 * **Figma Source:** [Product Info Card Component](https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=7753:4465&m=dev)
 *
 * @example
 * ```tsx
 * // Basic usage
 * <ProductInfoCard />
 *
 * // With custom content
 * <ProductInfoCard
 *   productName="Premium Headphones"
 *   price="$299.99"
 *   description="High-quality wireless headphones with noise cancellation"
 *   imageUrl="/products/headphones.jpg"
 * />
 *
 * // Without description
 * <ProductInfoCard
 *   productName="Smart Watch"
 *   price="$399"
 *   showDescription={false}
 * />
 * ```
 */
export function ProductInfoCard({
  showDescription = true,
  productName = "Product Name",
  price = "$0",
  description = "Product description",
  imageUrl,
  imageAlt = "Product image",
  className,
  ...rest
}: ProductInfoCardProps) {
  return (
    <article
      className={cn("product-info-card", className)}
      data-name="Product Info Card"
      data-node-id="7753:4465"
      aria-label={`${productName} product card`}
      {...rest}
    >
      {/* Image Section */}
      <div
        className="product-info-card__image"
        data-node-id="638:13763"
        aria-hidden="true"
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={imageAlt}
            className="product-info-card__image-asset"
          />
        ) : (
          <div className="product-info-card__image-placeholder" />
        )}
      </div>

      {/* Body Section */}
      <div
        className="product-info-card__body"
        data-node-id="2142:12007"
      >
        {/* Product Name */}
        <Text text={productName} data-node-id="611:22040" />

        {/* Price */}
        <TextStrong text={price} data-node-id="611:22618" />

        {/* Description (Conditional) */}
        {showDescription && (
          <TextSmall text={description} data-node-id="611:23489" />
        )}
      </div>
    </article>
  );
}

export default ProductInfoCard;
