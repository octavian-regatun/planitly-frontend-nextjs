import axios from "axios";
import {CreateEventDto} from "../../dto/CreateEventDto";

export async function postEvent(event: CreateEventDto) {
  try {
    const {data} = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/events`,
      event
    );

    return data;
  } catch (e) {
    console.log(e);
  }
}
