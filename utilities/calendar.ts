import { capitalizeFirstLetter } from "./stringUtilities";

export enum WeekDay {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

export const weekDays = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

interface FormatWeekDayOptions {
  capitalize?: boolean;
  numberOfLetters?: number;
}

export function formatWeekDay(
  weekDay: WeekDay,
  options: FormatWeekDayOptions = {
    capitalize: true,
    numberOfLetters: undefined,
  }
) {
  const { capitalize, numberOfLetters } = options;
  let formattedWeekDay = weekDays[weekDay];

  if (capitalize) formattedWeekDay = capitalizeFirstLetter(formattedWeekDay);
  if (numberOfLetters) {
    formattedWeekDay = formattedWeekDay.substring(0, numberOfLetters);
  }
  return formattedWeekDay;
}
