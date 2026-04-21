import { Controller, useFormContext } from "react-hook-form";
import { SelectField, type SelectFieldProps } from "../primitives/Input";

type SelectFieldRHFProps = Omit<
  SelectFieldProps,
  "value" | "onChange" | "errorMessage" | "hasError"
> & {
  name: string;
};

export const SelectFieldRHF = ({ name, ...props }: SelectFieldRHFProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <SelectField
          {...props}
          value={field.value || ""}
          onChange={field.onChange}
          errorMessage={fieldState.error?.message}
          hasError={!!fieldState.error}
        />
      )}
    />
  );
};
