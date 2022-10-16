import axios from "axios";
import Event from "../../models/Event";

type ReactQuery = [string, { event: Event }];

export async function postEvent({ queryKey }: any) {
  const [_key, { event }] = queryKey;
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/events`,
      event
    );

    return res;
  } catch (e) {
    console.log(e);
  }
}
