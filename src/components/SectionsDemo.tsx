import HeroActionsDemo from "./HeroActionsDemo";
import { HeaderAuthDemo } from "./HeaderAuthDemo";
import { HeaderDemo } from "./HeaderDemo";
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
      ]}
      defaultActiveTab="hero-actions"
    />
  );
}
