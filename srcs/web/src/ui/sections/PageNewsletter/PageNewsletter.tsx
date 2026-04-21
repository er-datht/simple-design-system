import { cn } from "../../../utils/cn";
import { toast } from "../../../utils/toast";
import { FormNewsletter } from "../../forms";
import type { NewsletterFormData } from "../../forms";
import "./page-newsletter.css";

export type PageNewsletterProps = {
  /**
   * Main heading text
   * @default "Stay updated"
   */
  heading?: string;

  /**
   * Subheading text below the main heading
   * @default "Subscribe to our newsletter for the latest updates"
   */
  subheading?: string;

  /**
   * Placeholder text for the email input field
   * @default "you@example.com"
   */
  emailPlaceholder?: string;

  /**
   * Submit button text
   * @default "Subscribe"
   */
  submitButtonText?: string;

  /**
   * Callback function called when form is submitted
   * Receives the validated form data with email
   */
  onSubmit?: (data: NewsletterFormData) => void | Promise<void>;

  /**
   * Success message to display after successful submission
   */
  successMessage?: string;

  /**
   * Whether the form fields are disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * Additional CSS classes for the root container
   */
  className?: string;
};

/**
 * PageNewsletter component displays a newsletter subscription section
 * with responsive design that adapts to different screen sizes.
 *
 * Features:
 * - Uses FormNewsletter for form handling with react-hook-form and Zod validation
 * - Loading states
 * - Error handling
 * - Success messaging
 * - Responsive layout (mobile-first)
 * - Accessible form controls
 *
 * @example
 * <PageNewsletter
 *   heading="Stay in the loop"
 *   subheading="Get the latest updates delivered to your inbox"
 *   onSubmit={async (data) => {
 *     await subscribeToNewsletter(data.email);
 *   }}
 * />
 */
export function PageNewsletter({
  heading = "Stay updated",
  subheading = "Subscribe to our newsletter for the latest updates",
  emailPlaceholder = "you@example.com",
  submitButtonText = "Subscribe",
  onSubmit,
  successMessage,
  disabled = false,
  className,
}: PageNewsletterProps) {
  const handleFormSubmit = async (data: NewsletterFormData) => {
    try {
      await onSubmit?.(data);
      toast.success(
        successMessage ||
          "Thanks for subscribing! Check your inbox for confirmation."
      );
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      toast.error("Unable to subscribe. Please try again.");
    }
  };

  return (
    <section
      className={cn("page-newsletter", className)}
      data-figma-node-id="348:15133"
    >
      <div className="page-newsletter__container">
        {/* Text Content Heading */}
        <div className="page-newsletter__heading-wrapper">
          <h2 className="page-newsletter__heading">{heading}</h2>
          {subheading && (
            <p className="page-newsletter__subheading">{subheading}</p>
          )}
        </div>

        {/* Form Newsletter */}
        <FormNewsletter
          emailPlaceholder={emailPlaceholder}
          submitButtonText={submitButtonText}
          onSubmit={handleFormSubmit}
          disabled={disabled}
          className="page-newsletter__form"
        />
      </div>
    </section>
  );
}
