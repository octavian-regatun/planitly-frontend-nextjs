import ChangeMonthButton from "./ChangeMonthButton";
import CurrentDate from "./CurrentDate";
import DayCells from "./DayCells";
import WeekDays from "./WeekDays";

export default function Calendar() {
  return (
    <div className="flex flex-col flex-1 min-h-full bg-black bg-opacity-10">
      <div className="flex my-8 items-center justify-evenly">
        <ChangeMonthButton action="previous" />
        <CurrentDate />
        <ChangeMonthButton action="next" />
      </div>
      <WeekDays />
      <DayCells />
    </div>
  );
}
