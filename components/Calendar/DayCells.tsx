import { useQuery } from "@tanstack/react-query";
import { calendarStore } from "../../store/calendarStore";
import { fetchCalendar } from "../../utilities/requests/fetchCalendar";
import DayCell from "./DayCell";

export default function DayCells() {
  const currentDate = calendarStore((x) => x.date);

  const calendarQuery = useQuery(
    ["calendar"],
    async () =>
      await fetchCalendar(currentDate.getFullYear(), currentDate.getMonth())
  );

  function isCurrentMonth(date: Date) {
    return new Date().getMonth() === date.getMonth();
  }

  return (
    <div className="grid grid-rows-6 grid-cols-7 flex-1">
      {calendarQuery.data?.map((date) => (
        <DayCell
          key={`calendar-day-cell-${date.getTime()}`}
          day={date}
          isCurrentMonth={isCurrentMonth(date)}
        />
      ))}
    </div>
  );
}
