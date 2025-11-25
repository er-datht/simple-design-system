import { useState } from "react";
import { TextareaField } from "../ui/primitives/Input/TextareaField";

export function TextareaFieldDemo() {
  const [textareaValue, setTextareaValue] = useState("");

  return (
    <div className="space-y-4 p-4">
      <div>
        <h2 className="text-2xl font-bold mb-2">TextareaField Component</h2>
        <p className="text-gray-600 mb-6">
          A multi-line text input component for longer content. Ideal for
          comments, messages, descriptions, and other extended text entries.
        </p>
      </div>

      <div className="border-2 border-dashed border-amber-400 p-6 rounded-lg">
        <p className="text-sm text-gray-500 mb-3">Placeholder</p>
        <TextareaField
          label="Message"
          placeholder="Enter your message..."
          description="Maximum 500 characters"
          rows={3}
        />
      </div>

      <div className="border-2 border-dashed border-amber-400 p-6 rounded-lg">
        <p className="text-sm text-gray-500 mb-3">With Value</p>
        <TextareaField
          label="Bio"
          value="I'm a software developer passionate about creating great user experiences."
          description="Tell us about yourself"
          rows={3}
        />
      </div>

      <div className="border-2 border-dashed border-amber-400 p-6 rounded-lg">
        <p className="text-sm text-gray-500 mb-3">Error State (hasError only)</p>
        <TextareaField
          label="Review"
          placeholder="Write your review..."
          hasError={true}
          description="This field has error styling without a message"
          rows={3}
        />
      </div>

      <div className="border-2 border-dashed border-amber-400 p-6 rounded-lg">
        <p className="text-sm text-gray-500 mb-3">Error State</p>
        <TextareaField
          label="Comments"
          placeholder="Enter your comments..."
          errorMessage="Comments must be at least 10 characters long"
          description="Share your thoughts"
          rows={3}
        />
      </div>

      <div className="border-2 border-dashed border-amber-400 p-6 rounded-lg">
        <p className="text-sm text-gray-500 mb-3">Disabled State</p>
        <TextareaField
          label="Auto-generated summary"
          value="This field is automatically populated and cannot be edited."
          disabled
          description="System-generated content"
          rows={3}
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Interactive Example</h3>
        <div className="border-2 border-dashed border-amber-400 p-6 rounded-lg">
          <TextareaField
            label="Your feedback"
            placeholder="Tell us what you think..."
            value={textareaValue}
            onChange={(value) => setTextareaValue(value)}
            description="Help us improve our product"
            rows={4}
          />
          <p className="text-sm text-gray-500 mt-4">
            {textareaValue.length}/500 characters
          </p>
        </div>
      </div>
    </div>
  );
}

export default TextareaFieldDemo;
