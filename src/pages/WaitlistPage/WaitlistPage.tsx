import { HeroNewsletter } from "../../ui/sections";
import FormNewsletter from "../../ui/forms/FormNewsletter/FormNewsletter";
import { toast } from "../../utils/toast";
import type { NewsletterFormData } from "../../ui/forms/schemas";

export const WaitlistPage = () => {
  const handleSubmit = async (data: NewsletterFormData) => {
    console.log("Waitlist signup:", data.email);

    // TODO: Replace with actual API call
    // await apiClient.waitlist.add(data.email);

    toast.success("You're on the waitlist! We'll notify you when we launch.");
  };

  return (
    <main className="waitlist-page flex flex-col w-full">
      <HeroNewsletter
        title="Join Our Waitlist"
        subtitle="Be the first to experience our platform. Get early access and exclusive updates."
      >
        <FormNewsletter
          onSubmit={handleSubmit}
          submitButtonText="Join Waitlist"
          emailPlaceholder="you@example.com"
        />
      </HeroNewsletter>
    </main>
  );
};
