import axios from "axios";

export default async function fetchUser(userId: string) {
  const { data } = await axios.post(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/current`
  );

  return data;
}
