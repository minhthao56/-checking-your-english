"use client";
import { Button } from "@/components/ui/button";
import BoxContent from "./box-content";
import { SpeakerLoudIcon } from "@radix-ui/react-icons";
import {
  VALUES,
  allowedDatetimeTypes,
  allowedNumberTypes,
  randomValue,
} from "@/utils/reflex";
import { useForm, SubmitHandler, useWatch } from "react-hook-form";
import { useState } from "react";
import { H3 } from "../ui/h3";
import { Form } from "../ui/form";
import InputFormField from "../input-form-field";
import SelectFormField from "../select-form-field";
import DatePickerFormField from "../date-picker-form-field";

type Inputs = {
  typeData: string;
  options?: Parameters<typeof randomValue>[1];
};

const defaultValues: Inputs = {
  typeData: "date",
  options: {
    endDate: new Date(),
    startDate: new Date(2021, 0, 1),
    maxNumber: 100,
    minNumber: 1,
  },
};

export default function FormRandom() {
  const form = useForm<Inputs>({
    defaultValues,
  });

  const [value, setValue] = useState<string>("");
  const typeData = useWatch({ control: form.control, name: "typeData" });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const value = randomValue(data.typeData, data.options);
    setValue(value);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col justify-center items-center"
      >
        <SelectFormField<Inputs>
          options={VALUES}
          name="typeData"
          control={form.control}
          label="Type"
          defaultValue={defaultValues.typeData}
          className="mb-4"
        />
        {allowedNumberTypes.includes(typeData) ? (
          <div className="flex mb-4">
            <InputFormField<Inputs>
              name="options.minNumber"
              control={form.control}
              label="Min Number"
              placeholder="Min Number"
              className="mr-4"
            />
            <InputFormField<Inputs>
              name="options.maxNumber"
              control={form.control}
              label="Max Number"
              placeholder="Max Number"
            />
          </div>
        ) : null}

        {allowedDatetimeTypes.includes(typeData) ? (
          <div className="flex mb-4">
            <DatePickerFormField<Inputs>
              name="options.startDate"
              control={form.control}
              label="Start Date"
              placeholder="Start Date"
              className="mr-4"
            />
            <DatePickerFormField<Inputs>
              name="options.endDate"
              control={form.control}
              label="End Date"
              placeholder="End Date"
            />
          </div>
        ) : null}

        <BoxContent className="mb-4">
          <H3>{value}</H3>
        </BoxContent>
        <div className="flex">
          <Button type="submit" className="mr-4">
            Random
          </Button>
          <Button>
            <SpeakerLoudIcon />
          </Button>
        </div>
      </form>
    </Form>
  );
}
