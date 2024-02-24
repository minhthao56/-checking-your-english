"use client";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormEvent } from "react";
import BoxContent from "./box-content";
import { SpeakerLoudIcon } from "@radix-ui/react-icons";
import { VALUES } from "@/utils/reflex";

export default function FormRandom() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const handleSelect = (value: string) => {
    console.log(value);
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center"
    >
      <div className="mb-4">
        <Select defaultValue="date" onValueChange={handleSelect}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Date" />
          </SelectTrigger>
          <SelectContent>
            {VALUES.map((value) => (
              <SelectItem key={value.value} value={value.value}>
                {value.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <BoxContent className="mb-4">
        <div>Random</div>
      </BoxContent>
      <div className="flex">
        <Button type="submit" className="mr-4">Random</Button>
        <Button>
          <SpeakerLoudIcon />
        </Button>
      </div>
    </form>
  );
}
