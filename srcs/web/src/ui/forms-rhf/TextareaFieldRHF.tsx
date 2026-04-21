import { Controller, useFormContext } from "react-hook-form";
import { TextareaField, type TextareaFieldProps } from "../primitives/Input";

type TextareaFieldRHFProps = Omit<
  TextareaFieldProps,
  "value" | "onChange" | "errorMessage" | "hasError"
> & {
  name: string;
};

export const TextareaFieldRHF = ({ name, ...props }: TextareaFieldRHFProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <TextareaField
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
