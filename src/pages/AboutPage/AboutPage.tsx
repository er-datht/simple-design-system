import { useState, useEffect } from "react";
import { HeroBasic } from "../../ui/sections/HeroBasic";
import { PanelImageDouble } from "../../ui/sections/PanelImageDouble";
import {
  CardGridContentList,
  type CardGridContentListCardItem,
} from "../../ui/sections/CardGridContentList";
import {
  CardGridImage,
  type CardGridImageCardItem,
} from "../../ui/sections/CardGridImage";
import "./about-page.css";

// Types for data structure
interface HeroData {
  title: string;
  subtitle: string;
}

interface PanelImageData {
  leftImageSrc: string;
  rightImageSrc: string;
}

type TeamMemberData = CardGridContentListCardItem;

type ValueCardData = CardGridImageCardItem;

interface AboutPageData {
  hero: HeroData;
  panelImage: PanelImageData;
  team: {
    heading: string;
    subheading: string;
    members: TeamMemberData[];
  };
  values: {
    heading: string;
    subheading: string;
    cards: ValueCardData[];
  };
}

// Default/mock data - will be replaced by API calls
const getDefaultData = (): AboutPageData => ({
  hero: {
    title: "About Us",
    subtitle:
      "Learn more about our mission, values, and the team behind our platform",
  },
  panelImage: {
    leftImageSrc:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
    rightImageSrc:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop",
  },
  team: {
    heading: "Meet Our Team",
    subheading: "The talented people behind our platform",
    members: [
      {
        image: "/avatar1.svg",
        alt: "Sarah Johnson",
        title: "Sarah Johnson",
        body: "Product Lead with 10+ years of experience building user-centric platforms. Passionate about creating intuitive experiences.",
        buttonText: "Learn More",
      },
      {
        image: "/avatar2.svg",
        alt: "Michael Chen",
        title: "Michael Chen",
        body: "Engineering Director leading our technical vision. Expert in scalable architecture and developer tools.",
        buttonText: "Learn More",
      },
      {
        image: "/avatar3.svg",
        alt: "Emily Rodriguez",
        title: "Emily Rodriguez",
        body: "Design Director focusing on design systems and accessibility. Believes great design should be inclusive.",
        buttonText: "Learn More",
      },
    ],
  },
  values: {
    heading: "Our Core Values",
    subheading: "The principles that guide everything we do",
    cards: [
      {
        image:
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
        alt: "Innovation",
        title: "Innovation",
        description:
          "We constantly push boundaries and explore new possibilities to deliver cutting-edge solutions for our users.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
        alt: "Collaboration",
        title: "Collaboration",
        description:
          "We believe in the power of teamwork and open communication to achieve extraordinary results together.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop",
        alt: "Excellence",
        title: "Excellence",
        description:
          "We are committed to delivering the highest quality in everything we do, from code to customer service.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop",
        alt: "Integrity",
        title: "Integrity",
        description:
          "We uphold the highest ethical standards, being honest and transparent in all our interactions.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=800&h=600&fit=crop",
        alt: "Customer Focus",
        title: "Customer Focus",
        description:
          "Our users are at the heart of everything we do. We strive to exceed their expectations and deliver real value.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        alt: "Continuous Learning",
        title: "Continuous Learning",
        description:
          "We foster a culture of growth and development, encouraging curiosity and the pursuit of knowledge.",
      },
    ],
  },
});

export const AboutPage = () => {
  const [data] = useState<AboutPageData>(getDefaultData());

  // Prepared for API integration
  useEffect(() => {
    // TODO: Replace with actual API call
    // const fetchAboutPageData = async () => {
    //   setIsLoading(true);
    //   try {
    //     const response = await fetch('/api/about');
    //     const apiData = await response.json();
    //     setData(apiData);
    //   } catch (error) {
    //     console.error('Failed to fetch about page data:', error);
    //     // Fall back to default data
    //   } finally {
    //     setIsLoading(false);
    //   }
    // };
    // fetchAboutPageData();
  }, []);

  return (
    <div className="about-page">
      <main>
        <HeroBasic title={data.hero.title} subtitle={data.hero.subtitle} />

        <PanelImageDouble
          leftImageSrc={data.panelImage.leftImageSrc}
          rightImageSrc={data.panelImage.rightImageSrc}
        />

        <CardGridContentList
          heading={data.team.heading}
          subheading={data.team.subheading}
          cards={data.team.members}
        />

        <CardGridImage
          heading={data.values.heading}
          subheading={data.values.subheading}
          cards={data.values.cards}
        />
      </main>
    </div>
  );
};
