import { Control, FieldValues, Path } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { DatePicker, DatePickerProps } from "./date-picker";
import { cn } from "@/lib/utils";

export interface DatePickerFormFieldProps<T extends FieldValues>
  extends DatePickerProps {
  label: string;
  name: Path<T>;
  placeholder: string;
  control: Control<T>;
}

export default function DatePickerFormField<T extends FieldValues>({
  label,
  name,
  placeholder,
  control,
  className,
  ...props
}: DatePickerFormFieldProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn("flex flex-col", className)}>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <DatePicker
              onSelect={(date) => {
                field.onChange(date);
              }}
              placeholder={placeholder}
              selected={field.value}
              {...props}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
