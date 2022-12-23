import { useQuery } from "@tanstack/react-query";
import { useCalendarStore } from "../../store/useCalendarStore";
import { fetchCalendar } from "../../utilities/requests/fetchCalendar";
import WeekCell from "./WeekCell";

export default function WeekCells() {
  const pickedDate = useCalendarStore((x) => x.date);

  const calendarQuery = useQuery({
    queryKey: ["calendar", pickedDate.getMonth(), pickedDate.getFullYear()],
    queryFn: () =>
      fetchCalendar(pickedDate.getFullYear(), pickedDate.getMonth()),
  });

  return (
    <div className="grid grid-rows-6 flex-1">
      {calendarQuery.data?.map((week, index) => (
        <WeekCell key={`calendar-week-${index}`} week={week} />
      ))}
    </div>
  );
}