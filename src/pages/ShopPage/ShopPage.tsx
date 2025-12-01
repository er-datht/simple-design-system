import { useState, useEffect } from "react";
import {
  PageProductResults,
  type Product,
  type FilterOption,
} from "../../ui/sections/PageProductResults";
import type { TagToggleItem } from "../../ui/primitives/TagToggleGroup";
import "./shop-page.css";

// Types for data structure
interface ShopPageData {
  products: Product[];
  categoryItems: TagToggleItem[];
  labelOptions: FilterOption[];
  colorOptions: FilterOption[];
  sizeOptions: FilterOption[];
}

// Default/mock data - will be replaced by API calls
const getDefaultData = (): ShopPageData => ({
  products: [
    {
      id: "1",
      name: "Wireless Headphones",
      price: "$89.99",
      description:
        "Premium noise-canceling wireless headphones with 30-hour battery life",
      imageUrl:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop&q=80",
      imageAlt: "Wireless Headphones",
    },
    {
      id: "2",
      name: "Smart Watch Pro",
      price: "$299.99",
      description: "Advanced fitness tracking with heart rate monitor and GPS",
      imageUrl:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&q=80",
      imageAlt: "Smart Watch Pro",
    },
    {
      id: "3",
      name: "Mechanical Keyboard",
      price: "$129.99",
      description: "RGB backlit mechanical keyboard with tactile switches",
      imageUrl:
        "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&fit=crop&q=80",
      imageAlt: "Mechanical Keyboard",
    },
    {
      id: "4",
      name: "Portable Speaker",
      price: "$49.99",
      description: "Waterproof Bluetooth speaker with 360-degree sound",
      imageUrl:
        "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop&q=80",
      imageAlt: "Portable Speaker",
    },
    {
      id: "5",
      name: "USB-C Hub",
      price: "$59.99",
      description:
        "7-in-1 USB-C hub with HDMI, SD card reader, and USB 3.0 ports",
      imageUrl:
        "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400&h=400&fit=crop&q=80",
      imageAlt: "USB-C Hub",
    },
    {
      id: "6",
      name: "Wireless Mouse",
      price: "$39.99",
      description: "Ergonomic wireless mouse with precision tracking",
      imageUrl:
        "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=400&fit=crop&q=80",
      imageAlt: "Wireless Mouse",
    },
    {
      id: "7",
      name: "Laptop Stand",
      price: "$34.99",
      description: "Adjustable aluminum laptop stand for better ergonomics",
      imageUrl:
        "https://images.unsplash.com/photo-1591238371661-e8b8f8b11a5b?w=400&h=400&fit=crop&q=80",
      imageAlt: "Laptop Stand",
    },
    {
      id: "8",
      name: "Webcam HD",
      price: "$79.99",
      description: "1080p HD webcam with auto-focus and noise reduction",
      imageUrl:
        "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=400&h=400&fit=crop&q=80",
      imageAlt: "Webcam HD",
    },
  ],
  categoryItems: [
    { id: "electronics", label: "Electronics" },
    { id: "accessories", label: "Accessories" },
    { id: "audio", label: "Audio" },
    { id: "computing", label: "Computing" },
  ],
  labelOptions: [
    {
      id: "new-arrival",
      label: "New Arrival",
      description: "Recently added products",
    },
    {
      id: "best-seller",
      label: "Best Seller",
      description: "Most popular items",
    },
    { id: "on-sale", label: "On Sale", description: "Discounted products" },
  ],
  colorOptions: [
    { id: "black", label: "Black" },
    { id: "white", label: "White" },
    { id: "silver", label: "Silver" },
  ],
  sizeOptions: [
    { id: "small", label: "Small" },
    { id: "medium", label: "Medium" },
    { id: "large", label: "Large" },
  ],
});

export const ShopPage = () => {
  const [data] = useState<ShopPageData>(getDefaultData());

  // Prepared for API integration
  useEffect(() => {
    // TODO: Replace with actual API call
    // const fetchShopPageData = async () => {
    //   setIsLoading(true);
    //   try {
    //     const response = await fetch('/api/shop');
    //     const apiData = await response.json();
    //     setData(apiData);
    //   } catch (error) {
    //     console.error('Failed to fetch shop page data:', error);
    //     // Fall back to default data
    //   } finally {
    //     setIsLoading(false);
    //   }
    // };
    // fetchShopPageData();
  }, []);

  // Handle product click - could navigate to product detail page
  const handleProductClick = (productId: string) => {
    console.log("Product clicked:", productId);
    // TODO: Navigate to product detail page
    // navigate(`/product/${productId}`);
  };

  return (
    <main className="shop-page">
      {/* <PageProductResults
        products={data.products}
        categoryItems={data.categoryItems}
        labelOptions={data.labelOptions}
        colorOptions={data.colorOptions}
        sizeOptions={data.sizeOptions}
        onProductClick={handleProductClick}
      /> */}
      <PageProductResults
        products={[
          {
            id: "1",
            name: "Wireless Mouse",
            price: "$49.99",
            description: "Ergonomic design",
          },
          {
            id: "2",
            name: "Keyboard",
            price: "$79.99",
            description: "Mechanical switches",
          },
        ]}
        categoryItems={[
          { id: "tech", label: "Tech" },
          { id: "accessories", label: "Accessories" },
        ]}
        labelOptions={[
          {
            id: "new-arrival",
            label: "New Arrival",
            description: "Recently added products",
          },
          {
            id: "best-seller",
            label: "Best Seller",
            description: "Most popular items",
          },
          {
            id: "on-sale",
            label: "On Sale",
            description: "Discounted products",
          },
        ]}
        colorOptions={[
          { id: "black", label: "Black" },
          { id: "white", label: "White" },
          { id: "silver", label: "Silver" },
        ]}
        sizeOptions={[
          { id: "small", label: "Small" },
          { id: "medium", label: "Medium" },
          { id: "large", label: "Large" },
        ]}
      />
    </main>
  );
};
