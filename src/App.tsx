import { Tabs } from "./ui/primitives/Tab";
import { IconsDemo } from "./components/IconsDemo";
import { ButtonsDemo } from "./components/ButtonsDemo";
import { AvatarsDemo } from "./components/AvatarsDemo";

function App() {
  return (
    <div className="p-8">
      <Tabs
        items={[
          {
            id: "icons",
            label: "Icons",
            content: <IconsDemo />,
          },
          {
            id: "buttons",
            label: "Buttons",
            content: <ButtonsDemo />,
          },
          {
            id: "avatars",
            label: "Avatars",
            content: <AvatarsDemo />,
          },
        ]}
        defaultActiveTab="icons"
      />
    </div>
  );
}

export default App;
