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

export function TypographyDemo() {
  return (
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
          id: "text-content-title",
          label: "Text Content Title",
          content: <TextContentTitleDemo />,
        },
        {
          id: "text-content-heading",
          label: "Text Content Heading",
          content: <TextContentHeadingDemo />,
        },
        {
          id: "text-heading",
          label: "Text Heading",
          content: <TextHeadingDemo />,
        },
        {
          id: "text-subheading",
          label: "Text Subheading",
          content: <TextSubheadingDemo />,
        },
        {
          id: "text-subtitle",
          label: "Text Subtitle",
          content: <TextSubtitleDemo />,
        },
        {
          id: "text-title-hero",
          label: "Text Title Hero",
          content: <TextTitleHeroDemo />,
        },
        {
          id: "text-title-page",
          label: "Text Title Page",
          content: <TextTitlePageDemo />,
        },
        {
          id: "text-small",
          label: "Text Small",
          content: <TextSmallDemo />,
        },
        {
          id: "text-link",
          label: "Text Link",
          content: <TextLinkDemo />,
        },
        {
          id: "text-code",
          label: "Text Code",
          content: <TextCodeDemo />,
        },
        {
          id: "text-list",
          label: "Text List",
          content: <TextListDemo />,
        },
        {
          id: "text-list-item",
          label: "Text List Item",
          content: <TextListItemDemo />,
        },
      ]}
      defaultActiveTab="text"
    />
  );
}
