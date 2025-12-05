import { useState, useEffect } from "react";
import { HeroImage, PanelImageDouble, CardGridIcon } from "../../ui/sections";
import { Button, ButtonGroup } from "../../ui/primitives/Button";
import { IconInfo } from "../../ui/icons";
import "./landing-page.css";

// Types for data structure
interface HeroData {
  title: string;
  subtitle: string;
  backgroundImage: string;
  buttonPrimary: string;
  buttonSecondary: string;
}

interface PanelImageData {
  leftImageSrc: string;
  rightImageSrc: string;
}

interface FeatureCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface CardGridIconData {
  heading: string;
  subheading: string;
  cards: FeatureCard[];
}

interface LandingPageData {
  hero: HeroData;
  panelImage: PanelImageData;
  features: CardGridIconData;
}

// Default/mock data - will be replaced by API calls
const getDefaultData = (): LandingPageData => ({
  hero: {
    title: "Build Amazing Experiences",
    subtitle:
      "Create beautiful, responsive applications with our powerful design system",
    backgroundImage:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&h=900&fit=crop&q=80",
    buttonPrimary: "Get Started",
    buttonSecondary: "Learn More",
  },
  panelImage: {
    leftImageSrc:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=80",
    rightImageSrc:
      "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=800&h=600&fit=crop&q=80",
  },
  features: {
    heading: "Key Features",
    subheading: "Everything you need in one place",
    cards: [
      {
        icon: <IconInfo size="32" />,
        title: "Easy Setup",
        description:
          "Get started in minutes with our intuitive setup process and comprehensive documentation.",
      },
      {
        icon: <IconInfo size="32" />,
        title: "Secure",
        description:
          "Enterprise-grade security keeps your data safe with industry-standard encryption.",
      },
      {
        icon: <IconInfo size="32" />,
        title: "Fast Performance",
        description:
          "Lightning-fast performance optimized for modern web applications and devices.",
      },
      {
        icon: <IconInfo size="32" />,
        title: "Scalable",
        description:
          "Built to scale with your business, from startup to enterprise-level applications.",
      },
      {
        icon: <IconInfo size="32" />,
        title: "Great Support",
        description:
          "24/7 customer support and an active community to help you succeed.",
      },
      {
        icon: <IconInfo size="32" />,
        title: "Easy Integration",
        description:
          "Seamlessly integrate with your existing tools and workflows without disruption.",
      },
    ],
  },
});

export const LandingPage = () => {
  const [data] = useState<LandingPageData>(getDefaultData());

  // Prepared for API integration
  useEffect(() => {
    // TODO: Replace with actual API call
    // const fetchLandingPageData = async () => {
    //   setIsLoading(true);
    //   try {
    //     const response = await fetch('/api/landing');
    //     const apiData = await response.json();
    //     setData(apiData);
    //   } catch (error) {
    //     console.error('Failed to fetch landing page data:', error);
    //     // Fall back to default data
    //   } finally {
    //     setIsLoading(false);
    //   }
    // };
    // fetchLandingPageData();
  }, []);

  return (
    <main className="landing-page">
      <HeroImage
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        backgroundImage={data.hero.backgroundImage}
      >
        <ButtonGroup align="center">
          <Button variant="neutral" size="md">
            {data.hero.buttonSecondary}
          </Button>
          <Button variant="primary" size="md">
            {data.hero.buttonPrimary}
          </Button>
        </ButtonGroup>
      </HeroImage>

      <PanelImageDouble
        leftImageSrc={data.panelImage.leftImageSrc}
        rightImageSrc={data.panelImage.rightImageSrc}
      />

      <CardGridIcon
        heading={data.features.heading}
        subheading={data.features.subheading}
        cards={data.features.cards}
      />
    </main>
  );
};
