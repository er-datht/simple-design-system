import { useState } from "react";
import { Tag } from "../ui/primitives/Tag";
import type { TagScheme } from "../ui/primitives/Tag";
import { Tabs } from "../ui/primitives/Tab";
import type { TabItem } from "../ui/primitives/Tab";

function TagSchemeShowcase() {
  const schemes: TagScheme[] = [
    "brand",
    "neutral",
    "positive",
    "danger",
    "warning",
  ];

  return (
    <div className="space-y-8">
      {/* Primary Variant Tags */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Primary Variant</h2>
        <p
          style={{
            color: "var(--sds-color-text-default-secondary)",
            marginBottom: "var(--sds-size-space-400)",
          }}
        >
          Solid, saturated colors for important status indicators and primary
          categorization.
        </p>
        <div className="flex flex-wrap gap-4 items-center">
          {schemes.map((scheme) => (
            <Tag
              key={`primary-${scheme}`}
              scheme={scheme}
              variant="primary"
              label={`${scheme.charAt(0).toUpperCase() + scheme.slice(1)} Tag`}
            />
          ))}
        </div>
      </section>

      {/* Secondary Variant Tags */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Secondary Variant</h2>
        <p
          style={{
            color: "var(--sds-color-text-default-secondary)",
            marginBottom: "var(--sds-size-space-400)",
          }}
        >
          Light, pastel backgrounds for auxiliary categorization and filter
          chips in crowded layouts.
        </p>
        <div className="flex flex-wrap gap-4 items-center">
          {schemes.map((scheme) => (
            <Tag
              key={`secondary-${scheme}`}
              scheme={scheme}
              variant="secondary"
              label={`${scheme.charAt(0).toUpperCase() + scheme.slice(1)} Tag`}
            />
          ))}
        </div>
      </section>

      {/* Comparison Grid */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Variant Comparison</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {schemes.map((scheme) => (
            <div
              key={scheme}
              className="p-4 rounded-lg"
              style={{
                border: "1px solid var(--sds-color-border-default-default)",
              }}
            >
              <h3 className="text-lg font-semibold mb-3 capitalize">
                {scheme}
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span
                    className="text-sm w-24"
                    style={{ color: "var(--sds-color-text-default-secondary)" }}
                  >
                    Primary:
                  </span>
                  <Tag scheme={scheme} variant="primary" label={scheme} />
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className="text-sm w-24"
                    style={{ color: "var(--sds-color-text-default-secondary)" }}
                  >
                    Secondary:
                  </span>
                  <Tag scheme={scheme} variant="secondary" label={scheme} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function RemovableTagsDemo() {
  const [tags, setTags] = useState([
    { id: 1, label: "React", scheme: "brand" as TagScheme },
    { id: 2, label: "TypeScript", scheme: "neutral" as TagScheme },
    { id: 3, label: "Success", scheme: "positive" as TagScheme },
    { id: 4, label: "Error", scheme: "danger" as TagScheme },
    { id: 5, label: "Warning", scheme: "warning" as TagScheme },
  ]);

  const removeTag = (id: number) => {
    setTags(tags.filter((tag) => tag.id !== id));
  };

  const resetTags = () => {
    setTags([
      { id: 1, label: "React", scheme: "brand" as TagScheme },
      { id: 2, label: "TypeScript", scheme: "neutral" as TagScheme },
      { id: 3, label: "Success", scheme: "positive" as TagScheme },
      { id: 4, label: "Error", scheme: "danger" as TagScheme },
      { id: 5, label: "Warning", scheme: "warning" as TagScheme },
    ]);
  };

  return (
    <div className="space-y-8">
      {/* Removable Tags - Primary */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Removable Tags (Primary)</h2>
        <p
          style={{
            color: "var(--sds-color-text-default-secondary)",
            marginBottom: "var(--sds-size-space-400)",
          }}
        >
          Click the X button to remove tags. The onRemove callback is triggered
          when clicked.
        </p>
        <div
          className="flex flex-wrap gap-3 items-center p-6 rounded-lg min-h-[100px]"
          style={{
            background: "var(--sds-color-background-default-secondary)",
          }}
        >
          {tags.map((tag) => (
            <Tag
              key={tag.id}
              scheme={tag.scheme}
              variant="primary"
              label={tag.label}
              onRemove={() => removeTag(tag.id)}
            />
          ))}
          {tags.length === 0 && (
            <p
              className="italic"
              style={{ color: "var(--sds-color-text-default-secondary)" }}
            >
              All tags removed
            </p>
          )}
        </div>
        <button
          onClick={resetTags}
          className="mt-4 px-4 py-2 rounded transition-colors"
          style={{
            background: "var(--sds-color-background-brand-default)",
            color: "var(--sds-color-text-brand-on-brand)",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background =
              "var(--sds-color-background-brand-hover)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background =
              "var(--sds-color-background-brand-default)")
          }
        >
          Reset Tags
        </button>
      </section>

      {/* Removable Tags - Secondary */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Removable Tags (Secondary)</h2>
        <div
          className="flex flex-wrap gap-3 items-center p-6 rounded-lg"
          style={{
            background: "var(--sds-color-background-default-secondary)",
          }}
        >
          <Tag
            scheme="brand"
            variant="secondary"
            label="Feature"
            onRemove={() => console.log("Feature removed")}
          />
          <Tag
            scheme="neutral"
            variant="secondary"
            label="Documentation"
            onRemove={() => console.log("Documentation removed")}
          />
          <Tag
            scheme="positive"
            variant="secondary"
            label="Completed"
            onRemove={() => console.log("Completed removed")}
          />
          <Tag
            scheme="danger"
            variant="secondary"
            label="Bug"
            onRemove={() => console.log("Bug removed")}
          />
          <Tag
            scheme="warning"
            variant="secondary"
            label="In Progress"
            onRemove={() => console.log("In Progress removed")}
          />
        </div>
      </section>

      {/* Non-Removable Tags */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Non-Removable Tags</h2>
        <p
          style={{
            color: "var(--sds-color-text-default-secondary)",
            marginBottom: "var(--sds-size-space-400)",
          }}
        >
          Tags without the onRemove callback do not display the X button.
        </p>
        <div
          className="flex flex-wrap gap-3 items-center p-6 rounded-lg"
          style={{
            background: "var(--sds-color-background-default-secondary)",
          }}
        >
          <Tag scheme="brand" variant="primary" label="Permanent" />
          <Tag scheme="neutral" variant="primary" label="Read-Only" />
          <Tag scheme="positive" variant="secondary" label="Fixed Status" />
          <Tag scheme="danger" variant="secondary" label="System Tag" />
          <Tag scheme="warning" variant="primary" label="Important" />
        </div>
      </section>
    </div>
  );
}

function UsagePatternsDemo() {
  return (
    <div className="space-y-8">
      {/* Tag Lists */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Tag Lists</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              <Tag scheme="brand" variant="secondary" label="React 19" />
              <Tag scheme="brand" variant="secondary" label="TypeScript" />
              <Tag scheme="brand" variant="secondary" label="Vite" />
              <Tag scheme="brand" variant="secondary" label="Tailwind CSS" />
              <Tag
                scheme="brand"
                variant="secondary"
                label="Figma Code Connect"
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Project Status Tags</h3>
            <div className="flex flex-wrap gap-2">
              <Tag scheme="positive" variant="primary" label="Completed" />
              <Tag scheme="warning" variant="primary" label="In Progress" />
              <Tag scheme="neutral" variant="primary" label="Planned" />
              <Tag scheme="danger" variant="primary" label="Blocked" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Filter Chips</h3>
            <div className="flex flex-wrap gap-2">
              <Tag
                scheme="brand"
                variant="secondary"
                label="All Items"
                onRemove={() => console.log("Filter removed")}
              />
              <Tag
                scheme="neutral"
                variant="secondary"
                label="Active"
                onRemove={() => console.log("Filter removed")}
              />
              <Tag
                scheme="positive"
                variant="secondary"
                label="Verified"
                onRemove={() => console.log("Filter removed")}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Inline Tags */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Inline Tags in Content</h2>
        <div className="space-y-4">
          <div
            className="p-4 rounded-lg"
            style={{
              border: "1px solid var(--sds-color-border-default-default)",
            }}
          >
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-lg font-semibold">
                Issue #1234: Login Error
              </h3>
              <Tag scheme="danger" variant="primary" label="Bug" />
              <Tag scheme="warning" variant="secondary" label="High Priority" />
            </div>
            <p style={{ color: "var(--sds-color-text-default-secondary)" }}>
              Users are unable to log in using their email addresses.
            </p>
          </div>

          <div
            className="p-4 rounded-lg"
            style={{
              border: "1px solid var(--sds-color-border-default-default)",
            }}
          >
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-lg font-semibold">Feature: Dark Mode</h3>
              <Tag scheme="brand" variant="primary" label="Feature" />
              <Tag scheme="positive" variant="secondary" label="Completed" />
            </div>
            <p style={{ color: "var(--sds-color-text-default-secondary)" }}>
              Implement dark mode toggle for the entire application.
            </p>
          </div>

          <div
            className="p-4 rounded-lg"
            style={{
              border: "1px solid var(--sds-color-border-default-default)",
            }}
          >
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-lg font-semibold">
                Task: Update Dependencies
              </h3>
              <Tag scheme="neutral" variant="primary" label="Maintenance" />
              <Tag scheme="warning" variant="primary" label="In Progress" />
            </div>
            <p style={{ color: "var(--sds-color-text-default-secondary)" }}>
              Update all npm packages to their latest versions.
            </p>
          </div>
        </div>
      </section>

      {/* Mobile Responsive Example */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Responsive Tags</h2>
        <p
          style={{
            color: "var(--sds-color-text-default-secondary)",
            marginBottom: "var(--sds-size-space-400)",
          }}
        >
          Tags automatically adjust on smaller screens. Resize your browser to
          see the effect.
        </p>
        <div
          className="p-6 rounded-lg"
          style={{
            background: "var(--sds-color-background-default-secondary)",
          }}
        >
          <div className="flex flex-wrap gap-2">
            {Array.from({ length: 15 }, (_, i) => (
              <Tag
                key={i}
                scheme={
                  ["brand", "neutral", "positive", "danger", "warning"][
                    i % 5
                  ] as TagScheme
                }
                variant={i % 2 === 0 ? "primary" : "secondary"}
                label={`Tag ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export function TagDemo() {
  const tabItems: TabItem[] = [
    {
      id: "schemes",
      label: "Color Schemes",
      content: <TagSchemeShowcase />,
    },
    {
      id: "removable",
      label: "Removable Tags",
      content: <RemovableTagsDemo />,
    },
    {
      id: "patterns",
      label: "Usage Patterns",
      content: <UsagePatternsDemo />,
    },
  ];

  return (
    <div className="space-y-6">
      <Tabs items={tabItems} defaultActiveTab="schemes" />
    </div>
  );
}
