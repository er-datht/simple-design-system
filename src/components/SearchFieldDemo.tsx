import { useState } from "react";
import { SearchField } from "../ui/primitives/Input/SearchField";

export function SearchFieldDemo() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="space-y-4 p-4">
      <div>
        <h2 className="text-2xl font-bold mb-2">SearchField Component</h2>
        <p className="text-gray-600 mb-6">
          A specialized input component for search functionality with icon
          indicators. Provides a consistent search interface across the
          application.
        </p>
      </div>

      <div className="border-2 border-dashed border-amber-400 p-6 rounded-lg">
        <p className="text-sm text-gray-500 mb-3">Placeholder</p>
        <SearchField placeholder="Search..." />
      </div>

      <div className="border-2 border-dashed border-amber-400 p-6 rounded-lg">
        <p className="text-sm text-gray-500 mb-3">With Value</p>
        <SearchField value="React components" />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Interactive Example</h3>
        <div className="border-2 border-dashed border-amber-400 p-6 rounded-lg">
          <SearchField
            placeholder="Search components..."
            value={searchValue}
            onChange={(value) => setSearchValue(value)}
            onClear={() => setSearchValue("")}
          />
          <p className="text-sm text-gray-500 mt-4">
            Query: {searchValue || "(empty)"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SearchFieldDemo;
