import axios from "axios"
import { GetEventDto } from "../../dto/GetEventDto"

export async function getEventById(id: number) {
  try {
    const { data } = await axios.get<GetEventDto>(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/events/${id}`
    )

    return data
  } catch (e) {
    console.log(e)
  }
}
