import { useState } from "react";
import { InputField } from "../ui/primitives/Input/InputField";

export function InputFieldDemo() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="space-y-4 p-4">
      <div>
        <h2 className="text-2xl font-bold mb-2">InputField Component</h2>
        <p className="text-gray-600 mb-6">
          A single-line text input component with labels, error states, and
          descriptions. Supports various input types like text, email, password,
          and more.
        </p>
      </div>

      <div className="border-2 border-dashed border-amber-400 p-6 rounded-lg">
        <p className="text-sm text-gray-500 mb-3">Placeholder</p>
        <InputField
          label="Email"
          placeholder="you@example.com"
          description="We'll never share your email"
        />
      </div>

      <div className="border-2 border-dashed border-amber-400 p-6 rounded-lg">
        <p className="text-sm text-gray-500 mb-3">With Value</p>
        <InputField
          label="Email"
          value="john@example.com"
          description="Your registered email"
        />
      </div>

      <div className="border-2 border-dashed border-amber-400 p-6 rounded-lg">
        <p className="text-sm text-gray-500 mb-3">Error State (hasError only)</p>
        <InputField
          label="Username"
          placeholder="Enter username"
          hasError={true}
          description="This field has an error"
        />
      </div>

      <div className="border-2 border-dashed border-amber-400 p-6 rounded-lg">
        <p className="text-sm text-gray-500 mb-3">Error with Message</p>
        <InputField
          label="Password"
          type="password"
          placeholder="Enter password"
          errorMessage="Password must be at least 8 characters"
        />
      </div>

      <div className="border-2 border-dashed border-amber-400 p-6 rounded-lg">
        <p className="text-sm text-gray-500 mb-3">Disabled State</p>
        <InputField
          label="Account ID"
          value="ACC-12345"
          disabled={true}
          description="This field cannot be edited"
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Interactive Example</h3>
        <div className="border-2 border-dashed border-amber-400 p-6 rounded-lg">
          <InputField
            label="Full Name"
            placeholder="Enter your name"
            value={inputValue}
            onChange={(value) => setInputValue(value)}
            description="As it appears on your ID"
          />
          <p className="text-sm text-gray-500 mt-4">
            Value: {inputValue || "(empty)"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default InputFieldDemo;
