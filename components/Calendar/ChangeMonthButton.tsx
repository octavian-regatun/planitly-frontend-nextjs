import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { calendarStore } from "../../store/calendarStore";
import Button from "../Button";

interface Props {
  action: "previous" | "next";
}

export default function ChangeMonthButton({ action }: Props) {
  const nextMonth = calendarStore((x) => x.nextMonth);
  const prevMonth = calendarStore((x) => x.prevMonth);

  function handleClick() {
    switch (action) {
      case "previous":
        prevMonth();
        break;
      case "next":
        nextMonth();
        break;
    }
  }

  return (
    <Button
      className="text-white h-12 w-12 rounded-full bg-indigo-900 flex justify-center items-center"
      onClick={handleClick}
    >
      {action === "previous" ? (
        <FiArrowLeft size={24} />
      ) : (
        <FiArrowRight size={24} />
      )}
    </Button>
  );
}
