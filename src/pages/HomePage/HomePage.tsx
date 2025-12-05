import { useState, useEffect } from "react";
import { HeroActions } from "../../ui/sections/HeroAction";
import { ImageSection } from "../../ui/sections/ImageSection";
import { CardGridTestimonials } from "../../ui/sections/CardGridTestimonials";
import { Button } from "../../ui/primitives/Button";
import { TestimonialCard } from "../../ui/primitives/TestimonialCard";
import { Avatar } from "../../ui/primitives/Avatar";
import "./home-page.css";

// Types for data structure
interface HeroData {
  title: string;
  subtitle: string;
}

interface ImageSectionData {
  backgroundImage?: string;
  height?: string;
  alt?: string;
}

interface TestimonialData {
  quote: string;
  name: string;
  role: string;
}

interface HomePageData {
  hero: HeroData;
  imageSection: ImageSectionData;
  testimonials: TestimonialData[];
}

// Default/mock data - will be replaced by API calls
const getDefaultData = (): HomePageData => ({
  hero: {
    title: "Build amazing experiences with our platform",
    subtitle:
      "Start creating beautiful, responsive applications in minutes with our powerful design system and components.",
  },
  imageSection: {
    backgroundImage: "/web-banner.svg",
    height: "400px",
    alt: "Team collaboration illustration",
  },
  testimonials: [
    {
      quote:
        "A game-changer for our organization. The platform has transformed how we build and ship products. Highly recommended!",
      name: "Alex Johnson",
      role: "VP of Engineering",
    },
    {
      quote:
        "The best investment we've made this year. Our team's productivity has increased significantly since we started using this platform.",
      name: "Sarah Williams",
      role: "Product Manager",
    },
    {
      quote:
        "Incredible support and documentation. The community is active and helpful, making it easy to get started and solve problems quickly.",
      name: "Michael Chen",
      role: "Lead Designer",
    },
    {
      quote:
        "The flexibility and scalability of the platform have allowed us to grow our business without worrying about infrastructure.",
      name: "Emily Davis",
      role: "CTO",
    },
    {
      quote:
        "User-friendly and intuitive. Our team was able to onboard quickly and start delivering value right away.",
      name: "David Brown",
      role: "Full Stack Developer",
    },
    {
      quote:
        "The features and integrations available are unmatched. We've been able to streamline our workflows and improve collaboration across teams.",
      name: "Jessica Wilson",
      role: "Operations Manager",
    },
  ],
});

export const HomePage = () => {
  const [data] = useState<HomePageData>(getDefaultData());

  // Prepared for API integration
  useEffect(() => {
    // TODO: Replace with actual API call
    // const fetchHomePageData = async () => {
    //   setIsLoading(true);
    //   try {
    //     const response = await fetch('/api/homepage');
    //     const apiData = await response.json();
    //     setData(apiData);
    //   } catch (error) {
    //     console.error('Failed to fetch homepage data:', error);
    //     // Fall back to default data
    //   } finally {
    //     setIsLoading(false);
    //   }
    // };
    // fetchHomePageData();
  }, []);

  return (
    <main className="home-page">
      <HeroActions
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        buttons={
          <>
            <Button variant="neutral" size="md">
              Learn More
            </Button>
            <Button variant="primary" size="md">
              Get Started
            </Button>
          </>
        }
      />

      <ImageSection
        backgroundImage={data.imageSection.backgroundImage}
        height={data.imageSection.height}
        alt={data.imageSection.alt}
      />

      <CardGridTestimonials
        heading="What our customers say"
        subheading="Don't just take our word for it"
      >
        {data.testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            quote={testimonial.quote}
            avatar={<Avatar type="initial" name={testimonial.name} size="md" />}
            name={testimonial.name}
            role={testimonial.role}
          />
        ))}
      </CardGridTestimonials>
    </main>
  );
};
