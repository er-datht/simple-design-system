import { ButtonsDemo } from "./ButtonsDemo";
import { AvatarsDemo } from "./AvatarsDemo";
import { NavigationDemo } from "./NavigationDemo";
import TestimonialCardDemo from "./TestimonialCardDemo";
import { Tabs } from "../ui/primitives/Tab";
import CardDemo from "./CardDemo";
import PricingCardDemo from "./PricingCardDemo";
import ProductInfoCardDemo from "./ProductInfoCardDemo";
import ReviewCardDemo from "./ReviewCardDemo";
import StatsCardDemo from "./StatsCardDemo";
import { InputDemo } from "./InputDemo";
import AccordionDemo from "./AccordionDemo";
import { TagDemo } from "./TagDemo";
import { TagToggleGroupDemo } from "./TagToggleGroupDemo";
import { ImageDemo } from "./ImageDemo";

export function PrimitivesDemo() {
  return (
    <Tabs
      items={[
        {
          id: "buttons",
          label: "Buttons",
          content: <ButtonsDemo />,
        },
        {
          id: "avatars",
          label: "Avatars",
          content: <AvatarsDemo />,
        },
        {
          id: "navigation",
          label: "Navigation",
          content: <NavigationDemo />,
        },
        {
          id: "card",
          label: "Card",
          content: (
            <Tabs
              items={[
                {
                  id: "card",
                  label: "Card",
                  content: <CardDemo />,
                },
                {
                  id: "pricing-card",
                  label: "PricingCard",
                  content: <PricingCardDemo />,
                },
                {
                  id: "testimonial-card",
                  label: "Testimonial Card",
                  content: <TestimonialCardDemo />,
                },
                {
                  id: "product-info-card",
                  label: "Product Info Card",
                  content: <ProductInfoCardDemo />,
                },
                {
                  id: "review-card",
                  label: "Review Card",
                  content: <ReviewCardDemo />,
                },
                {
                  id: "stats-card",
                  label: "Stats Card",
                  content: <StatsCardDemo />,
                },
              ]}
              defaultActiveTab="card"
            />
          ),
        },
        {
          id: "input",
          label: "Input",
          content: <InputDemo />,
        },
        {
          id: "accordion",
          label: "Accordion",
          content: <AccordionDemo />,
        },
        {
          id: "tag",
          label: "Tag",
          content: <TagDemo />,
        },
        {
          id: "tag-toggle-group",
          label: "Tag Toggle Group",
          content: <TagToggleGroupDemo />,
        },
        {
          id: "image",
          label: "Image",
          content: <ImageDemo />,
        },
      ]}
      defaultActiveTab="buttons"
    />
  );
}
