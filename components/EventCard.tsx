import { format } from "date-fns"
import Link from "next/link"
import Text from "./Text"

interface Props {
  id: number
  title: string
  date: Date
  location: string
  description: string
}

export default function EventCard(props: Props) {
  const { id, title, date, location, description } = props
  return (
    <div className="flex gap-4 rounded bg-gradient-to-br from-purple-900 via-purple-800 to-violet-700 p-4 drop-shadow">
      <div className="flex flex-1 flex-col">
        <p className="-mb-1 text-sm text-gray-300">
          {format(date, "eeee, dd.MM.yyyy")}
        </p>
        <Text type="h6">{title}</Text>
        <p className="text-sm text-gray-300">{location}</p>
        <p className="mb-2 mt-1 leading-4">{description}</p>
        <Link href={`/events/${id}`}>
          <button className="mt-2 w-fit rounded-full bg-white px-4 py-1 text-black hover:bg-opacity-75">
            View Event
          </button>
        </Link>
      </div>
      <div className="flex-1">
        <img
          className="h-full w-full object-cover"
          src="https://img.freepik.com/premium-vector/2023-happy-new-year-glassmorphism-concept-template-vector-design_560113-82.jpg?w=2000"
          alt="photo"
        />
      </div>
    </div>
  )
}
