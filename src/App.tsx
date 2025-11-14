import { Tabs } from "./ui/primitives/Tab";
import { IconsDemo } from "./components/IconsDemo";
import { PrimitivesDemo } from "./components/PrimitivesDemo";
import { TypographyDemo } from "./components/TypographyDemo";
import { SectionsDemo } from "./components/SectionsDemo";
import { Header } from "./ui/sections/Header/Header";
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
              id: "primitives",
              label: "Primitives",
              content: <PrimitivesDemo />,
            },
            {
              id: "typography",
              label: "Typography",
              content: <TypographyDemo />,
            },
            {
              id: "sections",
              label: "Sections",
              content: <SectionsDemo />,
            },
          ]}
          defaultActiveTab="icons"
        />
      </div>
    </>
  );
}

export default App;
