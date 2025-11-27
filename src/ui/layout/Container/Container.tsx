import { type ReactNode, useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../../sections/Header";
import { Footer } from "../../sections/Footer";
import {
  IconFigma,
  IconTwitter,
  IconInstagram,
  IconYoutube,
  IconLinkedin,
} from "../../icons";
import type { NavigationPillItem } from "../../primitives/Navigation";
import { ROUTES } from "../../../routes";
import { cn } from "../../../utils/cn";
import "./container.css";

interface ContainerProps {
  children?: ReactNode;
  className?: string;
  as?: "div" | "section" | "main" | "header" | "footer";
  withLayout?: boolean;
}

const navigationItems: NavigationPillItem[] = [
  { id: "products", label: "Products", href: ROUTES.PRODUCTS },
  { id: "solutions", label: "Solutions", href: ROUTES.SOLUTIONS },
  { id: "community", label: "Community", href: ROUTES.COMMUNITY },
  { id: "resources", label: "Resources", href: ROUTES.RESOURCES },
  { id: "pricing", label: "Pricing", href: ROUTES.PRICING },
  { id: "contact", label: "Contact", href: ROUTES.CONTACT },
  { id: "about", label: "About", href: ROUTES.ABOUT },
  { id: "components", label: "Components", href: ROUTES.COMPONENTS },
];

export const Container = ({
  children,
  className,
  as: Component = "div",
  withLayout = false,
}: ContainerProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (withLayout) {
    return (
      <>
        <Header
          logoIcon={<IconFigma size="32" />}
          logoHref={ROUTES.HOME}
          navigationItems={navigationItems}
          isLoggedIn={isLoggedIn}
          userName="John Doe"
          avatarSrc="/avatar1.svg"
          onSignInClick={() => {
            setIsLoggedIn(true);
          }}
          onRegisterClick={() => {
            setIsLoggedIn(true);
          }}
        />

        <Outlet />

        <Footer.Default
          logo={<IconFigma size="32" />}
          logoHref={ROUTES.HOME}
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

  return (
    <Component className={cn("container", className)}>{children}</Component>
  );
};
