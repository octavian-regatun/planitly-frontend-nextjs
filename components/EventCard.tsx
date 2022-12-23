import { format } from "date-fns";
import Button from "./Button";
import Text from "./Text";

interface Props {
  title: string;
  date: Date;
  location: string;
  description: string;
}

export default function EventCard(props: Props) {
  const { title, date, location, description } = props;
  return (
    <div className="bg-gradient-to-br from-purple-900 via-purple-800 to-violet-700 rounded drop-shadow p-4 flex gap-4">
      <div className="flex flex-col flex-1">
        <p className="text-gray-300 text-sm -mb-1">
          {format(date, "eeee, dd.MM.yyyy")}
        </p>
        <Text type="h6">{title}</Text>
        <p className="text-gray-300 text-sm">{location}</p>
        <p className="leading-4 mb-2 mt-1">{description}</p>
        <button className="px-4 py-1 mt-2 rounded-full bg-white text-black hover:bg-opacity-75 w-fit">
          View Event
        </button>
      </div>
      <div className="flex-1">
        <img
          className="w-full h-full object-cover"
          src="https://img.freepik.com/premium-vector/2023-happy-new-year-glassmorphism-concept-template-vector-design_560113-82.jpg?w=2000"
        />
      </div>
    </div>
  );
}
