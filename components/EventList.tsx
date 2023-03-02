import { useQuery } from "@tanstack/react-query"
import { fetchEvents } from "../utilities/requests/fetchEvents"
import EventCard from "./EventCard"
import Text from "./Text"

interface Props {}

export default function EventList(props: Props) {
  const eventsQuery = useQuery({
    queryKey: ["allEvents"],
    queryFn: () => fetchEvents(),
  })

  return (
    <div className="flex flex-col gap-4 text-white">
      <Text type="h3" className="text-center">
        Event List
      </Text>
      <div className="flex flex-col gap-4">
        {eventsQuery.data?.map((event) => (
          <EventCard
            key={`event-card-${event.id}`}
            id={parseInt(event.id)}
            date={new Date(event.startAt)}
            title={event.title}
            description={event.description}
            location="Location Placeholder"
          />
        ))}
      </div>
    </div>
  )
}
