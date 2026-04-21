import { useState } from "react";
import {
  NavigationPillList,
  type NavigationPillItem,
} from "../ui/primitives/Navigation";

export function NavigationPillDemo() {
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
      {/* Basic Usage - Controlled */}
      <section>
        <h2 className="text-2xl font-bold mb-4">
          Navigation Pills - Basic (Controlled)
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          Controlled state with click handler. Current active: {activeId}
        </p>
        <NavigationPillList
          items={pillItems}
          activeItemId={activeId}
          onItemClick={(id) => setActiveId(id)}
        />
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
