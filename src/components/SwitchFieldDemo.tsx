import { useState } from "react";
import { SwitchField } from "../ui/primitives/Input/SwitchField";

export function SwitchFieldDemo() {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <div className="space-y-4 p-4">
      <div>
        <h2 className="text-2xl font-bold mb-2">SwitchField Component</h2>
        <p className="text-gray-600 mb-6">
          A toggle input component for binary choices (on/off, true/false).
          Provides a visual switch interface for enabling or disabling features.
        </p>
      </div>

      <div className="border-2 border-dashed border-amber-400 p-6 rounded-lg">
        <p className="text-sm text-gray-500 mb-3">Unchecked</p>
        <SwitchField
          label="Dark mode"
          description="Switch to dark theme"
          valueType="Unchecked"
        />
      </div>

      <div className="border-2 border-dashed border-amber-400 p-6 rounded-lg">
        <p className="text-sm text-gray-500 mb-3">Checked</p>
        <SwitchField
          label="Email notifications"
          description="Receive email updates"
          valueType="Checked"
        />
      </div>

      <div className="border-2 border-dashed border-amber-400 p-6 rounded-lg">
        <p className="text-sm text-gray-500 mb-3">Error State</p>
        <SwitchField
          label="Feature access"
          description="Enable advanced features"
          errorMessage="This feature requires a Pro subscription"
          valueType="Unchecked"
        />
      </div>

      <div className="border-2 border-dashed border-amber-400 p-6 rounded-lg">
        <p className="text-sm text-gray-500 mb-3">Disabled - Unchecked</p>
        <SwitchField
          label="Premium feature"
          description="Available in Pro plan"
          disabled
          valueType="Unchecked"
        />
      </div>

      <div className="border-2 border-dashed border-amber-400 p-6 rounded-lg">
        <p className="text-sm text-gray-500 mb-3">Disabled - Checked</p>
        <SwitchField
          label="System setting"
          description="Managed by administrator"
          disabled
          valueType="Checked"
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Interactive Example</h3>
        <div className="border-2 border-dashed border-amber-400 p-6 rounded-lg">
          <SwitchField
            label="Auto-save"
            description="Automatically save changes as you work"
            valueType={isEnabled ? "Checked" : "Unchecked"}
            onChange={(checked) => setIsEnabled(checked)}
          />
          <p className="text-sm text-gray-500 mt-4">
            Enabled: {isEnabled ? "Yes" : "No"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SwitchFieldDemo;
