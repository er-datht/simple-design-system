import figma from "@figma/code-connect";
import { HeroNewsletter } from "../../../ui/sections";
import { FormNewsletter } from "../../../ui/forms";

figma.connect(
  HeroNewsletter,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk?node-id=348%3A15919",
  {
    props: {},
    example: () => (
      <HeroNewsletter
        title="Subscribe to our newsletter"
        subtitle="Weekly insights, tips, and exclusive content delivered to your inbox."
      >
        <FormNewsletter onSubmit={() => {}} />
      </HeroNewsletter>
    ),
  }
);
