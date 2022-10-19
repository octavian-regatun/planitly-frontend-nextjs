import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { useCalendarStore } from "../../store/calendarStore";
import Button from "../Button";

type Action = "next" | "previous";

interface Props {
  action: Action;
}

export default function ChangeMonthButton({ action }: Props) {
  const nextMonth = useCalendarStore((x) => x.nextMonth);
  const prevMonth = useCalendarStore((x) => x.prevMonth);

  function handleClick(action: Action) {
    switch (action) {
      case "next":
        nextMonth();
        return;
      case "previous":
        prevMonth();
        return;
    }
  }

  return (
    <Button
      className="text-white h-12 w-12 rounded-full bg-indigo-900 flex justify-center items-center"
      onClick={() => handleClick(action)}
    >
      {action === "previous" ? (
        <FiArrowLeft size={24} />
      ) : (
        <FiArrowRight size={24} />
      )}
    </Button>
  );
}
