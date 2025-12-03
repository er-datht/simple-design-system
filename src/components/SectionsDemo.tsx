import HeroActionsDemo from "./HeroActionsDemo";
import HeroBasicDemo from "./HeroBasicDemo";
import HeroImageDemo from "./HeroImageDemo";
import { HeaderAuthDemo } from "./HeaderAuthDemo";
import { HeaderDemo } from "./HeaderDemo";
import CardGridTestimonialsDemo from "./CardGridTestimonialsDemo";
import FooterDemo from "./FooterDemo";
import { PanelImageDoubleDemo } from "./PanelImageDoubleDemo";
import { Tabs } from "../ui/primitives/Tab";
import PageAccordionDemo from "./PageAccordionDemo";
import HeroNewsletterDemo from "./HeroNewsletterDemo";
import CardGridIconDemo from "./CardGridIconDemo";
import PageProductResultsDemo from "./PageProductResultsDemo";

export function SectionsDemo() {
  return (
    <Tabs
      items={[
        {
          id: "hero-actions",
          label: "Hero Actions",
          content: <HeroActionsDemo />,
        },
        {
          id: "hero-basic",
          label: "Hero Basic",
          content: <HeroBasicDemo />,
        },
        {
          id: "hero-image",
          label: "Hero Image",
          content: <HeroImageDemo />,
        },
        {
          id: "hero-newsletter",
          label: "Hero Newsletter",
          content: <HeroNewsletterDemo />,
        },
        {
          id: "header-auth",
          label: "Header Auth",
          content: <HeaderAuthDemo />,
        },
        {
          id: "header",
          label: "Header",
          content: <HeaderDemo />,
        },
        {
          id: "card-grid-testimonials",
          label: "Card Grid Testimonials",
          content: <CardGridTestimonialsDemo />,
        },
        {
          id: "footer",
          label: "Footer",
          content: <FooterDemo />,
        },
        {
          id: "panel-image-double",
          label: "Panel Image Double",
          content: <PanelImageDoubleDemo />,
        },
        {
          id: "page-accordion",
          label: "Page Accordion",
          content: <PageAccordionDemo />,
        },
        {
          id: "card-grid-icon",
          label: "Card Grid Icon",
          content: <CardGridIconDemo />,
        },
        {
          id: "page-product-results",
          label: "Page Product Results",
          content: <PageProductResultsDemo />,
        },
      ]}
      defaultActiveTab="hero-actions"
    />
  );
}
