import { useState } from "react";
import { TagToggleGroup } from "../ui/primitives/TagToggleGroup";
import type { TagToggleItem } from "../ui/primitives/TagToggleGroup";
import { Tabs } from "../ui/primitives/Tab";
import type { TabItem } from "../ui/primitives/Tab";
import { IconStar, IconHeart, IconZap } from "../ui/icons";

/**
 * Single Selection Mode Demo
 * Only one tag can be selected at a time
 */
function SingleSelectionDemo() {
  const [selectedIds, setSelectedIds] = useState<string[]>(["all"]);

  const filterItems: TagToggleItem[] = [
    { id: "all", label: "All" },
    { id: "active", label: "Active" },
    { id: "completed", label: "Completed" },
    { id: "pending", label: "Pending" },
    { id: "archived", label: "Archived" },
  ];

  const handleToggle = (itemId: string) => {
    // Single selection: always replace the current selection
    setSelectedIds([itemId]);
  };

  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold mb-4">Single Selection Mode</h2>
        <p
          style={{
            color: "var(--sds-color-text-default-secondary)",
            marginBottom: "var(--sds-size-space-400)",
          }}
        >
          Only one tag can be selected at a time. Clicking a different tag
          automatically deselects the previous one.
        </p>

        <div
          className="p-6 rounded-lg"
          style={{
            background: "var(--sds-color-background-default-secondary)",
          }}
        >
          <TagToggleGroup
            items={filterItems}
            selectedIds={selectedIds}
            onToggle={handleToggle}
          />
        </div>

        <div className="mt-4 p-4 rounded border">
          <p className="text-sm font-semibold mb-2">Selected Filter:</p>
          <p
            className="text-sm"
            style={{ color: "var(--sds-color-text-default-secondary)" }}
          >
            {selectedIds.length > 0
              ? filterItems.find((item) => item.id === selectedIds[0])?.label
              : "None"}
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Category Selection</h2>
        <CategorySelectionExample />
      </section>
    </div>
  );
}

function CategorySelectionExample() {
  const [selectedIds, setSelectedIds] = useState<string[]>(["electronics"]);

  const categories: TagToggleItem[] = [
    { id: "electronics", label: "Electronics" },
    { id: "clothing", label: "Clothing" },
    { id: "books", label: "Books" },
    { id: "home", label: "Home & Garden" },
    { id: "sports", label: "Sports" },
    { id: "toys", label: "Toys" },
  ];

  return (
    <>
      <div
        className="p-6 rounded-lg"
        style={{
          background: "var(--sds-color-background-default-secondary)",
        }}
      >
        <TagToggleGroup
          items={categories}
          selectedIds={selectedIds}
          onToggle={(id) => setSelectedIds([id])}
        />
      </div>
      <div className="mt-4 p-4 rounded border">
        <p className="text-sm font-semibold mb-2">Current Category:</p>
        <p
          className="text-sm"
          style={{ color: "var(--sds-color-text-default-secondary)" }}
        >
          {categories.find((cat) => cat.id === selectedIds[0])?.label ||
            "None selected"}
        </p>
      </div>
    </>
  );
}

/**
 * Multi Selection Mode Demo
 * Multiple tags can be selected simultaneously
 */
function MultiSelectionDemo() {
  const [selectedIds, setSelectedIds] = useState<string[]>([
    "javascript",
    "react",
  ]);

  const techItems: TagToggleItem[] = [
    { id: "javascript", label: "JavaScript" },
    { id: "typescript", label: "TypeScript" },
    { id: "react", label: "React" },
    { id: "vue", label: "Vue" },
    { id: "angular", label: "Angular" },
    { id: "node", label: "Node.js" },
    { id: "python", label: "Python" },
  ];

  const handleToggle = (itemId: string) => {
    setSelectedIds((prev) => {
      if (prev.includes(itemId)) {
        // Remove if already selected
        return prev.filter((id) => id !== itemId);
      } else {
        // Add to selection
        return [...prev, itemId];
      }
    });
  };

  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold mb-4">Multi-Selection Mode</h2>
        <p
          style={{
            color: "var(--sds-color-text-default-secondary)",
            marginBottom: "var(--sds-size-space-400)",
          }}
        >
          Multiple tags can be selected simultaneously. Click to toggle each tag
          independently.
        </p>

        <div
          className="p-6 rounded-lg"
          style={{
            background: "var(--sds-color-background-default-secondary)",
          }}
        >
          <TagToggleGroup
            items={techItems}
            selectedIds={selectedIds}
            onToggle={handleToggle}
            allowMultiple={true}
          />
        </div>

        <div className="mt-4 p-4 rounded border">
          <p className="text-sm font-semibold mb-2">
            Selected Technologies ({selectedIds.length}):
          </p>
          <div className="flex flex-wrap gap-2">
            {selectedIds.length > 0 ? (
              selectedIds.map((id) => {
                const item = techItems.find((tech) => tech.id === id);
                return (
                  <span
                    key={id}
                    className="text-sm px-2 py-1 rounded"
                    style={{
                      background: "var(--sds-color-background-brand-tertiary)",
                      color: "var(--sds-color-text-brand-tertiary)",
                    }}
                  >
                    {item?.label}
                  </span>
                );
              })
            ) : (
              <p
                className="text-sm italic"
                style={{ color: "var(--sds-color-text-default-secondary)" }}
              >
                No technologies selected
              </p>
            )}
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Skill Filter</h2>
        <SkillFilterExample />
      </section>
    </div>
  );
}

function SkillFilterExample() {
  const [selectedIds, setSelectedIds] = useState<string[]>(["beginner"]);

  const skills: TagToggleItem[] = [
    { id: "beginner", label: "Beginner" },
    { id: "intermediate", label: "Intermediate" },
    { id: "advanced", label: "Advanced" },
    { id: "expert", label: "Expert" },
  ];

  const handleToggle = (itemId: string) => {
    setSelectedIds((prev) => {
      if (prev.includes(itemId)) {
        return prev.filter((id) => id !== itemId);
      } else {
        return [...prev, itemId];
      }
    });
  };

  return (
    <>
      <div
        className="p-6 rounded-lg"
        style={{
          background: "var(--sds-color-background-default-secondary)",
        }}
      >
        <TagToggleGroup
          items={skills}
          selectedIds={selectedIds}
          onToggle={handleToggle}
          allowMultiple={true}
        />
      </div>
      <div className="mt-4 p-4 rounded border">
        <p className="text-sm font-semibold mb-2">Active Skill Levels:</p>
        <p
          className="text-sm"
          style={{ color: "var(--sds-color-text-default-secondary)" }}
        >
          {selectedIds.length > 0
            ? selectedIds
                .map((id) => skills.find((s) => s.id === id)?.label)
                .join(", ")
            : "None selected"}
        </p>
      </div>
    </>
  );
}

/**
 * Custom Icons Demo
 * Shows tags with different custom icons
 */
function CustomIconsDemo() {
  const [selectedIds, setSelectedIds] = useState<string[]>(["featured"]);

  const productFilters: TagToggleItem[] = [
    {
      id: "featured",
      label: "Featured",
      icon: <IconStar size="16" />,
    },
    {
      id: "popular",
      label: "Popular",
      icon: <IconHeart size="16" />,
    },
    {
      id: "new",
      label: "New Arrivals",
      icon: <IconZap size="16" />,
    },
    {
      id: "sale",
      label: "On Sale",
    },
    {
      id: "clearance",
      label: "Clearance",
    },
  ];

  const handleToggle = (itemId: string) => {
    setSelectedIds((prev) => {
      if (prev.includes(itemId)) {
        return prev.filter((id) => id !== itemId);
      } else {
        return [...prev, itemId];
      }
    });
  };

  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold mb-4">Custom Icons</h2>
        <p
          style={{
            color: "var(--sds-color-text-default-secondary)",
            marginBottom: "var(--sds-size-space-400)",
          }}
        >
          Tags can display custom icons when selected. Some tags use the default
          check icon, while others have custom icons like star, heart, or bolt.
        </p>

        <div
          className="p-6 rounded-lg"
          style={{
            background: "var(--sds-color-background-default-secondary)",
          }}
        >
          <TagToggleGroup
            items={productFilters}
            selectedIds={selectedIds}
            onToggle={handleToggle}
            allowMultiple={true}
          />
        </div>

        <div className="mt-4 p-4 rounded border">
          <p className="text-sm font-semibold mb-2">
            Active Filters ({selectedIds.length}):
          </p>
          <ul className="list-disc list-inside text-sm space-y-1">
            {selectedIds.length > 0 ? (
              selectedIds.map((id) => {
                const item = productFilters.find((f) => f.id === id);
                return (
                  <li
                    key={id}
                    style={{ color: "var(--sds-color-text-default-secondary)" }}
                  >
                    {item?.label}
                    {item?.icon && " (custom icon)"}
                  </li>
                );
              })
            ) : (
              <li
                className="italic"
                style={{ color: "var(--sds-color-text-default-secondary)" }}
              >
                No filters active
              </li>
            )}
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Without Icons</h2>
        <p
          style={{
            color: "var(--sds-color-text-default-secondary)",
            marginBottom: "var(--sds-size-space-400)",
          }}
        >
          You can also disable icons entirely for a cleaner, text-only
          appearance.
        </p>
        <NoIconsExample />
      </section>
    </div>
  );
}

function NoIconsExample() {
  const [selectedIds, setSelectedIds] = useState<string[]>(["medium"]);

  const sizes: TagToggleItem[] = [
    { id: "xs", label: "XS" },
    { id: "small", label: "Small" },
    { id: "medium", label: "Medium" },
    { id: "large", label: "Large" },
    { id: "xl", label: "XL" },
  ];

  return (
    <>
      <div
        className="p-6 rounded-lg"
        style={{
          background: "var(--sds-color-background-default-secondary)",
        }}
      >
        <TagToggleGroup
          items={sizes}
          selectedIds={selectedIds}
          onToggle={(id) => setSelectedIds([id])}
          showIcons={false}
        />
      </div>
      <div className="mt-4 p-4 rounded border">
        <p className="text-sm font-semibold mb-2">Selected Size:</p>
        <p
          className="text-sm"
          style={{ color: "var(--sds-color-text-default-secondary)" }}
        >
          {sizes.find((s) => s.id === selectedIds[0])?.label || "None"}
        </p>
      </div>
    </>
  );
}

/**
 * Real-World Usage Patterns
 */
function UsagePatternsDemo() {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold mb-4">Product Filtering</h2>
        <ProductFilterExample />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Content Type Selection</h2>
        <ContentTypeExample />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Responsive Behavior</h2>
        <p
          style={{
            color: "var(--sds-color-text-default-secondary)",
            marginBottom: "var(--sds-size-space-400)",
          }}
        >
          Tags automatically wrap to multiple rows on smaller screens. Resize
          your browser to see the responsive behavior.
        </p>
        <ResponsiveExample />
      </section>
    </div>
  );
}

function ProductFilterExample() {
  const [selectedIds, setSelectedIds] = useState<string[]>(["new"]);

  const filters: TagToggleItem[] = [
    { id: "all", label: "All Products" },
    { id: "new", label: "New Arrivals" },
    { id: "sale", label: "On Sale" },
    { id: "bestseller", label: "Bestsellers" },
    { id: "trending", label: "Trending" },
  ];

  return (
    <div
      className="p-6 rounded-lg border"
      style={{
        borderColor: "var(--sds-color-border-default-default)",
      }}
    >
      <h3 className="text-lg font-semibold mb-4">Shop by Category</h3>
      <TagToggleGroup
        items={filters}
        selectedIds={selectedIds}
        onToggle={(id) => setSelectedIds([id])}
      />
      <div className="mt-6 pt-6 border-t">
        <p
          className="text-sm"
          style={{ color: "var(--sds-color-text-default-secondary)" }}
        >
          Showing products from:{" "}
          <strong>{filters.find((f) => f.id === selectedIds[0])?.label}</strong>
        </p>
      </div>
    </div>
  );
}

function ContentTypeExample() {
  const [selectedIds, setSelectedIds] = useState<string[]>([
    "article",
    "video",
  ]);

  const contentTypes: TagToggleItem[] = [
    { id: "article", label: "Articles" },
    { id: "video", label: "Videos" },
    { id: "podcast", label: "Podcasts" },
    { id: "tutorial", label: "Tutorials" },
    { id: "course", label: "Courses" },
  ];

  const handleToggle = (itemId: string) => {
    setSelectedIds((prev) => {
      if (prev.includes(itemId)) {
        return prev.filter((id) => id !== itemId);
      } else {
        return [...prev, itemId];
      }
    });
  };

  return (
    <div
      className="p-6 rounded-lg border"
      style={{
        borderColor: "var(--sds-color-border-default-default)",
      }}
    >
      <h3 className="text-lg font-semibold mb-4">Filter Content</h3>
      <TagToggleGroup
        items={contentTypes}
        selectedIds={selectedIds}
        onToggle={handleToggle}
        allowMultiple={true}
      />
      <div className="mt-6 pt-6 border-t">
        <p
          className="text-sm mb-2"
          style={{ color: "var(--sds-color-text-default-secondary)" }}
        >
          Showing: {selectedIds.length} content type
          {selectedIds.length !== 1 ? "s" : ""}
        </p>
        <div className="flex flex-wrap gap-2">
          {selectedIds.map((id) => {
            const type = contentTypes.find((ct) => ct.id === id);
            return (
              <span
                key={id}
                className="text-xs px-2 py-1 rounded"
                style={{
                  background: "var(--sds-color-background-brand-default)",
                  color: "var(--sds-color-text-brand-on-brand)",
                }}
              >
                {type?.label}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ResponsiveExample() {
  const [selectedIds, setSelectedIds] = useState<string[]>(["tag-1", "tag-5"]);

  const manyTags: TagToggleItem[] = Array.from({ length: 20 }, (_, i) => ({
    id: `tag-${i + 1}`,
    label: `Tag ${i + 1}`,
  }));

  const handleToggle = (itemId: string) => {
    setSelectedIds((prev) => {
      if (prev.includes(itemId)) {
        return prev.filter((id) => id !== itemId);
      } else {
        return [...prev, itemId];
      }
    });
  };

  return (
    <>
      <div
        className="p-6 rounded-lg"
        style={{
          background: "var(--sds-color-background-default-secondary)",
        }}
      >
        <TagToggleGroup
          items={manyTags}
          selectedIds={selectedIds}
          onToggle={handleToggle}
          allowMultiple={true}
        />
      </div>
      <div className="mt-4 p-4 rounded border">
        <p className="text-sm font-semibold mb-2">
          Selected: {selectedIds.length} of {manyTags.length}
        </p>
        <button
          onClick={() => setSelectedIds([])}
          className="text-sm px-3 py-1 rounded transition-colors"
          style={{
            background: "var(--sds-color-background-brand-tertiary)",
            color: "var(--sds-color-text-brand-tertiary)",
          }}
        >
          Clear All
        </button>
      </div>
    </>
  );
}

/**
 * Main TagToggleGroup Demo Component
 */
export function TagToggleGroupDemo() {
  const tabItems: TabItem[] = [
    {
      id: "single",
      label: "Single Selection",
      content: <SingleSelectionDemo />,
    },
    {
      id: "multi",
      label: "Multi Selection",
      content: <MultiSelectionDemo />,
    },
    {
      id: "icons",
      label: "Custom Icons",
      content: <CustomIconsDemo />,
    },
    {
      id: "patterns",
      label: "Usage Patterns",
      content: <UsagePatternsDemo />,
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Tag Toggle Group</h1>
        <p
          style={{
            color: "var(--sds-color-text-default-secondary)",
          }}
        >
          A collection of selectable tag elements for filtering, categorization,
          and multi-selection scenarios.
        </p>
      </div>
      <Tabs items={tabItems} defaultActiveTab="single" />
    </div>
  );
}
