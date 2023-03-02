import axios from "axios";
import {LatLon} from "../../store/currentLocationStore";

export async function fetchLocation(ip: string) {
  try {
    const {data} = await axios.get<LatLon>(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/location/${ip}`
    );

    return data;
  } catch (e) {
    console.log(e);
  }
}
