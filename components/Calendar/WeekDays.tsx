import { formatWeekDay, WeekDay, weekDays } from "../../utilities/calendar";

export default function WeekDays() {
  return (
    <div className="flex text-white">
      {Object.values(WeekDay).map((weekDay, index) => {
        const isWeekDayNumber = !isNaN(Number(weekDay));

        return isWeekDayNumber ? (
          <div key={`${weekDay}-${index}`} className="flex-1 text-center py-2">
            {formatWeekDay(weekDay as WeekDay, {
              numberOfLetters: 3,
              capitalize: true,
            })}
          </div>
        ) : null;
      })}
    </div>
  );
}
