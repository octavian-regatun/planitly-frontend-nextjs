import axios from "axios";

export default async function fetchUser(id: number) {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/${id}`
    );

    return data;
  } catch (e) {
    console.log(e);
  }
}
