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
  ] as const;

export const randomDate = (start: Date, end: Date) => {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
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


export const randomValue = (type: string) => {
    switch (type) {
        case "date":
            return randomDate(new Date(2021, 0, 1), new Date());
        case "datetime":
            return randomDate(new Date(2021, 0, 1), new Date());
        case "time":
            return randomDate(new Date(2021, 0, 1), new Date());
        case "number":
            return randomNumber(1, 100);
        case "letter":
            return randomLetter();
        case "phone":
            return randomNumberPhone();
        default:
            return "";
    }
}