import { Tabs } from "./ui/primitives/Tab";
import { IconsDemo } from "./components/IconsDemo";
import { ButtonsDemo } from "./components/ButtonsDemo";
import { AvatarsDemo } from "./components/AvatarsDemo";
import { NavigationDemo } from "./components/NavigationDemo";

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
          {
            id: "navigation",
            label: "Navigation",
            content: <NavigationDemo />,
          },
        ]}
        defaultActiveTab="icons"
      />
    </div>
  );
}

export default App;
