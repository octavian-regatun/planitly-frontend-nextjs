import { format } from "date-fns";
import { useCalendarStore } from "../../store/calendarStore";
import Text from "../Text";
export default function CurrentDate() {
  const currentDate = useCalendarStore((x) => x.date);

  return (
    <Text type="h3" className="text-white text-center">
      {format(currentDate, "LLLL, yyyy")}
    </Text>
  );
}
