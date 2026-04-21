import { PageAccordion } from "../ui/sections/PageAccordion";

/**
 * Demo component showcasing PageAccordion usage
 * Displays FAQ-style accordion sections with different configurations
 */
export default function PageAccordionDemo() {
  const faqItems = [
    {
      id: 1,
      title: "What is your return policy?",
      content:
        "We offer a 30-day money-back guarantee on all purchases. If you're not satisfied with your product, you can return it for a full refund within 30 days of purchase. Simply contact our customer support team to initiate the return process.",
    },
    {
      id: 2,
      title: "How long does shipping take?",
      content:
        "Standard shipping typically takes 5-7 business days. Express shipping options are available at checkout for faster delivery (2-3 business days). International shipping times vary by destination.",
    },
    {
      id: 3,
      title: "Do you ship internationally?",
      content:
        "Yes, we ship to most countries worldwide. International shipping rates and delivery times vary by destination. You can see the exact shipping cost and estimated delivery time during checkout.",
    },
    {
      id: 4,
      title: "How can I track my order?",
      content:
        "Once your order ships, you'll receive a tracking number via email. You can use this number to track your package on our website or the carrier's site. You can also view tracking information in your account dashboard.",
    },
    {
      id: 5,
      title: "What payment methods do you accept?",
      content:
        "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, and Google Pay for your convenience. All transactions are secure and encrypted.",
    },
  ];

  const productFaqItems = [
    {
      id: 1,
      title: "How do I get started?",
      content:
        "Simply sign up for an account and follow the onboarding steps to get started with our platform. Our step-by-step guide will walk you through the initial setup process.",
    },
    {
      id: 2,
      title: "Is there a free trial?",
      content:
        "Yes, we offer a 14-day free trial with full access to all features. No credit card required. You can explore all functionality before deciding to subscribe.",
    },
    {
      id: 3,
      title: "Can I cancel anytime?",
      content:
        "Absolutely! You can cancel your subscription at any time from your account settings. There are no cancellation fees or long-term commitments.",
    },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "64px" }}>
      {/* Demo 1: Standard FAQ with single-expand */}
      <PageAccordion
        heading="Frequently Asked Questions"
        subheading="Find answers to common questions about our service"
        items={faqItems}
        allowMultiple={false}
      />

      {/* Demo 2: Product FAQ with multi-expand */}
      <PageAccordion
        heading="Product Help"
        subheading="Everything you need to know to get started"
        items={productFaqItems}
        allowMultiple={true}
      />

      {/* Demo 3: Support section */}
      <PageAccordion
        heading="Support Center"
        subheading="We're here to help you succeed"
        items={[
          {
            id: 1,
            title: "How do I contact support?",
            content:
              "You can reach our support team via email at support@example.com or through our live chat feature available 24/7.",
          },
          {
            id: 2,
            title: "What are your support hours?",
            content:
              "Our support team is available Monday through Friday, 9 AM to 6 PM EST. Emergency support is available 24/7 for critical issues.",
          },
        ]}
      />
    </div>
  );
}
