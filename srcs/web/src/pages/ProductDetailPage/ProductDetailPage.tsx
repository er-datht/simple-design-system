import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  PageProductDetail as ProductDetailSection,
  type ProductData,
} from "../../ui/sections/PageProductDetail";
import {
  CardGridReviews,
  type Review,
} from "../../ui/sections/CardGridReviews";
import { PageNewsletter } from "../../ui/sections/PageNewsletter";
import type { NewsletterFormData } from "../../ui/forms/schemas";
import type { SelectOption } from "../../ui/primitives/Input";
import type { AccordionItem } from "../../ui/primitives/Accordion";

// Types for data structure
interface ProductInfo {
  id: string;
  title: string;
  description: string;
  price: number;
  tagLabel: string;
  imageUrl?: string;
  imageAlt?: string;
  sizeOptions: SelectOption[];
  colorOptions: SelectOption[];
  accordionItems: AccordionItem[];
}

interface ProductDetailPageData {
  product: ProductInfo;
  reviews: Review[];
  newsletterHeading: string;
  newsletterSubheading: string;
}

// Default/mock data - will be replaced by API calls
const getDefaultData = (): ProductDetailPageData => ({
  product: {
    id: "1",
    title: "Premium Wireless Headphones",
    description:
      "Experience exceptional sound quality with our premium wireless headphones. Featuring advanced noise cancellation, 30-hour battery life, and superior comfort for all-day wear. Perfect for music lovers, commuters, and audiophiles alike.",
    price: 149.99,
    tagLabel: "Best Seller",
    imageUrl:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=800&fit=crop&q=80",
    imageAlt: "Premium Wireless Headphones",
    sizeOptions: [
      { label: "One Size", value: "one-size" },
    ],
    colorOptions: [
      { label: "Midnight Black", value: "black" },
      { label: "Arctic White", value: "white" },
      { label: "Space Silver", value: "silver" },
    ],
    accordionItems: [
      {
        id: 1,
        title: "Product Details",
        content:
          "Premium wireless headphones with active noise cancellation (ANC), 40mm drivers, Bluetooth 5.0 connectivity, and foldable design. Includes carrying case, USB-C charging cable, and 3.5mm audio cable for wired use.",
      },
      {
        id: 2,
        title: "Shipping Information",
        content:
          "Free standard shipping on orders over $50. Express shipping available at checkout. Orders typically ship within 1-2 business days. International shipping available to select countries.",
      },
      {
        id: 3,
        title: "Return Policy",
        content:
          "30-day return policy for unused items in original packaging. Full refund or exchange available. Return shipping is free for defective items. Please contact customer service to initiate a return.",
      },
    ],
  },
  reviews: [
    {
      id: "1",
      title: "Exceptional sound quality!",
      body: "These headphones exceeded my expectations. The noise cancellation is incredible, and the battery life is even better than advertised. Highly recommend for anyone looking for premium audio.",
      rating: 5,
      reviewerName: "Sarah Johnson",
      reviewDate: new Date(2024, 10, 15),
      avatarSrc:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80",
      avatarAlt: "Sarah Johnson",
    },
    {
      id: "2",
      title: "Great for commuting",
      body: "I use these every day on my train commute. The ANC blocks out all the noise, and they're super comfortable even after hours of wear. Only minor gripe is they don't fold completely flat.",
      rating: 4,
      reviewerName: "Michael Chen",
      reviewDate: new Date(2024, 10, 22),
      avatarSrc:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80",
      avatarAlt: "Michael Chen",
    },
    {
      id: "3",
      title: "Worth every penny",
      body: "After trying several mid-range options, I finally invested in these and couldn't be happier. The build quality is solid, sound is crisp and balanced, and they look sleek too.",
      rating: 5,
      reviewerName: "Emily Rodriguez",
      reviewDate: new Date(2024, 11, 1),
      avatarSrc:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&q=80",
      avatarAlt: "Emily Rodriguez",
    },
  ],
  newsletterHeading: "Follow the latest trends",
  newsletterSubheading: "With our daily newsletter",
});

export const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [data] = useState<ProductDetailPageData>(getDefaultData());
  const [isFavorited, setIsFavorited] = useState(false);

  // Prepared for API integration
  useEffect(() => {
    // TODO: Replace with actual API call
    // const fetchProductData = async () => {
    //   setIsLoading(true);
    //   try {
    //     const response = await fetch(`/api/products/${id}`);
    //     const productData = await response.json();
    //     setData(productData);
    //   } catch (error) {
    //     console.error('Failed to fetch product data:', error);
    //     // Fall back to default data
    //   } finally {
    //     setIsLoading(false);
    //   }
    // };
    // fetchProductData();
  }, [id]);

  // Handle add to cart action
  const handleAddToCart = (productData: ProductData) => {
    console.log("Add to cart:", productData);
    // TODO: Implement cart functionality
    // - Add to cart state/context
    // - Show success toast notification
    // - Update cart badge count
  };

  // Handle favorite toggle
  const handleFavoriteToggle = () => {
    setIsFavorited(!isFavorited);
    console.log("Favorite toggled:", !isFavorited);
    // TODO: Persist favorite state
    // - Update user favorites in API
    // - Show toast notification
    // - Sync with favorites page
  };

  // Handle newsletter submission
  const handleNewsletterSubmit = async (formData: NewsletterFormData) => {
    console.log("Newsletter signup:", formData);
    // TODO: Implement newsletter API call
    // await subscribeToNewsletter(formData.email);
  };

  return (
    <main className="product-detail-page-container">
      <ProductDetailSection
        title={data.product.title}
        description={data.product.description}
        price={data.product.price}
        tagLabel={data.product.tagLabel}
        imageUrl={data.product.imageUrl}
        imageAlt={data.product.imageAlt}
        selectField1Label="Size"
        selectField1Options={data.product.sizeOptions}
        selectField2Label="Color"
        selectField2Options={data.product.colorOptions}
        buttonText="Add to Cart"
        onButtonClick={handleAddToCart}
        onFavoriteClick={handleFavoriteToggle}
        isFavorited={isFavorited}
        accordionItems={data.product.accordionItems}
        allowMultipleAccordion={false}
      />
      <CardGridReviews heading="Latest reviews" reviews={data.reviews} />
      <PageNewsletter
        heading={data.newsletterHeading}
        subheading={data.newsletterSubheading}
        onSubmit={handleNewsletterSubmit}
        submitButtonText="Submit"
      />
    </main>
  );
};
