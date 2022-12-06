import axios from "axios";
import { CreateEventDto } from "../../dto/CreateEventDto";

export async function createEvent(event: CreateEventDto) {
  const { data } = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/events`,
    event
  );

  return data;
}
