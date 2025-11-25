import { useState } from "react";
import { SelectField } from "../ui/primitives/Input/SelectField";

const countryOptions = [
  { label: "United States", value: "us" },
  { label: "Canada", value: "ca" },
  { label: "United Kingdom", value: "uk" },
  { label: "Germany", value: "de" },
  { label: "France", value: "fr" },
];

export function SelectFieldDemo() {
  const [selectedCountry, setSelectedCountry] = useState("");

  return (
    <div className="space-y-4 p-4">
      <div>
        <h2 className="text-2xl font-bold mb-2">SelectField Component</h2>
        <p className="text-gray-600 mb-6">
          A dropdown selection component with optional error states and
          descriptions. Allows users to choose one option from a list.
        </p>
      </div>

      <div className="border-2 border-dashed border-amber-400 p-6 rounded-lg">
        <p className="text-sm text-gray-500 mb-3">Placeholder</p>
        <SelectField
          label="Country"
          options={countryOptions}
          placeholder="Select your country"
          description="Choose your location"
        />
      </div>

      <div className="border-2 border-dashed border-amber-400 p-6 rounded-lg">
        <p className="text-sm text-gray-500 mb-3">With Value</p>
        <SelectField
          label="Country"
          options={countryOptions}
          value="us"
          description="Selected country"
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Interactive Example</h3>
        <div className="border-2 border-dashed border-amber-400 p-6 rounded-lg">
          <SelectField
            label="Select your country"
            options={countryOptions}
            value={selectedCountry}
            onChange={(value) => setSelectedCountry(value)}
            description="This will be used for shipping"
            placeholder="Choose a country"
          />
          <p className="text-sm text-gray-500 mt-4">
            Selected: {selectedCountry || "(none)"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SelectFieldDemo;
