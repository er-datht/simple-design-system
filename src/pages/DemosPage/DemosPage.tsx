import { Tabs } from "../../ui/primitives/Tab";
import { IconsDemo } from "../../components/IconsDemo";
import { PrimitivesDemo } from "../../components/PrimitivesDemo";
import { TypographyDemo } from "../../components/TypographyDemo";
import { SectionsDemo } from "../../components/SectionsDemo";
import { FormsDemo } from "../../components/FormsDemo";
import { Container } from "../../ui/layout/Container";

export const DemosPage = () => {
  return (
    // <Container>
    <div className="p-8">
      <Tabs
        items={[
          {
            id: "icons",
            label: "Icons",
            content: <IconsDemo />,
          },
          {
            id: "primitives",
            label: "Primitives",
            content: <PrimitivesDemo />,
          },
          {
            id: "typography",
            label: "Typography",
            content: <TypographyDemo />,
          },
          {
            id: "sections",
            label: "Sections",
            content: <SectionsDemo />,
          },
          {
            id: "forms",
            label: "Forms",
            content: <FormsDemo />,
          },
        ]}
        defaultActiveTab="icons"
      />
    </div>
    // </Container>
  );
};
