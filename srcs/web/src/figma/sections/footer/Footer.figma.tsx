import {
  IconFigma,
  IconInstagram,
  IconLinkedin,
  IconTwitter,
  IconYoutube,
} from "../../../ui/icons";
import { Footer } from "../../../ui/sections";
import { TextLinkListItem } from "../../../ui/typography";
import figma from "@figma/code-connect";

/**
 * Footer Code Connect - Demonstrating the compound component pattern
 * Maps the Figma Footer component to the React implementation with all sub-components
 */

figma.connect(
  Footer,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk?node-id=321%3A11357",
  {
    props: {
      // Footer uses responsive CSS media queries, no platform prop needed
    },
    example: () => (
      <Footer>
        <Footer.Brand
          logo={<IconFigma size="32" />}
          logoHref="https://www.figma.com"
        >
          <Footer.Social>
            <Footer.SocialLink
              href="#"
              icon={<IconTwitter size="24" />}
              label="Follow on X"
            />
            <Footer.SocialLink
              href="#"
              icon={<IconInstagram size="24" />}
              label="Follow on Instagram"
            />
            <Footer.SocialLink
              href="#"
              icon={<IconYoutube size="24" />}
              label="Follow on YouTube"
            />
            <Footer.SocialLink
              href="#"
              icon={<IconLinkedin size="24" />}
              label="Follow on LinkedIn"
            />
          </Footer.Social>
        </Footer.Brand>

        <Footer.Nav title="Use cases">
          <TextLinkListItem text="UI design" />
          <TextLinkListItem text="UX design" />
          <TextLinkListItem text="Wireframing" />
        </Footer.Nav>

        <Footer.Nav title="Explore">
          <TextLinkListItem text="Design" />
          <TextLinkListItem text="Prototyping" />
          <TextLinkListItem text="Development features" />
        </Footer.Nav>

        <Footer.Nav title="Resources">
          <TextLinkListItem text="Blog" />
          <TextLinkListItem text="Best practices" />
          <TextLinkListItem text="Support" />
        </Footer.Nav>
      </Footer>
    ),
  }
);
