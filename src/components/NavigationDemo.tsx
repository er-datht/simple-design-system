import { useState } from "react";
import { Tabs } from "../ui/primitives/Tab";
import {
  NavigationPillList,
  NavigationList,
  type NavigationPillItem,
  type NavigationItem,
} from "../ui/primitives/Navigation";
import {
  IconActivity,
  IconAlertCircle,
  IconArchive,
  IconCheckCircle,
} from "../ui/icons";

export function NavigationDemo() {
  return (
    <Tabs
      items={[
        {
          id: "navigation-basics",
          label: "Navigation Lists",
          content: <NavigationBasicDemo />,
        },
        {
          id: "navigation-pill-lists",
          label: "Navigation Pill Lists",
          content: <NavigationPillDemo />,
        },
      ]}
      defaultActiveTab="avatar-basics"
    />
  );
}

function NavigationPillDemo() {
  const [activeId, setActiveId] = useState("overview");

  const pillItems: NavigationPillItem[] = [
    { id: "overview", label: "Overview" },
    { id: "analytics", label: "Analytics" },
    { id: "reports", label: "Reports" },
    { id: "settings", label: "Settings" },
  ];

  const pillItemsWithDisabled: NavigationPillItem[] = [
    { id: "home", label: "Home" },
    { id: "profile", label: "Profile" },
    { id: "notifications", label: "Notifications", disabled: true },
    { id: "messages", label: "Messages" },
  ];

  const manyPillItems: NavigationPillItem[] = [
    { id: "1", label: "Dashboard" },
    { id: "2", label: "Projects" },
    { id: "3", label: "Team" },
    { id: "4", label: "Calendar" },
    { id: "5", label: "Documents" },
    { id: "6", label: "Tasks" },
  ];

  return (
    <div className="space-y-12">
      {/* Basic Usage - Controlled (Row) */}
      <section>
        <h2 className="text-2xl font-bold mb-4">
          Navigation Pills - Row Direction (Controlled)
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          Horizontal pill layout. Current active: {activeId}
        </p>
        <NavigationPillList
          items={pillItems}
          direction="row"
          activeItemId={activeId}
          onItemClick={(id) => setActiveId(id)}
        />
      </section>

      {/* Column Direction */}
      <section>
        <h2 className="text-2xl font-bold mb-4">
          Navigation Pills - Column Direction
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          Vertical pill layout for sidebar navigation
        </p>
        <div className="flex gap-8">
          <NavigationPillList
            items={pillItems}
            direction="column"
            defaultActiveItemId="analytics"
          />
        </div>
      </section>

      {/* Uncontrolled Mode */}
      <section>
        <h2 className="text-2xl font-bold mb-4">
          Navigation Pills - Uncontrolled
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          Uncontrolled with default active item
        </p>
        <NavigationPillList
          items={pillItems}
          defaultActiveItemId="analytics"
          onItemClick={(id) => console.log("Clicked:", id)}
        />
      </section>

      {/* With Disabled Item */}
      <section>
        <h2 className="text-2xl font-bold mb-4">
          Navigation Pills - With Disabled Item
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          Pills with a disabled item (Notifications)
        </p>
        <NavigationPillList
          items={pillItemsWithDisabled}
          defaultActiveItemId="home"
        />
      </section>

      {/* Many Items */}
      <section>
        <h2 className="text-2xl font-bold mb-4">
          Navigation Pills - Many Items
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          Multiple pills demonstrating wrapping behavior
        </p>
        <NavigationPillList items={manyPillItems} defaultActiveItemId="1" />
      </section>

      {/* Two Pills Only */}
      <section>
        <h2 className="text-2xl font-bold mb-4">
          Navigation Pills - Minimal (2 items)
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          Two-pill navigation for simple binary choices
        </p>
        <NavigationPillList
          items={[
            { id: "list", label: "List View" },
            { id: "grid", label: "Grid View" },
          ]}
          defaultActiveItemId="list"
        />
      </section>

      {/* State Visualization */}
      <section>
        <h2 className="text-2xl font-bold mb-4">
          Navigation Pills - State Visualization
        </h2>
        <div className="space-y-4">
          <div>
            <p className="text-sm font-semibold mb-2">Default State:</p>
            <NavigationPillList
              items={[
                { id: "1", label: "Not Active" },
                { id: "2", label: "Also Not Active" },
              ]}
              defaultActiveItemId="none"
            />
          </div>
          <div>
            <p className="text-sm font-semibold mb-2">
              Active State (first item):
            </p>
            <NavigationPillList
              items={[
                { id: "1", label: "Active Item" },
                { id: "2", label: "Not Active" },
              ]}
              defaultActiveItemId="1"
            />
          </div>
          <div>
            <p className="text-sm font-semibold mb-2">Disabled State:</p>
            <NavigationPillList
              items={[
                { id: "1", label: "Normal" },
                { id: "2", label: "Disabled", disabled: true },
                { id: "3", label: "Normal" },
              ]}
              defaultActiveItemId="1"
            />
          </div>
        </div>
      </section>

      {/* Interactive Example */}
      <section>
        <h2 className="text-2xl font-bold mb-4">
          Navigation Pills - Interactive Example
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          Click pills to see state changes in action
        </p>
        <div className="space-y-4">
          <NavigationPillList
            items={[
              { id: "tab1", label: "Tab 1" },
              { id: "tab2", label: "Tab 2" },
              { id: "tab3", label: "Tab 3" },
              { id: "tab4", label: "Tab 4" },
            ]}
            defaultActiveItemId="tab1"
            onItemClick={(id) => {
              console.log("Selected tab:", id);
            }}
          />
          <div className="mt-4 p-4 rounded border text-sm">
            <p>
              Hover over pills to see hover state (light background)
              <br />
              Click a pill to see active state (brand background with brand
              text)
              <br />
              Disabled pills cannot be clicked or hovered
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function NavigationBasicDemo() {
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

      {/* Mixed Item Directions - Column List with Row Items */}
      <section>
        <h2 className="text-2xl font-bold mb-4">
          Navigation - Mixed Directions (Column List, Row Items)
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          Column list layout where each item has icon beside label (row content
          direction)
        </p>
        <NavigationList
          items={[
            {
              id: "profile",
              label: "Profile",
              icon: <IconActivity size="24" />,
              itemDirection: "row",
            },
            {
              id: "settings",
              label: "Settings",
              icon: <IconAlertCircle size="24" />,
              itemDirection: "row",
            },
            {
              id: "archive",
              label: "Archive",
              icon: <IconArchive size="24" />,
              itemDirection: "row",
            },
            {
              id: "completed",
              label: "Completed",
              icon: <IconCheckCircle size="24" />,
              itemDirection: "row",
            },
          ]}
          direction="column"
          size="md"
          defaultActiveItemId="profile"
        />
      </section>

      {/* Mixed Item Directions - Row List with Column Items */}
      <section>
        <h2 className="text-2xl font-bold mb-4">
          Navigation - Mixed Directions (Row List, Column Items)
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          Row list layout where each item has icon above label (column content
          direction)
        </p>
        <NavigationList
          items={[
            {
              id: "home",
              label: "Home",
              icon: <IconActivity size="24" />,
              itemDirection: "column",
            },
            {
              id: "alerts",
              label: "Alerts",
              icon: <IconAlertCircle size="24" />,
              itemDirection: "column",
            },
            {
              id: "files",
              label: "Files",
              icon: <IconArchive size="24" />,
              itemDirection: "column",
            },
            {
              id: "tasks",
              label: "Tasks",
              icon: <IconCheckCircle size="24" />,
              itemDirection: "column",
            },
          ]}
          direction="row"
          size="md"
          defaultActiveItemId="home"
        />
      </section>

      {/* Mixed Item Directions - Hybrid Example */}
      <section>
        <h2 className="text-2xl font-bold mb-4">
          Navigation - Hybrid Directions (Settings Menu)
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          Real-world example: Settings menu with some items showing icon on left
          (row), others showing icon on top (column) for visual hierarchy
        </p>
        <NavigationList
          items={[
            {
              id: "account",
              label: "Account",
              icon: <IconActivity size="24" />,
              itemDirection: "row",
            },
            {
              id: "notifications",
              label: "Notifications",
              icon: <IconAlertCircle size="24" />,
              itemDirection: "row",
            },
            {
              id: "backup",
              label: "Backup",
              icon: <IconArchive size="24" />,
              itemDirection: "column",
            },
            {
              id: "sync",
              label: "Sync Status",
              icon: <IconCheckCircle size="24" />,
              itemDirection: "column",
            },
          ]}
          direction="column"
          size="md"
          defaultActiveItemId="account"
        />
      </section>

      {/* Mixed Item Directions - Default Row */}
      <section>
        <h2 className="text-2xl font-bold mb-4">
          Navigation - Default Item Direction (Row)
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          By default, items use row direction (icon beside label). You can
          explicitly set itemDirection to "column" for specific items.
        </p>
        <div className="space-y-4">
          <div>
            <p className="text-xs font-semibold mb-2">
              Column list - First two use default (row), last two set to
              column:
            </p>
            <NavigationList
              items={[
                {
                  id: "1",
                  label: "Default Row",
                  icon: <IconActivity size="24" />,
                },
                {
                  id: "2",
                  label: "Default Row",
                  icon: <IconAlertCircle size="24" />,
                },
                {
                  id: "3",
                  label: "Column",
                  icon: <IconArchive size="24" />,
                  itemDirection: "column",
                },
                {
                  id: "4",
                  label: "Column",
                  icon: <IconCheckCircle size="24" />,
                  itemDirection: "column",
                },
              ]}
              direction="column"
              size="md"
              defaultActiveItemId="1"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
