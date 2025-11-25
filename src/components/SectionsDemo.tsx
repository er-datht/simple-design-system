import HeroActionsDemo from "./HeroActionsDemo";
import { HeaderAuthDemo } from "./HeaderAuthDemo";
import { HeaderDemo } from "./HeaderDemo";
import CardGridTestimonialsDemo from "./CardGridTestimonialsDemo";
import FooterDemo from "./FooterDemo";
import { Tabs } from "../ui/primitives/Tab";

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
      ]}
      defaultActiveTab="hero-actions"
    />
  );
}
