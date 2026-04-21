import { useState, useEffect } from "react";
import { HeroBasic } from "../../ui/sections/HeroBasic";
import {
  CardGridPricing,
  type PricingCardConfig,
} from "../../ui/sections/CardGridPricing";
import { PageAccordion } from "../../ui/sections/PageAccordion";
import type { AccordionItem } from "../../ui/primitives/Accordion";
import "./pricing-page.css";

// Types for data structure
interface HeroData {
  title: string;
  subtitle: string;
}

interface PricingData {
  hero: HeroData;
  pricingCards: [PricingCardConfig, PricingCardConfig, PricingCardConfig];
  faq: {
    heading: string;
    subheading: string;
    items: AccordionItem[];
  };
}

// Default/mock data - will be replaced by API calls
const getDefaultData = (): PricingData => ({
  hero: {
    title: "Choose Your Plan",
    subtitle: "Simple, transparent pricing that grows with you",
  },
  pricingCards: [
    {
      title: "Starter",
      price: "29",
      currency: "$",
      period: "/ mo",
      features: [
        "Up to 10 projects",
        "Basic analytics",
        "Email support",
        "5GB storage",
        "Community access",
      ],
      buttonLabel: "Start Free Trial",
      onButtonClick: () => console.log("Starter plan selected"),
      isBrand: false,
    },
    {
      title: "Professional",
      price: "99",
      currency: "$",
      period: "/ mo",
      features: [
        "Unlimited projects",
        "Advanced analytics",
        "Priority support",
        "50GB storage",
        "Team collaboration",
      ],
      buttonLabel: "Start Free Trial",
      onButtonClick: () => console.log("Professional plan selected"),
      isBrand: true,
    },
    {
      title: "Enterprise",
      price: "299",
      currency: "$",
      period: "/ mo",
      features: [
        "Unlimited everything",
        "Custom analytics",
        "24/7 dedicated support",
        "500GB storage",
        "Advanced security",
      ],
      buttonLabel: "Contact Sales",
      onButtonClick: () => console.log("Enterprise plan selected"),
      isBrand: false,
    },
  ],
  faq: {
    heading: "Frequently Asked Questions",
    subheading: "Find answers to common questions about our pricing",
    items: [
      {
        id: 1,
        title: "Can I switch plans at any time?",
        content:
          "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle, and we'll prorate any differences.",
      },
      {
        id: 2,
        title: "Is there a free trial available?",
        content:
          "Yes, we offer a 14-day free trial for both Starter and Professional plans. No credit card required. You can explore all features and decide which plan works best for you.",
      },
      {
        id: 3,
        title: "What payment methods do you accept?",
        content:
          "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, and Google Pay. Enterprise customers can also arrange for invoice-based billing.",
      },
      {
        id: 4,
        title: "What happens when I reach my storage limit?",
        content:
          "When you approach your storage limit, we'll send you notifications. You can either upgrade to a higher plan or purchase additional storage as an add-on to your current plan.",
      },
      {
        id: 5,
        title: "Do you offer discounts for annual billing?",
        content:
          "Yes! Annual subscriptions receive a 20% discount compared to monthly billing. You can toggle between monthly and yearly pricing using the switcher above.",
      },
    ],
  },
});

export const PricingPage = () => {
  const [data] = useState<PricingData>(getDefaultData());

  // Prepared for API integration
  useEffect(() => {
    // TODO: Replace with actual API call
    // const fetchPricingPageData = async () => {
    //   setIsLoading(true);
    //   try {
    //     const response = await fetch('/api/pricing');
    //     const apiData = await response.json();
    //     setData(apiData);
    //   } catch (error) {
    //     console.error('Failed to fetch pricing page data:', error);
    //     // Fall back to default data
    //   } finally {
    //     setIsLoading(false);
    //   }
    // };
    // fetchPricingPageData();
  }, []);

  return (
    <main className="pricing-page">
      <HeroBasic title={data.hero.title} subtitle={data.hero.subtitle} />

      <CardGridPricing
        activePeriod="yearly"
        onPeriodChange={(period) => console.log("Period changed to:", period)}
        cards={data.pricingCards}
      />

      <PageAccordion
        heading={data.faq.heading}
        subheading={data.faq.subheading}
        items={data.faq.items}
        allowMultiple={false}
      />
    </main>
  );
};
