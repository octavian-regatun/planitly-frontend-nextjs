import axios from "axios";

export async function fetchCalendar(year: number, month: number) {
  const {data} = await axios.get<string[][]>(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/calendar/generate`,
    {
      params: {
        month: month + 1,
        year,
      },
    }
  );

  return data ? parseCalendarData(data) : undefined;
}

function parseCalendarData(calendar: string[][]) {
  return calendar.map((week) => {
    return week.map((day) => {
      return new Date(day);
    });
  });
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
