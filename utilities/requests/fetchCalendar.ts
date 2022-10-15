import axios from "axios";

export async function fetchCalendar(year: number, month: number) {
  const { data } = await axios.get<string[] | undefined>(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/calendar/${year}/${month + 1}`
  );

  return data ? parseCalendarData(data) : undefined;
}

function parseCalendarData(calendar: string[]) {
  return calendar.map((date) => new Date(date));
}

export enum Month {
  JANUARY,
  FEBRUARY,
  MARCH,
  APRIL,
  MAY,
  JUNE,
  JULY,
  AUGUST,
  SEPTEMBER,
  OCTOBER,
  NOVEMBER,
  DECEMBER,
}
