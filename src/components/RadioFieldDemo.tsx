import { useState } from "react";
import { RadioField } from "../ui/primitives/Input/RadioField";

export function RadioFieldDemo() {
  const [selectedSize, setSelectedSize] = useState<string>("");

  return (
    <div className="space-y-4 p-4">
      <div>
        <h2 className="text-2xl font-bold mb-2">RadioField Component</h2>
        <p className="text-gray-600 mb-6">
          A composite form component for single-selection input using radio
          buttons. Users can select only one option from a group.
        </p>
      </div>

      <div className="border-2 border-dashed border-amber-400 p-6 rounded-lg">
        <p className="text-sm text-gray-500 mb-3">Unchecked</p>
        <RadioField
          label="Small"
          description="Select small size"
          name="size-demo"
          isChecked={false}
        />
      </div>

      <div className="border-2 border-dashed border-amber-400 p-6 rounded-lg">
        <p className="text-sm text-gray-500 mb-3">Checked</p>
        <RadioField
          label="Medium"
          description="Select medium size"
          name="size-demo"
          isChecked
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Interactive Example</h3>
        <div className="border-2 border-dashed border-amber-400 p-6 rounded-lg">
          <div className="space-y-2">
            <RadioField
              label="Small"
              name="size-interactive"
              isChecked={selectedSize === "small"}
              onChange={() => setSelectedSize("small")}
            />
            <RadioField
              label="Medium"
              name="size-interactive"
              isChecked={selectedSize === "medium"}
              onChange={() => setSelectedSize("medium")}
            />
            <RadioField
              label="Large"
              name="size-interactive"
              isChecked={selectedSize === "large"}
              onChange={() => setSelectedSize("large")}
            />
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Selected: {selectedSize || "(none)"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default RadioFieldDemo;
