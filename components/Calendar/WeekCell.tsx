import { useQuery } from "@tanstack/react-query";
import { calendarStore } from "../../store/calendarStore";
import { fetchCalendar } from "../../utilities/requests/fetchCalendar";
import DayCell from "./DayCell";

interface Props {
  week: Date[];
}

export default function WeekCell(props: Props) {
  const { week } = props;

  const pickedDate = calendarStore((state) => state.date);

  function isCurrentMonth(date: Date) {
    return pickedDate.getMonth() === date.getMonth();
  }

  return (
    <div className="grid grid-cols-7 flex-1">
      {week.map((day) => (
        <DayCell
          key={`calendar-day-cell-${day.getTime()}`}
          day={day}
          isCurrentMonth={isCurrentMonth(day)}
        />
      ))}
    </div>
  );
}
