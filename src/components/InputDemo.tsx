import { CheckboxFieldDemo } from "./CheckboxFieldDemo";
import { Tabs } from "../ui/primitives/Tab";
import RadioFieldDemo from "./RadioFieldDemo";
import RadioGroupDemo from "./RadioGroupDemo";
import SwitchFieldDemo from "./SwitchFieldDemo";
import SelectFieldDemo from "./SelectFieldDemo";
import InputFieldDemo from "./InputFieldDemo";
import TextareaFieldDemo from "./TextareaFieldDemo";
import SearchFieldDemo from "./SearchFieldDemo";
import SliderFieldDemo from "./SliderFieldDemo";
import CheckboxGroupDemo from "./CheckboxGroupDemo";

export function InputDemo() {
  return (
    <Tabs
      items={[
        {
          id: "checkbox-field",
          label: "Checkbox Field",
          content: <CheckboxFieldDemo />,
        },
        {
          id: "checkbox-group",
          label: "Checkbox Group",
          content: <CheckboxGroupDemo />,
        },
        {
          id: "radio-field",
          label: "Radio Field",
          content: <RadioFieldDemo />,
        },
        {
          id: "radio-group",
          label: "Radio Group",
          content: <RadioGroupDemo />,
        },
        {
          id: "switch-field",
          label: "Switch Field",
          content: <SwitchFieldDemo />,
        },
        {
          id: "select-field",
          label: "Select Field",
          content: <SelectFieldDemo />,
        },
        {
          id: "input-field",
          label: "Input Field",
          content: <InputFieldDemo />,
        },
        {
          id: "textarea-field",
          label: "Textarea Field",
          content: <TextareaFieldDemo />,
        },
        {
          id: "search-field",
          label: "Search Field",
          content: <SearchFieldDemo />,
        },
        {
          id: "slider-field",
          label: "Slider Field",
          content: <SliderFieldDemo />,
        },
      ]}
      defaultActiveTab="checkbox-field"
    />
  );
}
