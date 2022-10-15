import axios from "axios";

export default async function fetchUser(userId: string) {
  try {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/current`
    );

    return data;
  } catch (e) {
    console.log(e);
  }
}
