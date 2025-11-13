import { Tabs } from "./ui/primitives/Tab";
import { IconsDemo } from "./components/IconsDemo";
import { ButtonsDemo } from "./components/ButtonsDemo";
import { AvatarsDemo } from "./components/AvatarsDemo";
import { NavigationDemo } from "./components/NavigationDemo";
import { HeaderAuthDemo } from "./components/HeaderAuthDemo";
import { HeaderDemo } from "./components/HeaderDemo";
import { TextContentTitleDemo } from "./components/TextContentTitleDemo";
import { TextContentHeadingDemo } from "./components/TextContentHeadingDemo";
import { TextHeadingDemo } from "./components/TextHeadingDemo";
import HeroActionsDemo from "./components/HeroActionsDemo";
import Header from "./ui/sections/Header/Header";
import { IconFigma } from "./ui/icons";
import type { NavigationPillItem } from "./ui/primitives/Navigation";
import { useState } from "react";

const navigationItems: NavigationPillItem[] = [
  { id: "products", label: "Products", href: "/products" },
  { id: "solutions", label: "Solutions", href: "/solutions" },
  { id: "community", label: "Community", href: "/community" },
  { id: "resources", label: "Resources", href: "/resources" },
  { id: "pricing", label: "Pricing", href: "/pricing" },
  { id: "contact", label: "Contact", href: "/contact" },
];

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeNavId, setActiveNavId] = useState(navigationItems[0].id);
  return (
    <>
      <Header
        logoIcon={<IconFigma size="32" />}
        navigationItems={navigationItems}
        activeNavigationId={activeNavId}
        isLoggedIn={isLoggedIn}
        userName="John Doe"
        avatarSrc="/avatar1.svg"
        onNavigationItemClick={(id) => setActiveNavId(id)}
        onSignInClick={() => {
          alert("Sign in clicked!");
          setIsLoggedIn(true);
        }}
        onRegisterClick={() => {
          alert("Register clicked!");
          setIsLoggedIn(true);
        }}
      />
      <div className="p-8">
        <Tabs
          items={[
            {
              id: "icons",
              label: "Icons",
              content: <IconsDemo />,
            },
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
              id: "text-content-title",
              label: "Text Content Title",
              content: <TextContentTitleDemo />,
            },
            {
              id: "text-content-heading",
              label: "Text Content Heading",
              content: <TextContentHeadingDemo />,
            },
            {
              id: "text-heading",
              label: "Text Heading",
              content: <TextHeadingDemo />,
            },
            {
              id: "hero-actions",
              label: "Hero Actions",
              content: <HeroActionsDemo />,
            },
          ]}
          defaultActiveTab="icons"
        />
      </div>
    </>
  );
}

export default App;
