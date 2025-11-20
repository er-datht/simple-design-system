import { useState, useEffect } from "react";
import { Header } from "../../ui/sections/Header";
import { HeroActions } from "../../ui/sections/HeroAction";
import { ImageSection } from "../../ui/sections/ImageSection";
import { CardGridTestimonials } from "../../ui/sections/CardGridTestimonials";
import { Footer } from "../../ui/sections/Footer";
import { Button } from "../../ui/primitives/Button";
import { TestimonialCard } from "../../ui/primitives/TestimonialCard";
import { Avatar } from "../../ui/primitives/Avatar";
import {
  IconFigma,
  IconTwitter,
  IconInstagram,
  IconYoutube,
  IconLinkedin,
} from "../../ui/icons";
import type { NavigationPillItem } from "../../ui/primitives/Navigation";
import "./home-page.css";
import { ROUTES } from "../../routes";

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

interface FooterSocialLink {
  id: string;
  href: string;
  icon: "figma" | "twitter" | "instagram" | "youtube" | "linkedin";
  label: string;
}

interface FooterNavSection {
  id: string;
  title: string;
  links: Array<{ id: string; label: string; href: string }>;
}

interface HomePageData {
  navigation: NavigationPillItem[];
  hero: HeroData;
  imageSection: ImageSectionData;
  testimonials: TestimonialData[];
  footer: {
    socialLinks: FooterSocialLink[];
    navSections: FooterNavSection[];
  };
}

// Default/mock data - will be replaced by API calls
const getDefaultData = (): HomePageData => ({
  navigation: [
    { id: "products", label: "Products", href: "/products" },
    { id: "solutions", label: "Solutions", href: "/solutions" },
    { id: "community", label: "Community", href: "/community" },
    { id: "resources", label: "Resources", href: "/resources" },
    { id: "pricing", label: "Pricing", href: "/pricing" },
    { id: "contact", label: "Contact", href: "/contact" },
  ],
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
  footer: {
    socialLinks: [
      {
        id: "twitter",
        href: "https://twitter.com",
        icon: "twitter",
        label: "Twitter",
      },
      {
        id: "instagram",
        href: "https://instagram.com",
        icon: "instagram",
        label: "Instagram",
      },
      {
        id: "youtube",
        href: "https://youtube.com",
        icon: "youtube",
        label: "YouTube",
      },
      {
        id: "linkedin",
        href: "https://linkedin.com",
        icon: "linkedin",
        label: "LinkedIn",
      },
    ],
    navSections: [
      {
        id: "product",
        title: "Product",
        links: [
          { id: "features", label: "Features", href: "/features" },
          { id: "pricing", label: "Pricing", href: "/pricing" },
          { id: "security", label: "Security", href: "/security" },
          { id: "roadmap", label: "Roadmap", href: "/roadmap" },
        ],
      },
      {
        id: "company",
        title: "Company",
        links: [
          { id: "about", label: "About", href: "/about" },
          { id: "blog", label: "Blog", href: "/blog" },
          { id: "careers", label: "Careers", href: "/careers" },
          { id: "press", label: "Press", href: "/press" },
        ],
      },
      {
        id: "resources",
        title: "Resources",
        links: [
          { id: "documentation", label: "Documentation", href: "/docs" },
          { id: "help", label: "Help Center", href: "/help" },
          { id: "community", label: "Community", href: "/community" },
          { id: "contact", label: "Contact", href: "/contact" },
        ],
      },
    ],
  },
});

export const HomePage = () => {
  const [data] = useState<HomePageData>(getDefaultData());
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeNavId, setActiveNavId] = useState(data.navigation[0]?.id);

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
    <div className="home-page">
      <Header
        logoIcon={<IconFigma size="32" />}
        logoHref={ROUTES.HOME}
        navigationItems={data.navigation}
        activeNavigationId={activeNavId}
        isLoggedIn={isLoggedIn}
        userName="John Doe"
        avatarSrc="/avatar1.svg"
        onNavigationItemClick={(id) => setActiveNavId(id)}
        onSignInClick={() => {
          setIsLoggedIn(true);
        }}
        onRegisterClick={() => {
          setIsLoggedIn(true);
        }}
      />

      <main>
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
              avatar={
                <Avatar type="initial" name={testimonial.name} size="md" />
              }
              name={testimonial.name}
              role={testimonial.role}
            />
          ))}
        </CardGridTestimonials>
      </main>

      <Footer.Default
        logo={<IconFigma size="32" />}
        logoHref={ROUTES.HOME}
        socialLinks={data.footer.socialLinks.map((link) => ({
          href: link.href,
          icon:
            link.icon === "twitter" ? (
              <IconTwitter size="24" />
            ) : link.icon === "instagram" ? (
              <IconInstagram size="24" />
            ) : link.icon === "youtube" ? (
              <IconYoutube size="24" />
            ) : (
              <IconLinkedin size="24" />
            ),
          label: link.label,
        }))}
        navigationSections={data.footer.navSections.map((section) => ({
          title: section.title,
          nodeId: section.id,
          items: section.links.map((link) => ({ text: link.label })),
        }))}
      />
    </div>
  );
};
