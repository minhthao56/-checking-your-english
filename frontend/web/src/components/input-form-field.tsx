import { Control, FieldValues, Path } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input, InputProps } from "./ui/input";

export interface InputFormFieldProps<T extends FieldValues> extends InputProps {
  label: string;
  name: Path<T>;
  control: Control<T>;
}

export default function InputFormField<T extends FieldValues>({
  label,
  name,
  control,
  className,
  ...rest
}: InputFormFieldProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input {...rest} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
