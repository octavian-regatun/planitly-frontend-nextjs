import {FiArrowLeft, FiArrowRight} from "react-icons/fi";
import {useCalendarStore} from "../../store/useCalendarStore";
import Button from "../Button";

type Action = "next" | "previous";

interface Props {
  action: Action;
}

export default function ChangeMonthButton({action}: Props) {
  const prevMonth = useCalendarStore((x) => x.prevMonth);
  const nextMonth = useCalendarStore((x) => x.nextMonth);

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
      onClick={handleClick}
      className="text-white h-12 w-12 rounded-full bg-indigo-900 flex justify-center items-center"
    >
      {action === "previous" ? (
        <FiArrowLeft size={24}/>
      ) : (
        <FiArrowRight size={24}/>
      )}
    </Button>
  );
}
