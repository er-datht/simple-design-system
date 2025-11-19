import { Tabs } from "./ui/primitives/Tab";
import { IconsDemo } from "./components/IconsDemo";
import { PrimitivesDemo } from "./components/PrimitivesDemo";
import { TypographyDemo } from "./components/TypographyDemo";
import { SectionsDemo } from "./components/SectionsDemo";
import { Header } from "./ui/sections/Header/Header";
import {
  IconFigma,
  IconInstagram,
  IconLinkedin,
  IconTwitter,
  IconYoutube,
} from "./ui/icons";
import type { NavigationPillItem } from "./ui/primitives/Navigation";
import { useState } from "react";
import { Footer } from "./ui/sections/Footer";
import { Container } from "./ui/layout/Container";

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
      <Container>
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
      </Container>
      <Footer.Default
        logo={<IconFigma size="32" />}
        logoHref="https://www.figma.com"
        socialLinks={[
          {
            href: "https://twitter.com/figma",
            icon: <IconTwitter size="24" />,
            label: "Follow Figma on X",
          },
          {
            href: "https://instagram.com/figma",
            icon: <IconInstagram size="24" />,
            label: "Follow Figma on Instagram",
          },
          {
            href: "https://youtube.com/figma",
            icon: <IconYoutube size="24" />,
            label: "Follow Figma on YouTube",
          },
          {
            href: "https://linkedin.com/company/figma",
            icon: <IconLinkedin size="24" />,
            label: "Follow Figma on LinkedIn",
          },
        ]}
        navigationSections={[
          {
            title: "Use cases",
            nodeId: "2162:8659",
            items: [
              { text: "UI design" },
              { text: "UX design" },
              { text: "Wireframing" },
              { text: "Diagramming" },
              { text: "Brainstorming" },
              { text: "Online whiteboard" },
              { text: "Team collaboration" },
            ],
          },
          {
            title: "Explore",
            nodeId: "2162:12917",
            items: [
              { text: "Design" },
              { text: "Prototyping" },
              { text: "Development features" },
              { text: "Design systems" },
              { text: "Collaboration features" },
              { text: "Design process" },
              { text: "FigJam" },
            ],
          },
          {
            title: "Resources",
            nodeId: "2162:13585",
            items: [
              { text: "Blog" },
              { text: "Best practices" },
              { text: "Colors" },
              { text: "Color wheel" },
              { text: "Support" },
              { text: "Developers" },
              { text: "Resource library" },
            ],
          },
        ]}
      />
    </>
  );
}

export default App;
