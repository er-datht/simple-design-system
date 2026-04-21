import { Controller, useFormContext } from "react-hook-form";
import { CheckboxField, type CheckboxFieldProps } from "../primitives/Input";

type CheckboxFieldRHFProps = Omit<
  CheckboxFieldProps,
  "isChecked" | "onChange" | "errorMessage"
> & {
  name: string;
};

export const CheckboxFieldRHF = ({ name, ...props }: CheckboxFieldRHFProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <CheckboxField
          {...props}
          isChecked={field.value || false}
          onChange={field.onChange}
          errorMessage={fieldState.error?.message}
        />
      )}
    />
  );
};
