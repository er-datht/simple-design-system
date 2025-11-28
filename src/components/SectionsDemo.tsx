import HeroActionsDemo from "./HeroActionsDemo";
import HeroBasicDemo from "./HeroBasicDemo";
import { HeaderAuthDemo } from "./HeaderAuthDemo";
import { HeaderDemo } from "./HeaderDemo";
import CardGridTestimonialsDemo from "./CardGridTestimonialsDemo";
import FooterDemo from "./FooterDemo";
import { PanelImageDoubleDemo } from "./PanelImageDoubleDemo";
import { Tabs } from "../ui/primitives/Tab";
import PageAccordionDemo from "./PageAccordionDemo";

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
      ]}
      defaultActiveTab="hero-actions"
    />
  );
}
