"use client";

import { CalendarIcon } from "@radix-ui/react-icons";
import { DateTime } from "luxon";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { DayPickerSingleProps } from "react-day-picker";

export interface DatePickerProps extends Omit<DayPickerSingleProps, "mode">{
  placeholder?: string;
}

export function DatePicker({ placeholder, selected,...props }: DatePickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[240px] pl-3 text-left font-normal",
            !selected && "text-muted-foreground"
          )}
        >
          {selected ? (
            DateTime.fromJSDate(selected as Date).toLocaleString(DateTime.DATE_FULL)
          ) : (
            <span>Pick a date</span>
          )}
          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={selected}
          {...props}
        />
      </PopoverContent>
    </Popover>
  );
}
