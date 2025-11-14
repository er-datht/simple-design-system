import { CheckboxFieldDemo } from "./CheckboxFieldDemo";
import { Tabs } from "../ui/primitives/Tab";

export function InputDemo() {
  return (
    <Tabs
      items={[
        {
          id: "checkbox-field",
          label: "Checkbox Field",
          content: <CheckboxFieldDemo />,
        },
      ]}
      defaultActiveTab="checkbox-field"
    />
  );
}
