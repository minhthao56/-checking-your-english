import { DateTime } from "luxon";

export const VALUES = [
  {
    value: "date",
    label: "Date",
  },
  {
    value: "datetime",
    label: "Datetime",
  },
  {
    value: "time",
    label: "Time",
  },
  {
    value: "number",
    label: "Number",
  },
  {
    value: "letter",
    label: "Letter",
  },
  {
    value: "phone",
    label: "Phone",
  },
  {
    value: "year",
    label: "Year",
  }
]

export const randomDate = (start: Date, end: Date) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

export const randomTime = () => {
  return new Date(1000 * 60 * 60 * 24 * Math.random());
}


export const randomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min);
}

export const randomLetter = () => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return alphabet.charAt(Math.floor(Math.random() * alphabet.length));
}


export const randomNumberPhone = () => {
  return Math.floor(Math.random() * 10000000000);
}



type Options = {
  startDate: Date;
  endDate: Date;
  minNumber: number;
  maxNumber: number;
};

export const allowedDatetimeTypes = ["date", "datetime", "time", "year"];
export const allowedNumberTypes = ["number"];

export const randomValue = (type: string, option?: Options): string => {
  switch (type) {
    case "date":
      return DateTime.fromJSDate(randomDate(new Date(2021, 0, 1), new Date())).toLocaleString({
        month: "long",
        day: "2-digit",
      });
    case "datetime":
      return DateTime.fromJSDate(randomDate(new Date(2021, 0, 1), new Date())).toLocaleString({
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
      });
    case "time":
      return DateTime.fromJSDate(randomTime()).toLocaleString({
        hour: "numeric",
        minute: "numeric",
      });
    case "number":
      return randomNumber(1, 100).toString();
    case "letter":
      return randomLetter().toUpperCase();
    case "phone":
      return randomNumberPhone().toString();
    case "year":
      return randomNumber(option?.startDate.getFullYear() || 1900, option?.endDate.getFullYear()|| 2050).toString()
    default:
      return "";
  }
}