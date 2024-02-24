// Random date
// Date: March 2021
export const randomDate = (start: Date, end: Date) => {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

export const randomHour = () => {
    return Math.floor(Math.random() * 24);
}

export const randDateTime = () => {
    const start = new Date(2021, 0, 1);
    const end = new Date();
    const date = randomDate(start, end);
    const hour = randomHour();
    date.setHours(hour);
    return date;
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