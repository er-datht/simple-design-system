import { useState } from "react";
import { CheckboxGroup } from "../ui/primitives/Input/CheckboxGroup";
import { CheckboxField } from "../ui/primitives/Input/CheckboxField";

export function CheckboxGroupDemo() {
  const [notifications, setNotifications] = useState<string[]>(["email"]);
  const [features, setFeatures] = useState<string[]>([]);
  const [permissions, setPermissions] = useState<string[]>(["read", "write"]);

  const handleNotificationToggle = (key: string, checked: boolean) => {
    setNotifications((prev) =>
      checked ? [...prev, key] : prev.filter((item) => item !== key)
    );
  };

  const handleFeatureToggle = (key: string, checked: boolean) => {
    setFeatures((prev) =>
      checked ? [...prev, key] : prev.filter((item) => item !== key)
    );
  };

  const handlePermissionToggle = (key: string, checked: boolean) => {
    setPermissions((prev) =>
      checked ? [...prev, key] : prev.filter((item) => item !== key)
    );
  };

  return (
    <div className="space-y-12 p-8">
      {/* Header */}
      <section>
        <h2 className="text-3xl font-bold mb-4">CheckboxGroup</h2>
        <p className="text-lg text-gray-600 mb-4">
          A container component that groups multiple CheckboxField components
          with consistent spacing and layout. Uses semantic fieldset/legend
          structure for better accessibility. Supports both vertical and
          horizontal layouts.
        </p>
        <p className="text-sm text-gray-500">
          <strong>Figma Source:</strong>{" "}
          <a
            href="https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=9762:1426"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            CheckboxGroup Component
          </a>
        </p>
      </section>

      {/* Basic Usage - Vertical */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">
          Basic Usage - Vertical Layout
        </h3>
        <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
          <CheckboxGroup label="Notification Preferences">
            <CheckboxField label="Email notifications" />
            <CheckboxField label="SMS alerts" />
            <CheckboxField label="Push notifications" />
          </CheckboxGroup>
        </div>
        <div className="mt-4 bg-gray-50 p-4 rounded">
          <code className="text-sm whitespace-pre">{`<CheckboxGroup label="Notification Preferences">
  <CheckboxField label="Email notifications" />
  <CheckboxField label="SMS alerts" />
  <CheckboxField label="Push notifications" />
</CheckboxGroup>`}</code>
        </div>
      </section>

      {/* Horizontal Layout */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">Horizontal Layout</h3>
        <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
          <CheckboxGroup label="Quick Options" direction="horizontal">
            <CheckboxField label="Option A" />
            <CheckboxField label="Option B" />
            <CheckboxField label="Option C" />
          </CheckboxGroup>
        </div>
        <div className="mt-4 bg-gray-50 p-4 rounded">
          <code className="text-sm whitespace-pre">{`<CheckboxGroup label="Quick Options" direction="horizontal">
  <CheckboxField label="Option A" />
  <CheckboxField label="Option B" />
  <CheckboxField label="Option C" />
</CheckboxGroup>`}</code>
        </div>
      </section>

      {/* Without Label */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">Without Label</h3>
        <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
          <CheckboxGroup>
            <CheckboxField
              label="Terms and Conditions"
              description="I agree to the terms and conditions"
            />
            <CheckboxField
              label="Privacy Policy"
              description="I have read the privacy policy"
            />
            <CheckboxField
              label="Marketing Emails"
              description="I want to receive promotional emails"
            />
          </CheckboxGroup>
        </div>
      </section>

      {/* With Descriptions */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">With Descriptions</h3>
        <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
          <CheckboxGroup label="Privacy Settings">
            <CheckboxField
              label="Public Profile"
              description="Make your profile visible to other users"
            />
            <CheckboxField
              label="Show Email"
              description="Display your email address on your profile"
            />
            <CheckboxField
              label="Activity Status"
              description="Show when you're online"
            />
          </CheckboxGroup>
        </div>
      </section>

      {/* Mixed States */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">Mixed States</h3>
        <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
          <CheckboxGroup label="Feature Access">
            <CheckboxField
              label="Basic Features"
              description="Access to core functionality"
              valueType="Checked"
            />
            <CheckboxField
              label="Premium Features"
              description="Advanced tools and integrations"
              disabled
              valueType="Unchecked"
            />
            <CheckboxField
              label="Beta Features"
              description="Early access to experimental features"
              errorMessage="Beta program is currently full"
              valueType="Unchecked"
            />
          </CheckboxGroup>
        </div>
      </section>

      {/* Interactive Example - Notification Settings */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">
          Interactive Example - Notification Settings
        </h3>
        <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
          <CheckboxGroup label="How would you like to be notified?">
            <CheckboxField
              label="Email"
              description="Receive updates via email"
              valueType={
                notifications.includes("email") ? "Checked" : "Unchecked"
              }
              onChange={(checked) => handleNotificationToggle("email", checked)}
            />
            <CheckboxField
              label="SMS"
              description="Get text message notifications"
              valueType={
                notifications.includes("sms") ? "Checked" : "Unchecked"
              }
              onChange={(checked) => handleNotificationToggle("sms", checked)}
            />
            <CheckboxField
              label="Push Notifications"
              description="Browser and mobile push notifications"
              valueType={
                notifications.includes("push") ? "Checked" : "Unchecked"
              }
              onChange={(checked) => handleNotificationToggle("push", checked)}
            />
            <CheckboxField
              label="In-App"
              description="Notifications within the application"
              valueType={
                notifications.includes("inapp") ? "Checked" : "Unchecked"
              }
              onChange={(checked) => handleNotificationToggle("inapp", checked)}
            />
          </CheckboxGroup>
          <p className="text-sm text-gray-500 mt-4">
            Active channels:{" "}
            <strong>
              {notifications.length > 0 ? notifications.join(", ") : "None"}
            </strong>
          </p>
        </div>
        <div className="mt-4 bg-gray-50 p-4 rounded">
          <code className="text-sm whitespace-pre">{`const [notifications, setNotifications] = useState<string[]>(["email"]);

<CheckboxGroup label="How would you like to be notified?">
  <CheckboxField
    label="Email"
    valueType={notifications.includes("email") ? "Checked" : "Unchecked"}
    onChange={(checked) => handleToggle("email", checked)}
  />
  {/* ... more checkboxes */}
</CheckboxGroup>`}</code>
        </div>
      </section>

      {/* Real-world Example - User Permissions */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">
          Real-world Example - User Permissions
        </h3>
        <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
          <div className="space-y-6">
            <CheckboxGroup label="Document Permissions">
              <CheckboxField
                label="Read"
                description="View document contents"
                valueType={
                  permissions.includes("read") ? "Checked" : "Unchecked"
                }
                onChange={(checked) => handlePermissionToggle("read", checked)}
              />
              <CheckboxField
                label="Write"
                description="Edit and modify documents"
                valueType={
                  permissions.includes("write") ? "Checked" : "Unchecked"
                }
                onChange={(checked) => handlePermissionToggle("write", checked)}
              />
              <CheckboxField
                label="Delete"
                description="Remove documents permanently"
                valueType={
                  permissions.includes("delete") ? "Checked" : "Unchecked"
                }
                onChange={(checked) =>
                  handlePermissionToggle("delete", checked)
                }
              />
              <CheckboxField
                label="Share"
                description="Share documents with other users"
                valueType={
                  permissions.includes("share") ? "Checked" : "Unchecked"
                }
                onChange={(checked) => handlePermissionToggle("share", checked)}
              />
            </CheckboxGroup>
            <p className="text-sm text-gray-600">
              Permissions granted: <strong>{permissions.length} of 4</strong>
              <br />
              <span className="text-xs text-gray-500">
                ({permissions.length > 0 ? permissions.join(", ") : "none"})
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Example - Feature Toggles */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">
          Real-world Example - Feature Toggles
        </h3>
        <div className="border-2 border-dashed border-amber-400 p-8 rounded-lg">
          <CheckboxGroup label="Enable Features" direction="vertical">
            <CheckboxField
              label="Dark Mode"
              description="Switch to dark theme"
              valueType={
                features.includes("darkMode") ? "Checked" : "Unchecked"
              }
              onChange={(checked) => handleFeatureToggle("darkMode", checked)}
            />
            <CheckboxField
              label="Keyboard Shortcuts"
              description="Enable keyboard navigation"
              valueType={
                features.includes("shortcuts") ? "Checked" : "Unchecked"
              }
              onChange={(checked) => handleFeatureToggle("shortcuts", checked)}
            />
            <CheckboxField
              label="Auto-save"
              description="Automatically save changes"
              valueType={
                features.includes("autosave") ? "Checked" : "Unchecked"
              }
              onChange={(checked) => handleFeatureToggle("autosave", checked)}
            />
            <CheckboxField
              label="Analytics"
              description="Help improve the product with usage data"
              valueType={
                features.includes("analytics") ? "Checked" : "Unchecked"
              }
              onChange={(checked) => handleFeatureToggle("analytics", checked)}
            />
          </CheckboxGroup>
          <p className="text-sm text-gray-500 mt-4">
            Enabled features: <strong>{features.length}</strong>
          </p>
        </div>
      </section>
    </div>
  );
}

export default CheckboxGroupDemo;
