import { type ReactNode, useState } from "react";
import {
  Tabs as FlowbiteTabs,
  TabItem as FlowbiteTabItem,
  type TabsTheme,
} from "flowbite-react";
import { cn } from "../../../utils/cn";

// Custom theme to enable horizontal scroll instead of wrapping
const customTabsTheme: Partial<TabsTheme> = {
  base: "flex flex-col gap-2",
  tablist: {
    base: "flex text-center",
    variant: {
      default: "flex-nowrap overflow-x-auto",
      underline: "flex-nowrap overflow-x-auto -mb-px",
      pills: "flex-nowrap overflow-x-auto space-x-2",
      fullWidth: "grid w-full grid-flow-col divide-x divide-gray-200 dark:divide-gray-700",
    },
    tabitem: {
      base: "",
      variant: {
        default: {
          base: "",
          active: {
            on: "",
            off: "",
          },
        },
        underline: {
          base: "",
          active: {
            on: "",
            off: "",
          },
        },
        pills: {
          base: "",
          active: {
            on: "",
            off: "",
          },
        },
        fullWidth: {
          base: "",
          active: {
            on: "",
            off: "",
          },
        },
      },
      icon: "",
    },
  },
};

export interface TabItem {
  /**
   * Unique identifier for the tab
   */
  id: string;

  /**
   * Label text displayed in the tab
   */
  label: string;

  /**
   * Content to display when tab is active
   */
  content: ReactNode;

  /**
   * Whether the tab is disabled
   */
  disabled?: boolean;
}

export interface TabsProps {
  /**
   * Array of tab items
   */
  items: TabItem[];

  /**
   * Currently active tab ID (controlled mode)
   */
  activeTab?: string;

  /**
   * Default active tab ID (uncontrolled mode)
   * @default First tab's ID
   */
  defaultActiveTab?: string;

  /**
   * Callback when tab changes
   */
  onTabChange?: (tabId: string) => void;

  /**
   * Additional CSS classes for container
   */
  className?: string;

  /**
   * Additional CSS classes for tab list
   */
  tabListClassName?: string;

  /**
   * Additional CSS classes for tab panel
   */
  tabPanelClassName?: string;
}

/**
 * Tabs component for organizing content into switchable panels
 * Built on flowbite-react with custom design system styling
 */
export function Tabs({
  items,
  activeTab,
  defaultActiveTab,
  onTabChange,
  className,
  tabListClassName,
  tabPanelClassName,
}: TabsProps) {
  const [internalActiveTab, setInternalActiveTab] = useState(
    defaultActiveTab ?? items[0]?.id
  );

  const activeTabId = activeTab ?? internalActiveTab;
  const activeIndex = items.findIndex((item) => item.id === activeTabId);

  const handleTabClick = (tabIndex: number) => {
    const tabId = items[tabIndex]?.id;
    if (tabId) {
      setInternalActiveTab(tabId);
      onTabChange?.(tabId);
    }
  };

  return (
    <div className={cn("tabs-container", className)}>
      <FlowbiteTabs
        aria-label="Tabs"
        onActiveTabChange={handleTabClick}
        className={cn("tabs-flowbite-wrapper", tabListClassName)}
        theme={customTabsTheme}
      >
        {items.map((item, index) => (
          <FlowbiteTabItem
            key={item.id}
            title={item.label}
            active={index === activeIndex}
            disabled={item.disabled}
            className={cn("tab-item", tabPanelClassName)}
          >
            {item.content}
          </FlowbiteTabItem>
        ))}
      </FlowbiteTabs>
    </div>
  );
}
