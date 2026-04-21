// No React import needed with modern JSX runtime
import { HeroForm } from "../../ui/sections";
import { FormContact, type ContactFormData } from "../../ui/forms";
import "./contact-us-page.css";
import { toast } from "../../utils/toast";

export const ContactUsPage = () => {
  const handleSubmit = async (data: ContactFormData) => {
    try {
      // TODO: Replace with actual API call
      console.log("Contact form submitted:", data);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.success("Thank you for your message! We'll get back to you soon.");

      // Toast autoCloses; no local success state needed
    } catch (error) {
      console.error("Contact form submission error:", error);
      toast.error("Unable to send message. Please try again.");
    }
  };

  return (
    <main className="contact-us-page">
      <HeroForm
        title="Get in Touch"
        subtitle="We'd love to hear from you. Send us a message and we'll respond as soon as possible."
      >
        <FormContact onSubmit={handleSubmit} />
      </HeroForm>
    </main>
  );
};
