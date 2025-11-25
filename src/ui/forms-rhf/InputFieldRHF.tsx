import { Controller, useFormContext } from "react-hook-form";
import { InputField, type InputFieldProps } from "../primitives/Input";

type InputFieldRHFProps = Omit<
  InputFieldProps,
  "value" | "onChange" | "errorMessage" | "hasError"
> & {
  name: string;
};

export const InputFieldRHF = ({ name, ...props }: InputFieldRHFProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <InputField
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
