import { Tabs } from "../ui/primitives/Tab";
import { TextDemo } from "./TextDemo";
import { TextStrongDemo } from "./TextStrongDemo";
import { TextEmphasisDemo } from "./TextEmphasisDemo";
import { TextContentTitleDemo } from "./TextContentTitleDemo";
import { TextContentHeadingDemo } from "./TextContentHeadingDemo";
import { TextHeadingDemo } from "./TextHeadingDemo";
import { TextSubheadingDemo } from "./TextSubheadingDemo";
import { TextSubtitleDemo } from "./TextSubtitleDemo";
import { TextTitleHeroDemo } from "./TextTitleHeroDemo";
import { TextTitlePageDemo } from "./TextTitlePageDemo";
import { TextSmallDemo } from "./TextSmallDemo";
import { TextLinkDemo } from "./TextLinkDemo";
import { TextCodeDemo } from "./TextCodeDemo";
import { TextListDemo } from "./TextListDemo";
import { TextListItemDemo } from "./TextListItemDemo";
import TextPriceDemo from "./TextPriceDemo";
import TextLinkListDemo from "./TextLinkListDemo";
import TextLinkListItemDemo from "./TextLinkListItemDemo";

export function TypographyDemo() {
  return (
    <Tabs
      items={[
        {
          id: "titles",
          label: "Titles",
          content: (
            <Tabs
              items={[
                {
                  id: "title-hero",
                  label: "Title Hero",
                  content: <TextTitleHeroDemo />,
                },
                {
                  id: "title-page",
                  label: "Title Page",
                  content: <TextTitlePageDemo />,
                },
                {
                  id: "content-title",
                  label: "Content Title",
                  content: <TextContentTitleDemo />,
                },
              ]}
              defaultActiveTab="title-hero"
            />
          ),
        },
        {
          id: "headings",
          label: "Headings",
          content: (
            <Tabs
              items={[
                {
                  id: "heading",
                  label: "Heading",
                  content: <TextHeadingDemo />,
                },
                {
                  id: "subheading",
                  label: "Subheading",
                  content: <TextSubheadingDemo />,
                },
                {
                  id: "content-heading",
                  label: "Content Heading",
                  content: <TextContentHeadingDemo />,
                },
              ]}
              defaultActiveTab="heading"
            />
          ),
        },
        {
          id: "body-text",
          label: "Body Text",
          content: (
            <Tabs
              items={[
                {
                  id: "text",
                  label: "Text",
                  content: <TextDemo />,
                },
                {
                  id: "text-strong",
                  label: "Text Strong",
                  content: <TextStrongDemo />,
                },
                {
                  id: "text-emphasis",
                  label: "Text Emphasis",
                  content: <TextEmphasisDemo />,
                },
                {
                  id: "text-small",
                  label: "Text Small",
                  content: <TextSmallDemo />,
                },
                {
                  id: "subtitle",
                  label: "Subtitle",
                  content: <TextSubtitleDemo />,
                },
              ]}
              defaultActiveTab="text"
            />
          ),
        },
        {
          id: "special",
          label: "Special",
          content: (
            <Tabs
              items={[
                {
                  id: "link",
                  label: "Link",
                  content: <TextLinkDemo />,
                },
                {
                  id: "code",
                  label: "Code",
                  content: <TextCodeDemo />,
                },
                {
                  id: "price",
                  label: "Price",
                  content: <TextPriceDemo />,
                },
              ]}
              defaultActiveTab="link"
            />
          ),
        },
        {
          id: "lists",
          label: "Lists",
          content: (
            <Tabs
              items={[
                {
                  id: "list",
                  label: "List",
                  content: <TextListDemo />,
                },
                {
                  id: "list-item",
                  label: "List Item",
                  content: <TextListItemDemo />,
                },
                {
                  id: "link-list",
                  label: "Link List",
                  content: <TextLinkListDemo />,
                },
                {
                  id: "link-list-item",
                  label: "Link List Item",
                  content: <TextLinkListItemDemo />,
                },
              ]}
              defaultActiveTab="list"
            />
          ),
        },
      ]}
      defaultActiveTab="titles"
    />
  );
}
