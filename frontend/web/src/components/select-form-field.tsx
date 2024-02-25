import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Control, FieldValues, Path } from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { SelectProps } from "@radix-ui/react-select";
import { cn } from "@/lib/utils";

export interface SelectFormFieldProps<T extends FieldValues>
  extends SelectProps {
  options: { value: string; label: string }[];
  name: Path<T>;
  control: Control<T>;
  label: string;
  className?: string;
  classNameSelect?: string;
}

export default function SelectFormField<T extends FieldValues>({
  options,
  control,
  name,
  label,
  className,
  classNameSelect,
  ...props
}: SelectFormFieldProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Select
              onValueChange={(value) => {
                field.onChange(value);
              }}
              {...props}
              value={field.value}
            >
              <SelectTrigger className={cn("w-[180px]", classNameSelect)}>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {options.map((value) => (
                  <SelectItem key={value.value} value={value.value}>
                    {value.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
