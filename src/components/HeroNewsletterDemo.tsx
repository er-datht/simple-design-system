import { HeroNewsletter } from "../ui/sections";
import FormNewsletter from "../ui/forms/FormNewsletter/FormNewsletter";
import { toast } from "../utils/toast";
import type { NewsletterFormData } from "../ui/forms/schemas";

const HeroNewsletterDemo = () => {
  const handleNewsletterSubmit = async (data: NewsletterFormData) => {
    console.log("Newsletter signup:", data.email);
    // In a real app, this would call an API endpoint
    // await apiClient.subscribe(data.email);

    toast.success(
      "Thanks — you're on the list! Check your inbox for confirmation."
    );
  };

  return (
    <div style={{ padding: "2rem" }}>
      <div style={{ maxWidth: 980, margin: "0 auto 4rem" }}>
        <h2
          style={{ marginBottom: "2rem", fontSize: "1.5rem", fontWeight: 600 }}
        >
          Default Example
        </h2>
        <HeroNewsletter
          title="Join the waitlist"
          subtitle="Get early access and product updates — no spam."
        >
          <FormNewsletter onSubmit={handleNewsletterSubmit} />
        </HeroNewsletter>
      </div>

      <div style={{ maxWidth: 980, margin: "0 auto 4rem" }}>
        <h2
          style={{ marginBottom: "2rem", fontSize: "1.5rem", fontWeight: 600 }}
        >
          Marketing Campaign
        </h2>
        <HeroNewsletter
          title="Subscribe to our newsletter"
          subtitle="Weekly insights, tips, and exclusive content delivered to your inbox."
        >
          <FormNewsletter onSubmit={handleNewsletterSubmit} />
        </HeroNewsletter>
      </div>

      <div style={{ maxWidth: 980, margin: "0 auto" }}>
        <h2
          style={{ marginBottom: "2rem", fontSize: "1.5rem", fontWeight: 600 }}
        >
          Product Launch
        </h2>
        <HeroNewsletter
          title="Be the first to know"
          subtitle="Sign up for early access to our new features and beta programs."
        >
          <FormNewsletter onSubmit={handleNewsletterSubmit} />
        </HeroNewsletter>
      </div>
    </div>
  );
};

export default HeroNewsletterDemo;
