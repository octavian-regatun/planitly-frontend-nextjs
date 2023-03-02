import axios from "axios";
import {GetEventDto} from "../../dto/GetEventDto";

interface Options {
  isAuthor: boolean;
  isParticipant: boolean;
}

export async function fetchEvents(
  options: Options = {isAuthor: true, isParticipant: true}
) {
  try {
    const {data} = await axios.get<GetEventDto[]>(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/events`,
      {params: options}
    );

    return data;
  } catch (e) {
    console.log(e);
  }
}
