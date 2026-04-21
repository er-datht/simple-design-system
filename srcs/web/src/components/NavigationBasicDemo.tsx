import { useState } from "react";
import {
  NavigationList,
  type NavigationItem,
} from "../ui/primitives/Navigation";
import {
  IconActivity,
  IconAlertCircle,
  IconArchive,
  IconCheckCircle,
} from "../ui/icons";

export function NavigationBasicDemo() {
  const [activeId, setActiveId] = useState("home");

  const navigationItems: NavigationItem[] = [
    {
      id: "home",
      label: "Home",
      icon: <IconActivity size="24" />,
    },
    {
      id: "notifications",
      label: "Notifications",
      icon: <IconAlertCircle size="24" />,
    },
    {
      id: "archive",
      label: "Archive",
      icon: <IconArchive size="24" />,
    },
    {
      id: "completed",
      label: "Completed",
      icon: <IconCheckCircle size="24" />,
    },
  ];

  const navigationItemsNoIcons: NavigationItem[] = [
    { id: "overview", label: "Overview" },
    { id: "analytics", label: "Analytics" },
    { id: "reports", label: "Reports" },
    { id: "settings", label: "Settings" },
  ];

  return (
    <div className="space-y-8">
      {/* Column Direction - Medium Size */}
      <section>
        <h2 className="text-2xl font-bold mb-4">
          Navigation - Column Medium (with icons)
        </h2>
        <div className="flex gap-8">
          <NavigationList
            items={navigationItems}
            direction="column"
            size="md"
            activeItemId={activeId}
            onItemClick={(id) => setActiveId(id)}
          />
        </div>
      </section>

      {/* Column Direction - Small Size */}
      <section>
        <h2 className="text-2xl font-bold mb-4">
          Navigation - Column Small (with icons)
        </h2>
        <div className="flex gap-8">
          <NavigationList
            items={navigationItems}
            direction="column"
            size="sm"
            defaultActiveItemId="notifications"
          />
        </div>
      </section>

      {/* Row Direction - Medium Size */}
      <section>
        <h2 className="text-2xl font-bold mb-4">
          Navigation - Row Medium (with icons)
        </h2>
        <NavigationList
          items={navigationItems}
          direction="row"
          size="md"
          defaultActiveItemId="home"
        />
      </section>

      {/* Row Direction - Small Size */}
      <section>
        <h2 className="text-2xl font-bold mb-4">
          Navigation - Row Small (with icons)
        </h2>
        <NavigationList
          items={navigationItems}
          direction="row"
          size="sm"
          defaultActiveItemId="archive"
        />
      </section>

      {/* Without Icons - Column */}
      <section>
        <h2 className="text-2xl font-bold mb-4">
          Navigation - Column Medium (text only)
        </h2>
        <NavigationList
          items={navigationItemsNoIcons}
          direction="column"
          size="md"
          defaultActiveItemId="overview"
        />
      </section>

      {/* Without Icons - Row */}
      <section>
        <h2 className="text-2xl font-bold mb-4">
          Navigation - Row Medium (text only)
        </h2>
        <NavigationList
          items={navigationItemsNoIcons}
          direction="row"
          size="md"
          defaultActiveItemId="analytics"
        />
      </section>

      {/* With Disabled Item */}
      <section>
        <h2 className="text-2xl font-bold mb-4">
          Navigation - With Disabled Item
        </h2>
        <NavigationList
          items={[
            { id: "1", label: "Active", icon: <IconActivity size="24" /> },
            {
              id: "2",
              label: "Disabled",
              icon: <IconAlertCircle size="24" />,
              disabled: true,
            },
            { id: "3", label: "Normal", icon: <IconArchive size="24" /> },
          ]}
          direction="column"
          size="md"
          defaultActiveItemId="1"
        />
      </section>
    </div>
  );
}
